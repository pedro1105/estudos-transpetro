/* ---------- v26: revisão do cronograma ---------- */

/* Provas anteriores: a etapa se marca sozinha quando a prova daquele ano foi feita até o fim,
   em qualquer dia (a de 2018, marcada para 27/10, foi feita em 29/10) */
function pastDone(y){return (S.hist||[]).some(h=>h.label&&(h.label.startsWith("Prova Transpetro "+y)||h.label==="Prova real Transpetro "+y));}

/* Remarcações a partir de 30/10. A prova 2012 de 29/10 não foi feita (no dia foi feita a de 2018):
   vai para o sábado 31/10, e a de 2011 vai para o domingo 01/11 junto com Estoques II. */
AG["2026-10-29"][0]="Diagnóstico: prova 2012 (remarcada para 31/10)";
AG["2026-10-31"]=["Diagnóstico: prova 2012","","","","","","past:2012"];
AG["2026-11-01"]=["Prova 2011 + Estoques II","estoq","PEPS × custo médio; giro e cobertura; MRP, JIT e kanban; inventário geral × rotativo; RFID e código de barras","estoq","","","past:2011"];
/* Concordância saiu de 01/11 e entra no lugar de uma revisão repetida */
AG["2026-11-24"][5]="Concordância verbal e nominal";
/* Conteúdo atualizado com as mudanças de 2026 e com os pontos do edital que faltavam */
AG["2026-11-02"][2]+="; valores do art. 29 e atualização pelo Conselho (§ 3º)";
AG["2026-11-05"][2]+="; dispensa por valor (art. 75) e valores de 2026 (Decreto 12.807/2025)";
AG["2026-11-14"][2]+="; inservíveis, impairment e métodos de depreciação (linear, soma dos dígitos, unidades)";
AG["2026-11-16"][2]+="; indicadores de intensidade (água, energia por volume)";
AG["2026-11-21"][2]+="; ajustes do método indireto (depreciação, clientes, fornecedores)";
AG["2026-11-26"][5]="Conjuntos numéricos e funções trigonométricas";
AG["2026-11-27"][2]="Lei 13.709: bases legais, dados sensíveis, direitos do titular, controlador × operador × encarregado; ANPD agora é Agência Nacional de Proteção de Dados (Lei 15.352/2026)";
/* Simulados de 4 h ficam no fim de semana. 25/11 (quarta) vira Excel com mini simulado; o simulado
   completo no horário da prova passa para o domingo 29/11; a quarta 02/12 fica com o simulado das
   específicas (2 h 40), que cabe depois do trabalho */
AG["2026-11-25"]=["Excel + mini simulado","info","Excel: referências relativas, absolutas e mistas; SE, SOMASE, CONT.SE, PROCV, PROCX; validação e formatação condicional","info","","","mini"];
AG["2026-11-29"]=["Simulado completo nº 4 no horário da prova","","","","","","sim"];
AG["2026-12-02"]=["Simulado das específicas","","","","","","esp"];
AG["2026-12-03"][0]="Correção dos simulados e revisão final";

PHASES[0].d="Provas Transpetro 2018, 2012 e 2011 completas (2018 feita em 29/10; 2012 em 31/10; 2011 em 01/11) e os primeiros assuntos de Logística e Estoques. Na aba Progresso, anote os 5 assuntos com pior acerto.";
PHASES[1].d="Um assunto novo por dia, sempre com teoria curta, questões do mesmo tema e um treino de Português ou Matemática. Mini simulado nas quartas 04, 11, 18 e 25/11 e simulado completo nos domingos 08, 15 e 22/11.";
PHASES[2].d="Revisão e ritmo de prova: ataque aos pontos fracos, simulado completo no horário da prova em 29/11, simulado das específicas em 02/12 e lei seca.";

const _dayPlan26=dayPlan;
dayPlan=function(k){
  const p=_dayPlan26(k);
  if(p.ag&&p.ag[6]==="esp") p.sp={t:"Simulado das específicas: 40 questões em 2 h 40",fn:"startExam('esp')"};
  return p;
};
const _dayItems26=dayItems;
dayItems=function(p){
  const it=_dayItems26(p), sp=p.ag?p.ag[6]:"";
  if(sp.startsWith("past:")){const y=sp.slice(5), s=it.find(i=>i.id==="sim"); if(s) s.chk=()=>pastDone(y);}
  if(sp==="esp"&&!it.find(i=>i.id==="cor")){
    const at=it.findIndex(i=>i.id==="sim")+1;
    it.splice(at,0,{id:"cor",t:"Correção (30 min): ler a explicação de cada erro e anotar o motivo no caderno de erros",act:"go('caderno')",lbl:"Abrir"});
  }
  return it;
};
const _agTipo26=agTipo;
agTipo=function(a){return a[6]==="esp"?["Simulado","bad"]:_agTipo26(a);};
if(typeof dsMemo==="object") for(const k in dsMemo) delete dsMemo[k];
