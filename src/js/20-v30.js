/* ---------- v30: conteúdos mais didáticos, siglas por extenso e aulas do Carranza Cursos ----------
   1) "Entenda primeiro" no topo de cada assunto e "Em palavras simples" em cada seção (EXPL).
   2) Siglas: na primeira vez que aparecem em cada assunto, o nome por extenso vem entre parênteses;
      no topo, a lista "Siglas deste assunto". O mesmo dicionário completa o glossário das explicações (GLOS).
   3) Fórmulas com legenda de cada letra, exemplo passo a passo e a ideia por trás (FX).
   4) Aulas do canal Carranza Cursos por tópico, com destaque para as feitas para a Transpetro (VID). */

/* ---- 1. Dicionário de siglas ---- */
const SIG={
  ISO:"Organização Internacional de Normalização: publica as normas ISO",SGI:"Sistema de Gestão Integrado",
  PCM:"planejamento e controle da manutenção",MCC:"manutenção centrada em confiabilidade",RCM:"manutenção centrada em confiabilidade",
  SMART:"específica, mensurável, atingível, relevante e com prazo",KPI:"indicador-chave de desempenho",
  GHG:"gases de efeito estufa",GRI:"Global Reporting Initiative: padrão internacional de relatório de sustentabilidade",
  SPED:"Sistema Público de Escrituração Digital: recebe os livros e declarações em arquivo eletrônico",
  ECD:"Escrituração Contábil Digital: os livros Diário e Razão em arquivo",ECF:"Escrituração Contábil Fiscal: a declaração do IRPJ e da CSLL",
  EFD:"Escrituração Fiscal Digital",IRPJ:"Imposto de Renda da Pessoa Jurídica",IPI:"Imposto sobre Produtos Industrializados",
  "NF-e":"nota fiscal eletrônica de mercadorias","NFC-e":"nota fiscal de consumidor eletrônica: a da venda no balcão",
  "NFS-e":"nota fiscal de serviços eletrônica: emitida na prefeitura","CT-e":"conhecimento de transporte eletrônico: o documento do frete",
  "MDF-e":"manifesto eletrônico de documentos fiscais: a lista das notas que o caminhão leva",
  DOAR:"demonstração das origens e aplicações de recursos: deixou de ser exigida em 2007",ANC:"ativo não circulante",
  CPV:"custo dos produtos vendidos: o CMV da indústria",DLPA:"demonstração de lucros ou prejuízos acumulados",
  SCM:"gestão da cadeia de suprimentos: do inglês supply chain management",IoT:"internet das coisas: objetos com sensores ligados à rede",
  EDI:"troca eletrônica de dados entre empresas",RNTRC:"Registro Nacional de Transportadores Rodoviários de Cargas",
  MRO:"materiais de manutenção, reparo e operação",FIFO:"primeiro que entra, primeiro que sai",FEFO:"o que vence primeiro sai primeiro",
  AMR:"robô móvel autônomo","AS/RS":"armazém automático com robôs que guardam e buscam as cargas",PNRS:"Política Nacional de Resíduos Sólidos",
  TEU:"unidade equivalente a um contêiner de 20 pés",CPU:"unidade central de processamento: o processador",
  HTTP:"protocolo que transfere as páginas da web",HTTPS:"HTTP seguro: com criptografia","TCP/IP":"conjunto de protocolos que faz a internet funcionar",
  NPU:"unidade de processamento neural: chip que acelera inteligência artificial",IA:"inteligência artificial",
  ARM:"arquitetura de processador de baixo consumo: comum em celulares",CID:"confidencialidade, integridade e disponibilidade",
  MP:"medida provisória",VTD:"verbo transitivo direto: pede complemento sem preposição",ETP:"estudo técnico preliminar",
  PNCP:"Portal Nacional de Contratações Públicas",ABNT:"Associação Brasileira de Normas Técnicas",NBR:"norma brasileira",
  CO2:"gás carbônico",LEC:"lote econômico de compra",CMV:"custo das mercadorias vendidas",PL:"patrimônio líquido",
  DRE:"demonstração do resultado do exercício",DFC:"demonstração dos fluxos de caixa",DMPL:"demonstração das mutações do patrimônio líquido",
  DVA:"demonstração do valor adicionado",CPC:"Comitê de Pronunciamentos Contábeis: publica as normas de contabilidade",
  CSLL:"contribuição social sobre o lucro líquido",ICMS:"imposto estadual sobre circulação de mercadorias e serviços",
  PEPS:"primeiro que entra, primeiro que sai",UEPS:"último que entra, primeiro que sai",MRP:"planejamento das necessidades de materiais",
  JIT:"just in time: produzir e entregar só no momento exato",VMI:"estoque gerido pelo fornecedor",WMS:"sistema de gestão de armazém",
  TMS:"sistema de gestão de transportes",ERP:"sistema integrado de gestão da empresa",RFID:"identificação por radiofrequência: etiqueta lida por antena",
  OTM:"operador de transporte multimodal",ANTT:"Agência Nacional de Transportes Terrestres",ANTAQ:"Agência Nacional de Transportes Aquaviários",
  ANAC:"Agência Nacional de Aviação Civil",ANP:"Agência Nacional do Petróleo, Gás Natural e Biocombustíveis",
  AGV:"veículo guiado automaticamente",PBR:"palete padrão brasileiro",CD:"centro de distribuição",
  MTBF:"tempo médio entre falhas",MTTR:"tempo médio para reparo",TPM:"manutenção produtiva total",
  BSC:"balanced scorecard: painel com 4 perspectivas de indicadores",ESG:"ambiental, social e governança",
  PDCA:"planejar, executar, verificar e agir",LNT:"levantamento de necessidades de treinamento",APO:"administração por objetivos",
  CHA:"conhecimentos, habilidades e atitudes",FGTS:"Fundo de Garantia do Tempo de Serviço",CLT:"Consolidação das Leis do Trabalho",
  LGPD:"Lei Geral de Proteção de Dados Pessoais",ANPD:"Agência Nacional de Proteção de Dados",DPO:"encarregado de dados",
  RAM:"memória de trabalho: se apaga ao desligar",ROM:"memória só de leitura: não se apaga",SSD:"unidade de armazenamento em chip: sem disco girando",
  HDD:"disco rígido magnético",TLS:"protocolo de criptografia da conexão",ICP:"Infraestrutura de Chaves Públicas: a do certificado digital",
  ECR:"resposta eficiente ao consumidor"
};
// siglas que mudam de sentido conforme o assunto (vêm antes do dicionário geral)
const SIGC={
  estoq:{PP:"ponto de pedido",ES:"estoque de segurança",TR:"tempo de reposição",D:"demanda",Cp:"custo de fazer um pedido",Ca:"custo de manter uma unidade em estoque por ano",ABC:"classificação dos itens por valor",XYZ:"classificação dos itens pela falta que fazem"},
  bp:{AC:"ativo circulante",PC:"passivo circulante",IR:"imposto de renda"},contab:{IR:"imposto de renda",NF:"nota fiscal"},
  manut:{OS:"ordem de serviço"},contr:{OS:"ordem de serviço"},info:{TPM:"chip de segurança do computador: exigido pelo Windows 11"},
  port:{VTD:"verbo transitivo direto: pede complemento sem preposição"},transp:{BR:"rodovia federal"}
};
Object.keys(SIG).forEach(k=>{if(!GLOS[k]&&!/-|\//.test(k))GLOS[k]=SIG[k];});
const sigMap=k=>Object.assign({},SIG,SIGC[k]||{});
const reEsc=s=>s.replace(/[.*+?^${}()|[\]\\\/]/g,"\\$&");
const sigRe={};
function sigRegex(k){
  if(sigRe[k]) return sigRe[k];
  const keys=Object.keys(sigMap(k)).sort((a,b)=>b.length-a.length).map(reEsc);
  return sigRe[k]=new RegExp("(?<![A-Za-z0-9À-ÿ\\-\\/])("+keys.join("|")+")(?![A-Za-z0-9À-ÿ])(\\*\\*)?","g");
}
// expande a 1ª ocorrência de cada sigla no assunto; "found" guarda todas as que apareceram (para a lista do topo)
function sigTxt(t,k,seen,found){
  if(!t||typeof t!=="string") return t;
  const m=sigMap(k);
  return t.replace(sigRegex(k),(all,s,bold,pos)=>{
    const g=m[s]; if(!g) return all; found&&(found[s]=g);
    if(seen[s]) return all;
    const end=pos+all.length, nx=t.slice(end,end+8), pv=t.slice(0,pos);
    if(/^[-\/]/.test(nx)) return all;
    if(/^\s*\(/.test(nx)||/\(\s*$/.test(pv)) {seen[s]=1;return all;}
    if((pv.match(/\(/g)||[]).length>(pv.match(/\)/g)||[]).length) return all;
    if(t.toLowerCase().includes(g.split(":")[0].toLowerCase())) {seen[s]=1;return all;}
    seen[s]=1;
    return all+" ("+g.split(":")[0]+")";
  });
}
const SIGFOUND={};
(function(){
  Object.keys(RES).forEach(k=>{
    const seen={}, found={};
    RES[k]=RES[k].map(([t,it])=>[t,it.map(x=>sigTxt(x,k,seen,found))]);
    if(QC[k]){const s2={};QC[k]=QC[k].map(([t,h,r])=>[t,h,r.map(l=>l.map(c=>sigTxt(c,k,s2,found)))]);}
    SIGFOUND[k]=found;
  });
  // flashcards: o verso mostra o nome por extenso na 1ª sigla
  FC.forEach(f=>{if(f&&f[2]&&CATS[f[0]]) f[2]=sigTxt(f[2],f[0],{},null);});
})();

/* ---- 2. Explicações em linguagem simples ---- */
const EXPL={
rh:{i:"Recursos Humanos é tudo o que a empresa faz com as pessoas: atrair (recrutar), escolher (selecionar), organizar cargos e salários, treinar, avaliar e cuidar dos direitos e benefícios. A prova costuma comparar pares de conceitos parecidos: recrutamento × seleção, treinamento × desenvolvimento, descrição × análise de cargo. Se você souber a diferença de cada par, acerta a maioria.",
 s:{"Recrutamento e seleção":"Pense num funil: o recrutamento é divulgar a vaga para encher o funil de candidatos; a seleção é filtrar até sobrar quem mais combina com o cargo. Interno = promover alguém de dentro (rápido, barato, motiva). Externo = trazer gente de fora (ideias novas, porém mais caro e demorado).",
  "Cargos e carreira":"A descrição de cargo responde ‘o que essa pessoa faz?’ (as tarefas). A análise de cargo responde ‘o que essa pessoa precisa ter para fazer?’ (escolaridade, experiência, esforço, responsabilidade). Carreira em Y: quem é bom tecnicamente pode crescer como especialista sem virar chefe, ganhando o mesmo que um gerente.",
  "Treinamento, desenvolvimento e educação":"Treinamento prepara para o cargo de hoje (curto prazo). Desenvolvimento prepara para cargos futuros (longo prazo). O treinamento segue 4 passos, como uma receita: descobrir o que falta (diagnóstico, chamado LNT), planejar o curso, dar o curso e avaliar se funcionou. Kirkpatrick avalia em 4 níveis: a pessoa gostou? aprendeu? mudou o jeito de trabalhar? deu resultado para a empresa?",
  "Desempenho e competências":"Avaliar desempenho é medir como a pessoa está trabalhando. Na 360°, todos ao redor avaliam: chefe, colegas, subordinados, clientes e a própria pessoa. Cuidado com os erros do avaliador: no efeito halo, uma qualidade forte (ex.: pontualidade) faz o chefe dar nota alta em tudo. Competência = CHA: saber (conhecimento), saber fazer (habilidade) e querer fazer (atitude).",
  "Relações de trabalho e benefícios":"Benefício legal é o que a lei obriga (13º, férias com 1/3, FGTS, vale-transporte). Espontâneo é o que a empresa dá porque quer (plano de saúde, previdência privada). Na suspensão do contrato a pessoa não trabalha e não recebe (ex.: suspensão disciplinar); na interrupção ela não trabalha, mas recebe (ex.: férias)."}},
sgi:{i:"Uma empresa grande segue várias normas ao mesmo tempo: qualidade (ISO 9001), meio ambiente (ISO 14001) e saúde e segurança do trabalhador (ISO 45001). Em vez de ter três sistemas separados, com três manuais e três auditorias, ela junta tudo num só: o Sistema de Gestão Integrado (SGI). ISO é a organização internacional que publica essas normas; o número identifica cada uma.",
 s:{"Integração de sistemas":"As normas ISO modernas têm o mesmo ‘esqueleto’ de 10 capítulos (chamado estrutura de alto nível ou Anexo SL). Como os capítulos coincidem, fica fácil encaixar as três normas num sistema só, com menos papel e auditorias combinadas.",
  "Auditorias e ações":"Auditoria é uma checagem para ver se a empresa faz o que diz que faz. 1ª parte: a própria empresa se audita. 2ª parte: o cliente audita o fornecedor. 3ª parte: uma certificadora independente. Diferença que mais cai: correção apaga o incêndio (refaz o lançamento errado); ação corretiva tira a causa para não acontecer de novo (muda o procedimento); ação preventiva age antes de o problema existir.",
  "Melhoria contínua e riscos":"O PDCA é um ciclo que nunca acaba: Planejar o que fazer, fazer (Do), Checar se deu certo comparando com a meta e Agir (padronizar o que funcionou ou corrigir o que falhou), e recomeçar. Risco, para a ISO 31000, é o efeito da incerteza nos objetivos; por isso pode ser bom (oportunidade) ou ruim (ameaça). Diante de um risco você pode evitar, reduzir, transferir (ex.: seguro) ou aceitar."}},
patr:{i:"Patrimônio são os bens duráveis da empresa: máquinas, veículos, computadores, prédios. A administração patrimonial cuida de identificar cada bem (plaqueta), saber onde ele está (inventário), registrar o desgaste ao longo do tempo (depreciação) e dar baixa quando ele sai (venda, perda, sucata).",
 s:{"Controle e inventário":"Tombamento é o ‘RG’ do bem: uma plaqueta com número que liga o objeto ao cadastro. Inventário é conferir se o que está no cadastro existe de verdade. Geral = conta tudo de uma vez (normalmente no fim do ano). Rotativo = conta um grupo por vez ao longo do ano, sem parar a empresa.",
  "Classificação dos bens":"Imobilizado é o bem físico usado no trabalho por mais de um ano (uma empilhadeira). Intangível é o que tem valor mas não se pode tocar (um software, uma marca). Material de consumo, como papel e caneta, não é patrimônio: vai para estoque ou despesa.",
  "Avaliação e depreciação":"Depreciação é reconhecer que o bem perde valor com o uso e o tempo. No método linear, divide-se a perda total pelos anos de vida útil: o bem perde o mesmo valor todo ano. Terreno não deprecia porque não se desgasta. Impairment é um teste extra: se o bem passou a valer menos do que está registrado (ex.: ficou obsoleto), registra-se a perda.",
  "Gestão de ativos":"Gestão de ativos é olhar o bem do nascimento ao descarte e decidir pensando no custo total: às vezes comprar uma máquina mais cara compensa porque ela quebra menos e dura mais. A norma de referência é a ISO 55000."}},
manut:{i:"Manutenção é manter os equipamentos funcionando. A grande pergunta da prova é ‘quando se faz a manutenção?’: depois que quebrou (corretiva), em datas fixas (preventiva) ou quando os sinais indicam que vai quebrar (preditiva). Para a Transpetro, que opera dutos e terminais, parar um equipamento custa caro, por isso o tema cai bastante.",
 s:{"Tipos de manutenção":"Compare com um carro. Corretiva: o carro quebrou na estrada e você chama o guincho. Preventiva: trocar o óleo a cada 10.000 km, esteja ele bom ou não. Preditiva: um sensor mede o óleo e avisa a hora certa de trocar. Detectiva: testar se o alarme e o airbag funcionam, porque essas falhas ficam escondidas até o dia em que você precisa.",
  "Indicadores":"MTBF mede de quanto em quanto tempo o equipamento quebra, em média: quanto maior, melhor (quebra pouco). MTTR mede quanto tempo se leva para consertar: quanto menor, melhor. Disponibilidade junta os dois e diz em que porcentagem do tempo o equipamento está pronto para usar. Backlog é a fila de serviços pendentes.",
  "Planejamento e controle (PCM)":"O PCM é o ‘escritório’ da manutenção: abre a ordem de serviço (o pedido de trabalho), programa quem faz e quando, guarda o histórico de cada máquina e controla custos. Na TPM, o próprio operador cuida do básico da máquina (limpar, lubrificar, apertar), e a meta é zero quebra."}},
ind:{i:"Indicador é um número que mostra se você está indo bem: ‘peças com defeito por mil’, ‘dias sem acidente’, ‘custo por entrega’. Sem medir, não dá para melhorar. A prova cobra a diferença entre eficiência, eficácia e efetividade, o BSC e os indicadores ESG (ambientais, sociais e de governança).",
 s:{"Conceitos":"Eficiência é fazer gastando pouco (usar bem os recursos). Eficácia é atingir o objetivo. Efetividade é o impacto real que ficou. Exemplo: uma campanha de vacinação que vacina todo mundo (eficácia), gastando pouco (eficiência), e de fato reduz a doença (efetividade). Indicador de tendência avisa antes (horas de treinamento); de resultado mostra depois (número de acidentes).",
  "Análise para decisão":"Um número sozinho não diz nada: compare com a meta, com o mês passado e com outras empresas (benchmark). O BSC é um painel que olha a empresa por 4 ângulos, não só pelo dinheiro: financeiro, clientes, processos internos e aprendizado e crescimento (pessoas e sistemas).",
  "ESG":"ESG resume o que se espera de uma empresa responsável: E (ambiental) = poluir menos, gastar menos água e energia; S (social) = cuidar dos trabalhadores e da comunidade; G (governança) = ser ética e transparente. Nas emissões de gases, Escopo 1 é o que a empresa emite diretamente (seus caminhões), Escopo 2 é a energia elétrica que ela compra e Escopo 3 é o resto da cadeia (fornecedores, clientes)."}},
matfin:{i:"Matemática financeira responde: quanto um dinheiro vale com o passar do tempo? Os ingredientes são sempre os mesmos: o valor inicial (capital), a taxa de juros, o tempo e o valor final (montante). Na prova não há calculadora, então as contas são pensadas para sair fácil com frações e potências pequenas.",
 s:{"Porcentagem":"Transforme a porcentagem em ‘fator’: aumentar 10% é multiplicar por 1,10; diminuir 10% é multiplicar por 0,90. Para aumentos seguidos, multiplique os fatores. Por isso +20% e depois −20% dá 1,20 × 0,80 = 0,96: termina 4% abaixo do preço inicial, não igual.",
  "Juros simples e compostos":"Simples: os juros são sempre calculados sobre o valor inicial, então crescem igual todo mês (como uma escada). Compostos: os juros de um mês passam a render juros no mês seguinte (juros sobre juros), então crescem cada vez mais rápido (como uma bola de neve). Taxa e tempo precisam estar na mesma unidade: taxa mensal com tempo em meses.",
  "Descontos":"Desconto é o abatimento por pagar ou receber antes do vencimento. Valor nominal (N) é o que o título vale no vencimento; valor atual (A) é o que se paga hoje. No desconto comercial (por fora) a taxa incide sobre o valor nominal, que é maior; por isso ele dá um desconto maior que o racional (por dentro), que incide sobre o valor atual."}},
contab:{i:"Contabilidade é o registro organizado de tudo que acontece com o patrimônio da empresa. A regra de ouro são as partidas dobradas: todo registro tem dois lados de mesmo valor, um débito e um crédito. ‘Débito’ e ‘crédito’ aqui não significam bom ou ruim: são só os dois lados do lançamento (esquerda e direita).",
 s:{"Fundamentos":"Exemplo: a empresa compra uma mesa à vista por R$ 500. A mesa (ativo) aumenta: débito de 500. O caixa (ativo) diminui: crédito de 500. Os dois lados somam igual. Contas de ativo e despesa aumentam com débito; contas de passivo, patrimônio líquido e receita aumentam com crédito. Fato permutativo só troca um bem por outro (não muda o patrimônio líquido); fato modificativo muda (ex.: pagar uma despesa).",
  "Princípios e Estrutura Conceitual":"Entidade: o dinheiro da empresa não se mistura com o do dono. Competência: a receita e a despesa entram no mês em que aconteceram, não no mês em que o dinheiro entrou ou saiu (o salário de dezembro pago em janeiro é despesa de dezembro). Para ser útil, a informação contábil precisa, antes de tudo, ser relevante e fiel à realidade.",
  "Obrigações acessórias e controle fiscal":"Obrigação principal é pagar o tributo. Obrigação acessória é o ‘papel’ que acompanha: emitir nota, escriturar livros, entregar declarações. Hoje quase tudo é eletrônico e vai para o SPED, o sistema da Receita que recebe os arquivos. Cada nota tem sua sigla: NF-e (mercadoria), NFC-e (venda ao consumidor), NFS-e (serviço), CT-e (frete)."}},
fluxo:{i:"Fluxo de caixa é o extrato do dinheiro da empresa: o que entrou, o que saiu e quanto sobrou. Lucro e caixa são coisas diferentes: uma empresa pode ter lucro e ficar sem dinheiro (se vende tudo a prazo) ou ter dinheiro e dar prejuízo. A Demonstração dos Fluxos de Caixa (DFC) separa o dinheiro em três ‘gavetas’: operacional, investimento e financiamento.",
 s:{"Conceitos e tipos":"Operacional é o dia a dia: receber dos clientes, pagar fornecedores, salários e impostos. Investimento é comprar ou vender bens duráveis (uma máquina, um terreno, ações de outra empresa). Financiamento é a relação com quem empresta ou investe dinheiro na empresa: pegar e pagar empréstimos, receber aporte dos sócios, pagar dividendos.",
  "Direto × indireto":"Os dois métodos chegam ao mesmo caixa operacional, por caminhos diferentes. O direto mostra o dinheiro que entrou e saiu, como um extrato. O indireto parte do lucro e faz ajustes: soma a depreciação (é despesa, mas não tirou dinheiro do caixa), subtrai o aumento de clientes a receber (vendeu, mas não recebeu) e soma o aumento de fornecedores a pagar (comprou, mas ainda não pagou).",
  "Gestão e projeção":"Projetar o caixa é olhar o extrato do futuro: se vai faltar dinheiro em março, dá para negociar um empréstimo antes; se vai sobrar, dá para aplicar. Regra prática: receber o mais cedo possível e pagar o mais tarde possível (sem atrasar)."}},
bp:{i:"O Balanço Patrimonial é uma ‘foto’ da empresa num dia: o que ela tem e tem a receber (ativo), o que ela deve (passivo) e o que sobra para os donos (patrimônio líquido, o PL). A DRE é um ‘filme’ do ano: mostra quanto vendeu, quanto gastou e se deu lucro ou prejuízo.",
 s:{"Balanço Patrimonial":"A equação básica é Ativo = Passivo + PL: tudo que a empresa tem foi pago ou com dinheiro de terceiros (passivo) ou com dinheiro dos donos (PL). Circulante é o que vira dinheiro ou vence em até 12 meses; o resto é não circulante. O ativo é listado do mais fácil de virar dinheiro (caixa) para o mais difícil (prédios).",
  "DRE (Lei 6.404, art. 187)":"Leia a DRE de cima para baixo, como uma escada que vai descontando: vendas totais, menos impostos e devoluções = receita líquida; menos o custo do que foi vendido (CMV) = lucro bruto; menos as despesas do dia a dia (vendas, administração, juros) = lucro antes dos impostos; menos imposto de renda e CSLL = lucro líquido.",
  "Relação entre demonstrações":"As demonstrações conversam entre si: o lucro da DRE vai para o patrimônio líquido do balanço; a DFC explica por que o caixa do balanço mudou de um ano para o outro; a DMPL mostra como o patrimônio líquido mudou."}},
log:{i:"Logística é fazer o produto certo chegar ao lugar certo, na hora certa, na quantidade certa e pelo menor custo total. A cadeia de suprimentos é a corrente inteira, do fornecedor do fornecedor até o cliente final. A prova cobra conceitos (efeito chicote, logística reversa), sustentabilidade e tecnologias.",
 s:{"Conceitos":"Efeito chicote: o cliente compra um pouco mais, a loja pede bem mais ao distribuidor, que pede muito mais à fábrica. Como um chicote, um pequeno movimento na ponta vira uma onda enorme na outra. A cura é compartilhar informação real de vendas entre todos. Logística reversa é o caminho de volta: devoluções, recolhimento de embalagens, pilhas, pneus.",
  "Sustentabilidade":"Logística verde é transportar e armazenar poluindo menos: rotas mais curtas, caminhão cheio em vez de meio vazio, trem ou navio em vez de caminhão quando dá, embalagens recicláveis. A PNRS (Lei 12.305/2010) obriga fabricantes e comerciantes de certos produtos a recolher o que vira lixo.",
  "Tecnologias emergentes":"RFID é uma etiqueta lida por antena, sem precisar apontar como no código de barras. Cross-docking é receber e já despachar, sem guardar no estoque. Milk run é um caminhão que passa recolhendo em vários fornecedores, como o leiteiro de antigamente. VMI: o próprio fornecedor acompanha o estoque do cliente e repõe."}},
transp:{i:"Modal é o meio de transporte: rodoviário (caminhão), ferroviário (trem), aquaviário (navio e barco), dutoviário (tubos) e aéreo (avião). A prova compara custo, velocidade, capacidade e flexibilidade de cada um. O dutoviário é o coração da Transpetro: oleodutos e gasodutos levam petróleo, derivados e gás em fluxo contínuo.",
 s:{"Modais":"Caminhão vai de porta em porta, mas é caro por tonelada em longas distâncias. Trem e navio levam muito volume barato, mas são lentos e precisam de terminais. Avião é rápido e caro: serve para carga urgente, leve e valiosa. Duto custa muito para construir (custo fixo alto), mas depois o custo de cada litro transportado é baixíssimo (custo variável baixo).",
  "Intermodal × multimodal":"Os dois usam mais de um modal (ex.: caminhão + navio). No intermodal, cada trecho tem seu documento e seu responsável. No multimodal, um único contrato cobre a viagem toda, com um único responsável: o OTM (operador de transporte multimodal). Cabotagem é navegar entre portos do Brasil pela costa; longo curso é entre o Brasil e outros países.",
  "Regulação e documentos":"Cada modal tem sua agência que fiscaliza: ANTT (estradas e ferrovias), ANTAQ (navegação), ANAC (aviação) e ANP (petróleo, gás e dutos). O número da rodovia federal indica a direção: BR-0xx sai de Brasília, 1xx vai de norte a sul, 2xx de leste a oeste, 3xx é diagonal e 4xx liga outras rodovias."}},
estoq:{i:"Estoque é dinheiro parado na prateleira. Ter pouco gera falta (para a operação ou perde venda); ter muito gera custo (espaço, seguro, perda, capital empatado). Gerir estoque é achar o equilíbrio: quanto pedir, quando pedir e quais itens merecem mais atenção.",
 s:{"Classificações":"Curva ABC: poucos itens concentram a maior parte do valor. Os itens A (cerca de 20% dos itens e 80% do valor) merecem controle rigoroso; os C (muitos itens baratos), controle simples. A classificação XYZ olha outra coisa: a falta que o item faz. Z é o item que, se faltar, para a operação (mesmo que seja barato, como uma junta de vedação).",
  "Métodos e fórmulas":"Ponto de pedido responde ‘quando pedir?’: quando o estoque cair até o que será consumido durante a espera da entrega, mais a reserva. Lote econômico responde ‘quanto pedir?’: a quantidade que equilibra o custo de fazer pedidos com o custo de guardar. Giro responde ‘quantas vezes o estoque se renovou?’. Veja as fórmulas com exemplo no quadro acima.",
  "Políticas e nível de serviço":"Nível de serviço é a chance de ter o item quando alguém pede. Para chegar perto de 100%, é preciso mais estoque de segurança, o que custa caro. Just in time e kanban fazem o contrário: produzem e repõem só quando há consumo (produção puxada), reduzindo estoque.",
  "Automação":"Leitores de código de barras e RFID registram entradas e saídas sem digitação, o WMS diz onde cada item está, e o ERP integra o estoque com compras, vendas e contabilidade. Menos erro de contagem, inventário mais rápido."}},
armaz:{i:"Armazenagem é guardar bem: receber, conferir, guardar no lugar certo, separar os pedidos e despachar. Um bom armazém aproveita o espaço (inclusive a altura), anda pouco e não deixa produto vencer ou se perder.",
 s:{"Tipos e funções":"O centro de distribuição (CD) é um armazém feito para girar rápido: recebe de muitos fornecedores e despacha para muitos clientes. Armazém alfandegado guarda carga importada ou para exportar sob controle da Receita. Picking é separar os itens de cada pedido, a atividade que mais consome mão de obra.",
  "Layout e organização":"Layout em U: recebimento e expedição do mesmo lado (economiza docas). Em I: entra de um lado e sai do outro, em linha reta. Endereçamento é dar um ‘endereço’ a cada posição (rua, prédio, nível, apartamento), como uma cidade. FEFO é usado para remédios e alimentos: sai primeiro o que vence primeiro.",
  "Estruturas e tecnologias":"Porta-palete seletivo deixa pegar qualquer palete a qualquer hora. No drive-in a empilhadeira entra na estrutura por um só lado, então o último palete a entrar é o primeiro a sair (UEPS). No drive-through dá para entrar pelos dois lados, então o primeiro a entrar sai primeiro (PEPS)."}},
manus:{i:"Manuseio (ou movimentação) é mover materiais dentro da empresa; embalagem é proteger e identificar o produto. A ideia central: cada vez que alguém pega, levanta ou move uma carga, gasta tempo e arrisca dano. Por isso se agrupa a carga em unidades maiores (unitização) e se usam equipamentos.",
 s:{"Equipamentos e princípios":"Transpaleteira é o ‘carrinho’ manual de palete; empilhadeira levanta e empilha. Esteiras e roletes são contínuos: movem um fluxo constante por um caminho fixo. Empilhadeiras são intermitentes: vão e voltam. Princípio de ouro: menos manuseios e menores distâncias, usando a gravidade sempre que possível.",
  "Embalagem":"Pense numa caixa de leite: a caixinha que toca o leite é a primária; o fardo com 12 caixinhas é a secundária; o palete com vários fardos, envolto em filme, é a terciária (para transporte). Embalagem protege, contém, informa (rótulo) e facilita o uso.",
  "Unitização e segurança":"Unitizar é juntar muitos volumes pequenos numa unidade grande, movida de uma vez: palete, contêiner, big bag. Palete PBR mede 1,00 × 1,20 m. Contêiner de 20 pés = 1 TEU (a unidade de medida dos portos); o de 40 pés = 2 TEU."}},
compras:{i:"Comprar numa estatal como a Transpetro não é como comprar em casa: há leis para garantir preço justo e igualdade entre fornecedores. A principal para a Transpetro é a Lei 13.303/2016 (Lei das Estatais). A Lei 14.133/2021 vale para a administração pública em geral e também cai na prova. Cuidado para não misturar as regras das duas.",
 s:{"Compras: planejamento":"Antes de comprar: descobrir o que e quanto é preciso, descrever bem o produto (especificação), pesquisar preços, ver se há orçamento e escolher a forma de compra. Comprar sem planejar leva a compras emergenciais, mais caras.",
  "Lei 13.303/2016 (estatais), arts. 28 a 67":"Licitar é fazer uma disputa entre fornecedores para escolher a melhor proposta. Dispensa: a lei permite não licitar (ex.: compras de pequeno valor, emergência). Inexigibilidade: não dá para competir (só existe um fornecedor). A estatal não licita a venda dos seus próprios produtos (atividade-fim). O pregão, disputa por lances, é o preferencial para bens e serviços comuns, e o orçamento estimado fica em sigilo para não influenciar os preços.",
  "Lei 14.133/2021":"É a nova lei de licitações da administração pública em geral (substituiu a 8.666). Modalidades: pregão, concorrência, concurso, leilão e diálogo competitivo; tomada de preços e convite deixaram de existir. Antes de licitar, faz-se um estudo técnico preliminar (ETP) e tudo é publicado no PNCP, o portal nacional. Os valores de dispensa são corrigidos todo ano por decreto."}},
contr:{i:"Depois da licitação vem o contrato: o documento que diz o que será entregue, por quanto e em que prazo. A prova cobra quem acompanha o contrato (gestor e fiscal), prazos, garantias, alterações e penalidades, comparando a Lei 13.303 (estatais) com a 14.133 (administração em geral).",
 s:{"Ciclo de vida do contrato":"O contrato nasce no planejamento, é assinado, executado, acompanhado, recebido e encerrado. O gestor cuida da parte administrativa (prazos, pagamentos, aditivos). O fiscal está no dia a dia, vê se o serviço está sendo feito direito e anota os problemas.",
  "Lei 13.303/2016, arts. 68 a 91":"Na estatal o contrato se parece mais com um contrato entre empresas privadas: só muda se as duas partes concordarem (não há alteração unilateral). Pode durar até 5 anos e exigir garantia de até 5% do valor. Se o contratado falhar, pode levar advertência, multa ou ficar até 2 anos sem poder contratar com aquela estatal.",
  "Lei 14.133/2021":"Na administração pública em geral, o governo pode alterar o contrato sozinho (unilateralmente), dentro de limites: 25% para mais ou para menos, ou até 50% de acréscimo em reforma. Termo aditivo muda o contrato (prazo, valor, objeto); apostilamento só registra algo que já estava previsto, como o reajuste anual.",
  "Riscos e contratos digitais":"A matriz de riscos é uma tabela que diz quem paga se algo der errado (ex.: chuva atrasou a obra): o risco fica com quem tem mais condição de controlá-lo. A assinatura eletrônica qualificada usa certificado digital ICP-Brasil e é a mais segura."}},
info:{i:"Informática na prova é prática: peças do computador, Windows 11, atalhos de teclado, Word, Excel, PowerPoint e internet. Muitos atalhos do Word em português são diferentes do inglês (Ctrl + N é negrito, Ctrl + S é sublinhado). Treine abrindo o programa e testando: decorar fica muito mais fácil.",
 s:{"Hardware e software":"Hardware é o que se toca (peças); software são os programas. O processador (CPU) é o ‘cérebro’ que executa as ordens. A memória RAM é a mesa de trabalho: rápida, mas se apaga ao desligar. O SSD e o HD são o armário: guardam os arquivos mesmo desligados; o SSD não tem partes que giram e por isso é bem mais rápido.",
  "Windows 11":"A tecla Windows (Win) combinada com letras abre funções: Win + E abre o Explorador de Arquivos, Win + L bloqueia a tela, Win + D mostra a área de trabalho. Arrastar um arquivo para outra pasta do mesmo disco move; para outro disco (pendrive), copia.",
  "Office 2024":"No Excel, o cifrão ($) ‘tranca’ a linha ou a coluna quando você copia a fórmula: =$A$1 fica sempre apontando para A1. As mensagens de erro dizem o problema: #DIV/0! é divisão por zero; #N/D é valor não encontrado (comum no PROCV); #REF! é referência a célula que não existe mais.",
  "Internet e intranet":"Internet é a rede pública mundial. Intranet é uma ‘internet particular’ da empresa, só para funcionários, usando a mesma tecnologia. Extranet abre parte dessa rede para parceiros. O cadeado do HTTPS indica conexão criptografada. Navegação anônima não guarda histórico no aparelho, mas a empresa e o provedor ainda veem o que você acessa."}},
lgpd:{i:"Segurança da informação é proteger os dados contra vazamento, alteração e indisponibilidade. A LGPD (Lei 13.709/2018) diz como empresas e governo podem coletar e usar dados pessoais, isto é, qualquer informação que identifique uma pessoa (nome, CPF, e-mail, foto).",
 s:{"Segurança da informação":"Os três pilares formam o CID: confidencialidade (só quem pode vê), integridade (ninguém altera sem autorização) e disponibilidade (está lá quando preciso). Vírus precisa de um arquivo hospedeiro e de alguém que o execute; worm se espalha sozinho pela rede; ransomware tranca seus arquivos e pede resgate. Backup incremental copia só o que mudou desde o último backup de qualquer tipo; o diferencial, tudo que mudou desde o último completo.",
  "LGPD (Lei 13.709/2018)":"Personagens: o titular é a pessoa dona dos dados; o controlador é quem decide o que fazer com eles (a empresa); o operador executa em nome do controlador (um fornecedor de sistema); o encarregado (DPO) é o ‘SAC’ dos dados, o canal com os titulares e com a ANPD, que fiscaliza. Dado sensível é o que pode gerar discriminação (saúde, religião, biometria). Consentimento é só uma das 10 bases legais para tratar dados."}},
port:{i:"Português da Cesgranrio cobra interpretação de texto e gramática aplicada: crase, concordância, pontuação, conectivos e significado das palavras. O segredo é testar cada alternativa com um ‘truque’ (trocar por masculino, trocar por sinônimo, mudar para o plural) em vez de decorar regras soltas.",
 s:{"Crase":"Crase é o encontro de duas letras ‘a’: a preposição (pedida pelo verbo, como em ‘ir a’) com o artigo (‘a’ gerente). Truque: troque a palavra feminina por uma masculina. Se virar ‘ao’, tem crase: ‘fui à reunião’ → ‘fui ao encontro’. Se virar só ‘o’ ou ‘a’ continuar sozinho, não tem.",
  "Concordância":"O verbo concorda com o sujeito. Exceções clássicas: ‘haver’ no sentido de existir e ‘fazer’ indicando tempo ficam no singular (‘houve problemas’, ‘faz dez anos’). Já ‘existir’ concorda normalmente (‘existem problemas’). Com ‘se’: ‘vendem-se casas’ (casas são vendidas, plural) × ‘precisa-se de ajudantes’ (verbo com preposição, singular).",
  "Pontuação e coesão":"Nunca separe por vírgula o sujeito do verbo (‘O diretor, aprovou’ está errado). Conectivos ligam ideias e mudam o sentido: ‘mas’ opõe, ‘portanto’ conclui, ‘porque’ explica a causa, ‘embora’ concede (admite algo contrário sem impedir). Na prova, troque o conectivo por outro do mesmo grupo para ver se o sentido se mantém.",
  "Ortografia e significação":"Parônimos são palavras parecidas com sentidos diferentes: ratificar (confirmar) × retificar (corrigir); iminente (prestes a acontecer) × eminente (importante). Mal é o contrário de bem; mau é o contrário de bom. Dica: troque e veja se a frase faz sentido."}},
mat:{i:"A Matemática da prova é de ensino médio, sem calculadora: porcentagem, regra de três, equações, funções, contagem, probabilidade, estatística e geometria. As contas são feitas para dar números redondos. Se a conta ficou muito difícil, provavelmente existe um caminho mais curto.",
 s:{"Proporção e porcentagem":"Regra de três: se uma grandeza aumenta e a outra também, são diretamente proporcionais (mais horas, mais peças); se uma aumenta e a outra diminui, inversamente (mais pedreiros, menos dias). Porcentagem é uma fração de 100: 15% de 80 = 15 × 80 ÷ 100 = 12.",
  "Equações e funções":"Equação de 2º grau (ax² + bx + c = 0) se resolve com Bhaskara: primeiro o delta (Δ = b² − 4ac), depois x = (−b ± √Δ) ÷ 2a. Atalho: as raízes somam −b/a e multiplicam c/a. Na exponencial, escreva os dois lados na mesma base e iguale os expoentes. Logaritmo é a pergunta ‘a que expoente elevo a base para chegar ao número?’: log₂ 8 = 3 porque 2³ = 8.",
  "Contagem e probabilidade":"Princípio multiplicativo: 3 camisas e 4 calças dão 3 × 4 = 12 combinações de roupa. Arranjo é quando a ordem importa (pódio: 1º, 2º e 3º); combinação é quando não importa (escolher 3 pessoas para uma comissão). Probabilidade = o que eu quero ÷ tudo o que pode acontecer.",
  "Estatística e geometria":"Média é a soma dividida pela quantidade. Mediana é o valor do meio depois de pôr em ordem. Moda é o que mais aparece. Desvio padrão mede o quanto os valores se espalham em torno da média: quanto maior, mais diferentes entre si. Pitágoras: no triângulo retângulo, hipotenusa² = cateto² + cateto².",
  "Trigonometria":"Seno, cosseno e tangente comparam os lados de um triângulo retângulo a partir de um ângulo. Memorize SOH-CAH-TOA: Seno = Oposto ÷ Hipotenusa; Cosseno = Adjacente ÷ Hipotenusa; Tangente = Oposto ÷ Adjacente. Os valores de 30°, 45° e 60° caem sempre."}}
};

/* ---- 3. Fórmulas com legenda e passo a passo ---- */
// [nome, fórmula, [[símbolo, significado]], [passos do exemplo], ideia]
const FX={
estoq:[["Ponto de pedido","PP = D × TR + ES",[["PP","ponto de pedido: o nível de estoque em que você deve fazer um novo pedido"],["D","demanda: quanto se consome por dia"],["TR","tempo de reposição: dias entre fazer o pedido e o material chegar"],["ES","estoque de segurança: reserva para atraso ou consumo acima do normal"]],["Consumo de 100 unidades por dia (D = 100).","A entrega demora 5 dias (TR = 5): durante a espera você gasta 100 × 5 = 500.","Some a reserva de 200 (ES): 500 + 200 = 700.","Quando o estoque cair para 700, faça o pedido."],"Peça quando o que sobrou der só para aguentar a espera da entrega, mais a reserva."],
 ["Lote econômico de compra","LEC = √(2 × D × Cp ÷ Ca)",[["LEC","lote econômico de compra: a quantidade ideal em cada pedido"],["D","demanda do ano: quantas unidades se consome por ano"],["Cp","custo de pedir: quanto custa cada pedido (emitir, transportar, receber)"],["Ca","custo de armazenar: quanto custa manter 1 unidade em estoque por 1 ano"]],["D = 1.000 por ano, Cp = R$ 50 por pedido, Ca = R$ 4 por unidade ao ano.","2 × 1.000 × 50 = 100.000.","100.000 ÷ 4 = 25.000.","√25.000 ≈ 158 (confira: 158 × 158 = 24.964)."],"Pedir pouco de cada vez obriga a fazer muitos pedidos (caro pedir); pedir muito enche o estoque (caro guardar). O LEC é o ponto de equilíbrio."],
 ["Giro de estoque","Giro = CMV ÷ estoque médio",[["CMV","custo das mercadorias vendidas: quanto custou tudo o que saiu do estoque no período"],["Estoque médio","(estoque inicial + estoque final) ÷ 2"]],["Saiu do estoque o equivalente a R$ 600 no ano (CMV).","O estoque médio foi R$ 150.","600 ÷ 150 = 4: o estoque se renovou 4 vezes no ano."],"Giro alto = o estoque roda rápido, com menos dinheiro parado na prateleira."],
 ["Cobertura","Cobertura = período ÷ giro",[["Cobertura","por quanto tempo o estoque atende o consumo sem nova compra"]],["O período é de 12 meses e o giro é 4.","12 ÷ 4 = 3: o estoque cobre 3 meses de consumo.","Outro jeito: estoque médio ÷ consumo por mês (150 ÷ 50 = 3 meses)."],"Giro e cobertura são inversos: quanto mais o estoque gira, menos tempo ele dura."]],
matfin:[["Juros simples","M = C × (1 + i × n)",[["M","montante: o valor final, com os juros"],["C","capital: o valor inicial"],["i","taxa de juros por período, em decimal (2% = 0,02)"],["n","número de períodos (meses, anos), na mesma unidade da taxa"]],["C = 1.000, i = 2% ao mês = 0,02, n = 6 meses.","i × n = 0,02 × 6 = 0,12.","1 + 0,12 = 1,12.","M = 1.000 × 1,12 = 1.120 (R$ 20 de juros por mês, sempre)."],"Nos juros simples, os juros de cada mês são sempre calculados sobre o capital inicial."],
 ["Juros compostos","M = C × (1 + i)ⁿ",[["M","montante: o valor final"],["C","capital: o valor inicial"],["i","taxa por período, em decimal"],["n","número de períodos (é o expoente)"]],["C = 1.000, i = 10% ao ano = 0,10, n = 2 anos.","1 + 0,10 = 1,10.","1,10² = 1,10 × 1,10 = 1,21.","M = 1.000 × 1,21 = 1.210 (100 de juros no 1º ano e 110 no 2º)."],"Juros sobre juros: os juros do 1º ano também rendem no 2º."],
 ["Aumentos ou descontos seguidos","fator total = (1 + a) × (1 + b)",[["a, b","as taxas em decimal; aumento é positivo (+0,10), desconto é negativo (−0,10)"]],["Dois aumentos de 10%: 1,10 × 1,10 = 1,21.","1,21 − 1 = 0,21, ou seja, +21% no total (e não +20%).","Aumento de 20% e desconto de 20%: 1,20 × 0,80 = 0,96, ou seja, 4% abaixo do início."],"Nunca some porcentagens seguidas: multiplique os fatores."],
 ["Taxa real","(1 + nominal) = (1 + real) × (1 + inflação)",[["nominal","a taxa anunciada (o que o banco paga)"],["real","o ganho de verdade, descontada a inflação"],["inflação","quanto os preços subiram no período"]],["Nominal 12% e inflação 5%.","1,12 = (1 + real) × 1,05.","1 + real = 1,12 ÷ 1,05 ≈ 1,0667.","Real ≈ 6,67% (e não 12% − 5% = 7%)."],"A taxa real mostra quanto o seu poder de compra aumentou de fato."],
 ["Desconto comercial simples","D = N × d × n",[["D","desconto em reais"],["N","valor nominal: quanto o título vale no vencimento"],["d","taxa de desconto por período, em decimal"],["n","quantos períodos antes do vencimento"],["A","valor atual: o que se recebe hoje (A = N − D)"]],["Título de R$ 1.000 (N), taxa de 2% ao mês, antecipado 3 meses.","D = 1.000 × 0,02 × 3 = 60.","A = 1.000 − 60 = 940 recebidos hoje."],"O desconto comercial (por fora) é calculado sobre o valor nominal, por isso é maior que o racional."]],
ind:[["Tempo médio entre falhas","MTBF = tempo de funcionamento ÷ número de falhas",[["MTBF","tempo médio entre falhas: de quanto em quanto tempo o equipamento quebra"]],["A bomba funcionou 400 horas e falhou 4 vezes.","400 ÷ 4 = 100: em média, uma falha a cada 100 horas."],"Quanto maior o MTBF, melhor: o equipamento quebra menos."],
 ["Tempo médio para reparo","MTTR = tempo total de reparo ÷ número de reparos",[["MTTR","tempo médio para reparo: quanto tempo se leva para consertar"]],["Os 4 reparos somaram 12 horas.","12 ÷ 4 = 3 horas por reparo."],"Quanto menor o MTTR, melhor: o conserto é rápido."],
 ["Disponibilidade","Disponibilidade = MTBF ÷ (MTBF + MTTR)",[["Disponibilidade","porcentagem do tempo em que o equipamento está pronto para uso"]],["MTBF = 100 h e MTTR = 3 h.","100 + 3 = 103.","100 ÷ 103 ≈ 0,97, ou seja, 97% do tempo disponível."],"Para aumentar a disponibilidade: quebrar menos (MTBF maior) ou consertar mais rápido (MTTR menor)."]],
bp:[["Equação do balanço","Ativo = Passivo + PL",[["Ativo","bens e direitos: o que a empresa tem e tem a receber"],["Passivo","obrigações: o que a empresa deve a terceiros"],["PL","patrimônio líquido: o que pertence aos donos"]],["Ativo de R$ 500 e passivo de R$ 300.","PL = 500 − 300 = 200."],"Tudo o que a empresa tem foi financiado ou por terceiros (passivo) ou pelos donos (PL)."],
 ["Liquidez corrente","AC ÷ PC",[["AC","ativo circulante: dinheiro e o que vira dinheiro em até 12 meses (caixa, bancos, clientes, estoques)"],["PC","passivo circulante: dívidas que vencem em até 12 meses"]],["AC = 300 e PC = 200.","300 ÷ 200 = 1,5: para cada R$ 1 de dívida de curto prazo, há R$ 1,50 para pagar."],"Acima de 1, sobra folga para pagar as contas do ano."],
 ["Liquidez seca","(AC − estoques) ÷ PC",[["AC","ativo circulante"],["PC","passivo circulante"]],["AC = 300, estoques = 100, PC = 200.","300 − 100 = 200.","200 ÷ 200 = 1,0."],"Tira os estoques porque eles demoram a virar dinheiro (precisam ser vendidos antes)."],
 ["Liquidez imediata","disponível ÷ PC",[["Disponível","caixa, bancos e aplicações de resgate imediato"],["PC","passivo circulante"]],["Disponível = 50 e PC = 200.","50 ÷ 200 = 0,25: só dá para pagar hoje 25% das dívidas de curto prazo."],"É a mais rigorosa: só conta o dinheiro que já está na mão."],
 ["Lucro bruto","Receita líquida − CMV",[["Receita líquida","vendas menos devoluções, abatimentos e impostos sobre as vendas"],["CMV","custo das mercadorias vendidas: quanto custou o que foi vendido"]],["Receita líquida de 1.000 e CMV de 600.","1.000 − 600 = 400 de lucro bruto."],"Lucro bruto é o que sobra da venda antes de pagar as despesas do dia a dia."]],
patr:[["Depreciação linear","(custo − valor residual) ÷ vida útil",[["Custo","quanto o bem custou"],["Valor residual","quanto se espera vender o bem no fim da vida útil"],["Vida útil","por quantos anos o bem será usado"]],["Máquina de R$ 50.000, valor residual de R$ 5.000, vida útil de 10 anos.","50.000 − 5.000 = 45.000 a depreciar.","45.000 ÷ 10 = 4.500 por ano.","Depois de 3 anos, valor contábil = 50.000 − 13.500 = 36.500."],"O bem perde o mesmo valor todos os anos."]],
fluxo:[["Saldo de caixa","Saldo final = saldo inicial + entradas − saídas",[["Entradas","recebimentos (clientes, empréstimos obtidos, venda de bens)"],["Saídas","pagamentos (fornecedores, salários, impostos, compra de bens)"]],["Saldo inicial 200, entradas 900, saídas 750.","200 + 900 − 750 = 350."],"É o extrato da conta: o que tinha, mais o que entrou, menos o que saiu."],
 ["Caixa operacional pelo método indireto","Lucro líquido + depreciação − aumento de clientes e estoques + aumento de fornecedores",[["Depreciação","despesa que não tira dinheiro do caixa, por isso volta somando"],["Aumento de clientes","vendeu, mas ainda não recebeu: subtrai"],["Aumento de fornecedores","comprou, mas ainda não pagou: soma"]],["Lucro líquido 100, depreciação 20.","Clientes a receber aumentaram 30; fornecedores a pagar aumentaram 10.","100 + 20 − 30 + 10 = 100 de caixa gerado pelas operações."],"Parte do lucro e corrige tudo o que foi lucro ou despesa sem passar pelo caixa."]],
mat:[["Porcentagem","x% de V = x ÷ 100 × V",[["x","a porcentagem"],["V","o valor total"]],["15% de 80.","15 ÷ 100 = 0,15.","0,15 × 80 = 12."],"Atalho: 10% é dividir por 10; 5% é a metade de 10%; 15% = 10% + 5% (8 + 4 = 12)."],
 ["Equação de 2º grau (Bhaskara)","Δ = b² − 4ac  e  x = (−b ± √Δ) ÷ 2a",[["a, b, c","os números da equação ax² + bx + c = 0"],["Δ","delta: diz quantas raízes existem (positivo = 2, zero = 1, negativo = nenhuma real)"]],["x² − 5x + 6 = 0: a = 1, b = −5, c = 6.","Δ = 25 − 24 = 1.","x = (5 ± 1) ÷ 2 → x = 3 ou x = 2."],"Atalho: procure dois números que somem −b/a (5) e multipliquem c/a (6): 2 e 3."],
 ["Probabilidade","P = casos favoráveis ÷ casos possíveis",[["Favoráveis","os resultados que você quer"],["Possíveis","todos os resultados que podem acontecer"]],["Chance de sair 6 num dado.","Favorável: 1 (o 6). Possíveis: 6.","P = 1/6."],"É sempre um número entre 0 (impossível) e 1 (certo)."],
 ["Combinação","C(n,p) = n! ÷ (p! × (n − p)!)",[["n","total de elementos disponíveis"],["p","quantos você escolhe"],["!","fatorial: 5! = 5 × 4 × 3 × 2 × 1 = 120"]],["Escolher 2 pessoas entre 5 para uma comissão (a ordem não importa).","5! ÷ (2! × 3!) = 120 ÷ (2 × 6) = 10."],"Use combinação quando trocar a ordem não muda o grupo (Ana e Beto = Beto e Ana)."],
 ["Arranjo","A(n,p) = n! ÷ (n − p)!",[["n","total de elementos"],["p","quantos você escolhe, em ordem"]],["Escolher presidente e vice entre 5 pessoas (a ordem importa).","5! ÷ 3! = 120 ÷ 6 = 20 (ou 5 × 4 = 20)."],"Use arranjo quando a ordem muda o resultado (presidente e vice não são a mesma coisa)."]]
};
FX.manut=FX.ind;
FX.ind=FX.ind.concat([["Taxa de frequência de acidentes","TF = nº de acidentes × 1.000.000 ÷ HHT",[["TF","taxa de frequência: acidentes a cada 1 milhão de horas trabalhadas"],["HHT","horas-homem trabalhadas: soma das horas de todos os trabalhadores"]],["3 acidentes em 600.000 horas trabalhadas.","3 × 1.000.000 = 3.000.000.","3.000.000 ÷ 600.000 = 5 acidentes por milhão de horas."],"Multiplicar por 1 milhão permite comparar empresas de tamanhos diferentes."]]);
Object.keys(FORM).forEach(k=>delete FORM[k]); // o quadro antigo dá lugar ao novo, com legenda

/* ---- 4. Aulas do Carranza Cursos (YouTube) ---- */
// [id do vídeo, título em português, duração, 1 = aula feita para a Transpetro]
const VID={
 geral:[["4HwT-7Hmd60","Petrobras/Transpetro: análise do edital e plano de estudos","45 min",1],["6vJ21Cz22SM","Transpetro: Administração em 20 questões","1h16",1],["kQHS1JGeoa8","Aulão da aprovação Transpetro: estoques, contratos e logística","2h30",1]],
 rh:[["xlwmbYWBTR0","Transpetro: Recursos Humanos, gestão de pessoas na prática","41 min",1],["8JltKTt7yFg","Transpetro: gestão por competências","52 min",1],["h7O_FDJYPqw","Técnicas de seleção","21 min"],["y06xfftzoGE","Treinamento e desenvolvimento","45 min"]],
 sgi:[["_BSdqZsBgSI","Gestão da qualidade para concursos","45 min"],["L5sEaQ0QjR4","Gestão da qualidade (aula curta)","27 min"]],
 patr:[["MxkqiUMzStg","Gestão patrimonial para concursos: aula completa","37 min"],["3F3UJvWnfXg","Gestão patrimonial descomplicada","45 min"]],
 ind:[["oBxiy-LX4YY","Transpetro: indicadores de desempenho","43 min",1],["pEpRIARPTbc","Transpetro: gestão de indicadores descomplicada","30 min",1],["-68zT6y5Zkc","Transpetro: indicadores de desempenho (revisão)","42 min",1],["fYZnik71ZmM","Eficiência, eficácia e efetividade","19 min"],["mqKE3tbP4AU","ESG em questões resolvidas","19 min"]],
 matfin:[["jO_VnZz7T4E","Transpetro: juros e descontos descomplicados","45 min",1],["MjzMzScFSoY","Transpetro: matemática financeira","49 min",1]],
 contab:[["P2JWLiL9cgI","Transpetro: conceitos de contabilidade direto ao ponto","1h23",1],["3J8d__XTLwc","Concurso Transpetro: contabilidade","1h25",1]],
 fluxo:[["tnL5KJwfDMM","Transpetro: administração financeira e fluxo de caixa","49 min",1],["ankhiDpc7V8","Fluxo de caixa: noções básicas","47 min"]],
 bp:[["kSyXeXjNOjc","Noções de contabilidade: balanço patrimonial","49 min"],["3J8d__XTLwc","Concurso Transpetro: contabilidade","1h25",1]],
 log:[["NM1QmLm74No","Transpetro: logística e cadeia de suprimentos","1h23",1],["TeRCbwoUywE","Transpetro: gestão da cadeia de suprimentos","1h16",1],["qUmBTjpZZ_I","Transpetro: logística e gestão da cadeia de suprimentos (aula nova)","1h24",1]],
 transp:[["V5tTThL3kMI","Operações logísticas e modais de transporte","36 min"],["NM1QmLm74No","Transpetro: logística e cadeia de suprimentos","1h23",1]],
 estoq:[["_iHAX_4WH6g","Transpetro: gestão de estoques descomplicada","54 min",1],["0LCl20dZyC0","Transpetro: gestão de estoques em 15 questões","1h03",1],["wh5tix8lQTA","Transpetro: controle de estoques","56 min",1]],
 armaz:[["kQHS1JGeoa8","Aulão da aprovação Transpetro: estoques, contratos e logística","2h30",1],["6gvmUVLtGqE","Administração de materiais (aula geral)","50 min"]],
 manus:[["kQHS1JGeoa8","Aulão da aprovação Transpetro: estoques, contratos e logística","2h30",1],["6gvmUVLtGqE","Administração de materiais (aula geral)","50 min"]],
 compras:[["YqneizTsN-8","Transpetro: licitações e contratos, Lei 14.133/2021","38 min",1],["M3cf2dInVv4","Transpetro: licitações e contratos, Lei 14.133/2021 (outra turma)","40 min",1],["Y10Pex9i5KM","Transpetro: nova Lei de Licitações 14.133/2021","40 min",1]],
 contr:[["bvaSsyvUuUE","Transpetro: gestão de contratos na prática","42 min",1],["kQHS1JGeoa8","Aulão da aprovação Transpetro: estoques, contratos e logística","2h30",1]],
 info:[["Anui0vdPYAo","Windows para concurso","52 min"],["p3ZVXiQvnBE","Excel descomplicado","48 min"],["z98_6Yjs9UI","PowerPoint: o que mais cai","37 min"],["-mV1v50dB68","Hardware descomplicado","50 min"]],
 lgpd:[["tFRRF4gPjzs","Transpetro: LGPD (Lei Geral de Proteção de Dados)","48 min",1],["ubRAuNHP5UM","Segurança da informação","47 min"]],
 port:[["reC1SF7X7M0","Língua Portuguesa sem enrolação","46 min"],["SSrkQf--DuQ","Concordância nominal e verbal","39 min"],["eR8trYl5TQ8","Simulado de Língua Portuguesa comentado","1h41"]],
 mat:[["t7a_8y87dy8","Transpetro: porcentagem","53 min",1],["WXyVD36_byY","Transpetro: geometria","38 min",1],["zkyQdUE5sqo","Transpetro: estatística do básico às questões","36 min",1]]
};
const CARRANZA="https://www.youtube.com/@carranzacursos";
const ytv=id=>"https://www.youtube.com/watch?v="+id;
function vidList(k){
  const v=VID[k]||[];
  const items=v.map(([id,t,d,tp])=>`<li><a href="${ytv(id)}" target="_blank" rel="noopener">${esc(t)}</a> <span class="muted num">${esc(d)}</span>${tp?' <span class="tchip">Transpetro</span>':""}</li>`).join("");
  return `<div class="stack vidbox" style="gap:6px"><b>Aulas do Carranza Cursos</b>${items?`<ul class="links">${items}</ul>`:`<p class="muted">O canal ainda não tem aula específica deste assunto. Use a busca de vídeos abaixo.</p>`}<a class="muted" href="${CARRANZA}/search?query=${encodeURIComponent(CATS[k].n)}" target="_blank" rel="noopener">Procurar mais no canal</a></div>`;
}
const _linkList30=linkList;
linkList=function(k){return vidList(k)+_linkList30(k);};
const _vLinks30=vLinks;
vLinks=function(){
  _vLinks30();
  const ul=$("#view .panel ul.links"); if(!ul) return;
  ul.insertAdjacentHTML("afterbegin",`<li><a href="${CARRANZA}/search?query=transpetro" target="_blank" rel="noopener">Carranza Cursos: todas as aulas para a Transpetro</a> <span class="tchip">Vídeo</span></li>`+
    VID.geral.map(([id,t,d])=>`<li><a href="${ytv(id)}" target="_blank" rel="noopener">${esc(t)}</a> <span class="muted num">${esc(d)}</span> <span class="tchip">Transpetro</span></li>`).join(""));
};

/* ---- 5. Tela do assunto ---- */
function fxPanel(k){
  const f=FX[k]; if(!f) return "";
  return `<section class="panel stack fx30"><span class="tag">Fórmulas para a prova (sem calculadora)</span>${f.map(([n,fm,leg,steps,idea])=>`<div class="fxitem stack">
    <b>${esc(n)}</b><span class="fcard">${esc(fm)}</span>
    <div class="fxleg"><span class="muted">O que cada sigla ou letra significa</span><dl>${leg.map(([s,m])=>`<dt>${esc(s)}</dt><dd>${esc(m)}</dd>`).join("")}</dl></div>
    <div><span class="muted">Exemplo passo a passo</span><ol class="fxsteps">${steps.map(s=>`<li>${esc(s)}</li>`).join("")}</ol></div>
    <p class="fxidea"><b>Para entender:</b> ${esc(idea)}</p></div>`).join("")}</section>`;
}
function sigPanel(k){
  const f=SIGFOUND[k]||{}, ks=Object.keys(f).sort((a,b)=>a.localeCompare(b));
  if(!ks.length) return "";
  return `<details class="panel sig30"><summary class="row" style="justify-content:space-between"><strong>Siglas deste assunto (${ks.length})</strong><span class="muted">abrir</span></summary><dl class="sigdl">${ks.map(s=>`<dt>${esc(s)}</dt><dd>${esc(f[s])}</dd>`).join("")}</dl></details>`;
}
const _vTopic30=vTopic;
vTopic=function(){
  _vTopic30();
  const k=topicCur; if(!k||!RES[k]) return;
  const v=$("#view"), e=EXPL[k];
  // "Em palavras simples" em cada seção
  if(e) v.querySelectorAll("section.panel > h3").forEach(h=>{const t=e.s[h.textContent];if(t)h.insertAdjacentHTML("afterend",`<p class="simple30"><b>Em palavras simples:</b> ${esc(t)}</p>`);});
  // fórmulas novas no lugar do quadro antigo: depois do quadro comparativo ou antes da 1ª seção
  const fx=fxPanel(k);
  if(fx){const qc=[...v.querySelectorAll("section.panel")].find(s=>/Quadro comparativo/.test(s.textContent.slice(0,40)));
    const first=v.querySelector("section.panel"); if(qc) qc.insertAdjacentHTML("afterend",fx); else if(first) first.insertAdjacentHTML("beforebegin",fx);}
  // topo: entenda primeiro + siglas
  const top=(e?`<section class="panel stack intro30"><span class="tag">Entenda primeiro</span><p>${esc(e.i)}</p></section>`:"")+sigPanel(k);
  const anchor=v.querySelector(".ttsbar")||(v.querySelector("h2")&&v.querySelector("h2").closest(".stack"));
  if(top&&anchor) anchor.insertAdjacentHTML("afterend",top);
};

/* ---- 6. Estilos ---- */
/* estilos: src/css/520-v30*.css */
