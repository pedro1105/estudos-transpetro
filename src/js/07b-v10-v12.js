/* ---------- 11. v10: questões de outras provas Cesgranrio ---------- */
/* duplicadas ocultas: o progresso continua guardado pelo índice */
[579,590,580,583,585,620,591,601,593].forEach(i=>{if(Q[i])Q[i].hid=1;});
Q10.forEach(q=>{q.c=q[0];Q.push(q);});
const SRC_ORD=["Transpetro 2018 Suprimento","Transpetro 2012 Suprimento","Transpetro 2012 Contabilidade","Transpetro 2011 Contabilidade","Petrobras 2017","Petrobras 2014","Petrobras 2012","Petrobras 2010","BB 2023","BB 2021","BB 2018","BB 2012","BB 2010"];
function srcCount(s){return QI().filter(i=>Q[i][4]===s).length;}
function startSrc(s){
  const ord=["port","mat"], g=i=>{const x=ord.indexOf(Q[i].c);return x<0?2:x;};
  const ids=QI().filter(i=>Q[i][4]===s).sort((a,b)=>g(a)-g(b)||Q[a][5]-Q[b][5]);
  makeQuiz(ids,"train","Cesgranrio · "+s,0);
}

/* ---------- 13. v10: cronograma dia a dia ---------- */
// [foco, assunto da teoria, o que estudar, assunto das questões extras, gerais (cat), tema das gerais, especial]
const AG={
"2026-10-27":["Diagnóstico: prova 2018","","","","","","past:2018"],
"2026-10-28":["Logística I","log","Conceitos de logística e cadeia de suprimentos; efeito chicote; SLA; ECR, CRM, VMI, EDI; logística reversa e verde","log","port","Crase",""],
"2026-10-29":["Diagnóstico: prova 2012","","","","","","past:2012"],
"2026-10-30":["Estoques I","estoq","Classificação dos estoques; curva ABC; LEC; ponto de pedido; estoque de segurança; demanda dependente × independente","estoq","mat","Porcentagem e regra de três",""],
"2026-10-31":["Diagnóstico: prova 2011","","","","","","past:2011"],
"2026-11-01":["Estoques II e revisão da semana","estoq","PEPS × custo médio; giro e cobertura; MRP, JIT e kanban; inventário geral × rotativo; RFID e código de barras","log","port","Concordância verbal e nominal","rev"],
"2026-11-02":["Compras e dispensa/inexigibilidade","compras","Planejamento e modalidades de compras; single × multi-sourcing; Lei 13.303, arts. 28 a 30 (dispensa, inexigibilidade)","compras","mat","Equações de 1º e 2º grau",""],
"2026-11-03":["Lei 13.303: licitação","compras","Lei 13.303, arts. 31 a 67: procedimento (art. 51), prazos do art. 39, critérios de julgamento, registro de preços","compras","port","Pontuação",""],
"2026-11-04":["Lei 13.303: contratos","contr","Lei 13.303, arts. 68 a 91: duração (art. 71), alterações e limites de 25% e 50% (art. 81), sanções (art. 83)","contr","mat","Sistemas lineares","mini"],
"2026-11-05":["Lei 14.133","compras","Modalidades (pregão, concorrência, concurso, leilão, diálogo competitivo); fases; agente de contratação","compras","port","Coesão e conectivos",""],
"2026-11-06":["Gestão de contratos","contr","Ciclo de vida do contrato; fiscal × gestor; aditivo × apostilamento; riscos; contratos digitais","contr","mat","Razão, proporção e regra de três composta",""],
"2026-11-07":["Transportes","transp","Modais e suas vantagens; cabotagem; intermodal × multimodal (OTM); ANTT, ANTAQ e ANAC","transp","port","Ortografia e hífen","src:Transpetro 2018 Suprimento"],
"2026-11-08":["Simulado completo nº 1","","","","","","sim"],
"2026-11-09":["Armazenagem","armaz","Tipos de armazém; layout; endereçamento fixo × livre; cross-docking; WMS; porta-paletes, drive-in × drive-through","armaz","mat","Análise combinatória",""],
"2026-11-10":["Manuseio e embalagem","manus","Equipamentos de movimentação; princípios; unitização; palete PBR; funções da embalagem; segurança no transporte","manus","port","Classes de palavras",""],
"2026-11-11":["RH I","rh","Recrutamento e seleção; cargos e carreira; treinamento, desenvolvimento e educação (Kirkpatrick)","rh","mat","Probabilidade","mini"],
"2026-11-12":["RH II","rh","Avaliação de desempenho e seus métodos; competências (CHA); relações de trabalho e benefícios","rh","port","Significação das palavras",""],
"2026-11-13":["Sistema de Gestão Integrado","sgi","ISO 9001, 14001 e 45001; PDCA; auditoria interna (ISO 19011); correção × ação corretiva; ISO 31000; ferramentas da qualidade","sgi","mat","Estatística: média, mediana e moda",""],
"2026-11-14":["Patrimônio e manutenção","patr","Patrimônio: tombamento, inventário, classificação, depreciação. Manutenção: corretiva, preventiva, preditiva, MTBF, MTTR, PCM","manut","mat","Estatística: variância e desvio padrão",""],
"2026-11-15":["Simulado completo nº 2","","","","","","sim"],
"2026-11-16":["Indicadores e ESG","ind","Eficiência × eficácia × efetividade; BSC; metas SMART; indicadores ESG e escopos de emissão","ind","mat","Funções e logaritmos",""],
"2026-11-17":["Matemática financeira I","matfin","Porcentagem e aumentos sucessivos; juros simples; desconto comercial × racional","matfin","port","Interpretação de texto",""],
"2026-11-18":["Matemática financeira II","matfin","Juros compostos; taxas equivalentes, nominal × efetiva, taxa real","matfin","mat","Juros simples e compostos","mini"],
"2026-11-19":["Registros contábeis","contab","Princípios e competência × caixa; partidas dobradas e natureza das contas; livros; SPED, ECD e ECF","contab","port","Crase e regência",""],
"2026-11-20":["Balanço e DRE (feriado)","bp","Estrutura do BP; circulante × não circulante; PL e reservas; DRE da receita bruta ao lucro; CMV e RCM","bp","port","Concordância (revisão)","law"],
"2026-11-21":["Fluxo de caixa","fluxo","DFC direta × indireta; atividades operacionais, de investimento e de financiamento; capital de giro; orçamento","fluxo","mat","Geometria plana","src:Transpetro 2012 Contabilidade"],
"2026-11-22":["Simulado completo nº 3","","","","","","sim"],
"2026-11-23":["Informática: Windows 11","info","Hardware e software; processadores; Windows 11: atalhos, Explorador de Arquivos, manipulação de arquivos","info","mat","Geometria espacial",""],
"2026-11-24":["Informática: Word e PowerPoint","info","Word e PowerPoint (Office 2024): guias, recursos, revisão, histórico de versões","info","port","Interpretação de texto",""],
"2026-11-25":["Simulado completo nº 4 + Excel","info","Excel: referências relativas, absolutas e mistas; SE, SOMASE, CONT.SE, PROCV, PROCX; validação e formatação condicional","info","","","sim"],
"2026-11-26":["Redes e segurança","lgpd","Internet × intranet; navegadores; malware, phishing, backup, firewall, VPN, assinatura digital","lgpd","mat","Revisão: porcentagem e equações",""],
"2026-11-27":["LGPD","lgpd","Lei 13.709: bases legais, dados sensíveis, direitos do titular, controlador × operador × encarregado, ANPD","lgpd","port","Revisão: pontuação e coesão",""],
"2026-11-28":["Ataque aos pontos fracos","","","","","","weak"],
"2026-11-29":["Simulado completo nº 5","","","","","","sim"],
"2026-11-30":["Revisão: logística","log","Pegadinhas e flashcards de Logística, Estoques, Transportes e Armazenagem","estoq","mat","Revisão: combinatória e probabilidade",""],
"2026-12-01":["Revisão: leis","compras","Lei seca da 13.303 e pontos mais cobrados da 14.133. Imprimir o Cartão de Confirmação de Inscrição","contr","port","Revisão: crase e concordância","law"],
"2026-12-02":["Simulado final no horário da prova","","","","","","sim"],
"2026-12-03":["Correção do simulado e revisão final","","","","","","weak"],
"2026-12-04":["Revisão da véspera","","","","","","rest"],
"2026-12-05":["Descanso ativo","","","","","","rest"],
"2026-12-06":["DIA DA PROVA","","","","","","exam"]
};
const _dayPlan6=dayPlan, _dayItems6=dayItems;
dayPlan=function(k){
  const p=_dayPlan6(k), a=AG[k];
  if(!a) return p;
  p.ag=a; p.foco=a[0];
  if(a[1]) p.a=a[1];
  if(a[3]) p.b=a[3];
  if(a[4]) p.g=a[4];
  const sp=a[6];
  p.sp=null; p.rest=sp==="rest"; p.exam=sp==="exam";
  if(sp.startsWith("past:")) p.sp={t:"Prova Transpetro "+sp.slice(5)+" completa (diagnóstico)",fn:`startPast('${sp.slice(5)}')`};
  if(sp==="sim") p.sp={t:"Simulado completo de 60 questões no modo prova real (4 h)",fn:"startReal('full')"};
  if(sp==="mini") p.sp={t:"Mini simulado de 20 questões",fn:"startExam('mini')"};
  return p;
};
function weakest(){return weakCats(1)[0];}
dayItems=function(p){
  const a=p.ag;
  if(!a) return _dayItems6(p);
  const sp=a[6], it=[];
  if(p.exam) return [{id:"prova",t:"Dia da prova: chegar 1 hora antes, com documento original com foto e caneta preta de corpo transparente. Errar não desconta: não deixe nada em branco."}];
  if(p.rest){
    it.push({id:"res",t:"Reler a revisão da véspera e os resumos dos 3 assuntos mais fracos: "+weakCats(3).map(k=>CATS[k].n).join(", "),act:"go('vesp')",lbl:"Abrir"});
    it.push({id:"cad",t:"Reler o caderno de erros, sem fazer questões novas",act:"go('caderno')",lbl:"Abrir"});
    if(p.k==="2026-12-05") it.push({id:"sep",t:"Separar documento com foto, caneta preta de corpo transparente e cartão de confirmação; conferir trajeto e horário"});
    it.push({id:"sono",t:"Dormir de 7 a 8 horas"});
    return it;
  }
  it.push({id:"aq",t:"1. Aquecimento (10 min): revisão espaçada das questões erradas",act:"startWrong()",lbl:"Revisar"});
  if(p.sp){
    it.push({id:"sim",t:"2. "+p.sp.t,act:p.sp.fn,lbl:"Começar"});
    if(sp==="sim"||sp.startsWith("past:")) it.push({id:"cor",t:"3. Correção (40 min): ler a explicação de cada erro e anotar o motivo no caderno de erros",act:"go('caderno')",lbl:"Abrir"});
  }
  if(sp==="weak"){
    const w=weakCats(2);
    it.push({id:"teo",t:"2. Teoria (30 min): resumo de "+CATS[w[0]].n+", o assunto com pior acerto",act:`openTopic('${w[0]}')`,lbl:"Resumo"});
    it.push({id:"q1",t:"3. Questões (40 min): treino de "+CATS[w[0]].n,act:`startTrainCat('${w[0]}')`,lbl:"Treinar"});
    it.push({id:"q2",t:"4. Questões (40 min): treino de "+CATS[w[1]].n,act:`startTrainCat('${w[1]}')`,lbl:"Treinar"});
    it.push({id:"cad",t:"5. Caderno de erros (15 min): refazer as erradas da semana",act:"go('caderno')",lbl:"Abrir"});
    return it;
  }
  let n=it.length+1;
  if(a[1]){
    it.push({id:"teo",t:`${n++}. Teoria (30 min): ${a[2]}. Depois feche o resumo e escreva de memória 3 a 5 pontos`,act:`openTopic('${a[1]}')`,lbl:"Resumo"});
    it.push({id:"q1",t:`${n++}. Questões (30 min): treino de ${CATS[a[1]].n}`,act:`startTrainCat('${a[1]}')`,lbl:"Treinar"});
    if(sp==="law") it.push({id:"lei",t:`${n++}. Lei seca (20 min): jogo Lei seca e treino da Lei 13.303 artigo por artigo`,act:"startLaw()",lbl:"Treinar"});
    else if(sp.startsWith("src:")) it.push({id:"src",t:`${n++}. Prova real (30 min): questões da ${sp.slice(4)}`,act:`startSrc('${sp.slice(4)}')`,lbl:"Treinar"});
    else if(a[3]&&a[3]!==a[1]) it.push({id:"q2",t:`${n++}. Questões (15 min): treino de ${CATS[a[3]].n}, para misturar temas`,act:`startTrainCat('${a[3]}')`,lbl:"Treinar"});
    else if(!p.sp){const w=weakest(); if(w&&w!==a[1]) it.push({id:"q2",t:`${n++}. Reforço (15 min): treino de ${CATS[w].n}, seu ponto mais fraco agora`,act:`startTrainCat('${w}')`,lbl:"Treinar"});}
  }
  if(a[4]) it.push({id:"ger",t:`${n++}. ${a[4]==="port"?"Português":"Matemática"} (25 min): ${a[5]}`,act:`startTrainCat('${a[4]}')`,lbl:"Treinar"});
  if(sp==="rev") it.push({id:"rev",t:`${n++}. Revisão da semana (30 min): flashcards e pegadinhas dos assuntos da semana`,act:"go('peg')",lbl:"Abrir"});
  if(!it.find(x=>x.id==="cor")) it.push({id:"cad",t:`${n++}. Caderno de erros (10 min): anotar o motivo de cada erro do dia`,act:"go('caderno')",lbl:"Abrir"});
  if(p.k>="2026-10-28"){
    it.push({id:"dch",t:`${n++}. Desafio do dia (10 min): 5 questões rápidas dos seus pontos fracos`,act:"startDaily()",lbl:"Jogar",chk:k=>!!(S.gm.dch&&S.gm.dch.last===k)});
    it.push({id:"prog",t:`${n++}. Fechamento (5 min): conferir o acerto do dia e onde está perdendo pontos`,act:"go('stats')",lbl:"Ver"});
  }
  it.push({id:"meta",t:`Meta: ${S.goal} questões respondidas no dia`,auto:true});
  return it;
};
PHASES[0].b="2026-11-01"; PHASES[0].d="Provas Transpetro 2018, 2012 e 2011 completas (27, 29 e 31/10) e os primeiros assuntos de Logística e Estoques. Na aba Progresso, anote os 5 assuntos com pior acerto.";
PHASES[1].a="2026-11-02"; PHASES[1].b="2026-11-27"; PHASES[1].d="Um assunto novo por dia, sempre com teoria curta, questões do mesmo tema e um treino de Português ou Matemática. Mini simulado nas quartas 04, 11 e 18/11 e simulado completo nos domingos 08, 15 e 22/11.";
PHASES[2].a="2026-11-28"; PHASES[2].b="2026-12-03"; PHASES[2].d="Revisão e ritmo de prova: simulados completos em 25/11, 29/11 e 02/12 no horário da prova, ataque aos pontos fracos e lei seca.";

