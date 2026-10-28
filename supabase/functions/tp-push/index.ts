// Envia os avisos agendados (push) do app Estudos Transpetro 2026.
// Chamado a cada 15 min pelo pg_cron com o cabeçalho x-tp-key. Cada inscrição guarda o
// próprio plano (lista de {t, ti, b, u}) montado pelo app; aqui só se envia o que venceu.
import webpush from "npm:web-push@3.6.7";
import { createClient } from "npm:@supabase/supabase-js@2";

const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);

Deno.serve(async (req) => {
  const { data: cfg } = await sb.from("push_cfg").select("k,v");
  const c = Object.fromEntries((cfg || []).map((r: { k: string; v: string }) => [r.k, r.v]));
  if (!c.cron_key || req.headers.get("x-tp-key") !== c.cron_key) return new Response("forbidden", { status: 403 });
  webpush.setVapidDetails("https://pedro1105.github.io/estudos-transpetro/", c.vapid_pub, c.vapid_priv);
  const now = Date.now();
  const { data: subs } = await sb.from("push_subs").select("ep,sub,plan,sent").eq("dead", false);
  let sent = 0, dead = 0;
  for (const s of subs || []) {
    const due = (Array.isArray(s.plan) ? s.plan : []).filter((x: { t: number }) => x && x.t > s.sent && x.t <= now && x.t > now - 3 * 3600e3);
    if (!due.length) continue;
    const x = due[due.length - 1];
    const msg = JSON.stringify({ title: String(x.ti || "Estudos Transpetro").slice(0, 80), body: String(x.b || "").slice(0, 240), url: String(x.u || "./").slice(0, 60), tag: "tp26-" + x.t });
    try {
      await webpush.sendNotification(s.sub, msg, { TTL: 3 * 3600 });
      sent++;
      await sb.from("push_subs").update({ sent: now }).eq("ep", s.ep);
    } catch (e) {
      const code = (e as { statusCode?: number }).statusCode;
      if (code === 404 || code === 410 || code === 400 || code === 403) { dead++; await sb.from("push_subs").update({ dead: true, sent: now }).eq("ep", s.ep); }
    }
  }
  return new Response(JSON.stringify({ subs: (subs || []).length, sent, dead }), { headers: { "Content-Type": "application/json" } });
});
