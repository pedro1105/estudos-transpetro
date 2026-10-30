// v25: glossário nas explicações. Na primeira vez que uma sigla aparece numa explicação,
// o app mostra o nome por extenso entre parênteses (só se a explicação ainda não explicou).
// Algumas siglas mudam de sentido conforme a área, por isso o mapa por categoria vem antes do geral.
const GLOS={
  PL:"patrimônio líquido",CPC:"Comitê de Pronunciamentos Contábeis",CMV:"custo das mercadorias vendidas",
  MRP:"planejamento das necessidades de materiais",LEC:"lote econômico de compra",DFC:"demonstração dos fluxos de caixa",
  ERP:"sistema integrado de gestão",WMS:"sistema de gestão de armazém",DRE:"demonstração do resultado",
  LNT:"levantamento de necessidades de treinamento",PEPS:"primeiro que entra, primeiro que sai",
  UEPS:"último que entra, primeiro que sai",JIT:"just in time, no momento exato",FGTS:"Fundo de Garantia do Tempo de Serviço",
  MTTR:"tempo médio para reparo",MTBF:"tempo médio entre falhas",OTM:"operador de transporte multimodal",
  ESG:"ambiental, social e governança",CLT:"Consolidação das Leis do Trabalho",ICMS:"imposto estadual sobre circulação de mercadorias",
  DMPL:"demonstração das mutações do patrimônio líquido",CSLL:"contribuição social sobre o lucro líquido",
  RFID:"identificação por radiofrequência",ANTT:"Agência Nacional de Transportes Terrestres",TMS:"sistema de gestão de transportes",
  ANPD:"Agência Nacional de Proteção de Dados",DVA:"demonstração do valor adicionado",RCM:"manutenção centrada em confiabilidade",
  PDCA:"planejar, executar, verificar, agir",VMI:"estoque gerido pelo fornecedor",BSC:"balanced scorecard, painel de indicadores",
  ANP:"Agência Nacional do Petróleo",AGV:"veículo guiado automaticamente",PBR:"palete padrão brasileiro",
  TPM:"manutenção produtiva total",OEE:"eficiência global do equipamento",PMR:"prazo médio de recebimento",
  PME:"prazo médio de estocagem",PMP:"prazo médio de pagamento",SLA:"acordo de nível de serviço",
  ECR:"resposta eficiente ao consumidor",EFD:"escrituração fiscal digital",DPO:"encarregado de dados",
  ANTAQ:"Agência Nacional de Transportes Aquaviários",ANAC:"Agência Nacional de Aviação Civil",CHA:"conhecimentos, habilidades e atitudes",
  LGPD:"Lei Geral de Proteção de Dados",APO:"administração por objetivos",SSO:"saúde e segurança ocupacional",
  CD:"centro de distribuição",RAM:"memória de trabalho, apagada ao desligar",ROM:"memória só de leitura",
  SSD:"disco de estado sólido",HDD:"disco rígido",SMTP:"protocolo de envio de e-mail",IMAP:"protocolo que lê o e-mail no servidor",
  POP3:"protocolo que baixa o e-mail",VPN:"rede privada virtual",DNS:"tradução de nomes em endereços IP",
  TLS:"criptografia da conexão",BCC:"cópia oculta",B2B:"entre empresas",B2C:"da empresa ao consumidor",
  PMBOK:"guia de gerenciamento de projetos",ICP:"Infraestrutura de Chaves Públicas",MDF:"manifesto eletrônico de documentos fiscais"
};
const GLOSC={bp:{PC:"passivo circulante",AC:"ativo circulante",EF:"estoque final",EI:"estoque inicial",IR:"imposto de renda"},
  contab:{EF:"estoque final",EI:"estoque inicial",IR:"imposto de renda",NF:"nota fiscal"},
  transp:{NF:"nota fiscal",CT:"conhecimento de transporte"},manut:{OS:"ordem de serviço"},contr:{OS:"ordem de serviço"},
  estoq:{PP:"ponto de pedido",ABC:"classificação por importância",XYZ:"classificação por criticidade"}};
function glosTxt(t,cat){
  if(!t) return t;
  const loc=GLOSC[cat]||{}, seen={};
  return t.replace(/\b([A-Z][A-Z0-9]{1,5})\b/g,(m,k,pos)=>{
    const g=loc[k]||GLOS[k]; if(!g||seen[k]) return m; seen[k]=1;
    const nx=t.slice(pos+k.length,pos+k.length+6), pv=t.slice(0,pos);
    if(/^\s*\(|^-|^\s*(=|é |são )/.test(nx)||t[pos-1]==="("||t[pos-1]==="-") return m;
    // dentro de parênteses já abertos o texto ficaria aninhado: deixa como está
    if((pv.match(/\(/g)||[]).length>(pv.match(/\)/g)||[]).length) return m;
    if(t.toLowerCase().includes(g.toLowerCase())) return m;
    return k+" ("+g+")";
  });
}
function xpl(q){return esc(glosTxt(q[3],q.c));}