/* ---------- 14. v10: tela do cronograma dia a dia ---------- */
const WD=["dom","seg","ter","qua","qui","sex","sáb"];
function agDays(){return Object.keys(AG).sort();}
function agWeeks(){
  const w=[]; agDays().forEach(k=>{const d=kDate(k).getDay(); if(!w.length||d===1) w.push([]); w[w.length-1].push(k);}); return w;
}
function agTipo(a){const sp=a[6];return sp==="sim"?["Simulado","bad"]:sp.startsWith("past:")?["Prova anterior","bad"]:sp==="mini"?["Mini simulado","warn"]:sp==="weak"?["Pontos fracos","warn"]:sp==="rest"?["Leve","ok"]:sp==="exam"?["Prova","bad"]:sp==="rev"||sp==="law"?["Revisão","ok"]:["Conteúdo",""];}
let cronoOpen=null;
vCrono=function(){
  const t=todayK(), days=agDays(), past=days.filter(k=>k<t), full=past.filter(k=>dayScore(k)>=1).length;
  const left=Math.max(0,Math.round((kDate("2026-12-06")-kDate(t))/864e5));
  if(cronoOpen===null) cronoOpen=AG[t]?t:days.find(k=>k>t)||days[0];
  const card=k=>{
    const a=AG[k], p=dayPlan(k), its=dayItems(p), dn=its.filter(i=>itemDone(k,i)).length, open=k===cronoOpen, tp=agTipo(a);
    const st=k<t?(dn===its.length?"✓ feito":dn?`${dn}/${its.length}`:"não feito"):k===t?"hoje":"";
    return `<section class="panel agday ${k===t?"today":""} ${k<t&&dn<its.length?"miss":""}" id="ag-${k}">
      <button class="aghead" onclick="cronoOpen=cronoOpen==='${k}'?'':'${k}';vCronoKeep()" aria-expanded="${open}">
        <span class="agdate num"><b>${k.slice(8)}/${k.slice(5,7)}</b><i>${WD[kDate(k).getDay()]}</i></span>
        <span class="agfoco"><b>${esc(a[0])}</b>${a[4]&&a[5]?`<i class="muted">+ ${a[4]==="port"?"Português":"Matemática"}: ${esc(a[5])}</i>`:""}</span>
        <span class="agst">${tp[0]!=="Conteúdo"?`<span class="pill ${tp[1]}">${tp[0]}</span>`:""}<span class="muted num">${st}</span></span>
      </button>
      ${open?`<div class="tlist">${tlHTML(k,its,"ag-"+k+"-",k===t)}</div>${(()=>{const m=its.find(i=>i.auto);return m?`<p class="muted">${esc(m.t)}${k<=t?` · ${S.days[k]||0} respondidas`:""}</p>`:"";})()}`:""}
    </section>`;
  };
  $("#view").innerHTML=segNav("crono",SEG_PROG)+`
  <div class="stack"><h2>Cronograma até 06/12</h2>
  <p class="muted">A programação de cada dia, com horários, a área do app e o que fazer. Toque no dia para abrir; o dia de hoje é o mesmo da tela Hoje.</p></div>
  <div class="panel row" style="justify-content:space-between;flex-wrap:wrap;gap:10px">
    <span><b class="num">${left}</b> dias até a prova</span><span><b class="num">${full}</b> de <b class="num">${past.length}</b> dias anteriores completos</span>
    ${AG[t]?`<button class="btn sm" onclick="document.getElementById('ag-${t}').scrollIntoView({block:'center'})">Ir para hoje</button>`:""}
  </div>
  ${foldHTML("plano","Plano até 06/12 e método de estudo","as 4 fases e como estudar cada dia",planMethod(),false)}
  ${agWeeks().map((w,i)=>`<div class="stack" style="gap:8px"><h3 class="agwk">Semana ${i+1} · ${fmtK(w[0])} a ${fmtK(w[w.length-1])}</h3>${w.map(card).join("")}</div>`).join("")}
`;
  document.querySelectorAll(".agday .tl input").forEach(c=>c.onchange=()=>{const k=c.dataset.k;S.daily[k]=S.daily[k]||{};S.daily[k][c.dataset.i]=c.checked;save();vCronoKeep();});
};
(function(){const st=document.createElement("style");st.textContent=`
.agday{padding:10px 14px;gap:8px}.agday.today{outline:2px solid var(--petrol)}.agday.miss .agdate b{color:var(--amber)}
.aghead{all:unset;cursor:pointer;display:flex;gap:12px;align-items:center;width:100%}
.aghead:focus-visible{outline:2px solid var(--petrol);border-radius:6px}
.agdate{display:flex;flex-direction:column;align-items:center;min-width:44px}.agdate i{font-style:normal;font-size:12px;opacity:.7}
.agfoco{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.agfoco i{font-style:normal;font-size:13px}
.agst{display:flex;flex-direction:column;align-items:flex-end;gap:4px;font-size:12px}
.agwk{margin:8px 0 0}
#view{overflow-wrap:anywhere}
.qcomp{display:flex;flex-direction:column;gap:8px}.qcomp table{font-size:13px}.qcomp th,.qcomp td{padding:6px 8px;border-bottom:1px solid var(--line);text-align:left;vertical-align:top}
.qcomp th{background:var(--amber-soft)}.fcard{font-family:ui-monospace,Menlo,monospace;background:var(--amber-soft);padding:6px 10px;border-radius:6px;display:block}
`;document.head.appendChild(st);})();

/* ---------- 15. v10: quadros comparativos e fórmulas nos conteúdos ---------- */
// cada quadro: [título, [cabeçalhos], [[linha]...]]; fórmulas: [nome, fórmula, exemplo]
const QC={
log:[["Conceitos que a banca confunde",["Termo","O que é","Palavra-chave"],[
 ["Efeito chicote","Pequenas variações na demanda final viram grandes variações nos pedidos ao longo da cadeia","Distorção da informação"],
 ["VMI","O fornecedor gerencia o estoque do cliente e decide a reposição","Fornecedor decide"],
 ["ECR","Resposta eficiente ao consumidor: varejo e indústria integrados pela demanda","Varejo + indústria"],
 ["Cross-docking","Mercadoria recebida e expedida sem ser armazenada","Sem estocagem"],
 ["Logística reversa","Retorno de produtos e embalagens pós-venda ou pós-consumo","Volta ao ciclo"]]]],
estoq:[["PEPS × UEPS × custo médio (preços subindo)",["Critério","Custo da mercadoria vendida","Estoque final","Aceito no Brasil?"],[
 ["PEPS","Menor (sai o mais antigo e barato)","Maior (fica o mais recente)","Sim"],
 ["Custo médio ponderado","Intermediário","Intermediário","Sim"],
 ["UEPS","Maior","Menor","Não (vedado pelo fisco e pelo CPC 16)"]]],
 ["Curva ABC",["Classe","Itens (quantidade)","Valor","Controle"],[
 ["A","cerca de 20%","cerca de 80%","Rigoroso"],["B","cerca de 30%","cerca de 15%","Intermediário"],["C","cerca de 50%","cerca de 5%","Simples"]]]],
transp:[["Modais",["Modal","Custo fixo","Custo variável","Indicado para"],[
 ["Rodoviário","Baixo","Alto","Curtas e médias distâncias, porta a porta"],
 ["Ferroviário","Alto","Baixo","Granéis a longa distância"],
 ["Aquaviário","Médio","O mais baixo","Grandes volumes, baixo valor"],
 ["Dutoviário","O mais alto","O mais baixo","Líquidos e gases, fluxo contínuo"],
 ["Aéreo","Baixo","O mais alto","Urgente, leve e de alto valor"]]],
 ["Intermodal × multimodal",["","Intermodal","Multimodal"],[["Documento","Um por modal","Um só (conhecimento único)"],["Responsável","Cada transportador","O OTM, do início ao fim"]]]],
armaz:[["Estruturas de armazenagem",["Estrutura","Acesso","Fluxo"],[
 ["Porta-palete convencional","Direto a todos os paletes","Qualquer"],
 ["Drive-in","Uma só entrada","UEPS (último a entrar, primeiro a sair)"],
 ["Drive-through","Entrada e saída por lados opostos","PEPS"],
 ["Flow rack (dinâmico)","Abastece atrás, retira na frente","PEPS"]]]],
manut:[["Tipos de manutenção",["Tipo","Quando age","Exemplo"],[
 ["Corretiva","Depois da falha","Trocar a peça que quebrou"],
 ["Preventiva","Em intervalos fixos de tempo ou uso","Troca de óleo a cada 10 mil km"],
 ["Preditiva","Pela condição medida do equipamento","Análise de vibração e termografia"],
 ["Detectiva","Busca falhas ocultas","Testar o alarme de incêndio"]]]],
sgi:[["Normas do SGI",["Norma","Assunto"],[["ISO 9001","Qualidade"],["ISO 14001","Meio ambiente"],["ISO 45001","Saúde e segurança do trabalho"],["ISO 19011","Diretrizes de auditoria"],["ISO 31000","Gestão de riscos"]]],
 ["Correção × ação corretiva × ação preventiva",["","Age sobre","Exemplo"],[["Correção","O efeito, a não conformidade em si","Retrabalhar a peça"],["Ação corretiva","A causa, para não repetir","Recalibrar a máquina"],["Ação preventiva","Uma causa potencial (na ISO 9001:2015 virou pensamento baseado em risco)","Plano de calibração"]]]],
ind:[["Eficiência × eficácia × efetividade",["Conceito","Pergunta","Foco"],[["Eficiência","Fiz do jeito certo, com o mínimo de recursos?","Meios"],["Eficácia","Atingi a meta?","Resultado"],["Efetividade","O resultado mudou a realidade como se esperava?","Impacto"]]]],
compras:[["Lei 13.303 × Lei 14.133",["Ponto","Lei 13.303 (estatais)","Lei 14.133 (administração direta)"],[
 ["Quem segue","Empresas públicas e sociedades de economia mista, como a Transpetro","União, estados, municípios, autarquias, fundações"],
 ["Modalidades","Não tem modalidades; preferência pelo pregão para bens e serviços comuns (art. 32)","Pregão, concorrência, concurso, leilão, diálogo competitivo"],
 ["Dispensa por valor","Até R$ 100 mil (obras e engenharia) e R$ 50 mil (demais), art. 29","Valores próprios, atualizados por decreto"],
 ["Alteração de contrato","Só por acordo entre as partes (art. 72)","Pode ser unilateral pela administração"]]]],
contr:[["Lei 13.303: contratos",["Regra","Artigo"],[["Duração de até 5 anos, salvo exceções","art. 71"],["Alteração só por acordo entre as partes","art. 72"],["Acréscimos e supressões até 25%; reforma de edifício ou equipamento até 50% para acréscimos","art. 81"],["Sanções: advertência, multa e suspensão de até 2 anos","art. 83"]]],
 ["Aditivo × apostilamento",["","Termo aditivo","Apostila"],[["Usado para","Mudar o contrato (objeto, prazo, valor por acréscimo)","Registrar o que não altera o contrato: reajuste previsto, empenho"],["Exige acordo?","Sim","Não"]]]],
rh:[["Métodos de avaliação de desempenho",["Método","Como funciona"],[["Escala gráfica","Fatores em tabela, notas de ótimo a fraco"],["Escolha forçada","Escolher entre frases a que mais e a que menos descreve"],["Incidentes críticos","Registra comportamentos extremos, bons e ruins"],["360 graus","Avaliado por chefe, pares, subordinados e clientes"],["APO","Metas definidas em conjunto e cobradas depois"]]],
 ["Kirkpatrick: 4 níveis de avaliação do treinamento",["Nível","Mede"],[["1. Reação","Satisfação do treinando"],["2. Aprendizagem","O que aprendeu"],["3. Comportamento","Se aplica no trabalho"],["4. Resultados","Impacto na organização"]]]],
lgpd:[["Agentes da LGPD",["Agente","Papel"],[["Titular","A pessoa a quem os dados se referem"],["Controlador","Toma as decisões sobre o tratamento"],["Operador","Trata os dados em nome do controlador"],["Encarregado (DPO)","Canal entre controlador, titulares e ANPD"],["ANPD","Fiscaliza e aplica sanções"]]],
 ["Ameaças digitais",["Ameaça","O que faz"],[["Phishing","Engana para roubar dados, com e-mail ou site falso"],["Ransomware","Criptografa os arquivos e pede resgate"],["Spyware","Espiona e envia informações"],["Worm","Se espalha sozinho pela rede"],["Cavalo de Troia","Parece útil, mas abre a porta para o ataque"]]]],
info:[["Referências no Excel",["Fórmula","Ao copiar para baixo e para a direita"],[["=A1","Muda linha e coluna"],["=$A$1","Não muda nada"],["=$A1","Coluna fixa, linha muda"],["=A$1","Linha fixa, coluna muda"]]],
 ["Atalhos do Windows 11",["Atalho","Ação"],[["Win + E","Explorador de Arquivos"],["Win + D","Mostrar a área de trabalho"],["Win + L","Bloquear"],["Win + V","Histórico da área de transferência"],["Win + Shift + S","Captura de parte da tela"],["Shift + Delete","Excluir sem passar pela Lixeira"]]]],
bp:[["Onde fica cada conta",["Grupo","Exemplos"],[["Ativo circulante","Caixa, bancos, clientes, estoques"],["Ativo não circulante","Realizável a longo prazo, investimentos, imobilizado, intangível"],["Passivo circulante","Fornecedores, salários e impostos a pagar"],["Passivo não circulante","Empréstimos de longo prazo"],["Patrimônio líquido","Capital social, reservas, ações em tesouraria (redutora)"]]]],
fluxo:[["DFC: onde entra cada item",["Atividade","Exemplos"],[["Operacional","Recebimento de clientes, pagamento a fornecedores e salários"],["Investimento","Compra e venda de imobilizado e de participações"],["Financiamento","Empréstimos obtidos e pagos, aporte de capital, dividendos pagos"]]]],
contab:[["Natureza das contas",["Conta","Aumenta com","Diminui com"],[["Ativo","Débito","Crédito"],["Passivo","Crédito","Débito"],["Patrimônio líquido","Crédito","Débito"],["Despesa","Débito","Crédito"],["Receita","Crédito","Débito"]]]]
};
const FORM={
estoq:[["Ponto de pedido","PP = D × TR + ES","D 100/dia, TR 5 dias, ES 200 → PP 700"],["Lote econômico","LEC = √(2 × D × Cp ÷ Ca)","D 1.000, Cp 50, Ca 4 → LEC 158"],["Giro","Giro = consumo (ou CMV) ÷ estoque médio","CMV 600, estoque médio 150 → giro 4"],["Cobertura","Cobertura = período ÷ giro","12 meses ÷ 4 → 3 meses"]],
matfin:[["Juros simples","M = C × (1 + i × n)","C 1.000, 2% a.m., 6 meses → M 1.120"],["Juros compostos","M = C × (1 + i)ⁿ","C 1.000, 10% a.a., 2 anos → M 1.210"],["Aumentos sucessivos","fator = (1 + a) × (1 + b)","+10% e +10% → 1,21, ou seja, +21%"],["Taxa real","(1 + nominal) = (1 + real) × (1 + inflação)","12% nominal, 5% inflação → real ≈ 6,67%"],["Desconto comercial simples","D = N × d × n","N 1.000, 2% a.m., 3 meses → D 60"]],
ind:[["MTBF","tempo de funcionamento ÷ número de falhas","400 h, 4 falhas → 100 h"],["MTTR","tempo total de reparo ÷ número de reparos","12 h, 4 reparos → 3 h"],["Disponibilidade","MTBF ÷ (MTBF + MTTR)","100 ÷ 103 ≈ 97%"]],
bp:[["Liquidez corrente","AC ÷ PC","AC 300, PC 200 → 1,5"],["Liquidez seca","(AC − estoques) ÷ PC","(300 − 100) ÷ 200 → 1,0"],["Liquidez imediata","disponível ÷ PC","50 ÷ 200 → 0,25"],["Lucro bruto","receita líquida − CMV","1.000 − 600 → 400"]],
mat:[["Porcentagem","x% de V = x ÷ 100 × V","15% de 80 → 12"],["Probabilidade","casos favoráveis ÷ casos possíveis","um 6 no dado → 1/6"],["Combinação","C(n,p) = n! ÷ (p! × (n − p)!)","C(5,2) → 10"],["Arranjo","A(n,p) = n! ÷ (n − p)!","A(5,2) → 20"]]
};
FORM.manut=FORM.ind;
const _vTopic6=vTopic;
vTopic=function(){
  _vTopic6();
  const k=topicCur; if(!k||(!QC[k]&&!FORM[k])) return;
  const tb=([t,h,r])=>`<div class="qcomp"><h3>${esc(t)}</h3><div class="tblwrap"><table><thead><tr>${h.map(x=>`<th>${esc(x)}</th>`).join("")}</tr></thead><tbody>${r.map(l=>`<tr>${l.map(x=>`<td>${esc(x)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>`;
  const html=`${QC[k]?`<section class="panel stack"><span class="tag">Quadro comparativo</span>${QC[k].map(tb).join("")}</section>`:""}
  ${FORM[k]?`<section class="panel stack"><span class="tag">Fórmulas para a prova (sem calculadora)</span>${FORM[k].map(([n,f,e])=>`<div class="stack" style="gap:4px"><b>${esc(n)}</b><span class="fcard">${esc(f)}</span><span class="muted">Exemplo: ${esc(e)}</span></div>`).join("")}</section>`:""}`;
  const first=$("#view section.panel");
  if(first) first.insertAdjacentHTML("beforebegin",html); else $("#view").insertAdjacentHTML("beforeend",html);
};

/* ---------- 16. v11: revisão geral do banco ---------- */
// fora do edital (PA, SAC/Price), BrOffice e repetidas: ocultas, sem apagar o progresso
[428,573,574,555,577,578,581,584,603,615,619].forEach(i=>{if(Q[i])Q[i].hid=1;});
(function(){
  const set=(i,stem,ex)=>{const q=Q[i];if(!q)return;if(stem)q[1]=stem;if(ex)q[3]=ex;};
  set(605,"Pela Lei 13.303/2016 (art. 71, parágrafo único), é vedado o contrato","Art. 71, parágrafo único: é vedado o contrato por prazo indeterminado. A duração máxima, em regra, é de 5 anos (art. 71, caput).");
  set(598,null,"Art. 64, § 5º: a pré-qualificação vale por até 1 ano. Art. 65: os registros cadastrais também valem por até 1 ano. Ambos podem ser atualizados a qualquer tempo.");
  set(388,"Assinale a frase escrita de acordo com a norma-padrão quanto à ortografia.");
  if(Q[682]) Q[682][1]=Q[682][1].replace("do Windows 10","do Windows");
  if(Q[682]) Q[682][3]="No Windows 10 e no 11, o recurso se chama Reprodução Automática (AutoPlay). Desativá-lo evita que pendrives infectados rodem programas sozinhos.";
  if(Q[701]) Q[701][1]=Q[701][1].replace("do Windows 10","do Windows (10 e 11)");
})();
// edital de Matemática: funções e equações exponenciais, logarítmicas e trigonométricas
[["mat","Em um triângulo retângulo, o cateto oposto a um ângulo agudo α mede 6 cm e a hipotenusa mede 10 cm. O valor de cos α é",["0,8","0,6","0,75","1,25","1,33"],"Pitágoras: o cateto adjacente mede √(10² − 6²) = √64 = 8. cos α = adjacente ÷ hipotenusa = 8 ÷ 10 = 0,8. (0,6 seria o seno e 0,75 a tangente.)"],
 ["mat","O período da função f(x) = sen(2x) é",["π","2π","π/2","4π","1"],"O período de sen(kx) é 2π ÷ k. Com k = 2, o período é 2π ÷ 2 = π: a função completa um ciclo duas vezes mais rápido que sen x."],
 ["mat","O valor máximo da função f(x) = 3 + 2·cos x é",["5","3","2","1","6"],"O cosseno varia entre −1 e 1. O máximo ocorre com cos x = 1: f = 3 + 2 × 1 = 5. O mínimo seria 3 − 2 = 1."],
 ["mat","Considerando log 2 ≈ 0,30 e log 3 ≈ 0,48, o valor de log 6 é, aproximadamente,",["0,78","0,144","0,18","0,90","1,08"],"Logaritmo do produto é a soma dos logaritmos: log 6 = log (2 × 3) = log 2 + log 3 = 0,30 + 0,48 = 0,78. Pegadinha: multiplicar os logaritmos (0,144) está errado."],
 ["mat","A solução da equação 3^(2x) = 81 é",["x = 2","x = 4","x = 3","x = 1","x = 27"],"Escreva 81 na base 3: 81 = 3⁴. Iguale os expoentes: 2x = 4, logo x = 2. Confira: 3^(2·2) = 3⁴ = 81."]
].forEach(q=>{q.c=q[0];Q.push(q);});
RES.mat=RES.mat||[];
RES.mat.push(["Trigonometria",["No triângulo retângulo: **sen = oposto ÷ hipotenusa**, **cos = adjacente ÷ hipotenusa**, **tg = oposto ÷ adjacente**.","Valores notáveis: sen 30° = cos 60° = 1/2; sen 45° = cos 45° = √2/2; sen 60° = cos 30° = √3/2; tg 45° = 1.","sen²x + cos²x = 1. Seno e cosseno variam de −1 a 1; o período de sen(kx) e de cos(kx) é 2π ÷ k.","! log (a × b) = log a + log b; log (a ÷ b) = log a − log b; log aⁿ = n · log a."]]);

/* ---------- 17. v12: telas mais limpas (seções secundárias recolhíveis) ---------- */
S.fold=S.fold||{};
(function(){const st=document.createElement("style");st.textContent=`
details.fold{padding:0}
details.fold>summary{list-style:none;cursor:pointer;display:flex;flex-direction:column;gap:2px;padding:14px 44px 14px 16px;position:relative;font-weight:600}
details.fold>summary::-webkit-details-marker{display:none}
details.fold>summary::after{content:"";position:absolute;right:18px;top:50%;width:9px;height:9px;border-right:2px solid currentColor;border-bottom:2px solid currentColor;transform:translateY(-70%) rotate(45deg);opacity:.6;transition:transform .15s}
details.fold[open]>summary::after{transform:translateY(-30%) rotate(-135deg)}
details.fold>summary .muted{font-weight:400;font-size:13px}
details.fold>summary:focus-visible{outline:2px solid var(--petrol);border-radius:10px}
.foldin{padding:0 16px 16px}
.foldin>.inner{border-top:1px solid var(--line);padding-top:14px}
`;document.head.appendChild(st);})();
