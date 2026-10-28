/* ---------- Banco de questões: a alternativa correta é sempre a primeira no dado; o app embaralha. ---------- */
const CATS={
 rh:{n:"Recursos Humanos",b:"adm"}, sgi:{n:"Sistema de Gestão Integrado",b:"adm"}, patr:{n:"Administração Patrimonial",b:"adm"},
 manut:{n:"Gestão da Manutenção",b:"adm"}, ind:{n:"Indicadores e ESG",b:"adm"},
 matfin:{n:"Matemática Financeira",b:"fin"}, contab:{n:"Registros Contábeis",b:"fin"}, fluxo:{n:"Fluxo de Caixa",b:"fin"}, bp:{n:"Balanço Patrimonial e DRE",b:"fin"},
 log:{n:"Logística e Cadeia de Suprimentos",b:"log"}, transp:{n:"Modalidades de Transporte",b:"log"}, estoq:{n:"Gestão de Estoques",b:"log"},
 armaz:{n:"Armazenagem",b:"log"}, manus:{n:"Manuseio e Embalagem",b:"log"}, compras:{n:"Compras e Licitações (13.303 e 14.133)",b:"log"}, contr:{n:"Gestão de Contratos",b:"log"},
 info:{n:"Informática",b:"info"}, lgpd:{n:"Segurança da Informação e LGPD",b:"info"},
 port:{n:"Língua Portuguesa",b:"port"}, mat:{n:"Matemática",b:"mat"}
};
const BLOCKS={adm:"Processos Administrativos",fin:"Finanças e Contabilidade",log:"Logística, Compras e Contratos",info:"Informática",port:"Língua Portuguesa",mat:"Matemática"};

const Q=[
/* RH */
["rh","Uma empresa decide preencher a vaga de supervisor de almoxarifado por meio de recrutamento interno. Uma vantagem típica dessa escolha é",["a motivação dos empregados e o aproveitamento de quem já conhece a cultura e os processos da empresa","a renovação da cultura organizacional com ideias trazidas do mercado","a ampliação do banco de talentos com candidatos externos","a eliminação da necessidade de treinamento do promovido","a ausência de vagas em cadeia, já que ninguém precisa ser substituído"],"Recrutamento interno motiva, é mais rápido e barato e aproveita quem já conhece a empresa. Renovar a cultura é vantagem do recrutamento externo, e o interno costuma gerar vagas em cadeia (efeito dominó)."],
["rh","Na avaliação de desempenho 360 graus, o avaliado",["recebe avaliações de superiores, pares, subordinados, clientes e de si mesmo","é avaliado exclusivamente pelo gestor imediato","é comparado aos colegas por meio de uma distribuição forçada","é avaliado apenas pelos incidentes críticos registrados no período","preenche uma escala gráfica sem qualquer retorno da chefia"],"A avaliação 360° reúne a visão de todos que se relacionam com o avaliado, incluindo a autoavaliação."],
["rh","Na gestão por competências, a sigla CHA significa",["Conhecimentos, Habilidades e Atitudes","Capacidade, Hierarquia e Autoridade","Cargo, Habilidade e Avaliação","Conhecimento, Hábito e Aptidão","Cultura, Hierarquia e Atitude"],"Competência = Conhecimento (saber), Habilidade (saber fazer) e Atitude (querer fazer)."],
["rh","A sequência correta das etapas do processo de treinamento é",["levantamento de necessidades, programação, execução e avaliação","programação, execução, levantamento de necessidades e avaliação","execução, avaliação, programação e levantamento de necessidades","avaliação, levantamento de necessidades, execução e programação","programação, levantamento de necessidades, avaliação e execução"],"Primeiro diagnostica-se o que falta (LNT), depois planeja-se, executa-se e avalia-se o resultado."],
["rh","Um gestor avaliou todos os aspectos do desempenho de um empregado como excelentes porque ele é muito pontual. Esse erro de avaliação é conhecido como",["efeito halo","tendência central","efeito recência","leniência","efeito contraste"],"No efeito halo, uma característica marcante contamina a avaliação de todas as outras. Tendência central é dar notas médias a todos; recência é pesar só fatos recentes."],
["rh","É exemplo de benefício legal, de concessão obrigatória pela empresa,",["o 13º salário","o plano odontológico","a previdência complementar","o seguro de vida em grupo","a ginástica laboral"],"13º salário, férias com 1/3 e FGTS decorrem de lei. Os demais são benefícios espontâneos, oferecidos por política da empresa."],
["rh","No plano de cargos e salários, a análise de cargos tem como foco principal",["os requisitos que o ocupante precisa ter: intelectuais, físicos, responsabilidades e condições de trabalho","a lista de tarefas executadas pelo ocupante no dia a dia","a definição do salário de mercado por meio de pesquisa salarial","o histórico de desempenho do atual ocupante","a escolha do candidato mais adequado para a vaga"],"A descrição de cargo diz o que se faz (tarefas). A análise de cargo diz o que o ocupante precisa ter para fazer (requisitos)."],
/* SGI */
["sgi","Um Sistema de Gestão Integrado que reúne qualidade, meio ambiente e saúde e segurança ocupacional baseia-se, tipicamente, nas normas",["ISO 9001, ISO 14001 e ISO 45001","ISO 9001, ISO 27001 e ISO 31000","ISO 14001, ISO 26000 e ISO 50001","ISO 19011, ISO 10002 e ISO 45001","ISO 9000, ISO 14004 e ABNT NBR 16001"],"9001 = qualidade, 14001 = meio ambiente, 45001 = SSO. A estrutura de alto nível comum (Anexo SL / estrutura harmonizada) facilita a integração."],
["sgi","Ao constatar um registro de estoque errado, o setor refez o lançamento (I) e depois revisou o procedimento que causou o erro, para que ele não se repita (II). As ações I e II são, respectivamente,",["correção e ação corretiva","ação corretiva e ação preventiva","ação preventiva e ação corretiva","correção e ação preventiva","melhoria contínua e correção"],"Correção elimina a não conformidade detectada. Ação corretiva elimina a causa, evitando a repetição. Ação preventiva trata uma não conformidade potencial, que ainda não ocorreu."],
["sgi","Na etapa C (Check) do ciclo PDCA, a organização",["mede os resultados e os compara com as metas planejadas","define metas e os métodos para alcançá-las","executa as tarefas conforme o plano e treina as pessoas","padroniza o que deu certo ou corrige o que falhou","elabora a política da qualidade da organização"],"Plan = planejar; Do = executar; Check = verificar/medir; Act = agir corretivamente ou padronizar."],
["sgi","As diretrizes para a realização de auditorias de sistemas de gestão constam da norma",["ABNT NBR ISO 19011","ABNT NBR ISO 31000","ABNT NBR ISO 9001","ABNT NBR ISO 14031","ABNT NBR ISO 26000"],"ISO 19011 = auditoria de sistemas de gestão. ISO 31000 = gestão de riscos; 14031 = desempenho ambiental; 26000 = responsabilidade social."],
["sgi","Segundo a ABNT NBR ISO 31000:2018, risco é definido como",["o efeito da incerteza nos objetivos","a probabilidade de ocorrência de um acidente grave","toda perda financeira decorrente de falhas operacionais","um perigo que já se materializou","a diferença entre o resultado previsto e o orçado"],"Na ISO 31000, risco é o efeito da incerteza nos objetivos, podendo ser positivo ou negativo."],
/* Patrimônio */
["patr","Uma máquina foi adquirida por R$ 120.000,00, com valor residual estimado de R$ 20.000,00 e vida útil de 10 anos. Pelo método linear, a depreciação anual é de",["R$ 10.000,00","R$ 12.000,00","R$ 8.000,00","R$ 14.000,00","R$ 20.000,00"],"(120.000 − 20.000) ÷ 10 = 10.000 por ano. O valor residual sai da base depreciável."],
["patr","Entre os bens a seguir, o que NÃO sofre depreciação é",["terreno","veículo","máquina industrial","edificação","móveis e utensílios"],"Terrenos não se desgastam pelo uso nem têm vida útil limitada, por isso não são depreciados. A edificação construída sobre ele é depreciada."],
["patr","O inventário em que grupos de itens são contados de forma programada ao longo do ano, sem paralisar a operação, é o inventário",["rotativo","geral anual","periódico de fechamento","extraordinário","por amostragem única"],"No inventário rotativo, parcelas do acervo são contadas em ciclos. O geral conta tudo de uma vez, normalmente no fechamento do exercício."],
["patr","Quando o valor contábil de um ativo é maior que o seu valor recuperável, a entidade deve",["reconhecer uma perda por redução ao valor recuperável (impairment)","reavaliar o ativo a valor de mercado, aumentando o PL","aumentar a vida útil para reduzir a depreciação","baixar o ativo imediatamente do balanço","aguardar a venda do bem para registrar qualquer ajuste"],"O CPC 01 exige reconhecer a perda (impairment) para que o ativo não fique registrado acima do que pode ser recuperado."],
["patr","Uma licença de software de gestão (ERP) adquirida pela empresa, para uso por vários anos, deve ser classificada no",["Ativo Não Circulante – Intangível","Ativo Não Circulante – Imobilizado","Ativo Circulante – Estoques","Ativo Não Circulante – Investimentos","Ativo Circulante – Despesas antecipadas"],"Software adquirido separadamente é ativo intangível: não tem substância física e gera benefícios futuros. É amortizado, não depreciado."],
/* Manutenção */
["manut","Em um terminal, as bombas passam por análise periódica de vibração e termografia, e a intervenção só ocorre quando os parâmetros indicam degradação. Trata-se de manutenção",["preditiva","corretiva não planejada","preventiva sistemática","corretiva planejada","detectiva"],"Preditiva = acompanhamento da condição do equipamento (vibração, temperatura, análise de óleo) para intervir no momento certo."],
["manut","Um equipamento apresenta MTBF de 90 horas e MTTR de 10 horas. Sua disponibilidade é de",["90%","9%","80%","11,1%","100%"],"Disponibilidade = MTBF ÷ (MTBF + MTTR) = 90 ÷ 100 = 90%."],
["manut","A troca de óleo de um compressor a cada 500 horas de funcionamento, independentemente do seu estado, caracteriza manutenção",["preventiva","preditiva","corretiva","detectiva","emergencial"],"Preventiva é feita em intervalos predefinidos de tempo ou uso, sem depender da condição medida."],
["manut","A principal desvantagem de adotar a manutenção corretiva não planejada como estratégia predominante é",["a ocorrência de paradas inesperadas, com alto custo de indisponibilidade e riscos à segurança","o excesso de inspeções programadas","a necessidade de instrumentos caros de monitoramento","a troca de peças ainda em bom estado","a elevada quantidade de ordens de serviço planejadas"],"Atuar só depois da falha gera paradas imprevistas, perdas de produção e risco operacional."],
["manut","No Planejamento e Controle da Manutenção (PCM), o backlog representa",["a carga de serviços pendentes, geralmente expressa em homens-hora ou dias de trabalho da equipe","o tempo médio entre falhas de um equipamento","o custo total anual da manutenção","o número de equipamentos parados no momento","o registro histórico das peças substituídas"],"Backlog é o estoque de serviços aguardando execução. Backlog crescente indica equipe subdimensionada ou demanda acima da capacidade."],
/* Indicadores */
["ind","O setor de compras cumpriu 100% das metas de prazo de entrega, mas gastou o dobro do orçamento previsto. O setor foi",["eficaz, mas não eficiente","eficiente, mas não eficaz","eficiente e eficaz","nem eficiente nem eficaz","efetivo, por ter cumprido o orçamento"],"Eficácia = atingir o objetivo (prazos atingidos). Eficiência = uso adequado dos recursos (orçamento estourado)."],
["ind","NÃO é uma das quatro perspectivas do Balanced Scorecard (BSC):",["concorrência","financeira","clientes","processos internos","aprendizado e crescimento"],"O BSC de Kaplan e Norton tem as perspectivas financeira, clientes, processos internos e aprendizado e crescimento."],
["ind","Pelo GHG Protocol, as emissões de gases de efeito estufa decorrentes da energia elétrica comprada pela empresa são classificadas como",["Escopo 2","Escopo 1","Escopo 3","Escopo 0","emissões evitadas"],"Escopo 1 = emissões diretas de fontes próprias (frota, caldeiras). Escopo 2 = energia comprada. Escopo 3 = demais emissões da cadeia de valor."],
["ind","Entre os indicadores a seguir, o que pertence tipicamente à dimensão G (governança) do ESG é",["o percentual de conselheiros independentes no Conselho de Administração","a taxa de frequência de acidentes do trabalho","o consumo de água por metro cúbico movimentado","as emissões de CO₂ da frota","o percentual de mulheres no quadro de empregados"],"Governança trata de conselho, ética, compliance e transparência. Acidentes e diversidade são S; água e emissões são E."],
["ind","A meta formulada de acordo com o critério SMART é",["reduzir em 15% o tempo médio de emissão de pedidos de compra até 30/06/2027","melhorar bastante o atendimento aos clientes internos","buscar sempre a excelência nos processos de compras","diminuir os custos assim que possível","ser referência em logística no país"],"SMART: específica, mensurável, atingível, relevante e com prazo. Só a primeira tem número, indicador e data."],
/* Matemática Financeira */
["matfin","Um capital de R$ 2.000,00 foi aplicado a juros simples de 3% ao mês durante 5 meses. O montante obtido é de",["R$ 2.300,00","R$ 2.318,55","R$ 2.030,00","R$ 2.150,00","R$ 3.000,00"],"J = C·i·t = 2.000 × 0,03 × 5 = 300. M = 2.000 + 300 = 2.300. (2.318,55 seria juros compostos.)"],
["matfin","Um capital de R$ 10.000,00 aplicado a juros compostos de 10% ao ano, por 2 anos, gera montante de",["R$ 12.100,00","R$ 12.000,00","R$ 11.000,00","R$ 12.200,00","R$ 12.010,00"],"M = 10.000 × (1,10)² = 10.000 × 1,21 = 12.100."],
["matfin","Um título de R$ 5.000,00 foi descontado 3 meses antes do vencimento, com taxa de desconto comercial simples de 2% ao mês. O valor recebido foi de",["R$ 4.700,00","R$ 4.716,98","R$ 4.850,00","R$ 4.900,00","R$ 4.400,00"],"Desconto comercial (por fora): D = N·d·t = 5.000 × 0,02 × 3 = 300. Valor atual = 4.700. (4.716,98 seria o desconto racional.)"],
["matfin","Um produto teve aumento de 20% e, em seguida, desconto de 20%. Em relação ao preço inicial, o preço final é",["4% menor","igual","4% maior","2% menor","20% menor"],"1,20 × 0,80 = 0,96, ou seja, 4% abaixo do preço original."],
["matfin","A juros simples de 5% ao mês, em quanto tempo um capital triplica?",["40 meses","20 meses","60 meses","30 meses","15 meses"],"Triplicar = juros iguais a 2C. 2C = C × 0,05 × t → t = 40 meses."],
/* Registros contábeis */
["contab","Pelo método das partidas dobradas,",["a todo débito corresponde um crédito de igual valor","as contas de ativo só recebem débitos","cada fato contábil exige dois lançamentos de débito","débitos e créditos podem ter valores diferentes no mesmo lançamento","só os fatos que envolvem caixa são registrados"],"Princípio de Luca Pacioli: soma dos débitos = soma dos créditos em cada lançamento."],
["contab","Uma empresa prestou serviços em dezembro de 2026 e recebeu o pagamento em janeiro de 2027. Pelo regime de competência, a receita deve ser reconhecida em",["dezembro de 2026","janeiro de 2027","metade em cada mês","somente quando a nota fiscal for paga","no encerramento do exercício de 2027"],"Na competência, receitas e despesas são reconhecidas quando ocorrem (fato gerador), independentemente do recebimento ou pagamento."],
["contab","Na compra de mercadorias à vista, o lançamento contábil correto é",["débito em Estoques e crédito em Caixa","débito em Caixa e crédito em Estoques","débito em Fornecedores e crédito em Estoques","débito em Estoques e crédito em Fornecedores","débito em CMV e crédito em Caixa"],"Ativo aumenta por débito e diminui por crédito: o estoque aumenta (D) e o caixa diminui (C). Se fosse a prazo, o crédito seria em Fornecedores."],
["contab","É exemplo de obrigação acessória:",["a transmissão da Escrituração Contábil Digital (ECD) pelo SPED","o recolhimento do IRPJ","o pagamento do ICMS do mês","a quitação do IPI devido","o recolhimento da contribuição previdenciária"],"Obrigação acessória é um dever de fazer (declarar, escriturar, emitir nota). Pagar tributo é obrigação principal."],
["contab","Segundo a Estrutura Conceitual (CPC 00 R2), as características qualitativas fundamentais da informação contábil útil são",["relevância e representação fidedigna","comparabilidade e tempestividade","verificabilidade e compreensibilidade","prudência e materialidade","continuidade e oportunidade"],"Fundamentais: relevância e representação fidedigna. De melhoria: comparabilidade, verificabilidade, tempestividade e compreensibilidade."],
["contab","O sócio de uma empresa pagou uma conta pessoal com dinheiro do caixa da empresa e registrou como despesa da empresa. Esse procedimento fere o princípio",["da entidade","da competência","da continuidade","do registro pelo valor original","da oportunidade"],"Pela entidade, o patrimônio da empresa não se confunde com o patrimônio dos sócios."],
/* Fluxo de caixa */
["fluxo","Na Demonstração dos Fluxos de Caixa, o pagamento pela compra de uma máquina para a produção é classificado nas atividades de",["investimento","financiamento","operacionais","não caixa","resultado"],"Aquisição e venda de ativo imobilizado e intangível são atividades de investimento."],
["fluxo","No método indireto da DFC, a despesa de depreciação do período",["é somada ao lucro líquido, por não representar saída de caixa","é subtraída do lucro líquido, por ser uma despesa","é classificada como atividade de investimento","não aparece na demonstração","é somada às atividades de financiamento"],"O indireto parte do lucro e reverte o que não mexeu no caixa. Depreciação reduziu o lucro sem sair dinheiro, então volta somando."],
["fluxo","A captação de um empréstimo bancário de longo prazo é classificada, na DFC, como atividade de",["financiamento","investimento","operacional","não caixa","resultado não operacional"],"Empréstimos obtidos, amortizações de dívidas e integralização de capital são atividades de financiamento."],
["fluxo","Uma empresa teve lucro líquido de R$ 40.000, depreciação de R$ 5.000, aumento de R$ 8.000 em Clientes e aumento de R$ 3.000 em Fornecedores. Pelo método indireto, o caixa gerado nas atividades operacionais foi de",["R$ 40.000","R$ 56.000","R$ 50.000","R$ 34.000","R$ 46.000"],"40.000 + 5.000 (depreciação) − 8.000 (mais clientes a receber, caixa não entrou) + 3.000 (mais fornecedores a pagar, caixa não saiu) = 40.000."],
["fluxo","O método direto da DFC caracteriza-se por apresentar",["as principais classes de recebimentos e pagamentos brutos, como recebimentos de clientes e pagamentos a fornecedores","a conciliação entre o lucro líquido e o caixa operacional","apenas as atividades de investimento","as variações do patrimônio líquido","os saldos das contas patrimoniais no fim do período"],"Direto = mostra as entradas e saídas brutas. Indireto = parte do lucro líquido e faz ajustes."],
/* BP e DRE */
["bp","Uma empresa possui Ativo total de R$ 500.000 e Passivo (exigível) de R$ 300.000. O seu Patrimônio Líquido é de",["R$ 200.000","R$ 800.000","R$ 300.000","R$ 500.000","−R$ 200.000"],"Equação fundamental: Ativo = Passivo + PL → PL = 500.000 − 300.000 = 200.000."],
["bp","Receita bruta: R$ 100.000; deduções da receita: R$ 10.000; CMV: R$ 50.000; despesas operacionais: R$ 20.000. O lucro bruto é de",["R$ 40.000","R$ 50.000","R$ 20.000","R$ 30.000","R$ 90.000"],"Receita líquida = 100.000 − 10.000 = 90.000. Lucro bruto = 90.000 − 50.000 = 40.000. As despesas operacionais entram depois do lucro bruto."],
["bp","Um empréstimo que vencerá daqui a 18 meses deve ser classificado no Balanço Patrimonial como",["Passivo Não Circulante","Passivo Circulante","Patrimônio Líquido","Ativo Não Circulante","Ativo Circulante"],"Obrigações com vencimento após o término do exercício seguinte (mais de 12 meses) vão para o Passivo Não Circulante."],
["bp","O lucro líquido apurado na DRE, ao final do exercício, é transferido para",["o Patrimônio Líquido, afetando lucros acumulados ou reservas","o Ativo Circulante, na conta Caixa","o Passivo Circulante, como dividendos a pagar na totalidade","a Demonstração dos Fluxos de Caixa, como atividade de financiamento","o Ativo Não Circulante, como investimento"],"A DRE se liga ao Balanço pelo PL. A movimentação aparece na DMPL ou na DLPA."],
["bp","Na estrutura da DRE, logo após o lucro bruto são deduzidas as",["despesas operacionais (vendas, administrativas e outras)","deduções da receita bruta","provisões para IR e CSLL","participações nos lucros","receitas de vendas canceladas"],"Ordem: receita bruta → deduções → receita líquida → CMV → lucro bruto → despesas operacionais → resultado antes do IR → IR/CSLL → lucro líquido."],
/* Logística */
["log","O processo que trata do retorno de produtos pós-venda e pós-consumo ao ciclo produtivo ou à destinação ambientalmente adequada é a",["logística reversa","logística de abastecimento","cross-docking","logística de distribuição física","milk run"],"Logística reversa está prevista na Política Nacional de Resíduos Sólidos (Lei 12.305/2010)."],
["log","O efeito chicote (bullwhip effect) na cadeia de suprimentos é",["a amplificação da variação dos pedidos à medida que se sobe na cadeia, do varejo ao fornecedor","a redução dos estoques pelo compartilhamento de informações","o aumento das vendas causado por promoções","o retorno de embalagens vazias ao fabricante","a queda de preços causada pela concorrência"],"Pequenas variações na ponta viram grandes oscilações nos elos anteriores. O compartilhamento de informação reduz o efeito."],
["log","A tecnologia que permite identificar itens a distância, sem contato visual direto, por meio de etiquetas e leitores de ondas de rádio, é",["RFID","código de barras","EDI","QR Code","OCR"],"RFID = identificação por radiofrequência. Código de barras e QR Code exigem leitura com linha de visada."],
["log","A operação em que as mercadorias recebidas são transferidas diretamente para a expedição, com pouca ou nenhuma armazenagem, é o",["cross-docking","picking","milk run","just in time","drop shipping"],"No cross-docking, o CD funciona como ponto de transbordo, reduzindo estoque e tempo."],
["log","É uma prática associada à logística verde:",["a roteirização para reduzir distâncias e consumo de combustível","o aumento da frequência de entregas fracionadas","o uso exclusivo do modal aéreo para reduzir prazos","o descarte de embalagens em aterro comum","a manutenção de estoques elevados em vários depósitos"],"Logística verde busca reduzir o impacto ambiental: rotas otimizadas, modais menos poluentes, embalagens recicláveis e logística reversa."],
/* Transporte */
["transp","O modal dutoviário caracteriza-se por",["alto custo fixo de implantação, baixo custo variável e fluxo contínuo de líquidos e gases","baixo custo fixo e alto custo variável","grande flexibilidade de rotas e de tipos de carga","indicação para cargas de alto valor e baixo peso","dependência de condições climáticas para operar"],"Dutos exigem investimento alto, mas operam com custo variável baixo e grande confiabilidade. É o principal modal da Transpetro."],
["transp","A operação que utiliza dois ou mais modais sob um único contrato e um único documento, emitido pelo Operador de Transporte Multimodal (OTM), é denominada",["multimodalidade","intermodalidade","transbordo","cabotagem","roll-on/roll-off"],"Multimodal = um contrato, um documento, um responsável (OTM, Lei 9.611/1998). Intermodal = vários modais com documentos e responsáveis separados."],
["transp","A agência reguladora responsável pelo transporte aquaviário no Brasil é a",["ANTAQ","ANTT","ANAC","ANP","ANEEL"],"ANTAQ = aquaviário; ANTT = rodoviário e ferroviário; ANAC = aéreo; ANP = petróleo, gás e biocombustíveis."],
["transp","A navegação realizada entre portos do território brasileiro, utilizando a via marítima ao longo da costa, é a",["cabotagem","navegação de longo curso","navegação interior","navegação de apoio portuário","navegação fluvial"],"Cabotagem = entre portos nacionais pela costa. Longo curso = entre portos brasileiros e estrangeiros."],
["transp","O modal mais indicado para cargas urgentes, de alto valor agregado e baixo peso, apesar do maior custo de frete, é o",["aéreo","dutoviário","ferroviário","hidroviário","rodoviário de longa distância"],"O aéreo é o mais rápido e o mais caro, adequado a eletrônicos, medicamentos e peças urgentes."],
/* Estoques */
["estoq","Um item tem consumo de 50 unidades por dia, tempo de reposição de 6 dias e estoque de segurança de 100 unidades. O ponto de pedido é",["400 unidades","300 unidades","350 unidades","600 unidades","156 unidades"],"PP = demanda × tempo de reposição + estoque de segurança = 50 × 6 + 100 = 400."],
["estoq","Na classificação ABC de estoques, os itens da classe A são",["poucos itens que representam a maior parte do valor total","muitos itens de baixo valor unitário","itens obsoletos, sem movimentação","itens de valor intermediário e quantidade média","itens de consumo exclusivo da manutenção"],"Classe A: cerca de 20% dos itens e cerca de 80% do valor (Pareto). Merecem controle mais rigoroso."],
["estoq","Entradas: 10 unidades a R$ 10,00 e, depois, 10 unidades a R$ 12,00. Saída: 15 unidades. Pelo método PEPS, o custo da saída é",["R$ 160,00","R$ 165,00","R$ 170,00","R$ 150,00","R$ 180,00"],"PEPS: saem primeiro as mais antigas. 10 × 10 + 5 × 12 = 160. Pelo custo médio (R$ 11) seria 165."],
["estoq","Em período de preços crescentes, a avaliação de estoques pelo PEPS, comparada à média ponderada, resulta em",["CMV menor e estoque final maior","CMV maior e estoque final menor","CMV e estoque final iguais","CMV menor e estoque final menor","CMV maior e estoque final maior"],"No PEPS saem os custos antigos (mais baratos), então o CMV fica menor e o estoque final fica com os custos novos (mais caros)."],
["estoq","Uma empresa teve CMV anual de R$ 600.000 e estoque médio de R$ 150.000. O giro do estoque no ano foi de",["4 vezes","0,25 vez","3 vezes","6 vezes","12 vezes"],"Giro = CMV ÷ estoque médio = 600.000 ÷ 150.000 = 4. A cobertura é 12 ÷ 4 = 3 meses."],
["estoq","Ao elevar o nível de serviço desejado (menor chance de faltar o item), mantidas as demais condições, a empresa deve",["aumentar o estoque de segurança","reduzir o estoque de segurança","eliminar o ponto de pedido","aumentar o intervalo entre pedidos sem alterar o estoque","reduzir o lote de compra a zero"],"Estoque de segurança protege contra incertezas de demanda e de prazo. Mais proteção exige mais estoque."],
/* Armazenagem */
["armaz","A estrutura porta-paletes em que a entrada e a retirada ocorrem por lados opostos, favorecendo o PEPS, é a",["drive-through","drive-in","porta-palete seletivo de dupla profundidade","push-back","cantilever"],"Drive-through tem acesso pelos dois lados: o primeiro palete que entra é o primeiro a sair. No drive-in o acesso é por um lado só (UEPS)."],
["armaz","O sistema de informação voltado à gestão de endereçamento, recebimento, separação (picking) e inventário dentro do armazém é o",["WMS","TMS","MRP","CRM","EDI"],"WMS = Warehouse Management System. TMS = gestão de transporte; MRP = planejamento de materiais."],
["armaz","No layout de armazém em U,",["recebimento e expedição ficam do mesmo lado, permitindo compartilhar docas e equipes","recebimento e expedição ficam em extremidades opostas, com fluxo em linha reta","o fluxo forma um ângulo de 90 graus entre recebimento e expedição","não há área de expedição definida","toda a carga é movimentada por gravidade"],"Layout em U compartilha docas e é flexível. Em I (linear), as docas ficam em lados opostos; em L, o fluxo faz um ângulo reto."],
["armaz","A atividade de separar os itens de cada pedido a partir dos locais de armazenagem é denominada",["picking","packing","put-away","slotting","milk run"],"Picking = separação de pedidos. Put-away = guarda no endereço. Packing = embalagem para expedição."],
["armaz","O recinto em que mercadorias importadas permanecem sob controle aduaneiro, ainda não nacionalizadas, é o",["armazém alfandegado","centro de distribuição avançado","depósito fechado de uso exclusivo do varejo","armazém de cross-docking","almoxarifado de manutenção"],"No armazém alfandegado a carga fica sob controle da Receita Federal até o desembaraço."],
/* Manuseio e embalagem */
["manus","O agrupamento de vários volumes em uma única unidade de carga, como palete ou contêiner, para movimentação conjunta, é a",["unitização","consolidação tributária","fracionamento","picking","cubagem"],"Unitização reduz manuseios, tempo de carga/descarga e avarias."],
["manus","O palete padrão PBR, muito utilizado no Brasil, tem dimensões de",["1,00 m × 1,20 m","0,80 m × 1,20 m","1,10 m × 1,10 m","1,20 m × 1,40 m","1,00 m × 1,00 m"],"PBR = 1,00 × 1,20 m. O 0,80 × 1,20 m é o euro palete."],
["manus","A caixa de papelão que agrupa 12 frascos de um produto, cada um já em sua própria embalagem, é uma embalagem",["secundária","primária","terciária","de contenção direta","individual"],"Primária: contato direto com o produto. Secundária: agrupa primárias. Terciária: agrupa secundárias para transporte."],
["manus","O veículo de movimentação que se desloca sem operador, seguindo trajetos programados no armazém, é o",["AGV","transpaleteira manual","empilhadeira contrabalançada","ponte rolante","talha manual"],"AGV = Automated Guided Vehicle, uma das tecnologias de automação do manuseio."],
["manus","Entre os princípios da movimentação eficiente de materiais, está",["reduzir distâncias e eliminar manuseios desnecessários","movimentar sempre unidades individuais","aumentar o número de transferências entre áreas","evitar o uso da gravidade nas movimentações","priorizar movimentações manuais em todas as etapas"],"Princípios clássicos: carga unitária, menor distância, menos manuseios, uso da gravidade e da mecanização quando viável."],
/* Compras */
["compras","Segundo a Lei 13.303/2016, nas licitações das empresas estatais deve ser adotado preferencialmente, para a aquisição de bens e serviços comuns, o",["pregão","leilão","concurso","diálogo competitivo","convite"],"Art. 32, IV: adoção preferencial da modalidade pregão (Lei 10.520/2002) para bens e serviços comuns."],
["compras","Na Lei 13.303/2016, a contratação direta por inexigibilidade de licitação ocorre quando",["houver inviabilidade de competição","o valor for inferior ao limite de dispensa","houver situação de emergência","a licitação anterior for deserta","o contratado for microempresa"],"Art. 30: inexigibilidade = competição inviável (fornecedor exclusivo, serviço técnico especializado de notória especialização). Valor baixo e emergência são hipóteses de dispensa."],
["compras","NÃO é modalidade de licitação prevista na Lei 14.133/2021:",["tomada de preços","pregão","concorrência","leilão","diálogo competitivo"],"A Lei 14.133 prevê pregão, concorrência, concurso, leilão e diálogo competitivo. Tomada de preços e convite foram extintos."],
["compras","É critério de julgamento previsto no art. 54 da Lei 13.303/2016:",["maior retorno econômico","menor prazo de entrega","maior capital social do licitante","maior número de atestados técnicos","menor distância entre a sede do licitante e a estatal"],"Critérios do art. 54: menor preço, maior desconto, técnica e preço, melhor técnica, melhor conteúdo artístico, maior oferta de preço, maior retorno econômico e melhor destinação de bens alienados."],
["compras","Na Lei 13.303/2016, quanto à ordem das fases da licitação, a habilitação",["ocorre, como regra, após o julgamento das propostas, podendo excepcionalmente anteceder as fases seguintes","ocorre sempre antes da apresentação das propostas","é dispensada em todas as licitações","ocorre somente após a assinatura do contrato","é realizada simultaneamente à fase de divulgação"],"Art. 51: preparação, divulgação, lances/propostas, julgamento, verificação de efetividade, negociação, habilitação, recursos, adjudicação e homologação."],
["compras","Na Lei 13.303/2016, o valor estimado do contrato a ser celebrado, em regra,",["é sigiloso, podendo ser divulgado de forma justificada","deve constar obrigatoriamente do edital","é divulgado apenas aos licitantes habilitados antes das propostas","é definido pelo licitante vencedor","é publicado no Diário Oficial antes da licitação"],"Art. 34: o orçamento estimado é sigiloso, facultada a divulgação mediante justificativa; fica disponível aos órgãos de controle."],
["compras","Na Lei 14.133/2021, o pregão é a modalidade obrigatória para a aquisição de",["bens e serviços comuns","obras de grande vulto","serviços técnicos de natureza intelectual","alienação de bens imóveis","escolha de trabalho artístico"],"Art. 29: pregão é obrigatório para bens e serviços comuns. Concurso = trabalho técnico/artístico; leilão = alienação."],
/* Contratos */
["contr","Segundo a Lei 13.303/2016, a duração dos contratos, em regra,",["não pode exceder 5 anos, salvo exceções previstas, como projetos do plano de negócios e investimentos","não pode exceder 12 meses","é indeterminada, a critério da estatal","não pode exceder 10 anos em qualquer caso","é limitada à vigência do orçamento anual"],"Art. 71: até 5 anos, exceto projetos do plano de negócios e investimentos ou quando a prorrogação for prática rotineira de mercado."],
["contr","Nas alterações de contratos da Lei 13.303/2016, os acréscimos ou supressões de obras, serviços ou compras podem chegar a",["25% do valor inicial atualizado, e até 50% para acréscimos em reforma de edifício ou equipamento","10% do valor inicial, sem exceções","50% do valor inicial em qualquer caso","100% do valor, desde que haja acordo","15% do valor, e até 30% em obras"],"Art. 81, § 1º: limite de 25%; para reforma de edifício ou de equipamento, até 50% nos acréscimos. A Lei 14.133 (art. 125) tem os mesmos limites."],
["contr","Diferentemente do regime da Lei 14.133/2021, os contratos regidos pela Lei 13.303/2016",["somente podem ser alterados por acordo entre as partes","podem ser alterados unilateralmente pela estatal a qualquer tempo","não admitem alteração de valor","dispensam a formalização por escrito","não podem ser prorrogados"],"Art. 72: os contratos das estatais só podem ser alterados por acordo entre as partes. Eles se regem também por preceitos de direito privado (art. 68)."],
["contr","Na Lei 14.133/2021, cabe ao fiscal do contrato",["anotar em registro próprio as ocorrências da execução e determinar a regularização de falhas","assinar o contrato em nome do órgão","julgar as propostas da licitação","aplicar diretamente as sanções de suspensão e declaração de inidoneidade","definir o valor estimado da contratação"],"Art. 117: o fiscal acompanha a execução, registra ocorrências e determina o que for necessário para regularizar falhas."],
["contr","O reajuste de preços já previsto no próprio contrato pode ser formalizado por",["apostilamento","termo aditivo obrigatório","nova licitação","rescisão e nova contratação","distrato"],"Lei 14.133, art. 136: reajuste previsto contratualmente pode ser feito por apostila. Mudanças de escopo, prazo ou valor fora do previsto exigem termo aditivo."],
["contr","Segundo a Lei 14.063/2020, o tipo de assinatura eletrônica que utiliza certificado digital ICP-Brasil e oferece o maior nível de confiabilidade é a",["assinatura eletrônica qualificada","assinatura eletrônica simples","assinatura eletrônica avançada","assinatura digitalizada","assinatura por token SMS"],"A Lei 14.063/2020 define três níveis: simples, avançada e qualificada. A qualificada usa certificado ICP-Brasil."],
/* Informática */
["info","No Windows 11, o atalho que bloqueia imediatamente a sessão do usuário é",["Windows + L","Windows + D","Windows + E","Ctrl + Alt + Tab","Alt + F4"],"Win + L bloqueia. Win + D mostra a área de trabalho; Win + E abre o Explorador de Arquivos."],
["info","No Windows 11, o atalho Windows + V",["abre o histórico da área de transferência","cola o último item copiado sem formatação","abre o Explorador de Arquivos","alterna entre janelas abertas","abre as configurações de vídeo"],"Win + V mostra o histórico da área de transferência (precisa estar ativado)."],
["info","No Excel, a célula C1 contém =A1*$B$1. Ao copiar essa fórmula para C2, ela passa a ser",["=A2*$B$1","=A2*$B$2","=A1*$B$1","=A2*B2","=B2*$B$1"],"O $ fixa linha e coluna. A1 é relativa e vira A2; $B$1 é absoluta e não muda."],
["info","No Excel, as células A1 a A5 contêm 4, 8, 6, 10 e 2. A fórmula =MED(A1:A5) retorna",["6","30","7","10","2"],"MED é a mediana: ordenando (2, 4, 6, 8, 10), o valor central é 6. A média seria 6 também, mas 30 é a soma."],
["info","No PowerPoint, o atalho que inicia a apresentação a partir do slide atual é",["Shift + F5","F5","Ctrl + F5","Alt + F5","F7"],"F5 inicia do primeiro slide; Shift + F5 inicia do slide selecionado."],
["info","No Word, o atalho Ctrl + Enter insere",["uma quebra de página","uma nova linha no mesmo parágrafo","uma tabulação","uma quebra de seção contínua","um novo comentário"],"Ctrl + Enter = quebra de página. Shift + Enter = quebra de linha sem novo parágrafo."],
["info","Sobre os componentes do computador, é correto afirmar que a memória RAM",["é volátil, perdendo seu conteúdo quando o computador é desligado","armazena permanentemente o sistema operacional","é mais lenta que um disco rígido HDD","é um tipo de memória somente de leitura","substitui a memória cache do processador"],"RAM é memória principal, rápida e volátil. Armazenamento permanente fica em SSD/HDD; ROM é somente leitura."],
["info","A memória cache do processador caracteriza-se por ser",["pequena e muito rápida, guardando dados usados com frequência pela CPU","grande e lenta, usada para backup","um tipo de armazenamento externo","não volátil, como o SSD","exclusiva das placas de vídeo"],"Cache (L1, L2, L3) fica entre a CPU e a RAM. Quanto mais próxima do núcleo (L1), menor e mais rápida."],
["info","Uma intranet é",["uma rede privada que utiliza as mesmas tecnologias e protocolos da internet, como TCP/IP e HTTP","uma rede pública acessível a qualquer usuário","um tipo de navegador corporativo","uma rede que não utiliza protocolos da internet","o mesmo que extranet"],"Intranet = rede interna e restrita com tecnologia da internet. Extranet = parte da intranet aberta a parceiros externos autorizados."],
["info","A janela de navegação privada (anônima ou InPrivate) de um navegador",["não salva histórico, cookies e dados de formulário no dispositivo após fechada, mas não oculta a navegação do provedor ou da empresa","torna o usuário totalmente anônimo na internet","bloqueia qualquer tipo de vírus","criptografa todos os sites visitados","impede que os sites saibam o endereço IP do usuário"],"O modo privado só evita registros locais. A rede, o provedor e os sites ainda veem o tráfego."],
["lgpd","Um e-mail falso, que imita a comunicação do banco e induz o usuário a clicar em um link e digitar sua senha, é um ataque de",["phishing","ransomware","DDoS","worm","keylogger físico"],"Phishing usa engenharia social para roubar dados. Ransomware criptografa arquivos e cobra resgate."],
["lgpd","O malware que criptografa os arquivos da vítima e exige pagamento para liberar o acesso é o",["ransomware","spyware","adware","rootkit","cavalo de Troia"],"Ransomware = sequestro de dados. A principal defesa é manter backups atualizados e isolados."],
["lgpd","Pela LGPD, é exemplo de dado pessoal sensível",["a biometria facial usada no controle de acesso","o número de CPF","o endereço de e-mail corporativo","o endereço residencial","o telefone celular"],"Dados sensíveis (art. 5º, II): origem racial ou étnica, religião, opinião política, filiação sindical, saúde, vida sexual, genética e biometria."],
["lgpd","Na LGPD, o agente de tratamento que realiza o tratamento de dados pessoais em nome do controlador é o",["operador","encarregado","titular","controlador conjunto","ANPD"],"Controlador decide sobre o tratamento; operador executa em nome dele; encarregado (DPO) é o canal com titulares e ANPD."],
["lgpd","O encarregado pelo tratamento de dados pessoais (DPO), segundo a LGPD, é",["a pessoa indicada para atuar como canal de comunicação entre controlador, titulares e ANPD","o titular dos dados","a pessoa que executa o tratamento em nome do controlador","o órgão federal que fiscaliza a lei","o fornecedor do sistema de banco de dados"],"Art. 5º, VIII: o encarregado faz a ponte entre controlador, titulares e Autoridade Nacional de Proteção de Dados."],
["lgpd","Sobre a LGPD, é correto afirmar que",["o tratamento de dados pode ocorrer sem consentimento quando necessário ao cumprimento de obrigação legal ou regulatória","o consentimento é a única base legal para tratar dados pessoais","a lei se aplica apenas a dados em meio digital","a lei não se aplica a empresas públicas e sociedades de economia mista","dados anonimizados continuam sendo considerados dados pessoais"],"A LGPD tem 10 bases legais (art. 7º), e o consentimento é só uma delas. Ela vale para meio físico e digital e para estatais."],
/* Português */
["port","Assinale a frase em que o sinal indicativo de crase está empregado corretamente.",["O relatório foi entregue à gerente de compras.","O técnico começou à trabalhar cedo.","A análise será feita à partir de hoje.","Referiu-se à este contrato na reunião.","Os fiscais chegaram à tempo da vistoria."],"Entregar algo a alguém + a gerente = à. Não há crase antes de verbo, de pronome demonstrativo 'este', na expressão 'a partir de' e em 'a tempo'."],
["port","Está correto, quanto ao uso da crase:",["Os técnicos irão à Bahia na próxima semana.","Os técnicos irão à Brasília na próxima semana.","Ficaram frente à frente durante a negociação.","A compra foi paga à prazo.","O gestor dirigiu-se à ele com cordialidade."],"Volto da Bahia → vou à Bahia. Volto de Brasília → vou a Brasília. Não há crase entre palavras repetidas, antes de 'prazo' (masculino) nem antes de pronome pessoal."],
["port","Assinale a frase que está de acordo com a norma-padrão quanto à concordância verbal.",["Houve várias reuniões para definir o cronograma.","Haviam muitos candidatos na sala.","Fazem três anos que o terminal foi inaugurado.","Existe muitos riscos nessa operação.","Devem haver soluções para o problema."],"'Haver' no sentido de existir e 'fazer' indicando tempo são impessoais (ficam no singular), inclusive na locução 'deve haver'. 'Existir' concorda com o sujeito: existem riscos."],
["port","Está correta, quanto à concordância nominal, a frase:",["Seguem anexas as notas fiscais do mês.","Segue anexo as notas fiscais do mês.","As planilhas vão anexo ao e-mail.","Ela estava meia cansada após o plantão.","É proibida entrada de pessoas sem crachá."],"'Anexo' concorda com o substantivo. 'Meio' como advérbio (= um pouco) é invariável. 'É proibido entrada' (sem artigo) ou 'É proibida a entrada' (com artigo)."],
["port","Assinale a frase pontuada de acordo com a norma-padrão.",["Os fiscais do contrato, conforme o edital, devem registrar todas as ocorrências.","Os fiscais do contrato, devem registrar todas as ocorrências.","Os fiscais, do contrato devem registrar todas as ocorrências.","Os fiscais do contrato devem, registrar todas as ocorrências.","Os fiscais do contrato devem registrar, todas as ocorrências."],"Não se separa sujeito de verbo nem verbo de complemento por vírgula. A expressão intercalada 'conforme o edital' deve vir entre vírgulas."],
["port","Em 'Embora o prazo fosse curto, a equipe concluiu o inventário', a conjunção destacada pode ser substituída, sem alteração de sentido, por",["Ainda que","Porque","Desde que","Visto que","À medida que"],"'Embora' é concessiva, assim como 'ainda que', 'conquanto' e 'mesmo que'. 'Porque' e 'visto que' são causais; 'desde que' é condicional; 'à medida que' é proporcional."],
["port","'O estoque mínimo foi atingido; ______, o pedido de compra foi emitido com urgência.' A lacuna é preenchida adequadamente por",["portanto","todavia","embora","contudo","entretanto"],"A segunda oração é conclusão da primeira, então pede conjunção conclusiva (portanto, logo, por isso). As demais são adversativas ou concessiva."],
["port","Assinale a frase em que todas as palavras estão grafadas corretamente.",["A paralisação gerou uma exceção no processo de análise.","A paralização gerou uma exceção no processo de análise.","A paralisação gerou uma excessão no processo de análise.","A paralisação gerou uma exceção no processo de análize.","A paralizasão gerou uma esceção no processo de análise."],"Grafias corretas: paralisação (de paralisar), exceção, análise."],
["port","Em 'O diretor ratificou a decisão da comissão', o verbo destacado significa",["confirmou","corrigiu","anulou","adiou","questionou"],"Ratificar = confirmar. Retificar = corrigir. São parônimos muito cobrados."],
["port","Em 'O risco de vazamento era iminente', a palavra destacada significa",["prestes a acontecer","notável, ilustre","remoto, improvável","já superado","inexistente"],"Iminente = que está para acontecer. Eminente = elevado, ilustre."],
["port","Assinale a frase correta quanto ao emprego de 'mal' e 'mau'.",["O equipamento foi mal instalado.","Ele teve um mal dia no trabalho.","A peça foi mau dimensionada.","O mau da empresa foi não planejar.","Não há mau nenhum em revisar o contrato."],"'Mal' é advérbio (oposto de bem) ou substantivo ('o mal'). 'Mau' é adjetivo (oposto de bom): um mau dia."],
["port","Está de acordo com a norma-padrão o emprego de 'onde/aonde' em:",["Aonde os técnicos foram depois da vistoria?","Aonde fica o almoxarifado central?","Esta é a cidade aonde moro.","O setor aonde trabalho foi reformado.","Aonde está o relatório de estoque?"],"'Aonde' = a + onde, usado com verbos de movimento que pedem 'a' (ir a). Com 'ficar', 'morar', 'trabalhar' e 'estar' usa-se 'onde'."],
["port","Em 'Os candidatos estavam bastante confiantes', a palavra 'bastante' classifica-se como",["advérbio","adjetivo","pronome indefinido","substantivo","conjunção"],"Modificando o adjetivo 'confiantes', 'bastante' é advérbio de intensidade e fica invariável. Em 'bastantes candidatos' seria pronome e variaria."],
["port","Assinale a frase correta quanto à concordância com a partícula 'se'.",["Alugam-se salas comerciais no terminal.","Aluga-se salas comerciais no terminal.","Precisam-se de auxiliares de almoxarifado.","Vende-se equipamentos usados.","Consertam-se o equipamento quebrado."],"Com verbo transitivo direto, o 'se' é apassivador e o verbo concorda com o sujeito (salas são alugadas). Com verbo que pede preposição (precisar de), o 'se' indetermina o sujeito e o verbo fica no singular."],
["port","Leia: 'A transição energética não significa abandonar de imediato os combustíveis fósseis, mas reduzir gradualmente sua participação na matriz, enquanto se ampliam as fontes renováveis.' Depreende-se do trecho que",["a mudança é progressiva e prevê a convivência temporária entre fontes fósseis e renováveis","os combustíveis fósseis devem ser eliminados imediatamente","as fontes renováveis já substituíram as fósseis","a participação dos fósseis na matriz deve crescer","a transição energética é inviável"],"As expressões 'não ... de imediato', 'gradualmente' e 'enquanto se ampliam' indicam processo progressivo e simultâneo."],
["port","Assinale a frase correta quanto ao emprego do pronome relativo.",["O fornecedor cujo contrato venceu foi notificado.","O fornecedor cujo o contrato venceu foi notificado.","O fornecedor que o contrato dele venceu foi notificado.","O fornecedor cuja contrato venceu foi notificado.","O fornecedor onde o contrato venceu foi notificado."],"'Cujo' indica posse, concorda com o termo seguinte (contrato → cujo) e nunca é seguido de artigo."],
/* Matemática */
["mat","Quatro máquinas iguais produzem 600 peças em 5 dias. Quantas peças 6 dessas máquinas produzem em 8 dias, no mesmo ritmo?",["1.440","1.200","960","1.600","720"],"Cada máquina faz 600 ÷ (4 × 5) = 30 peças/dia. 6 × 8 × 30 = 1.440."],
["mat","As raízes da equação x² − 5x + 6 = 0 são",["2 e 3","−2 e −3","1 e 6","−1 e 6","5 e 6"],"Soma = 5 e produto = 6 → 2 e 3. Conferindo: 4 − 10 + 6 = 0."],
["mat","De um grupo de 6 empregados, deseja-se formar uma comissão de 3 pessoas. O número de comissões diferentes é",["20","120","18","216","60"],"A ordem não importa: C(6,3) = 6 × 5 × 4 ÷ (3 × 2 × 1) = 20."],
["mat","O número de anagramas da palavra PETRO é",["120","24","60","25","720"],"5 letras distintas: P5 = 5! = 120."],
["mat","Lançando-se dois dados honestos, a probabilidade de a soma das faces ser 7 é",["1/6","1/12","7/36","1/36","5/36"],"Casos favoráveis: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 de 36 = 1/6."],
["mat","No conjunto {2, 4, 4, 6, 9}, a média, a mediana e a moda são, respectivamente,",["5, 4 e 4","5, 6 e 4","4, 4 e 5","5, 4 e 9","6, 4 e 4"],"Média = 25 ÷ 5 = 5. Mediana = termo central = 4. Moda = valor mais frequente = 4."],
["mat","Os catetos de um triângulo retângulo medem 6 cm e 8 cm. A altura relativa à hipotenusa mede",["4,8 cm","5 cm","10 cm","7 cm","2,4 cm"],"Hipotenusa = 10 (Pitágoras). Relação métrica: a·h = b·c → 10h = 48 → h = 4,8."],
["mat","Um tanque cilíndrico tem raio da base de 2 m e altura de 5 m. Seu volume é",["20π m³","10π m³","40π m³","4π m³","100π m³"],"V = π·r²·h = π × 4 × 5 = 20π m³ (cerca de 62,8 m³)."],
["mat","Se 2^(x + 1) = 16, então x vale",["3","4","2","8","5"],"16 = 2⁴ → x + 1 = 4 → x = 3."],
["mat","No sistema x + y = 10 e x − y = 4, o produto x·y vale",["21","24","16","40","14"],"Somando as equações: 2x = 14 → x = 7, y = 3. Produto = 21."],
["mat","Um capital de R$ 1.000,00 aplicado a juros compostos de 2% ao mês, por 2 meses, gera montante de",["R$ 1.040,40","R$ 1.040,00","R$ 1.020,00","R$ 1.044,00","R$ 1.004,00"],"M = 1.000 × (1,02)² = 1.000 × 1,0404 = 1.040,40."],
["mat","A variância populacional do conjunto {3, 5, 7} é",["8/3","4","2","8","√8"],"Média = 5. Desvios ao quadrado: 4, 0 e 4 → soma 8. Variância = 8 ÷ 3."],
["mat","Uma escada de 10 m está apoiada em uma parede, formando 30° com o chão. A altura atingida na parede é",["5 m","5√3 m","10 m","8 m","√3 m"],"Altura = 10 × sen 30° = 10 × 1/2 = 5 m."],
["mat","É um número racional:",["0,333...","√2","π","√3","o número de Euler (e)"],"0,333... = 1/3, dízima periódica, logo racional. Os demais são irracionais."],
["mat","Uma senha é formada por 3 letras distintas escolhidas entre A, B, C, D e E. Quantas senhas são possíveis?",["60","125","10","15","120"],"A ordem importa e não há repetição: 5 × 4 × 3 = 60."],
["mat","30% de 40% de 500 é igual a",["60","70","200","150","35"],"0,40 × 500 = 200; 0,30 × 200 = 60."],
["mat","Se f(x) = 3x − 2, então f(4) é igual a",["10","12","14","6","8"],"f(4) = 3 × 4 − 2 = 10."],
["mat","Um terreno retangular mede 20 m por 15 m. Para cercá-lo com uma volta de arame, são necessários",["70 m","300 m","35 m","140 m","50 m"],"Perímetro = 2 × (20 + 15) = 70 m. 300 m² seria a área."]
];

/* ---------- Questões extras (v2): reforço nas específicas ---------- */
Q.push(
/* RH */
["rh","No modelo de Kirkpatrick para avaliação de treinamentos, o nível que verifica se o participante passou a aplicar no trabalho o que aprendeu é o de",["comportamento","reação","aprendizagem","resultados","retorno sobre o investimento"],"Kirkpatrick: 1) reação (gostou?), 2) aprendizagem (aprendeu?), 3) comportamento (aplica no trabalho?), 4) resultados (impactou o negócio?)."],
["rh","O plano de carreira em Y caracteriza-se por",["oferecer ao profissional técnico a opção de crescer na carreira sem precisar assumir cargos de gestão","permitir crescimento apenas por meio de cargos gerenciais","prever promoções exclusivamente por tempo de serviço","eliminar a progressão salarial dos especialistas","restringir a carreira a um único cargo"],"Na carreira em Y, a partir de certo ponto o empregado escolhe entre o ramo gerencial e o ramo técnico (especialista), com remuneração equivalente."],
["rh","O método de avaliação de desempenho baseado no registro de fatos excepcionalmente positivos ou negativos do comportamento do avaliado é o de",["incidentes críticos","escala gráfica","escolha forçada","distribuição forçada","autoavaliação"],"Incidentes críticos focam comportamentos extremos (muito bons ou muito ruins) registrados ao longo do período."],
["rh","Na seleção de pessoal, a técnica que coloca os candidatos em situações simuladas de grupo para observar comportamento, liderança e trabalho em equipe é",["a dinâmica de grupo","a prova de conhecimentos","o teste psicométrico de aptidão","a análise curricular","a entrevista de desligamento"],"Dinâmicas e técnicas vivenciais observam o comportamento em situação. Provas medem conhecimento; testes psicométricos medem aptidões."],
/* SGI */
["sgi","Na gestão de riscos, contratar um seguro para cobrir possíveis danos a um tanque de armazenamento é exemplo de tratamento do risco por",["transferência (compartilhamento)","eliminação (evitar)","aceitação (retenção)","mitigação por redundância","exploração do risco positivo"],"Opções clássicas de tratamento: evitar, reduzir/mitigar, transferir/compartilhar (seguro, terceirização) e aceitar/reter."],
["sgi","A auditoria realizada por um organismo certificador independente, para conceder a certificação ISO 9001, é uma auditoria de",["terceira parte","primeira parte","segunda parte","auditoria interna","autoavaliação"],"1ª parte = interna (a própria organização). 2ª parte = cliente audita o fornecedor. 3ª parte = organismo independente, para certificação."],
["sgi","Na ABNT NBR ISO 9001:2015, a antiga exigência de 'ação preventiva' foi substituída pela abordagem de",["mentalidade de risco (pensamento baseado em risco)","inspeção final de 100% dos produtos","controle estatístico obrigatório","auditoria externa anual","manual da qualidade obrigatório"],"A versão 2015 eliminou a cláusula de ação preventiva: prevenir passa a ser papel do pensamento baseado em risco em todo o sistema."],
/* Patrimônio */
["patr","A perda de valor de recursos minerais ou florestais em razão de sua extração é registrada como",["exaustão","depreciação","amortização","impairment","reavaliação"],"Depreciação = bens tangíveis (desgaste). Amortização = intangíveis e direitos com prazo. Exaustão = recursos naturais extraídos."],
["patr","Um veículo custou R$ 80.000, já acumula depreciação de R$ 30.000 e foi vendido por R$ 55.000. O resultado na venda foi",["ganho de R$ 5.000","perda de R$ 25.000","ganho de R$ 25.000","perda de R$ 5.000","nulo"],"Valor contábil = 80.000 − 30.000 = 50.000. Venda por 55.000 → ganho de capital de 5.000."],
["patr","A identificação física de cada bem patrimonial por meio de plaqueta numerada, vinculada a um registro de controle, é chamada de",["tombamento","inventário rotativo","baixa patrimonial","reavaliação","alienação"],"Tombamento é o registro e a identificação do bem no acervo patrimonial, normalmente com plaqueta e número único."],
/* Manutenção */
["manut","A manutenção voltada a descobrir falhas ocultas em sistemas de proteção, como testar periodicamente alarmes e válvulas de segurança que só atuam em emergência, é a",["detectiva","preditiva","corretiva planejada","preventiva por tempo","melhorativa"],"Detectiva busca falhas ocultas, não percebidas na operação normal, típicas de sistemas de proteção e comando."],
["manut","A TPM (Manutenção Produtiva Total) tem como uma de suas bases",["a manutenção autônoma, em que os operadores realizam cuidados básicos nos próprios equipamentos","a centralização de toda atividade de manutenção na equipe especializada","a eliminação do planejamento da manutenção","a adoção exclusiva da manutenção corretiva","a terceirização obrigatória da manutenção"],"A TPM envolve todos, com pilares como manutenção autônoma, planejada, melhorias específicas e educação e treinamento. Meta: zero quebra."],
/* Indicadores */
["ind","Um indicador que sinaliza antecipadamente o resultado futuro, como o número de inspeções de segurança realizadas no mês, é chamado de indicador",["de tendência (leading)","de resultado (lagging)","financeiro","de ocorrência","estratégico de longo prazo"],"Leading (tendência/direcionador) antecipa resultados. Lagging (de resultado) mostra o que já ocorreu, como o número de acidentes."],
["ind","A relação entre os resultados obtidos e os recursos empregados para obtê-los mede a",["eficiência","eficácia","efetividade","economicidade","equidade"],"Eficiência = fazer certo, com o menor uso de recursos. Eficácia = atingir o objetivo. Efetividade = impacto real gerado."],
["ind","O padrão internacional mais utilizado para a elaboração de relatórios de sustentabilidade, com indicadores econômicos, ambientais e sociais, é o",["GRI (Global Reporting Initiative)","PMBOK","COBIT","ITIL","Six Sigma"],"As normas GRI são a referência mais usada em relatórios de sustentabilidade. PMBOK é projetos; COBIT e ITIL são TI."],
/* Matemática financeira */
["matfin","Um título de R$ 1.100,00 foi descontado 2 meses antes do vencimento a uma taxa de desconto racional simples de 5% ao mês. O valor atual é de",["R$ 1.000,00","R$ 990,00","R$ 1.045,00","R$ 1.010,00","R$ 1.050,00"],"Desconto racional (por dentro): A = N ÷ (1 + i·n) = 1.100 ÷ 1,10 = 1.000."],
["matfin","A taxa de juros compostos trimestral equivalente a 1% ao mês é de, aproximadamente,",["3,03%","3,00%","2,97%","3,30%","1,00%"],"Juros compostos: (1,01)³ − 1 = 1,030301 − 1 ≈ 3,03%. A juros simples, a taxa proporcional seria 3%."],
["matfin","Um aparelho custa R$ 800,00 e é vendido com 15% de desconto à vista. O preço à vista é de",["R$ 680,00","R$ 785,00","R$ 720,00","R$ 120,00","R$ 650,00"],"800 × 0,85 = 680."],
/* Registros contábeis */
["contab","Um fato contábil que altera apenas a composição do patrimônio, sem modificar o valor do Patrimônio Líquido, como a compra de um veículo à vista, é classificado como",["permutativo","modificativo aumentativo","modificativo diminutivo","misto aumentativo","misto diminutivo"],"Permutativo: troca entre contas patrimoniais, PL inalterado. Modificativo altera o PL (receita ou despesa). Misto combina os dois."],
["contab","São contas de natureza credora:",["Fornecedores, Capital Social e Receita de Vendas","Caixa, Estoques e Despesas de Aluguel","Clientes, Imobilizado e Custo das Mercadorias Vendidas","Bancos, Despesas Antecipadas e Salários","Depreciação Acumulada, Caixa e Estoques"],"Passivo, PL e receitas têm saldo credor. Ativo e despesas têm saldo devedor. (Depreciação acumulada é redutora do ativo, credora, mas Caixa e Estoques não.)"],
["contab","O sistema que reúne a Escrituração Contábil Digital (ECD), a Escrituração Contábil Fiscal (ECF) e a EFD, entre outras obrigações acessórias, é o",["SPED","SIAFI","SINTEGRA","CNAE","SISCOMEX"],"O SPED (Sistema Público de Escrituração Digital) unifica as escriturações digitais entregues ao Fisco."],
/* Fluxo de caixa */
["fluxo","Desde a Lei 11.638/2007, a Demonstração dos Fluxos de Caixa (DFC) substituiu, entre as demonstrações obrigatórias, a",["DOAR (Demonstração das Origens e Aplicações de Recursos)","DRE","DMPL","DVA","DLPA"],"A Lei 11.638/2007 tornou a DFC obrigatória e retirou a DOAR. A DVA também passou a ser obrigatória para companhias abertas."],
["fluxo","Saldo inicial de caixa: R$ 12.000. Recebimentos previstos: R$ 45.000. Pagamentos previstos: R$ 51.000. O saldo final projetado é de",["R$ 6.000","R$ 18.000","−R$ 6.000","R$ 108.000","R$ 0"],"Saldo final = 12.000 + 45.000 − 51.000 = 6.000. O fluxo do período foi negativo (−6.000), mas o saldo inicial cobre."],
["fluxo","O recebimento pela venda de um imóvel de uso da empresa é classificado na DFC como atividade de",["investimento","operacional","financiamento","não caixa","resultado"],"Compra e venda de imobilizado, intangível e investimentos de longo prazo são atividades de investimento."],
/* BP e DRE */
["bp","No Balanço Patrimonial, as contas do Ativo são apresentadas em ordem",["decrescente de grau de liquidez","crescente de grau de liquidez","decrescente de exigibilidade","alfabética","de valor, do maior para o menor"],"Ativo: do mais líquido (Caixa) para o menos líquido. Passivo: em ordem decrescente de exigibilidade."],
["bp","Segundo a Lei 6.404/1976, o Ativo Não Circulante é composto por",["Realizável a Longo Prazo, Investimentos, Imobilizado e Intangível","Disponível, Clientes e Estoques","Capital Social, Reservas e Ações em Tesouraria","Fornecedores, Empréstimos e Financiamentos","Imobilizado, Diferido, Estoques e Clientes"],"ANC: realizável a longo prazo, investimentos, imobilizado e intangível. O 'diferido' foi extinto pela Lei 11.941/2009."],
["bp","Uma empresa tem Ativo Circulante de R$ 300.000 e Passivo Circulante de R$ 200.000. A liquidez corrente é de",["1,5","0,67","100.000","2,0","0,5"],"Liquidez corrente = AC ÷ PC = 300.000 ÷ 200.000 = 1,5. Para cada R$ 1 de dívida de curto prazo há R$ 1,50 de ativo de curto prazo."],
/* Logística */
["log","As tecnologias como sensores conectados que transmitem em tempo real a temperatura e a localização da carga pertencem ao conceito de",["Internet das Coisas (IoT)","EDI tradicional","código de barras linear","planilha eletrônica","inventário rotativo"],"IoT conecta objetos à internet para monitoramento em tempo real. Junto com IA, blockchain e gêmeos digitais forma a chamada logística 4.0."],
["log","O sistema de coleta programada em que um único veículo percorre vários fornecedores recolhendo materiais para abastecer uma fábrica é o",["milk run","cross-docking","drop shipping","transit point","consignação"],"Milk run = 'rota do leiteiro': coletas programadas em roteiro fixo, reduzindo estoques e fretes."],
/* Transporte */
["transp","Quando a carga muda de modal, por exemplo do navio para o caminhão, mas cada trecho tem seu próprio contrato e documento de transporte, a operação é",["intermodal","multimodal","cabotagem","transbordo aduaneiro","unimodal"],"Intermodal = vários modais com documentos e responsáveis separados. Multimodal = documento único emitido pelo OTM."],
["transp","O documento fiscal eletrônico que acompanha a prestação do serviço de transporte de cargas é o",["CT-e (Conhecimento de Transporte Eletrônico)","NFS-e","MDF-e de passageiros","DANFE de serviço","ECD"],"O CT-e documenta a prestação do serviço de transporte. O MDF-e (manifesto) agrupa os documentos da carga transportada no veículo."],
["transp","O modal ferroviário é mais indicado para",["grandes volumes de cargas de baixo valor agregado transportadas a longas distâncias","pequenas encomendas urgentes em áreas urbanas","entregas porta a porta com grande flexibilidade de rotas","transporte de gases e líquidos em fluxo contínuo","cargas perecíveis de altíssimo valor por via internacional"],"Ferrovia: grande capacidade e baixo custo variável em longas distâncias (minério, grãos), mas pouca flexibilidade."],
/* Estoques */
["estoq","O modelo do lote econômico de compra (LEC) busca determinar a quantidade a ser comprada que",["minimiza a soma dos custos de pedir e de manter estoque","maximiza o desconto obtido do fornecedor","elimina a necessidade de estoque de segurança","iguala o estoque máximo ao estoque mínimo","reduz a zero o custo de armazenagem"],"LEC = √(2·D·Cp ÷ Ca): equilíbrio entre custo de pedido (muitos pedidos) e custo de manter estoque (lotes grandes)."],
["estoq","A classificação que agrupa os itens de estoque pelo grau de criticidade, isto é, pelo impacto que sua falta causa na operação, é a",["classificação XYZ","curva ABC","classificação PEPS","classificação UEPS","curva S"],"XYZ = criticidade (Z = mais crítico, sua falta para a operação). ABC = valor de consumo."],
["estoq","O sistema de sinalização visual, com cartões, usado na produção puxada para autorizar a produção ou a reposição de itens, é o",["kanban","MRP","ERP","VMI","WMS"],"Kanban é a ferramenta do just in time para puxar a produção conforme o consumo real."],
/* Armazenagem */
["armaz","O critério de expedição que prioriza a saída dos itens com prazo de validade mais próximo, essencial para perecíveis, é o",["FEFO","FIFO","LIFO","UEPS","LEC"],"FEFO = First Expired, First Out: primeiro que vence, primeiro que sai. FIFO considera a data de entrada."],
["armaz","Na estrutura drive-in, a movimentação dos paletes segue a lógica",["UEPS (o último palete a entrar é o primeiro a sair)","PEPS (o primeiro palete a entrar é o primeiro a sair)","FEFO obrigatório","acesso direto a qualquer palete","separação unitária por esteira"],"No drive-in há um único corredor de acesso: o último palete guardado bloqueia os anteriores, por isso funciona como UEPS (LIFO)."],
/* Manuseio */
["manus","O contêiner de 20 pés é usado como unidade de referência para medir a capacidade de navios e portos, chamada de",["TEU","FEU","TPB","CBM","PBR"],"TEU = Twenty-foot Equivalent Unit. Um contêiner de 40 pés equivale a 2 TEU (ou 1 FEU)."],
["manus","Entre as funções básicas da embalagem, inclui-se",["proteger o produto, facilitar a movimentação e comunicar informações","aumentar o peso da carga para dar estabilidade","substituir a nota fiscal no transporte","eliminar a necessidade de unitização","dispensar o controle de estoque"],"Funções clássicas: contenção, proteção, comunicação (rótulo, código) e utilidade/conveniência na movimentação."],
/* Compras (13.303 e 14.133) */
["compras","Pela Lei 13.303/2016, a licitação é dispensável para outros serviços e compras de valor até",["R$ 50.000,00","R$ 100.000,00","R$ 17.600,00","R$ 8.000,00","R$ 150.000,00"],"Art. 29: dispensa para obras e serviços de engenharia até R$ 100.000 (inciso I) e para outros serviços e compras até R$ 50.000 (inciso II), valores atualizáveis pelo Conselho de Administração."],
["compras","Na Lei 13.303/2016, o prazo mínimo de divulgação da licitação para aquisição de bens, quando adotado o critério de menor preço ou maior desconto, é de",["5 dias úteis","10 dias úteis","15 dias úteis","30 dias úteis","45 dias úteis"],"Art. 39: bens = 5 dias úteis (menor preço/maior desconto) ou 10 nas demais hipóteses; obras e serviços = 15 ou 30; melhor técnica, técnica e preço, integrada e semi-integrada = 45 dias úteis."],
["compras","NÃO é procedimento auxiliar das licitações previsto na Lei 13.303/2016:",["leilão de bens inservíveis como fase preparatória","pré-qualificação permanente","cadastramento","sistema de registro de preços","catálogo eletrônico de padronização"],"Art. 63: pré-qualificação permanente, cadastramento, sistema de registro de preços e catálogo eletrônico de padronização."],
["compras","Pela Lei 13.303/2016, as estatais estão dispensadas de licitar na",["comercialização de produtos e serviços especificamente relacionados com seus objetos sociais (atividade-fim)","compra de material de escritório de qualquer valor","contratação de obras de grande vulto","aquisição de bens comuns por pregão","contratação de serviços de limpeza"],"Art. 28, § 3º: a licitação não se aplica à comercialização direta ligada ao objeto social nem à escolha de parceiro por oportunidade de negócio específica."],
["compras","A sequência das fases do processo de licitação na Lei 14.133/2021 é",["preparatória, divulgação do edital, propostas e lances, julgamento, habilitação, recursal e homologação","habilitação, preparatória, julgamento, divulgação, propostas, recursal e homologação","divulgação, habilitação, propostas, julgamento, homologação e recursal","preparatória, habilitação, divulgação, julgamento, recursal e homologação","propostas, julgamento, preparatória, divulgação, habilitação e homologação"],"Art. 17: a regra é julgar antes de habilitar. A habilitação pode anteceder o julgamento excepcionalmente, com justificativa."],
["compras","Na Lei 14.133/2021, o documento da fase preparatória que caracteriza o interesse público envolvido e a melhor solução para a necessidade é o",["Estudo Técnico Preliminar (ETP)","termo aditivo","atestado de capacidade técnica","termo de recebimento definitivo","ata de registro de preços"],"O ETP (art. 6º, XX, e art. 18) é a primeira etapa do planejamento e embasa o termo de referência ou projeto básico."],
["compras","O sítio eletrônico oficial destinado à divulgação centralizada e obrigatória dos atos exigidos pela Lei 14.133/2021 é o",["Portal Nacional de Contratações Públicas (PNCP)","Diário Oficial da União, exclusivamente","Portal da Transparência do TCU","ComprasNet Estatais","SPED"],"Art. 174: o PNCP centraliza a divulgação de editais, contratos e atas de todos os entes."],
/* Contratos */
["contr","Pela Lei 13.303/2016, a garantia exigida do contratado não excederá, em regra,",["5% do valor do contrato, podendo chegar a 10% em obras de grande vulto e alta complexidade técnica","1% do valor do contrato","10% do valor do contrato em qualquer caso","30% do valor do contrato","20% do valor do contrato, a critério da estatal"],"Art. 70: até 5%, ou até 10% para obras, serviços e fornecimentos de grande vulto com alta complexidade técnica e riscos financeiros. A modalidade (caução, seguro-garantia ou fiança) é escolha do contratado."],
["contr","Na Lei 13.303/2016, a suspensão temporária de participação em licitação e impedimento de contratar com a entidade sancionadora pode durar até",["2 anos","6 meses","5 anos","10 anos","prazo indeterminado"],"Art. 83: advertência, multa e suspensão temporária por prazo não superior a 2 anos."],
["contr","Na Lei 14.133/2021, os contratos de serviços contínuos podem ter vigência inicial de até 5 anos, prorrogáveis sucessivamente até o limite de",["10 anos","6 anos","15 anos","20 anos","8 anos"],"Arts. 106 e 107: até 5 anos, com prorrogações sucessivas até 10 anos, se previstas no edital e houver vantajosidade."],
["contr","Na Lei 14.133/2021, a sanção de declaração de inidoneidade para licitar ou contratar tem prazo de",["3 a 6 anos","até 2 anos","até 3 anos","1 a 3 anos","5 a 10 anos"],"Art. 156: impedimento de licitar e contratar = até 3 anos (no ente sancionador); inidoneidade = 3 a 6 anos (todos os entes)."],
/* Informática */
["info","No Windows 11, o atalho Ctrl + Shift + Esc abre",["o Gerenciador de Tarefas","as Configurações","a ferramenta de captura de tela","o Explorador de Arquivos","o menu Iniciar"],"Ctrl + Shift + Esc = Gerenciador de Tarefas direto. Win + I = Configurações; Win + Shift + S = captura de tela; Win + E = Explorador."],
["info","No Excel, a fórmula =SE(A1>=7;\"Aprovado\";\"Reprovado\"), com o valor 6,5 em A1, retorna",["Reprovado","Aprovado","VERDADEIRO","FALSO","#VALOR!"],"6,5 não é maior ou igual a 7, então a condição é falsa e retorna o terceiro argumento: \"Reprovado\"."],
["info","No Excel, a função =CONT.SE(B2:B20;\"Pendente\")",["conta quantas células do intervalo contêm o texto Pendente","soma os valores das células com o texto Pendente","retorna a posição da primeira célula Pendente","conta as células vazias do intervalo","substitui Pendente por zero"],"CONT.SE conta células que atendem a um critério. SOMASE soma os valores que atendem ao critério."],
["info","No Microsoft Word em português, os atalhos Ctrl + N, Ctrl + I e Ctrl + S aplicam, respectivamente,",["negrito, itálico e sublinhado","novo documento, imprimir e salvar","negrito, inserir e salvar","novo documento, itálico e sublinhado","negrito, imprimir e sublinhado"],"No Office em português: Ctrl + N = negrito, Ctrl + I = itálico, Ctrl + S = sublinhado e Ctrl + B = salvar."],
["info","Ao arrastar um arquivo, com o mouse, para outra pasta da mesma unidade de disco no Explorador de Arquivos do Windows, a ação padrão é",["mover o arquivo","copiar o arquivo","criar um atalho","excluir o arquivo","compactar o arquivo"],"Mesma unidade = mover; unidade diferente = copiar. Segurando Ctrl copia; Alt (ou Ctrl + Shift) cria atalho."],
["info","Comparado ao HDD, o SSD caracteriza-se por",["não ter partes móveis, oferecendo leitura e gravação bem mais rápidas","usar discos magnéticos giratórios","ser memória volátil, como a RAM","ser sempre mais barato por gigabyte","ser lido por cabeçote mecânico"],"SSD usa memória flash, sem partes mecânicas: mais rápido, silencioso e resistente a impacto. O HDD tem pratos e cabeçote."],
/* Segurança e LGPD */
["lgpd","O princípio da segurança da informação que garante que a informação não foi alterada de forma indevida é a",["integridade","confidencialidade","disponibilidade","autenticidade","irretratabilidade"],"Tríade CID: Confidencialidade (só quem pode acessa), Integridade (sem alteração indevida), Disponibilidade (acessível quando necessário)."],
["lgpd","O tipo de backup que copia apenas os arquivos alterados desde o último backup completo, acumulando as alterações até o próximo completo, é o",["diferencial","incremental","completo","espelho","sintético"],"Diferencial = tudo que mudou desde o último completo (cresce a cada dia). Incremental = só o que mudou desde o último backup de qualquer tipo."],
["lgpd","Pela LGPD, a multa simples por infração pode chegar a",["2% do faturamento da empresa no Brasil, limitada a R$ 50 milhões por infração","10% do faturamento mundial, sem limite","R$ 1 milhão por infração","5% do lucro líquido anual","R$ 500 milhões por infração"],"Art. 52, II: multa de até 2% do faturamento no Brasil no último exercício, limitada a R$ 50.000.000,00 por infração."],
["lgpd","O malware que se propaga automaticamente pela rede, explorando vulnerabilidades, sem precisar de um arquivo hospedeiro, é o",["worm","vírus","cavalo de Troia","adware","spyware"],"Worm se replica sozinho pela rede. Vírus precisa de hospedeiro e de execução. Cavalo de Troia se disfarça de programa legítimo."]
);

/* ---------- v3: Processos administrativos ---------- */
Q.push(
["rh","O recrutamento externo apresenta, como desvantagem típica em relação ao recrutamento interno,",["ser mais demorado e mais caro, além de poder frustrar empregados que esperavam promoção","impedir a entrada de novas ideias na organização","gerar o chamado efeito dominó de vagas em cadeia","limitar o banco de candidatos aos atuais empregados","dispensar a etapa de seleção dos candidatos"],"Externo: traz ideias novas, mas custa mais, demora mais e pode desmotivar o pessoal interno. Vagas em cadeia são típicas do recrutamento interno."],
["rh","A entrevista de seleção em que o entrevistador segue um roteiro fixo de perguntas, aplicado igualmente a todos os candidatos, é a entrevista",["estruturada (padronizada)","livre (não diretiva)","de desligamento","de aconselhamento","projetiva"],"Entrevista estruturada usa roteiro padronizado, facilitando a comparação. A livre segue o rumo da conversa."],
["rh","Em um programa de integração (onboarding), o principal objetivo é",["ambientar o novo empregado à cultura, às normas e às pessoas da organização","avaliar o desempenho anual do empregado","definir o salário de mercado do cargo","substituir o treinamento técnico do cargo","encerrar o período de experiência"],"A socialização organizacional acelera a adaptação do recém-admitido e reduz a rotatividade inicial."],
["rh","O índice que mede a rotatividade de pessoal, relacionando admissões e desligamentos ao efetivo médio, é o",["turnover","absenteísmo","headcount","clima organizacional","índice de produtividade"],"Turnover = rotatividade. Absenteísmo = faltas e atrasos. Headcount = número de empregados."],
["rh","Na avaliação de desempenho por objetivos (APO), o desempenho é medido",["pelo alcance de metas previamente negociadas entre gestor e empregado","pela comparação forçada com os colegas","apenas pela opinião dos clientes externos","pelo tempo de casa do empregado","pelos incidentes críticos registrados pelo RH"],"APO (Administração por Objetivos, Drucker) fixa metas em conjunto e avalia o resultado alcançado."],
["rh","Job rotation, como técnica de desenvolvimento de pessoas, consiste em",["fazer o empregado passar por diferentes cargos ou setores para ampliar sua visão e suas competências","reduzir a jornada de trabalho de forma rotativa","alternar os gestores responsáveis pela avaliação de desempenho","trocar periodicamente os fornecedores de treinamento","demitir os empregados com pior desempenho a cada ciclo"],"Rodízio de cargos amplia experiência e polivalência, preparando para funções futuras."],
["rh","O levantamento de necessidades de treinamento (LNT) busca identificar, principalmente,",["a diferença entre as competências exigidas pelo cargo e as que o empregado possui","o custo total da folha de pagamento","o número de vagas abertas no semestre","o grau de satisfação com os benefícios","a quantidade de horas extras realizadas"],"LNT é o diagnóstico: compara o desempenho ou competência necessária com o atual para definir o que treinar."],
["rh","Quanto à remuneração, a parcela variável paga conforme o alcance de metas da empresa e da equipe, negociada com os empregados, é a",["participação nos lucros ou resultados (PLR)","salário-base","adicional de periculosidade","13º salário","férias remuneradas"],"PLR (Lei 10.101/2000) é remuneração variável vinculada a resultados. Salário-base e 13º são fixos."],
["rh","O benefício que tem natureza assistencial, voltado a dar segurança ao empregado e à família em situações imprevistas, é o",["plano de assistência médico-hospitalar","clube recreativo","programa de ginástica laboral","festa de fim de ano","restaurante no local de trabalho"],"Classificação: assistenciais (saúde, seguro), recreativos (lazer, clube) e supletivos (restaurante, transporte)."],
["rh","Na gestão por competências, a etapa de mapeamento de competências tem como finalidade",["identificar a lacuna entre as competências necessárias à estratégia e as já existentes na organização","definir o piso salarial da categoria","escolher o sindicato representante dos empregados","fixar a jornada de trabalho","calcular a provisão de férias"],"Mapear competências = diagnosticar o gap entre o que a estratégia exige e o que a organização tem, para orientar captação e desenvolvimento."],
["sgi","Uma não conformidade é definida como",["o não atendimento a um requisito","qualquer reclamação de cliente, procedente ou não","um risco ainda não identificado","uma oportunidade de melhoria opcional","uma auditoria realizada fora do prazo"],"Pela ISO 9000, não conformidade = não atendimento a um requisito (do cliente, legal, da norma ou da própria organização)."],
["sgi","A ferramenta da qualidade que organiza as possíveis causas de um problema em categorias como método, máquina, mão de obra, material, meio ambiente e medida é o",["diagrama de Ishikawa (causa e efeito)","gráfico de Pareto","histograma","fluxograma","folha de verificação"],"Ishikawa (espinha de peixe) usa os 6M para investigar causas. Pareto prioriza os problemas mais frequentes."],
["sgi","O princípio de Pareto, aplicado à gestão da qualidade, indica que",["poucas causas são responsáveis pela maior parte dos problemas","todas as causas têm o mesmo peso nos defeitos","os problemas devem ser tratados em ordem alfabética","80% dos empregados geram 20% dos resultados de qualidade","a inspeção final elimina a necessidade de prevenção"],"Regra 80/20: priorize as poucas causas vitais que respondem pela maioria dos efeitos."],
["sgi","A técnica dos 5 porquês é utilizada para",["chegar à causa raiz de um problema perguntando sucessivamente por que ele ocorreu","definir as cinco metas anuais do sistema de gestão","classificar os cinco tipos de auditoria","ordenar as não conformidades por custo","calcular o índice de satisfação de clientes"],"Perguntar 'por quê?' repetidas vezes ajuda a ir além do sintoma até a causa raiz, base da ação corretiva."],
["sgi","Na ISO 14001, o elemento que relaciona as atividades da organização que podem interagir com o meio ambiente, como emissões e geração de resíduos, é chamado de",["aspecto ambiental","impacto financeiro","requisito do cliente","perigo ocupacional","não conformidade crítica"],"Aspecto ambiental = elemento da atividade que interage com o meio ambiente (ex.: emissão). Impacto ambiental = a alteração resultante (ex.: poluição do ar)."],
["sgi","Na ISO 45001, a fonte com potencial de causar lesão ou problema de saúde, como uma superfície escorregadia, é denominada",["perigo","risco residual","incidente","aspecto ambiental","não conformidade"],"Perigo = fonte de dano. Risco = combinação da probabilidade e da severidade do dano. Incidente = ocorrência que causou ou poderia causar lesão."],
["sgi","Na matriz de riscos, um evento com probabilidade alta e impacto alto deve ser classificado como",["prioritário, exigindo tratamento imediato","aceitável sem monitoramento","irrelevante para o sistema de gestão","positivo, por representar oportunidade","de responsabilidade exclusiva da alta direção, sem plano de ação"],"Quanto maior a combinação probabilidade × impacto, maior a prioridade de tratamento."],
["sgi","Uma das vantagens da integração dos sistemas de gestão de qualidade, meio ambiente e segurança é",["a redução de duplicidade de documentos, procedimentos e auditorias","a eliminação da necessidade de auditorias internas","a dispensa de certificação por organismo externo","a separação total das equipes de cada norma","o aumento do número de manuais independentes"],"Integrar simplifica: um só controle de documentos, auditorias conjuntas e visão única de riscos."],
["sgi","O Kaizen caracteriza-se por",["melhorias pequenas, graduais e contínuas, com participação dos empregados","mudanças radicais e pontuais conduzidas apenas pela alta direção","inspeção de 100% dos produtos acabados","substituição de todos os processos a cada ano","terceirização das atividades de qualidade"],"Kaizen = melhoria contínua incremental. Mudanças radicais estão associadas à reengenharia."],
["sgi","Durante uma auditoria interna, o registro de que um requisito foi atendido ou não, com base em evidências objetivas, é chamado de",["constatação (achado) de auditoria","critério de auditoria","programa de auditoria","escopo de auditoria","plano de ação corretiva"],"ISO 19011: critérios são as referências; evidência é o registro verificável; constatação é o resultado da comparação entre evidência e critério."],
["patr","Um bem do ativo imobilizado é inicialmente mensurado pelo",["custo de aquisição, incluindo gastos necessários para colocá-lo em condições de uso","valor de mercado na data do balanço","valor do seguro contratado","valor residual estimado","preço de venda de um bem semelhante usado"],"CPC 27: o custo inclui preço de compra, impostos não recuperáveis, frete, instalação e montagem."],
["patr","A vida útil de um bem do imobilizado corresponde",["ao período durante o qual se espera utilizar o ativo ou à quantidade de unidades que se espera obter dele","ao prazo de garantia dado pelo fabricante","ao tempo até o fim do exercício social","ao período do financiamento do bem","ao prazo de pagamento ao fornecedor"],"A vida útil é estimada pela entidade conforme o uso esperado, não necessariamente pela garantia ou pelo prazo fiscal."],
["patr","Uma máquina custou R$ 50.000, sem valor residual, com vida útil de 5 anos. Ao final do 3º ano, o valor contábil, pelo método linear, é de",["R$ 20.000","R$ 30.000","R$ 10.000","R$ 40.000","R$ 50.000"],"Depreciação anual = 10.000. Acumulada em 3 anos = 30.000. Valor contábil = 50.000 − 30.000 = 20.000."],
["patr","O método de depreciação em que a despesa é maior nos primeiros anos e menor nos últimos, calculado com frações decrescentes, é o",["da soma dos dígitos dos anos","linear","das unidades produzidas com uso constante","de custo histórico corrigido","de reavaliação"],"Na soma dos dígitos, para 5 anos a soma é 15: 5/15 no 1º ano, 4/15 no 2º, e assim por diante."],
["patr","A baixa de um bem patrimonial ocorre, por exemplo, quando o bem",["é vendido, doado, furtado ou se torna inservível","é transferido de setor dentro da mesma empresa","passa por manutenção preventiva","é inventariado no fim do ano","recebe nova plaqueta de identificação"],"Baixa = retirada do bem do patrimônio. Transferência interna apenas muda a localização e o responsável."],
["patr","Gastos com uma grande reforma que aumenta a vida útil de uma máquina devem ser",["adicionados ao custo do imobilizado (capitalizados)","lançados integralmente como despesa do período","registrados como estoque","lançados no passivo circulante","ignorados pela contabilidade"],"Gastos que aumentam a vida útil ou a capacidade são incorporados ao ativo. Manutenção de rotina vai para despesa."],
["patr","No controle patrimonial, o termo de responsabilidade serve para",["formalizar qual empregado ou setor responde pela guarda e conservação do bem","autorizar a compra de um novo bem","registrar a depreciação mensal do bem","definir o preço de venda do bem","contratar o seguro do patrimônio"],"O termo de responsabilidade vincula o bem a um responsável, facilitando o controle e a apuração de extravios."],
["patr","Na gestão de ativos, considerar todos os custos do bem, desde a aquisição até o descarte (operação, manutenção, energia e desmobilização), corresponde ao conceito de",["custo do ciclo de vida","custo de oportunidade","custo de reposição","custo histórico","custo marginal"],"Custo do ciclo de vida (LCC) evita escolher apenas pelo menor preço de compra."],
["patr","Um inventário patrimonial encontrou um computador registrado no sistema que não estava fisicamente no setor. Esse resultado indica",["divergência a ser apurada, podendo levar a sindicância e baixa do bem","que o bem deve ser imediatamente depreciado em dobro","que o inventário deve ser descartado","a necessidade de reavaliar todos os bens do setor","que o bem foi automaticamente transferido"],"Divergências entre registro e existência física devem ser investigadas e regularizadas."],
["patr","Veículos, máquinas, móveis e edificações utilizados nas atividades da empresa são classificados no balanço como",["Ativo Não Circulante – Imobilizado","Ativo Circulante – Estoques","Ativo Não Circulante – Intangível","Passivo Não Circulante","Ativo Não Circulante – Investimentos"],"Bens tangíveis usados na operação, com uso por mais de um exercício, compõem o imobilizado."],
["manut","A confiabilidade de um equipamento expressa",["a probabilidade de ele desempenhar sua função sem falhar, por um período, em condições definidas","o tempo médio gasto para repará-lo","o custo total de sua manutenção anual","o número de operadores necessários","a quantidade de peças em estoque para ele"],"Confiabilidade é probabilidade de funcionar sem falha. Mantenabilidade é a facilidade de reparo (ligada ao MTTR)."],
["manut","Um equipamento operou 400 horas no mês e teve 4 falhas. Seu MTBF no período foi de",["100 horas","400 horas","4 horas","1.600 horas","25 horas"],"MTBF = tempo de operação ÷ número de falhas = 400 ÷ 4 = 100 h."],
["manut","Um equipamento teve 5 reparos, que somaram 20 horas de parada. Seu MTTR é de",["4 horas","20 horas","100 horas","0,25 hora","25 horas"],"MTTR = tempo total de reparo ÷ número de reparos = 20 ÷ 5 = 4 h."],
["manut","O documento que formaliza a solicitação, a autorização e o registro de um serviço de manutenção é a",["ordem de serviço (OS)","nota fiscal de entrada","requisição de compra","ficha de EPI","folha de ponto"],"A OS registra o que foi feito, tempo, materiais e custo, alimentando o histórico do equipamento."],
["manut","A manutenção corretiva planejada se diferencia da não planejada porque",["a intervenção é preparada e programada por decisão gerencial, mesmo após a detecção de falha ou desempenho baixo","ocorre sempre antes de qualquer sinal de falha","depende obrigatoriamente de monitoramento por vibração","é executada exclusivamente pelos operadores","nunca envolve substituição de peças"],"Planejada: decide-se quando e como corrigir (ex.: rodar até falhar de forma consciente). Não planejada: emergência, sem preparo."],
["manut","A análise de óleo lubrificante para detectar partículas de desgaste e contaminação é uma técnica típica da manutenção",["preditiva","corretiva não planejada","detectiva","preventiva por calendário","autônoma de limpeza"],"Ferroscopia e análise de óleo monitoram a condição do equipamento, base da preditiva."],
["manut","No PCM, a criticidade dos equipamentos serve para",["priorizar os recursos de manutenção nos ativos cuja falha causa maior impacto em segurança, meio ambiente e produção","definir o preço de venda dos equipamentos","calcular a depreciação contábil","escolher o fornecedor de peças mais barato","eliminar a manutenção dos equipamentos menos usados"],"Classificar criticidade (ex.: A, B, C) orienta qual estratégia de manutenção adotar em cada ativo."],
["manut","Na TPM, as seis grandes perdas incluem",["quebras, setup e ajustes, pequenas paradas, velocidade reduzida, defeitos e perdas na partida","impostos, salários, aluguel, energia, frete e juros","férias, faltas, horas extras, treinamento, viagens e reuniões","compras, vendas, estoques, transporte, armazenagem e embalagem","depreciação, amortização, exaustão, provisões, reservas e dividendos"],"As seis grandes perdas reduzem o OEE (eficiência global do equipamento): disponibilidade, desempenho e qualidade."],
["manut","O indicador OEE (Overall Equipment Effectiveness) é obtido pela multiplicação de",["disponibilidade, desempenho (performance) e qualidade","MTBF, MTTR e backlog","custo, prazo e escopo","giro, cobertura e nível de serviço","eficiência, eficácia e efetividade"],"OEE = disponibilidade × performance × qualidade. Um OEE de classe mundial gira em torno de 85%."],
["manut","A Manutenção Centrada em Confiabilidade (MCC/RCM) parte da análise",["das funções do equipamento, dos modos de falha e de suas consequências para definir a estratégia mais adequada","do menor custo de compra de peças sobressalentes","da opinião dos operadores sobre o equipamento mais moderno","do calendário fixo recomendado pelo fabricante, sem exceções","do número de empregados da equipe de manutenção"],"RCM pergunta: qual a função, como pode falhar, quais as consequências e que tarefa evita ou detecta a falha."],
["ind","Um indicador de eficácia em um setor de compras seria",["o percentual de pedidos entregues dentro do prazo e da especificação","o custo médio de cada pedido emitido","o número de horas trabalhadas por comprador","o consumo de papel do setor","o valor do salário médio dos compradores"],"Eficácia mede o alcance do resultado (entregar no prazo e na especificação). Custo por pedido mede eficiência."],
["ind","Ao analisar um indicador mensal, o gestor observou que o resultado ficou abaixo da meta por três meses seguidos. A conduta mais adequada é",["investigar as causas do desvio e definir um plano de ação","alterar a meta para o valor alcançado","deixar de medir o indicador","esperar o fechamento do ano para agir","trocar o responsável pelo indicador sem análise"],"Indicador serve para decidir: desvio persistente pede análise de causa e ação, ciclo PDCA."],
["ind","Em um indicador, a meta representa",["o valor que se pretende alcançar em um prazo definido","a fórmula de cálculo do indicador","a fonte dos dados utilizados","a frequência de coleta dos dados","o responsável pelo indicador"],"Ficha do indicador: nome, objetivo, fórmula, unidade, frequência, fonte, responsável e meta."],
["ind","Indicadores de efetividade buscam medir",["o impacto ou a transformação gerada pelos resultados alcançados","a relação entre recursos e produtos","apenas o cumprimento do orçamento","o tempo de execução de cada tarefa","a quantidade de relatórios emitidos"],"Efetividade = impacto real (ex.: redução de acidentes após um programa de segurança)."],
["ind","O consumo de água por metro cúbico de produto movimentado em um terminal é um indicador da dimensão",["ambiental (E) do ESG","social (S) do ESG","de governança (G) do ESG","financeira do BSC","de aprendizado do BSC"],"Água, energia, emissões e resíduos são indicadores ambientais."],
["ind","A existência de canal de denúncias, código de conduta e programa de integridade (compliance) relaciona-se à dimensão",["de governança (G) do ESG","ambiental (E) do ESG","social (S) do ESG, exclusivamente","de processos internos do PDCA","de produtividade operacional"],"Integridade, ética, transparência e estrutura do conselho são temas de governança."],
["ind","No Balanced Scorecard, o mapa estratégico tem a função de",["mostrar as relações de causa e efeito entre os objetivos das quatro perspectivas","listar todos os empregados da organização","registrar os lançamentos contábeis do período","definir o organograma da empresa","substituir o orçamento anual"],"O mapa estratégico liga aprendizado → processos → clientes → financeiro, explicitando a lógica da estratégia."],
["ind","Uma empresa registrou 6 acidentes com afastamento em 2.000.000 de horas-homem trabalhadas. A taxa de frequência é de",["3","6","12","0,3","30"],"TF = acidentes × 1.000.000 ÷ HHT = 6 × 1.000.000 ÷ 2.000.000 = 3."],
["ind","Um painel com indicadores em verde, amarelo e vermelho, conforme a situação em relação à meta, é chamado de",["gestão à vista com semáforo (farol)","gráfico de dispersão","diagrama de Ishikawa","fluxograma de processo","curva ABC"],"O semáforo destaca rapidamente os desvios que exigem ação, apoiando a decisão."],
["ind","O indicador 'número de horas de treinamento em segurança por empregado' é classificado como",["indicador de tendência (leading), pois atua antes do resultado","indicador de resultado (lagging), pois mede acidentes ocorridos","indicador financeiro","indicador de governança","indicador de eficiência energética"],"Treinamentos, inspeções e auditorias são leading. Acidentes e afastamentos são lagging."]
);
/* ---------- v3: Finanças e contabilidade ---------- */
Q.push(
["matfin","Um capital de R$ 5.000,00 rendeu R$ 600,00 de juros simples em 4 meses. A taxa mensal foi de",["3%","12%","2,5%","4%","1,2%"],"i = J ÷ (C · t) = 600 ÷ (5.000 × 4) = 0,03 = 3% ao mês."],
["matfin","A taxa de 18% ao ano, em juros simples, é proporcional a uma taxa mensal de",["1,5%","1,8%","18%","1,2%","2,0%"],"Juros simples: taxas proporcionais. 18% ÷ 12 = 1,5% ao mês."],
["matfin","Um capital de R$ 4.000,00 aplicado a juros compostos de 5% ao mês, por 2 meses, rende juros de",["R$ 410,00","R$ 400,00","R$ 4.410,00","R$ 205,00","R$ 420,00"],"M = 4.000 × 1,05² = 4.000 × 1,1025 = 4.410. Juros = 410."],
["matfin","Um preço passou de R$ 80,00 para R$ 92,00. O aumento percentual foi de",["15%","12%","13%","92%","20%"],"Variação = 12 ÷ 80 = 0,15 = 15%."],
["matfin","Após um desconto de 25%, um produto passou a custar R$ 150,00. O preço original era",["R$ 200,00","R$ 187,50","R$ 175,00","R$ 225,00","R$ 112,50"],"0,75 × P = 150 → P = 200."],
["matfin","Dois descontos sucessivos de 10% e 20% equivalem a um desconto único de",["28%","30%","32%","25%","15%"],"0,90 × 0,80 = 0,72 → desconto de 28%."],
["matfin","No desconto comercial simples, o valor do desconto é calculado sobre",["o valor nominal (de face) do título","o valor atual do título","o valor médio entre nominal e atual","o valor dos juros compostos","o valor líquido recebido"],"Comercial (por fora) incide sobre o nominal; racional (por dentro) incide sobre o valor atual."],
["matfin","Um título de R$ 2.000,00, descontado comercialmente 4 meses antes do vencimento, teve desconto de R$ 160,00. A taxa mensal de desconto foi de",["2%","4%","8%","1,6%","2,5%"],"D = N · d · t → 160 = 2.000 × d × 4 → d = 0,02 = 2% ao mês."],
["matfin","Em juros compostos, para um mesmo capital e uma mesma taxa, quando o prazo é maior que um período, o montante obtido é",["maior que o obtido a juros simples","menor que o obtido a juros simples","igual ao obtido a juros simples","sempre o dobro do capital","independente da taxa"],"Nos compostos os juros incidem sobre juros (capitalização), crescendo exponencialmente."],
["matfin","Um investimento de R$ 1.000,00 a juros compostos de 10% ao ano atinge, ao fim de 3 anos, o montante de",["R$ 1.331,00","R$ 1.300,00","R$ 1.210,00","R$ 1.330,00","R$ 1.100,00"],"1.000 × 1,1³ = 1.000 × 1,331 = 1.331."],
["contab","A integralização do capital social em dinheiro pelos sócios é registrada com",["débito em Caixa e crédito em Capital Social","débito em Capital Social e crédito em Caixa","débito em Caixa e crédito em Receita","débito em Despesa e crédito em Caixa","débito em Capital Social e crédito em Lucros Acumulados"],"O caixa (ativo) aumenta por débito; o capital social (PL) aumenta por crédito."],
["contab","O pagamento de uma duplicata a fornecedor, sem juros, é um fato",["permutativo, reduzindo ativo e passivo no mesmo valor","modificativo diminutivo, reduzindo o PL","modificativo aumentativo","misto diminutivo","que não altera o balanço"],"Débito em Fornecedores e crédito em Caixa: ativo e passivo diminuem, PL não muda."],
["contab","O pagamento de uma conta de energia elétrica do próprio mês é registrado com",["débito em Despesa de Energia e crédito em Caixa","débito em Caixa e crédito em Despesa de Energia","débito em Fornecedores e crédito em Caixa","débito em Imobilizado e crédito em Caixa","débito em Despesa de Energia e crédito em Capital Social"],"Despesa aumenta por débito; o caixa diminui por crédito. É fato modificativo diminutivo (reduz o PL)."],
["contab","A venda de mercadorias a prazo gera, no momento da venda, débito em",["Clientes (Duplicatas a Receber) e crédito em Receita de Vendas","Caixa e crédito em Receita de Vendas","Receita de Vendas e crédito em Clientes","Fornecedores e crédito em Estoques","Estoques e crédito em Clientes"],"A prazo, o direito de receber (Clientes) aumenta por débito, e a receita é reconhecida por crédito (competência)."],
["contab","O livro contábil obrigatório em que os fatos são registrados em ordem cronológica é o",["Diário","Razão","Caixa","Registro de Inventário","Balancete"],"O Diário é obrigatório pelo Código Civil e registra dia a dia. O Razão organiza os lançamentos por conta."],
["contab","O balancete de verificação tem como objetivo principal",["verificar se a soma dos saldos devedores é igual à soma dos saldos credores","apurar o lucro tributável","substituir o Balanço Patrimonial","registrar os fatos em ordem cronológica","calcular a depreciação dos bens"],"O balancete lista os saldos das contas; se débitos ≠ créditos, há erro de escrituração."],
["contab","O princípio contábil que determina reconhecer as perdas prováveis assim que conhecidas, evitando superavaliar ativos e receitas, é o da",["prudência","entidade","continuidade","oportunidade","competência"],"Prudência: entre alternativas igualmente válidas, escolher a que não superestime ativos e receitas nem subestime passivos e despesas."],
["contab","A emissão de nota fiscal eletrônica (NF-e) a cada venda é exemplo de",["obrigação acessória","obrigação principal","fato gerador do imposto de renda","crédito tributário","lançamento de ofício"],"Emitir documento fiscal é um dever de fazer, ou seja, obrigação acessória."],
["contab","O eSocial é a obrigação acessória que reúne, de forma unificada, as informações",["trabalhistas, previdenciárias e fiscais relativas aos empregados","contábeis do Livro Diário","do imposto de renda da pessoa jurídica","do ICMS e do IPI","de importações e exportações"],"O eSocial unifica o envio de dados de folha, admissões, afastamentos e contribuições."],
["contab","O descumprimento de uma obrigação acessória, como a entrega de uma declaração fora do prazo, gera",["multa, que se converte em obrigação principal","apenas advertência, sem multa","extinção do crédito tributário","dispensa da obrigação no ano seguinte","a anulação do registro da empresa"],"CTN, art. 113, § 3º: o descumprimento da acessória converte-se em obrigação principal quanto à penalidade pecuniária."],
["fluxo","Na DFC, o pagamento de salários aos empregados é classificado como atividade",["operacional","de investimento","de financiamento","não caixa","patrimonial"],"Salários, fornecedores, impostos e recebimentos de clientes são fluxos operacionais."],
["fluxo","A distribuição de dividendos pagos aos acionistas é, em regra, classificada na DFC como atividade de",["financiamento","investimento","operacional obrigatoriamente","não caixa","resultado"],"Dividendos pagos são fluxos com os sócios (financiamento). O CPC 03 permite classificá-los como operacionais, desde que de forma consistente."],
["fluxo","No método indireto, um aumento no saldo de Estoques durante o período deve ser",["subtraído do lucro líquido, pois representou uso de caixa","somado ao lucro líquido, pois é um ativo","ignorado, por não envolver caixa","classificado como atividade de financiamento","somado às atividades de investimento"],"Mais estoque = dinheiro aplicado na compra; reduz o caixa operacional."],
["fluxo","No método indireto, uma redução no saldo de Contas a Receber de clientes deve ser",["somada ao lucro líquido, pois o caixa recebido foi maior que as vendas","subtraída do lucro líquido","ignorada","classificada como investimento","classificada como financiamento"],"Clientes caindo = recebeu mais do que vendeu a prazo no período, aumentando o caixa."],
["fluxo","O fluxo de caixa projetado é útil principalmente para",["antecipar períodos de falta ou de sobra de caixa e planejar captações e aplicações","apurar o lucro contábil do exercício","calcular a depreciação dos ativos","substituir o Balanço Patrimonial","registrar os fatos contábeis do dia"],"Projetar o caixa permite negociar crédito antes da falta e aplicar sobras com antecedência."],
["fluxo","Lucro líquido de R$ 30.000; depreciação de R$ 4.000; aumento de Estoques de R$ 6.000; redução de Fornecedores de R$ 2.000. O caixa das atividades operacionais pelo método indireto foi de",["R$ 26.000","R$ 34.000","R$ 42.000","R$ 30.000","R$ 22.000"],"30.000 + 4.000 − 6.000 (mais estoque) − 2.000 (pagou fornecedores) = 26.000."],
["fluxo","O aumento de capital social integralizado em dinheiro pelos sócios aparece na DFC como",["entrada nas atividades de financiamento","entrada nas atividades operacionais","entrada nas atividades de investimento","saída nas atividades de financiamento","transação sem efeito no caixa"],"Recursos aportados pelos sócios são fontes de financiamento."],
["fluxo","A aquisição de um imóvel mediante financiamento direto do vendedor, sem passagem de dinheiro no ato, deve ser",["divulgada em nota explicativa como transação que não envolve caixa, sem compor a DFC","registrada como saída de investimento e entrada de financiamento pelo valor total","registrada como atividade operacional","omitida de qualquer demonstração","classificada como dividendos"],"CPC 03: transações de investimento e financiamento que não envolvem caixa ficam fora da DFC, mas são divulgadas."],
["fluxo","Em um orçamento de caixa, o saldo mínimo de caixa desejado serve para",["proteger a empresa contra imprevistos e indicar quando será necessário captar recursos","calcular o lucro bruto","medir a rentabilidade dos sócios","definir o preço de venda","substituir a conciliação bancária"],"Abaixo do saldo mínimo, planeja-se captação; acima, aplicação do excedente."],
["fluxo","O ciclo de caixa (ciclo financeiro) corresponde ao",["prazo médio de estocagem mais o prazo médio de recebimento, menos o prazo médio de pagamento","prazo médio de pagamento mais o prazo médio de recebimento","tempo entre a compra do imobilizado e sua venda","período de vigência do orçamento","prazo de validade da nota fiscal"],"Ciclo operacional = PME + PMR. Ciclo financeiro = ciclo operacional − PMP. Quanto menor, menos capital de giro necessário."],
["bp","No Balanço Patrimonial, a conta Fornecedores, com vencimento em 60 dias, classifica-se no",["Passivo Circulante","Passivo Não Circulante","Ativo Circulante","Patrimônio Líquido","Ativo Realizável a Longo Prazo"],"Obrigações que vencem até o fim do exercício seguinte são do Passivo Circulante."],
["bp","A conta Depreciação Acumulada é apresentada no balanço como",["redutora do Ativo Imobilizado","conta do Passivo Circulante","conta de Patrimônio Líquido","despesa na DRE","conta do Ativo Circulante"],"É retificadora: reduz o valor do imobilizado. A despesa de depreciação do período vai para a DRE."],
["bp","Ações em Tesouraria são apresentadas no Balanço como",["conta redutora do Patrimônio Líquido","Ativo Circulante","Investimento no Ativo Não Circulante","Passivo Circulante","Receita financeira"],"São ações da própria empresa recompradas; reduzem o PL."],
["bp","A demonstração contábil que evidencia a riqueza gerada pela empresa e sua distribuição entre empregados, governo, financiadores e acionistas é a",["DVA","DRE","DFC","DMPL","DLPA"],"DVA = Demonstração do Valor Adicionado, obrigatória para companhias abertas."],
["bp","Receita bruta de R$ 200.000, deduções de R$ 20.000, CMV de R$ 90.000, despesas operacionais de R$ 50.000. O resultado antes do IR e da CSLL é de",["R$ 40.000","R$ 90.000","R$ 110.000","R$ 60.000","R$ 130.000"],"Receita líquida 180.000 − CMV 90.000 = lucro bruto 90.000 − despesas 50.000 = 40.000."],
["bp","O Custo das Mercadorias Vendidas, pelo inventário periódico, é calculado por",["estoque inicial + compras − estoque final","estoque final + compras − estoque inicial","compras − vendas","receita líquida − lucro bruto − estoque final","estoque inicial − estoque final − compras"],"CMV = EI + C − EF. Ex.: EI 10.000 + compras 50.000 − EF 15.000 = CMV 45.000."],
["bp","A Demonstração das Mutações do Patrimônio Líquido (DMPL) evidencia",["a movimentação de todas as contas do PL no período","as entradas e saídas de caixa","a riqueza distribuída aos empregados","as receitas e despesas do período","a composição do ativo circulante"],"A DMPL mostra aumentos de capital, lucro do período, reservas, dividendos etc. Abrange a DLPA."],
["bp","Uma empresa tem Ativo de R$ 900.000 e Patrimônio Líquido de R$ 600.000. O capital de terceiros (Passivo exigível) é de",["R$ 300.000","R$ 1.500.000","R$ 600.000","R$ 900.000","R$ 150.000"],"Passivo = Ativo − PL = 900.000 − 600.000 = 300.000."],
["bp","Quando o Patrimônio Líquido é negativo, diz-se que a empresa apresenta",["passivo a descoberto","situação líquida positiva","superávit de capital","ativo a descoberto equilibrado","liquidez imediata elevada"],"PL negativo = passivo a descoberto: as dívidas superam os bens e direitos."],
["bp","Pela Lei 6.404/1976, as receitas e despesas financeiras, na DRE, aparecem",["entre as despesas operacionais, antes do resultado antes dos tributos sobre o lucro","antes da receita líquida","depois do lucro líquido","como deduções da receita bruta","fora da DRE, apenas na DFC"],"O art. 187 inclui as despesas financeiras (deduzidas das receitas) entre as despesas operacionais. (O CPC 26 permite apresentá-las em grupo separado, antes dos tributos.)"]
);
/* ---------- v3: Logística, compras e contratos ---------- */
Q.push(
["log","O conceito de nível de serviço logístico refere-se",["ao desempenho oferecido ao cliente em prazo, disponibilidade, confiabilidade e qualidade das entregas","ao número de empregados do setor de logística","ao valor do frete cobrado por quilômetro","ao tamanho dos armazéns da empresa","ao total de veículos da frota própria"],"Nível de serviço é o resultado percebido pelo cliente; mais serviço normalmente exige mais custo (trade-off)."],
["log","Na logística, a análise de trade-off significa",["avaliar compensações de custo entre atividades, pois reduzir o custo de uma pode elevar o de outra","eliminar o transporte para reduzir custos","contratar o fornecedor mais barato em qualquer situação","aumentar estoques sem limite para evitar faltas","negociar apenas por menor preço unitário"],"Ex.: modal mais barato e lento pode exigir mais estoque. Busca-se o menor custo total."],
["log","A logística de abastecimento (suprimentos) é a parte da cadeia que trata",["do fluxo de materiais dos fornecedores até a empresa","da entrega dos produtos acabados aos clientes","do retorno de embalagens vazias","da gestão das vendas pela internet","do atendimento pós-venda"],"Abastecimento (inbound) = fornecedor → empresa. Distribuição (outbound) = empresa → cliente."],
["log","O VMI (Vendor Managed Inventory) é uma prática em que",["o fornecedor gerencia o reabastecimento do estoque do cliente com base em informações compartilhadas","o cliente fabrica os próprios insumos","o estoque é mantido apenas no varejo","não há troca de informações entre as empresas","o transporte é sempre feito pelo cliente"],"No VMI o fornecedor acompanha o consumo do cliente e decide quando repor, reduzindo faltas e o efeito chicote."],
["log","O just in time (JIT) tem como objetivo central",["produzir e entregar na quantidade e no momento exatos da necessidade, reduzindo estoques","manter grandes estoques de segurança em todos os elos","comprar sempre em grandes lotes para obter desconto","eliminar o planejamento da produção","priorizar o transporte aéreo"],"JIT combate desperdícios, especialmente o excesso de estoque, e depende de fornecedores confiáveis."],
["log","O blockchain, aplicado à cadeia de suprimentos, contribui principalmente para",["a rastreabilidade e a segurança dos registros compartilhados entre os participantes","o aumento do consumo de papel nos processos","a eliminação da necessidade de transporte","a redução do número de fornecedores a um só","a substituição dos armazéns por depósitos abertos"],"Registros distribuídos e imutáveis dão transparência à origem e ao percurso dos produtos."],
["log","A Política Nacional de Resíduos Sólidos (Lei 12.305/2010) estabelece a responsabilidade compartilhada pelo ciclo de vida dos produtos e institui",["a logística reversa","o modal multimodal","o sistema kanban","o inventário rotativo","o cross-docking"],"A PNRS obriga fabricantes, importadores, distribuidores e comerciantes de certos produtos a estruturar a logística reversa."],
["log","O transit point se diferencia de um centro de distribuição convencional porque",["recebe cargas consolidadas e as redistribui rapidamente, sem manter estoque","guarda grandes estoques por longos períodos","é sempre um armazém alfandegado","atende apenas cargas a granel líquidas","dispensa qualquer tipo de veículo"],"Transit point e cross-docking são instalações de passagem, voltadas à rapidez e não à estocagem."],
["log","O TMS (Transportation Management System) é um sistema voltado para",["planejar, executar e controlar as operações de transporte, como roteirização e frete","gerenciar endereços dentro do armazém","controlar a folha de pagamento","registrar a contabilidade da empresa","planejar a produção da fábrica"],"TMS = gestão de transportes. WMS = gestão do armazém. ERP integra a empresa."],
["log","A pegada de carbono de uma operação logística pode ser reduzida, por exemplo, com",["a consolidação de cargas e o uso de modais de menor emissão por tonelada transportada","o aumento das viagens com veículos parcialmente vazios","a priorização do modal aéreo","o aumento das distâncias percorridas","a redução da taxa de ocupação dos caminhões"],"Mais carga por viagem e modais como ferroviário, hidroviário e dutoviário emitem menos por tonelada-quilômetro."],
["transp","Em relação ao custo variável por tonelada-quilômetro, o modal com menor custo entre os listados é, em geral, o",["dutoviário","aéreo","rodoviário","rodoviário expresso","aéreo regional"],"Dutovias e hidrovias têm o menor custo variável; o aéreo tem o maior."],
["transp","O principal modal de transporte de cargas no Brasil, em participação na matriz de transportes, é o",["rodoviário","ferroviário","hidroviário","dutoviário","aéreo"],"O Brasil concentra a maior parte das cargas no rodoviário, o que eleva custos logísticos."],
["transp","O modal que oferece serviço porta a porta e maior flexibilidade de rotas é o",["rodoviário","ferroviário","dutoviário","hidroviário","aéreo"],"O caminhão chega praticamente a qualquer ponto, sendo o principal elo de integração com os demais modais."],
["transp","A navegação de longo curso é aquela realizada",["entre portos brasileiros e portos estrangeiros","entre portos brasileiros pela costa","exclusivamente em rios e lagos","dentro de áreas portuárias","entre plataformas de petróleo e o continente"],"Longo curso = internacional. Cabotagem = nacional pela costa. Navegação interior = rios e lagos."],
["transp","O Operador de Transporte Multimodal (OTM) é",["a pessoa jurídica contratada como principal para realizar o transporte multimodal, assumindo a responsabilidade do embarque à entrega","o motorista do primeiro trecho rodoviário","o órgão público que regula o transporte aquaviário","o despachante aduaneiro do importador","o fabricante da carga"],"Lei 9.611/1998: o OTM emite o Conhecimento de Transporte Multimodal e responde por toda a operação."],
["transp","O Registro Nacional de Transportadores Rodoviários de Cargas (RNTRC) é mantido pela",["ANTT","ANTAQ","ANAC","ANP","Receita Federal"],"A ANTT regula o transporte rodoviário e ferroviário e mantém o RNTRC, obrigatório para transporte remunerado de cargas."],
["transp","O transporte de petróleo e derivados por oleodutos, no Brasil, está sujeito à regulação da",["ANP","ANTT","ANTAQ","ANAC","ANEEL"],"A ANP regula as atividades da indústria do petróleo, inclusive o transporte dutoviário de petróleo, derivados e gás natural."],
["transp","O sistema roll-on/roll-off (ro-ro) caracteriza-se por",["embarcar e desembarcar cargas rodantes, como veículos, por meio de rampas","bombear líquidos por dutos","içar contêineres com guindastes de pórtico","transportar granéis sólidos em vagões","utilizar aviões cargueiros"],"Navios ro-ro recebem veículos que entram e saem rodando, sem içamento."],
["transp","Uma desvantagem típica do modal hidroviário é",["a menor velocidade e a dependência de condições de navegabilidade","o alto custo variável por tonelada","a baixa capacidade de carga","a impossibilidade de transportar granéis","a exigência de estradas pavimentadas"],"Hidrovia tem grande capacidade e baixo custo, mas é lenta e depende de calado, clima e infraestrutura portuária."],
["transp","O Manifesto Eletrônico de Documentos Fiscais (MDF-e) tem a função de",["vincular os documentos fiscais transportados na unidade de carga utilizada","substituir o contrato de transporte multimodal","registrar a escrituração contábil da transportadora","comprovar a habilitação do motorista","autorizar a importação de mercadorias"],"O MDF-e relaciona as NF-e/CT-e da carga em um veículo e permite o acompanhamento pelo Fisco."],
["estoq","Um item tem demanda anual de 1.200 unidades, custo de cada pedido de R$ 50 e custo de manter uma unidade em estoque por ano de R$ 3. O lote econômico de compra é de, aproximadamente,",["200 unidades","400 unidades","100 unidades","1.200 unidades","40.000 unidades"],"LEC = √(2 × 1.200 × 50 ÷ 3) = √40.000 = 200."],
["estoq","Estoque médio de R$ 50.000 e CMV mensal de R$ 25.000. A cobertura do estoque é de",["2 meses","0,5 mês","4 meses","25 dias","12 meses"],"Cobertura = estoque médio ÷ consumo por período = 50.000 ÷ 25.000 = 2 meses."],
["estoq","Pelo método do custo médio ponderado móvel, após entradas de 100 unidades a R$ 8,00 e 300 unidades a R$ 12,00, o custo médio unitário é",["R$ 11,00","R$ 10,00","R$ 12,00","R$ 9,00","R$ 20,00"],"(800 + 3.600) ÷ 400 = 4.400 ÷ 400 = 11,00."],
["estoq","O estoque de segurança tem como função",["proteger contra variações na demanda e no tempo de reposição","substituir o ponto de pedido","eliminar o custo de armazenagem","reduzir o nível de serviço","acumular itens obsoletos"],"Cobre incertezas: consumo acima do previsto ou atraso do fornecedor."],
["estoq","O MRP (Material Requirements Planning) calcula as necessidades de materiais a partir",["do plano mestre de produção, da lista de materiais e dos estoques disponíveis","apenas do histórico de vendas do ano anterior","da curva ABC dos fornecedores","dos cartões kanban do chão de fábrica","do saldo bancário da empresa"],"MRP explode a estrutura do produto (BOM) para saber o que, quanto e quando comprar ou produzir."],
["estoq","Na curva ABC, os itens da classe C são caracterizados por",["grande quantidade de itens e pequena participação no valor total","poucos itens com grande participação no valor","itens críticos para a segurança da operação","itens sem nenhuma movimentação","itens de valor intermediário em quantidade intermediária"],"Classe C: muitos itens (≈ 50%) e pouco valor (≈ 5%). Controle mais simples."],
["estoq","Em uma política de revisão periódica de estoques, os pedidos são emitidos",["em intervalos fixos de tempo, com quantidades variáveis","sempre que o estoque atinge o ponto de pedido, com lote fixo","somente quando ocorre falta do item","apenas no fim do exercício contábil","diariamente, sempre com a mesma quantidade"],"Revisão periódica: data fixa, quantidade variável. Revisão contínua (ponto de pedido): quantidade fixa, data variável."],
["estoq","O nível de serviço de 95% em uma política de estoques significa, em termos práticos,",["que em 95% dos ciclos de reposição não deve ocorrer falta do item","que o estoque deve ser 95% maior que a demanda","que 95% dos itens são da classe A","que o fornecedor entrega com 95% de desconto","que o giro do estoque é de 95 vezes"],"Quanto maior o nível de serviço desejado, maior o estoque de segurança necessário."],
["estoq","A tecnologia que permite o inventário automático de vários itens ao mesmo tempo, sem leitura individual em linha de visada, é",["o RFID","o código de barras unidimensional","a contagem manual com fichas","o kanban em papel","o código QR impresso"],"Leitores RFID captam várias etiquetas simultaneamente, agilizando inventários e conferências."],
["estoq","O método de avaliação de estoques UEPS (último a entrar, primeiro a sair)",["não é aceito pelas normas contábeis brasileiras (CPC 16)","é obrigatório para empresas estatais","é o método preferido pela legislação fiscal","é idêntico ao PEPS em qualquer cenário","só pode ser usado para itens da classe C"],"O CPC 16 admite PEPS e custo médio ponderado, além da identificação específica; o UEPS é vedado."],
["armaz","O endereçamento de estoque em um armazém tem como objetivo",["identificar com precisão a localização de cada item, agilizando guarda e separação","definir o preço de venda dos itens","registrar a depreciação das estantes","substituir a nota fiscal de entrada","controlar a jornada dos operadores"],"Endereços (rua, módulo, nível, posição) permitem que o WMS indique onde guardar e onde buscar."],
["armaz","A atividade de guardar os materiais recebidos em seus endereços de armazenagem é chamada de",["put-away (armazenagem)","picking","packing","cross-docking","inventário"],"Fluxo: recebimento → conferência → put-away → estocagem → picking → packing → expedição."],
["armaz","A estrutura de armazenagem indicada para cargas longas, como tubos, perfis e barras, é a",["cantilever","drive-in","flow rack","porta-palete de dupla profundidade","mezanino"],"Cantilever tem braços em balanço, sem colunas frontais, ideal para itens longos."],
["armaz","No flow rack (estante dinâmica), os itens deslizam por roletes inclinados, o que favorece",["o PEPS, pois o abastecimento ocorre por trás e a retirada pela frente","o UEPS em qualquer situação","a armazenagem de cargas longas","a guarda de produtos a granel líquido","o bloqueio de corredores"],"A gravidade leva o item mais antigo à face de separação, garantindo o primeiro a entrar, primeiro a sair."],
["armaz","A cubagem de uma carga é importante na armazenagem e no transporte porque",["permite calcular o volume ocupado e comparar com o peso para definir frete e ocupação","indica a data de validade do produto","define o número de notas fiscais da carga","substitui a pesagem em balança","determina o código NCM da mercadoria"],"Cubagem = comprimento × largura × altura. Cargas leves e volumosas são cobradas pelo peso cubado."],
["armaz","A técnica de picking em que o operador separa vários pedidos ao mesmo tempo, em uma única passagem pelos corredores, é o",["picking por lote (batch picking)","picking discreto (pedido a pedido)","put-away","cross-docking","inventário rotativo"],"Batch picking reduz deslocamentos; depois os itens são distribuídos por pedido."],
["armaz","O pick-to-light é uma tecnologia de separação em que",["luzes nas posições indicam ao operador onde e quantos itens retirar","os paletes são movidos por gravidade","drones fazem a contagem do estoque","o operador recebe instruções por voz","as etiquetas são lidas por radiofrequência"],"Pick-to-light aumenta a produtividade e reduz erros de separação. Picking por voz usa fones."],
["armaz","Em um armazém, a área de quarentena serve para",["segregar materiais que aguardam inspeção ou que foram reprovados","guardar os itens de maior giro","estacionar os caminhões de expedição","armazenar documentos fiscais","receber os visitantes da empresa"],"Itens sem liberação da qualidade ficam separados para não serem usados por engano."],
["armaz","A classificação dos itens por giro para posicioná-los no armazém recomenda que os itens de maior giro fiquem",["próximos às áreas de expedição e em alturas de fácil acesso","nos níveis mais altos e distantes","na área de quarentena","fora do sistema de endereçamento","misturados aos itens obsoletos"],"Slotting por giro reduz deslocamentos na separação."],
["armaz","Um armazém geral, que guarda mercadorias de terceiros mediante remuneração, pode emitir títulos como",["o conhecimento de depósito e o warrant","a duplicata mercantil","o cheque administrativo","a nota promissória rural","o conhecimento de transporte multimodal"],"Decreto 1.102/1903: armazéns gerais emitem conhecimento de depósito e warrant, títulos negociáveis representativos da mercadoria."],
["manus","A transpaleteira é um equipamento de movimentação usado principalmente para",["deslocar paletes horizontalmente, a pequena altura do piso","elevar cargas a grandes alturas nas estantes","transportar granéis líquidos","içar contêineres em navios","separar itens unitários por luz"],"Transpaleteira (paleteira) só levanta o palete o suficiente para movê-lo. Empilhadeiras elevam a alturas maiores."],
["manus","A empilhadeira contrabalançada recebe esse nome porque",["possui um contrapeso na traseira para equilibrar a carga levada à frente","usa a gravidade para mover a carga","não precisa de operador","trabalha apenas em corredores estreitos","eleva a carga por cabos de aço suspensos no teto"],"O contrapeso evita o tombamento para a frente ao elevar a carga nos garfos."],
["manus","A ponte rolante é indicada para",["movimentar cargas pesadas suspensas, ao longo de um vão, em galpões industriais","transportar paletes entre cidades","separar pedidos pequenos","bombear combustíveis","armazenar cargas longas em balanço"],"Pontes rolantes correm sobre trilhos elevados e içam cargas pesadas sem ocupar o piso."],
["manus","O filme stretch, usado no envolvimento de paletes, tem como função principal",["estabilizar e proteger a carga unitizada durante a movimentação e o transporte","identificar o destino da carga","aumentar o peso do palete","substituir o palete de madeira","refrigerar produtos perecíveis"],"Estabiliza a carga, evita quedas e protege contra poeira e umidade."],
["manus","A embalagem terciária é aquela que",["agrupa embalagens secundárias para facilitar o transporte e a armazenagem, como o palete envolvido","tem contato direto com o produto","é a própria rotulagem do produto","é descartada antes do consumo do produto","serve apenas para exposição na prateleira"],"Primária: contato com o produto. Secundária: agrupa primárias. Terciária: agrupa secundárias (palete, contêiner)."],
["manus","A sinalização com rótulos de risco e painéis de segurança em veículos é exigida no transporte de",["produtos perigosos","cargas secas embaladas","produtos alimentícios não perecíveis","documentos e encomendas","móveis desmontados"],"O transporte de produtos perigosos segue regras da ANTT, com rótulos de risco, número ONU e ficha de emergência."],
["manus","A embalagem retornável contribui para a sustentabilidade porque",["é reutilizada em vários ciclos, reduzindo a geração de resíduos","é descartada após o primeiro uso","aumenta o consumo de matéria-prima virgem","impede a logística reversa","exige maior quantidade de embalagens por produto"],"Embalagens retornáveis (caixas plásticas, racks, paletes) circulam entre fornecedor e cliente."],
["manus","A movimentação de materiais por gravidade, como em rampas e roletes inclinados, segue o princípio de",["aproveitar a gravidade para reduzir o esforço e o custo da movimentação","aumentar o número de manuseios","evitar a mecanização em qualquer caso","movimentar sempre itens unitários","priorizar o transporte manual"],"Usar a gravidade é um dos princípios clássicos da movimentação eficiente."],
["manus","O AMR (Autonomous Mobile Robot) diferencia-se do AGV tradicional por",["navegar de forma autônoma com sensores e mapas, desviando de obstáculos sem trilhas fixas","depender de fitas magnéticas ou trilhos fixos no piso","ser operado manualmente por um motorista","servir apenas para içar contêineres","funcionar somente fora do armazém"],"AGVs seguem trajetos guiados; AMRs planejam rotas sozinhos, com maior flexibilidade."],
["manus","Um palete PBR (1,00 m × 1,20 m) ocupa uma área de",["1,20 m²","2,20 m²","1,00 m²","1,44 m²","0,96 m²"],"Área = 1,00 × 1,20 = 1,20 m²."],
["compras","As compras podem ser centralizadas ou descentralizadas. Uma vantagem da centralização é",["o maior poder de negociação, pela consolidação de volumes","a maior autonomia das unidades locais","a rapidez no atendimento de necessidades locais urgentes","o conhecimento detalhado dos fornecedores regionais","a eliminação de procedimentos padronizados"],"Centralizar consolida volume e padroniza; descentralizar dá agilidade e conhecimento local."],
["compras","O ciclo de compras inicia-se, em regra, com",["a requisição de compra que identifica a necessidade","o pagamento ao fornecedor","o recebimento do material no almoxarifado","a avaliação de desempenho do fornecedor","o arquivamento da nota fiscal"],"Ciclo: necessidade → requisição → cotação/seleção → pedido → acompanhamento (follow-up) → recebimento → pagamento."],
["compras","O acompanhamento do pedido junto ao fornecedor para garantir a entrega no prazo é chamado de",["follow-up (diligenciamento)","homologação","adjudicação","inexigibilidade","cotação"],"Follow-up/diligenciamento reduz atrasos e permite reagir a problemas antes da falta."],
["compras","Pela Lei 13.303/2016, a licitação é dispensável, entre outras hipóteses,",["em situações de emergência, quando caracterizada urgência de atendimento que possa causar prejuízo","sempre que a estatal preferir negociar diretamente","para qualquer compra de bens comuns","quando houver mais de três fornecedores no mercado","para obras de grande vulto"],"Art. 29, XV: emergência, com contratação limitada ao necessário para afastar o risco."],
["compras","Na Lei 13.303/2016, a contratação direta por inexigibilidade é cabível, por exemplo, na aquisição de",["materiais que só possam ser fornecidos por produtor ou representante comercial exclusivo","material de escritório de baixo valor","bens comuns por meio de pregão","serviços de limpeza com vários fornecedores no mercado","obras com projeto básico aprovado"],"Art. 30, I: fornecedor exclusivo. Também serviços técnicos especializados de natureza singular com profissional de notória especialização."],
["compras","A Lei 13.303/2016 aplica-se",["às empresas públicas e às sociedades de economia mista, e suas subsidiárias, da União, dos estados, do DF e dos municípios","somente à administração direta da União","apenas às autarquias e fundações","exclusivamente às empresas privadas concessionárias","somente às estatais dependentes de recursos do Tesouro"],"É o estatuto jurídico das estatais, alcançando a Transpetro, subsidiária da Petrobras."],
["compras","Na Lei 13.303/2016, a fase de negociação com o primeiro colocado tem como objetivo",["obter condições mais vantajosas, especialmente quando o preço estiver acima do orçamento estimado","alterar o objeto da licitação","incluir novos licitantes no certame","dispensar a habilitação","definir a modalidade da licitação"],"Art. 57: a estatal deve negociar condições mais vantajosas com quem apresentou a melhor proposta."],
["compras","O sistema de registro de preços é adequado quando",["há necessidade de contratações frequentes, com entregas parceladas e quantidade não definida previamente","a estatal deseja contratar uma obra única e específica","o fornecedor é exclusivo","a contratação é emergencial","se pretende vender bens inservíveis"],"A ata de registro de preços fixa preços para futuras contratações conforme a demanda."],
["compras","Na Lei 14.133/2021, o agente de contratação é",["a pessoa designada para tomar decisões, acompanhar o trâmite da licitação e conduzir o certame até a homologação","o fornecedor vencedor da licitação","o fiscal do contrato após a assinatura","o servidor que realiza o pagamento ao contratado","o órgão de controle externo"],"Art. 8º: agente de contratação conduz a licitação; no pregão, é chamado de pregoeiro."],
["compras","Na Lei 14.133/2021, o diálogo competitivo é a modalidade usada para",["contratações de inovação tecnológica ou soluções complexas, em que a Administração dialoga com licitantes pré-selecionados para desenvolver alternativas","alienação de bens móveis inservíveis","escolha de trabalho artístico com prêmio","aquisição de bens comuns de pronta entrega","contratação de obras de pequeno valor"],"Art. 32: diálogo competitivo para objetos que envolvem inovação, quando a Administração não consegue definir sozinha a solução."],
["compras","Na Lei 14.133/2021, o leilão é a modalidade utilizada para",["alienação de bens imóveis ou de bens móveis inservíveis ou legalmente apreendidos a quem oferecer o maior lance","aquisição de bens comuns","contratação de serviços de engenharia","escolha de trabalho técnico, científico ou artístico","contratação de inovação"],"Leilão = venda pelo maior lance. Concurso = trabalho técnico/artístico com prêmio."],
["compras","Na Lei 14.133/2021, o termo de referência é o documento",["necessário para a contratação de bens e serviços, com definição do objeto, fundamentação, modelo de execução e critérios de medição e pagamento","que encerra o contrato após o recebimento definitivo","que aplica sanções ao contratado","emitido pelo licitante com sua proposta de preços","que registra os preços para contratações futuras"],"Art. 6º, XXIII: o TR detalha o objeto. Para obras e serviços de engenharia, usa-se o projeto básico."],
["compras","Na Lei 14.133/2021, a matriz de riscos é a cláusula contratual que",["define a alocação dos riscos entre contratante e contratado e a responsabilidade por eventos supervenientes","lista os licitantes impedidos de contratar","define a ordem das fases da licitação","estabelece o salário dos empregados terceirizados","substitui a garantia contratual"],"Art. 6º, XXVII e art. 22: a matriz de riscos caracteriza o equilíbrio econômico-financeiro inicial."],
["compras","O critério de julgamento 'maior retorno econômico' é típico de contratos",["de eficiência, em que o contratado é remunerado com base em percentual da economia gerada","de alienação de bens imóveis","de aquisição de material de escritório","de concurso artístico","de obras de pequeno valor"],"Usado em contratos de eficiência: vence a proposta que gerar maior economia líquida para a Administração/estatal."],
["contr","Na gestão de contratos, a diferença entre gestor e fiscal é que",["o gestor coordena e cuida dos aspectos administrativos do contrato, e o fiscal acompanha diretamente a execução do objeto","o fiscal assina o contrato e o gestor executa o serviço","o gestor é sempre um empregado do contratado","o fiscal define o preço do contrato","ambos têm exatamente as mesmas atribuições"],"Lei 14.133, art. 117 e regulamentos: gestão = administrativo; fiscalização = técnico/operacional da execução."],
["contr","O recebimento provisório do objeto contratado tem como finalidade",["verificar inicialmente a conformidade, antes da verificação detalhada que leva ao recebimento definitivo","encerrar definitivamente todas as obrigações do contratado","dispensar a garantia de qualidade do objeto","substituir a fiscalização do contrato","aplicar automaticamente multas ao contratado"],"Recebimento provisório (acompanhamento) e definitivo (após verificação da qualidade e quantidade)."],
["contr","Pela Lei 13.303/2016, os contratos das estatais com duração superior a 5 anos são admitidos, por exemplo, quando",["se tratar de projetos contemplados no plano de negócios e investimentos da empresa","o contratado solicitar","o valor for inferior a R$ 50 mil","houver dispensa de licitação por emergência","a estatal preferir, sem justificativa"],"Art. 71, I e II: plano de negócios e investimentos, ou quando a pactuação por prazo superior for prática rotineira de mercado."],
["contr","Na Lei 13.303/2016, a multa de mora pelo atraso injustificado na execução do contrato",["deve estar prevista no instrumento convocatório ou no contrato","pode ser aplicada mesmo sem previsão contratual","impede a aplicação de outras sanções","é sempre de 50% do valor do contrato","só pode ser aplicada pelo Tribunal de Contas"],"Art. 82: o atraso sujeita o contratado a multa de mora, na forma prevista no edital ou no contrato."],
["contr","O reequilíbrio econômico-financeiro do contrato (revisão) é cabível quando",["fatos imprevisíveis, ou previsíveis de consequências incalculáveis, alteram a equação inicial do contrato","o contratado deseja aumentar seu lucro sem motivo","o índice de reajuste previsto no contrato é aplicado anualmente","a estatal decide reduzir o preço unilateralmente","o fiscal identifica atraso na execução"],"Revisão (recomposição) trata de álea extraordinária; reajuste é a atualização periódica prevista no contrato."],
["contr","A repactuação de preços é uma forma de manutenção do equilíbrio aplicada, em regra, a contratos de serviços contínuos com dedicação exclusiva de mão de obra, e se baseia",["na demonstração analítica da variação dos custos, como acordos coletivos de trabalho","em índice geral de preços aplicado automaticamente","na vontade unilateral do contratado","no valor de mercado do imóvel contratado","na redução do escopo do contrato"],"Lei 14.133, art. 135: repactuação considera a variação dos custos (ex.: convenção coletiva)."],
["contr","A garantia contratual, nas modalidades previstas em lei, serve para",["assegurar o cumprimento das obrigações pelo contratado e cobrir eventuais prejuízos e multas","pagar antecipadamente o contratado","substituir a fiscalização","dispensar a habilitação do licitante","financiar a obra contratada"],"Caução em dinheiro, seguro-garantia ou fiança bancária protegem a contratante em caso de inadimplemento."],
["contr","Na Lei 14.133/2021, a extinção do contrato pode ocorrer de forma",["unilateral pela Administração, consensual entre as partes ou por decisão arbitral ou judicial","apenas por decisão judicial","somente por vontade do contratado","automaticamente após o primeiro atraso","exclusivamente por acordo verbal"],"Art. 138: extinção unilateral, consensual (acordo) ou determinada por decisão arbitral ou judicial."],
["contr","Um contrato digital integrado a um sistema de gestão (ERP) traz como benefício",["alertas automáticos de vencimento, controle de medições e rastreabilidade das alterações","a dispensa de qualquer fiscalização","a eliminação das cláusulas obrigatórias","a impossibilidade de aditivos","a substituição da licitação"],"A integração reduz perdas de prazo, facilita o controle financeiro e mantém histórico auditável."],
["contr","Pela Lei 14.063/2020, a assinatura eletrônica avançada caracteriza-se por",["estar associada ao signatário de forma unívoca, utilizando meios sob seu controle exclusivo, e permitir detectar alterações posteriores","usar obrigatoriamente certificado ICP-Brasil","ser apenas a digitação do nome ao final do documento","não ter validade jurídica","ser exclusiva de órgãos públicos federais"],"Simples: identifica o signatário. Avançada: vínculo unívoco e detecção de alterações (pode usar certificados não ICP-Brasil). Qualificada: certificado ICP-Brasil."],
["contr","Na gestão de riscos contratuais, o risco de variação cambial em um contrato de importação de equipamentos pode ser mitigado por",["cláusulas de reajuste cambial ou instrumentos de proteção (hedge)","eliminação da fiscalização","aumento do prazo sem justificativa","dispensa da garantia","pagamento integral antecipado sem garantia"],"Identificar, alocar e mitigar riscos (cambial, prazo, técnico) faz parte da gestão de contratos."],
["contr","O termo aditivo é o instrumento adequado para",["formalizar alterações de prazo, quantitativo ou escopo do contrato","registrar a variação do reajuste já prevista no contrato","comunicar a mudança de endereço do fiscal","informar o resultado da licitação","publicar o edital"],"Mudanças substanciais exigem aditivo. Alterações simples, como reajuste previsto, podem ser apostiladas."]
);
/* ---------- v3: Informática, Português e Matemática ---------- */
Q.push(
["info","O componente do computador responsável por executar as instruções dos programas e realizar os cálculos é a",["CPU (unidade central de processamento)","memória RAM","placa de rede","fonte de alimentação","unidade de SSD"],"A CPU busca, decodifica e executa instruções. A RAM guarda temporariamente dados e programas em uso."],
["info","Um processador com mais núcleos (cores) tende a apresentar melhor desempenho em",["tarefas executadas em paralelo, como vários programas abertos ao mesmo tempo","armazenamento permanente de arquivos","velocidade de conexão com a internet","resolução do monitor","capacidade da memória ROM"],"Mais núcleos permitem processar várias tarefas simultaneamente."],
["info","É exemplo de software utilitário",["o compactador de arquivos","o sistema operacional Windows 11","o editor de textos Word","a planilha Excel","o navegador de internet"],"Utilitários executam tarefas de manutenção e apoio (antivírus, compactador, desfragmentador, backup)."],
["info","No Explorador de Arquivos do Windows 11, a tecla F2 é usada para",["renomear o item selecionado","excluir o item selecionado","abrir as propriedades do arquivo","atualizar a janela","copiar o item"],"F2 renomeia; F5 atualiza; Delete exclui; Alt + Enter abre as propriedades."],
["info","No Windows 11, o atalho Shift + Delete aplicado a um arquivo",["exclui o arquivo permanentemente, sem enviá-lo à Lixeira","envia o arquivo à Lixeira","renomeia o arquivo","cria uma cópia do arquivo","oculta o arquivo"],"Shift + Delete pula a Lixeira (o sistema pede confirmação)."],
["info","Um arquivo com extensão .xlsx é, por padrão, associado ao",["Microsoft Excel","Microsoft Word","Microsoft PowerPoint","Bloco de Notas","Microsoft Access"],".docx = Word; .xlsx = Excel; .pptx = PowerPoint; .txt = texto simples."],
["info","No Excel, a função =PROCV(A2;Tabela;3;FALSO) retorna",["o valor da 3ª coluna da tabela na linha em que for encontrado exatamente o valor de A2","a soma da 3ª coluna da tabela","o número de vezes que A2 aparece na tabela","a posição de A2 na tabela","o maior valor da 3ª coluna"],"PROCV procura na 1ª coluna e retorna a coluna indicada; FALSO exige correspondência exata (se não achar, #N/D)."],
["info","No Excel, a célula A1 contém 10 e B1 contém 0. A fórmula =A1/B1 retorna o erro",["#DIV/0!","#N/D","#REF!","#NOME?","#VALOR!"],"Divisão por zero gera #DIV/0!."],
["info","No Excel, a fórmula =SOMASE(A1:A10;\">100\") soma",["os valores do intervalo que são maiores que 100","todos os valores do intervalo, exceto 100","os 100 primeiros valores","a quantidade de células maiores que 100","os valores iguais a 100"],"SOMASE soma os valores que atendem ao critério. CONT.SE contaria quantos são."],
["info","No Excel, a referência mista A$1, ao ser copiada para outras células,",["mantém a linha 1 fixa e permite que a coluna se ajuste","mantém a coluna A fixa e permite que a linha se ajuste","não se altera em nenhuma direção","altera tanto a linha quanto a coluna","gera erro de referência"],"O $ fixa o que vem logo depois dele: A$1 trava a linha; $A1 trava a coluna."],
["info","No Word, o recurso que permite registrar e exibir as alterações feitas por revisores em um documento é o",["Controlar Alterações","Mala Direta","Hifenização","Quebra de Seção","Inserir Sumário"],"Na guia Revisão, Controlar Alterações marca inclusões e exclusões para aceitar ou rejeitar depois."],
["info","No Word, para gerar várias cartas personalizadas a partir de uma lista de destinatários, utiliza-se o recurso",["Mala Direta","Controlar Alterações","Estilos","Marcadores","Tabela Dinâmica"],"Mala Direta (Correspondências) combina um modelo com uma fonte de dados."],
["info","No PowerPoint, o modo de exibição que mostra miniaturas de todos os slides, facilitando reorganizá-los, é o",["Classificação de Slides","Anotações","Modo de Leitura","Apresentação de Slides","Estrutura de Tópicos com animação"],"Classificação de Slides exibe todos os slides em miniatura para arrastar e reordenar."],
["info","O protocolo que garante comunicação criptografada entre o navegador e o site, indicado pelo cadeado na barra de endereços, é o",["HTTPS","HTTP","FTP","SMTP","POP3"],"HTTPS = HTTP sobre TLS. SMTP envia e-mails; POP3 e IMAP recebem; FTP transfere arquivos."],
["info","A extranet pode ser definida como",["a parte da rede privada de uma empresa disponibilizada a parceiros externos autorizados, como fornecedores","a internet pública sem restrição","uma rede doméstica sem fio","o mesmo que intranet, sem diferença","um programa antivírus"],"Intranet = interna; extranet = acesso controlado para parceiros; internet = pública."],
["lgpd","O firewall é um recurso de segurança que",["controla o tráfego de rede, permitindo ou bloqueando conexões conforme regras definidas","remove vírus de arquivos já infectados","faz cópias de segurança automáticas","criptografa o disco rígido","gera senhas fortes"],"Firewall filtra conexões; antivírus detecta e remove malware; backup garante a recuperação."],
["lgpd","A autenticação em dois fatores (2FA) aumenta a segurança porque",["exige, além da senha, outro fator, como um código no celular ou a biometria","dispensa o uso de senha","aumenta a velocidade de acesso","criptografa todos os e-mails","impede atualizações do sistema"],"Combina algo que você sabe (senha) com algo que você tem (celular/token) ou que você é (biometria)."],
["lgpd","O spyware é um programa malicioso que",["monitora e coleta informações do usuário sem o seu consentimento","exibe propagandas de forma excessiva","se replica sozinho pela rede","criptografa os arquivos e pede resgate","apenas acelera o computador"],"Spyware espiona; adware exibe propagandas; worm se propaga; ransomware sequestra dados."],
["lgpd","A engenharia social, em segurança da informação, consiste em",["explorar a confiança ou a desatenção das pessoas para obter informações ou acessos","desenvolver programas antivírus","configurar servidores de rede","realizar backup em nuvem","criptografar bancos de dados"],"Phishing, falsos telefonemas do suporte e pretextos para obter senhas são exemplos."],
["lgpd","Pela LGPD, o titular dos dados pessoais é",["a pessoa natural a quem se referem os dados pessoais","a empresa que armazena os dados","o servidor onde os dados estão guardados","o encarregado indicado pela empresa","a ANPD"],"Art. 5º, V: titular = pessoa natural a quem se referem os dados."],
["lgpd","Entre os direitos do titular previstos na LGPD, está o de",["obter a confirmação da existência de tratamento e o acesso aos seus dados","exigir a exclusão de dados necessários ao cumprimento de obrigação legal da empresa","impedir qualquer uso de dados anonimizados","receber pagamento pelo uso de seus dados","escolher o encarregado da empresa"],"Art. 18: confirmação, acesso, correção, anonimização, portabilidade, eliminação (com exceções), informação e revogação do consentimento."],
["lgpd","O princípio da LGPD que limita o tratamento ao mínimo necessário para atingir suas finalidades é o da",["necessidade","transparência","livre acesso","qualidade dos dados","responsabilização"],"Necessidade = minimização: só os dados pertinentes, proporcionais e não excessivos."],
["lgpd","A Autoridade Nacional de Proteção de Dados (ANPD) tem, entre suas competências,",["fiscalizar e aplicar sanções em caso de descumprimento da LGPD","processar criminalmente quem vaza dados","registrar marcas e patentes","julgar ações trabalhistas","emitir certificados digitais ICP-Brasil"],"A ANPD zela pela proteção de dados, edita normas, fiscaliza e aplica as sanções administrativas do art. 52."],
["lgpd","Pela LGPD, dado anonimizado é aquele que",["não permite a identificação do titular, considerando meios técnicos razoáveis","pertence a pessoa já falecida","está guardado em papel","foi coletado com consentimento","pertence a uma pessoa jurídica"],"Dados anonimizados não são considerados dados pessoais, salvo se a anonimização puder ser revertida."],
["lgpd","Um backup completo é feito no domingo e backups incrementais nos demais dias. Para restaurar os dados na quinta-feira, são necessários",["o backup completo de domingo e todos os incrementais de segunda a quinta","apenas o incremental de quinta","apenas o backup completo de domingo","o completo de domingo e apenas o incremental de quinta","os incrementais de segunda a quinta, sem o completo"],"Incremental guarda só o que mudou desde o backup anterior; restaurar exige a cadeia toda. Com diferencial, bastariam o completo e o último diferencial."],
["port","Assinale a frase em que a palavra destacada está grafada de acordo com a norma-padrão.",["A reunião foi adiada por causa da paralisação dos portos.","A reunião foi adiada por causa da paralização dos portos.","O gestor fez uma análize do contrato.","Houve uma excessão à regra.","O fiscal pediu uma pesquiza de preços."],"Paralisação (de paralisar), análise, exceção e pesquisa."],
["port","A palavra que recebe acento gráfico por ser paroxítona terminada em L é",["útil","café","rápido","saúde","herói"],"Útil é paroxítona terminada em L. Café é oxítona terminada em E; rápido é proparoxítona (todas acentuadas); saúde tem hiato com U tônico; herói tem ditongo aberto ÓI."],
["port","Em 'Os relatórios foram entregues ontem', o sujeito é",["simples: os relatórios","oculto","indeterminado","composto","inexistente"],"Um só núcleo (relatórios) = sujeito simples."],
["port","Em 'Choveu muito durante a vistoria', a oração apresenta sujeito",["inexistente (oração sem sujeito)","oculto","indeterminado","simples","composto"],"Verbos que indicam fenômenos da natureza são impessoais: oração sem sujeito."],
["port","Assinale a frase em que o verbo concorda corretamente com o sujeito.",["Faltam dois documentos para concluir o processo.","Falta dois documentos para concluir o processo.","Chegou os novos equipamentos ao terminal.","Sobrou várias vagas no curso.","Existe muitas dúvidas sobre o edital."],"Sujeito posposto continua sendo sujeito: faltam documentos, chegaram equipamentos, sobraram vagas, existem dúvidas."],
["port","Em 'A maioria dos empregados aprovou a proposta', a concordância",["está correta, pois com coletivo partitivo o verbo pode concordar com o núcleo 'maioria'","está errada, pois o verbo deveria obrigatoriamente ir para o plural","está errada, pois 'maioria' exige verbo no futuro","está correta apenas na linguagem oral","está errada, pois não há sujeito na frase"],"Com 'a maioria de', 'grande parte de' etc., o verbo pode ficar no singular (núcleo) ou ir ao plural (especificador)."],
["port","Assinale a frase em que a vírgula foi empregada para separar um aposto.",["Fernanda, a fiscal do contrato, registrou a ocorrência.","Fernanda registrou, a ocorrência no sistema.","Quando terminou a vistoria Fernanda, saiu.","Fernanda registrou a ocorrência, e o relatório.","A fiscal, registrou a ocorrência."],"'A fiscal do contrato' explica quem é Fernanda: aposto explicativo, entre vírgulas."],
["port","Em 'O contrato foi assinado, mas a obra não começou', a conjunção 'mas' estabelece relação de",["oposição (adversidade)","causa","conclusão","condição","finalidade"],"Mas, porém, contudo, todavia, entretanto = adversativas."],
["port","Em 'Como o fornecedor atrasou, a produção parou', a palavra 'como' expressa",["causa","comparação","conformidade","concessão","finalidade"],"'Como' no início, equivalendo a 'porque/já que', é causal. Em 'trabalha como um relógio' seria comparativa."],
["port","O pronome destacado retoma corretamente o termo anterior em:",["Os fiscais visitaram o terminal e o consideraram seguro.","Os fiscais visitaram o terminal e lhe consideraram seguro.","Os fiscais visitaram o terminal e consideraram ele seguro.","Os fiscais visitaram o terminal e consideraram-lhe seguro.","Os fiscais visitaram o terminal e o consideraram-no seguro."],"'Considerar' é transitivo direto: pede o pronome oblíquo 'o'. 'Lhe' é para objeto indireto."],
["port","Assinale a frase em que o verbo 'assistir' está empregado de acordo com a norma-padrão, no sentido de 'ver'.",["Os empregados assistiram ao treinamento de segurança.","Os empregados assistiram o treinamento de segurança.","Os empregados assistiram no treinamento de segurança.","Os empregados assistiram com o treinamento de segurança.","Os empregados assistiram-lhe o treinamento de segurança."],"Assistir (ver, presenciar) é transitivo indireto: assistir a algo. No sentido de ajudar, é transitivo direto: o médico assistiu o paciente."],
["port","O verbo 'preferir' está regido corretamente em:",["Prefiro planejar a improvisar.","Prefiro mais planejar do que improvisar.","Prefiro planejar do que improvisar.","Prefiro muito mais planejar que improvisar.","Prefiro antes planejar do que improvisar."],"Preferir algo a algo, sem 'mais' e sem 'do que'."],
["port","Em 'O gerente chegou cedo', a palavra 'cedo' classifica-se como",["advérbio de tempo","adjetivo","substantivo","preposição","pronome"],"Indica a circunstância de tempo do verbo 'chegou'."],
["port","Em 'A empresa adotou medidas para mitigar os riscos', a palavra 'mitigar' pode ser substituída, sem alteração de sentido, por",["atenuar","ampliar","ignorar","transferir","eliminar totalmente"],"Mitigar = suavizar, atenuar, reduzir a gravidade. Não é eliminar completamente."],
["port","Em 'Os técnicos, que estavam cansados, encerraram a vistoria', a oração entre vírgulas",["é adjetiva explicativa, referindo-se a todos os técnicos","é adjetiva restritiva, referindo-se só a alguns técnicos","é adverbial causal","é substantiva objetiva direta","é coordenada conclusiva"],"Com vírgulas, a adjetiva é explicativa (todos estavam cansados). Sem vírgulas, seria restritiva (só os que estavam cansados)."],
["port","Assinale a frase em que o termo 'porque' está grafado corretamente.",["Não sei por que a entrega atrasou.","Não sei porque a entrega atrasou.","A entrega atrasou por quê o caminhão quebrou.","Explique o por que do atraso.","A entrega atrasou, porquê?"],"'Por que' separado = pelo qual / por qual motivo (inclusive em interrogativas indiretas). 'Porque' = explicação. 'Por quê' no fim de frase. 'O porquê' = substantivo."],
["mat","Em uma empresa, 3/5 dos 40 empregados de um setor fizeram o treinamento. Quantos empregados ainda não fizeram?",["16","24","15","8","20"],"3/5 de 40 = 24 fizeram. Faltam 40 − 24 = 16."],
["mat","Se 5 operários constroem um muro em 12 dias, 6 operários, no mesmo ritmo, construirão o mesmo muro em",["10 dias","14,4 dias","8 dias","11 dias","15 dias"],"Inversamente proporcional: 5 × 12 = 6 × d → d = 10."],
["mat","A razão entre o número de homens e de mulheres em uma equipe é 3/2. Se a equipe tem 30 pessoas, o número de mulheres é",["12","18","10","15","20"],"3 + 2 = 5 partes; 30 ÷ 5 = 6 por parte. Mulheres = 2 × 6 = 12."],
["mat","O valor de x na equação 3x − 7 = 2x + 5 é",["12","−2","2","−12","5"],"3x − 2x = 5 + 7 → x = 12."],
["mat","A soma das raízes da equação 2x² − 8x + 6 = 0 é",["4","−4","3","8","6"],"Soma = −b/a = 8/2 = 4 (raízes 1 e 3)."],
["mat","Se log₂ x = 5, então x vale",["32","10","25","2,5","7"],"log₂ x = 5 ⇔ 2⁵ = x = 32."],
["mat","Um restaurante oferece 3 entradas, 4 pratos principais e 2 sobremesas. O número de refeições diferentes com uma opção de cada é",["24","9","12","18","48"],"Princípio multiplicativo: 3 × 4 × 2 = 24."],
["mat","De quantas maneiras 4 pessoas podem se sentar em 4 cadeiras enfileiradas?",["24","16","12","4","8"],"Permutação de 4: 4! = 24."],
["mat","Em uma urna há 5 bolas vermelhas e 3 azuis. Retirando-se uma bola ao acaso, a probabilidade de ela ser azul é",["3/8","3/5","5/8","1/3","1/8"],"Favoráveis 3; total 8. P = 3/8."],
["mat","A amplitude do conjunto de dados {12, 7, 15, 9, 20} é",["13","20","7","12,6","8"],"Amplitude = maior − menor = 20 − 7 = 13."],
["mat","A área de um triângulo com base de 10 cm e altura de 6 cm é",["30 cm²","60 cm²","16 cm²","32 cm²","15 cm²"],"A = b · h ÷ 2 = 10 × 6 ÷ 2 = 30 cm²."],
["mat","O volume de uma caixa d'água em forma de cubo com aresta de 2 m é",["8 m³","6 m³","4 m³","12 m³","16 m³"],"V = a³ = 2³ = 8 m³ (8.000 litros)."],
["mat","A hipotenusa de um triângulo retângulo com catetos de 5 cm e 12 cm mede",["13 cm","17 cm","7 cm","60 cm","15 cm"],"a² = 25 + 144 = 169 → a = 13."],
["mat","Se f(x) = 2x² − 3, o valor de f(−2) é",["5","−11","11","−5","1"],"2 × (−2)² − 3 = 2 × 4 − 3 = 5."],
["mat","O conjunto dos números inteiros contém, entre outros, o número",["−3","0,5","√2","1/3","π"],"Inteiros: …, −2, −1, 0, 1, 2, … Frações não inteiras são racionais; √2 e π são irracionais."]
);

/* ===== Provas anteriores Cesgranrio: Transpetro Téc. de Administração e Controle Jr. (2011, 2012, 2018) =====
   Formato: [cat, enunciado, [correta, ...4 erradas], explicação, ano, nº original]. "(adaptada)" = alternativas ou dados refeitos. */
const PROVAS={"2018":"PSP RH 2018.1","2012":"PSP RH 2/2012","2011":"PSP RH 3/2011"};
Q.push(
/* ---------- 2018 · Português ---------- */
["port","Texto: “Guerra” virtual pela informação (Carlos Castilho).\nTrecho: “A datificação, processo de transformação em dados de tudo o que conhecemos, aumentou de forma vertiginosa o acervo mundial de informações. [...] Como tudo o que fazemos diariamente é transformado em dados pelo nosso banco, pelo correio eletrônico, pelo Facebook, pelo cartão de crédito etc., já somos passíveis de monitoração em tempo real.”\n\nDe acordo com o texto, o que viabiliza a espionagem virtual é a(o)",["datificação de todas as informações geradas pelas pessoas na internet.","capacitação de especialistas para a criação de máquinas velozes.","centralização do fluxo mundial de dados pelas grandes potências.","criação de sites de entretenimento para a atração dos internautas.","emprego de softwares que possam capturar as senhas dos usuários."],"O texto diz que tudo o que fazemos vira dado e que, por isso, já somos monitoráveis. A centralização (B) é o contrário do texto, que afirma que a internet quebrou a centralização.","2018",2],
["port","Em conformidade com o Acordo Ortográfico vigente, atendem às regras de acentuação todas as palavras em:",["arguição, refém, mausoléu","andróide, odisseia, residência","desbloqueio, pêlo, escarcéu","feiúra, enjoo, maniqueísmo","sutil, assembléia, arremesso"],"Pelo Acordo, perderam o acento os ditongos abertos ÉI/ÓI em paroxítonas (androide, assembleia), o i/u tônico após ditongo em paroxítonas (feiura) e o acento diferencial de pelo. Refém (oxítona em -em) e mausoléu (ditongo aberto em oxítona) mantêm o acento.","2018",3],
["port","A forma verbal destacada atende às exigências da norma-padrão em:",["Os meios eletrônicos contribuem para que os estudantes RETENHAM a maior parte das informações.","Ao digitar as senhas em público, é necessário que CONFIREMOS se há pessoas estranhas por perto.","As informações deveriam ser digitadas de forma condensada para que CABESSEM no espaço próprio.","Para evitar a espionagem é preciso que nós não CONSINTEMOS na utilização dos nossos dados.","Quando algum consumidor QUERER comprar o último modelo, pode agredir outros da fila."],"Reter segue ter: que eles retenham. Os corretos seriam: confiramos, coubessem, consintamos e quiser (futuro do subjuntivo de querer).","2018",4],
["port","A concordância da forma verbal destacada está de acordo com a norma-padrão em:",["Para atender às demandas dos usuários, é preciso que se DESTINEM à pesquisa muitos milhões de dólares.","Com o crescimento da espionagem virtual, é necessário que se PROMOVA novos estudos.","O rastreamento das invasões permite que se SUSPEITEM dos hackers responsáveis.","Para detectar as consequências da guerra virtual, NECESSITAM-SE de estudos mais aprofundados.","É aconselhável que se ESTABELEÇA novas restrições de utilização pelos jovens."],"Voz passiva sintética: o verbo concorda com o sujeito paciente (milhões de dólares se destinem). Erros: promovam novos estudos, estabeleçam novas restrições. Com verbo que exige preposição (suspeitar de, necessitar de) o se é índice de indeterminação e o verbo fica no singular: suspeite-se, necessita-se.","2018",7],
["port","No trecho “aumentou de forma VERTIGINOSA o acervo mundial de informações”, a palavra que apresenta sentido contrário ao de vertiginosa é",["vagarosa","hesitante","indecisa","perplexa","vacilante"],"Vertiginosa = muito rápida, que causa vertigem. O antônimo é vagarosa (lenta).","2018",5],
["port","No trecho “já somos passíveis de MONITORAÇÃO em tempo real, em caráter permanente”, a palavra destacada pode ser substituída, sem prejuízo do sentido, por",["rastreamento","comprovação","demonstração","esclarecimento","recuperação"],"Monitorar = acompanhar, vigiar continuamente, ou seja, rastrear.","2018",8],
["port","A concordância do adjetivo destacado está de acordo com a norma-padrão em:",["Os e-mails e as conversas virtuais são MONITORADOS permanentemente em todo o mundo.","A espionagem virtual e a ausência de punição dos responsáveis são CORRIQUEIROS na batalha virtual.","A guerra cibernética e o manejo de grandes quantidades de dados são BÁSICAS para determinar as relações de poder.","O acolhimento dos refugiados e a redução das desigualdades são NECESSÁRIAS para diminuir os conflitos.","Os softwares contra vírus e a atualização regular dos aplicativos são OBRIGATÓRIAS para a manutenção dos celulares."],"Predicativo de sujeito composto com substantivos de gêneros diferentes vai para o masculino plural: e-mails (m) + conversas (f) → monitorados. Os outros deveriam ser corriqueiras (dois femininos), básicos, necessários e obrigatórios.","2018",6],
["port","De acordo com a norma-padrão, o uso do sinal indicativo de crase é obrigatório na palavra destacada em:",["A solução para o analfabetismo tecnológico é a garantia de acesso de todas as crianças A utilização efetiva de meios digitais.","A utilização de celulares vem facilitando A alfabetização tecnológica de idosos.","As escolas precisam possibilitar A crianças de todas as origens a utilização plena dos recursos.","O analfabetismo tecnológico corresponde A uma efetiva exclusão digital.","Os países desenvolvidos atingiram A meta de universalizar a utilização de meios digitais."],"Acesso a + a utilização = à utilização. Em B e E o verbo é transitivo direto (facilitar a alfabetização, atingir a meta); em C, crianças está no plural sem artigo; em D, não há crase antes de artigo indefinido (uma).","2018",9],
["port","Obedecem às regras ortográficas da língua portuguesa as palavras",["admissão, paralisação, impasse","bambusal, autorização, inspiração","consessão, extresse, enxaqueca","banalisação, reexame, desenlace","desorganisação, abstração, cassação"],"Grafias corretas: bambuzal, concessão, estresse, banalização, desorganização. Paralisação vem de paralisar (análise, paralisia), com s.","2018",10],
/* ---------- 2018 · Matemática ---------- */
["mat","O quarto, o quinto e o sexto termos de uma progressão aritmética são expressos por x + 1, x² + 4 e 2x² + 3, respectivamente. A soma dos dez primeiros termos dessa PA é igual a",["275","260","265","270","280"],"Termo do meio = média dos vizinhos: 2(x²+4) = (x+1) + (2x²+3) → x = 4. Termos: 5, 20, 35 → r = 15. a1 = 5 − 3·15 = −40; a10 = −40 + 9·15 = 95. S10 = (−40 + 95)·10/2 = 275.","2018",11],
["mat","Às 5 da tarde de sexta-feira, Aldo desligou seu computador, que já estava ligado havia 100 horas. A que horas de que dia Aldo havia ligado o computador?",["1 da tarde de segunda-feira","9 da noite de segunda-feira","1 da tarde de terça-feira","2 da tarde de terça-feira","9 da noite de quarta-feira"],"100 h = 4 dias e 4 horas. Sexta 17h − 4 dias = segunda 17h; − 4 h = segunda 13h.","2018",12],
["mat","Em um prisma triangular regular reto inscreve-se um cilindro reto de modo que a base do cilindro seja o círculo inscrito na base do prisma. Se a área lateral do prisma é X e a área lateral do cilindro é Y, a razão Y/X é igual a (adaptada)",["π√3/9","π/3","π√3/3","π/9","2π√3/9"],"Triângulo equilátero de lado a: raio inscrito r = a/(2√3) = a√3/6. X = 3·a·h. Y = 2πr·h = πa√3·h/3. Y/X = (π√3/3)/3 = π√3/9.","2018",15],
["mat","Há 2 urnas: na primeira, 1 bola branca e 1 preta; na segunda, 1 branca e 2 pretas. Uma bola é retirada ao acaso da urna 1 e colocada na urna 2. Em seguida, retira-se ao acaso uma bola da urna 2. Qual a probabilidade de que ela seja branca?",["37,5%","12,5%","25%","50%","62,5%"],"Se veio branca (1/2): urna 2 fica com 2B e 2P → 1/2. Se veio preta (1/2): 1B e 3P → 1/4. P = 1/2·1/2 + 1/2·1/4 = 1/4 + 1/8 = 3/8 = 37,5%.","2018",13],
["mat","Um artesão vende suas pulseiras com 60% de lucro sobre o seu custo. Qual o maior percentual de desconto sobre o preço de venda que ele pode oferecer para não ter prejuízo?",["37,5%","22,5%","10%","40%","60%"],"Custo 100 → preço 160. Desconto máximo = 60 sobre 160 = 37,5%. Pegadinha: 60% de desconto daria preço 64, abaixo do custo.","2018",16],
["mat","O gráfico de uma função quadrática intersecta o eixo y no ponto (0, 9) e o eixo x nos pontos (−2, 0) e (13, 0). Se o ponto P(11, k) pertence à parábola, o valor de k é",["9","5,5","6,5","7","7,5"],"O eixo de simetria passa pela média das raízes: (−2 + 13)/2 = 5,5. O ponto simétrico de (0, 9) em relação a x = 5,5 é (11, 9). Logo k = 9, sem precisar achar a equação.","2018",17],
["mat","Em um retângulo PQRS de lados PQ = 12 cm e QR = 9 cm, os pontos T e U dividem a diagonal PR em três segmentos iguais. A área do quadrilátero STQU, em cm², é igual a",["36","108","72","54","48"],"O triângulo PQR tem área 12·9/2 = 54. TU é 1/3 da base PR com a mesma altura, então QTU = 54/3 = 18. Do outro lado, STU também = 18. Total = 36.","2018",18],
["mat","Num conjunto há 5 elementos positivos e 5 negativos. Escolhem-se 5 números desse conjunto e multiplicam-se. Em quantos casos o produto terá resultado negativo?",["126","25","120","125","128"],"Produto negativo exige quantidade ímpar de negativos: 1 neg (5·C(5,4) = 25) + 3 neg (C(5,3)·C(5,2) = 100) + 5 neg (1) = 126.","2018",19],
/* ---------- 2018 · Específicos ---------- */
["info","Majoritariamente, um ERP reúne os dados de uma empresa em nível",["operacional","tático","estratégico","gerencial","dos clientes e fornecedores"],"O ERP (sistema integrado de gestão) integra as transações do dia a dia (compras, estoques, financeiro, produção), ou seja, o nível operacional. Os níveis gerencial e estratégico usam relatórios e BI construídos sobre esses dados.","2018",21],
["compras","O sistema de compras do setor público tem características distintas das do setor privado, como o processo licitatório, cujo objetivo final é",["escolher a proposta mais vantajosa para a Administração Pública.","realizar concorrência entre possíveis fornecedores.","observar a isonomia entre os concorrentes.","observar a impessoalidade no processo de compra.","promover a publicidade do certame."],"Isonomia, impessoalidade e publicidade são princípios e meios. O objetivo é a proposta mais vantajosa, o que continua valendo na Lei 14.133/2021 (art. 11) e na Lei 13.303/2016 (art. 31).","2018",25],
["manut","Considere um tipo de manutenção cujos serviços são executados por programação definida em unidades de calendário (dias, semanas) ou não calendário (quilômetros rodados, horas de funcionamento). Esse tipo é a manutenção",["preventiva","preditiva","corretiva","ergonômica","financeira"],"Preventiva = intervalo fixo de tempo ou de uso. Preditiva = baseada no monitoramento da condição real do equipamento (vibração, temperatura).","2018",22],
["compras","A cotação de preços é uma importante etapa da gestão de compras. Uma das razões que levam a empresa a realizar cotações entre possíveis fornecedores é",["aumentar o saving.","reduzir o custo do pedido.","reduzir o lead time do pedido.","aumentar o custo do pedido.","aumentar o giro do estoque."],"Saving é a economia obtida na negociação. Cotar entre fornecedores aumenta o saving. A cotação não reduz o custo de emitir o pedido; ao contrário, dá mais trabalho.","2018",27],
["ind","Com relação à quantidade de indicadores que devem ser construídos e gerenciados, tem-se que",["o número de indicadores depende do nível hierárquico e das informações que se deseja controlar.","quanto mais indicadores no nível estratégico, mais fácil será a tomada de decisão.","quanto mais indicadores no nível tático, mais fácil será a tomada de decisão.","quanto mais indicadores no nível operacional, mais fácil será a tomada de decisão.","o número de indicadores independe do nível hierárquico e das informações que se deseja controlar."],"Excesso de indicadores atrapalha a decisão. O topo usa poucos indicadores agregados, e a operação usa mais indicadores detalhados.","2018",23],
["log","Quanto maior a variedade de produtos de uma empresa, mais complexo tende a ser o fluxo de materiais a montante. Uma estratégia que visa a diminuir a compra de peças e componentes avulsos é a",["modularização","kanban","postergação","fracionamento","unitização"],"Modularização = comprar módulos ou subconjuntos prontos em vez de muitas peças soltas. Postergação (postponement) é adiar a diferenciação do produto; unitização é agrupar cargas.","2018",28],
["compras","A administração pública busca realizar compras ao menor custo, respeitando princípios constitucionais e legais. O princípio que une qualidade, celeridade e menor custo na prestação do serviço ou no trato com os bens públicos é o da",["economicidade","razoabilidade","impessoalidade","moralidade","publicidade"],"Economicidade = melhor relação custo-benefício. Ela aparece entre os princípios da Lei 14.133 (art. 5º) e da Lei 13.303 (art. 31).","2018",24],
["compras","Uma evolução do conceito de compras que inclui contratos, expedição, avaliação de fornecedores, compras, transporte e feedback dos requisitantes é o conceito de",["procurement","supply chain","indústria 4.0","compliance","accountability"],"Procurement é a função de suprimentos ampliada e estratégica. Supply chain é a cadeia inteira, do fornecedor do fornecedor ao cliente final.","2018",29],
["rh","Após sua contratação, uma funcionária participou de um processo de orientação (integração) com outros novatos. Um dos objetivos desse processo é",["reduzir a ansiedade do empregado iniciante pela falta de uma orientação adequada.","validar ferramentas utilizadas em seleção e obter fonte de informações para inventários de qualificações.","favorecer os ruídos de comunicação que influenciam na rede de rumores.","coletar dados sobre o planejamento de RH no qual serão criados ou extintos cargos.","idealizar as expectativas dos novos empregados em relação ao salário e ao conteúdo do trabalho."],"A socialização ou integração reduz a ansiedade, acelera a adaptação e alinha expectativas realistas, sem idealizá-las.","2018",30],
["compras","Quando se deseja implementar um programa de desenvolvimento de fornecedores, a primeira atividade é a(o)",["identificação da importância relativa dos produtos/serviços","definição com o fornecedor sobre os projetos a serem implementados","definição do cronograma e do plano de ação","análise de risco","cálculo do saving"],"Primeiro classifica-se o que é crítico (como na matriz de Kraljic). Só depois se escolhem os fornecedores, os projetos e o cronograma.","2018",33],
["rh","Para que o feedback de uma avaliadora seja fonte de aprendizagem em vez de ruídos e ressentimentos, ela deve",["fornecer exemplos específicos e deixar claro o que no comportamento precisa mudar, concentrando-se no que se deve fazer, não no que está errado.","dar feedbacks pessoais em público, com provas e testemunhas que complementem sua apresentação.","focar o feedback na pessoa e não no seu comportamento ou resultados.","ser genérica e subjetiva, usando expressões como “talvez” e “quem sabe”.","ser avaliativa em vez de descritiva, qualificando a outra pessoa."],"Um bom feedback é específico, descritivo, focado no comportamento e no futuro, e dado em particular.","2018",34],
["rh","O conjunto de expectativas explícitas (salário, benefícios, horário) e implícitas (promessas não escritas) entre empregado e organização é definido como",["contrato psicológico","aceitação mútua","vadiagem social","dissonância cognitiva","administração da impressão"],"Contrato psicológico = expectativas mútuas, muitas vezes implícitas, além do contrato formal de trabalho.","2018",31],
["rh","Na carreira de uma funcionária, os níveis iniciais são básicos e, a partir de certo patamar, ela pode prosseguir por cargos gerenciais ou tipicamente técnicos. Esse desenho de carreira é denominado estrutura",["paralela","técnica","gerencial","em rede","em linha"],"É a carreira em Y (paralela): ascensão pela trilha gerencial ou pela técnica, com remuneração equivalente.","2018",32],
["rh","Comparando a avaliação de desempenho do passado (ADP) com a contemporânea (ADC), tem-se que, na ADP,",["a ausência de indicadores, histórico e mensuração é substituída, na ADC, por ferramentas que facilitam a gestão de pessoas de forma transparente, objetiva e mensurável.","o cenário participativo é substituído, na ADC, por um cenário confuso e centralizador.","a avaliação é personalizada para cada cargo, enquanto na ADC é baseada em punição e recompensa.","as pessoas são o centro de tudo, enquanto na ADC são um “mal necessário”.","há enfoque nos meios e nos fins, enquanto na ADC o enfoque é só nos fins."],"As alternativas B a E invertem as épocas. A avaliação antiga era genérica, punitiva e sem indicadores. A contemporânea, por competências, é participativa, mensurável e focada no desenvolvimento.","2018",35],
["rh","O assédio moral é caracterizado pela",["exposição dos empregados a situações humilhantes e constrangedoras, repetitivas e prolongadas durante a jornada, mais comum em relações hierárquicas autoritárias, desestabilizando a relação da vítima com o ambiente de trabalho.","prática de um ato isolado de humilhação que faz a pessoa sentir-se sem valor.","julgamento que reforça a crença sobre a inferioridade de um indivíduo com base em suposições negativas.","uso da força coercitiva de forma abusiva na distribuição injusta de penalidades.","degradação deliberada das condições de trabalho em que prevalecem atitudes positivas dos chefes."],"As palavras-chave são repetição e prolongamento. Um ato isolado não caracteriza assédio moral. Hoje o tema também aparece na Lei 14.457/2022, que obriga a CIPA a atuar na prevenção do assédio.","2018",37],
["rh","Para que o trabalho com competências seja eficaz, dois desafios a serem superados pela empresa são:",["desenvolver padrões de avaliação e medição claros, objetivos e confiáveis; fazer as descrições de competências ligadas às funções desempenhadas pelas pessoas.","desenvolver boa comunicação; ser extremamente analítico para manter a organização harmônica.","investir no desenvolvimento da liderança; impulsionar a responsabilidade para perceber falhas.","incentivar pequenas vitórias na gestão de conflitos; ligar palavras e ações.","pensar em flexibilidade cultural; usar a delegação como instrumento de gestão de competências."],"Gestão por competências exige medir bem (critérios objetivos) e descrever competências conectadas ao trabalho real.","2018",36],
["rh","No âmbito da redação oficial, não se admitem textos de difícil compreensão. Uma característica que pode levar a essa dificuldade é a",["prolixidade","clareza","correção","formalidade","uniformidade"],"Prolixidade é o excesso de palavras, o contrário da concisão exigida pelo Manual de Redação da Presidência da República.","2018",38],
["rh","A impessoalidade é marca da redação oficial. O trecho que apresenta essa marca é:",["As especificações dos novos computadores deverão ser obtidas junto ao setor competente.","Realmente, as cópias de segurança devem ser feitas diariamente e armazenadas na rede.","Parece que a supracitada reunião tem por objetivo discutir o estudo técnico elaborado por esta unidade.","A meu ver, esse procedimento deveria ser adotado por todos os departamentos da empresa.","Informo a Vossa Senhoria que seria bom realizarmos a reunião no dia 14 do corrente mês."],"Expressões como realmente, parece que, a meu ver e seria bom revelam a opinião de quem escreve. A alternativa correta é neutra e objetiva.","2018",39],
["contab","Os acionistas da Companhia Y (capital fechado) aprovaram o aumento de capital com a emissão de 100.000 novas ações ordinárias de valor nominal R$ 2,00. Os atuais acionistas subscreveram 80% das ações. O registro contábil dessa subscrição é: (adaptada)",["D: Capital a realizar 160.000,00 / C: Capital subscrito 160.000,00","D: Caixa 160.000,00 / C: Capital subscrito 160.000,00","D: Capital subscrito 200.000,00 / C: Capital a realizar 200.000,00","D: Capital a realizar 200.000,00 / C: Capital subscrito 200.000,00","D: Capital social 80.000,00 / C: Capital subscrito 80.000,00"],"Subscritas = 80.000 ações × R$ 2 = R$ 160.000. Na subscrição ainda não há dinheiro: debita-se Capital a realizar (conta redutora do PL) e credita-se Capital subscrito. O Caixa só entra na integralização.","2018",43],
["log","A seguinte atividade NÃO faz parte do projeto de rede logística:",["definição dos roteiros que deverão ser seguidos na distribuição física","definição do número e do tipo de instalações logísticas da rede","definição da localização geográfica da produção, dos estoques e da distribuição","definição do trabalho a ser executado em cada instalação","definição da capacidade de cada instalação"],"O projeto de rede é estratégico e trata de quantas instalações, onde, com que função e capacidade. A roteirização é decisão operacional do dia a dia.","2018",40],
["fluxo","Na DFC, a expressão “as principais atividades geradoras de receita da entidade, pelas transações que envolvem a consecução de seu objeto social” corresponde à definição de",["atividades operacionais","atividades de financiamento","atividades de investimento","equivalentes de caixa","fluxos de caixa"],"CPC 03: operacionais = principais atividades geradoras de receita. Investimento = ativos de longo prazo. Financiamento = capital próprio e empréstimos.","2018",45],
["fluxo","A DFC pode ser elaborada pelos métodos direto e indireto, que diferem em apenas um dos três fluxos. No método direto, o fluxo operacional evidencia seus componentes pelo valor",["bruto","líquido","ajustado","apurado por diferenças","do lucro líquido ajustado"],"O método direto mostra os recebimentos e pagamentos brutos (de clientes, a fornecedores). O indireto parte do lucro líquido e faz ajustes.","2018",46],
["compras","De acordo com a Lei 13.303/2016, é dispensável a licitação na contratação de remanescente de obra, serviço ou fornecimento, em consequência de rescisão contratual, desde que atendida a ordem de classificação da licitação anterior e aceitas as mesmas condições do contrato encerrado. Nos termos da Lei, a manutenção das mesmas condições inclui o",["preço","período","objetivo","termo","final"],"Art. 29, VI, da Lei 13.303: “...aceitas as mesmas condições do contrato encerrado por rescisão ou distrato, inclusive quanto a preço, devidamente corrigido”. Essa é a lei que rege as licitações da Transpetro.","2018",47],
["info","Um programador em home office perdeu todo o trabalho não salvo por causa de uma falta de energia de alguns minutos. O equipamento que poderia ter evitado esse transtorno é o",["nobreak","filtro de linha","estabilizador","firewall","disco rígido"],"O nobreak (UPS) tem bateria e mantém o computador ligado na queda de energia. Filtro de linha e estabilizador só tratam ruído e variação de tensão.","2018",48],
["info","Um usuário do Windows deseja mostrar e manter fixas na tela, simultaneamente, todas as janelas abertas, para depois usar as teclas de direção e escolher o aplicativo. Para isso, pode pressionar e soltar a combinação",["Ctrl + Alt + Tab","Ctrl + Shift","Alt + Shift","Alt + Shift + Esc","Ctrl + Shift + Tab"],"Alt+Tab mostra as janelas só enquanto o Alt está pressionado. Ctrl+Alt+Tab deixa a lista fixa para escolher com as setas. Vale no Windows 10 e 11.","2018",53],
["info","No Windows, o arquivo “Material e Ensaios”, que está em C:\\Laboratório, é ARRASTADO para a pasta Laboratório B do disco externo D. O arquivo “Relatórios Financeiros”, em D:\\Administrativo, é RECORTADO e COLADO na pasta Administrativo B, na raiz de C. Qual a consequência?",["“Relatórios Financeiros” é removido da origem e “Material e Ensaios” é mantido na origem; cada arquivo passa a existir na pasta de destino.","Os dois arquivos permanecem nas origens e são criadas cópias nos destinos.","“Relatórios Financeiros” é mantido na origem e “Material e Ensaios” é removido da origem.","“Material e Ensaios” é removido e não é copiado para Laboratório B.","Os dois arquivos são removidos das origens e aparecem nos destinos."],"Arrastar entre unidades diferentes copia (o padrão no mesmo disco é mover). Recortar e colar sempre move.","2018",51],
["matfin","Uma empresa comprou um ativo por R$ 18 milhões em janeiro de 2008, que foi avaliado em R$ 36 milhões em janeiro de 2018. Em capitalização composta, a taxa anual de retorno mais próxima é (dados: 2^0,1 = 1,072; 2^0,2 = 1,149; 2^0,3 = 1,231; 2^0,4 = 1,319; 2^0,5 = 1,414)",["7,2%","5,8%","10,0%","12,5%","14,9%"],"36 = 18(1+i)^10 → (1+i)^10 = 2 → 1+i = 2^0,1 = 1,072 → i ≈ 7,2% a.a.","2018",54],
["matfin","Uma empresa quer antecipar para abril o pagamento das duas últimas parcelas de R$ 8.820,00 de um financiamento a 5% ao mês, que vencem em maio e junho. Pelo desconto racional composto, o valor de quitação é",["R$ 16.400,00","R$ 15.876,00","R$ 16.000,00","R$ 16.800,00","R$ 17.640,00"],"Trazer cada parcela a valor presente: 8.820/1,05 = 8.400 e 8.820/1,05² = 8.820/1,1025 = 8.000. Total = 16.400.","2018",55],
["info","Nos navegadores Chrome, Edge e Firefox, no Windows, que atalho cria uma nova guia?",["Ctrl + T","Ctrl + M","Ctrl + W","Ctrl + N","Ctrl + O"],"Ctrl+T = nova guia (tab). Ctrl+N = nova janela. Ctrl+W = fecha a guia. Ctrl+O = abrir arquivo.","2018",57],
["lgpd","Uma empresa com intranet fortemente protegida quer que os funcionários se conectem de casa, pela internet, de forma segura, como se estivessem dentro da intranet. Para isso, deve estabelecer um(a)",["VPN","Captcha","DNS","Firewall","LAN"],"A VPN cria um túnel criptografado sobre a internet até a rede da empresa.","2018",58],
["info","Uma planilha tem os meses em A3:A14 e a produção de petróleo de 2015 em B3:B14. Que fórmula retorna o NOME do mês de maior produção em 2015?",["=ÍNDICE($A3:$A14;CORRESP(MÁXIMO(B3:B14);B3:B14;0))","=CORRESP($A3:$A14;ÍNDICE(MÁXIMO(B3:B14);B3:B14;0))","=CORRESP($A3:$A14;MÁXIMO(ÍNDICE(B3:B14);B3:B14;0))","=ÍNDICE($A3:$A14;MÁXIMO(CORRESP(B3:B14);B3:B14;0))","=MÁXIMO($A3:$A14;CORRESP(ÍNDICE(B3:B14);B3:B14;0))"],"Leia de dentro para fora: MÁXIMO acha o maior valor, CORRESP(...;0) acha a posição exata dele, e ÍNDICE devolve o mês dessa posição.","2018",59],
["info","Na tabela A3:E14, a coluna A tem os meses (Janeiro a Dezembro) e as colunas B, C e D têm a produção de 2015, 2016 e 2017. Que fórmula, fora da tabela, apresenta corretamente a produção de julho de 2016?",["=PROCV(\"Julho\";A3:E14;3;0)","=PROCH(\"Julho\";A3:E14;3;1)","=PROCH(\"Julho\";A3:E14;2;0)","=PROCV(\"Julho\";A3:E14;2;0)","=PROCV(\"Julho\";A3:E14;3;1)"],"Os meses estão em linhas, então a busca é vertical (PROCV). 2016 é a 3ª coluna da matriz (A=1, B=2, C=3). O 0 (FALSO) exige correspondência exata; o 1 exigiria a coluna em ordem crescente.","2018",60],
/* ---------- 2012 · Português ---------- */
["port","De acordo com a norma-padrão, a frase que contém desvio em termos de regência é:",["O patrão deixou de pagar o empregado na sexta-feira.","Assistiram ao jogo milhares de pessoas.","O funcionário visou o passaporte do professor.","A aeromoça procedeu à chamada dos passageiros.","O estudante de Direito aspirava à carreira diplomática."],"Pagar: coisa é objeto direto e pessoa é objeto indireto (pagar ao empregado). Visar no sentido de pôr visto é transitivo direto; assistir (ver), proceder (realizar) e aspirar (desejar) pedem a.","2012",3],
["port","Parônimos são palavras de grafia semelhante e significados distintos. Foi usada a palavra adequada em:",["O bandido foi preso em flagrante. (flagrante / fragrante)","A autoridade valeu-se do saber de um iminente juiz. (eminente / iminente)","Como o fumo foi prescrito em recintos fechados, o senhor não pode fumar aqui. (prescrito / proscrito)","O motorista infligiu a lei de trânsito ao desrespeitar o sinal. (infligir / infringir)","O conserto de cordas e percussão foi muito apreciado. (concerto / conserto)"],"Eminente = ilustre; iminente = prestes a ocorrer. Proscrito = proibido. Infringir = violar; infligir = aplicar pena. Concerto = apresentação musical; conserto = reparo. Fragrante = perfumado.","2012",6],
["port","Algumas palavras destacadas na frase devem receber o acento indicador de crase:\n“O artista fica (1) A trabalhar na sua obra, (2) A noite, indiferente (3) AQUILO que o cerca. Dias e dias (4) A fio repete (5) A rotina, (6) A qual se dedica sem se cansar.”\nDe acordo com a norma-padrão, a correção resulta, respectivamente, em:",["a - à - àquilo - a - a - à","à - à - aquilo - a - a - a","à - a - àquilo - à - a - a","a - à - aquilo - a - à - a","a - a - àquilo - à - à - à"],"(1) antes de verbo, não há crase; (2) à noite, locução adverbial feminina; (3) indiferente a + aquilo = àquilo; (4) a fio, locução com palavra masculina; (5) repete a rotina, objeto direto; (6) dedica-se a + a qual = à qual.","2012",7],
["port","A colocação pronominal está de acordo com a norma-padrão em:",["Chega-se rapidamente a Lisboa pelo mar.","Quem viu-me em Lisboa percebeu minha alegria.","Como pode-se chegar a Lisboa?","Os marinheiros tinham ensinado-me a guerrear.","Quando encontrarem-se em Lisboa, visitem o Castelo de São Jorge."],"Pronomes relativos e indefinidos (quem), advérbios interrogativos (como) e conjunções subordinativas (quando) atraem o pronome (próclise): quem me viu, como se pode, quando se encontrarem. Não há ênclise a particípio: tinham-me ensinado.","2012",8],
["port","O par de particípios destacados está empregado de acordo com a norma-padrão em:",["Ela já havia PAGADO a conta quando aconteceu o assalto. / O livro tinha sido PAGO com cartão de crédito.","Todos tinham CHEGADO quando a homenagem começou. / Muitos convidados ainda não tinham CHEGO.","Os funcionários tinham TRAZIDO o material. / O bandido foi TRAGO à presença das vítimas.","Todos tinham FICADO boquiabertos. / A família tinha FICO reunida em casa.","Um grupo havia COMPRADO o imóvel. / As crianças já tinham COMPRO doces."],"Pagar tem particípio duplo (pagado e pago). Chego, trago, fico e compro não são particípios na norma-padrão: o correto é chegado, trazido, ficado e comprado.","2012",5],
["port","A frase em que todas as palavras estão corretamente grafadas é:",["A obra foi paralisada devido ao grande vazamento de água.","Quando o assunto é fome, é impossível banalizar a discução.","A análise dos fatos levou a se considerar a excessão como regra.","Ao canalisar o rio que passava na cidade, grandes enxentes aconteceram.","Não foi possível utilisar a metodologia programada para a execussão do projeto."],"Grafias corretas: discussão, exceção, canalizar, enchentes, utilizar, execução.","2012",9],
/* ---------- 2012 · Matemática ---------- */
["mat","“Em 2010, os 28 terminais aquaviários da Transpetro operaram uma média mensal de 869 embarcações (navios e barcaças).” Se a diferença entre o número médio de barcaças e o de navios operados mensalmente foi 23, qual a média de barcaças operadas por mês?",["446","423","432","464","472"],"b + n = 869 e b − n = 23 → 2b = 892 → b = 446 (e n = 423, a pegadinha da alternativa A).","2012",11],
["mat","Dentro de um estojo há somente 6 canetas, cada uma de uma cor (rosa, roxo, verde, azul, vermelha e preta). Retirando-se ao acaso duas canetas, qual a probabilidade de que nenhuma delas seja verde? (adaptada)",["2/3","1/3","1/6","5/6","1/2"],"Casos favoráveis: C(5,2) = 10. Casos possíveis: C(6,2) = 15. P = 10/15 = 2/3. Ou: 5/6 × 4/5 = 2/3.","2012",12],
["mat","João soube que, se quitasse um empréstimo até o fim do mês, pagaria R$ 7.350,00, o que representaria um desconto de 12,5% sobre o valor a ser pago na data combinada. Qual foi, em reais, o valor do desconto?",["1.050,00","882,00","918,75","1.044,05","1.368,50"],"7.350 = 87,5% do valor original → original = 7.350/0,875 = 8.400. Desconto = 8.400 − 7.350 = 1.050. Pegadinha: 12,5% de 7.350 = 918,75 (B).","2012",13],
["mat","Uma vitrinista dispõe de 9 vestidos de modelos diferentes e deve escolher 3 para expor na vitrine. Quantas são as escolhas possíveis?",["84","96","168","243","504"],"A ordem não importa, então é combinação: C(9,3) = 9·8·7/6 = 84. Arranjo (504) seria se a ordem importasse.","2012",14],
["mat","A raiz da função f(x) = 2x − 8 é também raiz da função quadrática g(x) = ax² + bx + c. Se o vértice da parábola de g é V(−1, −25), a soma a + b + c é igual a",["−21","−25","−24","−23","−22"],"Raiz de f: x = 4. Forma canônica: g(x) = a(x + 1)² − 25; g(4) = 25a − 25 = 0 → a = 1. a + b + c = g(1) = 4 − 25 = −21.","2012",15],
["mat","No quadrilátero RAMP, o ângulo R é reto e os lados PR e RA medem 6 cm e 16 cm. Se a área de RAMP é 105 cm², qual é, em cm², a área do triângulo PAM?",["57","47","53","63","67"],"A diagonal PA divide RAMP em PRA (retângulo em R, área 6·16/2 = 48) e PAM. PAM = 105 − 48 = 57.","2012",18],
["mat","A média das notas dos 110 aprovados em um concurso foi 6,08. A média dos homens foi 6,6, e a das mulheres, 5,5. Quantos homens foram aprovados?",["58","52","54","56","62"],"6,6h + 5,5(110 − h) = 110 · 6,08 = 668,8 → 1,1h + 605 = 668,8 → h = 58.","2012",19],
["mat","Em 2003 a Petrobras produzia cerca de 1,5 milhão de barris; em 2011, 2,5 milhões. Supondo que o aumento anual tenha formado uma progressão aritmética e que o padrão se mantenha, qual será, em milhões de barris, a produção em 2013?",["2,750","2,625","2,950","3,000","3,125"],"De 2003 a 2011 são 8 intervalos: r = 1,0/8 = 0,125. 2013 = 2,5 + 2·0,125 = 2,75.","2012",16],
["mat","Se a soma de dois números naturais não nulos é igual ao quádruplo de um desses números, então",["pelo menos um dos números é múltiplo de 3.","um deles é par, se o outro for ímpar.","certamente os dois números são compostos.","os dois números podem ser iguais.","um dos números é, obrigatoriamente, primo."],"a + b = 4a → b = 3a, então b é múltiplo de 3. Contraexemplos: (1, 3) são ímpares e não compostos; iguais daria 2a = 4a, impossível.","2012",20],
["mat","Oito caixas cúbicas e iguais ocupam 512 dm³. Qual é, em dm², a área total de cada caixa?",["96","16","48","256","384"],"Cada caixa: 512/8 = 64 dm³ → aresta 4 dm. Área total = 6 · 4² = 96 dm².","2012",17],
/* ---------- 2012 · Específicos ---------- */
["rh","O plano de carreira é o instrumento que define as trajetórias de carreira existentes na empresa. Em relação ao plano de carreiras, tem-se que",["são estabelecidas, nele, as condições e os requisitos para a promoção dos empregados.","a definição dos cargos é rígida, de forma que todos realizam as atividades de maneira padronizada.","possibilita aos empregados plena autonomia para progredirem na carreira.","é opcional a sua associação com os demais programas de RH.","se restringe aos gerentes e diretores da empresa."],"O plano de carreira define trilhas, critérios e requisitos de promoção e deve integrar-se a avaliação, treinamento e remuneração.","2012",23],
["manut","Em relação aos tipos de manutenção, constata-se que a manutenção",["preditiva é uma variação da manutenção preventiva, em que os componentes são trocados ou verificados antes que apresentem defeito.","corretiva é o procedimento mais barato e garantido para a conservação de equipamentos.","preditiva é o procedimento usado para corrigir defeitos assim que eles surgem.","preventiva é inviável economicamente para empresas de pequeno porte.","ideal seria a preventiva acontecer raramente, com a corretiva disponível para emergências."],"A preditiva é considerada uma forma de manutenção preventiva baseada na condição, porque atua antes da falha. Corrigir defeitos assim que surgem é corretiva.","2012",21],
["rh","Em relação à gestão de desempenho, observa-se que",["é um processo em evolução, passando de simples avaliações para a gestão da aprendizagem, do autodesenvolvimento e da carreira, além dos resultados quantitativos do negócio.","visa apenas a identificar, ao final de um período, os resultados obtidos.","deve evitar sistemas informatizados, já que envolve pessoas.","deve ser implantada primeiro no nível estratégico, que define o sistema de premiação.","não permite construir ciclos virtuosos de comprometimento, por haver interesses conflitantes."],"Gestão de desempenho é contínua (planejar, acompanhar, avaliar e desenvolver), não só uma avaliação no fim do período.","2012",24],
["rh","Um dos benefícios estabelecidos (obrigatórios) pela legislação trabalhista é o(a)",["repouso semanal remunerado","previdência privada","reembolso em cursos técnicos","auxílio-funeral","seguro de vida em grupo"],"O repouso semanal remunerado está na CF (art. 7º, XV) e na Lei 605/1949. Os demais são benefícios espontâneos.","2012",25],
["rh","A característica de saber fazer e aplicar o conhecimento para resolver problemas é o(a)",["habilidade","julgamento","estilo","insistência","atitude"],"No CHA: conhecimento = saber; habilidade = saber fazer; atitude = querer fazer.","2012",26],
["rh","Uma das etapas do processo de treinamento é o desenvolvimento de conceitos, o qual",["eleva o nível de abstração, ajudando as pessoas a pensarem de forma global e ampla.","desenvolve comportamentos, mudando atitudes negativas para favoráveis.","estimula habilidades e destrezas para a execução de tarefas.","modifica o conhecimento das pessoas quanto a políticas, diretrizes e regras.","aumenta o conhecimento das pessoas com informações sobre a organização e seus produtos."],"Chiavenato: o treinamento pode transmitir informações, desenvolver habilidades, desenvolver atitudes e desenvolver conceitos (abstração, pensar amplo).","2012",30],
["armaz","A escolha dos equipamentos de movimentação e armazenamento varia em função da carga. São equipamentos de movimentação e de armazenamento, respectivamente,",["empilhadeiras e paletes","contêineres e paleteiras","empilhadeiras e tratores","paleteiras e tratores","paletes e estanterias"],"Empilhadeira movimenta. Palete é a base onde a carga fica armazenada. Paleteira e trator também movimentam.","2012",27],
["estoq","Uma empresa adquire anualmente 2.000 toneladas de açúcar. O custo anual de manutenção do estoque é R$ 300,00/t e o custo de cada pedido é R$ 50,00. Pelo Lote Econômico de Compras, o tamanho do lote é dado por",["√(2 × 2.000 × 50 / 300)","√(2 × 2.000 × 300 / 50)","√(50 × 2.000 × 300 / 2)","√(2.000 × 300 / (50/2))","√(2.000 × 50 / (300/2))"],"LEC = √(2·D·Cp/Ca), com D = demanda, Cp = custo do pedido e Ca = custo de armazenagem por unidade. √(2·2.000·50/300) ≈ 25,8 t.","2012",31],
["rh","Se um requerimento é indeferido, pode-se fazer um “pedido de reconsideração”. Em caso de indeferimento do pedido de reconsideração, pode-se fazer outro requerimento, denominado",["recurso","despacho","notificação","ato declaratório","exposição de motivos"],"A sequência é requerimento, depois reconsideração (à mesma autoridade) e depois recurso (à instância superior).","2012",28],
["rh","A técnica dos incidentes críticos considera o desempenho altamente positivo e o altamente negativo. Em uma área de atendimento, qual característica seria considerada desejável?",["Afabilidade no trato com as pessoas","Dispersão mental","Introversão no relacionamento","Interesse em agradar apenas à empresa","Interesse em agradar apenas ao cliente"],"No atendimento, a afabilidade (cordialidade) é o incidente positivo. Agradar apenas a um dos lados é desequilibrado.","2012",32],
["rh","Algumas organizações adotam o plano de carreira em Y, que",["permite ao profissional alcançar cargos executivos ocupando posições tanto na linha de carreira técnica como na gerencial.","é uma progressão para níveis de menor complexidade, porém mais bem remunerados.","propicia o crescimento por polivalência devido ao conhecimento profundo em áreas diferentes.","torna a ascensão possível apenas por meio da promoção a cargos gerenciais.","pressupõe que cada pessoa deve administrar sozinha sua carreira."],"Na carreira em Y, a partir de certo ponto o profissional escolhe entre a trilha técnica (especialista) e a gerencial, ambas com possibilidade de crescimento.","2012",35],
["rh","Constata-se que a universidade corporativa se apoia",["na intenção de prover treinamento e desenvolvimento para os funcionários nos assuntos de interesse operacional e estratégico da empresa.","em uma educação preocupada com o crescimento do indivíduo e não com a qualificação requisitada pela empresa.","no tripé ensino-pesquisa-extensão e na referência da sociedade.","na autonomia de ter qualquer curso reconhecido pelo MEC sem avaliação.","na obrigatoriedade de uma instituição acadêmica formal revalidar todos os seus cursos."],"A universidade corporativa alinha a educação à estratégia da empresa. O tripé ensino-pesquisa-extensão é das universidades tradicionais.","2012",33],
["estoq","O material de estoque pode ser classificado como crítico em função de problemas de SEGURANÇA quando a empresa",["tiver dificuldade de lidar com a periculosidade.","lidar com materiais de alta perecibilidade.","demandar materiais de grande escassez no mercado.","importar produtos de alto custo.","tiver dificuldades em acomodar em estoque."],"Materiais críticos têm causas diferentes: segurança (periculosidade), obtenção (escassez, importação), economia (alto custo) e armazenagem (perecibilidade, volume).","2012",36],
["estoq","Nos sistemas de previsão de demanda, o modelo quantitativo que se apoia nos componentes tendência, ciclicidade (sazonalidade) e aleatoriedade é o de",["séries temporais","delphi","mini-delphi","analogia histórica","suavização exponencial"],"Séries temporais decompõem os dados históricos em tendência, ciclo, sazonalidade e aleatoriedade. Delphi e analogia histórica são métodos qualitativos.","2012",34],
["bp","O orçamento mestre pode ser dividido em orçamento operacional e orçamento financeiro. O componente que faz parte do orçamento financeiro é o orçamento de",["capital","vendas","compras","custo dos produtos vendidos","despesas operacionais"],"O orçamento financeiro reúne capital (investimentos), caixa e balanço projetado. Vendas, compras, CPV e despesas formam o orçamento operacional, que leva à DRE projetada.","2012",37],
["contab","A técnica empregada para o registro dos fatos contábeis, que tem como objetivo o controle do patrimônio e de suas variações, é denominada",["escrituração","controladoria","consolidação","combinação","demonstração"],"Técnicas contábeis: escrituração (registrar), demonstração (expor), auditoria (confirmar) e análise (interpretar).","2012",41],
["contab","A empresa Juventude Ltda. comprou mercadorias por R$ 3.700,00, pagando 50% de entrada em cheque e o restante para trinta dias. O registro contábil na data da aquisição é:",["Debita Estoque R$ 3.700,00; Credita Banco R$ 1.850,00; Credita Fornecedores R$ 1.850,00","Debita Banco R$ 1.850,00; Debita Fornecedores R$ 1.850,00; Credita Estoque R$ 3.700,00","Debita Estoque R$ 3.700,00; Credita Caixa R$ 1.850,00; Credita Banco R$ 1.850,00","Debita Estoque R$ 1.850,00; Debita Caixa R$ 1.850,00; Credita Banco R$ 3.700,00","Debita Estoque R$ 1.850,00; Debita Banco R$ 1.850,00; Credita Banco R$ 3.700,00"],"Entra o estoque inteiro (débito de 3.700). Sai dinheiro do banco pelo cheque (crédito de 1.850) e nasce a dívida com o fornecedor (crédito de 1.850). É um lançamento de 3ª fórmula.","2012",42],
["compras","Enquadram-se como compras para investimento",["as compras de bens e equipamentos que compõem o ativo (imobilizado) da empresa.","os materiais que integram o produto final, como as matérias-primas.","os materiais consumidos rotineiramente que não integram o produto.","todas as compras processadas pela administração pública por licitação.","as compras que demandem um administrador especializado em comércio exterior."],"Compras de investimento são bens de capital (ativo imobilizado). A e B são compras para consumo (produtivo e não produtivo).","2012",39],
["mat","Uma dona de casa comprou um botijão de gás por R$ 75,00 à vista. Sabendo que o valor inicial era R$ 80,00, qual foi o percentual de desconto?",["6,25%","5%","6,67%","75%","80%"],"Desconto = 5 sobre o preço inicial 80: 5/80 = 6,25%. Pegadinha: 5/75 = 6,67%.","2012",43],
["transp","Uma unidade de carga é transportada em todo o percurso por duas ou mais modalidades, sob um único contrato, desde a origem até o destino, sob responsabilidade de um único Operador de Transporte Multimodal (OTM). Tal conceito é o transporte",["multimodal","de percurso único","intermodal","segmentado","unimodal"],"Multimodal = vários modais com contrato único e um único responsável, o OTM (Lei 9.611/1998). No intermodal, cada trecho tem documento próprio.","2012",40],
["mat","A empresa Show de Bola produz por mês 8.000 bolas de futebol, 3.000 de vôlei e 1.500 de basquete. Está previsto um aumento de 12% na produção de bolas de futebol. O percentual de aumento na produção total será de",["7,68%","7,13%","12%","36%","64%"],"Aumento = 12% de 8.000 = 960 bolas. Total = 12.500. 960/12.500 = 7,68%.","2012",44],
["matfin","Pedro comprou um carro de R$ 23.000,00, pagando R$ 11.000,00 de entrada e financiando o saldo por 6 meses a juros compostos de 3% ao mês, para pagamento ao final. O veículo terá custado a Pedro, aproximadamente, (adaptada; 1,03⁶ ≈ 1,194)",["R$ 25.329,00","R$ 23.000,00","R$ 25.160,00","R$ 27.140,00","R$ 27.463,00"],"Saldo = 12.000. Montante = 12.000 × 1,03⁶ ≈ 12.000 × 1,19405 ≈ 14.329. Total = 11.000 + 14.329 ≈ 25.329.","2012",45],
["matfin","Um investimento de R$ 3.000,00 resultou em R$ 3.600,00 após cinco meses. A taxa de juros simples mensal equivalente é de",["4%","0,04%","0,20%","5%","20%"],"J = 600 = 3.000 · i · 5 → i = 600/15.000 = 0,04 = 4% a.m. 20% é a taxa do período inteiro.","2012",49],
["matfin","Um investimento de R$ 10.000,00 deve render R$ 2.500,00 ao final de cinco meses. A taxa de juros simples mensal compatível é de",["5%","0,05%","0,25%","0,5%","25%"],"2.500 = 10.000 · i · 5 → i = 0,05 = 5% a.m.","2012",50],
["matfin","Foram concedidos dois empréstimos a juros simples: R$ 1.500,00 por 3 meses a 1,5% ao mês e R$ 2.000,00 por 4 meses a 2% ao mês. A soma do valor pago pelos dois empréstimos, em reais, é de",["3.727,50","1.567,50","2.160,00","2.164,86","3.733,00"],"M1 = 1.500(1 + 0,015·3) = 1.567,50. M2 = 2.000(1 + 0,02·4) = 2.160,00. Soma = 3.727,50.","2012",46],
["info","Os navegadores de internet podem usar ferramentas externas para executar vários tipos de serviços. Esses complementos são também denominados",["plugins","browsers","servers","spammers","webmotors"],"Plugin, extensão ou complemento acrescenta funções ao navegador. Browser é o próprio navegador.","2012",51],
["fluxo","O fluxo de caixa demonstra as entradas e saídas monetárias. Dentre os registros do movimento de caixa está o(a)",["recebimento de parcela de venda a prazo","faturamento da compra a prazo","depreciação de equipamento da fábrica","emissão de nota fiscal de venda a prazo","emissão de nota fiscal de transferência de estoque"],"Só entra no fluxo de caixa o que movimenta dinheiro. Faturar ou emitir nota a prazo não movimenta caixa, e a depreciação é despesa sem desembolso.","2012",47],
["info","Um usuário pode enviar um arquivo anexado a uma mensagem de e-mail desde que, entre outras restrições, ele não ultrapasse o tamanho limite estipulado pela(o)",["provedor de e-mail utilizado pelo usuário","conexão da internet","estrutura do arquivo","receptor da mensagem","sistema operacional do usuário"],"Quem define o limite de anexo é o serviço de e-mail (por exemplo, 25 MB no Gmail e 20 MB no Outlook.com).","2012",53],
["info","Para efetuar uma compra pela internet, o usuário precisa enviar à loja virtual dados como nome e endereço de entrega. Nos navegadores, esses dados são digitados em",["formulários","códigos","conexões","mensagens","pastas"],"Formulários web têm campos de entrada (input) enviados ao servidor.","2012",60],
["lgpd","As informações de empresas com acesso à internet são alvos de ataques por pragas eletrônicas. Dentre as atividades que podem FACILITAR esses ataques, inclui-se a(o)",["abertura de anexos de e-mails enviados por desconhecidos","execução programada de antivírus","limitação de acesso a sites de downloads","bloqueio de programas P2P","uso de proxy servers"],"Anexo de remetente desconhecido é a porta de entrada clássica de malware e phishing. As demais alternativas são medidas de proteção.","2012",58],
["lgpd","Sistemas operacionais como o Windows trazem um programa que ajuda a impedir a invasão do computador por hackers ou softwares mal-intencionados, filtrando as conexões. Esse programa é conhecido como",["firewall","administrador","decodificador","host","script"],"O firewall filtra o tráfego de rede conforme regras. O Windows traz o Firewall do Windows Defender.","2012",59],
/* ---------- 2011 · Português ---------- */
["port","Trecho: “Antes do telégrafo, batizado de ‘a autoestrada do pensamento’, o ritmo de vida era superlento.”\nNa expressão “a autoestrada do pensamento”, a palavra autoestrada significa",["canal","diretriz","expansão","objetividade","modernização"],"Sentido figurado: o telégrafo era a via (canal) por onde os pensamentos circulavam rapidamente.","2011",2],
["port","A substituição da palavra destacada ALTERA o sentido do enunciado em:",["“Romances FLORESCERAM sob impacto do telégrafo.” / Romances IMERGIRAM sob impacto do telégrafo.","“Códigos secretos foram INVENTADOS” / Códigos secretos foram CRIADOS","“O governo e as leis TENTARAM controlar” / O governo e as leis PROCURARAM controlar","“tentaram controlar o novo meio e FALHARAM” / tentaram controlar o novo meio e ERRARAM","“com seus usos e vocabulário PRÓPRIO” / com seus usos e vocabulário PECULIAR"],"Florescer = prosperar, surgir. Imergir = afundar, mergulhar, o sentido oposto. As outras trocas são sinônimas.","2011",3],
["port","O termo destacado é substituído corretamente pelo pronome, de acordo com a norma-padrão, em:",["“A Internet não usa PAPEL” – A Internet não o usa.","“faz ISSO com o imediatismo do telefone” – faz-lo com o imediatismo do telefone.","“permitia ÀS PESSOAS” – permitia-as.","“em que reinava A RAINHA VITÓRIA” – em que reinava-a.","“provocou A MAIOR REVOLUÇÃO” – provocou-lhe."],"Objeto direto vira o/a, e o advérbio não atrai a próclise (não o usa). Corretos seriam: fá-lo (verbo terminado em z perde a letra e o pronome vira lo); permitia-lhes (objeto indireto); Rainha Vitória é sujeito, não objeto; provocou-a (objeto direto).","2011",5],
["port","A sentença em que a expressão destacada está usada de acordo com a norma-padrão é:",["O desejo DE QUE a Internet ficasse mais rápida se realizou.","O provedor QUE comprei o plano demonstra eficiência.","As pessoas DOS QUAIS compareceram desconheciam informática.","O menino, O CUJO pai trabalha em informática, virá ajudar-nos.","A matéria AONDE me dei mal foi programação."],"Desejo de algo → desejo de que. Corretos seriam: do qual comprei o plano; as pessoas que compareceram; cujo (sem artigo); em que (aonde só com verbo de movimento).","2011",9],
["port","Na frase “O chefe de vários departamentos IDENTIFICA a mudança no cenário da informática”, a palavra identifica pode ser substituída, mantendo o sentido, pelo verbo ver, flexionado de acordo com a norma-padrão, por",["vê","vêm","veem","vem","viram"],"O sujeito é o chefe (singular), no presente: ele vê. Veem = eles (sem acento desde o Acordo); vem e vêm são do verbo vir.","2011",6],
["port","Associe as palavras à letra ou dígrafo que as completa corretamente:\nI – exce__ão   II – marginali__ar   III – e__tranho   IV – má__imo\nP – ss   Q – z   R – s   S – ç   T – x",["I – S, II – Q, III – R, IV – T","I – P, II – R, III – T, IV – S","I – Q, II – P, III – T, IV – R","I – R, II – S, III – T, IV – P","I – T, II – Q, III – R, IV – P"],"Exceção (ç), marginalizar (z, sufixo -izar), estranho (s), máximo (x).","2011",7],
["port","O sinal indicativo de crase é necessário em:",["É possível ir AS aulas sem levar o notebook.","A venda de computadores chegou A reduzir o preço do equipamento.","Os atendentes devem vir A ter novo treinamento.","Não desejo A ninguém uma vida infeliz.","A instrutora chegou A tempo para a prova."],"Ir a + as aulas = às aulas. Não há crase antes de verbo (a reduzir, a ter), antes de pronome indefinido (a ninguém) nem antes de palavra masculina (a tempo).","2011",8],
/* ---------- 2011 · Matemática ---------- */
["mat","Em Boa Vista, a bandeirada do táxi custa R$ 2,50 e o km rodado, R$ 2,86. No Rio de Janeiro, a bandeirada é R$ 4,40 e o km, R$ 1,60. A quantia gasta em Boa Vista para percorrer 10 km permite pagar, no Rio, uma corrida máxima de X quilômetros. X está entre",["16 e 17","13 e 14","14 e 15","15 e 16","17 e 18"],"Boa Vista: 2,50 + 10 × 2,86 = 31,10. Rio: 4,40 + 1,60X = 31,10 → X = 26,70/1,60 ≈ 16,7.","2011",11],
["mat","No Brasil foram vendidos 14,6 milhões de computadores no ano passado (2010). Para que, em 2011, a média mensal de vendas supere em 0,45 milhão a média mensal de 2010, o número de unidades vendidas em 2011, em milhões, deverá ser",["20,00","15,00","16,66","19,10","19,56"],"Média 2010 = 14,6/12 ≈ 1,2167 por mês. Nova média = 1,6667 por mês × 12 = 20,0. Atalho: 14,6 + 0,45 × 12 = 14,6 + 5,4 = 20.","2011",15],
["mat","Um investidor dividiu R$ 63.000,00 em duas partes e aplicou-as em dois fundos. O primeiro rendeu 0,6% no mês, e o segundo, 1,5%. Se o rendimento em reais foi o mesmo nos dois fundos, a parte aplicada no fundo de 0,6% foi",["R$ 45.000,00","R$ 18.000,00","R$ 27.000,00","R$ 36.000,00","R$ 54.000,00"],"0,006x = 0,015(63.000 − x) → 0,021x = 945 → x = 45.000. Faz sentido: a menor taxa precisa de mais capital.","2011",16],
["mat","As raízes da equação 2x² − 4x + 15 = 0 são números complexos que, representados no plano de Argand-Gauss, localizam-se nos quadrantes",["1º e 4º","1º e 2º","1º e 3º","2º e 3º","2º e 4º"],"Δ = 16 − 120 = −104. x = (4 ± i√104)/4 = 1 ± i·(√104)/4. Parte real positiva e partes imaginárias opostas: 1º e 4º quadrantes.","2011",17],
["mat","Uma pesquisa revelou que quatro entre nove brasileiros já têm computador. Suponha que, dentre os que não têm, três em cada cinco pretendam adquiri-lo nos próximos 12 meses. Escolhendo-se ao acaso um entrevistado, a probabilidade de que ele não tenha computador mas pretenda adquirir é de, aproximadamente,",["33%","24%","40%","52%","60%"],"P(não tem) = 5/9; P(pretende | não tem) = 3/5. P = 5/9 × 3/5 = 1/3 ≈ 33%.","2011",14],
["mat","Um terreno retangular de 810 m² e 36 m de comprimento é cercado por um muro, com um único portão de 2,5 m de largura. Qual é, em metros, o comprimento do muro?",["114,5","113,0","113,5","116,0","117,0"],"Largura = 810/36 = 22,5 m. Perímetro = 2(36 + 22,5) = 117 m. Descontando o portão: 117 − 2,5 = 114,5 m.","2011",18],
/* ---------- 2011 · Específicos ---------- */
["info","Os mercados empresariais na Internet são classificados em consumo, negócios e governamental. Quando uma empresa vende para outra empresa, tem-se uma relação",["B2B","B2C","B2E","B2G","B2N"],"B2B = business to business. B2C = para o consumidor; B2G = para o governo; B2E = para os empregados.","2011",24],
["compras","Uma vez autorizada a compra, a área de compras organiza dois cadastros: o das transações efetuadas e o dos dados dos fornecedores. No cadastro de fornecedores, é correto registrar o(a)",["endereço do fornecedor","número do pedido de compra","data do fornecimento","material fornecido","número da fatura"],"Pedido, data, material e fatura são dados da transação. O cadastro de fornecedores guarda dados permanentes: razão social, CNPJ, endereço e contatos.","2011",21],
["compras","Relacione as ameaças ao suprimento com suas características:\nI – Ameaças naturais   II – Ameaças dos mercados   III – Ameaças tecnológicas\nP – Possibilidade de esgotar a matéria-prima disponível na natureza.\nQ – Políticas de preços e internacionalização dos mercados.\nR – Modificações relacionadas à automação e à modernização dos parques industriais.\nS – Intervenção do Estado na economia e no sistema jurídico.",["I – P, II – Q, III – R","I – P, II – R, III – S","I – Q, II – S, III – P","I – R, II – S, III – P","I – S, II – P, III – R"],"Natural = esgotamento de recursos; mercado = preços e globalização; tecnológica = automação. A intervenção do Estado (S) seria ameaça política e legal, que sobra.","2011",22],
["rh","Relacione as dimensões da qualidade de vida com suas características:\nI – Física   II – Emocional   III – Social\nP – Bom funcionamento do organismo e de suas funções vitais.\nQ – Ética, valores, consciência, transcendência, perdão.\nR – Comportamento pessoal e personalidade; lidar com o estresse normal da vida.\nS – Interação dos funcionários, postura positiva diante de si, dos outros e do meio.",["I – P, II – R, III – S","I – P, II – Q, III – R","I – Q, II – S, III – P","I – R, II – S, III – P","I – S, II – P, III – R"],"Física = corpo; emocional = lidar com o estresse; social = relações. Q descreve a dimensão espiritual, que sobra.","2011",25],
["compras","As situações de compra envolvem riscos de intensidade variável. Quanto mais rotineira e de baixo valor, menor o risco. Representa uma compra NOVA a(o)",["exigência de especificação técnica","frequência de compra definida","familiaridade com os fornecedores","homologação mais complexa","procedimento de compra já existente"],"Gabarito oficial: D. Na compra nova a empresa ainda não conhece o item, então precisa especificá-lo tecnicamente antes de cotar. Frequência definida, familiaridade e procedimento existente são marcas da recompra. A homologação mais complexa parece certa, mas a banca não a aceitou.","2011",23],
["rh","Os planos de benefícios podem ser assistenciais, recreativos ou supletivos. No benefício recreativo, incluem-se",["áreas de lazer nos intervalos de trabalho","serviço social","horário móvel de trabalho","restaurante no local de trabalho","creche para filhos de funcionários"],"Recreativos = lazer, grêmio, atividades esportivas. Assistenciais = serviço social, creche. Supletivos = restaurante, transporte, horário móvel.","2011",26],
["rh","Os acidentes de trabalho que provocam afastamento por incapacidade PARCIAL permanente geralmente são motivados por perda de",["qualquer membro ou parte desse membro","visão de ambos os olhos","audição de ambos os ouvidos","visão de um olho com redução de mais da metade da visão do outro","visão de um olho, simultânea à impotência funcional de uma das mãos"],"As alternativas B a E são hipóteses clássicas de incapacidade TOTAL permanente. Perder um membro ou parte dele (um dedo, por exemplo) gera incapacidade parcial.","2011",27],
["rh","Dentre as ferramentas de desenvolvimento de carreiras, a que focaliza o preparo das pessoas para preencher posições mais complexas à medida que se tornam vagas é o(a)",["planejamento de sucessão","centro de avaliação","planejamento de RH","avaliação de desempenho","projeção de promovabilidade"],"Planejamento de sucessão = preparar sucessores para cargos-chave antes que fiquem vagos.","2011",32],
["rh","Pela CLT (art. 66), entre duas jornadas de trabalho haverá um período mínimo de descanso de",["11 horas consecutivas","12 horas","10 horas","9 horas","8 horas"],"Art. 66 da CLT: intervalo interjornada mínimo de 11 horas consecutivas, regra que segue em vigor.","2011",28],
["rh","Clareza, concisão e correção são requisitos das comunicações oficiais. Uma comunicação oficial concisa é aquela em que se",["menciona o estritamente indispensável.","utiliza da prolixidade.","evita o uso de palavras ambíguas.","evitam os vícios de linguagem.","observam as regras gramaticais."],"Concisão = transmitir o máximo de informação com o mínimo de palavras. Evitar ambiguidade é clareza; regras gramaticais são correção.","2011",33],
["rh","Relacione as etapas do treinamento com suas características:\nI – Diagnóstico   II – Desenho   III – Implementação\nP – Execução e condução do programa.\nQ – Levantamento das necessidades de treinamento.\nR – Verificação dos resultados obtidos.\nS – Elaboração do programa para atender às necessidades diagnosticadas.",["I – Q, II – S, III – P","I – P, II – Q, III – R","I – P, II – R, III – S","I – R, II – S, III – P","I – S, II – P, III – R"],"Diagnóstico = levantamento de necessidades (LNT); desenho = programação; implementação = execução. R é a 4ª etapa, a avaliação.","2011",29],
["rh","A circular é um ato de correspondência que",["tem vários destinatários e texto idêntico para todos.","se restringe às autoridades de alto escalão.","se assemelha a um relatório de prestação de contas.","consiste na comunicação feita por um servidor a uma autoridade.","se volta para o público externo de uma instituição pública."],"Circular = mesma mensagem para vários destinatários, para uniformizar uma orientação.","2011",34],
["rh","A ata caracteriza-se por ser um(a)",["registro de fatos, ocorrências, resoluções e decisões de uma assembleia, sessão ou reunião.","documento de fé pública, de fim comprobatório.","documento expedido por servidor público atestando fato que conhece em razão do cargo.","registro de acordo firmado entre a administração pública e particulares.","autorização para o exercício de determinada atividade."],"Ata = resumo fiel do que se passou em reunião. Atestado ou declaração é o documento de B e C; convênio ou contrato é o de D; alvará ou licença, o de E.","2011",35],
["rh","O método de desenvolvimento que movimenta as pessoas por várias posições da organização, para expandir suas habilidades, conhecimentos e capacidades, é o(a)",["rotação de cargos","coaching","jogo de empresas","exercício de simulação","aprendizagem na prática"],"Rotação de cargos (job rotation) = passar por diferentes funções e áreas, ganhando visão sistêmica.","2011",30],
["patr","A incorporação temporária de bens pertencentes a terceiros, emprestados gratuitamente, é conhecida como",["comodato","permuta","doação","sinistro","transferência"],"Comodato = empréstimo gratuito de bem infungível (Código Civil, art. 579). Permuta = troca; doação = transferência definitiva e gratuita.","2011",36],
["patr","O inventário anual é realizado",["para comprovar a quantidade e o valor dos bens patrimoniais existentes em 31 de dezembro de cada exercício, considerando os acréscimos e baixas autorizadas.","quando da mudança do dirigente de uma unidade gestora.","quando da extinção ou transformação da unidade gestora.","quando da criação de uma unidade gestora, para registrar os bens sob sua responsabilidade.","em qualquer época, por iniciativa do dirigente ou de auditorias."],"Tipos de inventário: anual (31/12), de transferência (troca de responsável), de extinção, inicial (criação) e eventual (qualquer época).","2011",37],
["patr","O material considerado genericamente inservível deve ser classificado como OCIOSO quando",["não estiver sendo aproveitado, embora em perfeitas condições de uso.","tiver manutenção onerosa.","ocorrer a inviabilidade econômica de sua recuperação.","ocorrer rendimento precário, em virtude de uso e desgaste.","não mais puder ser utilizado para o fim a que se destina."],"Classificação do inservível: ocioso (bom, mas sem uso), recuperável, antieconômico (manutenção onerosa, rendimento precário) e irrecuperável.","2011",38],
["log","Em um projeto de serviços de BAIXO contato com o cliente, é correto afirmar que",["se disponibilizam pacotes de serviços mais padronizados.","implica atender às necessidades específicas.","resulta em prover maior personalização dos serviços.","se despende muito tempo do cliente no processo.","se necessita acomodar o cliente no cronograma de produção."],"Baixo contato (como um back office) permite padronizar e ganhar eficiência. Alto contato exige personalização e acomodação do cliente.","2011",39],
["estoq","Uma das técnicas usadas para equacionar o conflito nos níveis de estoque, que determina uma quantidade ideal de compra de cada item, é o",["lote econômico de compra","lote econômico de venda","lote padrão de venda","diagrama de causa-efeito","diagrama de Pareto"],"O LEC equilibra o custo de pedir (que favorece lotes grandes) e o de manter estoque (que favorece lotes pequenos).","2011",44],
["log","Nos objetivos de desempenho da produção, a flexibilidade em um projeto de produto/serviço significa",["permitir variações no que se faz.","ser preciso no que se faz.","utilizar pouco tempo no que se faz.","manter a pontualidade no que se faz.","economizar dinheiro no que se faz."],"Slack, cinco objetivos: qualidade (fazer certo), rapidez (fazer rápido), confiabilidade (no prazo), flexibilidade (mudar) e custo (barato).","2011",40],
["manut","A verificação da ESTRUTURA predial, na programação da manutenção de edificações, prevê",["verificação de possíveis fissuras","reparo nas portas","inspeção de luminárias","inspeção dos revestimentos","inspeção nos sistemas de caixa d’água"],"Estrutura = vigas, pilares e lajes, onde fissuras são o sinal de alerta. Portas são esquadrias; luminárias, sistema elétrico; caixa d'água, sistema hidráulico.","2011",46],
["estoq","Classificando os estoques pela natureza da demanda, aquela que requer ressuprimento contínuo ou periódico é a demanda",["permanente","sazonal","derivada","irregular","em declínio"],"Permanente = consumo regular, que exige reposição contínua. Sazonal = picos em épocas certas. Derivada = depende de outro item (MRP).","2011",48],
["matfin","Juros, montante e principal são variáveis da matemática financeira. As duas últimas também podem ser denominadas, respectivamente,",["valor futuro e valor presente","capital e valor presente","tempo zero e prestação total","valor futuro e anuidade","valor presente e valor futuro"],"Montante = VF (FV); principal = capital = VP (PV). Atenção à ordem: montante vem primeiro.","2011",49],
["manut","Com relação à manutenção corretiva NÃO planejada, é correto afirmar que",["implica altos custos, pois a quebra inesperada pode gerar perdas de produção.","depende de decisão gerencial, obedecendo a um plano.","se caracteriza pela previsibilidade da deterioração, monitorando o equipamento.","é marcada pelo trabalho sistemático para evitar a ocorrência de falhas.","é executada antes que o equipamento apresente defeito."],"Corretiva não planejada = conserto após a quebra inesperada, a mais cara. B é corretiva planejada; C é preditiva; D e E são preventiva.","2011",47],
["matfin","Considerar o valor do dinheiro no tempo significa que, a uma taxa de juros efetiva maior que zero, uma unidade monetária apresenta",["valores financeiros distintos em datas focais distintas.","o mesmo valor independentemente da data focal.","o mesmo valor no tempo zero e em uma data focal à frente.","valores crescentes à medida que se aproxima do tempo zero.","valores futuros decrescentes à medida que se distancia do tempo zero."],"Com juros positivos, R$ 1 hoje vale mais que R$ 1 amanhã. Para comparar valores, é preciso levá-los à mesma data focal.","2011",50],
["info","O Microsoft Office é uma suíte com processador de texto, planilha de cálculo, banco de dados e apresentação gráfica, disponibilizados, respectivamente, pelos programas",["Word, Excel, Access, PowerPoint","Word, PowerPoint, Excel, Access","Word, Excel, PowerPoint, Access","PowerPoint, Excel, Access, Word","PowerPoint, Access, Excel, Word"],"Siga a ordem do enunciado: texto (Word), planilha (Excel), banco de dados (Access), apresentação (PowerPoint).","2011",54],
["info","Analise as afirmações sobre o Word em português:\nI – Em uma página com mais de um parágrafo, o atalho CTRL+T seleciona apenas o parágrafo em que o cursor estiver.\nPORQUE\nII – O atalho CTRL+T seleciona mais de um parágrafo, desde que pressionada simultaneamente a seta para baixo.\nConclui-se que",["as duas afirmações são falsas.","as duas afirmações são verdadeiras, e a segunda justifica a primeira.","as duas afirmações são verdadeiras, e a segunda não justifica a primeira.","a primeira afirmação é verdadeira, e a segunda é falsa.","a primeira afirmação é falsa, e a segunda é verdadeira."],"No Word em português, CTRL+T seleciona o documento inteiro (Selecionar Tudo). Para selecionar um parágrafo, clica-se três vezes nele. Ctrl+Shift+↓ estende a seleção parágrafo a parágrafo.","2011",55],
["info","Estão entre os mais conhecidos sistemas operacionais",["Linux, Windows, Unix","Linux, Windows, Microsoft Office","Br-Office, Linux, Windows","Br-Office, Unix, Microsoft Office","Windows, Microsoft Office, Br-Office"],"Microsoft Office e BrOffice (hoje LibreOffice) são suítes de escritório, não sistemas operacionais.","2011",56],
["info","Uma pessoa precisa somar, no Excel, os valores das células B2 a B5 e mostrar o resultado em B6. A fórmula correta é",["=SOMA(B2:B5)","=SOMATORIO(B2+B5)","=SOMATORIO(B2:B5)","=SOMATORIO(B2;B5)","=SOMA(B2;B5)"],"Dois-pontos indica intervalo (B2 até B5). Ponto e vírgula soma só as células citadas (B2 e B5). SOMATORIO não existe no Excel.","2011",53],
["transp","A utilização dos serviços dos veículos barco e avião significa uma integração dos modais",["hidroviário-aéreo","ferroviário-rodoviário","aéreo-dutoviário","rodoviário-hidroviário","rodoviário-aéreo"],"Barco = aquaviário ou hidroviário; avião = aéreo.","2011",57],
["transp","O contêiner padrão é utilizado praticamente por todos os modos de transporte, EXCETO pelo transporte",["dutoviário","ferroviário","hidroviário","rodoviário","aéreo"],"Dutos transportam granéis líquidos e gasosos (petróleo, gás) por tubulação, sem embalagem. No aéreo há contêineres próprios (ULD).","2011",58],
["manus","No projeto de um sistema de movimentação de materiais, a lei da FLEXIBILIDADE indica a necessidade de",["utilizar equipamentos que possam ser usados na movimentação de vários tipos de cargas.","construir trajetórias que mantenham a sequência das operações.","reduzir as distâncias na movimentação e no transporte.","manter a segurança dos empregados e reduzir a fadiga.","utilizar ao máximo os equipamentos."],"Princípios da movimentação: flexibilidade (equipamento versátil), obediência ao fluxo (A), distância mínima (B), segurança (C) e máxima utilização do equipamento (E).","2011",59],
["armaz","Entre as DESVANTAGENS da paletização, cita-se",["maior custo operacional em face da vida útil dos paletes","maior densidade de carga no armazenamento","maior rapidez nas operações de carga e descarga","melhoria na utilização dos espaços verticais","redução nos custos de manuseio e movimentação"],"Desvantagens: custo e manutenção dos paletes, retorno do palete vazio e espaço que o próprio palete ocupa. As demais alternativas são vantagens.","2011",60],
["ind","Com relação ao nível de agregação de um indicador, a consequência de uma maior agregação pode gerar:",["redução da acurácia reportada.","aumento da capacidade do gestor em detectar a fonte do problema operacional.","redução do risco de se ter uma informação lançada errada.","redução das fontes de alimentação dos dados.","redução do tempo de resposta."],"Quanto mais agregado (somado ou consolidado), mais o indicador esconde detalhes. Ele perde precisão sobre a origem dos números e fica mais difícil achar onde está o problema.","2018",26],
["estoq","O termo política de estoques é usado para designar",["as decisões sobre quando pedir, quanto pedir e como controlar os estoques","as regras gerais de aquisição, armazenagem e distribuição de produtos","as normas e procedimentos operacionais referentes ao controle dos estoques","os princípios gerais sobre estratégias de compras de insumos","o conjunto de parâmetros utilizados em modelos matemáticos de estoques"],"Política de estoques responde às três perguntas clássicas: quando repor (ponto de pedido), quanto repor (lote) e como controlar (revisão contínua ou periódica, curva ABC).","2018",41],
["info","A qualidade de imagem de um monitor depende de parâmetros como resolução e profundidade de cor. Qual a quantidade mínima de memória de vídeo, em megabytes, adequada para trabalhar com resolução 1920×1080 e 10 bits de profundidade de cor?",["4","1","2","6","8"],"1920 × 1080 = 2.073.600 pixels × 10 bits = 20.736.000 bits ÷ 8 ≈ 2,6 MB. Como 2 MB não bastam, o mínimo adequado entre as opções é 4 MB.","2018",42],
["contab","Segundo a teoria contábil, os registros no livro Diário são feitos por lançamento, cuja quantidade de elementos essenciais é",["cinco","dois","três","quatro","seis"],"Elementos clássicos do lançamento: local e data, conta debitada, conta creditada, histórico e valor. A ITG 2000 detalha esses mesmos itens e acrescenta a identificação única do lançamento, mas a banca cobrou a teoria clássica de 5.","2018",44],
["rh","A Educação Corporativa tem sido apresentada como alternativa para aumentar a geração de valor e tem papel importante na gestão do conhecimento organizacional. Em relação a ela, conclui-se que",["promove a consciência de que cada indivíduo é responsável por seu próprio aprendizado e estimula o compartilhamento do conhecimento.","está dissociada do conceito de gestão do conhecimento.","tem como objetivo gerar oportunidades de aprendizagem, já que o investimento é realizado pela empresa.","falha nas soluções de compartilhamento, já que o objetivo é entrar em novos mercados globais.","é uma alternativa para suprir uma falha do sistema educacional que não prepara profissionais para os níveis estratégicos."],"A educação corporativa (Meister, Eboli) estimula o autodesenvolvimento e o compartilhamento do conhecimento, ligada à gestão do conhecimento. A alternativa C erra na justificativa.","2012",22],
["mat","Dentro de uma caixa cúbica de 1,3 m de aresta serão colocadas n caixas em forma de paralelepípedo, todas com 30 cm de comprimento, 15 cm de largura e 10 cm de altura, alinhadas da mesma forma. Nessas condições, n é, no máximo, igual a",["416","428","446","472","488"],"Gabarito oficial: A. Arrumando todas na mesma posição: 130 ÷ 30 = 4 (sobram 10 cm), 130 ÷ 15 = 8 (sobram 10 cm) e 130 ÷ 10 = 13. Logo 4 × 8 × 13 = 416. Atenção: divida cada aresta e arredonde para baixo, nunca divida volumes (2.197.000 ÷ 4.500 ≈ 488 é a pegadinha).","2011",12],
["rh","Externamente, ou seja, perante o mercado e a sociedade, o treinamento pode proporcionar",["melhoria da imagem da empresa","melhor qualidade de vida no trabalho","melhor atendimento ao cliente","maior qualidade e produtividade","criatividade e inovação"],"Os outros resultados são internos (clima, produtividade, inovação). O efeito externo citado pela banca é a imagem da empresa.","2011",31]
);

Q.forEach(q=>{q.c=q[0];});
/* v10: duplicadas ocultas (o progresso continua guardado pelo índice) */
function QV(){return Q.filter(q=>!q.hid);}
function QI(){return Q.map((q,i)=>i).filter(i=>!Q[i].hid);}

/* ---------- Conteúdos: resumo por assunto. [título da seção, [tópicos]]. **texto** = destaque; "!" no início = pegadinha de prova ---------- */
const RES={
rh:[
 ["Recrutamento e seleção",["**Recrutamento** atrai candidatos; **seleção** escolhe o mais adequado ao cargo.","**Interno**: mais rápido e barato, motiva, aproveita quem conhece a empresa; gera vagas em cadeia e pode limitar ideias novas.","**Externo**: traz ideias e competências novas, renova a cultura; é mais caro e demorado e pode desmotivar quem esperava promoção.","**Misto**: combina os dois.","Técnicas de seleção: entrevista, provas de conhecimento, testes psicológicos (psicométricos e de personalidade) e técnicas de simulação (dinâmicas de grupo)."]],
 ["Cargos e carreira",["**Descrição de cargo** = o que se faz (tarefas). **Análise de cargo** = o que o ocupante precisa ter (requisitos, responsabilidades, condições de trabalho).","Pesquisa salarial compara com o mercado; avaliação de cargos define a hierarquia interna.","**Carreira em Y**: a partir de certo nível, escolhe-se o ramo gerencial ou o técnico (especialista), com remuneração equivalente.","Progressão horizontal (mesmo cargo, mais nível salarial) × vertical (promoção para outro cargo)."]],
 ["Treinamento, desenvolvimento e educação",["Etapas do treinamento: **LNT (diagnóstico) → programação → execução → avaliação**.","**Treinamento** = curto prazo, cargo atual. **Desenvolvimento** = longo prazo, carreira futura. **Educação corporativa** = aprendizagem contínua ligada à estratégia (universidade corporativa).","**Kirkpatrick**: 1) reação, 2) aprendizagem, 3) comportamento (aplica no trabalho), 4) resultados."]],
 ["Desempenho e competências",["Métodos: escala gráfica, escolha forçada, distribuição forçada, incidentes críticos, pesquisa de campo, APO (por objetivos), **360°** (todos que se relacionam com o avaliado, inclusive autoavaliação).","Erros do avaliador: **efeito halo** (um traço contamina tudo), tendência central (todos na média), leniência/rigor, recência (só fatos recentes).","Competência = **CHA**: Conhecimento (saber), Habilidade (saber fazer), Atitude (querer fazer).","Gestão por competências: mapear competências necessárias, identificar lacunas (gap) e desenvolvê-las."]],
 ["Relações de trabalho e benefícios",["**Benefícios legais** (obrigatórios): 13º salário, férias + 1/3, FGTS, vale-transporte, salário-família.","**Espontâneos**: plano de saúde/odontológico, previdência complementar, seguro de vida, auxílio-educação, ginástica laboral.","Classificação: assistenciais, recreativos e supletivos.","Relações sindicais: acordo coletivo (sindicato × empresa) × convenção coletiva (sindicato × sindicato patronal).","! Plano de saúde NÃO é benefício obrigatório por lei."]]
],
sgi:[
 ["Integração de sistemas",["SGI típico: **ISO 9001** (qualidade) + **ISO 14001** (meio ambiente) + **ISO 45001** (saúde e segurança ocupacional).","Integração facilitada pela **estrutura de alto nível** (Anexo SL / estrutura harmonizada): mesmas 10 cláusulas em todas as normas.","Vantagens: menos documentos e auditorias duplicadas, visão única dos riscos, redução de custos."]],
 ["Auditorias e ações",["Norma de auditorias: **ISO 19011**.","**1ª parte** = interna; **2ª parte** = cliente audita fornecedor; **3ª parte** = organismo certificador independente.","**Correção** = conserta o problema detectado. **Ação corretiva** = elimina a causa para não repetir. **Ação preventiva** = trata problema potencial (ainda não ocorreu).","! Na ISO 9001:2015 a cláusula de ação preventiva foi substituída pela **mentalidade de risco**."]],
 ["Melhoria contínua e riscos",["**PDCA**: Plan (planejar metas e métodos), Do (executar e treinar), Check (medir e comparar), Act (padronizar ou corrigir).","Kaizen = melhorias pequenas e contínuas.","**ISO 31000**: risco = **efeito da incerteza nos objetivos** (pode ser positivo ou negativo).","Matriz de riscos: probabilidade × impacto.","Tratamento: **evitar, reduzir/mitigar, transferir/compartilhar (seguro), aceitar/reter**."]]
],
patr:[
 ["Controle e inventário",["**Tombamento**: identificação do bem com plaqueta e número no cadastro patrimonial.","**Inventário geral** (tudo de uma vez, normalmente no fim do exercício) × **rotativo** (grupos contados em ciclos ao longo do ano, sem parar a operação).","Movimentações: incorporação, transferência, cessão, baixa (alienação, perda, obsolescência)."]],
 ["Classificação dos bens",["**Imobilizado** (CPC 27): bens tangíveis usados na operação por mais de um exercício (máquinas, veículos, edificações, terrenos).","**Intangível** (CPC 04): sem substância física (software, marcas, licenças).","Bens de consumo vão para estoque/despesa, não para o imobilizado."]],
 ["Avaliação e depreciação",["Depreciação **linear**: (custo − valor residual) ÷ vida útil.","Outros métodos: soma dos dígitos, unidades produzidas.","**Depreciação** = tangíveis. **Amortização** = intangíveis. **Exaustão** = recursos naturais (minas, florestas).","! **Terreno não deprecia**; a edificação sobre ele sim.","Valor contábil = custo − depreciação acumulada − perdas por impairment.","**Impairment** (CPC 01): se valor contábil > valor recuperável, reconhece-se a perda.","Venda de bem: preço de venda − valor contábil = ganho ou perda de capital."]],
 ["Gestão de ativos",["Objetivo: extrair valor dos ativos ao longo de todo o ciclo de vida (aquisição, operação, manutenção, descarte), equilibrando custo, risco e desempenho.","Norma de referência: **ISO 55000**."]]
],
manut:[
 ["Tipos de manutenção",["**Corretiva não planejada**: depois da falha, sem preparo (emergência).","**Corretiva planejada**: atua sobre falha ou baixo desempenho, mas com decisão gerencial e preparo.","**Preventiva**: intervalos fixos de tempo ou uso (ex.: troca de óleo a cada 500 h), independentemente do estado.","**Preditiva**: acompanha a condição (vibração, termografia, análise de óleo, ultrassom) e intervém no momento certo.","**Detectiva**: busca falhas ocultas em sistemas de proteção (testar alarmes, válvulas de segurança).","Engenharia de manutenção: estuda causas e melhora o desempenho (melhoria contínua)."]],
 ["Indicadores",["**MTBF** = tempo médio entre falhas (quanto maior, melhor).","**MTTR** = tempo médio para reparo (quanto menor, melhor).","**Disponibilidade** = MTBF ÷ (MTBF + MTTR).","**Backlog** = carga de serviços pendentes, em homens-hora ou dias de equipe."]],
 ["Planejamento e controle (PCM)",["Ordem de serviço (OS), programação, cadastro de equipamentos, histórico de falhas, controle de custos.","**TPM** (Manutenção Produtiva Total): envolve todos, manutenção autônoma pelos operadores, meta de zero quebra.","**RCM/MCC**: manutenção centrada em confiabilidade, escolhe a estratégia pela função e pelo modo de falha."]]
],
ind:[
 ["Conceitos",["**Eficiência** = uso dos recursos (fazer certo). **Eficácia** = atingir o objetivo (fazer a coisa certa). **Efetividade** = impacto real gerado.","Indicador de **tendência (leading)** antecipa resultados; de **resultado (lagging)** mostra o que já aconteceu.","Meta **SMART**: específica, mensurável, atingível, relevante e com prazo.","KPI = indicador-chave de desempenho."]],
 ["Análise para decisão",["Comparar com meta, histórico e benchmark; olhar tendência, não só o valor do mês.","**BSC** (Kaplan e Norton): perspectivas **financeira, clientes, processos internos e aprendizado e crescimento**.","Painéis (dashboards) e semáforos ajudam a priorizar desvios."]],
 ["ESG",["**E** (ambiental): emissões, água, energia, resíduos, vazamentos.","**S** (social): segurança do trabalho, diversidade, comunidade, direitos humanos.","**G** (governança): conselho independente, ética, compliance, transparência, anticorrupção.","GHG Protocol: **Escopo 1** = emissões diretas próprias; **Escopo 2** = energia comprada; **Escopo 3** = demais da cadeia de valor.","Relatórios: **GRI** é o padrão mais usado.","Taxa de frequência de acidentes = nº de acidentes × 1.000.000 ÷ horas-homem trabalhadas."]]
],
matfin:[
 ["Porcentagem",["Aumento de x%: multiplica por (1 + x). Desconto de x%: multiplica por (1 − x).","Aumentos/descontos sucessivos: **multiplica os fatores** (1,20 × 0,80 = 0,96 → 4% menor).","! Aumento de 20% seguido de desconto de 20% NÃO volta ao preço inicial."]],
 ["Juros simples e compostos",["Simples: **J = C · i · t**; M = C + J. Taxas **proporcionais** (2% a.m. = 24% a.a.).","Compostos: **M = C · (1 + i)ⁿ**. Taxas **equivalentes**: (1 + i_mensal)³ = 1 + i_trimestral.","Sempre deixe taxa e tempo na mesma unidade.","Em 1 período, simples e composto dão o mesmo montante; acima de 1, o composto é maior."]],
 ["Descontos",["**Comercial (por fora)**: D = N · d · t; A = N − D. Incide sobre o valor nominal.","**Racional (por dentro)**: A = N ÷ (1 + i · t). Incide sobre o valor atual.","! O desconto comercial é sempre maior que o racional, nas mesmas condições."]]
],
contab:[
 ["Fundamentos",["Partidas dobradas: **a todo débito corresponde um crédito de igual valor**.","Natureza: **ativo e despesa = saldo devedor**; **passivo, PL e receita = saldo credor**.","Ativo aumenta a débito; passivo e PL aumentam a crédito.","Fatos: **permutativos** (não mudam o PL), **modificativos** (mudam o PL), **mistos**."]],
 ["Princípios e Estrutura Conceitual",["Princípios clássicos: entidade, continuidade, oportunidade, registro pelo valor original, competência e prudência.","**Entidade**: patrimônio da empresa ≠ patrimônio dos sócios.","**Competência**: receita e despesa no período em que ocorrem, não quando há pagamento.","CPC 00 (R2): características **fundamentais** = relevância e representação fidedigna; **de melhoria** = comparabilidade, verificabilidade, tempestividade e compreensibilidade."]],
 ["Obrigações acessórias e controle fiscal",["**Obrigação principal** = pagar tributo ou multa. **Acessória** = dever de fazer (escriturar, declarar, emitir nota).","**SPED**: ECD (contábil), ECF (IRPJ/CSLL), EFD ICMS/IPI, EFD-Contribuições, EFD-Reinf, eSocial, NF-e, CT-e.","Livros obrigatórios: Diário (e Razão, na prática)."]]
],
fluxo:[
 ["Conceitos e tipos",["DFC obrigatória desde a **Lei 11.638/2007** (substituiu a DOAR). Norma: CPC 03.","**Operacionais**: recebimentos de clientes, pagamentos a fornecedores, salários, tributos.","**Investimento**: compra e venda de imobilizado, intangível, participações.","**Financiamento**: empréstimos obtidos e pagos, aumento de capital, dividendos pagos.","Juros e dividendos têm classificação permitida em mais de uma atividade (CPC 03), desde que consistente."]],
 ["Direto × indireto",["**Direto**: mostra entradas e saídas brutas (recebimentos de clientes, pagamentos a fornecedores).","**Indireto**: parte do **lucro líquido** e ajusta o que não mexeu no caixa.","Indireto: **soma** depreciação; **subtrai** aumento de clientes e estoques; **soma** aumento de fornecedores e contas a pagar."]],
 ["Gestão e projeção",["Saldo final = saldo inicial + entradas − saídas.","Fluxo de caixa projetado se integra ao **orçamento**: antecipa faltas (captação) e sobras (aplicação).","Boas práticas: alongar prazo de pagamento, encurtar prazo de recebimento, controlar estoques."]]
],
bp:[
 ["Balanço Patrimonial",["**Ativo = Passivo + PL**.","Ativo em ordem **decrescente de liquidez**; passivo em ordem **decrescente de exigibilidade**.","Circulante = até o fim do exercício seguinte (12 meses). Depois disso, **não circulante**.","**ANC**: realizável a longo prazo, investimentos, imobilizado e intangível.","**PL**: capital social, reservas de capital, ajustes de avaliação patrimonial, reservas de lucros, ações em tesouraria, prejuízos acumulados.","Liquidez corrente = AC ÷ PC."]],
 ["DRE (Lei 6.404, art. 187)",["Receita bruta − deduções = **receita líquida**.","Receita líquida − CMV/CPV = **lucro bruto**.","− despesas operacionais (vendas, administrativas, financeiras líquidas, outras) = resultado antes do IR/CSLL.","− IR/CSLL − participações = **lucro líquido**."]],
 ["Relação entre demonstrações",["O lucro da DRE vai para o **PL** (lucros acumulados/reservas), visto na **DMPL** ou DLPA.","A DFC explica a variação do caixa do balanço.","**DVA** (valor adicionado) é obrigatória para companhias abertas."]]
],
log:[
 ["Conceitos",["Logística = planejar e controlar o fluxo de materiais e informações, do fornecedor ao cliente, ao menor custo total para o nível de serviço desejado.","**SCM**: integração de toda a cadeia (fornecedores, fábrica, distribuidores, clientes).","**Efeito chicote**: a variação dos pedidos se amplifica à medida que sobe na cadeia; reduz com compartilhamento de informações.","Logística de abastecimento, de produção, de distribuição e **reversa** (pós-venda e pós-consumo; PNRS, Lei 12.305/2010)."]],
 ["Sustentabilidade",["**Logística verde**: roteirização, modais menos poluentes, combustíveis alternativos, embalagens recicláveis, logística reversa, consolidação de cargas."]],
 ["Tecnologias emergentes",["**IoT** (sensores em tempo real), IA e análise de dados, **blockchain** (rastreabilidade), gêmeo digital, drones, veículos autônomos, robótica.","Clássicas: **RFID** (radiofrequência, sem linha de visada), código de barras, **EDI** (troca eletrônica de documentos), WMS, TMS, ERP.","Práticas: **cross-docking** (recebe e expede sem armazenar), **milk run** (coleta programada em vários fornecedores), JIT, VMI (estoque gerido pelo fornecedor)."]]
],
transp:[
 ["Modais",["**Rodoviário**: flexível, porta a porta, predominante no Brasil; custo variável alto.","**Ferroviário**: grandes volumes, longas distâncias, baixo valor agregado (minério, grãos).","**Aquaviário**: marítimo (cabotagem e longo curso), fluvial/lacustre; maior capacidade, mais lento.","**Dutoviário**: líquidos e gases em fluxo contínuo; **alto custo fixo, baixo custo variável**, muito confiável (modal-chave da Transpetro).","**Aéreo**: mais rápido e mais caro; cargas urgentes, de alto valor e baixo peso."]],
 ["Intermodal × multimodal",["**Intermodal**: vários modais, **um documento e um responsável por trecho**.","**Multimodal**: vários modais, **contrato e documento únicos**, emitidos pelo **OTM** (Lei 9.611/1998).","**Cabotagem** = entre portos nacionais pela costa. **Longo curso** = entre portos brasileiros e estrangeiros."]],
 ["Regulação e documentos",["**ANTT**: rodoviário e ferroviário (RNTRC = registro do transportador).","**ANTAQ**: aquaviário. **ANAC**: aéreo. **ANP**: petróleo, gás e biocombustíveis (inclusive dutos de transporte).","**CT-e** documenta o serviço de transporte; **MDF-e** é o manifesto da carga do veículo."]]
],
estoq:[
 ["Classificações",["**Curva ABC** (Pareto): A = poucos itens, maior valor (≈ 20% dos itens, 80% do valor), controle rigoroso.","**XYZ**: criticidade (Z = falta para a operação).","Tipos: matérias-primas, em processo, acabados, MRO (manutenção, reparo e operação)."]],
 ["Métodos e fórmulas",["**Ponto de pedido** = demanda × tempo de reposição + estoque de segurança.","**Giro** = CMV ÷ estoque médio. **Cobertura** = período ÷ giro.","**LEC** = √(2·D·Cp ÷ Ca): minimiza custo de pedir + custo de manter.","Avaliação: **PEPS** (saem os mais antigos) e **custo médio**. UEPS é vedado pelo CPC 16.","! Preços subindo: PEPS dá **CMV menor e estoque final maior** que a média."]],
 ["Políticas e nível de serviço",["Mais nível de serviço (menos falta) exige **mais estoque de segurança**.","Just in time, **kanban** (cartões, produção puxada), MRP (cálculo de necessidades), VMI."]],
 ["Automação",["Código de barras, RFID, coletores de dados, WMS integrado ao ERP, inventário automatizado com drones e leitores."]]
],
armaz:[
 ["Tipos e funções",["Armazém próprio, terceirizado (operador logístico), geral, **alfandegado** (carga sob controle aduaneiro), frigorífico, **CD** (centro de distribuição).","Funções: recebimento, conferência, endereçamento (put-away), estocagem, **picking** (separação), packing, expedição."]],
 ["Layout e organização",["Layout em **I** (docas em lados opostos, fluxo reto), em **U** (recebimento e expedição do mesmo lado) e em **L**.","Endereçamento lógico (rua, prédio, nível, apartamento).","**FIFO** (ordem de entrada) × **FEFO** (vence primeiro, sai primeiro)."]],
 ["Estruturas e tecnologias",["**Porta-palete seletivo**: acesso a qualquer palete.","**Drive-in**: um lado de acesso → UEPS. **Drive-through**: dois lados → PEPS.","Push-back, flow rack (dinâmico por gravidade), cantilever (cargas longas), mezanino.","**WMS** gerencia o armazém; pick-to-light, picking por voz, RFID, AGVs."]]
],
manus:[
 ["Equipamentos e princípios",["Transpaleteira, empilhadeira, esteiras/transportadores, pontes rolantes, talhas, **AGV** (veículo autoguiado) e AMR (robô autônomo).","Princípios: carga unitária, **menor distância e menos manuseios**, uso da gravidade, mecanização quando viável, segurança e ergonomia."]],
 ["Embalagem",["**Primária**: contato direto com o produto. **Secundária**: agrupa primárias. **Terciária**: agrupa secundárias para transporte.","Funções: contenção, proteção, comunicação e utilidade.","Sustentabilidade: materiais recicláveis, retornáveis e redução de volume."]],
 ["Unitização e segurança",["**Unitização**: agrupar volumes em uma unidade (palete, contêiner, big bag).","**Palete PBR** = 1,00 × 1,20 m. Euro palete = 0,80 × 1,20 m.","Contêiner de 20 pés = **1 TEU**; 40 pés = 2 TEU.","Segurança no transporte: amarração, estabilidade do palete (filme stretch, cantoneiras), sinalização de cargas perigosas."]]
],
compras:[
 ["Compras: planejamento",["Modalidades de compra: por lote, programada, emergencial, contrato de fornecimento, registro de preços.","Planejamento: levantar demanda, especificar, pesquisar mercado e preço, orçar, escolher a modalidade, acompanhar a entrega."]],
 ["Lei 13.303/2016 (estatais), arts. 28 a 67",["Art. 28, § 3º: **não licita** a comercialização ligada ao objeto social (atividade-fim) e a escolha de parceiro por oportunidade de negócio.","Art. 29 (dispensa): **obras e serviços de engenharia até R$ 100 mil**; **outros serviços e compras até R$ 50 mil**; emergência; licitação deserta etc.","Art. 30 (inexigibilidade): **inviabilidade de competição** (fornecedor exclusivo, serviço técnico de notória especialização).","Art. 32: **pregão preferencial** para bens e serviços comuns.","Art. 34: **orçamento estimado sigiloso**, salvo justificativa.","Art. 39 (prazos mínimos): bens 5 / 10 dias úteis; obras e serviços 15 / 30; melhor técnica, técnica e preço, integrada e semi-integrada 45.","Art. 51 (fases): preparação, divulgação, lances/propostas, julgamento, verificação de efetividade, negociação, **habilitação**, recursos, adjudicação e homologação.","Art. 54 (critérios): menor preço, maior desconto, melhor técnica, técnica e preço, melhor conteúdo artístico, maior oferta, **maior retorno econômico**, melhor destinação de bens alienados.","Art. 63 (procedimentos auxiliares): pré-qualificação permanente, cadastramento, registro de preços, catálogo eletrônico."]],
 ["Lei 14.133/2021",["Modalidades: **pregão, concorrência, concurso, leilão, diálogo competitivo**. ! Tomada de preços e convite foram extintos.","**Pregão obrigatório** para bens e serviços comuns.","Critérios: menor preço, maior desconto, melhor técnica ou conteúdo artístico, técnica e preço, maior lance, maior retorno econômico.","Fases (art. 17): preparatória, divulgação, propostas e lances, julgamento, **habilitação**, recursal, homologação.","Fase preparatória: **ETP**, termo de referência, matriz de riscos.","Divulgação centralizada no **PNCP**.","Dispensa (art. 75) × inexigibilidade (art. 74, competição inviável)."]]
],
contr:[
 ["Ciclo de vida do contrato",["Planejamento → formalização → execução → fiscalização e gestão → recebimento → encerramento.","**Gestor** = coordena e trata do aspecto administrativo. **Fiscal** = acompanha a execução no dia a dia, registra ocorrências e determina correções."]],
 ["Lei 13.303/2016, arts. 68 a 91",["Contratos regidos também pelo **direito privado** (art. 68).","Art. 70: **garantia até 5%** (até 10% em grande vulto e alta complexidade). Modalidade escolhida pelo contratado: caução, seguro-garantia ou fiança.","Art. 71: **duração até 5 anos** (exceções: plano de negócios e investimentos, prática de mercado).","Art. 72: alteração **somente por acordo entre as partes**. ! Não há alteração unilateral.","Art. 81: acréscimos e supressões até **25%**; reforma de edifício ou equipamento até **50%** nos acréscimos.","Art. 83: sanções: **advertência, multa, suspensão** de licitar e contratar com a estatal por **até 2 anos**."]],
 ["Lei 14.133/2021",["Admite **alteração unilateral** pela Administração (art. 124), com os mesmos limites de 25% / 50%.","**Termo aditivo** altera objeto, prazo ou valor; **apostilamento** registra reajuste já previsto e outras alterações simples.","Serviços contínuos: até 5 anos, prorrogáveis até **10 anos**.","Sanções (art. 156): advertência, multa, impedimento de licitar e contratar (**até 3 anos**), declaração de inidoneidade (**3 a 6 anos**)."]],
 ["Riscos e contratos digitais",["Matriz de riscos: aloca cada risco à parte mais capaz de geri-lo.","**Lei 14.063/2020**: assinatura eletrônica simples, avançada e **qualificada** (certificado ICP-Brasil, maior confiabilidade).","Integração com ERP e sistemas de gestão de contratos: alertas de vencimento, medições e pagamentos."]]
],
info:[
 ["Hardware e software",["**CPU** executa instruções; desempenho depende de núcleos, threads, clock (GHz) e cache.","**Cache** (L1, L2, L3): pequena e muito rápida, entre a CPU e a RAM.","**RAM** = volátil. **ROM/firmware** = não volátil. **SSD** = flash, sem partes móveis, rápido. **HDD** = disco magnético.","Software básico (sistema operacional), utilitários (antivírus, compactadores), aplicativos (Office)."]],
 ["Windows 11",["**Win + L** bloqueia; **Win + D** área de trabalho; **Win + E** Explorador; **Win + I** Configurações; **Win + V** histórico da área de transferência; **Win + Shift + S** captura de tela; **Ctrl + Shift + Esc** Gerenciador de Tarefas.","Arrastar na **mesma unidade = mover**; para **outra unidade = copiar**. Ctrl + arrastar copia.","Shift + Delete exclui sem passar pela Lixeira.","Requisitos do Windows 11 incluem TPM 2.0 e processador de 64 bits."]],
 ["Office 2024",["Word (PT-BR): **Ctrl + N negrito, Ctrl + I itálico, Ctrl + S sublinhado, Ctrl + B salvar**; Ctrl + Enter quebra de página.","Excel: **$** fixa linha/coluna (=$B$1). Funções: SOMA, MÉDIA, MED, SE, CONT.SE, SOMASE, PROCV/PROCX, CONCATENAR.","Erros: #DIV/0! (divisão por zero), #N/D (não encontrado), #REF! (referência inválida), #VALOR! (tipo errado), #NOME? (função escrita errada).","PowerPoint: **F5** do início; **Shift + F5** do slide atual."]],
 ["Internet e intranet",["**Intranet**: rede privada com tecnologia da internet (TCP/IP, HTTP). **Extranet**: parte aberta a parceiros autorizados.","Navegadores: Edge, Chrome, Firefox, Safari. Navegação privada não guarda histórico local, mas **não torna anônimo**.","HTTPS = HTTP com criptografia (TLS)."]]
],
lgpd:[
 ["Segurança da informação",["**CID**: confidencialidade, integridade, disponibilidade (+ autenticidade e irretratabilidade).","Malwares: **vírus** (precisa de hospedeiro), **worm** (se propaga sozinho), **cavalo de Troia**, **ransomware** (sequestra dados), spyware, keylogger, botnet.","**Phishing** = engenharia social para roubar dados.","Backup **completo**, **incremental** (desde o último backup) e **diferencial** (desde o último completo).","Boas práticas: senhas fortes, **autenticação em dois fatores**, atualizações, firewall, antivírus."]],
 ["LGPD (Lei 13.709/2018)",["**Dado sensível**: origem racial ou étnica, religião, opinião política, filiação sindical, saúde, vida sexual, genético e **biométrico**.","**Controlador** decide; **operador** trata em nome do controlador; **encarregado (DPO)** é o canal com titulares e ANPD.","**10 bases legais** (art. 7º): consentimento é só uma delas (outras: obrigação legal, execução de contrato, legítimo interesse, proteção do crédito etc.).","Princípios: finalidade, adequação, necessidade, livre acesso, qualidade, transparência, segurança, prevenção, não discriminação, responsabilização.","Vale para meio físico e digital e para estatais. Dado anonimizado não é dado pessoal.","Multa: até **2% do faturamento no Brasil, limitada a R$ 50 milhões por infração**. Fiscalização: **ANPD**."]]
],
port:[
 ["Crase",["Crase = a (preposição) + a (artigo). Teste: troque por palavra masculina (à gerente → ao gerente).","**Não há crase**: antes de masculino, de verbo, de pronomes pessoais e demonstrativos (este, esse), entre palavras repetidas (frente a frente), em 'a partir de', 'a prazo'.","Cidades: 'volto da' → **à**; 'volto de' → **a** (vou à Bahia; vou a Brasília)."]],
 ["Concordância",["**Haver** (= existir) e **fazer** (tempo) são impessoais: 'houve reuniões', 'faz três anos', 'deve haver soluções'.","Existir concorda: 'existem riscos'.","Partícula **se**: VTD → apassivadora, verbo concorda ('alugam-se salas'); verbo com preposição → indeterminação, singular ('precisa-se de').","**Anexo, obrigado, mesmo** concordam; **meio** (advérbio) e **bastante** (advérbio) não variam.","'É proibido entrada' (sem artigo) × 'É proibida a entrada'."]],
 ["Pontuação e coesão",["Não separar sujeito de verbo nem verbo de complemento por vírgula.","Intercaladas e apostos entre vírgulas.","Conectivos: **adversativos** (mas, porém, contudo, todavia, entretanto); **conclusivos** (portanto, logo, por isso); **causais** (porque, visto que); **concessivos** (embora, ainda que, conquanto); **condicionais** (se, caso, desde que)."]],
 ["Ortografia e significação",["Parônimos: **ratificar** (confirmar) × **retificar** (corrigir); **iminente** (prestes) × **eminente** (ilustre); **mal** (advérbio, × bem) × **mau** (adjetivo, × bom).","**Onde** (lugar fixo) × **aonde** (movimento, 'ir a').","**Cujo** indica posse e nunca vem seguido de artigo.","Grafias frequentes: paralisação, exceção, análise, pesquisa, privilégio."]]
],
mat:[
 ["Proporção e porcentagem",["Regra de três: diretamente ou inversamente proporcional; na composta, analise cada grandeza em relação à incógnita.","x% de y = x/100 · y. Porcentagens sucessivas: multiplica os fatores."]],
 ["Equações e funções",["2º grau: Δ = b² − 4ac; x = (−b ± √Δ) ÷ 2a. Soma = −b/a; produto = c/a.","Exponencial: iguale as bases (2^(x+1) = 2⁴). Logaritmo: logₐb = c ⇔ aᶜ = b.","Sistemas: some ou substitua as equações."]],
 ["Contagem e probabilidade",["Princípio multiplicativo. **Arranjo** (ordem importa) × **combinação** (ordem não importa): C(n,p) = n! ÷ (p!(n − p)!).","Permutação: n!. Anagramas com letras repetidas: divide pelo fatorial das repetições.","Probabilidade = casos favoráveis ÷ casos possíveis."]],
 ["Estatística e geometria",["Média, **mediana** (termo central do rol ordenado), **moda** (mais frequente).","Variância = média dos quadrados dos desvios; desvio padrão = √variância. Amplitude = maior − menor.","Pitágoras: a² = b² + c². Relação métrica: a·h = b·c.","Áreas: retângulo b·h; triângulo b·h/2; círculo πr². Volume: cilindro πr²h; cubo a³; paralelepípedo a·b·c."]]
]
};

/* ---------- Revisão da escola: lições de base. t = título; e = explicação; x = exemplos resolvidos [pergunta, resolução]; q = teste rápido [pergunta, [correta, ...erradas], explicação] ---------- */
const BASE=[
{id:"m1",a:"Matemática",t:"Expressões e ordem das operações",
 e:["Ordem: **parênteses → colchetes → chaves**; dentro deles, **potências e raízes → multiplicações e divisões → somas e subtrações**, da esquerda para a direita.","Regra de sinais na multiplicação e divisão: sinais iguais dão **+**, sinais diferentes dão **−**.","Na soma de números com sinais diferentes, subtraia e fique com o sinal do maior em módulo: −8 + 3 = −5."],
 x:[["Calcule 20 − 3 × (2 + 4) ÷ 9.","Parênteses: 2 + 4 = 6. Depois 3 × 6 = 18; 18 ÷ 9 = 2. Por fim 20 − 2 = 18."],["Calcule (−2)³ + 5.","(−2)³ = −8 (expoente ímpar mantém o sinal). −8 + 5 = −3."]],
 q:[["O valor de 10 + 2 × 5 − 4 é",["16","56","20","14","26"],"Primeiro 2 × 5 = 10; depois 10 + 10 − 4 = 16."],["O valor de (−3) × (−4) − 2 é",["10","−14","14","−10","12"],"(−3) × (−4) = 12 (sinais iguais); 12 − 2 = 10."]]},
{id:"m2",a:"Matemática",t:"Frações e números decimais",
 e:["Somar ou subtrair frações: iguale os denominadores (MMC) e opere os numeradores.","Multiplicar: numerador × numerador e denominador × denominador.","Dividir: **mantém a primeira e multiplica pelo inverso da segunda**.","Fração → decimal: divida o numerador pelo denominador (3/4 = 0,75).","Dízima periódica é racional: 0,333... = 1/3; 0,1818... = 18/99 = 2/11."],
 x:[["Calcule 1/2 + 2/3.","MMC(2,3) = 6. 1/2 = 3/6 e 2/3 = 4/6. Soma = 7/6."],["Calcule (3/4) ÷ (1/2).","3/4 × 2/1 = 6/4 = 3/2 = 1,5."]],
 q:[["O resultado de 2/5 + 1/10 é",["1/2","3/15","3/10","2/50","1/5"],"MMC 10: 4/10 + 1/10 = 5/10 = 1/2."],["A fração 0,25 corresponde a",["1/4","1/25","2/5","25/10","1/2"],"0,25 = 25/100 = 1/4."]]},
{id:"m3",a:"Matemática",t:"Potências e raízes",
 e:["aᵐ · aⁿ = aᵐ⁺ⁿ; aᵐ ÷ aⁿ = aᵐ⁻ⁿ; (aᵐ)ⁿ = aᵐ·ⁿ.","a⁰ = 1 (a ≠ 0); a⁻ⁿ = 1/aⁿ.","Base negativa: expoente par dá resultado positivo; ímpar, negativo. Atenção: −2² = −4, mas (−2)² = 4.","√(a·b) = √a · √b. Raiz é potência de expoente fracionário: √a = a^(1/2)."],
 x:[["Simplifique 2³ · 2⁴ ÷ 2⁵.","2^(3+4−5) = 2² = 4."],["Calcule √50.","√(25 × 2) = 5√2 ≈ 7,07."]],
 q:[["O valor de 3⁻² é",["1/9","−9","−6","9","1/6"],"3⁻² = 1/3² = 1/9."],["O valor de (−1)¹⁰¹ + (−1)¹⁰⁰ é",["0","2","−2","1","−1"],"Ímpar: −1; par: +1. Soma = 0."]]},
{id:"m4",a:"Matemática",t:"Porcentagem",
 e:["x% = x/100. 15% de 200 = 0,15 × 200 = 30.","Aumentar x%: multiplique por (1 + x/100). Diminuir x%: multiplique por (1 − x/100).","Variação percentual = (novo − antigo) ÷ antigo.","Aumentos e descontos sucessivos: multiplique os fatores, **nunca some as porcentagens**."],
 x:[["Um salário de R$ 2.500 teve aumento de 8%. Qual o novo salário?","2.500 × 1,08 = 2.700."],["Um preço caiu de 50 para 40. Qual foi o desconto?","(40 − 50) ÷ 50 = −0,20 → desconto de 20%."]],
 q:[["20% de 30% de 1.000 é",["60","500","50","600","6"],"0,30 × 1.000 = 300; 0,20 × 300 = 60."],["Um produto de R$ 120 subiu 25%. O novo preço é",["R$ 150","R$ 145","R$ 125","R$ 160","R$ 96"],"120 × 1,25 = 150."]]},
{id:"m5",a:"Matemática",t:"Razão, proporção e regra de três",
 e:["Razão é uma divisão: a/b. Proporção é a igualdade de duas razões: a/b = c/d ⇔ a·d = b·c.","**Diretamente proporcionais**: uma aumenta, a outra aumenta na mesma razão (multiplica cruzado).","**Inversamente proporcionais**: uma aumenta, a outra diminui (multiplica em linha: a₁·b₁ = a₂·b₂).","Regra de três composta: compare cada grandeza com a incógnita, separadamente, para saber se é direta ou inversa."],
 x:[["3 kg custam R$ 12. Quanto custam 7 kg?","Direta: 3/12 = 7/x → x = 28."],["4 máquinas fazem um serviço em 6 h. Em quanto tempo 3 máquinas fazem?","Inversa: 4 × 6 = 3 × t → t = 8 h."]],
 q:[["Se 8 litros custam R$ 40, 5 litros custam",["R$ 25","R$ 20","R$ 32","R$ 64","R$ 30"],"40 ÷ 8 = 5 por litro; 5 × 5 = 25."],["Um carro a 60 km/h faz um trajeto em 2 h. A 80 km/h, o tempo será",["1,5 h","2,7 h","1 h","2,5 h","1,2 h"],"Inversa: 60 × 2 = 80 × t → t = 1,5 h."]]},
{id:"m6",a:"Matemática",t:"Equações do 1º grau e sistemas",
 e:["Isole a incógnita: o que soma passa subtraindo, o que multiplica passa dividindo (fazendo a mesma operação dos dois lados).","Sistema 2×2: **adição** (some as equações para eliminar uma letra) ou **substituição** (isole uma letra e substitua na outra).","Problemas: traduza o texto em equação ('o dobro de um número' = 2x; 'excede em 5' = + 5)."],
 x:[["Resolva 5x + 3 = 2x + 15.","5x − 2x = 15 − 3 → 3x = 12 → x = 4."],["x + y = 12 e x − y = 2.","Somando: 2x = 14 → x = 7; y = 5."]],
 q:[["A solução de 2(x − 3) = 10 é",["8","2","7","6,5","13"],"2x − 6 = 10 → 2x = 16 → x = 8."],["A soma de dois números é 30 e um é o dobro do outro. O maior é",["20","10","15","25","18"],"x + 2x = 30 → x = 10; maior = 20."]]},
{id:"m7",a:"Matemática",t:"Equação do 2º grau",
 e:["Forma ax² + bx + c = 0. **Δ = b² − 4ac**; x = (−b ± √Δ) ÷ 2a.","Δ > 0: duas raízes reais diferentes; Δ = 0: uma raiz (dupla); Δ < 0: nenhuma raiz real.","Atalho: **soma = −b/a** e **produto = c/a**.","Função quadrática: a > 0, parábola com concavidade para cima (tem mínimo); vértice em x = −b/2a."],
 x:[["Resolva x² − 7x + 10 = 0.","Soma 7 e produto 10 → raízes 2 e 5."],["Qual o valor mínimo de f(x) = x² − 4x + 1?","xv = 4/2 = 2; f(2) = 4 − 8 + 1 = −3."]],
 q:[["As raízes de x² − 9 = 0 são",["3 e −3","9 e −9","3 apenas","0 e 9","não há raízes reais"],"x² = 9 → x = ±3."],["O discriminante (Δ) de x² + 2x + 5 = 0 é",["−16","24","16","−4","4"],"Δ = 4 − 20 = −16 (sem raízes reais)."]]},
{id:"m8",a:"Matemática",t:"Funções, exponenciais e logaritmos",
 e:["Função afim f(x) = ax + b: a é a taxa de variação (inclinação); b é onde corta o eixo y.","Exponencial f(x) = aˣ: cresce se a > 1, decresce se 0 < a < 1.","Logaritmo: **logₐ b = c ⇔ aᶜ = b**. log 1 = 0; logₐ a = 1.","Propriedades: log(m·n) = log m + log n; log(m/n) = log m − log n; log(mⁿ) = n·log m."],
 x:[["Resolva 3ˣ = 81.","81 = 3⁴ → x = 4."],["Calcule log₁₀ 1.000.","10³ = 1.000 → log = 3."]],
 q:[["Se f(x) = 4x − 1, então f(3) é",["11","12","13","7","3"],"4 × 3 − 1 = 11."],["O valor de log₅ 25 é",["2","5","25","1/2","10"],"5² = 25."]]},
{id:"m9",a:"Matemática",t:"Contagem: arranjo, permutação e combinação",
 e:["**Princípio multiplicativo**: etapas independentes multiplicam suas possibilidades.","**Permutação**: ordenar todos os elementos: n!.","**Arranjo**: escolher e ordenar (a ordem importa): A(n,p) = n!/(n − p)!.","**Combinação**: escolher sem ordem (comissões, grupos): C(n,p) = n!/(p!(n − p)!).","Teste: troque dois elementos de lugar. Se muda o resultado, a ordem importa (arranjo)."],
 x:[["Quantas comissões de 2 pessoas com 5 candidatos?","C(5,2) = 10."],["Quantas formas de escolher presidente e vice entre 5 pessoas?","A(5,2) = 5 × 4 = 20 (cargos diferentes, a ordem importa)."]],
 q:[["O número de anagramas de AMOR é",["24","16","12","4","120"],"4 letras distintas: 4! = 24."],["Com 7 pessoas, quantas duplas diferentes podem ser formadas?",["21","42","14","49","7"],"C(7,2) = 7 × 6 ÷ 2 = 21."]]},
{id:"m10",a:"Matemática",t:"Probabilidade básica",
 e:["P = casos favoráveis ÷ casos possíveis (espaço equiprovável).","0 ≤ P ≤ 1. P(não A) = 1 − P(A).","Eventos independentes acontecendo juntos (E): multiplique. Eventos excludentes (OU): some."],
 x:[["Qual a probabilidade de sair número par em um dado?","3 pares em 6 faces: 3/6 = 1/2."],["Duas moedas: probabilidade de duas caras?","1/2 × 1/2 = 1/4."]],
 q:[["Probabilidade de sair um número maior que 4 em um dado",["1/3","1/2","2/3","1/6","4/6"],"Favoráveis: 5 e 6 → 2/6 = 1/3."],["Se P(chover) = 0,3, a probabilidade de não chover é",["0,7","0,3","1,3","0,03","0,5"],"1 − 0,3 = 0,7."]]},
{id:"m11",a:"Matemática",t:"Estatística básica",
 e:["**Média** = soma ÷ quantidade. **Mediana** = valor central dos dados ordenados (com quantidade par, média dos dois centrais). **Moda** = valor mais frequente.","**Amplitude** = maior − menor.","**Variância** = média dos quadrados dos desvios em relação à média; **desvio padrão** = √variância.","Leitura de gráficos: confira título, unidades e escala dos eixos antes de responder."],
 x:[["Mediana de {3, 8, 5, 10}.","Ordenando: 3, 5, 8, 10. Centrais 5 e 8 → mediana 6,5."],["Desvio padrão de {2, 4, 6}.","Média 4; desvios² 4, 0, 4 → variância 8/3; desvio ≈ 1,63."]],
 q:[["A média de 4, 6, 8 e 10 é",["7","6","8","28","9"],"28 ÷ 4 = 7."],["A moda de {1, 3, 3, 5, 7, 7, 7} é",["7","3","5","4,7","1"],"7 aparece três vezes."]]},
{id:"m12",a:"Matemática",t:"Geometria plana e triângulo retângulo",
 e:["Perímetro = soma dos lados. Áreas: retângulo b·h; quadrado l²; triângulo b·h/2; trapézio (B + b)·h/2; círculo πr²; circunferência 2πr.","**Pitágoras**: a² = b² + c² (a = hipotenusa).","Relações métricas: a·h = b·c; b² = a·m; c² = a·n; h² = m·n.","Triângulos clássicos: 3-4-5, 5-12-13, 8-15-17 (e seus múltiplos)."],
 x:[["Área de um círculo de raio 3 cm.","π × 9 ≈ 28,3 cm²."],["Diagonal de um quadrado de lado 4.","d = l√2 = 4√2 ≈ 5,66."]],
 q:[["O perímetro de um retângulo 7 m × 3 m é",["20 m","21 m","10 m","42 m","24 m"],"2 × (7 + 3) = 20 m."],["Catetos 6 e 8: a hipotenusa mede",["10","14","12","48","7"],"36 + 64 = 100 → 10."]]},
{id:"m13",a:"Matemática",t:"Geometria espacial e trigonometria",
 e:["Volumes: cubo a³; paralelepípedo a·b·c; cilindro πr²h; cone πr²h/3; esfera 4πr³/3.","1 m³ = 1.000 litros; 1 dm³ = 1 litro.","Trigonometria no triângulo retângulo: **sen = oposto/hipotenusa; cos = adjacente/hipotenusa; tg = oposto/adjacente**.","Ângulos notáveis: sen 30° = 1/2; cos 60° = 1/2; sen 45° = cos 45° = √2/2; sen 60° = cos 30° = √3/2; tg 45° = 1."],
 x:[["Volume em litros de um tanque 2 m × 1 m × 0,5 m.","1 m³ = 1.000 L."],["Rampa de 10 m com 30° de inclinação: altura?","10 × sen 30° = 5 m."]],
 q:[["Um cilindro de raio 1 m e altura 3 m tem volume",["3π m³","π m³","6π m³","9π m³","2π m³"],"π × 1² × 3 = 3π."],["Um reservatório de 2 m³ comporta",["2.000 litros","200 litros","20 litros","20.000 litros","2 litros"],"1 m³ = 1.000 L."]]},
{id:"p1",a:"Português",t:"Classes de palavras",
 e:["**Substantivo** nomeia; **adjetivo** caracteriza; **artigo** determina; **numeral** quantifica; **pronome** substitui ou acompanha o nome.","**Verbo** indica ação, estado ou fenômeno; **advérbio** modifica verbo, adjetivo ou outro advérbio (invariável).","**Preposição** liga termos (a, de, com, em, para, por); **conjunção** liga orações (e, mas, porque, embora); **interjeição** exprime emoção.","A classe depende do uso: 'o **jantar** estava ótimo' (substantivo) × 'vamos **jantar**' (verbo)."],
 x:[["Classifique 'muito' em 'Ela é muito competente'.","Advérbio de intensidade (modifica o adjetivo)."],["Classifique 'bastantes' em 'Havia bastantes candidatos'.","Pronome indefinido (acompanha o substantivo e varia)."]],
 q:[["Em 'Os fiscais trabalharam rapidamente', 'rapidamente' é",["advérbio","adjetivo","verbo","substantivo","conjunção"],"Modifica o verbo, indicando modo."],["Em 'O andar de cima foi reformado', 'andar' é",["substantivo","verbo","advérbio","adjetivo","preposição"],"Precedido de artigo, funciona como substantivo."]]},
{id:"p2",a:"Português",t:"Sujeito, predicado e complementos",
 e:["Pergunte ao verbo **'quem?'** ou **'o quê?'** para achar o sujeito.","Tipos: simples, composto, oculto (desinencial), indeterminado (verbo na 3ª do plural sem referente, ou verbo + se com preposição) e **oração sem sujeito** (fenômenos da natureza, haver = existir, fazer indicando tempo).","Objeto direto liga-se ao verbo sem preposição; objeto indireto, com preposição.","Sujeito posposto continua sendo sujeito: 'Chegaram as peças'."],
 x:[["Sujeito de 'Roubaram o cofre'.","Indeterminado (3ª pessoa do plural, sem saber quem)."],["Sujeito de 'Há problemas no duto'.","Oração sem sujeito: haver = existir."]],
 q:[["Em 'Faz dois anos que entrei na empresa', o sujeito de 'faz' é",["inexistente","'dois anos'","oculto","indeterminado","'que entrei na empresa'"],"Fazer indicando tempo é impessoal."],["Em 'Precisa-se de técnicos', o sujeito é",["indeterminado","'técnicos'","oculto","simples","inexistente"],"Verbo com preposição + se = índice de indeterminação."]]},
{id:"p3",a:"Português",t:"Acentuação gráfica",
 e:["**Proparoxítonas**: todas acentuadas (lâmpada, último).","**Paroxítonas** acentuadas: terminadas em L, N, R, X, PS, Ã(S), ÃO(S), I(S), U(S), UM, UNS e ditongo (útil, hífen, caráter, tórax, bíceps, órfã, júri, vírus, álbum, história).","**Oxítonas** acentuadas: terminadas em A(S), E(S), O(S), EM, ENS (sofá, café, cipó, também, parabéns).","Hiatos: I e U tônicos sozinhos na sílaba (saída, saúde). Novo Acordo: sem acento em 'ideia', 'heroico', 'voo', 'leem'."],
 x:[["Por que 'táxi' tem acento?","Paroxítona terminada em I."],["Por que 'ideia' não tem acento?","Ditongo aberto EI em paroxítona perdeu o acento no Novo Acordo."]],
 q:[["Está corretamente acentuada a palavra",["órgão","heróico","idéia","vôo","enjôo"],"Órgão: paroxítona terminada em ÃO. As demais perderam o acento no Novo Acordo."],["'Também' é acentuada por ser",["oxítona terminada em EM","paroxítona terminada em M","proparoxítona","hiato","monossílabo tônico"],"Oxítonas terminadas em EM/ENS são acentuadas."]]},
{id:"p4",a:"Português",t:"Crase sem mistério",
 e:["Crase = preposição **a** + artigo **a** (ou + 'aquele', 'aquilo', 'a qual').","Truque: troque a palavra feminina por uma masculina. Se virar **ao**, há crase: 'Fui à reunião' → 'Fui ao encontro'.","Não há crase antes de masculino, verbo, pronomes pessoais e de tratamento (exceto senhora, senhorita, dona), 'esta/essa', e entre palavras repetidas.","Horas exatas e locuções femininas têm crase: às 8 horas, à medida que, às pressas, à vista."],
 x:[["'Entregou o relatório a diretora' tem crase?","Sim: 'ao diretor' → 'à diretora'."],["'Começou a chover' tem crase?","Não: antes de verbo nunca."]],
 q:[["Assinale a frase correta.",["Chegamos às 9 horas.","Chegamos as 9 horas.","Ele foi à pé.","Refiro-me à você.","Começou à estudar."],"Horas determinadas pedem crase. Não há crase antes de masculino ('a pé'), pronome pessoal e verbo."],["Em 'Vou ___ Curitiba e depois ___ Bahia', as lacunas são",["a / à","à / à","a / a","à / a","ao / à"],"Volto de Curitiba (a); volto da Bahia (à)."]]},
{id:"p5",a:"Português",t:"Concordância verbal e nominal",
 e:["Regra geral: o verbo concorda com o núcleo do sujeito, mesmo que ele venha depois do verbo.","Haver (existir) e fazer (tempo) ficam no singular, e passam essa impessoalidade ao auxiliar: 'deve haver'.","Partícula SE: 'Vendem-se casas' (apassivadora, concorda) × 'Precisa-se de casas' (indeterminação, singular).","Nominal: o adjetivo concorda com o substantivo. 'Meio', 'bastante' e 'menos' como advérbios não variam. 'Anexo', 'obrigado', 'mesmo', 'quite' variam."],
 x:[["'Haviam muitos erros' está certo?","Não: 'Havia muitos erros'."],["'Elas mesmo fizeram' está certo?","Não: 'Elas mesmas fizeram'."]],
 q:[["Assinale a frase correta.",["Consertam-se máquinas.","Conserta-se máquinas.","Houveram problemas.","Faziam dez anos.","Existe muitas falhas."],"VTD + se apassivador: verbo concorda com 'máquinas'."],["Assinale a frase correta.",["Os documentos seguem anexos.","Os documentos seguem anexo.","Ela ficou meia preocupada.","Havia menas pessoas.","Elas estavam bastantes atentas."],"'Anexo' varia. Meio e bastante (advérbios) não variam; 'menas' não existe."]]},
{id:"p6",a:"Português",t:"Regência verbal e nominal",
 e:["Regência é a relação entre um termo e seu complemento: com ou sem preposição.","Clássicos: **assistir a** (ver); **visar a** (pretender); **aspirar a** (desejar); **obedecer a**; **preferir algo a algo**; **chegar a** (não 'chegar em'); **implicar algo** (acarretar), sem preposição.","Pronomes: verbo transitivo direto pede **o, a, os, as**; transitivo indireto pede **lhe, lhes**.","A regência explica a crase: 'Assistimos à palestra' (assistir a + a palestra)."],
 x:[["'Ele visa o cargo de gerente' está certo?","No sentido de pretender, o correto é 'visa ao cargo'."],["'Isso implica em atraso' está certo?","Pela norma-padrão, 'implica atraso' (sem preposição)."]],
 q:[["Assinale a frase de acordo com a norma-padrão.",["Chegamos ao terminal cedo.","Chegamos no terminal cedo.","Prefiro mais café do que chá.","Obedeça o regulamento.","Assisti o filme ontem."],"Chegar a; preferir algo a algo; obedecer a; assistir a."],["Em 'Respeito o gerente e obedeço-___', a lacuna é",["lhe","o","a ele de","-lo","se"],"Obedecer a alguém (transitivo indireto) → lhe."]]},
{id:"p7",a:"Português",t:"Pontuação",
 e:["**Não** se separa por vírgula: sujeito e verbo; verbo e complemento; nome e seu complemento.","**Use** vírgula: em enumerações, para isolar aposto e vocativo, expressões explicativas (isto é, por exemplo), adjunto adverbial deslocado longo e orações adjetivas explicativas.","Antes de 'mas', 'porém' e 'contudo' (adversativas), usa-se vírgula. Antes de 'e', só se os sujeitos forem diferentes ou com valor adversativo.","Ponto e vírgula separa itens longos ou orações coordenadas que já têm vírgulas."],
 x:[["'Os candidatos aprovados, serão convocados' está certo?","Não: a vírgula separa sujeito e verbo."],["'Pedro, venha aqui' — que vírgula é essa?","Vírgula de vocativo."]],
 q:[["Assinale a frase pontuada corretamente.",["No fim do mês, a equipe apresentou o relatório.","A equipe, apresentou o relatório no fim do mês.","A equipe apresentou, o relatório no fim do mês.","A equipe apresentou o relatório, no fim, do mês.","No fim do mês a equipe, apresentou o relatório."],"Adjunto adverbial deslocado para o início pode ser isolado por vírgula; os demais separam termos essenciais."],["Na frase 'Ana, traga os documentos', a vírgula isola um",["vocativo","aposto","sujeito","objeto direto","adjunto adverbial"],"Ana é chamada: vocativo."]]},
{id:"p8",a:"Português",t:"Coesão e conectivos",
 e:["Coesão é a ligação entre as partes do texto: por **retomada** (pronomes, sinônimos) e por **conectivos**.","Adição: e, além disso, também. Oposição: mas, porém, contudo, entretanto, todavia, no entanto.","Causa: porque, pois (antes do verbo), já que, visto que, uma vez que. Conclusão: portanto, logo, por isso, assim, pois (depois do verbo, entre vírgulas).","Concessão: embora, ainda que, mesmo que, conquanto (verbo no subjuntivo). Condição: se, caso, desde que. Finalidade: para que, a fim de que. Proporção: à medida que, à proporção que."],
 x:[["Substitua 'embora' em 'Embora chovesse, saíram'.","Ainda que / mesmo que chovesse, saíram."],["Que relação 'pois' tem em 'Ele está cansado, pois trabalhou muito'?","Causa/explicação."]],
 q:[["Em 'Estudou muito; logo, foi aprovado', 'logo' indica",["conclusão","oposição","causa","concessão","tempo"],"Logo = portanto."],["Pode substituir 'no entanto' sem mudança de sentido:",["contudo","portanto","porque","embora","assim"],"Ambas são adversativas."]]},
{id:"p9",a:"Português",t:"Interpretação de texto: como a Cesgranrio cobra",
 e:["Leia primeiro o enunciado da questão e depois volte ao trecho indicado.","Diferencie **compreensão** (o que o texto diz) de **interpretação** (o que se pode concluir dele). Desconfie de alternativas que extrapolam, generalizam ('sempre', 'nunca', 'todos') ou contradizem o texto.","Questões de 'reescrita' pedem que se mantenham sentido e correção: confira tempo verbal, concordância e conectivo.","Identifique a tese (ideia principal) e os argumentos; o título costuma resumir a tese.","Significação: a Cesgranrio pede o sentido da palavra **no contexto**, que pode ser diferente do dicionário."],
 x:[["'Depreende-se do texto' pede o quê?","Uma conclusão que o texto autoriza, sem ir além do que está escrito."],["Alternativa com 'sempre' ou 'todos' em um texto cauteloso.","Geralmente é extrapolação: desconfie."]],
 q:[["Em interpretação, uma alternativa que afirma algo não dito nem sugerido pelo texto comete",["extrapolação","coesão","paráfrase","síntese","coerência"],"Extrapolar é ir além do texto."],["Reescrever um trecho com outras palavras mantendo o sentido é fazer uma",["paráfrase","paródia","ambiguidade","antítese","hipérbole"],"Paráfrase preserva o sentido."]]},
{id:"p10",a:"Português",t:"Pronomes e colocação pronominal",
 e:["**Próclise** (pronome antes do verbo) é obrigatória com palavras atrativas: não, nunca, que, quem, onde, advérbios sem vírgula, pronomes indefinidos e conjunções subordinativas: 'Não me disseram'.","**Ênclise** (depois do verbo): no início da frase, a norma-padrão não admite pronome oblíquo: 'Disseram-me', e não 'Me disseram'.","**Mesóclise**: com futuro do presente ou do pretérito sem palavra atrativa: 'Entregar-se-á'.","Este/esta/isto = perto de quem fala ou o que vai ser dito; esse/essa/isso = o que já foi dito."],
 x:[["'Me entregue o relatório' segue a norma-padrão?","Não: 'Entregue-me o relatório'."],["'Não entregou-me o relatório' está certo?","Não: o 'não' atrai o pronome: 'Não me entregou'."]],
 q:[["Assinale a frase de acordo com a norma-padrão.",["Nunca o vi tão animado.","Nunca vi-o tão animado.","Me ligue amanhã.","Te espero na portaria.","Quem disse-lhe isso?"],"'Nunca' e 'quem' atraem o pronome; não se inicia frase com oblíquo."],["Em 'Far-se-á a vistoria amanhã', ocorre",["mesóclise","próclise","ênclise","crase","elipse"],"Pronome no meio do verbo no futuro."]]}
];

/* ---------- Flashcards: [assunto, frente, verso]. Frente e verso curtos para também servirem ao jogo de associação. ---------- */
const FC=[
["rh","CHA","Conhecimentos, Habilidades e Atitudes"],
["rh","Efeito halo","Um traço marcante contamina a avaliação de todos os outros"],
["rh","Avaliação 360°","Superiores, pares, subordinados, clientes e autoavaliação"],
["rh","Carreira em Y","Escolha entre ramo gerencial e ramo técnico, com remuneração equivalente"],
["rh","Kirkpatrick: nível 3","Comportamento: aplica no trabalho o que aprendeu"],
["rh","Análise de cargo","Requisitos que o ocupante precisa ter"],
["rh","Benefício legal","13º, férias + 1/3, FGTS, vale-transporte"],
["sgi","ISO 9001 / 14001 / 45001","Qualidade / meio ambiente / saúde e segurança"],
["sgi","ISO 19011","Diretrizes para auditoria de sistemas de gestão"],
["sgi","ISO 31000","Gestão de riscos: risco = efeito da incerteza nos objetivos"],
["sgi","Ação corretiva","Elimina a causa da não conformidade para não repetir"],
["sgi","Auditoria de 3ª parte","Organismo certificador independente"],
["sgi","Transferir o risco","Seguro ou terceirização"],
["patr","Exaustão","Perda de valor de recursos naturais extraídos"],
["patr","Amortização","Perda de valor de intangíveis"],
["patr","Impairment","Valor contábil maior que o recuperável: reconhece a perda"],
["patr","Inventário rotativo","Contagens em ciclos ao longo do ano"],
["patr","Tombamento","Identificação do bem com plaqueta e número"],
["patr","Depreciação linear","(Custo − valor residual) ÷ vida útil"],
["manut","Preditiva","Intervém conforme a condição medida (vibração, termografia)"],
["manut","Preventiva","Intervalos fixos de tempo ou uso"],
["manut","Detectiva","Busca falhas ocultas em sistemas de proteção"],
["manut","Disponibilidade","MTBF ÷ (MTBF + MTTR)"],
["manut","Backlog","Carga de serviços pendentes da equipe"],
["manut","TPM","Manutenção produtiva total, com manutenção autônoma"],
["ind","Eficiência","Uso adequado dos recursos"],
["ind","Eficácia","Atingir o objetivo"],
["ind","Escopo 2 (GHG)","Emissões da energia comprada"],
["ind","Escopo 1 (GHG)","Emissões diretas de fontes próprias"],
["ind","BSC","Financeira, clientes, processos internos, aprendizado e crescimento"],
["ind","Indicador leading","Antecipa o resultado futuro"],
["ind","GRI","Padrão de relatório de sustentabilidade"],
["matfin","Juros simples","J = C · i · t"],
["matfin","Juros compostos","M = C · (1 + i)ⁿ"],
["matfin","Desconto comercial","D = N · d · t (por fora, sobre o nominal)"],
["matfin","Desconto racional","A = N ÷ (1 + i · t) (por dentro)"],
["matfin","+20% e depois −20%","Preço final 4% menor"],
["contab","Partidas dobradas","Todo débito tem um crédito de igual valor"],
["contab","Princípio da entidade","Patrimônio da empresa ≠ patrimônio dos sócios"],
["contab","Regime de competência","Reconhece quando ocorre, não quando paga"],
["contab","Obrigação acessória","Dever de fazer: escriturar, declarar, emitir nota"],
["contab","Fato permutativo","Troca entre contas, sem alterar o PL"],
["contab","Saldo credor","Passivo, PL e receitas"],
["fluxo","DFC: investimento","Compra e venda de imobilizado e intangível"],
["fluxo","DFC: financiamento","Empréstimos, capital e dividendos"],
["fluxo","Método indireto","Parte do lucro líquido e ajusta o que não é caixa"],
["fluxo","Método direto","Recebimentos e pagamentos brutos"],
["fluxo","Depreciação no indireto","Soma ao lucro (não saiu caixa)"],
["bp","Equação patrimonial","Ativo = Passivo + PL"],
["bp","Ordem do Ativo","Decrescente de liquidez"],
["bp","Passivo não circulante","Vence depois de 12 meses"],
["bp","Lucro bruto","Receita líquida − CMV"],
["bp","Liquidez corrente","Ativo circulante ÷ passivo circulante"],
["bp","Componentes do ANC","Realizável a LP, investimentos, imobilizado, intangível"],
["log","Efeito chicote","Variação dos pedidos amplificada ao subir na cadeia"],
["log","Cross-docking","Recebe e expede sem armazenar"],
["log","Milk run","Coleta programada em vários fornecedores"],
["log","RFID","Identificação por radiofrequência, sem linha de visada"],
["log","Logística reversa","Retorno pós-venda e pós-consumo"],
["log","EDI","Troca eletrônica de documentos entre empresas"],
["transp","Multimodal","Um contrato e um documento, emitido pelo OTM"],
["transp","Intermodal","Vários modais, um documento por trecho"],
["transp","ANTAQ","Agência do transporte aquaviário"],
["transp","ANTT","Agência do transporte rodoviário e ferroviário"],
["transp","Cabotagem","Navegação entre portos nacionais pela costa"],
["transp","Dutoviário","Alto custo fixo, baixo custo variável, fluxo contínuo"],
["transp","CT-e","Documento fiscal do serviço de transporte"],
["estoq","Ponto de pedido","Demanda × tempo de reposição + estoque de segurança"],
["estoq","Giro de estoque","CMV ÷ estoque médio"],
["estoq","Curva ABC: classe A","Poucos itens, maior parte do valor"],
["estoq","Classificação XYZ","Criticidade do item para a operação"],
["estoq","LEC","Lote que minimiza custo de pedir + custo de manter"],
["estoq","Kanban","Cartões que puxam a produção pelo consumo"],
["estoq","PEPS com preços subindo","CMV menor e estoque final maior"],
["armaz","Drive-in","Um lado de acesso: UEPS"],
["armaz","Drive-through","Dois lados de acesso: PEPS"],
["armaz","WMS","Sistema de gestão do armazém"],
["armaz","Picking","Separação dos itens do pedido"],
["armaz","FEFO","Vence primeiro, sai primeiro"],
["armaz","Layout em U","Recebimento e expedição do mesmo lado"],
["manus","Unitização","Agrupar volumes em uma única unidade de carga"],
["manus","Palete PBR","1,00 m × 1,20 m"],
["manus","TEU","Contêiner de 20 pés (unidade de referência)"],
["manus","Embalagem secundária","Agrupa embalagens primárias"],
["manus","AGV","Veículo autoguiado, sem operador"],
["compras","Dispensa na 13.303 (compras)","Até R$ 50 mil (serviços e compras)"],
["compras","Dispensa na 13.303 (obras)","Até R$ 100 mil (obras e serviços de engenharia)"],
["compras","Inexigibilidade","Inviabilidade de competição"],
["compras","Orçamento na 13.303","Sigiloso, salvo justificativa (art. 34)"],
["compras","Modalidades da 14.133","Pregão, concorrência, concurso, leilão, diálogo competitivo"],
["compras","PNCP","Portal Nacional de Contratações Públicas"],
["compras","ETP","Estudo técnico preliminar da fase preparatória"],
["compras","Pregão na 14.133","Obrigatório para bens e serviços comuns"],
["contr","Duração na 13.303","Até 5 anos (art. 71)"],
["contr","Alteração na 13.303","Só por acordo entre as partes (art. 72)"],
["contr","Limites de acréscimo","25%; até 50% em reforma de edifício ou equipamento"],
["contr","Garantia na 13.303","Até 5%; até 10% em grande vulto"],
["contr","Suspensão na 13.303","Até 2 anos"],
["contr","Inidoneidade na 14.133","3 a 6 anos"],
["contr","Apostilamento","Registra reajuste já previsto no contrato"],
["contr","Assinatura qualificada","Usa certificado ICP-Brasil"],
["info","Win + L","Bloqueia a sessão"],
["info","Win + V","Histórico da área de transferência"],
["info","Ctrl + Shift + Esc","Gerenciador de Tarefas"],
["info","Shift + F5 (PowerPoint)","Apresenta a partir do slide atual"],
["info","Ctrl + B (Word PT-BR)","Salvar"],
["info","#N/D no Excel","Valor não encontrado (ex.: PROCV)"],
["info","Intranet","Rede privada com tecnologia da internet"],
["info","Memória cache","Pequena e muito rápida, entre CPU e RAM"],
["lgpd","Operador (LGPD)","Trata dados em nome do controlador"],
["lgpd","Encarregado (DPO)","Canal entre controlador, titulares e ANPD"],
["lgpd","Dado sensível","Saúde, biometria, religião, origem racial etc."],
["lgpd","Multa da LGPD","Até 2% do faturamento, limite de R$ 50 milhões"],
["lgpd","Ransomware","Sequestra (criptografa) os dados e pede resgate"],
["lgpd","Worm","Propaga-se sozinho pela rede"],
["lgpd","Backup diferencial","Copia o que mudou desde o último completo"],
["lgpd","Integridade","Informação sem alteração indevida"],
["port","Ratificar × retificar","Confirmar × corrigir"],
["port","Iminente × eminente","Prestes a acontecer × ilustre"],
["port","Embora","Conjunção concessiva"],
["port","Portanto","Conjunção conclusiva"],
["port","Haver (= existir)","Impessoal: fica no singular"],
["mat","Combinação","Ordem não importa: n! ÷ (p!(n − p)!)"],
["mat","Mediana","Termo central do rol ordenado"],
["mat","Volume do cilindro","π · r² · h"],
["mat","Soma das raízes (2º grau)","−b ÷ a"]
];


/* ---------- Cronograma ---------- */
const PLAN=[
 {id:"s1",t:"Semana 1",d:"26/10 a 01/11",f:"Logística e estoques",tasks:[
  ["Logística: conceitos, cadeia de suprimentos, efeito chicote, logística reversa e verde","Específicas"],
  ["Tecnologias logísticas: RFID, WMS, TMS, IoT, cross-docking","Específicas"],
  ["Estoques: curva ABC, ponto de pedido, estoque de segurança, PEPS × custo médio, giro","Específicas"],
  ["Português: crase e concordância nominal e verbal","Gerais"],
  ["Matemática: razão, proporção, regra de três e porcentagem","Gerais"],
  ["Dom 01/11: treino de Logística e de Estoques no app","App"]]},
 {id:"s2",t:"Semana 2",d:"02/11 a 08/11",f:"Compras, licitações e contratos",tasks:[
  ["Lei 13.303/2016, arts. 28 a 67 (licitações): leitura da lei seca","Específicas"],
  ["Lei 13.303/2016, arts. 68 a 91 (contratos, duração, alterações 25%/50%, sanções)","Específicas"],
  ["Lei 14.133/2021: modalidades, pregão, fiscal × gestor, aditivo × apostilamento","Específicas"],
  ["Contratos digitais e assinatura eletrônica (Lei 14.063/2020)","Específicas"],
  ["Português: pontuação e coesão (conectivos)","Gerais"],
  ["Matemática: equações de 1º e 2º grau e sistemas lineares","Gerais"],
  ["Dom 08/11: mini simulado de 20 questões","App"]]},
 {id:"s3",t:"Semana 3",d:"09/11 a 15/11",f:"Processos administrativos",tasks:[
  ["RH: recrutamento e seleção, cargos e carreira, T&D, avaliação de desempenho, competências, benefícios","Específicas"],
  ["SGI: ISO 9001/14001/45001, PDCA, auditoria (ISO 19011), correção × ação corretiva, ISO 31000","Específicas"],
  ["Patrimônio: inventário, classificação de bens, depreciação, impairment","Específicas"],
  ["Manutenção: corretiva, preventiva, preditiva, MTBF/MTTR, PCM","Específicas"],
  ["Indicadores: eficiência × eficácia, BSC, metas SMART, ESG e escopos de emissão","Específicas"],
  ["Matemática: análise combinatória e probabilidade","Gerais"],
  ["Dom 15/11: simulado completo nº 1 (60 questões, 4 h)","App"]]},
 {id:"s4",t:"Semana 4",d:"16/11 a 22/11",f:"Finanças, contabilidade e transportes",tasks:[
  ["Matemática financeira: juros simples e compostos, desconto comercial × racional","Específicas"],
  ["Registros contábeis: partidas dobradas, competência, CPC 00, obrigações acessórias e SPED","Específicas"],
  ["Fluxo de caixa direto e indireto; atividades operacionais, de investimento e de financiamento","Específicas"],
  ["Balanço Patrimonial e DRE: estrutura e classificação circulante × não circulante","Específicas"],
  ["Transportes: modais, intermodal × multimodal (OTM), agências reguladoras","Específicas"],
  ["Armazenagem, manuseio e embalagem: layouts, drive-in × drive-through, unitização, palete PBR","Específicas"],
  ["Português: classes de palavras e significação; Matemática: estatística e geometria","Gerais"],
  ["Sex 20/11 (feriado): bloco extra de revisão das Leis 13.303 e 14.133","Revisão"]]},
 {id:"s5",t:"Semana 5",d:"23/11 a 29/11",f:"Informática e consolidação",tasks:[
  ["Windows 11: atalhos, Explorador de Arquivos e manipulação de arquivos","Específicas"],
  ["Office 2024: Word, Excel (referências e funções) e PowerPoint","Específicas"],
  ["Hardware, software, processadores; internet × intranet; navegadores","Específicas"],
  ["Segurança da informação (malware, phishing, backup) e LGPD","Específicas"],
  ["Português: ortografia e interpretação; Matemática: funções e logaritmos","Gerais"],
  ["Refazer no app todas as questões erradas","App"],
  ["Dom 29/11: simulado completo nº 2","App"]]},
 {id:"s6",t:"Semana 6",d:"30/11 a 05/12",f:"Reta final",tasks:[
  ["Releitura dos pontos mais cobrados das Leis 13.303 e 14.133","Revisão"],
  ["Ter 01/12: imprimir o Cartão de Confirmação de Inscrição e conferir local e horário","Prova"],
  ["Qua 02/12: simulado completo nº 3, no mesmo horário da prova","App"],
  ["Qui e sex: revisar os erros dos três simulados","Revisão"],
  ["Sáb 05/12: estudo leve; separar documento original com foto e caneta preta de corpo transparente","Prova"],
  ["Dom 06/12: chegar ao local 1 hora antes do início","Prova"]]}
];

/* ---------- Estado ---------- */
const KEY="transpetro26";
let S={hist:[],stats:{},wrong:[],plan:{}};
try{const r=localStorage.getItem(KEY); if(r) S=Object.assign(S,JSON.parse(r));}catch(e){}
/* save() grava neste aparelho e avisa os módulos registrados em SAVE_HOOKS (sincronização, lembrete). */
const SAVE_HOOKS=[];
/* QID: identificação fixa de cada questão (montada no módulo 08); o histórico é remapeado por ela. */
let QID=null;
/* registro diário de acertos por assunto, para o painel semanal: S.qlog[dia][assunto]=[acertos,total] */
function qlogAdd(c,ok){S.qlog=S.qlog||{};const k=dkey(new Date()),d=S.qlog[k]=S.qlog[k]||{},x=d[c]=d[c]||[0,0];x[1]++;if(ok)x[0]++;}
function saveLocal(){try{localStorage.setItem(KEY,JSON.stringify(S));}catch(e){}}
function save(){S.upd=Date.now();saveLocal();SAVE_HOOKS.forEach(f=>{try{f();}catch(e){}});}

const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
const L="ABCDE";

/* ---------- Contagem regressiva ---------- */
(function(){
  const now=new Date(); const t=new Date(2026,11,6); const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const d=Math.round((t-today)/864e5);
  $("#days").textContent=d>0?d:(d===0?"Hoje":"—");
  if(d===1) $("#daysTxt").textContent="dia para a prova";
  if(d===0) $("#daysTxt").textContent="é hoje. Boa prova!";
  if(d<0) $("#daysTxt").textContent="prova realizada";
})();

/* ---------- Navegação ---------- */
let current="guia", quiz=null, tick=null;
document.querySelectorAll("nav.tabs button").forEach(b=>b.onclick=()=>go(b.dataset.v));
/* Telas: cada módulo registra as suas em VIEWS (função que desenha) e TABOF (aba destacada). */
const VIEWS={home:()=>vGuia(),guia:()=>vGuia(),pratica:()=>vPratica(),crono:()=>vCrono(),stats:()=>vStats(),quiz:()=>vQuiz(),result:()=>vResult(),cont:()=>vCont(),topic:()=>vTopic(),base:()=>vBase(),jogos:()=>vJogos(),fc:()=>vFc(),vf:()=>vVf(),match:()=>vMatch(),links:()=>vLinks(),caderno:()=>vCaderno(),real:()=>vReal(),vesp:()=>vVesp(),lei:()=>vLei(),calc:()=>vCalc()};
const TABOF={home:"guia",guia:"guia",quiz:"pratica",result:"pratica",real:"pratica",caderno:"pratica",topic:"cont",base:"cont",links:"cont",vesp:"cont",fc:"jogos",vf:"jogos",match:"jogos",lei:"jogos",calc:"jogos",crono:"stats"};
function go(v){
  if(!VIEWS[v]) v="guia";
  if(v!=="topic"&&v!=="vesp") ttsStop();
  if(current==="quiz"&&v!=="quiz") qtAcc();
  if(v!=="vf"&&vf&&!vf.done) vf.done=true;
  if(gtick&&v!=="vf"&&v!=="match"){clearInterval(gtick);gtick=null;}
  current=v;
  const tab=TABOF[v]||v;
  document.querySelectorAll("nav.tabs button").forEach(b=>b.setAttribute("aria-selected",b.dataset.v===tab));
  document.body.classList.toggle("focus",v==="quiz"||v==="real");
  const cb=document.getElementById("cfgBtn"); if(cb) cb.setAttribute("aria-current",v==="config"?"page":"false");
  VIEWS[v]();
  window.scrollTo({top:0});
}


/* ---------- Praticar ---------- */
/* Grupo recolhível; o estado aberto/fechado fica em S.fold[chave]. */
function foldHTML(k,title,sub,inner,defOpen){
  S.fold=S.fold||{}; const open=S.fold[k]===undefined?!!defOpen:!!S.fold[k];
  return `<details class="panel fold" data-k="${k}"${open?" open":""}><summary><span>${esc(title)}</span>${sub?`<span class="muted">${esc(sub)}</span>`:""}</summary><div class="stack foldin">${inner}</div></details>`;
}
document.addEventListener("toggle",e=>{const d=e.target;if(d&&d.matches&&d.matches("details.fold[data-k]")){S.fold=S.fold||{};S.fold[d.dataset.k]=d.open;save();}},true);

function vPratica(){
  const opts=Object.entries(CATS).map(([k,v])=>`<option value="${k}">${esc(v.n)} (${QV().filter(q=>q.c===k).length})</option>`).join("");
  const blk=Object.entries(BLOCKS).map(([k,v])=>`<option value="b:${k}">Bloco: ${esc(v)}</option>`).join("");
  const years=Object.keys(PROVAS).sort().reverse();
  const t=paceTarget(), a=myAvgT(), lawN=QV().filter(q=>/13\.303/.test(q[1])).length;
  const grp=[["Transpetro, outros cargos","Transpetro"],["Petrobras","Petrobras"],["Banco do Brasil (só Português, Matemática, Mat. Financeira e Informática)","BB"]];
  const nv=unseenCount();
  const especiais=`<div class="grid2 inner">
    <div class="panel mode"><span class="tag">Cesgranrio · questões reais</span><h3>Provas anteriores</h3><p class="muted">Técnico de Administração e Controle da Transpetro, só com as questões que ainda valem pelas regras atuais, conferidas com o gabarito oficial. Cronômetro de 4 min por questão, como na prova.</p>
      <div class="row" style="gap:8px;flex-wrap:wrap">${years.map(y=>`<button class="btn ghost sm" onclick="startPast('${y}')">${y} · ${QV().filter(q=>q[4]===y).length} questões</button>`).join("")}</div></div>
    <div class="panel mode"><span class="tag">Cartão-resposta</span><h3>Modo prova real</h3><p class="muted">Caderno de questões com rascunho e “voltar depois”, cartão-resposta separado e só a correção no fim. Treina passar as respostas a tempo.</p>
      <div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn" onclick="startReal('full')">Simulado de 60</button>${years.map(y=>`<button class="btn ghost sm" onclick="startReal('${y}')">Transpetro ${y}</button>`).join("")}</div></div>
    <div class="panel mode"><span class="tag">60 questões · ${fmt(t)} cada</span><h3>Simulado de ritmo</h3><p class="muted">${a?`Sua média recente é ${fmt(Math.round(a))} por questão. O tempo deste simulado é 10% menor, para você ganhar folga no dia da prova.`:"Sem média ainda: o alvo começa em 3:30 por questão."} Em qualquer questão, o app avisa quando você passa de 3 minutos.</p><button class="btn ghost" onclick="startPace()">Iniciar</button></div>
    <div class="panel mode"><span class="tag">${lawN} questões</span><h3>Lei 13.303 artigo por artigo</h3><p class="muted">Questões com o número do artigo, no estilo da letra da lei que a Cesgranrio cobra. Complete com o jogo Lei seca.</p><div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn ghost" onclick="startLaw()">Treinar</button><button class="btn ghost sm" onclick="go('jogos')">Lei seca</button></div></div>
  </div>
  <section class="stack inner"><h3>Outras provas Cesgranrio</h3>
    <p class="muted">Questões reais da mesma banca, só dos assuntos do seu edital e com a lei e os programas atuais. Cada uma mostra a prova de origem. Gabarito conferido com o oficial e explicado.</p>
    ${grp.map(([t,p])=>`<div class="stack" style="gap:6px"><span class="muted">${esc(t)}</span><div class="row" style="gap:8px;flex-wrap:wrap">${SRC_ORD.filter(s=>s.startsWith(p)).map(s=>`<button class="btn ghost sm" onclick="startSrc('${s}')">${esc(s.replace(p+" ",""))} · ${srcCount(s)}</button>`).join("")}</div></div>`).join("")}
  </section>
  <p class="muted inner">A divisão das 40 específicas no simulado (9 de processos, 9 de finanças, 15 de logística e compras, 7 de informática) é uma estimativa proporcional ao edital, que não define quantas questões vêm de cada tema.</p>`;
  $("#view").innerHTML=`
  ${rq?`<div class="rule row" style="justify-content:space-between"><span>Você tem uma prova real em andamento.</span><button class="btn" onclick="go('real')">Continuar</button></div>`:""}
  ${quiz&&!quiz.finished?`<div class="rule row" style="justify-content:space-between"><span>Você tem um ${esc(quiz.label.toLowerCase())} em andamento.</span><button class="btn" onclick="go('quiz')">Continuar</button></div>`:""}
  <h2>Escolha o modo</h2>
  <div class="grid2">
    <div class="panel mode hl"><span class="tag">Recomendado</span><h3>Treino adaptativo</h3><p class="muted">20 questões: 12 dos seus 5 assuntos mais fracos (${weakCats(5).map(k=>esc(CATS[k].n)).join(", ")}), 4 de outras específicas e 4 de Português e Matemática. Prioriza as que você nunca viu.</p><button class="btn" onclick="startAdaptive()">Começar</button></div>
    <div class="panel mode"><span class="tag">Igual à prova</span><h3>Simulado completo</h3><p class="muted">60 questões no formato da prova, 4 h cronometradas, correção só no final e verificação das notas de corte. Puxa primeiro as questões que você nunca viu (${nv} inéditas no banco).</p><button class="btn" onclick="startExam('full')">Iniciar simulado</button></div>
    <div class="panel mode"><span class="tag">50 minutos</span><h3>Mini simulado</h3><p class="muted">20 questões com a mesma proporção entre os blocos, priorizando as inéditas. Bom para dias de semana.</p><button class="btn" onclick="startExam('mini')">Iniciar mini</button></div>
    <div class="panel mode"><span class="tag">Correção imediata</span><h3>Treino por assunto</h3><p class="muted">Até 15 questões de um tema, com gabarito comentado a cada resposta.</p>
      <label for="selCat" class="muted">Assunto</label><select id="selCat"><option value="src:all">Só questões de provas anteriores (${QV().filter(q=>q[4]).length})</option>${blk}${opts}</select>
      <label class="row muted chk" style="gap:8px"><input type="checkbox" id="onlyNew" style="width:18px;height:18px;accent-color:var(--petrol)"> Só questões que ainda não respondi</label>
      <button class="btn ghost" onclick="startTrain()">Treinar</button></div>
    <div class="panel mode"><span class="tag">${srsDue().length} para hoje · ${Object.keys(S.srs).length} na revisão</span><h3>Revisar erradas</h3><p class="muted">Revisão espaçada: cada questão errada volta 1, 3, 7 e 15 dias depois. Acertou nas quatro, ela sai da fila; errou, recomeça.</p><button class="btn ghost" ${S.wrong.length||Object.keys(S.srs).length?"":"disabled"} onclick="startWrong()">Revisar</button></div>
    <div class="panel mode"><span class="tag">${Object.keys(S.notes).length} notas</span><h3>Caderno de erros</h3><p class="muted">Seus erros com o motivo (não sabia, confundiu, leu rápido, errou a conta) e o que lembrar da próxima vez.</p><button class="btn ghost" onclick="go('caderno')">Abrir caderno</button></div>
  </div>
  ${foldHTML("prat","Provas reais e treinos especiais","Transpetro, Petrobras e BB; modo prova real; ritmo; lei seca",especiais,true)}`;
}
/* Seleção sem repetir: S.seen[i] guarda o dia em que a questão foi respondida (1 = antes da v13).
   As inéditas vêm primeiro; depois, as vistas há mais tempo. */
const seenKey=i=>{const x=S.seen[i];return x?(x===1?"0":String(x)):"";};
function freshSort(ids){return shuffle(ids.slice()).sort((a,b)=>{const x=seenKey(a),y=seenKey(b);return x<y?-1:x>y?1:0;});}
function unseenCount(){return QI().filter(i=>!S.seen[i]).length;}
/* n questões do bloco b, alternando entre os assuntos do bloco para cobrir todos */
function pickBlock(b,n){
  const ids=QI().filter(i=>CATS[Q[i].c].b===b);
  const pools=shuffle([...new Set(ids.map(i=>Q[i].c))]).map(c=>freshSort(ids.filter(i=>Q[i].c===c)));
  const out=[];
  for(const tier of [0,1]){
    let moved=true;
    while(out.length<n&&moved){moved=false;for(const p of pools){if(out.length>=n)break;if(p.length&&(S.seen[p[0]]?1:0)===tier){out.push(p.shift());moved=true;}}}
  }
  return shuffle(out);
}
function makeQuiz(ids,mode,label,limit){
  if(tick) clearInterval(tick);
  quiz={ids,mode,label,limit,start:Date.now(),i:0,ans:ids.map(()=>null),order:ids.map(()=>shuffle([0,1,2,3,4])),finished:false,confirm:false};
  if(limit) tick=setInterval(updTimer,1000);
  go("quiz");
}
function startExam(t){
  const n=t==="full"?{adm:9,fin:9,log:15,info:7,port:10,mat:10}:{adm:3,fin:3,log:5,info:2,port:3,mat:4};
  const ids=[].concat(...Object.entries(n).map(([b,k])=>pickBlock(b,k)));
  makeQuiz(ids,"exam",t==="full"?"Simulado completo":"Mini simulado",t==="full"?4*3600:50*60);
}
function startTrain(){
  const v=$("#selCat").value; let pool;
  if(v==="src:all") pool=QI().filter(i=>Q[i][4]);
  else if(v.startsWith("b:")) pool=QI().filter(i=>CATS[Q[i].c].b===v.slice(2));
  else pool=QI().filter(i=>Q[i].c===v);
  if($("#onlyNew").checked){const p2=pool.filter(i=>!S.seen[i]); if(p2.length) pool=p2;}
  const label=v==="src:all"?"provas anteriores":v.startsWith("b:")?BLOCKS[v.slice(2)]:CATS[v].n;
  makeQuiz(shuffle(freshSort(pool).slice(0,15)),"train","Treino: "+label,0);
}
function startPast(y){
  const ord=["port","mat"], ids=QI().filter(i=>Q[i][4]===y);
  const grp=i=>{const k=ord.indexOf(Q[i].c);return k<0?2:k;};
  ids.sort((a,b)=>grp(a)-grp(b)||Q[a][5]-Q[b][5]);
  makeQuiz(ids,"exam","Prova Transpetro "+y+" ("+PROVAS[y]+")",ids.length*240);
}
function startTrainCat(k){makeQuiz(shuffle(freshSort(QI().filter(i=>Q[i].c===k)).slice(0,15)),"train","Treino: "+CATS[k].n,0);}
function startWrong(){
  const due=shuffle(srsDue()), rest=shuffle(S.wrong.filter(q=>!due.includes(q)&&!(S.srs[q]&&S.srs[q].d>todayK())));
  const ids=due.concat(rest).slice(0,20);
  if(!ids.length){toast("Nada para revisar hoje","As questões erradas voltam no dia marcado. Que tal um V ou F?");return;}
  makeQuiz(ids,"train","Revisão de erradas",0);
}

/* ---------- Tela de questão ---------- */
function fmt(s){s=Math.max(0,s);const h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+":":"")+String(m).padStart(2,"0")+":"+String(x).padStart(2,"0");}
function remaining(){return Math.round(quiz.limit-(Date.now()-quiz.start)/1000);}
function updTimer(){
  if(!quiz||quiz.finished){clearInterval(tick);return;}
  const r=remaining(); const el=$("#timer");
  if(el){el.textContent=fmt(r); el.classList.toggle("low",r<600);}
  if(r<=0) finish();
}
function vQuiz(){
  if(!quiz){go("pratica");return;}
  const k=quiz.i, qi=quiz.ids[k], q=Q[qi], ord=quiz.order[k], a=quiz.ans[k];
  const train=quiz.mode==="train", locked=train&&a!==null;
  const optsHtml=ord.map((oi,pos)=>{
    let cls="opt";
    if(locked){ if(oi===0) cls+=" right"; else if(a===pos) cls+=" wrong"; cls+=" locked"; }
    else if(a===pos) cls+=" sel";
    return `<button class="${cls}" data-p="${pos}" ${locked?'aria-disabled="true"':""}><span class="l">${L[pos]}</span><span>${esc(q[2][oi])}</span></button>`;
  }).join("");
  const answered=quiz.ans.filter(x=>x!==null).length;
  $("#view").innerHTML=`
  <div class="qhead">
    <button class="btn ghost sm qexit" onclick="go('pratica')" aria-label="Sair do simulado (ele continua salvo)">← Sair</button>
    <div class="stack" style="gap:2px"><strong>${esc(quiz.label)}</strong><span class="muted num">Questão ${k+1} de ${quiz.ids.length} · ${answered} respondidas</span></div>
    <button class="btn ghost sm fzq" onclick="fzCycle()" aria-label="Tamanho da letra">Aa</button>
    ${quiz.limit?`<span class="timer num" id="timer">${fmt(remaining())}</span>`:""}
  </div>
  <article class="panel stack">
    <span class="qcat" style="color:var(--c-${CATS[q.c].b})">${esc(CATS[q.c].n)}${q[4]?` · <span class="srcpill">Cesgranrio · ${/^\d{4}$/.test(q[4])?"Transpetro "+q[4]:q[4]}</span>`:""}</span>
    <p class="qtext">${esc(q[1])}</p>
    <div class="opts">${optsHtml}</div>
    ${locked?`<div class="expl"><strong>${a!==null&&ord[a]===0?"Correto.":"Resposta: "+L[ord.indexOf(0)]+"."}</strong> ${esc(q[3])}</div>${ord[a]!==0?noteForm(qi):""}`:""}
    ${repBtn(qi)}
  </article>
  <div class="row" style="justify-content:space-between">
    <button class="btn ghost" ${k===0?"disabled":""} onclick="nav(-1)">Anterior</button>
    ${k<quiz.ids.length-1?`<button class="btn" onclick="nav(1)">Próxima</button>`:`<button class="btn" onclick="askFinish()">${train?"Ver resultado":"Encerrar e corrigir"}</button>`}
  </div>
  ${train?"":`<div class="panel stack qmap"><span class="muted">Mapa da prova <span class="kbd">· teclas A a E marcam, setas navegam</span></span><div class="qgrid">${quiz.ids.map((_,j)=>`<button class="qnum ${quiz.ans[j]!==null?"done":""} ${j===k?"cur":""}" onclick="jump(${j})">${j+1}</button>`).join("")}</div></div>`}
  <div class="row"><button class="btn ghost" onclick="askFinish()">${train?"Encerrar treino":"Entregar a prova agora"}</button></div>
  <div class="rule confirm ${quiz.confirm?"on":""} row" style="justify-content:space-between">
    <span>${quiz.ids.length-answered>0?`Ainda há ${quiz.ids.length-answered} questões em branco. Encerrar mesmo assim?`:"Encerrar e ver a correção?"}</span>
    <span class="row"><button class="btn ghost" onclick="quiz.confirm=false;vQuiz()">Voltar</button><button class="btn warn" onclick="finish()">Encerrar</button></span>
  </div>`;
  document.querySelectorAll(".opt").forEach(b=>b.onclick=()=>{
    if(locked) return;
    const p=+b.dataset.p;
    quiz.ans[k]=(!train&&quiz.ans[k]===p)?null:p;
    vQuiz();
  });
  if(quiz.confirm) $(".confirm").scrollIntoView({block:"nearest"});
}
function nav(d){quiz.i=Math.min(quiz.ids.length-1,Math.max(0,quiz.i+d));quiz.confirm=false;vQuiz();window.scrollTo({top:0});}
function jump(j){quiz.i=j;quiz.confirm=false;vQuiz();}
function askFinish(){quiz.confirm=true;vQuiz();}

/* ---------- Correção ---------- */
function finish(){
  if(!quiz||quiz.finished) return;
  if(tick) clearInterval(tick);
  quiz.finished=true; quiz.elapsed=Math.round((Date.now()-quiz.start)/1000);
  /* treino encerrado antes do fim: só as respondidas contam (em branco não vira erro) */
  if(quiz.mode==="train"){
    const keep=quiz.ids.map((_,k)=>k).filter(k=>quiz.ans[k]!==null);
    if(!keep.length){quiz=null;go("pratica");return;}
    if(keep.length<quiz.ids.length){["ids","ans","order","tq"].forEach(f=>{if(quiz[f]) quiz[f]=keep.map(k=>quiz[f][k]);});quiz.i=0;}
  }
  const byB={}, wrongSet=new Set(S.wrong); let score=0;
  quiz.ids.forEach((qi,k)=>{
    const q=Q[qi], a=quiz.ans[k], ok=a!==null&&quiz.order[k][a]===0, b=CATS[q.c].b;
    byB[b]=byB[b]||{c:0,t:0}; byB[b].t++; if(ok){byB[b].c++;score++;}
    S.stats[q.c]=S.stats[q.c]||{c:0,t:0}; S.stats[q.c].t++; if(ok) S.stats[q.c].c++; qlogAdd(q.c,ok);
    if(ok) wrongSet.delete(qi); else wrongSet.add(qi);
    if(a!==null||quiz.mode!=="train") srsUpdate(qi,ok,quiz.tq&&quiz.tq[k]?quiz.tq[k]/1000:0);
  });
  Object.keys(S.srs).forEach(q=>wrongSet.add(+q));
  S.wrong=[...wrongSet].filter(q=>S.srs[q]);
  quiz.ids.forEach((qi,k)=>{if(quiz.ans[k]!==null) S.seen[qi]=todayK();});
  addDay(quiz.ans.filter(x=>x!==null).length);
  quiz.byB=byB; quiz.score=score;
  const d=new Date();
  S.hist.unshift({date:d.toLocaleDateString("pt-BR"),label:quiz.label,score,total:quiz.ids.length,byB});
  S.hist=S.hist.slice(0,40); save();
  go("result");
}
function vResult(){
  if(!quiz){go("pratica");return;}
  const B=quiz.byB, g=k=>B[k]||{c:0,t:0};
  const esp=["adm","fin","log","info"].reduce((s,k)=>({c:s.c+g(k).c,t:s.t+g(k).t}),{c:0,t:0});
  const ger={c:g("port").c+g("mat").c,t:g("port").t+g("mat").t};
  const full=quiz.label==="Simulado completo"||(quiz.real&&quiz.ids.length===60);
  let cut="";
  if(full){
    const fails=[];
    if(esp.c<20) fails.push("menos de 20 nas específicas");
    if(ger.c<10) fails.push("menos de 10 nas gerais");
    if(g("port").c===0) fails.push("zero em Português");
    if(g("mat").c===0) fails.push("zero em Matemática");
    cut=fails.length?`<div class="rule"><span class="pill bad">Eliminada</span> Motivo: ${fails.join(", ")}.</div>`
      :`<div class="rule"><span class="pill ok">Passou dos cortes</span> Agora o que conta é a posição no ranking das específicas: quanto mais acima de 20, melhor.</div>`;
  }
  const cards=(full||quiz.mode==="exam")?`
    <div class="grid2">
      <div class="score"><span class="muted">Específicas</span><span class="v num">${esp.c}/${esp.t}</span>${full?`<span class="pill ${esp.c>=20?"ok":"bad"}">mínimo 20</span>`:""}</div>
      <div class="score"><span class="muted">Gerais</span><span class="v num">${ger.c}/${ger.t}</span>${full?`<span class="pill ${ger.c>=10?"ok":"bad"}">mínimo 10</span>`:""}</div>
      <div class="score"><span class="muted">Total</span><span class="v num">${quiz.score}/${quiz.ids.length}</span><span class="muted num">tempo ${fmt(quiz.elapsed)}</span></div>
    </div>`:`<div class="score"><span class="muted">Acertos</span><span class="v num">${quiz.score}/${quiz.ids.length}</span></div>`;
  const blocks=Object.keys(BLOCKS).filter(k=>B[k]).map(k=>bar(BLOCKS[k],B[k].c,B[k].t)).join("");
  const rev=quiz.ids.map((qi,k)=>{
    const q=Q[qi], a=quiz.ans[k], ord=quiz.order[k], ok=a!==null&&ord[a]===0, ci=ord.indexOf(0);
    return `<details class="rev"><summary><span class="mark ${ok?"ok":"bad"}">${ok?"✓":"✗"}</span><span><b class="num">${k+1}.</b> ${esc(q[1].length>110?q[1].slice(0,110)+"…":q[1])}</span></summary>
      <div class="stack" style="margin-top:10px">
        <p class="qtext" style="font-size:16px">${esc(q[1])}</p>
        <p>Sua resposta: <b>${a===null?"em branco":L[a]+") "+esc(q[2][ord[a]])}</b></p>
        <p>Gabarito: <b>${L[ci]}) ${esc(q[2][0])}</b></p>
        <div class="expl">${esc(q[3])}</div>
        ${repBtn(qi)}
        ${ok?"":noteForm(qi)}
      </div></details>`;}).join("");
  $("#view").innerHTML=`
    <h2>Resultado · ${esc(quiz.label)}</h2>
    ${cut}${cards}
    ${quiz.real&&quiz.cardDiff?`<div class="rule"><span class="pill bad">${quiz.cardDiff}</span> ${quiz.cardDiff===1?"questão foi marcada":"questões foram marcadas"} no caderno com uma letra diferente da do cartão. Vale o cartão: confira com calma antes de entregar.</div>`:""}
    <div class="panel stack"><h3>Por bloco</h3>${blocks}</div>
    <div class="row"><button class="btn" onclick="quiz=null;go('pratica')">Praticar de novo</button>${S.wrong.length?`<button class="btn ghost" onclick="startWrong()">Revisar erradas (${S.wrong.length})</button>`:""}</div>
    <h3>Correção comentada</h3>
    <div class="stack">${rev}</div>`;
}
function bar(name,c,t){const p=t?Math.round(c/t*100):0;return `<div class="bar"><span style="min-width:0">${esc(name)}</span><div class="track"><div class="fill ${p<50?"low":p<70?"mid":""}" style="width:${p}%"></div></div><span class="num" style="text-align:right">${p}%</span></div>`;}

/* ---------- Cronograma ---------- */
function vCrono(){
  const segs=PLAN.map(w=>{const n=w.tasks.length,d=w.tasks.filter((_,i)=>S.plan[w.id+"-"+i]).length;return `<div class="seg"><i style="width:${d/n*100}%"></i></div>`;}).join("");
  const total=PLAN.reduce((s,w)=>s+w.tasks.length,0), done=Object.values(S.plan).filter(Boolean).length;
  $("#view").innerHTML=`
  <div class="stack">
    <h2>Cronograma até 06/12</h2>
    <p class="muted">Pensado para cerca de 2 h nos dias úteis e 4 h no fim de semana. Cada semana fecha com prática no app. Marque o que concluir.</p>
  </div>
  <div class="panel stack">
    <div class="row" style="justify-content:space-between"><strong>Progresso</strong><span class="num">${done}/${total} tarefas</span></div>
    <div class="pipe">${segs}</div><div class="pipe-lbl">${PLAN.map(w=>`<span>${w.t.replace("Semana ","S")}</span>`).join("")}</div>
  </div>
  ${PLAN.map(w=>`<section class="panel week">
    <header><h3>${w.t} · ${esc(w.f)}</h3><span class="muted num">${w.d}</span></header>
    <div>${w.tasks.map((t,i)=>{const id=w.id+"-"+i,ck=!!S.plan[id];return `<div class="task ${ck?"done":""}"><input type="checkbox" id="${id}" ${ck?"checked":""}><label for="${id}">${esc(t[0])} <span class="tchip">${t[1]}</span></label></div>`;}).join("")}</div>
  </section>`).join("")}`;
  document.querySelectorAll(".task input").forEach(c=>c.onchange=()=>{S.plan[c.id]=c.checked;save();vCronoKeep();});
}
function vCronoKeep(){const y=window.scrollY;vCrono();window.scrollTo({top:y});}

/* ---------- Desempenho ---------- */
function vStats(){
  const cats=Object.keys(CATS).filter(k=>S.stats[k]);
  const rows=cats.sort((a,b)=>S.stats[a].c/S.stats[a].t-S.stats[b].c/S.stats[b].t).map(k=>bar(CATS[k].n+` (${S.stats[k].c}/${S.stats[k].t})`,S.stats[k].c,S.stats[k].t)).join("");
  $("#view").innerHTML=`
  <h2>Desempenho</h2>
  ${forecastPanel()}
  ${cats.length?`<div class="panel stack"><h3>Acerto por assunto</h3><p class="muted">Do mais fraco para o mais forte. Os primeiros da lista são a prioridade da semana.</p>${rows}</div>
  <div class="panel stack"><h3>Histórico</h3><div class="tscroll"><table><thead><tr><th>Data</th><th>Modo</th><th>Acertos</th></tr></thead><tbody>
  ${S.hist.map(h=>`<tr><td class="num">${h.date}</td><td>${esc(h.label)}</td><td class="num">${h.score}/${h.total}</td></tr>`).join("")}</tbody></table></div></div>
  <div class="row"><button class="btn ghost" id="rst">Apagar estatísticas</button><span id="rstc" hidden class="row"><span>Apagar histórico e erros salvos?</span><button class="btn warn" id="rsty">Apagar</button></span></div>`
  :`<div class="panel stack"><h3>Nenhum resultado ainda</h3><p class="muted">Faça um treino ou um simulado e o acerto por assunto aparece aqui, ordenado do mais fraco para o mais forte.</p><div><button class="btn" onclick="go('pratica')">Ir para Praticar</button></div></div>`}`;
  const r=$("#rst"); if(r){r.onclick=()=>{$("#rstc").hidden=false;}; $("#rsty").onclick=()=>{S.hist=[];S.stats={};S.wrong=[];save();vStats();};}
}

/* ---------- Conteúdos ---------- */
let topicCur=null;
const md=s=>esc(s).replace(/\*\*(.+?)\*\*/g,"<b>$1</b>").replace(/(^|\. )! /g,'$1<span class="tchip">Pegadinha</span> ');
function pct(st){return st&&st.t?Math.round(st.c/st.t*100):null;}
function vCont(){
  const read=S.read||{}, keys=Object.keys(CATS).filter(k=>RES[k]);
  const nRead=keys.filter(k=>read[k]).length;
  const groups=Object.entries(BLOCKS).map(([b,bn])=>{
    const items=keys.filter(k=>CATS[k].b===b).map(k=>{
      const p=pct(S.stats[k]);
      return `<button class="topic" onclick="openTopic('${k}')"><span class="tname">${esc(CATS[k].n)}</span><span class="tmeta">${read[k]?'<span class="pill ok">lido</span>':'<span class="pill">não lido</span>'}${p!==null?`<span class="pill ${p<50?"bad":p<70?"mid":"ok"}">${p}% de acerto</span>`:""}</span></button>`;
    }).join("");
    return `<section class="stack" style="--bc:var(--c-${b})"><h3 class="bh">${esc(bn)}</h3><div class="topics">${items}</div></section>`;
  }).join("");
  $("#view").innerHTML=`
  <div class="stack"><h2>Conteúdos</h2><p class="muted">Resumo de cada tópico do edital com as pegadinhas mais cobradas. Leia, marque como lido e treine o assunto em seguida.</p>
  <div class="row"><button class="btn ghost sm" onclick="document.getElementById('baseSec').scrollIntoView({behavior:'smooth'})">Ir para a Revisão da escola (${BASE.length} lições)</button></div></div>
  <div class="panel stack"><div class="row" style="justify-content:space-between"><strong>Leitura</strong><span class="num">${nRead}/${keys.length} assuntos</span></div><div class="track"><div class="fill" style="width:${nRead/keys.length*100}%"></div></div></div>
  ${groups}
  <div id="baseSec"></div>${baseList()}`;
}
function openTopic(k){topicCur=k;go("topic");}
function vTopic(){
  const k=topicCur; if(!k||!RES[k]){go("cont");return;}
  const keys=Object.keys(CATS).filter(c=>RES[c]), i=keys.indexOf(k);
  const nQ=QV().filter(q=>q.c===k).length, nF=FC.filter(f=>f[0]===k).length, read=!!(S.read||{})[k];
  $("#view").innerHTML=`
  <div><button class="btn ghost sm" onclick="go('cont')">← Todos os conteúdos</button></div>
  <div class="stack" style="gap:4px"><span class="qcat" style="color:var(--c-${CATS[k].b})">${esc(BLOCKS[CATS[k].b])}</span><h2>${esc(CATS[k].n)}</h2></div>
  ${RES[k].map(([t,items])=>`<section class="panel stack"><h3>${esc(t)}</h3><ul class="res">${items.map(x=>`<li${x.startsWith("! ")?' class="trap"':""}>${md(x)}</li>`).join("")}</ul></section>`).join("")}
  <label class="panel row readbox"><input type="checkbox" id="rd" ${read?"checked":""}><span>Li este resumo</span></label>
  <div class="row"><button class="btn" onclick="startTrainCat('${k}')" ${nQ?"":"disabled"}>Treinar questões (${nQ})</button><button class="btn ghost" onclick="startFc('${k}')" ${nF?"":"disabled"}>Flashcards (${nF})</button></div>
  <div class="row" style="justify-content:space-between">${i>0?`<button class="btn ghost sm" onclick="openTopic('${keys[i-1]}')">← ${esc(CATS[keys[i-1]].n)}</button>`:"<span></span>"}${i<keys.length-1?`<button class="btn ghost sm" onclick="openTopic('${keys[i+1]}')">${esc(CATS[keys[i+1]].n)} →</button>`:""}</div>`;
  $("#view").insertAdjacentHTML("beforeend",`<section class="panel stack"><h3>Para ler e assistir</h3>${linkList(k)}</section>`);
  $("#rd").onchange=e=>{S.read=S.read||{};S.read[k]=e.target.checked;save();};
}

/* ---------- Jogos ---------- */
S.gm=S.gm||{}; S.fcl=S.fcl||{};
const isEsp=c=>!["port","mat"].includes(CATS[c].b);
function inSel(v,c){return v==="all"||(v==="esp"&&isEsp(c))||(v.startsWith("b:")&&CATS[c].b===v.slice(2))||v===c;}
function selLabel(v){return v==="all"?"Todos os assuntos":v==="esp"?"Só específicas":v.startsWith("b:")?BLOCKS[v.slice(2)]:CATS[v].n;}
function gameSel(id,def){
  const o=(v,t)=>`<option value="${v}" ${v===def?"selected":""}>${esc(t)}</option>`;
  return `<select id="${id}">${o("esp","Só específicas")}${o("all","Todos os assuntos")}${Object.entries(BLOCKS).map(([k,v])=>o("b:"+k,"Bloco: "+v)).join("")}${Object.entries(CATS).map(([k,v])=>o(k,v.n)).join("")}</select>`;
}
function vJogos(){
  const g=S.gm, known=Object.values(S.fcl).filter(x=>x>=2).length;
  $("#view").innerHTML=`
  <div class="stack"><h2>Jogos</h2><p class="muted">Rodadas curtas para fixar conceitos, siglas, prazos e fórmulas. Bons para o celular, no ônibus ou no intervalo.</p></div>
  <div class="grid2">
    <div class="panel mode"><span class="tag">${known} de ${FC.length} dominados</span><h3>Flashcards</h3><p class="muted">Veja o conceito, tente lembrar e vire o cartão. Os que você não sabia voltam primeiro na próxima vez.</p>
      <label class="muted" for="selFc">Baralho</label>${gameSel("selFc",g.lastFc||"esp")}
      <button class="btn" onclick="startFc()">Começar</button></div>
    <div class="panel mode"><span class="tag">90 segundos</span><h3>Verdadeiro ou falso relâmpago</h3><p class="muted">Responda o máximo de afirmações antes do tempo acabar. No fim, veja a correção de cada erro.</p>
      <label class="muted" for="selVf">Assuntos</label>${gameSel("selVf",g.lastVf||"esp")}
      <button class="btn" onclick="startVf()">Jogar</button>${g.vfBest?`<span class="muted num">Recorde: ${g.vfBest} acertos</span>`:""}</div>
    <div class="panel mode"><span class="tag">6 pares</span><h3>Associação</h3><p class="muted">Ligue cada termo à sua definição no menor tempo possível. Cada erro soma 5 segundos.</p>
      <label class="muted" for="selMt">Assuntos</label>${gameSel("selMt",g.lastMt||"esp")}
      <button class="btn" onclick="startMatch()">Jogar</button>${g.mtBest?`<span class="muted num">Recorde: ${fmt(g.mtBest)}</span>`:""}</div>
  </div>`;
}

/* Flashcards */
let fc=null;
function startFc(v){
  const sel=v||$("#selFc").value; if(!v){S.gm.lastFc=sel;save();}
  const ids=shuffle(FC.map((f,i)=>i).filter(i=>inSel(sel,FC[i][0])));
  ids.sort((a,b)=>(S.fcl[FC[a][1]]||0)-(S.fcl[FC[b][1]]||0));
  fc={ids:ids.slice(0,20),i:0,flip:false,ok:0,miss:[],label:selLabel(sel)};
  go("fc");
}
function vFc(){
  if(!fc){go("jogos");return;}
  if(fc.i>=fc.ids.length){
    $("#view").innerHTML=`
    <h2>Flashcards · ${esc(fc.label)}</h2>
    <div class="score"><span class="muted">Você sabia</span><span class="v num">${fc.ok}/${fc.ids.length}</span></div>
    ${fc.miss.length?`<div class="panel stack"><h3>Para rever</h3>${fc.miss.map(i=>`<div class="task"><span><b>${esc(FC[i][1])}</b>: ${esc(FC[i][2])}</span></div>`).join("")}</div>`:`<div class="rule">Acertou todos. Tente outro baralho ou um treino de questões deste assunto.</div>`}
    <div class="row">${fc.miss.length?`<button class="btn" onclick="fc={ids:shuffle([...fc.miss]),i:0,flip:false,ok:0,miss:[],label:fc.label};vFc()">Repetir os ${fc.miss.length} que errei</button>`:""}<button class="btn ghost" onclick="fc=null;go('jogos')">Voltar aos jogos</button></div>`;
    return;
  }
  const f=FC[fc.ids[fc.i]];
  $("#view").innerHTML=`
  <div class="qhead"><div class="stack" style="gap:2px"><strong>Flashcards · ${esc(fc.label)}</strong><span class="muted num">Cartão ${fc.i+1} de ${fc.ids.length} · ${fc.ok} certos</span></div><button class="btn ghost sm" onclick="fc.i=fc.ids.length;vFc()">Encerrar</button></div>
  <div class="tbar"><i style="width:${fc.i/fc.ids.length*100}%"></i></div>
  <span class="qcat">${esc(CATS[f[0]].n)}</span>
  <button class="flash ${fc.flip?"back":""}" id="card" aria-live="polite">${esc(fc.flip?f[2]:f[1])}</button>
  ${fc.flip?`<div class="vfbtns"><button class="btn badb" onclick="fcAns(false)">Não sabia</button><button class="btn okb" onclick="fcAns(true)">Sabia</button></div>`:`<p class="muted" style="text-align:center">Toque no cartão para ver a resposta</p>`}`;
  $("#card").onclick=()=>{fc.flip=!fc.flip;vFc();};
}
function fcAns(ok){
  const id=fc.ids[fc.i], key=FC[id][1];
  S.fcl[key]=ok?Math.min((S.fcl[key]||0)+1,5):0;
  if(ok) fc.ok++; else fc.miss.push(id);
  fc.i++; fc.flip=false; save(); vFc();
}

/* Verdadeiro ou falso: afirmações montadas a partir do banco (enunciado + alternativa certa ou errada) */
function vfp(){return QI().filter(i=>{if(Q[i][4]) return false;const s=Q[i][1].trim();return !/NÃO|Assinale|Leia|Está corret|Está de acordo|respectivamente/.test(s)&&!/[.?:]$/.test(s);});}
let vf=null, gtick=null;
const VF_T=90;
function startVf(){
  const sel=$("#selVf").value; S.gm.lastVf=sel; save();
  const pool=vfp().filter(i=>inSel(sel,Q[i].c));
  if(pool.length<4){$("#selVf").insertAdjacentHTML("afterend",`<span class="pill bad">Poucas afirmações neste assunto. Escolha um bloco.</span>`);return;}
  vf={pool:shuffle([...pool]),k:0,label:selLabel(sel),end:Date.now()+VF_T*1000,ok:0,bad:0,streak:0,maxStreak:0,log:[],cur:null,fb:null,done:false};
  vfNext(); go("vf");
  gtick=setInterval(vfTick,250);
}
function vfNext(){
  if(vf.k>=vf.pool.length){shuffle(vf.pool);vf.k=0;}
  const qi=vf.pool[vf.k++], q=Q[qi], truth=Math.random()<.5;
  const opt=truth?q[2][0]:q[2][1+Math.floor(Math.random()*4)];
  vf.cur={qi,truth,text:q[1].trim()+" "+opt+"."};
}
function vfLeft(){return Math.max(0,(vf.end-Date.now())/1000);}
function vfTick(){
  if(!vf||vf.done){clearInterval(gtick);gtick=null;return;}
  const r=vfLeft(), b=$("#vfbar"), t=$("#vft");
  if(b) b.style.width=(r/VF_T*100)+"%";
  if(t) t.textContent=Math.ceil(r)+" s";
  if(r<=0&&!vf.fb) vfEnd();
}
function vfAns(a){
  if(!vf||vf.done||vf.fb) return;
  const ok=a===vf.cur.truth;
  if(ok){vf.ok++;vf.streak++;vf.maxStreak=Math.max(vf.maxStreak,vf.streak);}else{vf.bad++;vf.streak=0;}
  vf.log.push({...vf.cur,a,ok}); addDay(1); vf.fb=ok?"ok":"bad"; vVf();
  setTimeout(()=>{if(!vf||vf.done) return; vf.fb=null; if(vfLeft()<=0){vfEnd();return;} vfNext(); vVf();},ok?450:1100);
}
function vVf(){
  if(!vf){go("jogos");return;}
  if(vf.done){vVfEnd();return;}
  const r=vfLeft(), c=vf.cur;
  $("#view").innerHTML=`
  <div class="qhead"><div class="stack" style="gap:2px"><strong>V ou F · ${esc(vf.label)}</strong><span class="muted num">${vf.ok} acertos · ${vf.bad} erros${vf.streak>=3?` · sequência de ${vf.streak}`:""}</span></div><span class="timer num" id="vft">${Math.ceil(r)} s</span></div>
  <div class="tbar"><i id="vfbar" style="width:${r/VF_T*100}%"></i></div>
  <span class="qcat">${esc(CATS[Q[c.qi].c].n)}</span>
  <div class="panel vfcard ${vf.fb||""}"><p>${esc(c.text)}</p></div>
  ${vf.fb==="bad"?`<p class="muted">Era <b>${c.truth?"verdadeira":"falsa"}</b>. A correção completa aparece no fim.</p>`:""}
  <div class="vfbtns"><button class="btn badb" onclick="vfAns(false)">Falso</button><button class="btn okb" onclick="vfAns(true)">Verdadeiro</button></div>
  <p class="muted" style="text-align:center">No teclado: F ou ← para falso, V ou → para verdadeiro</p>`;
}
function vfEnd(){
  if(!vf||vf.done) return;
  vf.done=true; if(gtick){clearInterval(gtick);gtick=null;}
  vf.record=vf.ok>(S.gm.vfBest||0); if(vf.record) S.gm.vfBest=vf.ok;
  save(); vVf();
}
function vVfEnd(){
  const n=vf.ok+vf.bad, wrong=vf.log.filter(x=>!x.ok);
  $("#view").innerHTML=`
  <h2>Fim de jogo · V ou F</h2>
  ${vf.record?`<div class="rule"><span class="pill ok">Novo recorde</span> ${vf.ok} acertos em ${VF_T} segundos.</div>`:""}
  <div class="grid2">
    <div class="score"><span class="muted">Acertos</span><span class="v num">${vf.ok}</span></div>
    <div class="score"><span class="muted">Aproveitamento</span><span class="v num">${n?Math.round(vf.ok/n*100):0}%</span><span class="muted num">${n} respondidas</span></div>
    <div class="score"><span class="muted">Maior sequência</span><span class="v num">${vf.maxStreak}</span><span class="muted num">recorde geral: ${S.gm.vfBest||0}</span></div>
  </div>
  <div class="row"><button class="btn" onclick="go('jogos')">Jogar de novo</button></div>
  ${wrong.length?`<h3>Correção dos erros</h3><div class="stack">${wrong.map(x=>{const q=Q[x.qi];return `<div class="panel stack"><p>${esc(x.text)}</p><p><span class="pill ${x.truth?"ok":"bad"}">${x.truth?"Verdadeira":"Falsa"}</span> você marcou ${x.a?"verdadeira":"falsa"}.</p>${x.truth?"":`<p>Correto: <b>${esc(q[1].trim()+" "+q[2][0]+".")}</b></p>`}<div class="expl">${esc(q[3])}</div></div>`;}).join("")}</div>`:""}`;
}
document.addEventListener("keydown",e=>{
  if(current!=="vf"||!vf||vf.done||e.ctrlKey||e.metaKey||e.altKey) return;
  const k=e.key.toLowerCase();
  if(k==="v"||k==="arrowright"){e.preventDefault();vfAns(true);}
  else if(k==="f"||k==="arrowleft"){e.preventDefault();vfAns(false);}
});

/* Associação */
let mt=null;
function startMatch(){
  const sel=$("#selMt").value; S.gm.lastMt=sel; save();
  const pool=shuffle(FC.map((f,i)=>i).filter(i=>inSel(sel,FC[i][0]))).slice(0,6);
  if(pool.length<4){$("#selMt").insertAdjacentHTML("afterend",`<span class="pill bad">Poucos pares neste assunto. Escolha um bloco.</span>`);return;}
  mt={pairs:pool,left:shuffle([...pool]),right:shuffle([...pool]),pl:null,pr:null,done:[],err:0,errIds:null,start:Date.now(),label:selLabel(sel),fin:null};
  go("match");
}
function vMatch(){
  if(!mt){go("jogos");return;}
  if(mt.fin){
    $("#view").innerHTML=`
    <h2>Fim de jogo · Associação</h2>
    ${mt.record?`<div class="rule"><span class="pill ok">Novo recorde</span> ${fmt(mt.fin)}</div>`:""}
    <div class="grid2">
      <div class="score"><span class="muted">Tempo final</span><span class="v num">${fmt(mt.fin)}</span><span class="muted num">inclui ${mt.err*5} s de penalidade</span></div>
      <div class="score"><span class="muted">Erros</span><span class="v num">${mt.err}</span><span class="muted num">recorde: ${fmt(S.gm.mtBest)}</span></div>
    </div>
    <div class="panel stack"><h3>Os pares desta rodada</h3>${mt.pairs.map(i=>`<div class="task"><span><b>${esc(FC[i][1])}</b>: ${esc(FC[i][2])}</span></div>`).join("")}</div>
    <div class="row"><button class="btn" onclick="go('jogos')">Jogar de novo</button></div>`;
    return;
  }
  const cls=(id,side)=>{
    let c="mitem"+(side==="l"?" term":"");
    if(mt.done.includes(id)) c+=" done";
    else if(mt.errIds&&mt.errIds[side]===id) c+=" err";
    else if((side==="l"?mt.pl:mt.pr)===id) c+=" sel";
    return c;
  };
  $("#view").innerHTML=`
  <div class="qhead"><div class="stack" style="gap:2px"><strong>Associação · ${esc(mt.label)}</strong><span class="muted num">${mt.done.length}/${mt.pairs.length} pares · ${mt.err} erros</span></div><span class="timer num" id="mtt">${fmt(Math.round((Date.now()-mt.start)/1000))}</span></div>
  <p class="muted">Toque em um termo e depois na definição correspondente.</p>
  <div class="mgrid">
    <div class="mcol">${mt.left.map(id=>`<button class="${cls(id,"l")}" data-s="l" data-id="${id}" ${mt.done.includes(id)?"disabled":""}>${esc(FC[id][1])}</button>`).join("")}</div>
    <div class="mcol">${mt.right.map(id=>`<button class="${cls(id,"r")}" data-s="r" data-id="${id}" ${mt.done.includes(id)?"disabled":""}>${esc(FC[id][2])}</button>`).join("")}</div>
  </div>`;
  document.querySelectorAll(".mitem").forEach(b=>b.onclick=()=>mtPick(b.dataset.s,+b.dataset.id));
  if(!gtick) gtick=setInterval(()=>{const t=$("#mtt"); if(!mt||mt.fin||!t){clearInterval(gtick);gtick=null;return;} t.textContent=fmt(Math.round((Date.now()-mt.start)/1000));},1000);
}
function mtPick(side,id){
  if(mt.errIds||mt.done.includes(id)) return;
  if(side==="l") mt.pl=mt.pl===id?null:id; else mt.pr=mt.pr===id?null:id;
  if(mt.pl!==null&&mt.pr!==null){
    if(mt.pl===mt.pr){mt.done.push(mt.pl);mt.pl=mt.pr=null;}
    else{mt.err++;mt.errIds={l:mt.pl,r:mt.pr};mt.pl=mt.pr=null;setTimeout(()=>{if(mt){mt.errIds=null;if(current==="match")vMatch();}},650);}
  }
  if(mt.done.length===mt.pairs.length){
    mt.fin=Math.round((Date.now()-mt.start)/1000)+mt.err*5;
    mt.record=!S.gm.mtBest||mt.fin<S.gm.mtBest; if(mt.record) S.gm.mtBest=mt.fin;
    if(gtick){clearInterval(gtick);gtick=null;} save();
  }
  vMatch();
}

/* ---------- Tema claro / escuro (preferência deste aparelho) ---------- */
const THEMES=[["auto","Tema: automático"],["light","Tema: claro"],["dark","Tema: escuro"]];
let theme="auto";
try{theme=localStorage.getItem("transpetro26-theme")||"auto";}catch(e){}
function applyTheme(){
  if(theme==="auto") delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme=theme;
  const b=$("#themeBtn"); if(b){const t=THEMES.find(x=>x[0]===theme); b.textContent=t[1]; b.setAttribute("aria-label",t[1]+". Toque para trocar");}
}
$("#themeBtn").onclick=()=>{const i=THEMES.findIndex(x=>x[0]===theme); theme=THEMES[(i+1)%3][0]; try{localStorage.setItem("transpetro26-theme",theme);}catch(e){} applyTheme();};
applyTheme();

/* ---------- Meta diária e sequência de dias ---------- */
S.days=S.days||{}; S.seen=S.seen||{}; S.base=S.base||{}; S.goal=S.goal||30;
const dkey=d=>d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
function addDay(n){if(!n) return; const k=dkey(new Date()); S.days[k]=(S.days[k]||0)+n; save();}
function streak(){
  let d=new Date(), n=0;
  if(!S.days[dkey(d)]) d.setDate(d.getDate()-1);
  while(S.days[dkey(d)]){n++; d.setDate(d.getDate()-1);}
  return n;
}

/* ---------- Revisão da escola ---------- */
let baseCur=null, baseAns={};
function baseList(){
  const done=BASE.filter(l=>S.base[l.id]).length;
  const grp=a=>BASE.filter(l=>l.a===a).map(l=>`<button class="topic" onclick="openBase('${l.id}')"><span class="tname">${esc(l.t)}</span><span class="tmeta">${S.base[l.id]?'<span class="pill ok">concluída</span>':'<span class="pill">não concluída</span>'}</span></button>`).join("");
  return `<section class="stack">
    <div class="row" style="justify-content:space-between"><h2>Revisão da escola</h2><span class="muted num">${done}/${BASE.length} lições</span></div>
    <p class="muted">A base de Português e Matemática que cai nas 20 questões gerais (e ajuda nas contas das específicas). Cada lição tem explicação, exemplos resolvidos e um teste rápido.</p>
    <h3>Matemática</h3><div class="topics">${grp("Matemática")}</div>
    <h3>Português</h3><div class="topics">${grp("Português")}</div>
  </section>`;
}
function openBase(id){baseCur=id; baseAns={}; go("base");}
function vBase(){
  const i=BASE.findIndex(l=>l.id===baseCur); if(i<0){go("cont");return;}
  const l=BASE[i];
  $("#view").innerHTML=`
  <div><button class="btn ghost sm" onclick="go('cont')">← Conteúdos</button></div>
  <div class="stack" style="gap:4px"><span class="qcat">Revisão da escola · ${esc(l.a)}</span><h2>${esc(l.t)}</h2></div>
  <section class="panel stack"><h3>Explicação</h3><ul class="res">${l.e.map(x=>`<li>${md(x)}</li>`).join("")}</ul></section>
  <section class="panel stack"><h3>Exemplos resolvidos</h3>${l.x.map(([p,r])=>`<details class="rev"><summary><span class="mark">?</span><span>${md(p)}</span></summary><div class="expl" style="margin-top:10px">${md(r)}</div></details>`).join("")}</section>
  <section class="panel stack"><h3>Teste rápido</h3>${l.q.map((q,k)=>{
    const ord=baseAns["o"+k]||(baseAns["o"+k]=shuffle([0,1,2,3,4])), a=baseAns[k];
    return `<div class="stack"><p><b class="num">${k+1}.</b> ${esc(q[0])}</p><div class="opts">${ord.map((oi,pos)=>{let c="opt"; if(a!==undefined){c+=" locked"; if(oi===0)c+=" right"; else if(a===pos)c+=" wrong";} return `<button class="${c}" data-k="${k}" data-p="${pos}"><span class="l">${L[pos]}</span><span>${esc(q[1][oi])}</span></button>`;}).join("")}</div>${a!==undefined?`<div class="expl"><b>${ord[a]===0?"Correto.":"Resposta: "+L[ord.indexOf(0)]+"."}</b> ${esc(q[2])}</div>`:""}</div>`;}).join("")}</section>
  <label class="panel row readbox"><input type="checkbox" id="bd" ${S.base[l.id]?"checked":""}><span>Concluí esta lição</span></label>
  <div class="row" style="justify-content:space-between">${i>0?`<button class="btn ghost sm" onclick="openBase('${BASE[i-1].id}')">← ${esc(BASE[i-1].t)}</button>`:"<span></span>"}${i<BASE.length-1?`<button class="btn ghost sm" onclick="openBase('${BASE[i+1].id}')">${esc(BASE[i+1].t)} →</button>`:""}</div>`;
  document.querySelectorAll(".opt[data-k]").forEach(b=>b.onclick=()=>{
    const k=+b.dataset.k; if(baseAns[k]!==undefined) return;
    baseAns[k]=+b.dataset.p; addDay(1);
    if(l.q.every((_,j)=>baseAns[j]!==undefined)&&!S.base[l.id]){S.base[l.id]=true;save();}
    const y=window.scrollY; vBase(); window.scrollTo({top:y});
  });
  $("#bd").onchange=e=>{S.base[l.id]=e.target.checked;save();};
}

/* =====================================================================
   v6: Orientação (plano do dia + checklist + lembretes), revisão espaçada,
   caderno de erros, previsão de nota, prova real, links e sincronização
   ===================================================================== */
const todayK=()=>dkey(new Date());
const addDaysK=n=>{const d=new Date();d.setDate(d.getDate()+n);return dkey(d);};
const kDate=k=>new Date(k+"T12:00:00");
const fmtK=k=>k.slice(8,10)+"/"+k.slice(5,7);
const ESP_B=["adm","fin","log","info"];
function initState(){
  S.daily=S.daily||{}; S.srs=S.srs||{}; S.notes=S.notes||{}; S.rem=S.rem||{on:false,h:"19:00"};
  S.days=S.days||{}; S.seen=S.seen||{}; S.base=S.base||{}; S.goal=S.goal||30;
  (S.wrong||[]).forEach(qi=>{if(!S.srs[qi]) S.srs[qi]={b:0,d:todayK()};});
  S.st=Object.assign({h:"19:00",w:"09:00"},S.st||{}); S.fold=S.fold||{}; S.gm=S.gm||{}; S.ct=S.ct||{}; S.fcl=S.fcl||{};
  if(QID) remapState(S);
}
initState();

/* ---------- Revisão espaçada (1, 3, 7 e 15 dias) ---------- */
const SRS_INT=[1,3,7,15];
function srsDue(){const k=todayK();return Object.keys(S.srs).filter(q=>S.srs[q].d<=k&&Q[q]).map(Number);}
function srsUpdate(qi,ok){
  const s=S.srs[qi];
  if(!ok){S.srs[qi]={b:0,d:addDaysK(1)};return;}
  if(!s||s.d>todayK()) return;
  s.b++;
  if(s.b>=SRS_INT.length) delete S.srs[qi]; else s.d=addDaysK(SRS_INT[s.b]);
}

/* ---------- Fases e plano do dia ---------- */
const PHASES=[
 {id:"f1",t:"Diagnóstico",a:"2026-10-27",b:"2026-11-02",d:"Faça as 3 provas anteriores no app, uma a cada dois dias. Na aba Desempenho, anote os 5 assuntos com pior acerto: eles passam a ser a sua lista de prioridade."},
 {id:"f2",t:"Ataque aos pontos fracos",a:"2026-11-03",b:"2026-11-23",d:"Siga o cronograma com 60% do tempo nos 5 piores assuntos e 40% no resto. Mini simulado na quarta-feira e simulado completo todo domingo de manhã."},
 {id:"f3",t:"Ritmo de prova",a:"2026-11-24",b:"2026-12-03",d:"Dois simulados completos por semana (quarta e domingo), cronometrados e no horário da prova. Entre eles, caderno de erros, flashcards e os assuntos abaixo de 70%."},
 {id:"f4",t:"Descanso ativo",a:"2026-12-04",b:"2026-12-05",d:"Só resumos e caderno de erros, sem conteúdo novo nem simulado. Separe documento com foto, caneta preta de corpo transparente e o cartão de confirmação, e confira o trajeto."}
];
const PAST_DAYS={"2026-10-27":"2018","2026-10-29":"2012","2026-10-31":"2011"};
const WEEKCATS=[["2026-11-01","s1",["log","estoq"]],["2026-11-08","s2",["compras","contr"]],["2026-11-15","s3",["rh","sgi","patr","manut","ind"]],["2026-11-22","s4",["matfin","contab","fluxo","bp","transp","armaz","manus"]],["2026-11-29","s5",["info","lgpd"]],["2026-12-06","s6",null]];
function phaseOf(k){return PHASES.find(p=>k>=p.a&&k<=p.b)||(k<PHASES[0].a?PHASES[0]:null);}
function espCats(){return Object.keys(CATS).filter(isEsp);}
function weakCats(n){
  const sc=k=>{const s=S.stats[k];return s&&s.t>=3?s.c/s.t:.55;};
  return espCats().sort((a,b)=>sc(a)-sc(b)||a.localeCompare(b)).slice(0,n);
}
function weekCats(k){const w=WEEKCATS.find(x=>k<=x[0]);return (w&&w[2])||espCats();}
function dayPlan(k){
  const n=Math.round((kDate(k)-kDate("2026-10-27"))/864e5), wd=kDate(k).getDay(), ph=phaseOf(k);
  const weak=weakCats(5), m=(x,l)=>((x%l)+l)%l;
  const a=weak[m(n,weak.length)];
  const wk=weekCats(k).filter(x=>x!==a), b=wk.length?wk[m(n,wk.length)]:weak[m(n+1,weak.length)];
  const g=n%2?"mat":"port";
  let sp=null;
  if(ph&&ph.id==="f1"&&PAST_DAYS[k]) sp={t:"Prova anterior "+PAST_DAYS[k]+" completa (diagnóstico)",fn:`startPast('${PAST_DAYS[k]}')`};
  if(ph&&ph.id==="f2"&&wd===3) sp={t:"Mini simulado de quarta (20 questões)",fn:"startExam('mini')"};
  if(ph&&ph.id==="f2"&&wd===0) sp={t:"Simulado completo de domingo, no modo prova real",fn:"startReal('full')"};
  if(ph&&ph.id==="f3"&&(wd===0||wd===3)) sp={t:"Simulado completo cronometrado, no modo prova real e no horário da prova",fn:"startReal('full')"};
  return {k,n,ph,a,b,g,sp,rest:!!(ph&&ph.id==="f4"),exam:k==="2026-12-06"};
}
function dayItems(p){
  const it=[{id:"aq",t:"Aquecimento (10 min): revisão espaçada das erradas ou uma rodada de V ou F",act:"startWrong()",lbl:"Revisar"}];
  if(p.exam) return [{id:"prova",t:"Dia da prova: chegar 1 hora antes, com documento com foto e caneta preta de corpo transparente"}];
  if(p.rest){
    it.push({id:"res",t:"Reler os resumos dos assuntos mais fracos: "+weakCats(3).map(k=>CATS[k].n).join(", "),act:"go('vesp')",lbl:"Abrir"});
    it.push({id:"cad",t:"Reler o caderno de erros",act:"go('caderno')",lbl:"Abrir"});
    it.push({id:"sep",t:"Separar documento com foto, caneta preta de corpo transparente e cartão de confirmação; conferir o trajeto"});
    it.push({id:"sono",t:"Dormir de 7 a 8 horas"});
    return it;
  }
  if(p.sp) it.push({id:"sim",t:p.sp.t,act:p.sp.fn,lbl:"Começar"});
  it.push({id:"teo",t:`Teoria (25 min): resumo de ${CATS[p.a].n}. Depois feche e escreva de memória 3 a 5 pontos`,act:`openTopic('${p.a}')`,lbl:"Resumo"});
  it.push({id:"q1",t:`Questões (25 min): treino de ${CATS[p.a].n}`,act:`startTrainCat('${p.a}')`,lbl:"Treinar"});
  it.push({id:"q2",t:`Questões (25 min): treino de ${CATS[p.b].n}, para misturar temas`,act:`startTrainCat('${p.b}')`,lbl:"Treinar"});
  it.push({id:"ger",t:`Gerais: um treino de ${p.g==="port"?"Português":"Matemática"}`,act:`startTrainCat('${p.g}')`,lbl:"Treinar"});
  it.push({id:"cad",t:"Caderno de erros (10 min): anotar o motivo de cada erro e revisar as notas do dia",act:"go('caderno')",lbl:"Abrir"});
  it.push({id:"meta",t:`Meta diária: ${S.goal} questões respondidas`,auto:true});
  return it;
}
function itemDone(k,i){if(i.chk) return i.chk(k)||!!(S.daily[k]&&S.daily[k][i.id]);return i.auto?(S.days[k]||0)>=S.goal:!!(S.daily[k]&&S.daily[k][i.id]);}
function dayScore(k){const its=dayItems(dayPlan(k));return its.filter(i=>itemDone(k,i)).length/its.length;}

/* ---------- Lembretes ---------- */
function toast(t,b,goHoje){
  let el=$("#toast"); if(!el){el=document.createElement("div");el.id="toast";el.setAttribute("role","status");document.body.appendChild(el);}
  el.innerHTML=`<strong>${esc(t)}</strong><span>${esc(b)}</span>${goHoje?`<button class="btn sm" onclick="this.parentNode.classList.remove('on');go('guia')">Ver o dia</button>`:""}<button class="btn ghost sm" onclick="this.parentNode.classList.remove('on')">Fechar</button>`;
  el.classList.add("on");
}
function notify(t,b){
  toast(t,b,true);
  try{ if("Notification" in window&&Notification.permission==="granted") new Notification(t,{body:b}); }catch(e){}
}
function remCheck(){
  if(!S.rem.on) return;
  const k=todayK(); if(S.rem.last===k) return;
  const now=new Date(), [h,m]=S.rem.h.split(":").map(Number);
  if(now.getHours()*60+now.getMinutes()<h*60+m) return;
  const its=dayItems(dayPlan(k)), left=its.filter(i=>!itemDone(k,i)).length, due=srsDue().length;
  S.rem.last=k; save();
  if(left||due) notify("Hora de estudar",`${left} ${left===1?"etapa":"etapas"} da programação de hoje em aberto${due?` e ${due} ${due===1?"questão":"questões"} para revisar`:""}.`);
}
setInterval(remCheck,60000); setTimeout(remCheck,4000);
async function remEnable(on){
  S.rem.on=on; S.rem.last=null;
  if(on&&"Notification" in window&&Notification.permission==="default"){try{await Notification.requestPermission();}catch(e){}}
  save(); vConfigKeep();
}
function notifState(){
  if(window.claude&&window.claude.use) return "Aqui no claude.ai o aviso aparece dentro do app, com ele aberto.";
  if(!("Notification" in window)) return "Este navegador não mostra notificações do sistema; o aviso aparece dentro do app.";
  if(Notification.permission==="granted") return "Notificações do navegador permitidas.";
  if(Notification.permission==="denied") return "O navegador bloqueou as notificações; o aviso aparece dentro do app.";
  return "Ao ativar, o navegador pode pedir permissão para notificar.";
}

function vGuiaKeep(){const y=window.scrollY;vGuia();window.scrollTo({top:y});}

/* ---------- Caderno de erros ---------- */
const REASONS={nao:"Não sabia",conf:"Confundi conceitos",rap:"Li rápido / pegadinha",conta:"Errei a conta"};
function noteForm(qi){
  const n=S.notes[qi]||{};
  return `<div class="note stack" data-qi="${qi}"><span class="muted">Caderno de erros: por que você errou?</span>
  <div class="row" style="gap:6px;flex-wrap:wrap">${Object.entries(REASONS).map(([k,v])=>`<button type="button" class="chipbtn ${n.r===k?"on":""}" data-r="${k}">${v}</button>`).join("")}</div>
  <textarea rows="2" placeholder="O que lembrar da próxima vez (opcional)">${esc(n.t||"")}</textarea>
  <div class="row"><button type="button" class="btn ghost sm nsave">Salvar no caderno</button><span class="muted nst">${S.notes[qi]?"Salvo no caderno":""}</span></div></div>`;
}
document.addEventListener("click",e=>{
  const b=e.target.closest(".note .chipbtn");
  if(b){b.parentNode.querySelectorAll(".chipbtn").forEach(x=>x.classList.remove("on"));b.classList.add("on");return;}
  const s=e.target.closest(".note .nsave"); if(!s) return;
  const box=s.closest(".note"), qi=+box.dataset.qi, on=box.querySelector(".chipbtn.on");
  if(!on){box.querySelector(".nst").textContent="Escolha um motivo primeiro";return;}
  const old=S.notes[qi];
  S.notes[qi]={r:on.dataset.r,t:box.querySelector("textarea").value.trim(),d:old?old.d:todayK(),s:old?old.s:0,n:old?old.n:addDaysK(1)};
  save(); box.querySelector(".nst").textContent="Salvo no caderno";
});
let cadFilter="all";
function vCaderno(){
  const ids=Object.keys(S.notes).map(Number).filter(q=>Q[q]), k=todayK();
  const dueN=ids.filter(q=>S.notes[q].n&&S.notes[q].n<=k);
  const cnt=Object.keys(REASONS).map(r=>[r,ids.filter(q=>S.notes[q].r===r).length]);
  const list=(cadFilter==="all"?ids:ids.filter(q=>S.notes[q].r===cadFilter)).sort((a,b)=>String(S.notes[b].d||"").localeCompare(String(S.notes[a].d||"")));
  const card=(qi,rev)=>{const q=Q[qi],n=S.notes[qi];return `<details class="rev" ${rev?"open":""}><summary><span class="mark bad">✗</span><span>${esc(q[1].length>100?q[1].slice(0,100)+"…":q[1])}</span></summary>
    <div class="stack" style="margin-top:10px"><span class="qcat" style="color:var(--c-${CATS[q.c].b})">${esc(CATS[q.c].n)} · ${REASONS[n.r]}${n.d?" · anotada em "+fmtK(n.d):""}</span>
    <p class="qtext" style="font-size:16px">${esc(q[1])}</p><p>Gabarito: <b>${esc(q[2][0])}</b></p>
    ${n.t?`<div class="rule"><b>Sua nota:</b> ${esc(n.t)}</div>`:""}<div class="expl">${esc(q[3])}</div>
    <div class="row">${rev?`<button class="btn sm" onclick="noteRev(${qi})">Revisei</button>`:`<span class="muted">${n.n?"Próxima revisão em "+fmtK(n.n):"Revisões concluídas"}</span>`}<button class="btn ghost sm" onclick="noteDel(${qi})">Apagar</button></div></div></details>`;};
  $("#view").innerHTML=`
  <div><button class="btn ghost sm" onclick="go('pratica')">← Praticar</button></div>
  <div class="stack"><h2>Caderno de erros</h2><p class="muted">Cada erro anotado volta para revisão 1, 3, 7 e 15 dias depois. Para anotar, use o quadro que aparece abaixo de cada questão errada no treino e na correção.</p></div>
  ${ids.length?`<div class="panel stack"><h3>Por que você erra</h3>${cnt.map(([r,c])=>bar(REASONS[r]+` (${c})`,c,ids.length)).join("")}<p class="muted">Muitos “li rápido”: circule EXCETO e NÃO antes de ler as alternativas. Muitos “errei a conta”: refaça as contas à mão no treino de Matemática.</p></div>
  <section class="stack"><h3>Para revisar hoje (${dueN.length})</h3>${dueN.length?dueN.map(q=>card(q,true)).join(""):'<p class="muted">Nada para hoje.</p>'}</section>
  <section class="stack"><div class="row" style="justify-content:space-between"><h3>Todas as notas (${ids.length})</h3>
    <select id="cadF"><option value="all">Todos os motivos</option>${Object.entries(REASONS).map(([r,v])=>`<option value="${r}" ${cadFilter===r?"selected":""}>${v}</option>`).join("")}</select></div>
    ${list.map(q=>card(q,false)).join("")}</section>`
  :`<div class="panel stack"><h3>Caderno vazio</h3><p class="muted">Quando errar uma questão no treino ou no simulado, escolha o motivo do erro no quadro abaixo da explicação e salve. A nota aparece aqui.</p></div>`}`;
  const f=$("#cadF"); if(f) f.onchange=()=>{cadFilter=f.value;vCaderno();};
}
function noteRev(qi){const n=S.notes[qi];n.s=(n.s||0)+1;n.n=n.s>=SRS_INT.length?null:addDaysK(SRS_INT[n.s]);addDay(0);save();const y=window.scrollY;vCaderno();window.scrollTo({top:y});}
function noteDel(qi){delete S.notes[qi];save();const y=window.scrollY;vCaderno();window.scrollTo({top:y});}

/* ---------- Previsão de nota ---------- */
function parseBr(s){const m=/^(\d{2})\/(\d{2})\/(\d{4})/.exec(s||"");return m?new Date(+m[3],+m[2]-1,+m[1]):null;}
function espOf(h){let c=0,t=0;ESP_B.forEach(k=>{const b=h.byB&&h.byB[k];if(b){c+=b.c;t+=b.t;}});return {c,t};}
function forecastPanel(){
  const ex=S.hist.filter(h=>espOf(h).t>=8);
  if(!ex.length) return `<div class="panel stack"><h3>Previsão de nota</h3><p class="muted">Faça um simulado (ou um treino com pelo menos 8 questões específicas) para ver a projeção da sua nota nas 40 específicas.</p></div>`;
  const last=ex.slice(0,3), r=last.reduce((s,h)=>{const e=espOf(h);return s+e.c/e.t;},0)/last.length, proj=Math.round(r*40);
  const wk={}; ex.forEach(h=>{const d=parseBr(h.date); if(!d) return; const m=new Date(d); m.setDate(d.getDate()-((d.getDay()+6)%7)); const key=dkey(m); const e=espOf(h); wk[key]=wk[key]||{c:0,t:0}; wk[key].c+=e.c; wk[key].t+=e.t;});
  const weeks=Object.keys(wk).sort().slice(-6), pc=weeks.map(w=>Math.round(wk[w].c/wk[w].t*100));
  const stall=pc.length>=3&&pc[pc.length-1]<=pc[pc.length-2]&&pc[pc.length-2]<=pc[pc.length-3];
  const st=proj>=32?["ok","Na meta de classificação"]:proj>=20?["mid","Acima do corte, abaixo da meta"]:["bad","Abaixo do corte de 20"];
  return `<div class="panel stack"><h3>Previsão de nota</h3>
    <div class="grid2"><div class="score"><span class="muted">Projeção nas específicas</span><span class="v num">${proj}/40</span><span class="pill ${st[0]}">${st[1]}</span></div>
    <div class="score"><span class="muted">Base</span><span class="v num">${Math.round(r*100)}%</span><span class="muted">média dos últimos ${last.length} ${last.length===1?"resultado":"resultados"} com específicas</span></div></div>
    <p class="muted">Corte: 20 acertos. Meta de classificação: 32 ou mais (80%). Mire 85% nos simulados para chegar com folga.</p>
    <h3>Tendência por semana</h3>${weeks.map((w,i)=>bar("Semana de "+fmtK(w)+(i?(pc[i]>pc[i-1]?" ↑":pc[i]<pc[i-1]?" ↓":" ="):""),wk[w].c,wk[w].t)).join("")}
    ${stall?`<div class="rule"><span class="pill bad">Atenção</span> O acerto nas específicas não sobe há duas semanas. Mude o método nos assuntos mais fracos: mais teoria ou mais questões comentadas, não só mais horas.</div>`:""}</div>`;
}

/* ---------- Modo prova real (caderno + cartão-resposta) ---------- */
let rq=null;
function startReal(src){
  let ids;
  if(src==="full"){const n={port:10,mat:10,adm:9,fin:9,log:15,info:7};ids=[].concat(...Object.keys(n).map(b=>pickBlock(b,n[b])));}
  else{const ord=["port","mat"];ids=QI().filter(i=>Q[i][4]===src);const g=i=>{const x=ord.indexOf(Q[i].c);return x<0?2:x;};ids.sort((a,b)=>g(a)-g(b)||Q[a][5]-Q[b][5]);}
  if(tick) clearInterval(tick);
  rq={ids,src,order:ids.map(()=>shuffle([0,1,2,3,4])),cad:ids.map(()=>null),card:ids.map(()=>null),flag:ids.map(()=>false),start:Date.now(),limit:src==="full"?4*3600:ids.length*240,tab:"cad",confirm:false,warned:false};
  tick=setInterval(rqTick,1000); go("real");
}
function rqLeft(){return Math.round(rq.limit-(Date.now()-rq.start)/1000);}
function rqTick(){
  if(!rq){clearInterval(tick);return;}
  const r=rqLeft(), el=$("#rtimer");
  if(el){el.textContent=fmt(r);el.classList.toggle("low",r<=1800);}
  if(r<=1800&&!rq.warned){rq.warned=true;toast("Faltam 30 minutos","Pare e passe as respostas para o cartão-resposta. Só o cartão vale nota.");}
  if(r<=0) realFinish();
}
function vReal(){
  if(!rq){go("pratica");return;}
  const nCard=rq.card.filter(x=>x!==null).length, diff=rq.ids.filter((_,i)=>rq.cad[i]!==null&&rq.card[i]!==null&&rq.cad[i]!==rq.card[i]).length, nFlag=rq.flag.filter(Boolean).length;
  const head=`<div class="qhead"><button class="btn ghost sm qexit" onclick="go('pratica')">← Sair</button><div class="stack" style="gap:2px"><strong>Prova real · ${rq.src==="full"?"simulado completo":"Transpetro "+rq.src}</strong><span class="muted num">${rq.ids.length} questões · ${nCard} marcadas no cartão${nFlag?` · ${nFlag} para voltar`:""}</span></div><button class="btn ghost sm fzq" onclick="fzCycle()" aria-label="Tamanho da letra">Aa</button><span class="timer num" id="rtimer">${fmt(rqLeft())}</span></div>
  <div class="segtabs" role="tablist"><button role="tab" aria-selected="${rq.tab==="cad"}" onclick="rq.tab='cad';vRealKeep(true)">Caderno de questões</button><button role="tab" aria-selected="${rq.tab==="card"}" onclick="rq.tab='card';vRealKeep(true)">Cartão-resposta (${nCard}/${rq.ids.length})</button></div>`;
  let body;
  if(rq.tab==="cad"){
    body=`<div class="panel stack"><span class="muted">Ir para a questão (amarelo = voltar depois)</span><div class="qgrid">${rq.ids.map((_,j)=>`<button class="qnum ${rq.cad[j]!==null?"done":""} ${rq.flag[j]?"flag":""}" onclick="document.getElementById('rq${j}').scrollIntoView({behavior:'smooth'})">${j+1}</button>`).join("")}</div></div>
    <p class="muted">Marque aqui como rascunho, igual a riscar o caderno da prova. A nota vem só do cartão-resposta: transcreva antes do tempo acabar.</p>
    ${rq.ids.map((qi,j)=>{const q=Q[qi];return `<article class="panel stack" id="rq${j}"><div class="row" style="justify-content:space-between"><span class="qcat">Questão ${j+1}</span><button class="btn ghost sm rflag ${rq.flag[j]?"on":""}" data-j="${j}">${rq.flag[j]?"Marcada para voltar":"Voltar depois"}</button></div>
      <p class="qtext">${esc(q[1])}</p><div class="opts">${rq.order[j].map((oi,pos)=>`<button class="opt ${rq.cad[j]===pos?"sel":""}" data-j="${j}" data-p="${pos}"><span class="l">${L[pos]}</span><span>${esc(q[2][oi])}</span></button>`).join("")}</div>${repBtn(qi)}</article>`;}).join("")}
    <div class="row"><button class="btn" onclick="rq.tab='card';vRealKeep(true)">Ir para o cartão-resposta</button></div>`;
  }else{
    body=`<div class="panel stack"><p class="muted">Preencha uma bolha por questão. Na prova real, cartão rasurado ou com duas marcas perde a questão; aqui você pode corrigir, mas treine marcar de primeira.</p>
      ${diff?`<div class="rule"><span class="pill bad">${diff}</span> ${diff===1?"questão está":"questões estão"} diferente${diff===1?"":"s"} no cartão e no caderno. Confira.</div>`:""}
      <div class="sheet">${rq.ids.map((_,j)=>`<div class="srow ${rq.cad[j]!==null&&rq.card[j]!==null&&rq.cad[j]!==rq.card[j]?"diff":""}"><span class="num">${String(j+1).padStart(2,"0")}</span>${[0,1,2,3,4].map(p=>`<button class="bub ${rq.card[j]===p?"on":""}" data-j="${j}" data-p="${p}" aria-label="Questão ${j+1}, letra ${L[p]}">${L[p]}</button>`).join("")}</div>`).join("")}</div></div>`;
  }
  $("#view").innerHTML=head+body+`
  <div class="row"><button class="btn warn" onclick="rq.confirm=true;vRealKeep()">Entregar a prova</button></div>
  <div class="rule confirm ${rq.confirm?"on":""} row" style="justify-content:space-between"><span>${rq.ids.length-nCard?`${rq.ids.length-nCard} questões em branco no cartão. Entregar mesmo assim?`:"Entregar e ver a correção?"}</span><span class="row"><button class="btn ghost" onclick="rq.confirm=false;vRealKeep()">Voltar</button><button class="btn warn" onclick="realFinish()">Entregar</button></span></div>`;
  document.querySelectorAll("#view .opt[data-j]").forEach(b=>b.onclick=()=>{const j=+b.dataset.j,p=+b.dataset.p;rq.cad[j]=rq.cad[j]===p?null:p;vRealKeep();});
  document.querySelectorAll("#view .bub").forEach(b=>b.onclick=()=>{const j=+b.dataset.j,p=+b.dataset.p;rq.card[j]=rq.card[j]===p?null:p;vRealKeep();});
  document.querySelectorAll("#view .rflag").forEach(b=>b.onclick=()=>{const j=+b.dataset.j;rq.flag[j]=!rq.flag[j];vRealKeep();});
  if(rq.confirm) $(".confirm").scrollIntoView({block:"nearest"});
}
function vRealKeep(top){const y=window.scrollY;vReal();window.scrollTo({top:top?0:y});}
function realFinish(){
  if(!rq) return;
  if(tick) clearInterval(tick);
  const diff=rq.ids.filter((_,i)=>rq.cad[i]!==null&&rq.cad[i]!==rq.card[i]).length;
  quiz={ids:rq.ids,mode:"exam",label:rq.src==="full"?"Prova real (simulado completo)":"Prova real Transpetro "+rq.src,limit:rq.limit,start:rq.start,i:0,ans:rq.card.slice(),order:rq.order,finished:false,confirm:false,real:true,cardDiff:diff};
  rq=null; finish();
}

/* ---------- Links e vídeos por tópico ---------- */
const PL="https://www.planalto.gov.br/ccivil_03/";
const LINKS={
 rh:[["CLT (Decreto-Lei 5.452/1943)",PL+"decreto-lei/del5452.htm","lei"],["Lei 14.457/2022: prevenção do assédio (CIPA)",PL+"_ato2019-2022/2022/lei/l14457.htm","lei"],["Manual de Redação da Presidência da República","https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica","site"]],
 sgi:[["ISO 9001: gestão da qualidade (página oficial)","https://www.iso.org/iso-9001-quality-management.html","site"],["ISO 14001: gestão ambiental (página oficial)","https://www.iso.org/iso-14001-environmental-management.html","site"],["ISO 45001: saúde e segurança ocupacional (página oficial)","https://www.iso.org/iso-45001-occupational-health-and-safety.html","site"]],
 patr:[["Lei 6.404/1976 (Lei das S.A.), arts. 179 a 183",PL+"leis/l6404consol.htm","lei"],["Pronunciamentos do CPC (CPC 27: imobilizado; CPC 01: impairment)","https://www.cpc.org.br/CPC/Documentos-Emitidos/Pronunciamentos","site"]],
 contab:[["Pronunciamentos do CPC (CPC 00: estrutura conceitual)","https://www.cpc.org.br/CPC/Documentos-Emitidos/Pronunciamentos","site"],["Lei 6.404/1976 (Lei das S.A.)",PL+"leis/l6404consol.htm","lei"]],
 fluxo:[["Pronunciamentos do CPC (CPC 03: Demonstração dos Fluxos de Caixa)","https://www.cpc.org.br/CPC/Documentos-Emitidos/Pronunciamentos","site"]],
 bp:[["Lei 6.404/1976, arts. 176 a 188 (demonstrações)",PL+"leis/l6404consol.htm","lei"],["Pronunciamentos do CPC (CPC 26: apresentação das demonstrações)","https://www.cpc.org.br/CPC/Documentos-Emitidos/Pronunciamentos","site"]],
 transp:[["Lei 9.611/1998: transporte multimodal (OTM)",PL+"leis/l9611.htm","lei"],["ANTT (transporte terrestre)","https://www.gov.br/antt/pt-br","site"],["ANTAQ (transporte aquaviário)","https://www.gov.br/antaq/pt-br","site"]],
 compras:[["Lei 13.303/2016 (estatais: licitações e contratos)",PL+"_ato2015-2018/2016/lei/l13303.htm","lei"],["Lei 14.133/2021 (nova lei de licitações)",PL+"_ato2019-2022/2021/lei/l14133.htm","lei"]],
 contr:[["Lei 13.303/2016, arts. 68 a 91 (contratos)",PL+"_ato2015-2018/2016/lei/l13303.htm","lei"],["Lei 14.133/2021 (gestão e fiscalização de contratos)",PL+"_ato2019-2022/2021/lei/l14133.htm","lei"],["Lei 14.063/2020 (assinaturas eletrônicas)",PL+"_ato2019-2022/2020/lei/l14063.htm","lei"]],
 info:[["Atalhos de teclado no Windows (Microsoft)","https://support.microsoft.com/pt-br/accessibility/windows/keyboard-shortcuts-in-windows","site"],["Suporte do Excel em português (Microsoft)","https://support.microsoft.com/pt-br/excel","site"],["Suporte do Word em português (Microsoft)","https://support.microsoft.com/pt-br/word","site"]],
 lgpd:[["LGPD (Lei 13.709/2018)",PL+"_ato2015-2018/2018/lei/l13709.htm","lei"],["ANPD: Autoridade Nacional de Proteção de Dados","https://www.gov.br/anpd/pt-br","site"],["Cartilha de Segurança para Internet (CERT.br)","https://cartilha.cert.br/","site"]],
 port:[["Manual de Redação da Presidência da República","https://www4.planalto.gov.br/centrodeestudos/assuntos/manual-de-redacao-da-presidencia-da-republica","site"],["VOLP: Vocabulário Ortográfico (ABL)","https://www.academia.org.br/nossa-lingua/busca-no-vocabulario","site"],["Acordo Ortográfico (Decreto 6.583/2008)",PL+"_ato2007-2010/2008/decreto/d6583.htm","lei"]],
 mat:[["Khan Academy em português: Matemática","https://pt.khanacademy.org/math","site"]]
};
const SEARCH={
 rh:"gestão de pessoas recrutamento seleção treinamento avaliação de desempenho concurso",sgi:"sistema de gestão integrado ISO 9001 14001 45001 PDCA concurso",
 patr:"administração patrimonial inventário classificação de bens concurso",manut:"tipos de manutenção corretiva preventiva preditiva MTBF MTTR concurso",
 ind:"indicadores de desempenho eficiência eficácia BSC ESG concurso",matfin:"matemática financeira juros compostos desconto racional concurso Cesgranrio",
 contab:"contabilidade partidas dobradas lançamentos contábeis concurso",fluxo:"demonstração dos fluxos de caixa método direto e indireto CPC 03",
 bp:"balanço patrimonial e DRE estrutura Lei 6.404 concurso",log:"logística e cadeia de suprimentos concurso Cesgranrio",
 transp:"modais de transporte intermodal multimodal OTM concurso",estoq:"gestão de estoques curva ABC lote econômico ponto de pedido concurso",
 armaz:"armazenagem layout paletização drive-in concurso",manus:"movimentação de materiais embalagem unitização concurso",
 compras:"Lei 13.303 licitações empresas estatais aula concurso",contr:"gestão e fiscalização de contratos Lei 13.303 14.133 aula",
 info:"Windows 11 Word Excel atalhos concurso Cesgranrio",lgpd:"LGPD segurança da informação malware phishing concurso",
 port:"português Cesgranrio crase concordância regência aula",mat:"matemática nível médio Cesgranrio porcentagem probabilidade progressões aula"
};
const yt=q=>"https://www.youtube.com/results?search_query="+encodeURIComponent(q);
const gg=q=>"https://www.google.com/search?q="+encodeURIComponent(q);
function linkList(k){
  const ic={lei:"Lei",site:"Site",video:"Vídeo"};
  const own=(LINKS[k]||[]).map(([t,u,ty])=>`<li><a href="${u}" target="_blank" rel="noopener">${esc(t)}</a> <span class="tchip">${ic[ty]}</span></li>`).join("");
  const q=SEARCH[k]||CATS[k].n;
  return `<ul class="links">${own}
    <li><a href="${yt(q)}" target="_blank" rel="noopener">Aulas em vídeo no YouTube: ${esc(CATS[k].n)}</a> <span class="tchip">Vídeo</span></li>
    <li><a href="${yt("questões comentadas Cesgranrio "+CATS[k].n)}" target="_blank" rel="noopener">Questões Cesgranrio comentadas em vídeo</a> <span class="tchip">Vídeo</span></li>
    <li><a href="${gg(q+" resumo")}" target="_blank" rel="noopener">Resumos e artigos na web</a> <span class="tchip">Busca</span></li></ul>`;
}
let linkCur="all";
function vLinks(){
  const keys=linkCur==="all"?Object.keys(CATS):[linkCur];
  $("#view").innerHTML=`
  <div class="stack"><h2>Links e vídeos</h2><p class="muted">Para cada tópico do edital: a fonte oficial (lei, norma ou manual) quando existe, aulas em vídeo e resumos. Os vídeos abrem uma busca no YouTube já filtrada pelo tema, para você escolher a aula com mais visualizações e mais recente. Leis: leia a versão atualizada no site do Planalto.</p>
  <select id="lkSel"><option value="all">Todos os tópicos</option>${Object.entries(BLOCKS).map(([b,bn])=>`<optgroup label="${esc(bn)}">${Object.keys(CATS).filter(k=>CATS[k].b===b).map(k=>`<option value="${k}" ${linkCur===k?"selected":""}>${esc(CATS[k].n)}</option>`).join("")}</optgroup>`).join("")}</select></div>
  <div class="panel stack"><h3>Canais e sites gerais</h3><ul class="links">
    <li><a href="${yt("Transpetro 2026 nível médio administração e controle")}" target="_blank" rel="noopener">Aulas e revisões para a Transpetro 2026 no YouTube</a> <span class="tchip">Vídeo</span></li>
    <li><a href="https://www.cesgranrio.org.br" target="_blank" rel="noopener">Fundação Cesgranrio (editais, gabaritos e provas)</a> <span class="tchip">Site</span></li>
    <li><a href="https://www.pciconcursos.com.br/provas/transpetro-medio" target="_blank" rel="noopener">Provas anteriores da Transpetro nível médio (PCI Concursos)</a> <span class="tchip">Site</span></li></ul></div>
  ${Object.entries(BLOCKS).map(([b,bn])=>{const ks=keys.filter(k=>CATS[k].b===b);return ks.length?`<section class="stack"><h3>${esc(bn)}</h3>${ks.map(k=>`<details class="panel lk" style="--bc:var(--c-${b})" ${linkCur!=="all"?"open":""}><summary class="row" style="justify-content:space-between"><strong class="bh">${esc(CATS[k].n)}</strong><span class="muted">abrir</span></summary><div class="stack" style="margin-top:8px">${linkList(k)}${RES[k]?`<div><button class="btn ghost sm" onclick="openTopic('${k}')">Resumo no app</button></div>`:""}</div></details>`).join("")}</section>`:"";}).join("")}`;
  $("#lkSel").onchange=e=>{linkCur=e.target.value;vLinks();};
}

/* ---------- Backup e sincronização ---------- */
const SYNC={st:"local",at:null,db:null,uid:null,t:null};
SAVE_HOOKS.push(syncPush);
function syncPush(){
  if(!SYNC.db||!SYNC.uid) return;
  clearTimeout(SYNC.t);
  SYNC.t=setTimeout(async()=>{
    try{await SYNC.db.doc("data/users/"+SYNC.uid+"/progress").set({s:JSON.stringify(S),upd:S.upd||Date.now()});SYNC.st="ok";SYNC.at=new Date();}
    catch(e){SYNC.st="err";}
    syncLbl();
  },2000);
}
function adoptRemote(d){
  try{S=Object.assign({hist:[],stats:{},wrong:[],plan:{}},JSON.parse(d.s));}catch(e){return;}
  initState(); saveLocal(); applyTheme&&applyTheme(); clKick();
  if(!["quiz","real","vf","match"].includes(current)){const y=window.scrollY;go(current);window.scrollTo({top:y});}
}
(async()=>{
  try{
    if(!window.claude||!window.claude.use){syncLbl();return;}
    const [db,user]=await Promise.all([window.claude.use("db"),window.claude.use("user")]);
    if(!db||!user){syncLbl();return;}
    const uid=await user.id(); if(!uid){syncLbl();return;}
    SYNC.db=db; SYNC.uid=uid;
    let first=true;
    db.doc("data/users/"+uid+"/progress").onSnapshot(snap=>{
      if(snap.metadata&&snap.metadata.hasPendingWrites) return;
      if(snap.exists){
        const d=snap.data(), ru=d.upd||0, lu=S.upd||0;
        if(ru>lu) adoptRemote(d); else if(first&&lu>ru) syncPush();
        SYNC.st="ok"; SYNC.at=new Date();
      } else if(first) syncPush();
      first=false; syncLbl();
    },()=>{SYNC.st="err";syncLbl();});
  }catch(e){SYNC.st="err";syncLbl();}
})();
function syncText(){
  if(SYNC.st==="ok") return "Sincronizado com a sua conta"+(SYNC.at?" às "+SYNC.at.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}):"")+". Abra o app em outro aparelho, com a mesma conta do claude.ai, e o progresso aparece lá.";
  if(SYNC.st==="err") return "Não foi possível sincronizar agora. O progresso continua salvo neste aparelho; tente de novo mais tarde ou use o código de backup.";
  if(SYNC.db) return "Conectando à sua conta…";
  return window.claude&&window.claude.use?"Este aparelho ainda não está ligado à sua conta do claude.ai. Use a sincronização automática acima ou o código de backup abaixo.":"A conta do claude.ai só vale no link do claude.ai. Aqui, use a sincronização automática acima; o código de backup abaixo é a cópia manual.";
}
function syncLbl(){document.querySelectorAll(".synclbl").forEach(e=>{e.textContent=syncText();e.className="synclbl "+(SYNC.st==="ok"?"ok":SYNC.st==="err"?"bad":"");});}
function syncWire(){
  const g=$("#bkGen"); if(!g) return;
  g.onclick=()=>{$("#bkTxt").value="TP26:"+btoa(unescape(encodeURIComponent(JSON.stringify(S))));$("#bkMsg").textContent="Código gerado.";};
  $("#bkCopy").onclick=async()=>{const t=$("#bkTxt");if(!t.value) g.onclick();try{await navigator.clipboard.writeText(t.value);$("#bkMsg").textContent="Copiado.";}catch(e){t.select();$("#bkMsg").textContent="Selecione e copie o texto.";}};
  $("#bkImp").onclick=()=>{
    const v=$("#bkTxt").value.trim().replace(/^TP26:/,"");
    try{const o=JSON.parse(decodeURIComponent(escape(atob(v))));if(!o||!Array.isArray(o.hist)) throw 0;S=Object.assign({hist:[],stats:{},wrong:[],plan:{}},o);initState();save();$("#bkMsg").textContent="Progresso importado.";setTimeout(()=>go("guia"),600);}
    catch(e){$("#bkMsg").textContent="Código inválido. Copie o código inteiro, começando por TP26:";}
  };
}

/* =====================================================================
   v7: navegação em 5 áreas, foco no simulado, simulado salvo, cor por
   bloco, ouvir resumos, adaptativo, cálculo, cronômetro, tempo por
   questão, lei seca e revisão da véspera
   ===================================================================== */
const ICONS={
 guia:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11l3 3 8-8"/><path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/></svg>',
 cont:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4h7a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H2z"/><path d="M22 4h-7a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h8z"/></svg>',
 pratica:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>',
 jogos:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 11v3M5.5 12.5h3M15 12h.01M18 13h.01"/></svg>',
 stats:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>'
};
document.querySelectorAll("nav.tabs button").forEach(b=>{const s=document.createElement("span");s.textContent=b.textContent;b.textContent="";b.insertAdjacentHTML("afterbegin",ICONS[b.dataset.v]||"");b.appendChild(s);});
const TICON={auto:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 3v18a9 9 0 0 0 0-18z" fill="currentColor"/></svg>',
 light:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
 dark:'<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>'};
const _applyTheme=applyTheme;
applyTheme=function(){_applyTheme();const b=$("#themeBtn");if(b){const t=THEMES.find(x=>x[0]===theme);b.innerHTML=TICON[theme]+'<span class="tlbl">'+t[1]+'</span>';b.title=t[1];b.setAttribute("aria-label",t[1]+". Toque para trocar");}
  const m=document.querySelector('meta[name="theme-color"]'); if(m) m.content=getComputedStyle(document.documentElement).getPropertyValue("--hdr").trim()||"#FFFFFF";};
applyTheme();

/* ---------- Navegação: foco, voz, tempo por questão ---------- */
function qtAcc(){if(quiz&&!quiz.finished&&quiz._k!=null){quiz.tq=quiz.tq||quiz.ids.map(()=>0);quiz.tq[quiz._k]+=Date.now()-quiz._t;quiz._k=null;}}
function segNav(cur,items){return `<div class="segtabs" role="tablist">${items.map(([v,t])=>`<button role="tab" aria-selected="${v===cur}" onclick="go('${v}')">${t}</button>`).join("")}</div>`;}
const SEG_EST=[["cont","Resumos"],["links","Links e vídeos"],["vesp","Revisão da véspera"]];
const SEG_PROG=[["stats","Desempenho"],["crono","Cronograma"]];

/* ---------- Simulado salvo ao recarregar ---------- */
const RK="transpetro26-run";
function runSave(){try{const o={};if(quiz&&!quiz.finished)o.quiz=quiz;if(rq)o.rq=rq;localStorage.setItem(RK,JSON.stringify(o));}catch(e){}}
const _vQuiz=vQuiz;
vQuiz=function(){
  if(quiz&&!quiz.finished){const now=Date.now();quiz.tq=quiz.tq||quiz.ids.map(()=>0);
    if(quiz._k!=null&&quiz._k!==quiz.i){quiz.tq[quiz._k]+=now-quiz._t;quiz._k=null;}
    if(quiz._k==null){quiz._k=quiz.i;quiz._t=now;}}
  _vQuiz(); runSave();
};
const _vReal=vReal; vReal=function(){_vReal();runSave();};
const _finish=finish;
finish=function(){
  if(!quiz||quiz.finished) return;
  qtAcc();
  _finish();
  if(quiz&&quiz.tq){
    const ans=quiz.ids.map((_,k)=>k).filter(k=>quiz.ans[k]!==null&&quiz.tq[k]>0);
    if(ans.length){quiz.avgT=Math.round(ans.reduce((s,k)=>s+quiz.tq[k],0)/ans.length/1000);quiz.slow=ans.filter(k=>quiz.tq[k]>240000).length;
      if(S.hist[0]){S.hist[0].avgT=quiz.avgT;save();}
      if(current==="result") vResult();}
  }
  runSave();
};
window.addEventListener("beforeunload",e=>{if((quiz&&!quiz.finished&&quiz.mode==="exam")||rq){e.preventDefault();e.returnValue="";}});
(function(){
  try{
    const o=JSON.parse(localStorage.getItem(RK)||"{}");
    if(o.quiz&&!o.quiz.finished&&Array.isArray(o.quiz.ids)&&o.quiz.ids.every(i=>Q[i])){quiz=o.quiz;quiz._k=null;quiz.confirm=false;}
    if(o.rq&&Array.isArray(o.rq.ids)&&o.rq.ids.every(i=>Q[i])){rq=o.rq;rq.confirm=false;}
    if(rq) tick=setInterval(rqTick,1000); else if(quiz&&quiz.limit) tick=setInterval(updTimer,1000);
  }catch(e){}
})();
function runBanner(){
  if(rq) return `<div class="rule row" style="justify-content:space-between"><span>Prova real em andamento: ${fmt(rqLeft())} restantes.</span><button class="btn sm" onclick="go('real')">Continuar</button></div>`;
  if(quiz&&!quiz.finished) return `<div class="rule row" style="justify-content:space-between"><span>${esc(quiz.label)} em andamento: questão ${quiz.i+1} de ${quiz.ids.length}.</span><button class="btn sm" onclick="go('quiz')">Continuar</button></div>`;
  return "";
}
/* atalhos de teclado no simulado */
document.addEventListener("keydown",e=>{
  if(current!=="quiz"||!quiz||e.ctrlKey||e.metaKey||e.altKey||e.target.closest("input,textarea,select")) return;
  const i="abcde".indexOf(e.key.toLowerCase());
  if(i>=0){const b=document.querySelector(`#view .opt[data-p="${i}"]`);if(b){b.click();e.preventDefault();}}
  else if(e.key==="ArrowRight"&&quiz.i<quiz.ids.length-1){nav(1);e.preventDefault();}
  else if(e.key==="ArrowLeft"&&quiz.i>0){nav(-1);e.preventDefault();}
});

/* ---------- Resultado: tempo por questão ---------- */
const _vResult=vResult;
vResult=function(){
  _vResult();
  if(!quiz||!quiz.avgT) return;
  const g=$("#view h2");
  const by={};quiz.ids.forEach((qi,k)=>{if(quiz.ans[k]===null||!quiz.tq[k])return;const b=CATS[Q[qi].c].b;by[b]=by[b]||{s:0,n:0};by[b].s+=quiz.tq[k];by[b].n++;});
  g.insertAdjacentHTML("afterend",`<div class="panel stack"><h3>Tempo por questão</h3>
    <div class="row" style="gap:18px"><span>Média: <b class="num">${fmt(quiz.avgT)}</b></span><span>Limite para fechar a prova: <b class="num">4:00</b></span>${quiz.slow?`<span class="pill bad">${quiz.slow} acima de 4 min</span>`:'<span class="pill ok">nenhuma acima de 4 min</span>'}</div>
    <div class="stack" style="gap:6px">${Object.keys(by).map(b=>`<div class="row" style="justify-content:space-between"><span><i class="bdot" style="background:var(--c-${b})"></i>${esc(BLOCKS[b])}</span><span class="num">${fmt(Math.round(by[b].s/by[b].n/1000))}</span></div>`).join("")}</div>
    <p class="muted">Na prova são 4 horas para 60 questões. Se um bloco passa de 4 minutos por questão, treine-o com o cronômetro ligado e pule a questão que travar, voltando depois.</p></div>`);
};

/* ---------- Hoje (antigo Início + Orientação) ---------- */
let instEvt=null;
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();instEvt=e;if(current==="config")vConfigKeep();});
function aboutExam(){
  return `<details class="panel about"><summary><h3>Como a prova funciona</h3></summary><div class="stack" style="margin-top:12px">
    <div class="grid2">
      <div class="fact"><span class="k">Questões</span><span class="v num">60</span><span class="muted">40 específicas, 10 de Português e 10 de Matemática, com 5 alternativas</span></div>
      <div class="fact"><span class="k">Duração</span><span class="v num">4 h</span><span class="muted">Saída só após 2 h. Chegar 1 h antes do início</span></div>
      <div class="fact"><span class="k">Vagas + cadastro (RJ)</span><span class="v num">48</span><span class="muted">3 vagas imediatas; 29 na ampla concorrência</span></div>
    </div>
    <div class="rule stack"><strong>O que elimina</strong><span>Menos de 20 acertos nas específicas, menos de 10 nas gerais, ou zero em Português ou em Matemática.</span>
    <strong>O que classifica</strong><span>O ranking das 40 específicas, até 2 vezes o total de vagas + cadastro. Errar não desconta.</span></div>
  </div></details>`;
}

/* ---------- Cronômetro de estudo (50 + 10) ---------- */
S.slog=S.slog||{};
let pomoT=null;
function pomoLeft(){return S.pomo?Math.round(S.pomo.dur-(Date.now()-S.pomo.start)/1000):0;}
function pomoLog(min){if(!S.pomo||S.pomo.kind!=="est"||min<1) return;S.slog=S.slog||{};const k=dkey(new Date(S.pomo.start));S.slog[k]=S.slog[k]||{};S.slog[k][S.pomo.cat]=(S.slog[k][S.pomo.cat]||0)+Math.round(min);}
function pomoStart(kind){
  const c=$("#pomoCat"); const cat=c?c.value:(S.pomoCat||"geral"); S.pomoCat=cat;
  S.pomo={kind,cat,start:Date.now(),dur:kind==="est"?50*60:10*60}; save(); vGuiaKeep();
}
function pomoStop(){if(!S.pomo)return;pomoLog((Date.now()-S.pomo.start)/60000);S.pomo=null;save();vGuiaKeep();}
function pomoTick(){
  if(!S.pomo) return;
  const r=pomoLeft(), el=$("#pomoClock");
  if(el) el.textContent=fmt(Math.max(0,r));
  if(r<=0){
    const est=S.pomo.kind==="est";
    if(est) pomoLog(S.pomo.dur/60);
    S.pomo=null; save();
    notify(est?"Bloco de 50 minutos concluído":"Pausa encerrada",est?"Faça 10 minutos de pausa longe da tela. Depois, mais um bloco.":"Hora de voltar: comece o próximo bloco.");
    if(current==="guia"||current==="home") vGuiaKeep();
  }
}
setInterval(pomoTick,1000);
function minFmt(m){m=Math.round(m);return m>=60?Math.floor(m/60)+"h"+String(m%60).padStart(2,"0"):m+" min";}
function slogSum(days){let t=0;const by={},SL=S.slog||{};for(let i=0;i<days;i++){const d=new Date();d.setDate(d.getDate()-i);const o=SL[dkey(d)]||{};for(const c in o){t+=o[c];const b=c==="geral"?"geral":CATS[c]?CATS[c].b:"geral";by[b]=(by[b]||0)+o[c];}}return {t,by};}
function pomoPanel(){
  const today=slogSum(1).t, wk=slogSum(7).t, p=S.pomo;
  const opts=`<option value="geral">Geral / vários assuntos</option>`+Object.entries(BLOCKS).map(([b,bn])=>`<optgroup label="${esc(bn)}">${Object.keys(CATS).filter(k=>CATS[k].b===b).map(k=>`<option value="${k}" ${S.pomoCat===k?"selected":""}>${esc(CATS[k].n)}</option>`).join("")}</optgroup>`).join("");
  return `<section class="panel stack"><div class="row" style="justify-content:space-between"><h3>Cronômetro de estudo</h3><span class="muted">Hoje <b class="num">${minFmt(today)}</b> · 7 dias <b class="num">${minFmt(wk)}</b></span></div>
  ${p?`<div class="pomo ${p.kind}"><span class="pk">${p.kind==="est"?"Estudando: "+esc(p.cat==="geral"?"geral":CATS[p.cat].n):"Pausa"}</span><span class="pclock num" id="pomoClock">${fmt(Math.max(0,pomoLeft()))}</span><button class="btn ghost" id="pomoStop">${p.kind==="est"?"Encerrar e registrar":"Encerrar pausa"}</button></div>`
  :`<label class="muted" for="pomoCat">O que você vai estudar</label><select id="pomoCat">${opts}</select>
    <div class="row"><button class="btn" id="pomoGo">Começar bloco de 50 min</button><button class="btn ghost" id="pomoPause">Pausa de 10 min</button></div>`}
  <p class="muted">Blocos de 50 minutos com 10 de pausa, longe do celular. O tempo fica registrado por assunto em Progresso.</p></section>`;
}
function pomoWire(){const g=$("#pomoGo");if(g)g.onclick=()=>pomoStart("est");const pz=$("#pomoPause");if(pz)pz.onclick=()=>pomoStart("pau");const s=$("#pomoStop");if(s)s.onclick=pomoStop;}

/* ---------- Estudar: resumos com cor por bloco, ouvir ---------- */
const _vCont=vCont; vCont=function(){_vCont();const h=$("#view h2");if(h)h.textContent="Estudar";$("#view").insertAdjacentHTML("afterbegin",segNav("cont",SEG_EST));};
const _vLinks=vLinks; vLinks=function(){_vLinks();$("#view").insertAdjacentHTML("afterbegin",segNav("links",SEG_EST));};
let ttsQ=[];
const TTS_OK="speechSynthesis" in window;
function ttsStop(){ttsQ=[];if(TTS_OK)try{speechSynthesis.cancel();}catch(e){} document.querySelectorAll(".ttsbtn").forEach(b=>b.textContent="Ouvir");}
function plain(s){return String(s).replace(/\*\*(.+?)\*\*/g,"$1").replace(/^! /,"Atenção, pegadinha: ").replace(/×/g," versus ").replace(/≥/g," maior ou igual a ").replace(/≤/g," menor ou igual a ").replace(/→/g,", ").replace(/÷/g," dividido por ").replace(/\//g," por ");}
function ttsSpeak(text,btn){
  if(!TTS_OK) return;
  if(speechSynthesis.speaking&&btn&&btn.textContent==="Parar"){ttsStop();return;}
  ttsStop();
  const parts=text.match(/[^.!?;:]+[.!?;:]?/g)||[text];
  const chunks=[];let cur="";parts.forEach(p=>{if((cur+p).length>220){if(cur)chunks.push(cur);cur=p;}else cur+=p;});if(cur)chunks.push(cur);
  const vs=speechSynthesis.getVoices(), voice=vs.find(v=>/pt[-_]BR/i.test(v.lang))||vs.find(v=>/^pt/i.test(v.lang));
  ttsQ=chunks.slice();
  if(btn) btn.textContent="Parar";
  const next=()=>{if(!ttsQ.length){if(btn)btn.textContent="Ouvir";return;}const u=new SpeechSynthesisUtterance(ttsQ.shift().trim());u.lang="pt-BR";if(voice)u.voice=voice;u.rate=S.ttsRate||1;u.onend=next;u.onerror=()=>{if(btn)btn.textContent="Ouvir";};speechSynthesis.speak(u);};
  next();
}
if(TTS_OK) try{speechSynthesis.getVoices();speechSynthesis.onvoiceschanged=()=>{};}catch(e){}
function ttsBar(id){
  if(!TTS_OK) return "";
  return `<div class="ttsbar row"><button class="btn ttsbtn" id="${id}">Ouvir</button><label class="row muted" style="gap:6px">Velocidade <select id="ttsRate">${[0.9,1,1.15,1.3,1.5].map(r=>`<option value="${r}" ${(S.ttsRate||1)==r?"selected":""}>${String(r).replace(".",",")}x</option>`).join("")}</select></label><span class="muted">Leitura em voz alta pelo próprio aparelho, funciona sem internet.</span></div>`;
}
function ttsWire(id,getText){const b=$("#"+id);if(!b)return;b.onclick=()=>ttsSpeak(getText(),b);const r=$("#ttsRate");if(r)r.onchange=()=>{S.ttsRate=+r.value;save();};}
const _vTopic=vTopic;
vTopic=function(){
  _vTopic(); const k=topicCur; if(!k||!RES[k]) return;
  const h=$("#view h2"); if(h) h.closest(".stack").insertAdjacentHTML("afterend",ttsBar("ttsTopic"));
  ttsWire("ttsTopic",()=>CATS[k].n+". "+RES[k].map(([t,it])=>t+". "+it.map(plain).join(". ")).join(". "));
};

/* ---------- Revisão da véspera ---------- */
function vVesp(){
  const blocks=Object.keys(BLOCKS);
  const key=it=>it.filter(x=>x.startsWith("! ")||/\*\*/.test(x));
  const html=blocks.map(b=>{
    const cats=Object.keys(CATS).filter(k=>CATS[k].b===b&&RES[k]);
    if(!cats.length) return "";
    const traps=[],pts=[];
    cats.forEach(k=>RES[k].forEach(([t,it])=>{it.forEach(x=>{if(x.startsWith("! "))traps.push([k,x]);});const ks=key(it).filter(x=>!x.startsWith("! "));if(ks.length)pts.push([k,ks[0]]);}));
    const notes=Object.keys(S.notes||{}).map(Number).filter(q=>Q[q]&&CATS[Q[q].c].b===b&&S.notes[q].t);
    const weak=cats.filter(k=>S.stats[k]&&S.stats[k].t>=3).sort((a,c)=>S.stats[a].c/S.stats[a].t-S.stats[c].c/S.stats[c].t).slice(0,3);
    return `<details class="panel vesp" style="--bc:var(--c-${b})"><summary><h3 class="bh">${esc(BLOCKS[b])}</h3></summary><div class="stack" style="margin-top:12px">
      ${weak.length?`<div class="row" style="gap:6px">${weak.map(k=>`<button class="chipbtn" onclick="openTopic('${k}')">${esc(CATS[k].n)} · ${pct(S.stats[k])}%</button>`).join("")}</div>`:""}
      ${traps.length?`<h4>Pegadinhas</h4><ul class="res">${traps.map(([k,x])=>`<li class="trap">${md(x)}</li>`).join("")}</ul>`:""}
      <h4>Pontos-chave</h4><ul class="res">${pts.map(([k,x])=>`<li>${md(x)} <span class="muted">(${esc(CATS[k].n)})</span></li>`).join("")}</ul>
      ${notes.length?`<h4>Do seu caderno de erros</h4><ul class="res">${notes.map(q=>`<li>${esc(S.notes[q].t)} <span class="muted">(${esc(CATS[Q[q].c].n)})</span></li>`).join("")}</ul>`:""}
      <div class="row"><button class="btn ghost sm" onclick="ttsSpeak(plain([...this.closest('details').querySelectorAll('h4,li')].map(x=>x.textContent).join('. ')),this)">Ouvir</button></div>
    </div></details>`;}).join("");
  $("#view").innerHTML=segNav("vesp",SEG_EST)+`
  <div class="stack"><h2>Revisão da véspera</h2><p class="muted">O essencial de cada bloco numa página: os assuntos em que você mais erra, as pegadinhas, um ponto-chave por seção e as notas do seu caderno de erros. Para os dias 04 e 05/12, sem conteúdo novo.</p></div>
  ${html}`;
}

/* ---------- Progresso (Desempenho + Cronograma) ---------- */
const _vStats=vStats;
vStats=function(){
  _vStats(); const v=$("#view"); const h=v.querySelector("h2"); if(h) h.textContent="Progresso";
  v.insertAdjacentHTML("afterbegin",segNav("stats",SEG_PROG));
  const w=slogSum(7), m=slogSum(30);
  const blk=Object.keys(BLOCKS).concat("geral").filter(b=>m.by[b]);
  const mx=Math.max(1,...blk.map(b=>m.by[b]));
  const tl=S.hist.filter(x=>x.avgT).slice(0,8);
  const fc=v.querySelector(".panel");
  const html=`<div class="panel stack"><h3>Horas de estudo</h3>
    <div class="row" style="gap:18px"><span>Últimos 7 dias: <b class="num">${minFmt(w.t)}</b></span><span>Últimos 30 dias: <b class="num">${minFmt(m.t)}</b></span></div>
    ${blk.length?blk.map(b=>`<div class="hbar"><span><i class="bdot" style="background:${b==="geral"?"var(--muted)":`var(--c-${b})`}"></i>${b==="geral"?"Geral":esc(BLOCKS[b])}</span><div class="track"><div class="fill" style="width:${m.by[b]/mx*100}%;background:${b==="geral"?"var(--muted)":`var(--c-${b})`}"></div></div><span class="num">${minFmt(m.by[b])}</span></div>`).join(""):'<p class="muted">Use o cronômetro de estudo na aba Hoje para registrar o tempo por assunto.</p>'}
    ${tl.length?`<h3>Tempo médio por questão</h3>${tl.map(x=>`<div class="row" style="justify-content:space-between"><span>${esc(x.date)} · ${esc(x.label)}</span><span class="num ${x.avgT>240?"badt":""}">${fmt(x.avgT)}</span></div>`).join("")}`:""}</div>`;
  if(fc) fc.insertAdjacentHTML("afterend",html); else v.insertAdjacentHTML("beforeend",html);
};
const _vCrono=vCrono; vCrono=function(){_vCrono();$("#view").insertAdjacentHTML("afterbegin",segNav("crono",SEG_PROG));};

/* ---------- Praticar: simulado adaptativo ---------- */
function startAdaptive(){
  const weak=weakCats(5), esp=espCats().filter(c=>!weak.includes(c));
  const pick=(cats,n)=>{const pools=cats.map(c=>freshSort(QI().filter(i=>Q[i].c===c)));const out=[];let r=0;while(out.length<n&&pools.some(p=>p.length)){const p=pools[r%pools.length];if(p.length)out.push(p.shift());r++;}return out;};
  const ids=shuffle(pick(weak,12).concat(pick(shuffle(esp),4),pick(["port"],2),pick(["mat"],2)));
  makeQuiz(ids,"train","Treino adaptativo",0);
}

/* ---------- Jogos: lei seca e cálculo ---------- */
const _vJogos=vJogos;
vJogos=function(){
  _vJogos();
  const g=$("#view .grid2");
  if(g) g.insertAdjacentHTML("beforeend",`
    <div class="panel mode"><span class="tag">${LEI.length} trechos</span><h3>Lei seca</h3><p class="muted">Complete o texto da Lei 13.303, da Lei 14.133 e da LGPD. A Cesgranrio copia a letra da lei nas alternativas.</p>
      <label class="muted" for="selLei">Lei</label><select id="selLei"><option value="all">Todas</option><option value="13.303">Lei 13.303/2016 (estatais)</option><option value="14.133">Lei 14.133/2021</option><option value="LGPD">LGPD (Lei 13.709/2018)</option></select>
      <button class="btn" onclick="startLei()">Começar</button>${S.gm.leiBest?`<span class="muted num">Recorde: ${S.gm.leiBest} acertos</span>`:""}</div>
    <div class="panel mode"><span class="tag">90 segundos</span><h3>Cálculo sem calculadora</h3><p class="muted">Porcentagem, juros, regra de três, aumentos e descontos. Na prova, calculadora é proibida: aqui você treina a conta de cabeça.</p>
      <button class="btn" onclick="startCalc()">Jogar</button>${S.gm.calcBest?`<span class="muted num">Recorde: ${S.gm.calcBest} acertos</span>`:""}</div>`);
};
const LEI=[
 ["13.303","Art. 1º","Esta Lei dispõe sobre o estatuto jurídico da empresa pública, da ___ e de suas subsidiárias.","sociedade de economia mista",["autarquia","fundação pública","agência reguladora"]],
 ["13.303","Art. 29, I","É dispensável a realização de licitação por empresas públicas e sociedades de economia mista para obras e serviços de engenharia de valor até ___.","R$ 100.000,00",["R$ 50.000,00","R$ 150.000,00","R$ 33.000,00"]],
 ["13.303","Art. 29, II","É dispensável a licitação para outros serviços e compras de valor até ___ e para alienações, nos casos previstos nesta Lei.","R$ 50.000,00",["R$ 100.000,00","R$ 17.600,00","R$ 80.000,00"]],
 ["13.303","Art. 30","A contratação direta será feita quando houver ___ de competição (inexigibilidade).","inviabilidade",["dispensa","urgência","ausência de orçamento"]],
 ["13.303","Art. 30, II","É inexigível a contratação de serviços técnicos especializados com profissionais ou empresas de notória especialização, vedada a inexigibilidade para serviços de ___.","publicidade e divulgação",["engenharia","consultoria","auditoria"]],
 ["13.303","Art. 32, IV","Diretriz das licitações: adoção preferencial da modalidade ___, instituída pela Lei nº 10.520/2002, para a aquisição de bens e serviços comuns.","pregão",["concorrência","tomada de preços","convite"]],
 ["13.303","Art. 42, I","Empreitada por preço ___: contratação por preço certo de unidades determinadas.","unitário",["global","integral","por tarefa"]],
 ["13.303","Art. 51","Sequência de fases: preparação; divulgação; apresentação de lances ou propostas; julgamento; verificação de efetividade dos lances ou propostas; negociação; ___; interposição de recursos; adjudicação do objeto; homologação do resultado ou revogação do procedimento.","habilitação",["credenciamento","pré-qualificação","cadastramento"]],
 ["13.303","Art. 54","Critérios de julgamento: menor preço; maior desconto; melhor combinação de técnica e preço; melhor técnica; melhor conteúdo artístico; maior oferta de preço; ___; melhor destinação de bens alienados.","maior retorno econômico",["maior lance","menor custo total","técnica e preço ponderados"]],
 ["13.303","Art. 70, § 1º","Modalidades de garantia que o contratado pode escolher: caução em dinheiro, seguro-garantia e ___.","fiança bancária",["aval","nota promissória","penhor de bens"]],
 ["13.303","Art. 70, § 2º","A garantia não excederá a ___ do valor do contrato.","5%",["10%","2%","3%"]],
 ["13.303","Art. 70, § 3º","Para obras, serviços e fornecimentos de grande vulto envolvendo complexidade técnica e riscos financeiros elevados, o limite de garantia poderá ser elevado para até ___ do valor do contrato.","10%",["5%","15%","20%"]],
 ["13.303","Art. 71","A duração dos contratos regidos por esta Lei não excederá a ___, contados a partir de sua celebração, salvo as exceções previstas.","5 anos",["2 anos","4 anos","10 anos"]],
 ["13.303","Art. 81, § 1º","O contratado poderá aceitar, nas mesmas condições contratuais, os acréscimos ou supressões que se fizerem nas obras, serviços ou compras, até ___ do valor inicial atualizado do contrato.","25%",["50%","10%","30%"]],
 ["13.303","Art. 81, § 1º","No caso particular de reforma de edifício ou de equipamento, os acréscimos podem chegar ao limite de ___.","50%",["25%","30%","100%"]],
 ["14.133","Art. 28","São modalidades de licitação: pregão; concorrência; concurso; leilão; ___.","diálogo competitivo",["tomada de preços","convite","RDC"]],
 ["LGPD","Art. 5º, I","Dado pessoal: informação relacionada a pessoa natural ___ ou identificável.","identificada",["jurídica","registrada","maior de idade"]],
 ["LGPD","Art. 5º, II","Dado pessoal sensível: sobre origem racial ou étnica, convicção religiosa, opinião política, filiação a sindicato ou a organização de caráter religioso, filosófico ou político, dado referente à saúde ou à vida sexual, dado ___ ou biométrico, quando vinculado a uma pessoa natural.","genético",["bancário","cadastral","financeiro"]],
 ["LGPD","Art. 5º, III","Dado ___: dado relativo a titular que não possa ser identificado, considerando a utilização de meios técnicos razoáveis e disponíveis na ocasião de seu tratamento.","anonimizado",["pseudonimizado","sensível","criptografado"]],
 ["LGPD","Art. 5º, VI","Controlador: pessoa natural ou jurídica, de direito público ou privado, a quem competem as ___ referentes ao tratamento de dados pessoais.","decisões",["execuções","fiscalizações","auditorias"]],
 ["LGPD","Art. 5º, VII","Operador: pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do ___.","controlador",["titular","encarregado","Poder Público"]],
 ["LGPD","Art. 5º, VIII","Encarregado: pessoa indicada pelo controlador e operador para atuar como canal de comunicação entre o controlador, os titulares dos dados e a ___.","Autoridade Nacional de Proteção de Dados (ANPD)",["Polícia Federal","Receita Federal","Defensoria Pública"]],
 ["LGPD","Art. 5º, XII","Consentimento: manifestação livre, informada e ___ pela qual o titular concorda com o tratamento de seus dados pessoais para uma finalidade determinada.","inequívoca",["escrita","verbal","presumida"]],
 ["LGPD","Art. 6º, I","Princípio da finalidade: realização do tratamento para propósitos legítimos, específicos, explícitos e ___ ao titular.","informados",["autorizados judicialmente","registrados","pagos"]],
 ["LGPD","Art. 6º, III","Princípio da necessidade: limitação do tratamento ao ___ necessário para a realização de suas finalidades.","mínimo",["máximo","tempo","custo"]],
 ["LGPD","Art. 7º, I","O tratamento de dados pessoais somente poderá ser realizado, entre outras hipóteses, mediante o fornecimento de ___ pelo titular.","consentimento",["autorização judicial","procuração","senha pessoal"]],
 ["LGPD","Art. 52, II","Multa simples de até 2% do faturamento da pessoa jurídica no Brasil no seu último exercício, excluídos os tributos, limitada, no total, a ___ por infração.","R$ 50.000.000,00",["R$ 5.000.000,00","R$ 10.000.000,00","R$ 100.000.000,00"]]
];
let lei=null;
function startLei(){
  const f=$("#selLei")?$("#selLei").value:"all";
  const ids=shuffle(LEI.map((_,i)=>i).filter(i=>f==="all"||LEI[i][0]===f)).slice(0,10);
  lei={ids,i:0,ans:ids.map(()=>null),order:ids.map(i=>shuffle([LEI[i][3],...LEI[i][4]])),f};
  go("lei");
}
function vLei(){
  if(!lei){go("jogos");return;}
  if(lei.i>=lei.ids.length){
    const ok=lei.ids.filter((id,k)=>lei.ans[k]===LEI[id][3]).length;
    if(ok>(S.gm.leiBest||0)){S.gm.leiBest=ok;save();}
    $("#view").innerHTML=`<div><button class="btn ghost sm" onclick="go('jogos')">← Jogos</button></div><h2>Lei seca · ${ok}/${lei.ids.length}</h2>
      <div class="stack">${lei.ids.map((id,k)=>{const L2=LEI[id],good=lei.ans[k]===L2[3];return `<div class="panel stack"><span class="qcat">${esc(L2[0]==="LGPD"?"LGPD":"Lei "+L2[0])} · ${esc(L2[1])} <span class="mark ${good?"ok":"bad"}">${good?"✓":"✗"}</span></span><p>${esc(L2[2]).replace("___",`<b class="hl2">${esc(L2[3])}</b>`)}</p>${good?"":`<p class="muted">Você marcou: ${esc(lei.ans[k])}</p>`}</div>`;}).join("")}</div>
      <div class="row"><button class="btn" onclick="startLei()">Jogar de novo</button></div>`;
    return;
  }
  const id=lei.ids[lei.i], L2=LEI[id], a=lei.ans[lei.i];
  $("#view").innerHTML=`<div class="qhead"><strong>Lei seca · ${lei.i+1} de ${lei.ids.length}</strong><button class="btn ghost sm" onclick="go('jogos')">Sair</button></div>
  <article class="panel stack"><span class="qcat">${esc(L2[0]==="LGPD"?"LGPD (Lei 13.709/2018)":L2[0]==="14.133"?"Lei 14.133/2021":"Lei 13.303/2016")} · ${esc(L2[1])}</span>
  <p class="qtext">${esc(L2[2]).replace("___",a===null?'<span class="gap">______</span>':`<b class="hl2">${esc(L2[3])}</b>`)}</p>
  <div class="opts">${lei.order[lei.i].map((o,p)=>{let c="opt";if(a!==null){c+=" locked";if(o===L2[3])c+=" right";else if(o===a)c+=" wrong";}return `<button class="${c}" data-p="${p}"><span class="l">${L[p]}</span><span>${esc(o)}</span></button>`;}).join("")}</div></article>
  ${a!==null?`<div class="row"><button class="btn" onclick="lei.i++;vLei();window.scrollTo({top:0})">${lei.i<lei.ids.length-1?"Próximo":"Ver resultado"}</button></div>`:""}`;
  if(a===null) document.querySelectorAll("#view .opt").forEach(b=>b.onclick=()=>{lei.ans[lei.i]=lei.order[lei.i][+b.dataset.p];addDay(1);vLei();});
}

/* Cálculo sem calculadora */
const pick1=a=>a[Math.floor(Math.random()*a.length)];
const brn=n=>{const s=(Math.round(n*100)/100).toString().replace(".",",");return s;};
const money=n=>"R$ "+Math.round(n).toLocaleString("pt-BR");
const CALC=[
 ()=>{let a,b;do{a=pick1([5,10,12,15,20,25,30,40,45,60,75]);b=pick1([40,60,80,120,160,200,240,300,360,400,500,640,800,1200]);}while(a*b%100);const r=a*b/100;return {q:`Quanto é ${a}% de ${b}?`,a:r,f:x=>brn(x),h:`${a}% de ${b} = ${a} × ${b} ÷ 100. Dica: 10% de ${b} = ${brn(b/10)}.`};},
 ()=>{const C=pick1([1000,2000,5000,800,1500,4000]),i=pick1([2,3,5,10]),t=pick1([3,4,6,10,12]);const r=C*i*t/100;return {q:`Juros simples: capital de ${money(C)} a ${i}% ao mês por ${t} meses. Quanto rende de juros?`,a:r,f:money,h:`J = C × i × t = ${C} × ${i}/100 × ${t}.`};},
 ()=>{const [C,i]=pick1([[1000,10],[2000,10],[10000,5],[1000,20],[5000,10],[4000,5]]);const r=C*Math.pow(1+i/100,2);return {q:`Juros compostos: ${money(C)} a ${i}% ao mês por 2 meses. Qual o montante?`,a:Math.round(r),f:money,h:`M = C × (1 + i)² = ${C} × ${brn(1+i/100)}² = ${C} × ${brn(Math.pow(1+i/100,2))}.`,simple:C*(1+2*i/100)};},
 ()=>{const [a,b]=pick1([[10,10],[20,20],[25,20],[50,20],[20,10],[10,20],[30,10],[50,50]]);const r=Math.round(((1+a/100)*(1-b/100)-1)*10000)/100;return {q:`Um preço sobe ${a}% e depois cai ${b}%. Qual a variação final?`,a:r,f:x=>(x>0?"+":"")+brn(x)+"%",h:`Multiplique os fatores: ${brn(1+a/100)} × ${brn(1-b/100)} = ${brn((1+a/100)*(1-b/100))}. Não basta somar ${a} − ${b}.`,pct:true};},
 ()=>{let a,b,c;do{a=pick1([2,3,4,5,6,8]);b=a*pick1([10,12,15,20,25,30]);c=pick1([3,5,6,7,9,10,12]);}while(c===a);const r=b*c/a;return {q:`${a} máquinas iguais produzem ${b} peças por dia. Quantas peças ${c} máquinas produzem por dia?`,a:r,f:x=>brn(x),h:`Regra de três direta: ${b} ÷ ${a} = ${b/a} por máquina; × ${c} = ${r}.`};},
 ()=>{let a,b,c;do{a=pick1([2,3,4,5,6]);b=pick1([6,8,10,12,15,20,24]);c=pick1([2,3,4,5,6,8,10,12]);}while(a*b%c||c===a);const r=a*b/c;return {q:`${a} pessoas fazem um serviço em ${b} dias. Em quantos dias ${c} pessoas fazem o mesmo serviço?`,a:r,f:x=>brn(x),h:`Regra de três inversa: ${a} × ${b} = ${a*b} pessoas-dia; ÷ ${c} = ${brn(r)}.`};},
 ()=>{let n,d,b;do{d=pick1([3,4,5,8]);n=pick1([1,2,3,5,7]);b=pick1([120,160,240,360,400,480,600]);}while(n>=d||b%d);const r=b/d*n;return {q:`Quanto é ${n}/${d} de ${b}?`,a:r,f:x=>brn(x),h:`${b} ÷ ${d} = ${b/d}; × ${n} = ${r}.`};},
 ()=>{const P=pick1([200,400,500,800,1000,1200]),d=pick1([10,15,20,25,30]);const r=P*(1-d/100);return {q:`Um produto de ${money(P)} tem desconto de ${d}%. Quanto se paga?`,a:r,f:money,h:`${money(P)} × ${brn(1-d/100)} = ${money(r)}.`};},
 ()=>{let v;do{v=[pick1([5,6,7,8,9]),pick1([4,6,7,8]),pick1([6,7,8,9,10])];}while(v.reduce((a,b)=>a+b,0)%3);const t=v.reduce((a,b)=>a+b,0),r=t/3;return {q:`Qual a média aritmética de ${v.join(", ")}?`,a:r,f:x=>brn(x),h:`(${v.join(" + ")}) ÷ 3 = ${t} ÷ 3 = ${r}.`};}
];
function calcItem(){
  const g=pick1(CALC)(), r2=x=>Math.round(x*100)/100, A=r2(g.a);
  let cand=g.pct?[A+1,A-1,A+2,A-2,A===0?5:-A,0]:[A*1.1,A*0.9,A*1.2,A*0.8,A*2,A/2,g.simple];
  cand=shuffle(cand.filter(x=>x!==undefined).map(r2)).filter(x=>g.pct||x>0);
  const opts=[A], seen=new Set([g.f(A)]);
  for(const x of cand){if(opts.length>=4)break;if(!seen.has(g.f(x))){seen.add(g.f(x));opts.push(x);}}
  let k=1;while(opts.length<4){const x=r2(A+k*7);if(!seen.has(g.f(x))){seen.add(g.f(x));opts.push(x);}k++;}
  return {...g,a:A,opts:shuffle(opts)};
}
let calc=null, ctick=null;
function startCalc(){calc={start:Date.now(),items:[],cur:calcItem(),ok:0,done:false};if(ctick)clearInterval(ctick);ctick=setInterval(calcTick,250);go("calc");}
function calcLeft(){return 90-(Date.now()-calc.start)/1000;}
function calcTick(){if(!calc||calc.done||current!=="calc"){clearInterval(ctick);ctick=null;if(calc&&!calc.done&&current!=="calc")calc.done=true;return;}const r=calcLeft(),t=$("#calcT");if(t)t.textContent=Math.ceil(Math.max(0,r))+" s";if(r<=0)calcEnd();}
function calcEnd(){calc.done=true;if(ctick){clearInterval(ctick);ctick=null;}if(calc.ok>(S.gm.calcBest||0))S.gm.calcBest=calc.ok;addDay(calc.items.length);save();vCalc();}
function vCalc(){
  if(!calc){go("jogos");return;}
  if(calc.done){
    const wrong=calc.items.filter(x=>!x.ok);
    $("#view").innerHTML=`<div><button class="btn ghost sm" onclick="go('jogos')">← Jogos</button></div><h2>Cálculo · ${calc.ok} acertos</h2>
    <p class="muted">${calc.items.length} contas em 90 segundos. Recorde: ${S.gm.calcBest||0}.</p>
    ${wrong.length?`<h3>Como fazer as que errou</h3><div class="stack">${wrong.map(x=>`<div class="panel stack"><p>${esc(x.q)}</p><p>Resposta: <b>${esc(x.f(x.a))}</b> · você marcou ${esc(x.f(x.sel))}</p><div class="expl">${esc(x.h)}</div></div>`).join("")}</div>`:""}
    <div class="row"><button class="btn" onclick="startCalc()">Jogar de novo</button></div>`;
    return;
  }
  const c=calc.cur;
  $("#view").innerHTML=`<div class="qhead"><div class="stack" style="gap:2px"><strong>Cálculo sem calculadora</strong><span class="muted num">${calc.ok} acertos · ${calc.items.length-calc.ok} erros</span></div><span class="timer num" id="calcT">${Math.ceil(calcLeft())} s</span></div>
  <article class="panel stack"><p class="qtext">${esc(c.q)}</p><div class="opts calcopts">${c.opts.map((o,p)=>`<button class="opt" data-p="${p}"><span class="l">${L[p]}</span><span class="num">${esc(c.f(o))}</span></button>`).join("")}</div></article>
  <p class="muted">Faça a conta de cabeça ou no papel. Errou, a próxima vem do mesmo jeito; a explicação aparece no fim.</p>`;
  document.querySelectorAll("#view .opt").forEach(b=>b.onclick=()=>{const v=c.opts[+b.dataset.p], ok=Math.abs(v-c.a)<0.005;calc.items.push({...c,sel:v,ok});if(ok)calc.ok++;b.classList.add(ok?"right":"wrong");setTimeout(()=>{if(!calc||calc.done)return;calc.cur=calcItem();vCalc();},ok?250:700);});
}

/* ---------- desempenho da Orientação: memoriza dias passados ---------- */
const _dayScore=dayScore, dsMemo={};
dayScore=function(k){if(k<todayK()) return dsMemo[k]!==undefined?dsMemo[k]:(dsMemo[k]=_dayScore(k)); return _dayScore(k);};

const FIX={"Uma empresa decide preencher a vaga de supervisor de almoxarifado por meio de recrutamento interno. Uma vantagem típica dessa escolha é": ["a motivação dos empregados e o aproveitamento de quem já conhece a cultura da empresa", "a renovação da cultura organizacional com ideias e práticas trazidas do mercado", "a ampliação do banco de talentos com candidatos externos e mais experientes", "a eliminação da necessidade de treinamento e de adaptação do promovido", "a ausência de vagas em cadeia, já que nenhum empregado precisa ser substituído"], "No plano de cargos e salários, a análise de cargos tem como foco principal": ["os requisitos exigidos do ocupante: mentais, físicos, responsabilidades e condições de trabalho", "a lista detalhada das tarefas executadas pelo ocupante no dia a dia do setor", "a definição do salário de mercado do cargo por meio de pesquisa salarial externa", "o histórico de desempenho e de avaliações do atual ocupante do cargo", "a escolha, entre os candidatos inscritos, do mais adequado para a vaga"], "A principal desvantagem de adotar a manutenção corretiva não planejada como estratégia predominante é": ["a ocorrência de paradas inesperadas, com alto custo de indisponibilidade e riscos", "o excesso de inspeções programadas e de ordens de serviço preventivas", "a necessidade de instrumentos caros de monitoramento contínuo das máquinas", "a troca frequente de peças que ainda estão em bom estado de conservação", "a elevada quantidade de ordens de serviço planejadas com antecedência"], "No Planejamento e Controle da Manutenção (PCM), o backlog representa": ["a carga de serviços pendentes, geralmente expressa em homens-hora ou dias de trabalho", "o tempo médio entre falhas de um equipamento crítico da instalação", "o custo total anual da manutenção, incluindo mão de obra e materiais", "o número de equipamentos parados no momento aguardando reparo", "o registro histórico das peças substituídas em cada equipamento"], "Entre os indicadores a seguir, o que pertence tipicamente à dimensão G (governança) do ESG é": ["o percentual de conselheiros independentes no Conselho", "a taxa de frequência de acidentes do trabalho na empresa", "o consumo de água por metro cúbico de produto movimentado", "as emissões de CO₂ da frota própria e terceirizada", "o percentual de mulheres no quadro total de empregados"], "A meta formulada de acordo com o critério SMART é": ["reduzir em 15% o tempo médio de emissão de pedidos até 30/06/2027", "melhorar bastante o atendimento aos clientes internos ao longo do ano", "buscar sempre a excelência em todos os processos de compras da empresa", "diminuir os custos operacionais do setor assim que for possível", "ser reconhecida como referência em logística em todo o país"], "O método direto da DFC caracteriza-se por apresentar": ["as principais classes de recebimentos e pagamentos brutos, como os de clientes e fornecedores", "a conciliação entre o lucro líquido do exercício e o caixa gerado nas operações", "apenas as atividades de investimento, como compra e venda de imobilizado", "as variações ocorridas em cada conta do patrimônio líquido no período", "os saldos finais das contas patrimoniais ao término do período"], "Na estrutura da DRE, logo após o lucro bruto são deduzidas as": ["despesas operacionais (vendas, administrativas e outras)", "deduções da receita bruta (devoluções, abatimentos e tributos)", "provisões para IR e CSLL sobre o lucro do período", "participações de empregados e administradores nos lucros", "receitas de vendas canceladas e descontos incondicionais"], "O efeito chicote (bullwhip effect) na cadeia de suprimentos é": ["a amplificação da variação dos pedidos à medida que se sobe na cadeia", "a redução dos estoques pelo compartilhamento de informações entre os elos", "o aumento das vendas no varejo causado por promoções sazonais", "o retorno de embalagens vazias do consumidor ao fabricante", "a queda geral de preços causada pela concorrência entre fornecedores"], "O modal dutoviário caracteriza-se por": ["alto custo fixo, baixo custo variável e fluxo contínuo de líquidos e gases", "baixo custo fixo de implantação e alto custo variável por tonelada", "grande flexibilidade de rotas e capacidade de levar qualquer tipo de carga", "indicação para cargas de alto valor agregado e baixo peso por unidade", "dependência das condições climáticas e de vias para poder operar"], "Na Lei 13.303/2016, quanto à ordem das fases da licitação, a habilitação": ["ocorre, como regra, após o julgamento, podendo excepcionalmente antecedê-lo", "ocorre sempre antes da apresentação das propostas comerciais pelos licitantes", "é dispensada em todas as licitações realizadas pelas empresas estatais", "ocorre somente após a assinatura do contrato com o vencedor", "é realizada simultaneamente à fase de divulgação do edital"], "Segundo a Lei 13.303/2016, a duração dos contratos, em regra,": ["não pode exceder 5 anos, salvo exceções previstas na própria lei", "não pode exceder 12 meses, admitida uma única prorrogação", "é indeterminada, ficando a critério exclusivo da estatal", "não pode exceder 10 anos em qualquer caso, sem exceções", "é limitada à vigência dos créditos do orçamento anual"], "Nas alterações de contratos da Lei 13.303/2016, os acréscimos ou supressões de obras, serviços ou compras podem chegar a": ["25% do valor inicial atualizado, e até 50% para acréscimos em reforma", "10% do valor inicial, sem exceções para obras ou reformas", "50% do valor inicial em qualquer caso, inclusive supressões", "100% do valor, desde que haja acordo entre as partes", "15% do valor inicial, e até 30% para acréscimos em obras"], "A memória cache do processador caracteriza-se por ser": ["pequena e muito rápida, guardando dados usados com frequência pela CPU", "grande e lenta, usada principalmente para cópias de segurança", "um tipo de armazenamento externo conectado pela porta USB", "não volátil, mantendo os dados sem energia, como o SSD", "exclusiva das placas de vídeo, usada para processar imagens"], "Uma intranet é": ["uma rede privada que usa as mesmas tecnologias da internet, como TCP/IP e HTTP", "uma rede pública acessível a qualquer usuário da internet sem autenticação", "um tipo de navegador corporativo instalado nos computadores da empresa", "uma rede interna que não utiliza nenhum protocolo da internet", "o mesmo que extranet, pois ambas são abertas a parceiros externos"], "A janela de navegação privada (anônima ou InPrivate) de um navegador": ["não salva histórico e cookies após fechada, mas não oculta a navegação do provedor", "torna o usuário totalmente anônimo na internet, inclusive para o provedor", "bloqueia qualquer tipo de vírus ou programa malicioso durante a navegação", "criptografa todos os sites visitados, mesmo os que não usam HTTPS", "impede que os sites visitados saibam o endereço IP do usuário"], "O encarregado pelo tratamento de dados pessoais (DPO), segundo a LGPD, é": ["a pessoa indicada para ser canal de comunicação entre controlador, titulares e ANPD", "o titular dos dados pessoais que são objeto de tratamento pela empresa", "a pessoa que executa o tratamento dos dados em nome do controlador", "o órgão federal responsável por fiscalizar o cumprimento da lei", "o fornecedor do sistema de banco de dados que armazena as informações"], "Sobre a LGPD, é correto afirmar que": ["o tratamento pode ocorrer sem consentimento para cumprir obrigação legal ou regulatória", "o consentimento do titular é a única base legal para tratar dados pessoais", "a lei se aplica apenas a dados pessoais armazenados em meio digital", "a lei não se aplica a empresas públicas nem a sociedades de economia mista", "dados anonimizados continuam sendo considerados dados pessoais pela lei"], "Leia: 'A transição energética não significa abandonar de imediato os combustíveis fósseis, mas reduzir gradualmente sua participação na matriz, enquanto se ampliam as fontes renováveis.' Depreende-se do trecho que": ["a mudança é progressiva, com convivência temporária entre fósseis e renováveis", "os combustíveis fósseis devem ser eliminados imediatamente da matriz energética", "as fontes renováveis já substituíram completamente as fontes fósseis", "a participação dos combustíveis fósseis na matriz deve continuar crescendo", "a transição energética é inviável nas condições econômicas atuais"], "O plano de carreira em Y caracteriza-se por": ["oferecer ao técnico a opção de crescer sem precisar assumir cargos de gestão", "permitir o crescimento profissional apenas por meio de cargos gerenciais", "prever promoções exclusivamente com base no tempo de serviço na empresa", "eliminar a progressão salarial dos especialistas que não assumem gestão", "restringir a carreira do empregado a um único cargo durante toda a vida"], "A TPM (Manutenção Produtiva Total) tem como uma de suas bases": ["a manutenção autônoma, em que operadores fazem cuidados básicos nos equipamentos", "a centralização de toda a atividade de manutenção na equipe especializada", "a eliminação do planejamento e da programação formal da manutenção", "a adoção exclusiva da manutenção corretiva em todos os equipamentos", "a terceirização obrigatória de todos os serviços de manutenção"], "Desde a Lei 11.638/2007, a Demonstração dos Fluxos de Caixa (DFC) substituiu, entre as demonstrações obrigatórias, a": ["DOAR (Origens e Aplicações de Recursos)", "DRE (Resultado do Exercício)", "DMPL (Mutações do Patrimônio Líquido)", "DVA (Valor Adicionado)", "DLPA (Lucros ou Prejuízos Acumulados)"], "O documento fiscal eletrônico que acompanha a prestação do serviço de transporte de cargas é o": ["CT-e (Conhecimento de Transporte Eletrônico)", "NFS-e (Nota Fiscal de Serviço Eletrônica)", "MDF-e (Manifesto de Documentos Fiscais)", "DANFE (Documento Auxiliar da NF-e)", "ECD (Escrituração Contábil Digital)"], "O modal ferroviário é mais indicado para": ["grandes volumes de carga de baixo valor agregado a longas distâncias", "pequenas encomendas urgentes entregues em áreas urbanas densas", "entregas porta a porta com grande flexibilidade de rotas e horários", "transporte de gases e líquidos em fluxo contínuo e ininterrupto", "cargas perecíveis de altíssimo valor em rotas internacionais"], "Entre as funções básicas da embalagem, inclui-se": ["proteger o produto, facilitar a movimentação e comunicar informações", "aumentar o peso da carga para dar mais estabilidade no transporte", "substituir a nota fiscal no transporte da mercadoria até o cliente", "eliminar a necessidade de unitização e de paletização das cargas", "dispensar o controle de estoque dos itens já embalados"], "Pela Lei 13.303/2016, as estatais estão dispensadas de licitar na": ["comercialização de produtos e serviços ligados ao seu objeto social (atividade-fim)", "compra de material de escritório de qualquer valor, por ser bem de consumo", "contratação de obras de grande vulto ligadas à expansão da empresa", "aquisição de bens e serviços comuns, que deve ocorrer por pregão", "contratação de serviços contínuos de limpeza e de conservação predial"], "Pela Lei 13.303/2016, a garantia exigida do contratado não excederá, em regra,": ["5% do valor do contrato, podendo chegar a 10% em obras de grande vulto", "1% do valor do contrato, independentemente do objeto contratado", "10% do valor do contrato em qualquer caso, sem exceções previstas", "30% do valor do contrato, quando houver risco técnico relevante", "20% do valor do contrato, a critério exclusivo da estatal"], "Comparado ao HDD, o SSD caracteriza-se por": ["não ter partes móveis, com leitura e gravação bem mais rápidas", "usar discos magnéticos giratórios lidos por cabeçote", "ser memória volátil, que perde os dados sem energia, como a RAM", "ser sempre mais barato por gigabyte do que o HDD tradicional", "ter maior tempo de acesso por depender de movimento mecânico"], "Pela LGPD, a multa simples por infração pode chegar a": ["2% do faturamento no Brasil, limitada a R$ 50 milhões por infração", "10% do faturamento mundial do grupo econômico, sem limite", "R$ 1 milhão por infração, independentemente do faturamento", "5% do lucro líquido anual, limitada a R$ 10 milhões", "R$ 500 milhões por infração, nos casos de vazamento"], "O recrutamento externo apresenta, como desvantagem típica em relação ao recrutamento interno,": ["ser mais demorado e caro, além de poder frustrar quem esperava promoção", "impedir a entrada de novas ideias e experiências na organização", "gerar o chamado efeito dominó, com vagas em cadeia a preencher", "limitar o banco de candidatos aos atuais empregados da empresa", "dispensar a etapa de seleção, pois o candidato já vem aprovado"], "Em um programa de integração (onboarding), o principal objetivo é": ["ambientar o novo empregado à cultura, às normas e às pessoas da organização", "avaliar o desempenho anual do empregado em relação às metas definidas", "definir o salário de mercado do cargo por meio de pesquisa salarial", "substituir o treinamento técnico específico exigido pelo cargo", "encerrar formalmente o período de experiência do contrato de trabalho"], "Na avaliação de desempenho por objetivos (APO), o desempenho é medido": ["pelo alcance de metas previamente negociadas entre gestor e empregado", "pela comparação forçada do empregado com os colegas da mesma equipe", "apenas pela opinião dos clientes externos atendidos pelo empregado", "pelo tempo de casa do empregado e pelas promoções já recebidas", "pelos incidentes críticos registrados pelo RH ao longo do ano"], "Job rotation, como técnica de desenvolvimento de pessoas, consiste em": ["fazer o empregado passar por diferentes cargos ou setores para ampliar competências", "reduzir a jornada de trabalho dos empregados de forma rotativa entre as equipes", "alternar periodicamente os gestores responsáveis pela avaliação de desempenho", "trocar periodicamente os fornecedores contratados para os treinamentos", "desligar os empregados com pior desempenho ao final de cada ciclo"], "O levantamento de necessidades de treinamento (LNT) busca identificar, principalmente,": ["a diferença entre as competências exigidas pelo cargo e as que o empregado possui", "o custo total da folha de pagamento e dos encargos sociais do período", "o número de vagas abertas e ainda não preenchidas no semestre", "o grau de satisfação dos empregados com o pacote de benefícios", "a quantidade de horas extras realizadas por setor no último ano"], "Na gestão por competências, a etapa de mapeamento de competências tem como finalidade": ["identificar a lacuna entre as competências necessárias à estratégia e as já existentes", "definir o piso salarial da categoria em negociação com os empregados", "escolher o sindicato que vai representar os empregados nas negociações", "fixar a jornada de trabalho e as escalas de revezamento das equipes", "calcular a provisão de férias e de 13º salário dos empregados"], "A técnica dos 5 porquês é utilizada para": ["chegar à causa raiz de um problema perguntando sucessivamente por que ocorreu", "definir as cinco metas anuais prioritárias do sistema de gestão integrado", "classificar as auditorias internas em cinco tipos de acordo com o escopo", "ordenar as não conformidades encontradas de acordo com seu custo", "calcular o índice de satisfação dos clientes em cinco níveis"], "Um bem do ativo imobilizado é inicialmente mensurado pelo": ["custo de aquisição, incluindo gastos para colocá-lo em condições de uso", "valor de mercado do bem apurado na data de cada balanço", "valor da apólice de seguro contratada para o bem", "valor residual estimado ao final da vida útil do bem", "preço de venda de um bem semelhante usado no mercado"], "A vida útil de um bem do imobilizado corresponde": ["ao período em que se espera usar o ativo ou às unidades que se espera obter dele", "ao prazo de garantia dado pelo fabricante na nota fiscal de compra do bem", "ao tempo que falta até o encerramento do exercício social da empresa", "ao período de pagamento do financiamento contratado para adquirir o bem", "ao prazo negociado para pagamento ao fornecedor que vendeu o bem"], "No controle patrimonial, o termo de responsabilidade serve para": ["formalizar qual empregado ou setor responde pela guarda e conservação do bem", "autorizar a compra de um novo bem para substituir outro já depreciado", "registrar a depreciação mensal do bem no sistema de contabilidade", "definir o preço de venda do bem quando ele for baixado do patrimônio", "contratar o seguro do patrimônio contra incêndio e roubo"], "A confiabilidade de um equipamento expressa": ["a probabilidade de funcionar sem falhar, por um período, em condições definidas", "o tempo médio gasto pela equipe para repará-lo depois de uma falha", "o custo total de sua manutenção anual, incluindo peças e mão de obra", "o número de operadores necessários para mantê-lo em funcionamento", "a quantidade de peças sobressalentes mantidas em estoque para ele"], "A manutenção corretiva planejada se diferencia da não planejada porque": ["a intervenção é preparada e programada por decisão gerencial, mesmo após falha", "ocorre sempre antes de qualquer sinal de falha ou de queda de desempenho", "depende obrigatoriamente de monitoramento por análise de vibração", "é executada exclusivamente pelos operadores, sem apoio da manutenção", "nunca envolve substituição de peças, apenas ajustes e lubrificação"], "No PCM, a criticidade dos equipamentos serve para": ["priorizar os recursos nos ativos cuja falha causa maior impacto em segurança e produção", "definir o preço de venda dos equipamentos que serão desativados pela empresa", "calcular a depreciação contábil de cada equipamento de acordo com o seu uso", "escolher o fornecedor de peças mais barato para cada equipamento da planta", "eliminar a manutenção preventiva dos equipamentos que são menos utilizados"], "A Manutenção Centrada em Confiabilidade (MCC/RCM) parte da análise": ["das funções do equipamento, dos modos de falha e de suas consequências", "do menor custo de compra das peças sobressalentes no mercado", "da opinião dos operadores sobre qual equipamento é mais moderno", "do calendário fixo recomendado pelo fabricante, sem exceções", "do número de empregados disponíveis na equipe de manutenção"], "Um indicador de eficácia em um setor de compras seria": ["o percentual de pedidos entregues dentro do prazo e da especificação", "o custo médio de cada pedido emitido pelo setor no período", "o número de horas trabalhadas por comprador em cada mês", "o consumo de papel e de materiais de escritório do setor", "o valor do salário médio dos compradores em relação ao mercado"], "Em um indicador, a meta representa": ["o valor que se pretende alcançar em um prazo definido", "a fórmula matemática usada para calcular o indicador", "a fonte dos dados utilizados no cálculo do indicador", "a frequência com que os dados do indicador são coletados", "o responsável pela apuração e divulgação do indicador"], "Indicadores de efetividade buscam medir": ["o impacto ou a transformação gerada pelos resultados alcançados", "a relação entre os recursos consumidos e os produtos gerados", "apenas o cumprimento do orçamento aprovado para o período", "o tempo de execução de cada tarefa realizada pela equipe", "a quantidade de relatórios emitidos pela área no período"], "No Balanced Scorecard, o mapa estratégico tem a função de": ["mostrar as relações de causa e efeito entre os objetivos das quatro perspectivas", "listar todos os empregados da organização e suas respectivas funções", "registrar os lançamentos contábeis do período em ordem cronológica", "definir o organograma da empresa e os níveis hierárquicos de cada área", "substituir o orçamento anual por metas qualitativas de longo prazo"], "A venda de mercadorias a prazo gera, no momento da venda, débito em": ["Clientes (Duplicatas a Receber) e crédito em Receita de Vendas", "Caixa e crédito em Receita de Vendas, pelo valor total da venda", "Receita de Vendas e crédito em Clientes (Duplicatas a Receber)", "Fornecedores e crédito em Estoques, pelo custo das mercadorias", "Estoques e crédito em Clientes, pelo valor da nota fiscal"], "O balancete de verificação tem como objetivo principal": ["verificar se a soma dos saldos devedores é igual à dos credores", "apurar o lucro tributável para cálculo do IRPJ e da CSLL", "substituir o Balanço Patrimonial nas publicações obrigatórias", "registrar os fatos contábeis em ordem cronológica, como o Diário", "calcular a depreciação dos bens do imobilizado no período"], "O eSocial é a obrigação acessória que reúne, de forma unificada, as informações": ["trabalhistas, previdenciárias e fiscais relativas aos empregados", "contábeis registradas no Livro Diário e no Livro Razão", "do imposto de renda e da contribuição social da pessoa jurídica", "do ICMS e do IPI devidos nas operações com mercadorias", "das operações de importação e de exportação da empresa"], "No método indireto, uma redução no saldo de Contas a Receber de clientes deve ser": ["somada ao lucro líquido, pois o caixa recebido foi maior que as vendas", "subtraída do lucro líquido, pois indica vendas não recebidas no período", "ignorada, pois não afeta o caixa nem o resultado do exercício", "classificada como atividade de investimento, por envolver recebíveis", "classificada como atividade de financiamento junto aos clientes"], "O fluxo de caixa projetado é útil principalmente para": ["antecipar períodos de falta ou sobra de caixa e planejar captações e aplicações", "apurar o lucro contábil do exercício e a base de cálculo dos tributos", "calcular a depreciação dos ativos imobilizados ao longo da vida útil", "substituir o Balanço Patrimonial nas demonstrações publicadas", "registrar diariamente os fatos contábeis ocorridos na empresa"], "Em um orçamento de caixa, o saldo mínimo de caixa desejado serve para": ["proteger a empresa contra imprevistos e indicar quando será preciso captar", "calcular o lucro bruto e a margem de contribuição de cada produto", "medir a rentabilidade obtida pelos sócios sobre o capital investido", "definir o preço de venda dos produtos com base nos custos", "substituir a conciliação bancária mensal das contas da empresa"], "O ciclo de caixa (ciclo financeiro) corresponde ao": ["prazo médio de estocagem mais o de recebimento, menos o de pagamento", "prazo médio de pagamento mais o prazo médio de recebimento", "tempo entre a compra do imobilizado e a sua venda ou baixa", "período de vigência do orçamento de caixa aprovado pela diretoria", "prazo de estocagem menos o de recebimento, mais o de pagamento"], "Pela Lei 6.404/1976, as receitas e despesas financeiras, na DRE, aparecem": ["entre as despesas operacionais, antes do resultado antes dos tributos", "antes da receita líquida, junto com as deduções da receita bruta", "depois do lucro líquido, como destinação do resultado do exercício", "como deduções da receita bruta, ao lado dos impostos sobre vendas", "fora da DRE, aparecendo apenas na Demonstração dos Fluxos de Caixa"], "O conceito de nível de serviço logístico refere-se": ["ao desempenho oferecido ao cliente em prazo, disponibilidade e confiabilidade", "ao número de empregados e de turnos de trabalho do setor de logística", "ao valor do frete cobrado por quilômetro rodado pelas transportadoras", "ao tamanho e à capacidade de armazenagem dos armazéns da empresa", "ao total de veículos da frota própria disponíveis para as entregas"], "Na logística, a análise de trade-off significa": ["avaliar compensações de custo, pois reduzir o de uma atividade pode elevar o de outra", "eliminar o transporte próprio e terceirizar tudo para reduzir os custos logísticos", "contratar sempre o fornecedor mais barato, em qualquer situação de compra", "aumentar os estoques sem limite para evitar qualquer falta de material", "negociar com fornecedores considerando apenas o menor preço unitário"], "O VMI (Vendor Managed Inventory) é uma prática em que": ["o fornecedor gerencia o reabastecimento do estoque do cliente com dados compartilhados", "o cliente passa a fabricar os próprios insumos para não depender de fornecedores", "o estoque é mantido apenas no varejo, sem estoques no fabricante", "não há troca de informações entre fornecedor e cliente sobre o estoque", "o transporte das mercadorias é sempre feito pelo próprio cliente"], "O just in time (JIT) tem como objetivo central": ["produzir e entregar na quantidade e no momento exatos, reduzindo estoques", "manter grandes estoques de segurança em todos os elos da cadeia", "comprar sempre em grandes lotes para obter desconto por quantidade", "eliminar o planejamento da produção, que passa a ser feito sob demanda", "priorizar o transporte aéreo para garantir a rapidez das entregas"], "O blockchain, aplicado à cadeia de suprimentos, contribui principalmente para": ["a rastreabilidade e a segurança dos registros compartilhados na cadeia", "o aumento do uso de papel e de assinaturas físicas nos processos", "a eliminação da necessidade de transporte físico das mercadorias", "a redução do número de fornecedores da cadeia a apenas um", "a substituição dos armazéns fechados por depósitos a céu aberto"], "O transit point se diferencia de um centro de distribuição convencional porque": ["recebe cargas consolidadas e as redistribui rapidamente, sem manter estoque", "guarda grandes estoques por longos períodos para atender à demanda sazonal", "é sempre um armazém alfandegado, sob controle direto da Receita Federal", "atende apenas cargas a granel líquidas, recebidas por dutos e tanques", "dispensa o uso de veículos, pois a carga é movimentada só por esteiras"], "O TMS (Transportation Management System) é um sistema voltado para": ["planejar, executar e controlar o transporte, como roteirização e frete", "gerenciar os endereços e a separação de pedidos dentro do armazém", "controlar a folha de pagamento e os benefícios dos motoristas", "registrar a contabilidade e as obrigações fiscais da empresa", "planejar a produção da fábrica a partir da lista de materiais"], "A pegada de carbono de uma operação logística pode ser reduzida, por exemplo, com": ["a consolidação de cargas e o uso de modais de menor emissão por tonelada", "o aumento das viagens com veículos parcialmente vazios para agilizar entregas", "a priorização do modal aéreo para reduzir o tempo de trânsito das cargas", "o aumento das distâncias percorridas para evitar vias congestionadas", "a redução da taxa de ocupação dos caminhões em cada viagem realizada"], "O Operador de Transporte Multimodal (OTM) é": ["a pessoa jurídica contratada como principal, responsável do embarque à entrega", "o motorista responsável pelo primeiro trecho rodoviário do percurso", "o órgão público federal que regula e fiscaliza o transporte aquaviário", "o despachante aduaneiro contratado pelo importador para o desembaraço", "o fabricante da carga, que contrata cada transportador separadamente"], "O sistema roll-on/roll-off (ro-ro) caracteriza-se por": ["embarcar e desembarcar cargas rodantes, como veículos, por meio de rampas", "bombear líquidos e gases por dutos diretamente para os tanques do navio", "içar contêineres com guindastes de pórtico instalados no cais", "transportar granéis sólidos em vagões até os terminais portuários", "utilizar aviões cargueiros adaptados para cargas de grande volume"], "Uma desvantagem típica do modal hidroviário é": ["a menor velocidade e a dependência de condições de navegabilidade", "o alto custo variável por tonelada transportada em longas distâncias", "a baixa capacidade de carga de cada embarcação utilizada", "a impossibilidade de transportar granéis sólidos ou líquidos", "a exigência de estradas pavimentadas até os pontos de embarque"], "O Manifesto Eletrônico de Documentos Fiscais (MDF-e) tem a função de": ["vincular os documentos fiscais transportados na unidade de carga utilizada", "substituir o contrato de transporte multimodal firmado entre as partes", "registrar a escrituração contábil e fiscal da empresa transportadora", "comprovar a habilitação e o treinamento do motorista do veículo", "autorizar a importação das mercadorias junto à Receita Federal"], "O estoque de segurança tem como função": ["proteger contra variações na demanda e no tempo de reposição", "substituir o ponto de pedido no controle de reposição", "eliminar o custo de armazenagem dos itens de maior giro", "reduzir o nível de serviço oferecido aos clientes internos", "acumular itens obsoletos até a sua baixa contábil"], "O MRP (Material Requirements Planning) calcula as necessidades de materiais a partir": ["do plano mestre de produção, da lista de materiais e dos estoques", "apenas do histórico de vendas do ano anterior, ajustado pela inflação", "da curva ABC dos fornecedores e do valor de compra de cada um", "dos cartões kanban que circulam entre os postos do chão de fábrica", "do saldo bancário e do orçamento de compras disponível no mês"], "O endereçamento de estoque em um armazém tem como objetivo": ["identificar com precisão a localização de cada item, agilizando guarda e separação", "definir o preço de venda dos itens de acordo com a posição ocupada no armazém", "registrar a depreciação das estantes e dos equipamentos de armazenagem", "substituir a nota fiscal de entrada na conferência do recebimento", "controlar a jornada e a produtividade dos operadores de cada turno"], "No flow rack (estante dinâmica), os itens deslizam por roletes inclinados, o que favorece": ["o PEPS, pois o abastecimento é feito por trás e a retirada pela frente", "o UEPS em qualquer situação, pois o último item a entrar sai primeiro", "a armazenagem de cargas longas, como tubos, barras e perfis metálicos", "a guarda de produtos a granel líquido em tanques de grande volume", "o bloqueio de corredores, reduzindo o acesso das empilhadeiras"], "A cubagem de uma carga é importante na armazenagem e no transporte porque": ["permite calcular o volume ocupado e compará-lo ao peso para definir frete", "indica a data de validade e o lote de fabricação do produto armazenado", "define o número de notas fiscais que devem acompanhar a carga", "substitui a pesagem em balança na expedição de cargas fracionadas", "determina o código NCM da mercadoria para fins de tributação"], "O pick-to-light é uma tecnologia de separação em que": ["luzes nas posições indicam ao operador onde e quantos itens retirar", "os paletes são movidos por gravidade em roletes até a área de saída", "drones fazem a contagem do estoque nas posições mais altas", "o operador recebe as instruções de separação por comando de voz", "as etiquetas dos itens são lidas por radiofrequência (RFID)"], "Em um armazém, a área de quarentena serve para": ["segregar materiais que aguardam inspeção ou que foram reprovados", "guardar os itens de maior giro perto da área de expedição", "estacionar os caminhões que aguardam a carga de expedição", "armazenar os documentos fiscais de entrada e de saída", "receber e cadastrar os visitantes e prestadores de serviço"], "A classificação dos itens por giro para posicioná-los no armazém recomenda que os itens de maior giro fiquem": ["próximos às áreas de expedição e em alturas de fácil acesso", "nos níveis mais altos e distantes das áreas de expedição", "na área de quarentena, para serem inspecionados com frequência", "fora do sistema de endereçamento, para agilizar a separação", "junto aos itens obsoletos, aproveitando os espaços livres"], "A empilhadeira contrabalançada recebe esse nome porque": ["possui um contrapeso na traseira para equilibrar a carga levada à frente", "usa apenas a gravidade para mover a carga em rampas inclinadas", "não precisa de operador, pois é guiada por sensores e trilhas no piso", "trabalha apenas em corredores estreitos, com garfos que giram lateralmente", "eleva a carga por cabos de aço presos a trilhos suspensos no teto"], "A ponte rolante é indicada para": ["movimentar cargas pesadas suspensas, ao longo de um vão, em galpões", "transportar paletes entre cidades em rotas de longa distância", "separar pedidos pequenos em armazéns de comércio eletrônico", "bombear combustíveis entre tanques de um terminal", "armazenar cargas longas em estruturas do tipo cantilever"], "O filme stretch, usado no envolvimento de paletes, tem como função principal": ["estabilizar e proteger a carga unitizada durante a movimentação", "identificar o destino e o destinatário da carga na expedição", "aumentar o peso do palete para evitar tombamento no transporte", "substituir o palete de madeira na formação da carga unitizada", "refrigerar produtos perecíveis durante todo o transporte"], "A embalagem terciária é aquela que": ["agrupa embalagens secundárias para transporte e armazenagem, como o palete", "tem contato direto com o produto e o protege da contaminação externa", "é a própria rotulagem do produto, com as informações ao consumidor", "é descartada pelo consumidor final antes de abrir a embalagem primária", "serve apenas para exposição do produto na prateleira do ponto de venda"], "A movimentação de materiais por gravidade, como em rampas e roletes inclinados, segue o princípio de": ["aproveitar a gravidade para reduzir o esforço e o custo da movimentação", "aumentar o número de manuseios para garantir a conferência dos itens", "evitar a mecanização em qualquer caso, priorizando o trabalho manual", "movimentar sempre itens unitários, nunca cargas unitizadas", "priorizar o transporte manual por ser mais flexível e mais barato"], "O AMR (Autonomous Mobile Robot) diferencia-se do AGV tradicional por": ["navegar com sensores e mapas, desviando de obstáculos sem trilhas fixas", "depender de fitas magnéticas ou trilhos fixos instalados no piso", "ser operado manualmente por um motorista habilitado em cada turno", "servir apenas para içar contêineres em terminais portuários", "funcionar somente em áreas externas, fora do armazém"], "Pela Lei 13.303/2016, a licitação é dispensável, entre outras hipóteses,": ["em emergência, quando a urgência puder causar prejuízo ou risco", "sempre que a estatal preferir negociar diretamente com o fornecedor", "para qualquer compra de bens comuns, independentemente do valor", "quando houver mais de três fornecedores aptos no mercado", "para obras de grande vulto ligadas à atividade-fim da estatal"], "Na Lei 13.303/2016, a contratação direta por inexigibilidade é cabível, por exemplo, na aquisição de": ["materiais que só possam ser fornecidos por produtor ou representante exclusivo", "material de escritório de baixo valor, comprado de forma recorrente pela empresa", "bens comuns por meio de pregão eletrônico com vários fornecedores no mercado", "serviços de limpeza, havendo vários fornecedores capazes de prestá-los", "obras de engenharia com projeto básico já aprovado pela diretoria"], "A Lei 13.303/2016 aplica-se": ["às empresas públicas e sociedades de economia mista de todos os entes federativos", "somente à administração direta da União, excluídos estados e municípios", "apenas às autarquias e fundações públicas federais e estaduais", "exclusivamente às empresas privadas concessionárias de serviço público", "somente às estatais dependentes de recursos do Tesouro Nacional"], "Na Lei 13.303/2016, a fase de negociação com o primeiro colocado tem como objetivo": ["obter condições mais vantajosas, sobretudo se o preço superar o orçamento", "alterar o objeto da licitação para adequá-lo à proposta apresentada", "incluir novos licitantes no certame após a fase de julgamento", "dispensar a habilitação do licitante mais bem classificado", "definir a modalidade da licitação após a abertura das propostas"], "O sistema de registro de preços é adequado quando": ["há contratações frequentes, com entregas parceladas e quantidade incerta", "a estatal deseja contratar uma obra única e específica de grande porte", "o fornecedor do bem é exclusivo e não há possibilidade de competição", "a contratação é emergencial e precisa ser feita imediatamente", "se pretende vender bens inservíveis a quem oferecer o maior lance"], "Na Lei 14.133/2021, o agente de contratação é": ["a pessoa designada para tomar decisões e conduzir o certame até a homologação", "o fornecedor vencedor da licitação, responsável pela execução do contrato", "o fiscal do contrato, que acompanha a execução após a assinatura", "o servidor que realiza o pagamento ao contratado após cada medição", "o órgão de controle externo que fiscaliza as licitações do ente"], "Na Lei 14.133/2021, o diálogo competitivo é a modalidade usada para": ["contratações de inovação ou soluções complexas, com diálogo com pré-selecionados", "alienação de bens móveis inservíveis ou apreendidos a quem der o maior lance", "escolha de trabalho técnico, científico ou artístico mediante prêmio ao vencedor", "aquisição de bens e serviços comuns de pronta entrega pelo menor preço", "contratação de obras e serviços de engenharia de pequeno valor"], "Na Lei 14.133/2021, o leilão é a modalidade utilizada para": ["alienação de imóveis ou de móveis inservíveis ou apreendidos a quem der o maior lance", "aquisição de bens e serviços comuns pelo critério de menor preço ou maior desconto", "contratação de serviços comuns e especiais de engenharia por técnica e preço", "escolha de trabalho técnico, científico ou artístico mediante prêmio", "contratação de soluções inovadoras com diálogo entre licitantes"], "Na Lei 14.133/2021, o termo de referência é o documento": ["que define objeto, fundamentação, modelo de execução e pagamento de bens e serviços", "que encerra o contrato após o recebimento definitivo do objeto contratado", "que aplica sanções administrativas ao contratado em caso de inexecução", "emitido pelo licitante junto com sua proposta de preços e planilhas", "que registra os preços ofertados para contratações futuras da Administração"], "Na Lei 14.133/2021, a matriz de riscos é a cláusula contratual que": ["define a alocação dos riscos entre as partes e a responsabilidade por eventos", "lista os licitantes impedidos de contratar com a Administração Pública", "define a ordem das fases da licitação e os prazos de cada etapa", "estabelece o salário dos empregados terceirizados alocados no contrato", "substitui a garantia contratual nas contratações de grande vulto"], "O critério de julgamento 'maior retorno econômico' é típico de contratos": ["de eficiência, com remuneração por percentual da economia gerada", "de alienação de bens imóveis a quem oferecer o maior lance", "de aquisição de material de escritório pelo menor preço", "de concurso para escolha de trabalho artístico com prêmio", "de obras de pequeno valor executadas por empreitada"], "Na gestão de contratos, a diferença entre gestor e fiscal é que": ["o gestor cuida dos aspectos administrativos e o fiscal acompanha a execução", "o fiscal assina o contrato e o gestor executa diretamente o serviço contratado", "o gestor é sempre um empregado indicado pelo contratado para representá-lo", "o fiscal define o preço do contrato e o gestor aprova os pagamentos", "ambos têm exatamente as mesmas atribuições, mudando apenas o nome"], "O recebimento provisório do objeto contratado tem como finalidade": ["verificar inicialmente a conformidade, antes da verificação detalhada", "encerrar definitivamente todas as obrigações assumidas pelo contratado", "dispensar a garantia de qualidade e a responsabilidade pelo objeto", "substituir a fiscalização do contrato durante toda a sua execução", "aplicar automaticamente multas ao contratado por qualquer atraso"], "Pela Lei 13.303/2016, os contratos das estatais com duração superior a 5 anos são admitidos, por exemplo, quando": ["se tratar de projetos previstos no plano de negócios e investimentos", "o contratado solicitar a prorrogação antes do vencimento do contrato", "o valor total do contrato for inferior a R$ 50 mil por ano", "houver dispensa de licitação por situação de emergência", "a estatal preferir, por conveniência, sem necessidade de justificativa"], "O reequilíbrio econômico-financeiro do contrato (revisão) é cabível quando": ["fatos imprevisíveis, ou de consequências incalculáveis, alteram a equação inicial", "o contratado deseja aumentar seu lucro, mesmo sem nenhum fato novo", "o índice de reajuste previsto no contrato é aplicado na data-base anual", "a estatal decide reduzir o preço do contrato de forma unilateral", "o fiscal identifica atraso na execução por culpa do contratado"], "A repactuação de preços é uma forma de manutenção do equilíbrio aplicada, em regra, a contratos de serviços contínuos com dedicação exclusiva de mão de obra, e se baseia": ["na demonstração analítica da variação dos custos, como acordos coletivos", "em índice geral de preços aplicado automaticamente a cada 12 meses", "na vontade unilateral do contratado de rever o preço a qualquer momento", "no valor de mercado do imóvel onde o serviço é prestado", "na redução do escopo do contrato para compensar perdas do contratado"], "A garantia contratual, nas modalidades previstas em lei, serve para": ["assegurar o cumprimento das obrigações e cobrir eventuais prejuízos e multas", "pagar antecipadamente o contratado antes do início da execução do objeto", "substituir a fiscalização do contrato durante toda a sua execução", "dispensar a habilitação do licitante vencedor da licitação", "financiar a execução da obra contratada com recursos do contratado"], "Na Lei 14.133/2021, a extinção do contrato pode ocorrer de forma": ["unilateral, consensual ou por decisão arbitral ou judicial", "apenas por decisão judicial transitada em julgado", "somente por vontade do contratado, mediante aviso prévio", "automaticamente após o primeiro atraso na execução", "exclusivamente por acordo verbal entre os gestores"], "Um contrato digital integrado a um sistema de gestão (ERP) traz como benefício": ["alertas automáticos de vencimento, controle de medições e rastreabilidade", "a dispensa de qualquer fiscalização sobre a execução do contrato", "a eliminação das cláusulas obrigatórias previstas na legislação", "a impossibilidade de celebrar termos aditivos durante a vigência", "a substituição da licitação pela contratação direta eletrônica"], "Pela Lei 14.063/2020, a assinatura eletrônica avançada caracteriza-se por": ["estar associada ao signatário de forma unívoca e permitir detectar alterações", "usar obrigatoriamente certificado digital emitido no padrão ICP-Brasil", "ser apenas a digitação do nome do signatário ao final do documento", "não ter validade jurídica em nenhum ato praticado pela Administração", "ser de uso exclusivo de órgãos públicos federais da administração direta"], "Na gestão de riscos contratuais, o risco de variação cambial em um contrato de importação de equipamentos pode ser mitigado por": ["cláusulas de reajuste cambial ou instrumentos de proteção (hedge)", "eliminação da fiscalização para reduzir o custo do contrato", "aumento do prazo de entrega sem justificativa técnica", "dispensa da garantia contratual exigida do fornecedor", "pagamento integral antecipado ao fornecedor, sem garantia"], "Um processador com mais núcleos (cores) tende a apresentar melhor desempenho em": ["tarefas executadas em paralelo, como vários programas abertos ao mesmo tempo", "armazenamento permanente de arquivos grandes, como vídeos e imagens", "velocidade de conexão com a internet em redes sem fio e cabeadas", "resolução e taxa de atualização da imagem exibida no monitor", "capacidade de armazenamento da memória ROM e do firmware da placa"], "No Windows 11, o atalho Shift + Delete aplicado a um arquivo": ["exclui o arquivo permanentemente, sem enviá-lo à Lixeira", "envia o arquivo à Lixeira, de onde pode ser restaurado", "renomeia o arquivo selecionado na pasta atual", "cria uma cópia do arquivo na mesma pasta", "oculta o arquivo da exibição no Explorador"], "No Excel, a função =PROCV(A2;Tabela;3;FALSO) retorna": ["o valor da 3ª coluna na linha em que A2 for encontrado exatamente", "a soma de todos os valores da 3ª coluna da tabela informada", "o número de vezes que o valor de A2 aparece na tabela", "a posição (número da linha) em que A2 aparece na tabela", "o maior valor da 3ª coluna, desconsiderando o valor de A2"], "A extranet pode ser definida como": ["a parte da rede privada de uma empresa aberta a parceiros autorizados", "a internet pública, acessível sem restrição por qualquer usuário", "uma rede doméstica sem fio usada para compartilhar a internet", "o mesmo que intranet, sem nenhuma diferença de acesso", "um programa antivírus corporativo instalado nos servidores"], "O firewall é um recurso de segurança que": ["controla o tráfego de rede, permitindo ou bloqueando conexões conforme regras", "remove vírus de arquivos já infectados e restaura os arquivos originais", "faz cópias de segurança automáticas dos arquivos para a nuvem", "criptografa o disco rígido para proteger os dados em caso de roubo", "gera senhas fortes e as armazena de forma segura para o usuário"], "A autenticação em dois fatores (2FA) aumenta a segurança porque": ["exige, além da senha, outro fator, como código no celular ou biometria", "dispensa o uso de senha, bastando o celular cadastrado do usuário", "aumenta a velocidade de acesso aos sistemas e aplicativos corporativos", "criptografa todos os e-mails enviados e recebidos pelo usuário", "impede atualizações não autorizadas do sistema operacional"], "O spyware é um programa malicioso que": ["monitora e coleta informações do usuário sem o seu consentimento", "exibe propagandas de forma excessiva e indesejada ao usuário", "se replica sozinho pela rede, sem precisar de um arquivo hospedeiro", "criptografa os arquivos do usuário e exige resgate para liberá-los", "se disfarça de programa legítimo para abrir uma porta ao invasor"], "A engenharia social, em segurança da informação, consiste em": ["explorar a confiança ou a desatenção das pessoas para obter acessos", "desenvolver programas antivírus a partir do comportamento dos usuários", "configurar servidores de rede para atender a muitos usuários", "realizar backup em nuvem dos dados sociais dos empregados", "criptografar bancos de dados com informações dos clientes"], "A Autoridade Nacional de Proteção de Dados (ANPD) tem, entre suas competências,": ["fiscalizar e aplicar sanções em caso de descumprimento da LGPD", "processar e julgar criminalmente os responsáveis por vazamentos", "registrar marcas e patentes de sistemas de proteção de dados", "julgar ações trabalhistas que envolvam dados de empregados", "emitir certificados digitais no padrão ICP-Brasil"], "Pela LGPD, dado anonimizado é aquele que": ["não permite identificar o titular, considerados meios técnicos razoáveis", "pertence a pessoa já falecida, cujos herdeiros não pediram exclusão", "está guardado apenas em papel, fora de qualquer sistema digital", "foi coletado com consentimento expresso e destacado do titular", "pertence a uma pessoa jurídica, e não a uma pessoa natural"]};Q.forEach(q=>{const f=FIX[q[1]];if(f)q[2]=f.slice();});

/* ===== v9: conteúdo novo ===== */
/* explicações completas para as questões de cálculo */
const EXPL={
"O número de anagramas da palavra PETRO é":"PETRO tem 5 letras, todas diferentes. Anagrama é permutação simples: P5 = 5! = 5 × 4 × 3 × 2 × 1 = 120. Pegadinha: se houvesse letras repetidas (como em ARARA), seria preciso dividir pelo fatorial das repetições.",
"Se 2^(x + 1) = 16, então x vale":"Escreva os dois lados na mesma base: 16 = 2⁴. Com bases iguais, iguale os expoentes: x + 1 = 4, logo x = 3. Confira: 2^(3+1) = 2⁴ = 16.",
"Uma escada de 10 m está apoiada em uma parede, formando 30° com o chão. A altura atingida na parede é":"A altura é o cateto oposto ao ângulo de 30°, e a escada é a hipotenusa. Seno = oposto ÷ hipotenusa, então altura = 10 × sen 30° = 10 × 1/2 = 5 m. Guarde: sen 30° = 1/2, cos 60° = 1/2, sen 45° = cos 45° = √2/2.",
"30% de 40% de 500 é igual a":"Porcentagem de porcentagem se multiplica: 0,30 × 0,40 = 0,12, ou seja, 12% de 500 = 60. Pegadinha: somar as taxas (70%) daria 350, que está errado.",
"Se f(x) = 3x − 2, então f(4) é igual a":"Substitua x por 4: f(4) = 3 × 4 − 2 = 12 − 2 = 10. Faça a multiplicação antes da subtração.",
"Um aparelho custa R$ 800,00 e é vendido com 15% de desconto à vista. O preço à vista é de":"Desconto de 15% significa pagar 85% do preço: 800 × 0,85 = 680. Conta de cabeça: 10% de 800 = 80; 5% = 40; desconto = 120; 800 − 120 = 680.",
"Um preço passou de R$ 80,00 para R$ 92,00. O aumento percentual foi de":"Variação percentual = aumento ÷ valor inicial. Aumento = 92 − 80 = 12; 12 ÷ 80 = 0,15 = 15%. Pegadinha: dividir por 92 (valor final) dá cerca de 13%, que está errado.",
"Após um desconto de 25%, um produto passou a custar R$ 150,00. O preço original era":"Depois do desconto sobram 75% do preço: 0,75 × P = 150, logo P = 150 ÷ 0,75 = 200. Pegadinha: somar 25% a 150 dá 187,50, porque o desconto incide sobre o preço original, não sobre o final.",
"Dois descontos sucessivos de 10% e 20% equivalem a um desconto único de":"Descontos sucessivos se multiplicam: sobra 0,90 × 0,80 = 0,72 do preço, ou seja, desconto único de 28%. Pegadinha: somar as taxas dá 30%, que está errado.",
"Um investimento de R$ 1.000,00 a juros compostos de 10% ao ano atinge, ao fim de 3 anos, o montante de":"Montante composto M = C × (1 + i)ⁿ = 1.000 × 1,1³. Faça por etapas: 1.000 → 1.100 → 1.210 → 1.331. Em juros simples seriam só R$ 1.300,00.",
"Um palete PBR (1,00 m × 1,20 m) ocupa uma área de":"Área do retângulo = comprimento × largura = 1,00 × 1,20 = 1,20 m². O palete PBR é o padrão brasileiro de 1,00 m × 1,20 m; o europeu (PEB/Euro) mede 0,80 m × 1,20 m.",
"No Excel, a célula A1 contém 10 e B1 contém 0. A fórmula =A1/B1 retorna o erro":"Dividir por zero (ou por célula vazia) gera #DIV/0!. Outros erros: #N/D (valor não encontrado no PROCV), #NOME? (nome de função errado), #REF! (referência apagada), #VALOR! (tipo de dado errado). Para tratar, use =SEERRO(A1/B1;0).",
"O valor de x na equação 3x − 7 = 2x + 5 é":"Passe os termos com x para um lado e os números para o outro, trocando o sinal: 3x − 2x = 5 + 7, logo x = 12. Confira: 3 × 12 − 7 = 29 e 2 × 12 + 5 = 29.",
"A soma das raízes da equação 2x² − 8x + 6 = 0 é":"Pelas relações de Girard, soma = −b/a e produto = c/a. Aqui a = 2, b = −8, c = 6: soma = 8/2 = 4 e produto = 6/2 = 3. As raízes são 1 e 3. Não precisa de Bhaskara.",
"Se log₂ x = 5, então x vale":"Logaritmo é expoente: logₐ x = c significa aᶜ = x. Então x = 2⁵ = 32.",
"De quantas maneiras 4 pessoas podem se sentar em 4 cadeiras enfileiradas?":"Todas as pessoas são ordenadas em todos os lugares: permutação simples, 4! = 4 × 3 × 2 × 1 = 24. Se fosse uma mesa redonda, seria (4 − 1)! = 6.",
"Em uma urna há 5 bolas vermelhas e 3 azuis. Retirando-se uma bola ao acaso, a probabilidade de ela ser azul é":"Probabilidade = casos favoráveis ÷ casos possíveis = 3 azuis ÷ 8 bolas = 3/8 (37,5%). A de ser vermelha é 5/8; as duas somam 1.",
"A área de um triângulo com base de 10 cm e altura de 6 cm é":"A área do triângulo é metade da área do retângulo de mesma base e altura: A = b × h ÷ 2 = 10 × 6 ÷ 2 = 30 cm². Pegadinha: esquecer de dividir por 2 dá 60.",
"O volume de uma caixa d'água em forma de cubo com aresta de 2 m é":"Volume do cubo = aresta³ = 2 × 2 × 2 = 8 m³. Como 1 m³ = 1.000 litros, a caixa comporta 8.000 litros.",
"A hipotenusa de um triângulo retângulo com catetos de 5 cm e 12 cm mede":"Pitágoras: hipotenusa² = 5² + 12² = 25 + 144 = 169, logo hipotenusa = 13. Decore os ternos 3-4-5, 5-12-13 e 8-15-17.",
"Se f(x) = 2x² − 3, o valor de f(−2) é":"Substitua x por −2 e eleve ao quadrado primeiro: (−2)² = 4. Depois 2 × 4 − 3 = 5. Pegadinha: fazer −2² = −4 daria −11."
};

/* flashcards de Português e Matemática */
const FC2=[
["port","Mas, porém, contudo, todavia","Conjunções adversativas (oposição)"],
["port","Pois (antes do verbo)","Conclusiva: equivale a portanto"],
["port","Pois (depois do verbo)","Explicativa: equivale a porque"],
["port","Conforme, consoante, segundo","Conjunções conformativas"],
["port","Crase antes de verbo","Nunca: começou a chover"],
["port","Crase antes de palavra masculina","Não ocorre: a pé, a prazo"],
["port","Crase em 'às 10 horas'","Obrigatória: horas determinadas"],
["port","Aspirar (= almejar)","Transitivo indireto: aspirar ao cargo"],
["port","Assistir (= ver)","Transitivo indireto: assistir ao filme"],
["port","Preferir","Prefiro isto a aquilo (sem 'do que' e sem 'mais')"],
["port","Vírgula entre sujeito e verbo","Proibida"],
["port","Oração adjetiva explicativa","Vem entre vírgulas"],
["port","Pronome oblíquo no início da frase","Errado na norma: Me disseram → Disseram-me"],
["port","Palavra atrativa (não, que, nunca)","Exige próclise: Não me disseram"],
["port","Mal × mau","Mal opõe-se a bem; mau opõe-se a bom"],
["port","Onde × aonde","Onde = lugar fixo; aonde = movimento (ir a)"],
["port","Há × a (tempo)","Há = passado; a = futuro ou distância"],
["port","Faz (tempo)","Impessoal: faz dois anos (singular)"],
["port","Voz passiva sintética","Vendem-se casas (verbo concorda com 'casas')"],
["port","Precisa-se de técnicos","Índice de indeterminação: verbo no singular"],
["mat","Porcentagem de porcentagem","Multiplica: 20% de 50% = 10%"],
["mat","Aumentos sucessivos de a% e b%","(1 + a)(1 + b) − 1"],
["mat","Juros simples","J = C · i · t"],
["mat","Montante composto","M = C · (1 + i)ⁿ"],
["mat","Regra de três inversa","Uma grandeza aumenta, a outra diminui"],
["mat","Média aritmética","Soma dos valores ÷ quantidade"],
["mat","Moda","Valor que mais se repete"],
["mat","Permutação","Ordenar todos: n!"],
["mat","Arranjo","Escolher e ordenar: n! ÷ (n − p)!"],
["mat","Probabilidade","Casos favoráveis ÷ casos possíveis"],
["mat","Produto das raízes (2º grau)","c ÷ a"],
["mat","Bhaskara","x = (−b ± √Δ) ÷ 2a, Δ = b² − 4ac"],
["mat","Área do triângulo","base × altura ÷ 2"],
["mat","Área do círculo","π · r²"],
["mat","Pitágoras","a² = b² + c²"],
["mat","PA: termo geral","aₙ = a₁ + (n − 1) · r"],
["mat","PG: termo geral","aₙ = a₁ · qⁿ⁻¹"],
["mat","1 m³","1.000 litros"],
["mat","sen 30° e cos 60°","1/2"],
["mat","Fração para porcentagem","3/4 = 0,75 = 75%"]
];

/* questões novas: Finanças, Lei 13.303 artigo por artigo e Informática avançada */
const Q9=[
["matfin","Um capital de R$ 2.000,00, aplicado a juros simples de 3% ao mês durante 5 meses, rende juros de",["R$ 300,00","R$ 320,00","R$ 600,00","R$ 2.300,00","R$ 150,00"],"J = C × i × t = 2.000 × 0,03 × 5 = 300. Pegadinha: R$ 2.300,00 é o montante (capital + juros), não os juros."],
["matfin","A taxa de juros compostos de 1% ao mês equivale, em 2 meses, a uma taxa de",["2,01%","2%","1,01%","2,1%","1,99%"],"Juros compostos se multiplicam: 1,01 × 1,01 = 1,0201, ou seja, 2,01% no período. Somar as taxas (2%) só vale para juros simples."],
["matfin","Uma dívida de R$ 1.100,00 vence em 1 mês. Com taxa de 10% ao mês, seu valor atual pelo desconto racional composto é",["R$ 1.000,00","R$ 990,00","R$ 1.010,00","R$ 1.100,00","R$ 900,00"],"Desconto racional: divide pelo fator. 1.100 ÷ 1,10 = 1.000. Pegadinha: R$ 990,00 seria o desconto comercial (1.100 × 0,90), que incide sobre o valor nominal."],
["matfin","Uma mercadoria comprada por R$ 400,00 foi vendida por R$ 500,00. O lucro em relação ao preço de venda foi de",["20%","25%","10%","80%","125%"],"Lucro = 100. Sobre o preço de venda: 100 ÷ 500 = 20%. Sobre o custo seria 100 ÷ 400 = 25%. Leia sempre sobre qual base a questão pede."],
["matfin","No regime de juros simples, a taxa de 24% ao ano é proporcional a uma taxa mensal de",["2%","2,4%","1,8%","12%","0,2%"],"Taxas proporcionais (juros simples): basta dividir pelo número de períodos. 24% ÷ 12 meses = 2% ao mês."],
["matfin","No Sistema de Amortização Constante (SAC), ao longo do financiamento,",["as amortizações são iguais e as prestações decrescem","as prestações são iguais e as amortizações crescem","os juros aumentam a cada período até o fim do prazo","as prestações crescem, pois os juros são capitalizados","as amortizações e os juros ficam constantes em todo o prazo"],"No SAC a amortização é fixa (dívida ÷ nº de parcelas). Como o saldo cai, os juros caem e a prestação diminui. Prestação constante é a Tabela Price."],
["matfin","Na Tabela Price (sistema francês de amortização), a prestação é",["constante, com juros decrescentes e amortização crescente","decrescente, com amortização constante durante todo o prazo","crescente, porque os juros aumentam a cada período pago","formada apenas por juros até o pagamento da última parcela","variável, reajustada conforme o índice de inflação do mês"],"Na Price, a prestação é fixa. No início ela é quase toda juros; com o saldo menor, os juros caem e a parte de amortização aumenta."],
["matfin","Um capital de R$ 5.000,00, aplicado a juros compostos de 10% ao ano, gera ao fim de 2 anos o montante de",["R$ 6.050,00","R$ 6.000,00","R$ 5.500,00","R$ 6.100,00","R$ 1.050,00"],"5.000 × 1,1 = 5.500 no 1º ano; 5.500 × 1,1 = 6.050 no 2º. Em juros simples seria R$ 6.000,00. R$ 1.050,00 são só os juros."],
["contab","O pagamento, em dinheiro, da despesa de aluguel do próprio mês provoca",["diminuição do ativo e do patrimônio líquido","aumento do passivo e do patrimônio líquido","diminuição do ativo e aumento do passivo","apenas uma permuta entre contas do ativo","aumento do ativo e do patrimônio líquido"],"Sai dinheiro (ativo diminui) e reconhece-se despesa (PL diminui). É um fato modificativo diminutivo."],
["contab","A compra de um veículo à vista, para uso da empresa, é um fato contábil",["permutativo, pois troca um ativo por outro","modificativo aumentativo, pois gera receita","modificativo diminutivo, pois reduz o PL","misto, pois altera o ativo e o resultado","que reduz o total do ativo da empresa"],"Sai caixa e entra veículo, pelo mesmo valor: o total do ativo e o PL não mudam. É fato permutativo."],
["contab","Pelo regime de competência, a receita de um serviço prestado em dezembro e recebido em janeiro deve ser reconhecida em",["dezembro, mês em que o serviço foi prestado","janeiro, mês em que o dinheiro foi recebido","dezembro e janeiro, metade em cada mês","fevereiro, após a conciliação bancária","qualquer mês, a critério do contador"],"Competência: receitas e despesas entram no período em que ocorrem, não quando há pagamento ou recebimento. O recebimento em janeiro só baixa o valor de Clientes."],
["contab","São contas de natureza credora",["Fornecedores, Capital Social e Receita de Vendas","Caixa, Estoques e Despesas com Salários","Clientes, Veículos e Custo das Vendas","Bancos, Capital Social e Despesa de Aluguel","Fornecedores, Clientes e Despesas Financeiras"],"Passivo, PL e receitas têm saldo credor. Ativo, despesas e custos têm saldo devedor. Cada alternativa errada mistura pelo menos uma conta devedora."],
["contab","Uma máquina de R$ 120.000,00, com valor residual de R$ 20.000,00 e vida útil de 10 anos, tem depreciação anual, pelo método linear, de",["R$ 10.000,00","R$ 12.000,00","R$ 14.000,00","R$ 2.000,00","R$ 8.000,00"],"Valor depreciável = custo − residual = 100.000. Dividido por 10 anos: 10.000 por ano. Pegadinha: esquecer o residual dá 12.000."],
["contab","Em período de preços crescentes, o método PEPS, comparado ao custo médio, tende a apresentar",["estoque final maior e custo das vendas menor","estoque final menor e custo das vendas maior","os mesmos valores, pois o método não muda nada","estoque final maior e lucro bruto também menor","estoque final menor e lucro bruto maior"],"No PEPS saem primeiro as unidades antigas (mais baratas). O custo das vendas fica menor, o lucro maior e o estoque final fica com os preços mais recentes (maiores)."],
["contab","O princípio da entidade determina que",["o patrimônio da empresa não se confunde com o dos sócios","a empresa deve continuar operando por tempo indeterminado","as receitas sejam registradas apenas quando recebidas","os ativos sejam avaliados sempre pelo valor de mercado","os sócios respondam pessoalmente pelas dívidas da empresa"],"Entidade: a contabilidade registra o patrimônio da empresa, separado do patrimônio dos sócios. Continuidade é a premissa de que a empresa seguirá operando."],
["fluxo","Na DFC, a captação de um empréstimo bancário de longo prazo é classificada em atividades de",["financiamento","investimento","operacionais","não operacionais","patrimoniais"],"Financiamento: recursos de credores e sócios (empréstimos, emissão de ações, amortização de dívidas). Investimento: compra e venda de ativos de longo prazo."],
["fluxo","Na DFC, a compra de uma máquina à vista é classificada em atividades de",["investimento","financiamento","operacionais","extraordinárias","patrimoniais"],"Aquisição de imobilizado é investimento. Se a máquina fosse comprada a prazo, não haveria saída de caixa naquele momento."],
["fluxo","No método indireto da DFC, a despesa de depreciação é",["somada ao lucro líquido, por não afetar o caixa","subtraída do lucro líquido, por reduzir o caixa","classificada como atividade de investimento","classificada como atividade de financiamento","ignorada, pois já está registrada no imobilizado"],"A depreciação reduziu o lucro, mas não saiu dinheiro. Por isso, no método indireto, ela é somada de volta ao lucro líquido."],
["fluxo","No método indireto, um aumento no saldo de Fornecedores deve ser",["somado ao lucro líquido, pois houve compras ainda não pagas","subtraído do lucro líquido, pois houve pagamento a fornecedores","classificado como atividade de financiamento da empresa","classificado como atividade de investimento da empresa","ignorado, pois não afeta o caixa da empresa no período"],"Aumento de passivo operacional = dinheiro que ficou na empresa: soma. Aumento de ativo operacional (clientes, estoques) = dinheiro que não entrou: subtrai."],
["fluxo","Uma empresa tem prazo médio de estocagem de 40 dias, de recebimento de 30 dias e de pagamento de 45 dias. O ciclo financeiro é de",["25 dias","70 dias","115 dias","15 dias","85 dias"],"Ciclo operacional = PME + PMR = 70 dias. Ciclo financeiro (de caixa) = ciclo operacional − PMP = 70 − 45 = 25 dias."],
["bp","No Balanço Patrimonial, uma dívida com vencimento 8 meses após a data do balanço é classificada no",["passivo circulante","passivo não circulante","patrimônio líquido","ativo circulante","ativo realizável a longo prazo"],"Obrigações que vencem até o fim do exercício seguinte (em regra, 12 meses) ficam no passivo circulante; depois disso, no não circulante."],
["bp","Integram o patrimônio líquido",["capital social, reservas de lucros e ações em tesouraria","empréstimos de longo prazo e debêntures emitidas","estoques, clientes e aplicações financeiras","fornecedores, salários a pagar e impostos","receitas de vendas e custo das mercadorias"],"PL: capital social, reservas de capital, ajustes de avaliação patrimonial, reservas de lucros, ações em tesouraria (redutora) e prejuízos acumulados."],
["bp","Receita bruta de R$ 100.000,00, deduções de R$ 10.000,00, CMV de R$ 50.000,00 e despesas operacionais de R$ 20.000,00 resultam em lucro bruto de",["R$ 40.000,00","R$ 50.000,00","R$ 20.000,00","R$ 90.000,00","R$ 30.000,00"],"Receita líquida = 100 − 10 = 90. Lucro bruto = 90 − 50 (CMV) = 40. As despesas operacionais só entram depois: 40 − 20 = 20 de resultado operacional."],
["bp","Com ativo circulante de R$ 300.000,00 e passivo circulante de R$ 200.000,00, o índice de liquidez corrente é",["1,50","0,67","2,50","1,00","R$ 100 mil"],"Liquidez corrente = AC ÷ PC = 300 ÷ 200 = 1,5. R$ 100 mil seria o capital circulante líquido (AC − PC), que não é índice."],
["bp","O índice de liquidez seca difere da liquidez corrente porque",["exclui os estoques do ativo circulante","inclui o ativo realizável a longo prazo","considera apenas o saldo de caixa e bancos","soma o passivo não circulante ao divisor","desconsidera os fornecedores do passivo"],"Liquidez seca = (AC − estoques) ÷ PC. Os estoques saem porque são o ativo circulante menos líquido. Só caixa ÷ PC é a liquidez imediata."],
["compras","Pela Lei 13.303/2016 (art. 39), o prazo mínimo de publicação para aquisição de bens pelo critério de menor preço ou maior desconto é de",["5 dias úteis","8 dias úteis","10 dias úteis","15 dias úteis","30 dias corridos"],"Art. 39: bens = 5 dias úteis (menor preço ou maior desconto) ou 10 dias úteis (outros critérios); obras e serviços = 15 ou 30 dias úteis; técnica, técnica e preço, integrada ou semi-integrada = 45 dias úteis."],
["compras","Pela Lei 13.303/2016 (art. 39), para obras e serviços julgados por menor preço ou maior desconto, o prazo mínimo de publicação é de",["15 dias úteis","5 dias úteis","10 dias úteis","30 dias úteis","45 dias úteis"],"Obras e serviços: 15 dias úteis (menor preço ou maior desconto) e 30 dias úteis (demais critérios). Os prazos da Lei 13.303 são em dias úteis."],
["compras","Pela Lei 13.303/2016 (art. 39), quando o julgamento for por melhor técnica ou por técnica e preço, ou houver contratação integrada ou semi-integrada, o prazo mínimo é de",["45 dias úteis","30 dias úteis","15 dias úteis","60 dias corridos","10 dias úteis"],"Art. 39, III: no mínimo 45 dias úteis, porque os licitantes precisam preparar propostas técnicas ou projetos."],
["compras","Pela Lei 13.303/2016 (art. 59), salvo no caso de inversão de fases, a fase recursal é",["única, com prazo de 5 dias úteis após a habilitação","dupla, após o julgamento e após a homologação","única, antes do julgamento, com prazo de 3 dias","inexistente nas licitações feitas por pregão","aberta a qualquer tempo até a assinatura do contrato"],"Art. 59: fase recursal única; os recursos são apresentados em 5 dias úteis após a habilitação e abrangem também os atos de julgamento e verificação de efetividade das propostas."],
["compras","São procedimentos auxiliares das licitações na Lei 13.303/2016 (art. 63)",["pré-qualificação permanente, cadastramento, registro de preços e catálogo eletrônico","pregão, concorrência, tomada de preços e convite, conforme o valor estimado","dispensa, inexigibilidade, emergência e licitação deserta ou fracassada","habilitação, julgamento, homologação e adjudicação do objeto ao vencedor","contratação integrada, semi-integrada, tarefa e empreitada por preço global"],"Art. 63: pré-qualificação permanente, cadastramento, sistema de registro de preços e catálogo eletrônico de padronização. Fases e regimes de execução são outras matérias."],
["compras","Na Lei 13.303/2016, a pré-qualificação permanente e o registro cadastral têm validade de, no máximo,",["1 ano","6 meses","2 anos","5 anos","prazo indeterminado"],"Arts. 64, § 5º, e 65, § 1º: pré-qualificação e registros cadastrais valem por até 1 ano."],
["compras","São princípios expressos no art. 31 da Lei 13.303/2016, entre outros,",["economicidade, julgamento objetivo e desenvolvimento nacional sustentável","oficialidade, gratuidade, informalismo e verdade material do processo","continuidade, autotutela e supremacia do interesse privado sobre o público","anualidade, universalidade e exclusividade da lei orçamentária anual","hierarquia, disciplina e verdade sabida na aplicação de sanções"],"Art. 31: impessoalidade, moralidade, igualdade, publicidade, eficiência, probidade administrativa, economicidade, desenvolvimento nacional sustentável, vinculação ao instrumento convocatório, obtenção de competitividade e julgamento objetivo."],
["compras","Pela Lei 13.303/2016 (art. 29, III), a licitação é dispensável quando",["não acudirem interessados à licitação anterior e ela não puder ser repetida sem prejuízo","houver apenas um fornecedor exclusivo do bem, comprovado por atestado do sindicato","o valor da obra superar R$ 1 milhão e houver urgência administrativa justificada","a estatal preferir contratar um fornecedor já conhecido e bem avaliado no mercado","o objeto for serviço técnico especializado, prestado por profissional de notória especialização"],"Licitação deserta que não pode ser repetida sem prejuízo é caso de dispensa (art. 29, III). Fornecedor exclusivo e notória especialização são inexigibilidade (art. 30)."],
["contr","Pela Lei 13.303/2016 (art. 72), os contratos",["somente podem ser alterados por acordo entre as partes","podem ser alterados unilateralmente pela estatal a qualquer tempo","não admitem nenhum tipo de alteração depois de assinados","podem ser alterados só pelo contratado, mediante aviso prévio","são alterados automaticamente a cada 12 meses de vigência"],"Diferença importante para a Lei 14.133: nas estatais não existe alteração unilateral. Art. 72: alteração só por acordo, sem violar a obrigação de licitar."],
["contr","Pela Lei 13.303/2016 (art. 68), os contratos das estatais regulam-se",["por suas cláusulas, pela própria lei e pelos preceitos de direito privado","exclusivamente pelas normas de direito público previstas na Lei 14.133","apenas pela vontade da estatal, sem nenhuma cláusula obrigatória","pelo Código de Defesa do Consumidor, em todos os casos de compra","pelas normas trabalhistas da CLT, quando houver mão de obra alocada"],"Art. 68: cláusulas do contrato, Lei 13.303 e preceitos de direito privado. Por isso não há as prerrogativas típicas (cláusulas exorbitantes) da Lei 14.133."],
["contr","Pela Lei 13.303/2016 (art. 83), a suspensão temporária de participação em licitação e o impedimento de contratar com a estatal têm prazo de até",["2 anos","5 anos","1 ano","6 meses","10 anos"],"Art. 83, III: prazo não superior a 2 anos. As sanções do art. 83 são advertência, multa e essa suspensão."],
["contr","As sanções do art. 83 da Lei 13.303/2016 pela inexecução total ou parcial do contrato são",["advertência, multa e suspensão temporária de até 2 anos","advertência, multa, suspensão e declaração de inidoneidade","multa, prisão do representante legal e perda de bens","apenas multa, limitada a 10% do valor total do contrato","rescisão automática e devolução de todos os pagamentos"],"A Lei 13.303 prevê só três sanções: advertência, multa e suspensão de até 2 anos. Declaração de inidoneidade é sanção da Lei 14.133."],
["contr","Pela Lei 13.303/2016 (art. 73), é vedado o contrato",["por prazo indeterminado","com cláusula de garantia","com duração maior que 12 meses","com matriz de riscos","assinado por meio eletrônico"],"Art. 73: é vedado o contrato por prazo indeterminado. A duração máxima, em regra, é de 5 anos (art. 71)."],
["compras","Pela Lei 13.303/2016 (art. 42), na contratação integrada o contratado é responsável por",["elaborar os projetos básico e executivo, executar a obra e fazer a pré-operação","executar somente a obra, a partir do projeto básico fornecido pela estatal","fornecer apenas a mão de obra, com materiais entregues pela própria estatal","elaborar apenas o projeto executivo, sem executar a obra contratada","executar tarefas de pequeno valor por preço certo, com ou sem materiais"],"Integrada: o contratado faz projeto básico, projeto executivo, obra, testes e pré-operação. Semi-integrada: o projeto básico vem da estatal e o contratado faz o executivo e a obra."],
["compras","Pela Lei 13.303/2016 (art. 28, § 3º), não se aplica a licitação, entre outros casos, à",["escolha de parceiro ligada a oportunidades de negócio definidas e específicas","compra de material de escritório de valor inferior a R$ 100 mil por ano","obra emergencial que exceda o orçamento anual aprovado pela estatal","contratação de serviço contínuo com prazo superior a 5 anos de duração","aquisição de bens comuns por meio de pregão em sua forma eletrônica"],"Art. 28, § 3º: ficam fora da licitação a comercialização ligada ao objeto social (atividade-fim) e a escolha de parceiro vinculada a oportunidades de negócio definidas e específicas."],
["info","No Excel, a fórmula =SE(E(A1>=7;B1>=75);\"Aprovado\";\"Reprovado\") retorna \"Aprovado\" quando",["A1 é pelo menos 7 e B1 é pelo menos 75","A1 é pelo menos 7 ou B1 é pelo menos 75","A1 é menor que 7 e B1 é menor que 75","apenas A1 é maior ou igual a 7","apenas B1 é maior ou igual a 75"],"E() só é verdadeiro se todas as condições forem verdadeiras. Com OU(), bastaria uma delas."],
["info","No Excel, a fórmula =SOMASE(A2:A10;\"Compras\";B2:B10) retorna",["a soma de B2:B10 nas linhas em que A2:A10 é Compras","a quantidade de células de A2:A10 iguais a Compras","a soma de A2:A10 nas linhas em que B2:B10 é Compras","a média de B2:B10 nas linhas em que A2:A10 é Compras","o maior valor de B2:B10 entre as linhas de Compras"],"SOMASE(intervalo do critério; critério; intervalo da soma). Contar seria CONT.SE; média seria MÉDIASE."],
["info","No Excel, a fórmula =SEERRO(PROCV(D2;A:B;2;0);\"Não encontrado\")",["mostra Não encontrado quando o valor de D2 não existe na coluna A","mostra Não encontrado sempre que a coluna B estiver vazia","retorna o número da linha em que D2 foi encontrado","soma os valores da coluna B que forem iguais a D2","mostra o erro #N/D quando D2 não existe na coluna A"],"Sem o SEERRO, o PROCV exato retornaria #N/D. O SEERRO troca qualquer erro pelo texto indicado."],
["info","Ao copiar a fórmula =$A1*B$1 da célula C2 para a célula D3, ela passa a ser",["=$A2*C$1","=$A1*B$1","=$B2*C$1","=$A2*B$2","=A2*C1"],"Copiar de C2 para D3 desloca 1 coluna e 1 linha. $A1: a coluna fica, a linha vira 2. B$1: a linha fica, a coluna vira C."],
["info","No Excel, a fórmula =CONT.SES(A:A;\"Compras\";B:B;\">1000\") conta",["as linhas em que A é Compras e B é maior que 1.000","as linhas em que A é Compras ou B é maior que 1.000","a soma dos valores de B maiores que 1.000 em Compras","as células da coluna A que contêm a palavra Compras","as células da coluna B com valor maior que 1.000"],"CONT.SES conta as linhas que atendem a todos os critérios ao mesmo tempo (E). Para somar, use SOMASES."],
["info","Em relação ao PROCV, a função PROCX do Excel",["pode buscar à esquerda e usa correspondência exata por padrão","só funciona em tabelas formatadas e com dados numéricos","exige que a coluna de busca esteja sempre em ordem crescente","retorna apenas a primeira coluna à direita da coluna de busca","é exclusiva da versão on-line do Excel, na nuvem"],"PROCX recebe a matriz de busca e a de retorno separadas, por isso busca em qualquer direção. A correspondência exata é o padrão; no PROCV, é preciso informar FALSO ou 0."],
["lgpd","O phishing caracteriza-se por",["mensagens falsas que induzem a vítima a fornecer dados ou clicar em links","cópia automática do código para todos os computadores da rede","sobrecarga do servidor com milhares de acessos simultâneos","criptografia dos arquivos com cobrança de resgate em criptomoeda","registro oculto das teclas digitadas pelo usuário no teclado"],"Phishing é engenharia social por e-mail, SMS ou site falso. As outras são worm, DoS/DDoS, ransomware e keylogger."],
["lgpd","O ransomware é um código malicioso que",["criptografa ou bloqueia os dados e exige pagamento para liberá-los","exibe propagandas indesejadas durante a navegação do usuário","se espalha pela rede explorando falhas, sem ação do usuário","registra as teclas digitadas para capturar senhas bancárias","abre uma porta oculta para acesso remoto do invasor"],"Ransomware = sequestro de dados. A melhor defesa é o backup atualizado e fora da rede. As outras alternativas descrevem adware, worm, keylogger e backdoor."],
["lgpd","Na política de backup, o backup incremental copia",["os arquivos alterados desde o último backup de qualquer tipo","todos os arquivos, independentemente de terem sido alterados","os arquivos alterados desde o último backup completo","apenas os arquivos do sistema operacional e dos programas","somente os arquivos que nunca tinham sido copiados antes"],"Incremental: desde o último backup (completo ou incremental), é rápido de fazer e lento de restaurar. Diferencial: desde o último completo. Completo: tudo."],
["info","O protocolo HTTPS diferencia-se do HTTP por",["usar criptografia (TLS) na comunicação entre navegador e site","ser usado exclusivamente para enviar e receber mensagens de e-mail","dispensar o uso de endereço IP e de servidores de nomes (DNS)","transferir arquivos sem a necessidade de nenhum navegador","acelerar o carregamento das páginas por compressão de dados"],"HTTPS = HTTP sobre TLS: os dados trafegam criptografados e o site é autenticado por certificado digital (o cadeado)."],
["info","Na internet, o DNS tem a função de",["traduzir nomes de domínio em endereços IP","atribuir automaticamente endereços IP às máquinas","criptografar o tráfego entre o navegador e o site","bloquear acessos não autorizados conforme regras","guardar as páginas visitadas para acelerar o acesso"],"DNS traduz nomes em IPs. As outras funções são do DHCP, do TLS/HTTPS, do firewall e do proxy com cache."],
["info","No Windows 11, a combinação de teclas Windows + L",["bloqueia o computador, exigindo nova entrada na conta","abre o Explorador de Arquivos na pasta Este Computador","minimiza todas as janelas abertas na área de trabalho","abre diretamente as Configurações do sistema","captura a tela inteira para a área de transferência"],"Win + L bloqueia; Win + E abre o Explorador; Win + D mostra a área de trabalho; Win + I abre as Configurações; Win + Shift + S captura parte da tela."],
["info","No Windows 11, a combinação de teclas Windows + V",["abre o histórico da área de transferência","cola o último item copiado sem formatação","abre o Explorador de Arquivos","ativa a digitação por voz","abre o painel de widgets"],"Win + V mostra o histórico de itens copiados (é preciso ativá-lo na primeira vez). Win + H ativa a digitação por voz; Win + W abre os widgets."]
];

/* lei seca: mais artigos da Lei 13.303 */
const LEI2=[
 ["13.303","Art. 13, I","O estatuto deve dispor sobre o Conselho de Administração, observados o número mínimo de 7 e o número máximo de ___ membros.","11",["9","13","15"]],
 ["13.303","Art. 22","O Conselho de Administração deve ser composto, no mínimo, por ___ de membros independentes.","25%",["20%","30%","50%"]],
 ["13.303","Art. 31","Princípios das licitações: impessoalidade, moralidade, igualdade, publicidade, eficiência, probidade administrativa, ___, desenvolvimento nacional sustentável, vinculação ao instrumento convocatório, obtenção de competitividade e julgamento objetivo.","economicidade",["legalidade estrita","razoabilidade","segurança jurídica"]],
 ["13.303","Art. 39, I, a","Prazo mínimo para aquisição de bens, nos critérios de menor preço ou maior desconto: ___.","5 dias úteis",["8 dias úteis","10 dias úteis","15 dias úteis"]],
 ["13.303","Art. 39, II, a","Prazo mínimo para obras e serviços, nos critérios de menor preço ou maior desconto: ___.","15 dias úteis",["10 dias úteis","30 dias úteis","5 dias úteis"]],
 ["13.303","Art. 39, III","Prazo mínimo para melhor técnica, técnica e preço, contratação integrada ou semi-integrada: ___.","45 dias úteis",["30 dias úteis","60 dias corridos","15 dias úteis"]],
 ["13.303","Art. 59, § 1º","Os recursos serão apresentados no prazo de ___ após a habilitação.","5 dias úteis",["3 dias úteis","10 dias corridos","8 dias úteis"]],
 ["13.303","Art. 64, § 5º","A pré-qualificação terá validade de ___, no máximo.","1 ano",["6 meses","2 anos","5 anos"]],
 ["13.303","Art. 68","Os contratos regulam-se pelas suas cláusulas, pelo disposto nesta Lei e pelos preceitos de direito ___.","privado",["público","administrativo","constitucional"]],
 ["13.303","Art. 72","Os contratos somente poderão ser alterados por ___, vedando-se ajuste que resulte em violação da obrigação de licitar.","acordo entre as partes",["ato unilateral da estatal","decisão do fiscal","pedido do contratado"]],
 ["13.303","Art. 73","É vedado o contrato por prazo ___.","indeterminado",["superior a 5 anos","inferior a 1 ano","determinado"]],
 ["13.303","Art. 83, III","Suspensão temporária de participação em licitação e impedimento de contratar com a entidade sancionadora, por prazo não superior a ___.","2 anos",["5 anos","1 ano","3 anos"]]
];

/* pegadinhas: frase certa × frase quase certa (uma palavra muda) */
const PEG=[
["compras","Na Lei 13.303, a habilitação ocorre, em regra, depois do julgamento das propostas.","Na Lei 13.303, a habilitação ocorre, em regra, antes do julgamento das propostas.","A inversão (habilitação antes) é exceção, e precisa estar prevista no edital."],
["compras","Na dispensa de licitação, a competição é possível, mas a lei autoriza não licitar.","Na dispensa de licitação, a competição é impossível, mas a lei autoriza não licitar.","Competição inviável é inexigibilidade. Na dispensa, ela seria possível."],
["compras","O pregão é usado para bens e serviços comuns.","O pregão é usado para bens e serviços especiais.","Pregão = comuns, julgados por menor preço ou maior desconto."],
["compras","Na Lei 14.133, o leilão serve para alienar bens.","Na Lei 14.133, o leilão serve para adquirir bens.","Leilão = vender (alienar) a quem der o maior lance."],
["compras","Na Lei 13.303, os prazos de publicação são contados em dias úteis.","Na Lei 13.303, os prazos de publicação são contados em dias corridos.","Art. 39: 5, 10, 15, 30 e 45 dias úteis."],
["contr","Na Lei 13.303, a garantia não excede 5% do valor do contrato, salvo grande vulto.","Na Lei 13.303, a garantia não excede 10% do valor do contrato, salvo grande vulto.","5% é a regra; até 10% em grande vulto com alta complexidade e riscos."],
["contr","Na Lei 13.303, a duração dos contratos não excede 5 anos, salvo exceções.","Na Lei 13.303, a duração dos contratos não excede 10 anos, salvo exceções.","Art. 71: 5 anos, salvo projetos do plano de negócios e casos em que o prazo maior é prática de mercado."],
["contr","Na Lei 13.303, o contrato só pode ser alterado por acordo entre as partes.","Na Lei 13.303, o contrato só pode ser alterado por ato entre as partes.","Não há alteração unilateral nas estatais (art. 72)."],
["contr","Na Lei 13.303, a suspensão de licitar dura no máximo 2 anos.","Na Lei 13.303, a suspensão de licitar dura no máximo 5 anos.","Art. 83, III: até 2 anos."],
["lgpd","O operador trata dados pessoais em nome do controlador.","O controlador trata dados pessoais em nome do operador.","Controlador decide; operador executa em nome dele."],
["lgpd","O encarregado é o canal de comunicação com os titulares e a ANPD.","O operador é o canal de comunicação com os titulares e a ANPD.","Encarregado (DPO) = canal de comunicação."],
["lgpd","Dado anonimizado não é considerado dado pessoal pela LGPD.","Dado pseudonimizado não é considerado dado pessoal pela LGPD.","Pseudonimizado ainda pode ser revertido com informação adicional, então continua sendo dado pessoal."],
["rh","Recrutamento interno é mais rápido e mais barato que o externo.","Recrutamento interno é mais lento e mais barato que o externo.","Interno: rápido, barato, motiva; mas gera vagas em cadeia."],
["rh","Desenvolvimento de pessoas foca o longo prazo e a carreira futura.","Desenvolvimento de pessoas foca o curto prazo e a carreira futura.","Treinamento = curto prazo e cargo atual; desenvolvimento = longo prazo."],
["rh","No nível 3 de Kirkpatrick avalia-se o comportamento no trabalho.","No nível 3 de Kirkpatrick avalia-se a reação no trabalho.","1 reação, 2 aprendizagem, 3 comportamento, 4 resultados."],
["sgi","No PDCA, a letra C significa verificar os resultados.","No PDCA, a letra C significa corrigir os resultados.","C = Check (verificar). Corrigir é o A (Act)."],
["sgi","A ISO 45001 trata de saúde e segurança ocupacional.","A ISO 9001 trata de saúde e segurança ocupacional.","9001 qualidade; 14001 ambiental; 45001 saúde e segurança."],
["manut","Manutenção preditiva acompanha a condição do equipamento para intervir na hora certa.","Manutenção preventiva acompanha a condição do equipamento para intervir na hora certa.","Preventiva segue intervalos de tempo ou uso; preditiva monitora a condição."],
["manut","MTBF é o tempo médio entre falhas.","MTTR é o tempo médio entre falhas.","MTTR é o tempo médio para reparo."],
["estoq","A curva ABC classifica os itens pelo valor de consumo.","A curva ABC classifica os itens pela quantidade de consumo.","Classe A: poucos itens com a maior parte do valor (preço × quantidade)."],
["estoq","No PEPS, os itens mais antigos saem primeiro.","No PEPS, os itens mais novos saem primeiro.","PEPS = primeiro que entra, primeiro que sai."],
["log","No efeito chicote, a variação dos pedidos aumenta ao subir na cadeia.","No efeito chicote, a variação dos pedidos diminui ao subir na cadeia.","Pequena variação no varejo vira grande variação no fornecedor."],
["transp","O modal dutoviário tem alto custo fixo e baixo custo variável.","O modal dutoviário tem baixo custo fixo e baixo custo variável.","Implantar o duto é caro; operar é barato."],
["contab","No regime de competência, a receita entra no mês da prestação.","No regime de competência, a receita entra no mês do recebimento.","Recebimento é o critério do regime de caixa."],
["fluxo","Na DFC, a compra de imobilizado é atividade de investimento.","Na DFC, a compra de imobilizado é atividade de financiamento.","Investimento = ativos de longo prazo; financiamento = credores e sócios."],
["fluxo","No método indireto, a depreciação é somada ao lucro líquido.","No método indireto, a depreciação é subtraída do lucro líquido.","Depreciação reduz o lucro sem sair dinheiro: volta somando."],
["bp","Uma dívida que vence em 8 meses fica no passivo circulante.","Uma dívida que vence em 18 meses fica no passivo circulante.","Circulante: até o fim do exercício seguinte (12 meses, em regra)."],
["matfin","Descontos sucessivos de 10% e 20% equivalem a um desconto único de 28%.","Descontos sucessivos de 10% e 20% equivalem a um desconto único de 30%.","0,9 × 0,8 = 0,72: desconto de 28%."],
["matfin","A juros compostos de 10% ao mês, em 2 meses o rendimento total é de 21%.","A juros compostos de 10% ao mês, em 2 meses o rendimento total é de 20%.","1,1 × 1,1 = 1,21."],
["info","No Excel, $A1 é uma referência mista.","No Excel, $A1 é uma referência absoluta.","Absoluta é $A$1. Em $A1 só a coluna fica fixa."],
["info","Shift + Delete exclui o arquivo sem passar pela Lixeira.","Ctrl + Delete exclui o arquivo sem passar pela Lixeira.","Ctrl + Delete envia para a Lixeira, como o Delete."],
["port","Haver no sentido de existir fica no singular: houve problemas.","Haver no sentido de existir fica no singular: houveram problemas.","Haver = existir é impessoal."],
["port","Ele começou a estudar cedo.","Ele começou à estudar cedo.","Não há crase antes de verbo."],
["port","Prefiro estudar a dormir.","Prefiro estudar do que dormir.","Preferir rege a preposição 'a'; 'do que' é erro."],
["mat","A mediana é o termo central do rol ordenado.","A moda é o termo central do rol ordenado.","Moda é o valor que mais se repete."]
];

/* ordene as fases */
const ORD=[
["Fases da licitação na Lei 13.303 (art. 51)",["Preparação","Divulgação","Apresentação de lances ou propostas","Julgamento","Verificação de efetividade","Negociação","Habilitação","Interposição de recursos","Adjudicação do objeto","Homologação ou revogação"]],
["Fases da licitação na Lei 14.133 (art. 17)",["Preparatória","Divulgação do edital","Apresentação de propostas e lances","Julgamento","Habilitação","Recursal","Homologação"]],
["Ciclo PDCA",["Planejar (Plan)","Executar (Do)","Verificar (Check)","Agir corretivamente (Act)"]],
["MASP: análise e solução de problemas",["Identificação do problema","Observação","Análise das causas","Plano de ação","Ação","Verificação","Padronização","Conclusão"]],
["Etapas do treinamento",["Levantamento de necessidades (LNT)","Programação","Execução","Avaliação"]],
["Níveis de avaliação de Kirkpatrick",["Reação","Aprendizagem","Comportamento","Resultados"]],
["Estrutura da DRE",["Receita bruta","Deduções da receita","Receita líquida","Custo das vendas","Lucro bruto","Despesas operacionais","Resultado antes dos tributos","IR e CSLL","Participações","Lucro líquido"]],
["Fluxo físico no armazém",["Recebimento","Conferência","Endereçamento e guarda","Separação (picking)","Embalagem","Expedição"]],
["Processo de compras",["Requisição da necessidade","Especificação do material","Pesquisa e cotação com fornecedores","Negociação","Emissão do pedido","Acompanhamento (follow-up)","Recebimento e inspeção"]],
["Ciclo de caixa (situação típica)",["Compra do estoque","Pagamento ao fornecedor","Venda ao cliente","Recebimento do cliente"]]
];

/* ===== v9: ritmo, perdas, caderno em PDF, pegadinhas, jogos novos, avisos fora do app ===== */
Q.forEach(q=>{const e=EXPL[q[1]];if(e)q[3]=e;});
Q9.forEach(q=>{q.c=q[0];Q.push(q);});
FC.push(...FC2);
LEI.push(...LEI2);
S.gm=S.gm||{}; S.ct=S.ct||{};
const SEG_EST2=[["cont","Resumos"],["peg","Pegadinhas"],["links","Links e vídeos"],["vesp","Revisão da véspera"]];
SEG_EST.length=0; SEG_EST.push(...SEG_EST2);

/* ---------- Navegação das telas novas ---------- */
const NV={peg:()=>vPeg(),duel:()=>vDuel(),erro:()=>vErro(),ord:()=>vOrd()};
const NVTAB={peg:"cont",duel:"jogos",erro:"jogos",ord:"jogos"};
Object.assign(VIEWS,NV); Object.assign(TABOF,NVTAB);
const qOf=i=>Q[i];
const bcol=c=>`var(--c-${CATS[c].b})`;

/* ---------- 1. Ritmo no simulado e aviso de 3 minutos ---------- */
const WARN_S=180;
function qNow(){if(!quiz||quiz.finished)return 0;const t=(quiz.tq&&quiz.tq[quiz.i])||0;return Math.round((t+(quiz._k===quiz.i?Date.now()-quiz._t:0))/1000);}
function paceTxt(){
  if(!quiz||!quiz.limit||quiz.finished) return "";
  const n=quiz.ids.length, ans=quiz.ans.filter(x=>x!==null).length, el=(Date.now()-quiz.start)/1000, per=quiz.limit/n;
  const diff=Math.round((ans*per-el)/60);
  return diff>=1?`Ritmo: ${diff} min adiantado`:diff<=-1?`Ritmo: ${-diff} min atrasado`:"Ritmo: em dia";
}
let qclk=null;
function qclkTick(){
  if(current!=="quiz"||!quiz||quiz.finished){clearInterval(qclk);qclk=null;return;}
  const s=qNow(), el=$("#qclk"); if(!el) return;
  el.textContent="Nesta questão: "+fmt(s); el.classList.toggle("badt",s>=WARN_S);
  const p=$("#qpace"); if(p) p.textContent=paceTxt();
  quiz.warn=quiz.warn||{};
  if(s>=WARN_S&&!quiz.warn[quiz.i]&&!(quiz.mode==="train"&&quiz.ans[quiz.i]!==null)){
    quiz.warn[quiz.i]=1;
    const a=$("#view article"); if(a&&!$("#qwarn")) a.insertAdjacentHTML("afterbegin",`<div class="rule" id="qwarn" role="status"><b>3 minutos nesta questão.</b> Marque seu melhor palpite, siga em frente e volte no fim se sobrar tempo.</div>`);
    try{navigator.vibrate&&navigator.vibrate(150);}catch(e){}
  }
}
const _vQuiz5=vQuiz;
vQuiz=function(){
  _vQuiz5();
  if(!quiz||quiz.finished) return;
  const h=$("#view .qhead .stack");
  if(h) h.insertAdjacentHTML("beforeend",`<span class="muted num qclock" id="qclk"></span>${quiz.limit?`<span class="muted num" id="qpace">${paceTxt()}</span>`:""}`);
  if(quiz.warn&&quiz.warn[quiz.i]&&qNow()>=WARN_S){const a=$("#view article");if(a)a.insertAdjacentHTML("afterbegin",`<div class="rule" id="qwarn" role="status"><b>Passou de 3 minutos.</b> Marque um palpite e siga.</div>`);}
  qclkTick(); if(!qclk) qclk=setInterval(qclkTick,1000);
};
function myAvgT(){const xs=S.hist.filter(x=>x.avgT).slice(0,5).map(x=>x.avgT);return xs.length?xs.reduce((a,b)=>a+b,0)/xs.length:null;}
function paceTarget(){const a=myAvgT();return a?Math.max(150,Math.min(240,Math.round(a*0.9/5)*5)):210;}
function startPace(){
  const n={adm:9,fin:9,log:15,info:7,port:10,mat:10};
  const ids=[].concat(...Object.entries(n).map(([b,k])=>pickBlock(b,k)));
  const t=paceTarget();
  makeQuiz(ids,"exam",`Simulado de ritmo (${fmt(t)} por questão)`,ids.length*t);
}

/* ---------- 2. Tempo por assunto e desafio do dia ao corrigir ---------- */
const _finish5=finish;
finish=function(){
  const was=quiz&&!quiz.finished;
  _finish5();
  if(!was||!quiz) return;
  if(quiz.tq) quiz.ids.forEach((qi,k)=>{if(quiz.ans[k]===null||!quiz.tq[k])return;const c=Q[qi].c;S.ct[c]=S.ct[c]||{s:0,n:0};S.ct[c].s+=Math.round(quiz.tq[k]/1000);S.ct[c].n++;});
  if(quiz.daily){
    const k=todayK(), d=S.gm.dch||{streak:0,best:0};
    if(d.last!==k){const y=new Date();y.setDate(y.getDate()-1);d.streak=d.last===dkey(y)?d.streak+1:1;d.last=k;d.best=Math.max(d.best||0,d.streak);}
    d.score=quiz.score; S.gm.dch=d;
  }
  save();
  if(current==="result") vResult();
};

/* ---------- 3. Onde estou perdendo pontos ---------- */
const EXPQ={adm:9,fin:9,log:15,info:7,port:10,mat:10};
function lossRows(){
  const rows=Object.keys(CATS).map(c=>{
    const b=CATS[c].b, nC=Object.keys(CATS).filter(x=>CATS[x].b===b).length, exp=EXPQ[b]/nC;
    const st=S.stats[c], acc=st&&st.t>=5?st.c/st.t:null, a=acc===null?0.5:acc;
    const lost=exp*(1-a);
    let hrs=0; const SL=S.slog||{}; for(const d in SL) hrs+=(SL[d][c]||0)/60;
    const notes=Object.keys(S.notes).filter(q=>Q[q]&&Q[q].c===c).map(q=>S.notes[q].r);
    const rc={}; notes.forEach(r=>rc[r]=(rc[r]||0)+1);
    const main=Object.keys(rc).sort((x,y)=>rc[y]-rc[x])[0]||null;
    const ct=S.ct[c], tm=ct&&ct.n?Math.round(ct.s/ct.n):null;
    return {c,b,exp,acc,lost,hrs,main,nN:notes.length,tm,eff:lost/(hrs+1)};
  });
  return rows.sort((x,y)=>y.eff-x.eff);
}
const FIXTIP={nao:"falta conteúdo: leia o resumo e faça o treino do assunto",conf:"confunde conceitos: use Pegadinhas e Ache o erro",rap:"lê rápido: sublinhe EXCETO, NÃO e INCORRETO antes de ler as alternativas",conta:"erra conta: jogue Cálculo sem calculadora"};
function lossPanel(){
  const r=lossRows().slice(0,6), any=Object.keys(S.stats).length;
  if(!any) return `<div class="panel stack"><h3>Onde estou perdendo pontos</h3><p class="muted">Responda algumas questões para o app mostrar onde você perde mais pontos.</p></div>`;
  const top=r[0];
  return `<div class="panel stack"><h3>Onde estou perdendo pontos</h3>
  <p class="muted">Pontos que você deixa de fazer por prova em cada assunto, comparados com as horas que já estudou nele. No topo está o assunto que mais rende ponto por hora de estudo agora.</p>
  <div class="tblwrap"><table class="ltbl"><thead><tr><th>Assunto</th><th>Acerto</th><th>Pontos perdidos</th><th>Tempo/questão</th><th>Horas</th><th>Erro mais comum</th></tr></thead><tbody>
  ${r.map(x=>`<tr><td><i class="bdot" style="background:var(--c-${x.b})"></i>${esc(CATS[x.c].n)}</td><td class="num">${x.acc===null?"—":Math.round(x.acc*100)+"%"}</td><td class="num">${x.lost.toFixed(1).replace(".",",")}</td><td class="num ${x.tm>WARN_S?"badt":""}">${x.tm?fmt(x.tm):"—"}</td><td class="num">${x.hrs.toFixed(1).replace(".",",")}</td><td>${x.main?esc(REASONS[x.main]):"—"}</td></tr>`).join("")}
  </tbody></table></div>
  <div class="rule"><b>Próximo passo:</b> ${esc(CATS[top.c].n)}${top.main?`, onde você ${esc(FIXTIP[top.main])}`:top.acc===null?": responda pelo menos 5 questões para medir":": treine o assunto e anote o motivo de cada erro"}.</div>
  <div class="row"><button class="btn sm" onclick="startTrainCat('${top.c}')">Treinar ${esc(CATS[top.c].n)}</button><button class="btn ghost sm" onclick="openTopic('${top.c}')">Ler o resumo</button></div>
  <p class="muted">Pontos perdidos = questões esperadas do assunto na prova × taxa de erro. Assunto com menos de 5 questões respondidas conta como 50%.</p></div>`;
}
const _vStats5=vStats;
vStats=function(){_vStats5();const seg=$("#view .segtabs");const h=$("#view h2");(h||seg).insertAdjacentHTML("afterend",lossPanel());};

/* ---------- 4. Caderno de erros em PDF ---------- */
function cadernoDoc(){
  const ids=Object.keys(S.notes).map(Number).filter(q=>Q[q]).sort((a,b)=>CATS[Q[a].c].b.localeCompare(CATS[Q[b].c].b)||Q[a].c.localeCompare(Q[b].c));
  const items=ids.map((qi,n)=>{const q=Q[qi],no=S.notes[qi];return `<div class="it"><div class="cat">${n+1}. ${esc(CATS[q.c].n)} · ${esc(REASONS[no.r]||"")}</div><p class="st">${esc(q[1])}</p><p><b>Resposta:</b> ${esc(q[2][0])}</p>${no.t?`<p class="nt"><b>Minha nota:</b> ${esc(no.t)}</p>`:""}<p class="ex">${esc(q[3])}</p></div>`;}).join("");
  return `<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Caderno de erros</title><style>body{font:13px/1.5 system-ui,Arial,sans-serif;color:#222;max-width:760px;margin:24px auto;padding:0 16px}h1{font-size:20px;margin:0 0 4px}.it{border-top:1px solid #ccc;padding:10px 0;break-inside:avoid}.cat{font-size:11px;text-transform:uppercase;letter-spacing:.04em;color:#555}.st{font-weight:600;margin:4px 0}.nt{background:#f4f0e4;padding:4px 8px}.ex{color:#444}p{margin:4px 0}@page{margin:14mm}</style></head><body><h1>Caderno de erros · Transpetro 2026</h1><p>${ids.length} questões · gerado em ${new Date().toLocaleDateString("pt-BR")}</p>${items||"<p>Caderno vazio.</p>"}</body></html>`;
}
async function cadernoPdf(){
  const html=cadernoDoc(), msg=$("#cadMsg");
  try{if(window.claude&&claude.use){const dl=await claude.use("downloads");if(dl){await dl.save({filename:"caderno-de-erros.html",data:html});if(msg)msg.textContent="Arquivo salvo. Abra e use Imprimir → Salvar como PDF.";return;}}}catch(e){if(e&&e.code==="declined"){if(msg)msg.textContent="Download cancelado.";return;}}
  try{const w=window.open("","_blank");if(w){w.document.write(html);w.document.close();setTimeout(()=>{try{w.print();}catch(e){}},400);if(msg)msg.textContent="Na janela de impressão, escolha Salvar como PDF.";return;}}catch(e){}
  try{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([html],{type:"text/html"}));a.download="caderno-de-erros.html";document.body.appendChild(a);a.click();a.remove();if(msg)msg.textContent="Arquivo baixado. Abra e use Imprimir → Salvar como PDF.";}catch(e){if(msg)msg.textContent="Este aparelho não permitiu o download.";}
}
const _vCaderno5=vCaderno;
vCaderno=function(){_vCaderno5();const h=$("#view h2");if(h&&Object.keys(S.notes).length)h.parentNode.insertAdjacentHTML("beforeend",`<div class="row"><button class="btn ghost sm" onclick="cadernoPdf()">Exportar para PDF (imprimir)</button><span class="muted" id="cadMsg"></span></div>`);};

/* ---------- 5. Pegadinhas da banca ---------- */
let pegF="all";
let pegN=12;
function vPeg(){
  const all=PEG.filter(p=>pegF==="all"||CATS[p[0]].b===pegF), list=all.slice(0,pegN);
  $("#view").innerHTML=segNav("peg",SEG_EST)+`
  <div class="stack"><h2>Pegadinhas da banca</h2><p class="muted">A Cesgranrio troca uma palavra da definição certa. Leia as duas versões lado a lado e repare no detalhe que muda.</p>
  <div class="row" style="gap:8px;flex-wrap:wrap"><select id="pegF"><option value="all">Todos os blocos (${PEG.length})</option>${Object.entries(BLOCKS).map(([b,n])=>`<option value="${b}" ${pegF===b?"selected":""}>${esc(n)} (${PEG.filter(p=>CATS[p[0]].b===b).length})</option>`).join("")}</select><button class="btn sm" onclick="startErro()">Jogar Ache o erro</button></div></div>
  <div class="stack">${list.map(p=>{const d=pegDiff(p);return `<div class="panel stack peg" style="border-left:4px solid ${bcol(p[0])}"><span class="qcat" style="color:${bcol(p[0])}">${esc(CATS[p[0]].n)}</span>
    <p class="pok"><span class="mark ok">✓</span> ${hlTok(p[1],d.a)}</p><p class="pbad"><span class="mark bad">✗</span> ${hlTok(p[2],d.b)}</p><p class="muted">${esc(p[3])}</p></div>`;}).join("")}</div>
  ${all.length>list.length?`<div class="row"><button class="btn ghost" onclick="pegN+=12;const y=scrollY;vPeg();scrollTo({top:y})">Mostrar mais ${Math.min(12,all.length-list.length)} (faltam ${all.length-list.length})</button></div>`:""}`;
  $("#pegF").onchange=e=>{pegF=e.target.value;pegN=12;vPeg();};
}
const toks=s=>s.split(" ");
function pegDiff(p){const a=toks(p[1]),b=toks(p[2]);let i=0;while(i<a.length&&i<b.length&&a[i]===b[i])i++;let ja=a.length-1,jb=b.length-1;while(ja>=i&&jb>=i&&a[ja]===b[jb]){ja--;jb--;}const ra=[],rb=[];for(let k=i;k<=ja;k++)ra.push(k);for(let k=i;k<=jb;k++)rb.push(k);return {a:ra,b:rb};}
function hlTok(s,idx){return toks(s).map((w,k)=>idx.includes(k)?`<b class="hl2">${esc(w)}</b>`:esc(w)).join(" ");}

/* ---------- 6. Jogo: Ache o erro ---------- */
let erro=null;
function startErro(){const ids=shuffle(PEG.map((_,i)=>i)).slice(0,8);erro={ids,i:0,ok:0,pick:null,res:[]};go("erro");}
function vErro(){
  if(!erro){go("jogos");return;}
  if(erro.i>=erro.ids.length){
    if(erro.ok>(S.gm.erroBest||0)){S.gm.erroBest=erro.ok;save();}
    $("#view").innerHTML=`<div><button class="btn ghost sm" onclick="go('jogos')">← Jogos</button></div><h2>Ache o erro · ${erro.ok}/${erro.ids.length}</h2>
    <div class="stack">${erro.ids.map((id,k)=>{const p=PEG[id],d=pegDiff(p);return `<div class="panel stack"><span class="qcat">${esc(CATS[p[0]].n)} <span class="mark ${erro.res[k]?"ok":"bad"}">${erro.res[k]?"✓":"✗"}</span></span><p>${hlTok(p[1],d.a)}</p><p class="muted">${esc(p[3])}</p></div>`;}).join("")}</div>
    <div class="row"><button class="btn" onclick="startErro()">Jogar de novo</button><button class="btn ghost" onclick="go('peg')">Ver todas as pegadinhas</button></div>`;
    return;
  }
  const p=PEG[erro.ids[erro.i]], d=pegDiff(p), w=toks(p[2]), done=erro.pick!==null;
  $("#view").innerHTML=`<div class="qhead"><button class="btn ghost sm" onclick="go('jogos')">← Sair</button><div class="stack" style="gap:2px"><strong>Ache o erro</strong><span class="muted num">Frase ${erro.i+1} de ${erro.ids.length} · ${erro.ok} acertos</span></div></div>
  <article class="panel stack"><span class="qcat" style="color:${bcol(p[0])}">${esc(CATS[p[0]].n)}</span><p class="muted">Toque na palavra que deixa a frase errada.</p>
  <p class="tokline">${w.map((x,k)=>`<button class="tok ${done&&d.b.includes(k)?"right":""} ${done&&erro.pick===k&&!d.b.includes(k)?"wrong":""}" data-k="${k}" ${done?"disabled":""}>${esc(x)}</button>`).join(" ")}</p>
  ${done?`<div class="expl"><strong>${d.b.includes(erro.pick)?"Isso!":"Não era essa."}</strong> Certo: ${hlTok(p[1],d.a)}<br>${esc(p[3])}</div><div class="row"><button class="btn" id="erNext">Próxima</button></div>`:""}</article>`;
  document.querySelectorAll(".tok").forEach(b=>b.onclick=()=>{if(erro.pick!==null)return;const k=+b.dataset.k;erro.pick=k;const ok=d.b.includes(k);erro.res[erro.i]=ok;if(ok)erro.ok++;vErro();});
  const n=$("#erNext"); if(n) n.onclick=()=>{erro.i++;erro.pick=null;addDay(1);vErro();};
}

/* ---------- 7. Jogo: Ordene as fases ---------- */
let ord=null;
function startOrd(i){const sel=$("#selOrd");const k=i!=null?i:sel&&sel.value!=="r"?+sel.value:Math.floor(Math.random()*ORD.length);ord={k,pool:shuffle(ORD[k][1].map((_,j)=>j)),got:[],err:0,start:Date.now(),bad:null};go("ord");}
function vOrd(){
  if(!ord){go("jogos");return;}
  const [t,items]=ORD[ord.k], fin=ord.got.length===items.length;
  if(fin&&!ord.t){ord.t=Math.round((Date.now()-ord.start)/1000);S.gm.ordDone=(S.gm.ordDone||0)+1;addDay(1);save();}
  $("#view").innerHTML=`<div class="qhead"><button class="btn ghost sm" onclick="go('jogos')">← Sair</button><div class="stack" style="gap:2px"><strong>Ordene as fases</strong><span class="muted num">${ord.got.length} de ${items.length} · ${ord.err} ${ord.err===1?"erro":"erros"}</span></div></div>
  <article class="panel stack"><h3>${esc(t)}</h3><p class="muted">${fin?"Sequência completa.":"Toque nas etapas na ordem certa, da primeira à última."}</p>
  <ol class="ordlist">${ord.got.map(j=>`<li>${esc(items[j])}</li>`).join("")}</ol>
  ${fin?`<div class="expl"><strong>${ord.err?`${ord.err} ${ord.err===1?"erro":"erros"}`:"Sem erros!"}</strong> em ${fmt(ord.t)}.</div><div class="row"><button class="btn" onclick="startOrd(${ord.k})">Repetir</button><button class="btn ghost" onclick="startOrd()">Outra sequência</button></div>`
  :`<div class="stack" style="gap:8px">${ord.pool.filter(j=>!ord.got.includes(j)).map(j=>`<button class="opt ${ord.bad===j?"wrong":""}" data-j="${j}"><span>${esc(items[j])}</span></button>`).join("")}</div>`}</article>`;
  document.querySelectorAll(".opt[data-j]").forEach(b=>b.onclick=()=>{const j=+b.dataset.j;if(j===ord.got.length){ord.got.push(j);ord.bad=null;}else{ord.err++;ord.bad=j;}vOrd();});
}

/* ---------- 8. Jogo: Duelo do relógio ---------- */
let duel=null, dtick=null;
function startDuel(){
  const sel=$("#selDuel")?$("#selDuel").value:"esp";
  const pool=QI().filter(i=>inSel(sel,Q[i].c));
  const ids=shuffle(pool).slice(0,10);
  duel={ids,i:0,pts:0,ok:0,ans:ids.map(()=>null),order:ids.map(()=>shuffle([0,1,2,3,4])),t0:Date.now(),lock:false,sel};
  if(dtick)clearInterval(dtick); dtick=setInterval(duelTick,250); go("duel");
}
function duelLeft(){return 60-(Date.now()-duel.t0)/1000;}
function duelTick(){if(!duel||current!=="duel"||duel.i>=duel.ids.length){clearInterval(dtick);dtick=null;return;}if(duel.lock)return;const r=duelLeft(),el=$("#dT");if(el){el.textContent=Math.ceil(Math.max(0,r))+" s";el.classList.toggle("low",r<15);}if(r<=0)duelAnswer(null);}
function duelAnswer(p){
  if(duel.lock)return; duel.lock=true;
  const k=duel.i, qi=duel.ids[k], ok=p!==null&&duel.order[k][p]===0, left=Math.max(0,duelLeft());
  duel.ans[k]=p; if(ok){duel.ok++;duel.pts+=100+Math.round(left*2);}
  const c=Q[qi].c; S.stats[c]=S.stats[c]||{c:0,t:0}; S.stats[c].t++; if(ok)S.stats[c].c++; qlogAdd(c,ok); S.seen[qi]=todayK(); srsUpdate(qi,ok);
  if(!ok&&!S.wrong.includes(qi)) S.wrong.push(qi);
  addDay(1); save(); vDuel();
}
function vDuel(){
  if(!duel){go("jogos");return;}
  if(duel.i>=duel.ids.length){
    if(duel.pts>(S.gm.duelBest||0)){S.gm.duelBest=duel.pts;save();}
    $("#view").innerHTML=`<div><button class="btn ghost sm" onclick="go('jogos')">← Jogos</button></div><h2>Duelo do relógio</h2>
    <div class="score"><span class="muted">Pontuação</span><span class="v num">${duel.pts}</span><span class="muted">${duel.ok} de 10 certas · recorde ${S.gm.duelBest||0}</span></div>
    <div class="stack">${duel.ids.map((qi,k)=>{const q=Q[qi],ok=duel.ans[k]!==null&&duel.order[k][duel.ans[k]]===0;return ok?"":`<details class="rev"><summary><span class="mark bad">✗</span><span>${esc(q[1].length>100?q[1].slice(0,100)+"…":q[1])}</span></summary><div class="stack" style="margin-top:8px"><p>Resposta: <b>${esc(q[2][0])}</b></p><div class="expl">${esc(q[3])}</div></div></details>`;}).join("")}</div>
    <div class="row"><button class="btn" onclick="startDuel()">Jogar de novo</button></div>`;
    return;
  }
  const k=duel.i, q=Q[duel.ids[k]], a=duel.ans[k], shown=duel.lock;
  $("#view").innerHTML=`<div class="qhead"><button class="btn ghost sm" onclick="go('jogos')">← Sair</button><div class="stack" style="gap:2px"><strong>Duelo do relógio</strong><span class="muted num">Questão ${k+1} de 10 · ${duel.pts} pontos</span></div><span class="timer num" id="dT">${Math.ceil(Math.max(0,duelLeft()))} s</span></div>
  <article class="panel stack"><span class="qcat" style="color:${bcol(q.c)}">${esc(CATS[q.c].n)}</span><p class="qtext">${esc(q[1])}</p>
  <div class="opts">${duel.order[k].map((oi,pos)=>`<button class="opt ${shown?(oi===0?"right":a===pos?"wrong":""):""} ${shown?"locked":""}" data-p="${pos}"><span class="l">${L[pos]}</span><span>${esc(q[2][oi])}</span></button>`).join("")}</div>
  ${shown?`<div class="expl"><strong>${a!==null&&duel.order[k][a]===0?"Certo!":a===null?"Tempo esgotado.":"Errado."}</strong> ${esc(q[3])}</div><div class="row"><button class="btn" id="dNext">${k<9?"Próxima":"Ver resultado"}</button></div>`:""}</article>`;
  document.querySelectorAll("#view .opt").forEach(b=>b.onclick=()=>{if(!duel.lock)duelAnswer(+b.dataset.p);});
  const n=$("#dNext"); if(n) n.onclick=()=>{duel.i++;duel.lock=false;duel.t0=Date.now();if(!dtick)dtick=setInterval(duelTick,250);vDuel();};
}

/* ---------- 9. Desafio do dia ---------- */
function seeded(k){let h=0;for(const ch of k)h=(h*31+ch.charCodeAt(0))>>>0;return ()=>{h=(h*1103515245+12345)>>>0;return h/4294967296;};}
function dailyIds(){
  const r=seeded("dch"+todayK()), sh=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  const weak=weakCats(3), by=c=>QI().filter(i=>Q[i].c===c);
  const out=[]; weak.forEach(c=>{const p=sh(by(c)).filter(i=>!out.includes(i));if(p.length)out.push(p[0]);});
  out.push(sh(by(r()<.5?"port":"mat"))[0]);
  const esp=sh(QI().filter(i=>isEsp(Q[i].c)&&!out.includes(i)));
  while(out.length<5&&esp.length) out.push(esp.shift());
  return out;
}
function startDaily(){makeQuiz(dailyIds(),"train","Desafio do dia",0);quiz.daily=true;}

/* ---------- Telas existentes: novos atalhos ---------- */
const _vJogos5=vJogos;
vJogos=function(){
  _vJogos5();
  const g=$("#view .grid2"); if(!g) return;
  g.insertAdjacentHTML("afterbegin",`<div class="panel mode hl"><span class="tag">Todo dia</span><h3>Desafio do dia</h3><p class="muted">5 questões novas por dia, montadas para os seus pontos fracos. Faça todo dia para não perder a sequência.</p><button class="btn" onclick="startDaily()">Jogar</button>${S.gm.dch&&S.gm.dch.best?`<span class="muted num">Maior sequência: ${S.gm.dch.best} dias</span>`:""}</div>`);
  g.insertAdjacentHTML("beforeend",`
    <div class="panel mode"><span class="tag">10 questões · 60 s cada</span><h3>Duelo do relógio</h3><p class="muted">Quanto mais rápido você acerta, mais pontos. Errou ou o tempo acabou, vê a explicação e segue.</p>
      <label class="muted" for="selDuel">Assuntos</label>${gameSel("selDuel",S.gm.lastDuel||"esp")}
      <button class="btn" onclick="S.gm.lastDuel=$('#selDuel').value;startDuel()">Jogar</button>${S.gm.duelBest?`<span class="muted num">Recorde: ${S.gm.duelBest} pontos</span>`:""}</div>
    <div class="panel mode"><span class="tag">${PEG.length} frases</span><h3>Ache o erro</h3><p class="muted">Uma frase de lei ou conceito com uma palavra trocada. Toque na palavra errada.</p>
      <button class="btn" onclick="startErro()">Jogar</button>${S.gm.erroBest?`<span class="muted num">Recorde: ${S.gm.erroBest} de 8</span>`:""}</div>
    <div class="panel mode"><span class="tag">${ORD.length} sequências</span><h3>Ordene as fases</h3><p class="muted">Monte na ordem certa as fases da licitação, o PDCA, a DRE, o fluxo do armazém e outras sequências cobradas.</p>
      <label class="muted" for="selOrd">Sequência</label><select id="selOrd"><option value="r">Sorteada</option>${ORD.map((o,i)=>`<option value="${i}">${esc(o[0])}</option>`).join("")}</select>
      <button class="btn" onclick="startOrd()">Jogar</button></div>`);
};
function startLaw(){makeQuiz(shuffle(QI().filter(i=>/13\.303/.test(Q[i][1]))).slice(0,15),"train","Treino: Lei 13.303 artigo por artigo",0);}

/* ---------- 10. Avisos fora do app ---------- */
const TZ="BEGIN:VTIMEZONE\r\nTZID:America/Sao_Paulo\r\nBEGIN:STANDARD\r\nDTSTART:19700101T000000\r\nTZOFFSETFROM:-0300\r\nTZOFFSETTO:-0300\r\nTZNAME:-03\r\nEND:STANDARD\r\nEND:VTIMEZONE\r\n";
const icsEsc=s=>String(s).replace(/\\/g,"\\\\").replace(/;/g,"\\;").replace(/,/g,"\\,").replace(/\n/g,"\\n");
function icsBuild(){
  const [h,m]=(S.rem.h||"19:00").split(":"), hh=h.padStart(2,"0"), mm=m.padStart(2,"0");
  const stamp=new Date().toISOString().replace(/[-:]/g,"").slice(0,15)+"Z";
  let out="BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Estudos Transpetro 2026//PT\r\nCALSCALE:GREGORIAN\r\n"+TZ;
  const d=new Date(); d.setHours(12,0,0,0);
  while(dkey(d)<="2026-12-06"){
    const k=dkey(d), p=dayPlan(k), its=dayItems(p), ymd=k.replace(/-/g,"");
    const title=p.exam?"PROVA TRANSPETRO":p.rest?"Estudo Transpetro: revisão leve":p.sp?"Estudo Transpetro: "+p.sp.t.split(" (")[0]:"Estudo Transpetro: "+CATS[p.a].n;
    const body=its.map((i,n)=>(n+1)+". "+i.t).join("\n")+"\n\nAbra o app Estudos Transpetro 2026 para marcar o checklist.";
    out+="BEGIN:VEVENT\r\nUID:tp26-"+ymd+"@estudos-transpetro\r\nDTSTAMP:"+stamp+"\r\n";
    out+=p.exam?"DTSTART;VALUE=DATE:"+ymd+"\r\n":"DTSTART;TZID=America/Sao_Paulo:"+ymd+"T"+hh+mm+"00\r\nDURATION:PT2H\r\n";
    out+="SUMMARY:"+icsEsc(title)+"\r\nDESCRIPTION:"+icsEsc(body)+"\r\n";
    out+=p.exam?"BEGIN:VALARM\r\nACTION:DISPLAY\r\nDESCRIPTION:Prova amanhã\r\nTRIGGER:-PT12H\r\nEND:VALARM\r\n":"BEGIN:VALARM\r\nACTION:DISPLAY\r\nDESCRIPTION:"+icsEsc(title)+"\r\nTRIGGER:PT0M\r\nEND:VALARM\r\n";
    out+="END:VEVENT\r\n";
    d.setDate(d.getDate()+1);
  }
  return out+"END:VCALENDAR\r\n";
}
async function icsDownload(){
  const m=$("#icsMsg");
  try{if(window.claude&&claude.use){const dl=await claude.use("downloads");if(dl){await dl.save({filename:"estudos-transpetro.ics",data:icsBuild()});if(m)m.textContent="Arquivo salvo. Abra-o no celular ou importe no Google Agenda (Configurações → Importar).";return;}}}catch(e){if(e&&e.code==="declined"){if(m)m.textContent="Download cancelado.";return;}}
  try{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([icsBuild()],{type:"text/calendar"}));a.download="estudos-transpetro.ics";document.body.appendChild(a);a.click();a.remove();if(m)m.textContent="Arquivo baixado. Abra-o no celular ou importe no Google Agenda (Configurações → Importar).";}
  catch(e){if(m)m.textContent="Este aparelho não permitiu o download.";}
}
function gcalLink(){
  const [h,m]=(S.rem.h||"19:00").split(":").map(Number), st=new Date(), en=new Date();
  st.setHours(h,m,0,0); if(st<new Date()) st.setDate(st.getDate()+1); en.setTime(st.getTime()+2*3600e3);
  const f=d=>d.toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"");
  const det="Abra o app na aba Hoje: a programação do dia mostra cada etapa com horário, área e dica.\n"+GH_URL;
  return "https://calendar.google.com/calendar/render?action=TEMPLATE&text="+encodeURIComponent("Estudo Transpetro")+"&dates="+f(st)+"/"+f(en)+"&ctz=America/Sao_Paulo&recur="+encodeURIComponent("RRULE:FREQ=DAILY;UNTIL=20261205T235959Z")+"&details="+encodeURIComponent(det);
}
const IS_PWA=location.protocol==="https:"&&/github\.io$/.test(location.hostname);
function outsidePanel(){
  return `<section class="panel stack" id="outSec"><h3>Avisos com o app fechado</h3>
  <p class="muted">Uma página da web não consegue acordar o celular sozinha. Para o aviso chegar mesmo com o app fechado, ele precisa estar na sua agenda, que notifica pelo próprio celular.</p>
  <ol class="steps">
    <li><b>Google Agenda:</b> seus lembretes diários das 19h, os simulados e a prova já estão na agenda do seu e-mail. Para mudar o horário, use o botão abaixo e apague o evento antigo.</li>
    ${IS_PWA?`<li><b>Agenda com as tarefas de cada dia:</b> baixe o arquivo com um evento por dia até 06/12, já com as tarefas do checklist e o aviso no horário escolhido acima. Gere de novo uma vez por semana, porque os assuntos mudam conforme o seu desempenho.</li>`:`<li><b>Agenda com as tarefas de cada dia:</b> na versão instalada pelo GitHub dá para baixar um arquivo de agenda com um evento por dia e as tarefas do checklist.</li>`}
  </ol>
  <div class="row" style="gap:8px;flex-wrap:wrap"><a class="btn ghost sm" href="${gcalLink()}" target="_blank" rel="noopener">Criar lembrete diário no Google Agenda</a>${IS_PWA?`<button class="btn sm" onclick="icsDownload()">Baixar agenda com as tarefas (.ics)</button>`:`<a class="btn ghost sm" href="https://pedro1105.github.io/estudos-transpetro/" target="_blank" rel="noopener">Abrir a versão do GitHub</a>`}</div>
  <span class="muted" id="icsMsg">${IS_PWA&&"periodicSync" in (window.ServiceWorkerRegistration?ServiceWorkerRegistration.prototype:{})?"No Android, com o app instalado, o celular também tenta avisar sozinho no horário do lembrete (o sistema decide o momento exato).":""}</span></section>`;
}
/* lembrete pelo service worker (versão instalada) */
async function swRemSync(){
  if(!IS_PWA||!("serviceWorker" in navigator)) return;
  try{
    const k=todayK(), its=dayItems(dayPlan(k)), left=its.filter(i=>!itemDone(k,i)).length;
    const c=await caches.open("tp26-rem");
    await c.put("rem.json",new Response(JSON.stringify({on:!!S.rem.on,h:S.rem.h,day:k,left,due:srsDue().length})));
    const reg=await navigator.serviceWorker.ready;
    if(S.rem.on&&reg.periodicSync){try{const st=await navigator.permissions.query({name:"periodic-background-sync"});if(st.state==="granted")await reg.periodicSync.register("tp26-rem",{minInterval:60*60*1000});}catch(e){}}
  }catch(e){}
}
let swT=null; SAVE_HOOKS.push(()=>{clearTimeout(swT);swT=setTimeout(swRemSync,1500);});
setTimeout(swRemSync,3000);

const Q10=[["port", "A reescritura da sentença “Embora nunca se tenha aposentado, já mostrava sinais de cansaço e era cada vez mais substituído” só muda seu sentido em:", ["Já mostrava sinais de cansaço e era cada vez mais substituído porque nunca se aposentou.", "Mesmo que nunca tenha se aposentado, já mostrava sinais de cansaço e era cada vez mais substituído.", "Apesar de nunca ter se aposentado, já mostrava sinais de cansaço e era cada vez mais substituído.", "Já mostrava sinais de cansaço e era cada vez mais substituído, mas nunca se aposentou.", "Já mostrava sinais de cansaço e era cada vez mais substituído, ainda que nunca se tivesse aposentado."], "“Embora” é concessivo, assim como “mesmo que”, “apesar de” e “ainda que”; “mas” mantém a ideia de oposição. “Porque” é causal: transforma a concessão em causa e muda o sentido.", "BB 2010", 2], ["port", "A única forma verbal que pode ser substituída adequadamente pela forma à sua direita é:", ["“...tinha inequivocamente se mudado...” – se mudara", "“...vinha temendo.” – temeria", "“...estaria mais entre nós...” – estava", "“...estivessem empoeiradas.” – estiverem", "“...tive de esfregar...” – tinha de esfregar"], "“Tinha se mudado” é o pretérito mais-que-perfeito composto; a forma simples equivalente é “se mudara”. As outras trocam o tempo ou o modo (futuro do pretérito, imperfeito, futuro do subjuntivo) e alteram o sentido.", "BB 2010", 6], ["port", "O sinal indicativo da crase deve ser aplicado em qual das sentenças abaixo?", ["Ele é um cavalheiro a moda antiga.", "Estarei na ilha a partir de amanhã.", "O sabiá é admirado devido a seu belo canto.", "Daqui a uma hora se iniciará o recital.", "O pomar fica próximo a uma horta."], "“À moda (de)” é locução com palavra feminina subentendida: à moda antiga. Não há crase antes de verbo (a partir), de pronome possessivo masculino (a seu) e de artigo indefinido (a uma).", "BB 2010", 8], ["mat", "Um investidor aplicou certa quantia em um fundo de ações: 1/3 das ações eram da empresa A, 1/2 da empresa B e o restante da empresa C. Em um ano, as ações de A subiram 20%, as de B caíram 30% e as de C subiram 17%. Em relação à quantia total aplicada, ao final do ano o investidor obteve", ["prejuízo de 5,5%.", "lucro de 10,3%.", "lucro de 7,0%.", "prejuízo de 12,4%.", "prejuízo de 16,5%."], "C fica com 1 − 1/3 − 1/2 = 1/6. Média ponderada: (1/3)·20% + (1/2)·(−30%) + (1/6)·17% = 6,67% − 15% + 2,83% = −5,5%.", "BB 2010", 11], ["mat", "Em fevereiro de 2010, o custo médio da construção civil no Rio de Janeiro era R$ 875,18 por metro quadrado. Qual era, em reais, o custo médio de construção de um apartamento de 75 m²?", ["65.638,50", "65.688,00", "66.048,50", "66.128,50", "66.634,00"], "875,18 × 75 = 875,18 × 3 × 25 = 2.625,54 × 25 = 65.638,50. Atalho: 875,18 × 100 = 87.518 e tire 1/4 (21.879,50).", "BB 2010", 12], ["mat", "Em certa empresa de telefonia móvel, 17 em cada 20 clientes usam o sistema pré-pago. O número de clientes do pré-pago supera o do pós-pago em 24,36 milhões. Quantos milhões de clientes a empresa atende?", ["34,80", "29,58", "30,25", "31,20", "32,18"], "Pré = 17/20 e pós = 3/20 do total. A diferença é 14/20 do total = 24,36 milhões. Total = 24,36 × 20 ÷ 14 = 34,80 milhões.", "BB 2010", 13], ["mat", "A malha de estradas não pavimentadas de Goiás tem 62.868 km a mais que a de estradas pavimentadas. A extensão das não pavimentadas supera em 393 km o sêxtuplo das pavimentadas. Quantos quilômetros de estradas pavimentadas há em Goiás?", ["12.495", "12.535", "12.652", "12.886", "12.912"], "N = P + 62.868 e N = 6P + 393. Igualando: 5P = 62.475, logo P = 12.495.", "BB 2010", 14], ["matfin", "Uma empresa oferece desconto de 10% para pagamento no ato da compra ou de 5% para pagamento um mês depois. Para que as opções sejam indiferentes, a taxa de juros mensal deve ser, aproximadamente,", ["5,6%.", "0,5%.", "3,8%.", "4,6%.", "5,0%."], "Paga-se 90 hoje ou 95 daqui a um mês: 95 ÷ 90 = 1,0556, ou seja, 5,6% ao mês. Pegadinha: a diferença de 5 pontos não é a taxa, porque a base é 90.", "BB 2010", 16], ["matfin", "Um título de valor de face R$ 1.000,00, a 3 meses do vencimento, é descontado em um banco com desconto simples “por fora” (comercial) de 5% ao mês. O valor presente do título, em reais, é", ["850,00", "860,00", "840,00", "830,00", "820,00"], "Desconto comercial simples: D = N × i × t = 1.000 × 0,05 × 3 = 150. Valor presente = 1.000 − 150 = 850.", "BB 2010", 17], ["matfin", "Um investimento teve variação nominal de 15,5% ao ano, e a inflação no período foi de 5%. A taxa de juros real anual foi", ["10,0%.", "0,5%.", "5,0%.", "5,5%.", "10,5%."], "Taxa real: (1 + nominal) ÷ (1 + inflação) − 1 = 1,155 ÷ 1,05 − 1 = 0,10 = 10%. Pegadinha: subtrair (15,5 − 5 = 10,5%) só é aproximação.", "BB 2010", 19], ["mat", "Uma loja vende barras de chocolate ao leite, amargo, branco ou com amêndoas. Na promoção, o cliente compra três barras, com sabores repetidos ou não. De quantos modos distintos ele pode escolher os sabores?", ["20", "4", "10", "12", "16"], "Combinação com repetição de 4 sabores tomados 3 a 3: C(4 + 3 − 1, 3) = C(6, 3) = 20. A ordem das barras não importa.", "BB 2010", 26], ["mat", "João, Pedro, Celso, Raul e Marcos foram aprovados e cada um trabalhará em uma unidade diferente: P, Q, R, S ou T. João já foi designado para P. De quantos modos distintos os demais podem ser distribuídos pelas unidades restantes?", ["24", "12", "48", "90", "120"], "Restam 4 pessoas para 4 unidades: permutação 4! = 24.", "BB 2010", 28], ["mat", "A afirmação “6n < n² + 8” será verdadeira, com certeza, se n for um número real", ["menor que 2.", "menor que 8.", "menor que 4.", "maior que 2.", "maior que 3."], "n² − 6n + 8 > 0 ⇔ (n − 2)(n − 4) > 0 ⇔ n < 2 ou n > 4. Entre as opções, só “menor que 2” garante a desigualdade.", "BB 2010", 29], ["mat", "Um colar usa 16 contas pequenas, todas da mesma cor, e 2 contas grandes de cores diferentes entre si, e nenhuma conta grande pode ter a cor das pequenas. Há contas pequenas brancas, pretas, azuis e laranjas e contas grandes brancas, vermelhas, verdes, azuis e rosas. De quantos modos distintos podem ser escolhidas as cores?", ["32", "28", "30", "40", "42"], "Pequenas brancas ou azuis: sobram 4 cores grandes, C(4,2) = 6 cada (12). Pequenas pretas ou laranjas: 5 cores grandes, C(5,2) = 10 cada (20). Total 32.", "BB 2010", 30], ["port", "A palavra “mesmo” está empregada com o mesmo sentido de “o Brasil foi campeão mesmo” (= realmente) na seguinte frase:", ["Você sabe mesmo falar cinco idiomas fluentemente?", "O diretor preferiu ele mesmo entregar o relatório ao conselho.", "Mesmo sabendo que a proposta não seria aceita, ele a enviou.", "Fui atendido pelo mesmo vendedor que o atendeu anteriormente.", "Ele ficou tão feliz com a notícia que pensou mesmo em sair dançando."], "Em “campeão mesmo”, mesmo = realmente, de fato. Nas outras: reforço de pronome (ele mesmo), concessão (mesmo sabendo), identidade (o mesmo vendedor) e até/inclusive.", "BB 2012", 5], ["port", "O trecho “apesar de problemas gravíssimos” é reescrito de acordo com a norma-padrão, mantendo o sentido, em:", ["embora tenham ocorrido problemas gravíssimos.", "ainda que houvessem problemas gravíssimos.", "apesar de que aconteceu problemas gravíssimos.", "a despeito de acontecesse problemas gravíssimos.", "não obstante os problemas gravíssimos que ocorreu."], "“Embora” pede subjuntivo e o verbo concorda com “problemas”: tenham ocorrido. Erros: “houvessem” (haver = existir é impessoal), “aconteceu problemas” e “que ocorreu” (falta de concordância).", "BB 2012", 6], ["port", "A frase em que a presença ou ausência da preposição está de acordo com a norma-padrão é:", ["Preciso de que me arranjem um emprego.", "A certeza que a sorte chegará para mim é grande.", "Convidei à Maria para vir ao escritório.", "A necessidade que ele viesse me ajudar me fez chamá-lo.", "Às dez horas em ponto, estarei à sua casa."], "Precisar rege “de”, mesmo antes de oração: preciso de que. Certeza e necessidade pedem “de que”; convidar é transitivo direto (convidei Maria); estar pede “em” (em sua casa).", "BB 2012", 8], ["port", "O verbo entre parênteses está conjugado de acordo com a norma-padrão em:", ["Nós reouvemos os objetos roubados na rua. (reaver)", "Desse jeito, ele fale a loja do pai. (falir)", "O príncipe branda a sua espada às margens do rio. (brandir)", "Os jardins florem na primavera. (florir)", "Eu me precavejo dos resfriados com boa alimentação. (precaver)"], "Reaver segue haver só nas formas com “v”: reouvemos (como houvemos). Falir, brandir e florir são defectivos e não têm essas formas; precaver não tem “precavejo”.", "BB 2012", 9], ["port", "O uso de sinais (aspas e travessão) está adequado à norma-padrão, exigida em correspondência oficial, na frase:", ["“Mutatis mutandis”, as novas diretrizes da direção em nada alteram as antigas.", "O artigo sobre o “processo de desregulamentação” foi publicado na Follha de São Paulo.", "As chuvas de verão — fenômenos que se repetem desde há muito tempo podem ser previstas.", "O cuidado com a saúde — meta prioritária do governo, será ainda maior.", "— O diretor disse: Demita-se o funcionário."], "Expressão estrangeira vai entre aspas. Em B o nome do jornal deveria estar destacado (e está grafado errado); em C e D o travessão abre e não fecha; em E falta marcar a fala citada.", "BB 2012", 10], ["mat", "Empresas de reciclagem pagam R$ 320,00 por 100 kg de latas de alumínio, e 1 kg corresponde a 74 latas. Quantos reais receberá um catador ao vender 703 latas?", ["30,40", "23,15", "23,98", "28,80", "28,96"], "703 ÷ 74 = 9,5 kg. O preço é R$ 3,20 por kg: 9,5 × 3,20 = 30,40.", "BB 2012", 11], ["mat", "Os pontos A, B, C e D estão, nessa ordem, sobre uma reta. A dista 65,8 mm de D, B dista 41,9 mm de D, e C está a 48,7 mm de A. Qual é a distância, em mm, entre B e C?", ["24,8", "17,1", "23,1", "23,5", "23,9"], "AB = AD − BD = 65,8 − 41,9 = 23,9. BC = AC − AB = 48,7 − 23,9 = 24,8.", "BB 2012", 12], ["mat", "Uma moeda honesta é lançada até que saiam dois resultados consecutivos iguais. Qual a probabilidade de serem necessários exatamente três lançamentos?", ["1/4", "1/8", "1/3", "1/2", "3/4"], "Os dois primeiros têm de ser diferentes e o terceiro igual ao segundo: cara-coroa-coroa ou coroa-cara-cara. São 2 casos em 8: 1/4.", "BB 2012", 16], ["matfin", "Um celular custa R$ 1.344,00 à vista ou em dois pagamentos iguais, um no ato e outro um mês depois, com juros de 10% ao mês. O valor de cada pagamento, em reais, é", ["704,00", "705,60", "719,00", "739,20", "806,40"], "À vista = P + P/1,1 = P × 2,1/1,1. Então P = 1.344 × 1,1 ÷ 2,1 = 704.", "BB 2012", 17], ["matfin", "Um investimento rende taxa nominal de 12% ao ano com capitalização trimestral. A taxa efetiva anual é, aproximadamente,", ["12,55%", "12%", "12,49%", "13%", "13,43%"], "Taxa trimestral = 12% ÷ 4 = 3%. Efetiva anual = 1,03⁴ − 1 = 1,1255 − 1 = 12,55%.", "BB 2012", 18], ["matfin", "João tomou R$ 900,00 a juros compostos de 10% ao mês. Dois meses depois pagou R$ 600,00 e, um mês após, liquidou a dívida. O último pagamento foi de, aproximadamente,", ["R$ 538,00", "R$ 240,00", "R$ 330,00", "R$ 429,00", "R$ 489,00"], "900 × 1,1² = 1.089; menos 600 = 489. Mais um mês: 489 × 1,1 = 537,90 ≈ 538. Pegadinha: R$ 489,00 esquece o último mês de juros.", "BB 2012", 19], ["matfin", "Um investimento de R$ 10.000,00 rende R$ 6.000,00 no fim do 1º ano e R$ 5.500,00 no fim do 2º. A taxa interna de retorno (TIR) anual é", ["10%", "1%", "1,5%", "5%", "15%"], "A TIR zera o VPL. Testando 10%: 6.000 ÷ 1,1 + 5.500 ÷ 1,21 = 5.454,55 + 4.545,45 = 10.000.", "BB 2012", 20], ["mat", "Uma senha numérica terá de 4 a 6 dígitos, sem repetição, usando só os algarismos da data 26/03/1980. Quantas senhas diferentes podem ser criadas?", ["8.400", "5.040", "16.870", "20.160", "28.560"], "Algarismos distintos: 2, 6, 0, 3, 1, 9, 8 (7). Arranjos: A(7,4) + A(7,5) + A(7,6) = 840 + 2.520 + 5.040 = 8.400.", "BB 2012", 26], ["mat", "Saquinhos com 13 balas terão no mínimo 3 balas de cada sabor (hortelã, caramelo e coco). Saquinhos diferem pela quantidade de cada sabor. Quantos saquinhos diferentes podem ser montados?", ["15", "4", "6", "9", "12"], "Coloque 3 de cada (9 balas). Sobram 4 para distribuir entre 3 sabores: C(4 + 2, 2) = C(6, 2) = 15.", "BB 2012", 28], ["mat", "Marcelo tem 7 camisetas (3 brancas, 1 preta, 1 amarela, 1 vermelha, 1 laranja) e 4 bermudas (preta, cinza, branca, azul). De quantos modos pode escolher uma camiseta e uma bermuda de cores diferentes?", ["24", "14", "17", "26", "28"], "Total 7 × 4 = 28. Tire as combinações de mesma cor: 3 brancas com a bermuda branca (3) e preta com preta (1). 28 − 4 = 24.", "BB 2012", 29], ["mat", "Os anagramas de BRASIL são dispostos em ordem alfabética. O primeiro anagrama terminado em B ocupa que posição?", ["34ª", "5ª", "25ª", "49ª", "121ª"], "O primeiro terminado em B é AILRSB. Antes dele: AB____ (24), AIB___ (6), AILB__ (2), AILRBS (1) = 33. Ele é o 34º.", "BB 2012", 30], ["port", "De acordo com a norma-padrão, o verbo está corretamente flexionado em:", ["Há quase duzentos anos, atribuem-se às cidades a responsabilidade de motor do desenvolvimento e a condição de lugar privilegiado para os negócios.", "No mundo moderno, conferem-se às grandes metrópoles importante papel no desenvolvimento da economia mundial.", "Conforme o grau de influência internacional, classificou-se as 50 maiores cidades em três classes.", "Em centros com grandes aglomerações, realiza-se negócios nacionais e internacionais.", "Em todos os estudos geopolíticos, considera-se as cidades globais como polos de influência."], "Na voz passiva sintética, o verbo concorda com o sujeito paciente. Em A o sujeito é composto (a responsabilidade e a condição): atribuem-se. Correções: confere-se papel, classificaram-se as cidades, realizam-se negócios, consideram-se as cidades.", "BB 2018", 1], ["port", "A regência do verbo está de acordo com a norma-padrão em:", ["Antes de comprar um imóvel acima da renda, recomenda-se ao comprador que pesquise melhores condições de mercado.", "Para ganhar espaço, os bancos costumam a ampliar prazos e limites.", "O planejamento é fundamental, o que envolve ao ato de pesquisar as melhores oportunidades.", "A inadimplência ocorre quando o cidadão não acata às cláusulas dos empréstimos.", "Grande parte das pessoas que pedem empréstimo aspiram a construção da casa própria."], "Recomendar algo a alguém: recomenda-se ao comprador. Correções: costumam ampliar, envolve o ato, acata as cláusulas, aspiram à construção (aspirar = desejar pede “a”).", "BB 2018", 2], ["port", "O pronome oblíquo está na posição correta, segundo a norma-padrão, em:", ["Os dirigentes devem esforçar-se para que os funcionários tenham consciência ambiental.", "Quando as carreiras tradicionais saturam-se, os profissionais recorrem a outras alternativas.", "Caso os responsáveis descuidem-se da tarefa, doenças podem proliferar.", "As empresas têm mantido-se atentas às leis ambientais.", "Os trabalhadores rurais nunca enganaram-se sobre a importância da agricultura."], "Em locução com infinitivo, a ênclise ao infinitivo é correta. Conjunções (quando, caso) e advérbio de negação (nunca) atraem o pronome: quando se saturam, caso se descuidem, nunca se enganaram. Não há ênclise a particípio: têm-se mantido.", "BB 2018", 3], ["port", "O acento grave indicativo de crase é obrigatório na palavra destacada em:", ["As escolas chegaram a etapa em que os professores têm cada vez mais dificuldade para ensinar.", "Os pais não percebem que falta de limites e superproteção comprometem a formação dos filhos.", "A indisciplina aumentou a partir do momento em que as mídias divulgaram essa ideia.", "A atenção e a motivação levam a pessoa a pensar e agir de forma satisfatória.", "As famílias e as escolas encontram-se frente a jovens com quem não dialogam."], "Chegar a + a etapa = chegaram à etapa. Não há crase antes de verbo (a partir), em “levam a pessoa” (objeto direto, só artigo) nem antes de palavra masculina (a jovens).", "BB 2018", 4], ["port", "A pontuação está corretamente empregada em:", ["O conjunto de preocupações e ações efetivas, quando atendem, de forma voluntária, aos funcionários e à comunidade, pode ser definido como responsabilidade social.", "As empresas que optam pela prática da responsabilidade social, beneficiam-se de uma melhor imagem no mercado.", "A noção foi muito usada em campanhas publicitárias: por isso, as empresas precisam relacionar-se melhor, com a sociedade.", "A responsabilidade social envolve assim: a qualidade de vida o bem-estar dos trabalhadores, a redução de impactos, no meio ambiente.", "Alguns críticos defendem a ideia de que: o objetivo das empresas é o lucro e a geração de empregos."], "Em A, as vírgulas isolam a oração adverbial e a expressão “de forma voluntária”. Erros: vírgula entre sujeito e verbo (B), vírgula antes do complemento (C), dois-pontos e vírgulas mal postos (D e E).", "BB 2018", 5], ["matfin", "Um lojista deu desconto de 20% sobre o preço de venda e ainda teve lucro de 4% sobre o custo. Se vendesse pelo preço original, o lucro sobre o custo seria de", ["30%", "40%", "10%", "20%", "25%"], "0,8 × Venda = 1,04 × Custo, logo Venda = 1,3 × Custo: lucro de 30% sobre o custo.", "BB 2018", 12], ["mat", "As pontuações de um cliente foram: 0 (1 vez), 2 (2 vezes), 3 (4 vezes), 4 (1 vez), 6 (1 vez), 8 (5 vezes) e 9 (1 vez). A mediana é o valor mínimo para ser cliente “especial”. Qual a redução máxima da maior pontuação sem que ele perca a classificação, mantidas as demais?", ["cinco unidades", "quatro unidades", "uma unidade", "duas unidades", "três unidades"], "São 15 valores; a mediana é o 8º: 0,2,2,3,3,3,3,4… = 4. Baixar o 9 até 4 não muda a mediana: redução máxima de 5.", "BB 2018", 21], ["mat", "O jogador X lança um dado honesto 50 vezes e o jogador Y, 51 vezes. A probabilidade de Y obter mais faces ímpares que X é", ["1/2", "1", "3/4", "1/4", "1/6"], "Por simetria: Y tem um lançamento a mais. Ou Y tem mais ímpares, ou mais pares que X (não podem acontecer as duas nem nenhuma). Os dois casos são simétricos: 1/2.", "BB 2018", 22], ["mat", "Um cliente lança uma moeda honesta: cara, sorteia um cupom da urna 1; coroa, da urna 2. 30% dos cupons da urna 1 são premiados e 40% de todos os cupons são premiados. A proporção de premiados na urna 2 é", ["50%", "25%", "5%", "10%", "15%"], "0,5 × 30% + 0,5 × p = 40% → 15% + 0,5p = 40% → p = 50%.", "BB 2018", 25], ["mat", "Há dez anos, a média das idades de um grupo era 30 anos, com desvio padrão de 8 anos. Todos estão vivos. Hoje, o quociente entre o desvio padrão e a média das idades é", ["0,20", "0,45", "0,42", "0,27", "0,34"], "Somar 10 a todos aumenta a média em 10 (40) e não muda o desvio padrão (8). 8 ÷ 40 = 0,20 (coeficiente de variação).", "BB 2018", 26], ["mat", "Uma amostra de 5 valores, em ordem crescente, forma uma progressão aritmética. A variância amostral (dividida por n − 1) é 40. A razão da progressão é", ["4", "3", "5/2", "2/5", "1"], "Valores a − 2r, a − r, a, a + r, a + 2r. Soma dos quadrados dos desvios = 10r². Variância = 10r² ÷ 4 = 2,5r² = 40 → r² = 16 → r = 4.", "BB 2018", 34], ["mat", "Os jogadores escolhem 3 números diferentes de 1 a 10. Sorteiam-se 2 bolas de uma urna com 10 bolas numeradas. Ganha quem tiver os dois números sorteados. A probabilidade de um jogador ganhar é", ["1/15", "1/90", "1/30", "1/5", "1/20"], "Pares possíveis: C(10,2) = 45. Pares favoráveis (dentro dos 3 escolhidos): C(3,2) = 3. 3/45 = 1/15.", "BB 2018", 39], ["port", "No trecho “Às organizações, cabe o desafio de orientar seus clientes, já que, na maioria das vezes, eles não sabem quais são os limites da privacidade digital”, a expressão “já que” expressa a noção de", ["causalidade", "condição", "finalidade", "concessão", "comparação"], "“Já que” equivale a “porque”, “uma vez que”: introduz a causa de as organizações terem esse desafio.", "BB 2021", 4], ["port", "No trecho “Esse limite poderia ser dado pelo próprio consumidor, se ele assim quiser?”, a forma verbal “poderia” expressa a noção de", ["hipótese", "dever", "certeza", "obrigação", "necessidade"], "O futuro do pretérito, junto da oração condicional “se ele assim quiser”, indica algo hipotético, não certo nem obrigatório.", "BB 2021", 6], ["port", "De acordo com a norma-padrão, a concordância verbal está correta em:", ["Em grupos de jovens usuários de redes sociais, constataram-se inúmeras situações de dependência crônica do uso de celulares.", "Para entender o público das plataformas digitais, analisaram-se, durante dez semanas, o comportamento de jovens viciados em aplicativos.", "Nos serviços de ouvidoria, atendem-se a reclamações de todos os tipos sobre falhas nas conexões.", "Nas análises sobre privacidade, atribuem-se aos aplicativos de conversas a maior responsabilidade pela situação atual.", "Com base em dados estatísticos, estimam-se que os jovens sejam os maiores responsáveis pela navegação nas redes."], "Voz passiva sintética: o verbo concorda com o sujeito paciente (situações foram constatadas → constataram-se). Correções: analisou-se o comportamento; atende-se a reclamações (com preposição o sujeito é indeterminado e o verbo fica no singular); atribui-se a maior responsabilidade; estima-se que (o sujeito é uma oração).", "BB 2021", 7], ["port", "O grupo de palavras que atende às regras de emprego do hífen, segundo o Vocabulário Ortográfico da Língua Portuguesa, é", ["subutilizar / sub-reitor", "extra-escolar / médico-cirurgião", "bem-educado / vagalume", "portarretratos / dia a dia", "arco-íris / contra-regra"], "Com “sub”, há hífen antes de “r” e “b” (sub-reitor) e não antes de vogal diferente (subutilizar). Correções: extraescolar, vaga-lume, porta-retratos, contrarregra.", "BB 2021", 8], ["port", "O acento grave indicativo da crase é obrigatório em:", ["As pesquisas tecnológicas são indispensáveis devido à importância de solucionar problemas causados pela invasão de dados.", "A exigência de entrar em contato com instituições financeiras obrigou o cliente a criar senhas.", "A falta de leis exige que os indivíduos se preparem para enfrentar a invasão do acesso a suas vidas privadas.", "A revolução da tecnologia modificou a realidade social, penetrando em todas as esferas da atividade humana.", "O surgimento das redes sociais conduziu as pessoas a novas situações de risco."], "“Devido a” + “a importância” = devido à importância. Não há crase antes de verbo (a criar), antes de possessivo no plural sem artigo (a suas vidas) nem antes de plural sem artigo (a novas situações).", "BB 2021", 9], ["port", "O pronome está colocado corretamente, segundo a norma-padrão, em:", ["Quando a privacidade dos dados bancários é mantida, como nos garantem as instituições, ficamos tranquilos.", "A associação publicou uma diretriz de segurança, na qual mostra-se a necessidade de proteção de dados.", "A segurança da informação já transformou-se em uma área estratégica.", "Naquele evento, ninguém tinha-se incomodado com o palestrante.", "Apesar das dificuldades, sempre referimo-nos com cuidado aos nossos dados pessoais."], "Palavras atrativas pedem próclise: “como nos garantem”. Correções: na qual se mostra (pronome relativo), já se transformou (advérbio), ninguém se tinha incomodado (pronome indefinido), sempre nos referimos (advérbio).", "BB 2021", 10], ["mat", "Um banco entrevistou 1.000 clientes sobre dois novos produtos: 430 não tinham interesse em nenhum, 270 se interessaram pelo primeiro e 400 pelo segundo. Qual a porcentagem dos entrevistados interessada em ambos os produtos?", ["10%", "15%", "20%", "25%", "30%"], "Interessados em pelo menos um: 1.000 − 430 = 570. Ambos = 270 + 400 − 570 = 100, ou seja, 10% de 1.000.", "BB 2021", 16], ["mat", "J modelou um problema pela função a(x) = 1000·e^(kx) e L, no mesmo problema, chegou a b(x) = 10^(2x+3). Se ambos estão corretos, qual o valor de k?", ["ln 100", "ln 2", "ln 3", "ln 10", "ln 30"], "10^(2x+3) = 10³ · (10²)^x = 1000 · 100^x. Comparando com 1000·(e^k)^x: e^k = 100, logo k = ln 100.", "BB 2021", 18], ["mat", "Uma loja vende um produto em embalagem unitária e dupla. Num mês vendeu 16 duplas e 20 unitárias (R$ 488,00); no seguinte, 30 duplas e 25 unitárias (R$ 790,00). Qual o desconto dado em cada unidade ao se comprar a embalagem dupla?", ["10%", "5%", "8%", "12%", "15%"], "16d + 20u = 488 e 30d + 25u = 790. Multiplicando a primeira por 1,25: 20d + 25u = 610; subtraindo: 10d = 180, d = 18 e u = 10. Na dupla cada unidade sai a 9: desconto de 10%.", "BB 2021", 20], ["matfin", "O gerente autoriza uma taxa anual máxima de 8,36%. O negociador já ofereceu ao cliente 5% sobre o capital C₁, resultando em C₂, e quer aplicar uma nova taxa sobre C₂ sem ultrapassar o máximo autorizado. Qual o valor máximo dessa nova taxa?", ["3,20%", "2,16%", "2,24%", "7,96%", "16,72%"], "Taxas compostas se multiplicam: 1,05 × (1 + i) = 1,0836 → 1 + i = 1,032 → i = 3,20%. Pegadinha: 8,36 − 5 = 3,36% não aparece porque a conta não é por subtração.", "BB 2021", 26], ["matfin", "Um cliente aplicou R$ 10.000,00 no início de janeiro de 2018, 2019, 2020 e 2021, com retorno de 10% ao ano. Quer ter R$ 65.000,00 em janeiro de 2023. Qual o valor mínimo a depositar em janeiro de 2022? (Dados: 1,1⁵ = 1,611; 1,1⁴ = 1,464; 1,1³ = 1,331)", ["Entre R$ 8.000,00 e R$ 8.199,00", "Entre R$ 8.200,00 e R$ 8.399,00", "Entre R$ 8.400,00 e R$ 8.599,00", "Entre R$ 8.600,00 e R$ 8.799,00", "Entre R$ 8.800,00 e R$ 8.999,00"], "Em jan/2023 os quatro depósitos valem 10.000 × (1,611 + 1,464 + 1,331 + 1,21) = 56.160. Faltam 8.840, que o depósito de 2022 precisa atingir após 1 ano: x = 8.840 ÷ 1,1 ≈ 8.036.", "BB 2021", 27], ["matfin", "Um boleto de R$ 25.000,00 será pago com 12 dias de atraso. Cobram-se, sobre o principal, multa de 2% e juros simples de 0,2% ao dia. O valor total a pagar é", ["R$ 26.100,00", "R$ 25.600,00", "R$ 25.800,00", "R$ 26.300,00", "R$ 26.500,00"], "Multa 2% + juros 12 × 0,2% = 2,4%: total de 4,4% sobre 25.000 = 1.100. Paga 26.100.", "BB 2021", 28], ["matfin", "Um investimento rendeu 21% no primeiro ano e o montante foi reaplicado, rendendo 96% no segundo ano (juros compostos). A taxa de retorno anual equivalente no período foi", ["54%", "56%", "58%", "60%", "62%"], "Fator total: 1,21 × 1,96 = 2,3716 = (1,54)², pois 1,1² × 1,4² = (1,1 × 1,4)². Taxa anual equivalente = 54%. Pegadinha: média simples (58,5%) está errada.", "BB 2021", 29], ["lgpd", "A solução de segurança que monitora o tráfego de entrada e saída da rede, funcionando como filtro de pacotes que permite ou bloqueia a passagem conforme regras, é o", ["firewall", "antimalware", "dispositivo USB", "phishing", "SQL injection"], "O firewall filtra o tráfego por regras. Antimalware atua sobre arquivos e programas; phishing e SQL injection são ataques, não defesas.", "BB 2021", 41], ["lgpd", "Para conectar com segurança, pela internet pública, o computador do funcionário em casa à rede privada da empresa, protegendo o tráfego contra terceiros, deve-se usar", ["VPN", "HTTP", "PGP", "WEK", "WPA2"], "A VPN cria um túnel criptografado pela internet até a rede da empresa. WPA2 protege só a rede Wi-Fi local; PGP cifra mensagens; HTTP não cifra.", "BB 2021", 44], ["info", "Para pedir ao Google uma correspondência exata da frase Prédio mais alto do Brasil, deve-se digitar", ["\"Prédio mais alto do Brasil\" (entre aspas)", "/Prédio mais alto do Brasil/", "-Prédio -mais -alto -do -Brasil", "#Prédio #mais #alto #do #Brasil", "exato(Prédio mais alto do Brasil)"], "Aspas buscam a frase exata. O sinal de menos exclui termos; a hashtag busca marcadores.", "BB 2021", 47], ["lgpd", "Em segurança da informação, a irretratabilidade (não repúdio) garante a", ["impossibilidade de negar a autoria de uma mensagem.", "manutenção exata e completa do conteúdo da mensagem.", "possibilidade de acesso à mensagem quando necessário.", "impossibilidade de pessoas não autorizadas lerem o conteúdo.", "impossibilidade de o destinatário negar o recebimento."], "Irretratabilidade = o autor não pode negar que enviou. Conteúdo íntegro é integridade; acesso quando necessário é disponibilidade; sigilo é confidencialidade.", "BB 2021", 49], ["info", "Numa planilha do Excel, é preciso (a) aceitar apenas débitos entre R$ 40.000,00 e R$ 110.000,00 e (b) destacar em outra cor os débitos entre R$ 90.000,00 e R$ 110.000,00. Os recursos são, respectivamente,", ["Validação de dados; Formatação condicional", "Formatação condicional; Gerenciador de cenários", "Verificação de erros; Teste de hipóteses", "Consolidação; Formatação condicional", "Classificar e Filtrar; Validação de dados"], "Validação de dados restringe o que pode ser digitado. Formatação condicional muda a aparência da célula conforme o valor.", "BB 2021", 50], ["lgpd", "Instalar controle biométrico nas portas do data center e exigir troca das senhas do servidor a cada 30 dias são controles, respectivamente,", ["físico e processual", "físico e tecnológico", "processual e físico", "processual e tecnológico", "tecnológico e processual"], "Porta com biometria protege o acesso físico ao local. A troca periódica de senha é uma regra de procedimento (política), portanto processual.", "BB 2021", 51], ["lgpd", "Muitos códigos maliciosos aproveitam um recurso do Windows 10 que executa um programa de um pendrive logo após sua conexão. Esse recurso, que pode ser desativado, é a", ["reprodução automática", "inicialização automática", "execução automática", "atualização automática", "configuração automática"], "No Windows 10 o recurso se chama Reprodução Automática (AutoPlay). Desativá-lo evita que pendrives infectados rodem programas sozinhos.", "BB 2021", 52], ["info", "No Mozilla Firefox, para procurar uma palavra na página aberta, usa-se", ["Ctrl + F", "Ctrl + T", "Ctrl + N", "Ctrl + P", "Ctrl + S"], "Ctrl + F abre a busca na página. Ctrl + T abre aba, Ctrl + N nova janela, Ctrl + P imprime, Ctrl + S salva.", "BB 2021", 53], ["lgpd", "A assinatura digital de um documento é criada pelo signatário com o uso da sua chave", ["privada", "pública", "simétrica", "compartilhada", "certificada"], "Assina-se com a chave privada (só o dono tem) e confere-se com a chave pública. Para sigilo é o inverso: cifra-se com a pública do destinatário.", "BB 2021", 55], ["port", "No trecho “conheceu um método inventado pouco antes por Charles Barbier de La Serre, oficial do Exército francês”, a vírgula tem a mesma função que em:", ["Escrita noturna, método de Barbier, não teve sucesso quando criado.", "A cegueira não o impediu, no entanto, de estudar.", "Perspicaz, Braille percebeu falhas no método de Barbier.", "A infecção, seis meses depois, afetou o segundo olho de Braille.", "No Instituto Nacional para Jovens Cegos, Braille desenvolveu seus estudos."], "“oficial do Exército francês” é aposto explicativo, como “método de Barbier”. As outras isolam conjunção deslocada, predicativo antecipado e adjuntos adverbiais.", "BB 2023", 6], ["port", "Em “Mas, como a ideia não pegou na tropa, Barbier adaptou o método para a leitura de cegos”, a oração “como a ideia não pegou na tropa” tem valor de", ["causa", "fim", "tempo", "proporção", "consequência"], "“Como” no início da frase, antes da oração principal, equivale a “porque/já que”: é causal.", "BB 2023", 7], ["port", "O sinal indicativo de crase está corretamente empregado em:", ["Todos estavam à espera de que o valor de Braille fosse reconhecido.", "Braille foi forçado à superar sua cegueira.", "O professor referiu-se à um aluno brilhante.", "Braille não foi reconhecido até que se consolidasse à oficialização de seu método.", "Ele queria ensinar à todos os alunos o seu sistema."], "“À espera de” é locução com palavra feminina. Não há crase antes de verbo, de artigo indefinido, de pronome indefinido (todos) nem antes de sujeito (a oficialização).", "BB 2023", 8], ["port", "A palavra destacada respeita a concordância nominal em:", ["Os alunos ficavam meio desorientados com o método de Barbier.", "Hoje, Braille e seu método são muitos conhecidos.", "Depois do acidente, Braille e sua família não ficaram só.", "Há bastante razões para considerar Braille um herói.", "O sistema de Braille tinha menas limitações que o de Barbier."], "“Meio” como advérbio (= um pouco) é invariável. Correções: muito conhecidos (advérbio), ficaram sós (adjetivo = sozinhos), bastantes razões (adjetivo), menos (sempre invariável).", "BB 2023", 9], ["port", "O pronome oblíquo átono está colocado de acordo com a norma-padrão em:", ["O menino cego aos cinco anos tornar-se-ia um herói nacional na França.", "Me surpreende a história de vida de Braille.", "Seu método não trouxe-lhe reconhecimento em vida.", "Quantos impressionaram-nos como Braille?", "Braille recebia os alunos e sempre auxiliava-os com o método."], "No futuro do pretérito sem palavra atrativa, usa-se mesóclise: tornar-se-ia. Não se inicia frase com pronome átono; “não”, “quantos” e “sempre” atraem a próclise.", "BB 2023", 10], ["mat", "Uma sala tem 70 lugares. Cada estudante paga R$ 660,00 por mês mais R$ 30,00 por lugar vago. Para a arrecadação ser máxima, a turma deve ter x estudantes. O resto da divisão de x por 5 é", ["1", "0", "2", "3", "4"], "Receita R = x·[660 + 30(70 − x)] = x(2.760 − 30x). O máximo da parábola está em x = 2.760 ÷ 60 = 46. 46 ÷ 5 deixa resto 1.", "BB 2023", 17], ["mat", "Armários, mesas e cadeiras têm preços fixos. A agência X comprou 4 armários, 7 mesas e 10 cadeiras por R$ 7.500,00; a Y, 1 armário, 2 mesas e 3 cadeiras por R$ 2.080,00. A Z comprará 2 de cada. Quanto gastará a agência Z?", ["R$ 2.520,00", "R$ 2.200,00", "R$ 2.380,00", "R$ 2.460,00", "R$ 2.740,00"], "Não é preciso achar cada preço: X − 3·Y = (4 − 3)a + (7 − 6)m + (10 − 9)c = 7.500 − 6.240 = 1.260 = a + m + c. Z = 2 × 1.260 = 2.520.", "BB 2023", 19], ["matfin", "Para investir R$ 100.000,00 por 2 anos: opção 1 rende 12% ao ano (compostos) com 15% de imposto sobre os juros; opção 2 rende 10% ao ano (compostos) sem imposto. A opção mais lucrativa rende a mais", ["R$ 624,00", "R$ 824,00", "R$ 1.524,00", "R$ 2.940,00", "R$ 4.440,00"], "Opção 1: juros = 100.000 × (1,12² − 1) = 25.440; líquido 85% = 21.624. Opção 2: 100.000 × (1,1² − 1) = 21.000. Diferença 624.", "BB 2023", 26], ["matfin", "Um investimento rende 1% ao mês e o cheque especial cobra 4% ao mês, ambos compostos. A diferença entre as taxas anuais é (Dados: 1,01¹² = 1,1268; 1,04¹² = 1,6010)", ["47,42%", "12,68%", "36,00%", "48,68%", "60,10%"], "Taxas anuais equivalentes: 60,10% e 12,68%. Diferença 47,42%. Pegadinha: 48 − 12 = 36% seria a conta com taxas proporcionais (juros simples).", "BB 2023", 27], ["matfin", "Um capital ficou aplicado 50 dias a juros simples de 1,5% ao mês. O cliente pagou R$ 4.500,00 de imposto de renda, que é 22,5% dos juros. Considerando o mês de 30 dias, o valor aplicado foi", ["R$ 800.000,00", "R$ 450.000,00", "R$ 700.000,00", "R$ 750.000,00", "R$ 950.000,00"], "Juros = 4.500 ÷ 0,225 = 20.000. Taxa no período: 1,5% × 50/30 = 2,5%. Capital = 20.000 ÷ 0,025 = 800.000.", "BB 2023", 28], ["matfin", "Um equipamento custa R$ 300.000,00 à vista ou entrada + R$ 150.000,00 em 1 ano + R$ 150.000,00 em 2 anos, a juros compostos de 10% ao ano. O valor da entrada é, aproximadamente,", ["R$ 39.670,00", "R$ 20.000,00", "R$ 48.750,00", "R$ 54.280,00", "R$ 63.000,00"], "Traga as parcelas para hoje: 150.000 ÷ 1,1 = 136.364 e 150.000 ÷ 1,21 = 123.967. Entrada = 300.000 − 260.331 ≈ 39.670.", "BB 2023", 29], ["matfin", "Uma empresa tomou R$ 50.000,00 em janeiro a 5% ao mês (compostos), pagou R$ 30.000,00 em março e R$ 20.000,00 em abril. O saldo devedor em maio era, aproximadamente,", ["R$ 6.700,00", "R$ 3.625,00", "R$ 3.806,00", "R$ 6.381,00", "R$ 7.201,00"], "Março: 50.000 × 1,05² = 55.125 − 30.000 = 25.125. Abril: × 1,05 = 26.381 − 20.000 = 6.381. Maio: × 1,05 ≈ 6.700. Pegadinha: 6.381 esquece o último mês.", "BB 2023", 30], ["info", "No webmail, a mensagem é enviada do navegador ao servidor web e, depois, do servidor web para a fila do servidor de correio. Os protocolos dessas etapas são, respectivamente,", ["HTTP e SMTP", "SMTP e HTTP", "POP3 e SMTP", "SMTP e POP3", "HTTP e POP3"], "Navegador fala HTTP(S) com o servidor web. Envio de e-mail entre servidores é SMTP. POP3 e IMAP servem para receber.", "BB 2023", 43], ["lgpd", "O recurso do Windows que permite entrar com reconhecimento de rosto, íris, impressão digital ou PIN é o", ["Windows Hello", "Windows Security", "Advanced Login", "Enhanced Login", "Enhanced Authentication"], "Windows Hello é a entrada biométrica ou por PIN do Windows 10 e 11.", "BB 2023", 44], ["info", "No Word do Microsoft 365, para ver as versões de um documento disponíveis para restauração, o caminho é", ["Arquivo > Informações > Histórico de Versões", "Arquivo > Histórico > Controle de Versões", "Arquivo > Sobre > Controle de Versões", "Revisão > Controlar Alterações > De todas as Pessoas", "Revisão > Controlar Alterações > Somente as Minhas"], "Versões salvas ficam em Arquivo > Informações > Histórico de Versões. Controlar Alterações marca edições, mas não restaura versões.", "BB 2023", 45], ["lgpd", "O mecanismo de segurança que define as ações que uma entidade pode executar ou as informações que pode acessar é a", ["autorização", "identificação", "integridade", "autenticação", "confidencialidade"], "Sequência: identificação (quem diz ser), autenticação (prova que é) e autorização (o que pode fazer).", "BB 2023", 46], ["info", "O sistema de arquivos nativo do Windows 10 que permite gravar um arquivo com mais de 8 GB é o", ["NTFS", "ReiserFS", "EXT4", "FAT16", "FAT32"], "FAT32 limita cada arquivo a 4 GB. NTFS é o padrão do Windows e aceita arquivos enormes. EXT4 e ReiserFS são do Linux.", "BB 2023", 47], ["info", "Ao enviar um e-mail, o remetente recebe resposta automática de que a caixa do destinatário está cheia. Isso significa que", ["o espaço ocupado por mensagens na caixa do destinatário atingiu o limite autorizado.", "a quantidade de mensagens na caixa do destinatário atingiu o limite.", "a quantidade de mensagens enviadas pelo remetente atingiu o limite.", "o número máximo de mensagens recebidas no dia foi atingido.", "a mensagem era grande demais para a infraestrutura do remetente."], "A cota da caixa postal é de espaço (bytes), não de número de mensagens.", "BB 2023", 51], ["lgpd", "Manter antivírus e antimalware atualizados é necessário principalmente para que eles", ["identifiquem vírus e ameaças mais recentes.", "tenham interface moderna.", "ocupem menos espaço em disco.", "funcionem, pois versões antigas não rodam.", "sejam executados mais rápido."], "As atualizações trazem novas assinaturas e regras para reconhecer ameaças que surgiram depois.", "BB 2023", 52], ["info", "Para abrir uma janela privativa no Mozilla Firefox, usa-se", ["Ctrl + Shift + P", "Ctrl + N", "Ctrl + P", "Ctrl + T", "Ctrl + Shift + A"], "Firefox: Ctrl + Shift + P. No Chrome e no Edge é Ctrl + Shift + N.", "BB 2023", 55], ["port", "A vírgula está empregada de acordo com a norma-padrão em:", ["Depois de chegarem às telas dos computadores e celulares, as notícias estarão disponíveis em voos internacionais.", "A conexão é feita por meio de uma plataforma específica, e os conteúdos, podem ser acessados pelos dispositivos móveis.", "O mercado brasileiro de automóveis, ainda é muito grande, porém não absorve mais importados.", "Os últimos dados mostram que, muitas economias apresentam crescimento e inflação baixa.", "As montadoras vão fazer os cálculos e ver, se a importação vale a pena."], "A vírgula separa a oração adverbial deslocada para o início. Nas outras há vírgula entre sujeito e verbo (B e C) ou entre verbo e complemento (D e E), o que é proibido.", "Petrobras 2017", 4], ["port", "O acento grave indicativo da crase deve ser empregado em:", ["As pessoas precisam ficar atentas a fatura do cartão de crédito.", "Os novos smartphones apresentam pequena variação quando comparados a versões anteriores.", "Estudantes fizeram uma pesquisa junto a crianças do ensino fundamental.", "O acesso dos jovens a redes sociais tem causado prejuízos.", "Os consumidores sujeitam-se a ficar horas na fila."], "Atento a + a fatura = atentas à fatura. Antes de plural sem artigo (a versões, a crianças, a redes) e antes de verbo (a ficar) não há crase.", "Petrobras 2017", 5], ["port", "No trecho “a compra de uma novidade tecnológica atende a essa última necessidade: nós nos sentimos melhores e superiores quando surgimos com um produto que quase ninguém possui”, os dois-pontos podem ser substituídos, sem alterar a relação entre as ideias, por", ["porque", "mas", "para", "embora", "portanto"], "O trecho depois dos dois-pontos explica por que a compra atende à necessidade: é uma relação de causa/explicação, como “porque”.", "Petrobras 2017", 7], ["port", "A concordância verbal está de acordo com a norma-padrão em:", ["Devido às estratégias de marketing, desenvolveu-se, entre os jovens, a ideia de que ter aparelhos novos é garantia de sucesso.", "Com a corrida pelos novos smartphones, evidenciou-se atitudes agressivas por parte dos usuários.", "É necessário que se envie a todas as escolas vídeos educacionais sobre o vício em tecnologia.", "É preciso educar as novas gerações para que se reduza os comportamentos compulsivos.", "Nos países industrializados, comprovou-se os danos psicológicos causados pelo vício."], "Voz passiva sintética: o verbo concorda com o sujeito. “A ideia” é singular: desenvolveu-se. Correções: evidenciaram-se atitudes, se enviem vídeos, se reduzam os comportamentos, comprovaram-se os danos.", "Petrobras 2017", 9], ["port", "A frase “Os lançamentos a que o autor se refere” exige preposição antes de “que” por causa da regência de “referir-se”. Também é obrigatória uma preposição antes do “que” em:", ["As pessoas gastam muito em aparelhos que elas não necessitam.", "Os consumidores, ao adquirirem um produto que quase ninguém possui, sentem-se superiores.", "Muitos aparelhos não trazem novidades que justifiquem seu preço.", "O estudo que o pesquisador realizou foi importante.", "A dopamina causa sensações de prazer que levam as pessoas a se sentirem recompensadas."], "Quem necessita, necessita de algo: “aparelhos de que elas não necessitam”. Possuir, justificar e realizar são transitivos diretos, e em (E) o “que” é sujeito de “levam”.", "Petrobras 2017", 10], ["matfin", "O preço de um produto teve três reajustes sucessivos: 4% em outubro, 5% em novembro e 10% em dezembro. O aumento acumulado no trimestre está entre", ["20,00% e 20,49%", "19,00% e 19,49%", "19,50% e 19,99%", "20,50% e 20,99%", "21,00% e 21,49%"], "Aumentos sucessivos se multiplicam: 1,04 × 1,05 × 1,10 = 1,2012, ou seja, 20,12%. Pegadinha: somar dá 19%.", "Petrobras 2017", 21], ["matfin", "Um equipamento de 100 milhões à vista foi financiado em dois pagamentos semestrais: 55 milhões em 6 meses e 60,5 milhões em 12 meses. A taxa anual equivalente mais próxima é", ["21,0%", "15,5%", "16,1%", "20,0%", "22,5%"], "Teste 10% ao semestre: 55 ÷ 1,1 + 60,5 ÷ 1,21 = 50 + 50 = 100. Taxa anual equivalente: 1,1² − 1 = 21%. Pegadinha: 2 × 10% = 20% seria taxa proporcional.", "Petrobras 2017", 22], ["estoq", "Uma empresa quer um sistema que replaneje as necessidades de materiais a cada mudança na programação da produção, nos registros de estoque e na composição do produto. O sistema indicado é o", ["MRP", "JIT", "ECR", "S&OP", "LEC"], "MRP (planejamento das necessidades de materiais) cruza plano mestre, lista de materiais e estoque para calcular o que comprar e quando.", "Petrobras 2017", 24], ["estoq", "A técnica em que leitores emitem ondas de rádio que atingem etiquetas inteligentes (tags), que respondem com um número único, permitindo rastrear produtos sem contato visual, é o", ["RFID", "QR Code", "PEPS", "VMI", "WMS"], "RFID = identificação por radiofrequência. QR Code e código de barras exigem leitura óptica; WMS é software de armazém; VMI é estoque gerido pelo fornecedor.", "Petrobras 2017", 25], ["compras", "Pela Lei nº 13.303/2016, a contratação de profissional de notória especialização por sociedade de economia mista será", ["direta (inexigibilidade de licitação)", "licitada", "eventual", "temporária", "proporcional"], "Art. 30, II: é inexigível a licitação para serviços técnicos especializados com profissionais ou empresas de notória especialização. A contratação é direta.", "Petrobras 2017", 26], ["compras", "Pela Lei nº 13.303/2016, é dispensável a licitação para obras e serviços de engenharia de valor até", ["R$ 100.000,00", "R$ 10.000,00", "R$ 20.000,00", "R$ 40.000,00", "R$ 80.000,00"], "Art. 29, I: obras e serviços de engenharia até R$ 100.000,00; inciso II: outros serviços e compras até R$ 50.000,00. O conselho de administração pode atualizar esses valores (§ 3º).", "Petrobras 2017", 27], ["compras", "Quando a organização não consegue identificar um fornecedor que atenda às suas necessidades, deve", ["avaliar e investir na melhoria das competências e do desempenho de possíveis fornecedores.", "redesenhar o sistema de monitoramento de fornecedores.", "rever o seu plano e comunicá-lo aos clientes.", "escolher novos indicadores de avaliação de fornecedores.", "usar a mesma estratégia de itens de rotina, reduzindo o esforço de aquisição."], "Se o fornecedor certo não existe, a saída é desenvolvê-lo (desenvolvimento de fornecedores), investindo em capacitação.", "Petrobras 2017", 31], ["estoq", "Na análise ABC por valor de uso (A até 60% acumulado, B até 90%, C acima), os itens têm valores: item 1 = 1.000; item 2 = 5.000; item 3 = 3.000; item 4 = 2.000; item 5 = 10.000. A classificação é", ["5 como A; 2 e 3 como B; 1 e 4 como C", "2 e 5 como A; 3 e 4 como B; 1 como C", "1, 3 e 4 como A; 2 como B; 5 como C", "3 e 4 como A; 1 como B; 2 e 5 como C", "1 como A; 3 e 4 como B; 5 como C"], "Total 21.000. Ordenando: item 5 = 47,6% (A); +item 2 = 71,4% (B); +item 3 = 85,7% (B); +item 4 = 95,2% (C); item 1 (C).", "Petrobras 2017", 32], ["estoq", "Um dos pressupostos do modelo do lote econômico de compra (LEC) é que", ["os custos de pedir e de armazenar são constantes e conhecidos.", "a demanda é atendida parcialmente.", "a interação entre itens de estoque é determinante.", "o lote deve juntar no mínimo três itens.", "os estoques em trânsito entram no cálculo do pedido."], "O LEC supõe demanda constante e conhecida, custos de pedido e de manutenção constantes, reposição instantânea e cálculo item a item.", "Petrobras 2017", 33], ["rh", "O programa de ambientação (socialização organizacional) dos recém-admitidos tem como objetivo", ["alinhar indivíduo e organização em relação à cultura, gerando comprometimento e direcionando comportamentos aos objetivos da empresa.", "mudar os valores individuais, provocando renúncia a atitudes pessoais.", "apresentar o plano de remuneração para analisar o clima organizacional.", "descrever apenas as tarefas, omitindo a parte comportamental.", "explicar a estrutura e as alternativas de vantagem competitiva."], "Integração/socialização é a primeira etapa de T&D: apresenta cultura, normas e valores para alinhar o novo empregado à organização.", "Petrobras 2017", 56], ["mat", "Seja f(n) o número de filas indianas diferentes que podem ser formadas com n pessoas. A diferença f(n + 1) − f(n) é", ["n · n!", "1", "n!", "(n + 1)!", "(n + 1)(n − 1)"], "f(n) = n! (permutação). f(n + 1) − f(n) = (n + 1)! − n! = n!·(n + 1 − 1) = n · n!.", "Petrobras 2017", 63], ["mat", "n números inteiros ímpares, positivos e diferentes têm soma menor ou igual a 10.000. O maior valor possível de n é", ["100", "99", "1.000", "4.999", "5.000"], "Para ter o máximo de números, use os menores ímpares: 1 + 3 + … + (2n − 1) = n². n² ≤ 10.000 → n = 100.", "Petrobras 2017", 64], ["mat", "Um hotel tem média 8 em 49 avaliações (notas de 0 a 10). O avaliador seguinte deu nota 0. Quantas avaliações a mais, no mínimo, são necessárias para a média passar a ser maior que 8?", ["5", "1", "2", "3", "4"], "Soma atual 392 + 0 = 392 em 50 notas. Com k notas 10: (392 + 10k) ÷ (50 + k) > 8 → 2k > 8 → k > 4. Mínimo 5.", "Petrobras 2017", 65], ["ind", "A abordagem triple bottom line, usada em índices de sustentabilidade como o ISE da B3, baseia-se", ["no equilíbrio entre resultado financeiro, responsabilidade social e ambiental, com indicadores para as três dimensões.", "nas mudanças sociais geradas apenas pelos resultados financeiros.", "na ferramenta 3P (profit, planet, performance) voltada só ao resultado financeiro.", "no método 3P (plan, profit, people) que ignora o meio ambiente.", "numa métrica que avalia só o ponto de vista do investidor."], "Triple bottom line = pessoas, planeta e lucro (people, planet, profit). É a base dos indicadores ESG.", "Petrobras 2017", 68], ["mat", "Cinco serviços diferentes serão distribuídos entre três empresas (A, B e C); cada serviço vai para uma só empresa e todas recebem ao menos um. O número de distribuições é", ["150", "15", "30", "120", "180"], "Sem restrição: 3⁵ = 243. Tire as que deixam alguma empresa sem serviço: 3 × 2⁵ = 96, devolvendo as contadas duas vezes: + 3 × 1⁵ = 3. 243 − 96 + 3 = 150.", "Petrobras 2017", 70], ["port", "O acento grave está empregado de acordo com a norma-padrão em:", ["Os professores sempre visam à evolução dos alunos.", "Ensinar implica à necessidade de também aprender.", "A educação se constrói à duras penas.", "Recorrer à métodos pedagógicos alternativos é fundamental.", "É importante criar discussões àcerca do ensino."], "Visar (= ter como objetivo) pede “a”: visam à evolução. Implicar é transitivo direto; não há crase antes de plural sem artigo (a duras penas, a métodos); “acerca” não tem acento.", "Petrobras 2014", 4], ["port", "O período “Terminada a aula, os meninos faziam fila junto à professora, pedindo para carregar sua pasta” pode ser reescrito, mantendo o sentido, como:", ["Quando terminava a aula, os meninos faziam fila junto à professora e pediam para carregar sua pasta.", "Porque terminava a aula, os meninos faziam fila junto à professora, além de pedir para carregar sua pasta.", "Ao terminar a aula, os meninos faziam fila junto à professora, apesar de pedirem para carregar sua pasta.", "Terminando a aula, os meninos faziam fila junto à professora, que pedia para carregar sua pasta.", "Embora terminada a aula, os meninos faziam fila junto à professora, cujos pediam para carregar sua pasta."], "A oração reduzida “Terminada a aula” tem valor de tempo (quando terminava). As outras trocam por causa, concessão ou mudam quem pede.", "Petrobras 2014", 5], ["port", "A concordância verbal NÃO está de acordo com a norma-padrão em:", ["Fazem anos que a educação brasileira tem buscado novos métodos.", "A maior parte dos alunos admiram seus professores.", "Não sou dos que acreditam em uma educação tradicional.", "Foi dona Clotilde quem despertou o desejo dos alunos por aprender.", "Prezar e amar é fundamental para o processo de ensino."], "Fazer indicando tempo decorrido é impessoal: “Faz anos”. Com “a maior parte de”, o verbo pode ir ao singular ou ao plural.", "Petrobras 2014", 9], ["port", "A regência verbal está adequada à norma-padrão em:", ["Lembro-me perfeitamente de minha professora.", "Os professores devem assistir às crianças.", "Devemos aspirar professores que tenham amor pelo ensino.", "Ensinar é um ato que obedece a lei do amor.", "Informei a todos do que ocorreu na sala."], "Lembrar-se pede “de”. Assistir no sentido de ajudar é transitivo direto (assistir as crianças); aspirar (desejar) pede “a”; obedecer pede “a” (à lei); informar algo a alguém ou alguém de algo, sem misturar.", "Petrobras 2014", 10], ["rh", "Para que um sistema de avaliação de desempenho contribua para o desempenho da organização, é necessário", ["um trabalho prévio de conscientização, pois a implantação requer técnica, treinamento e preparação.", "que a avaliação seja feita só pelo RH, responsável por admitir e demitir.", "usar só a autoavaliação, que equivale a uma avaliação de 180º.", "que o formulário seja informatizado para divulgar resultados na intranet.", "que os resultados sirvam para demitir quem ficou abaixo do esperado."], "Avaliação é ferramenta de desenvolvimento: precisa de critérios claros, avaliadores treinados e conscientização de todos. Usá-la só para punir gera resistência.", "Petrobras 2014", 26], ["rh", "Um empreendedor disse que a remuneração do empregado é o salário mais os tributos sobre ele. A explicação está ERRADA porque a remuneração", ["inclui o salário e os benefícios que a empresa concede ao empregado.", "é só o salário, já que tributo é obrigação legal.", "se refere só aos benefícios voluntários.", "é apenas a participação nos lucros.", "não inclui encargos, que nunca são custo da empresa."], "Remuneração total = remuneração básica (salário) + incentivos + benefícios. Encargos sociais são custo da empresa, mas não remuneração do empregado.", "Petrobras 2014", 28], ["rh", "Para desenvolver seus empregados, empresas modernas adotam práticas que permitem ao empregado", ["ampliar a visão, focando na carreira e nos cargos que poderá ocupar a médio e longo prazos.", "adotar visão racionalista, focada só em tarefas técnicas.", "focar no presente e em objetivos de curto prazo.", "olhar só as atividades atuais e o desempenho individual.", "trabalhar pela divisão do trabalho e unidade de comando."], "Treinamento foca o cargo atual; desenvolvimento prepara para o futuro (carreira). Por isso o foco é médio e longo prazo.", "Petrobras 2014", 31], ["fluxo", "A variação mensal (não nula) do capital de giro operacional líquido de uma empresa sempre", ["impactará o caixa da empresa.", "implicará novos financiamentos.", "implicará novos investimentos.", "resultará em valor positivo.", "resultará em valor negativo."], "Se clientes e estoques sobem mais que fornecedores, sai caixa; se caem, entra caixa. É por isso que, no fluxo de caixa indireto, ajusta-se o lucro pela variação do capital de giro.", "Petrobras 2014", 46], ["mat", "Uma senha de 5 caracteres distintos usa as letras A e O e os números 0, 1 e 2. Deve começar e terminar com letra, e o 0 não pode ficar ao lado do O. Quantas senhas são possíveis?", ["8", "12", "6", "4", "2"], "Letras nas pontas: A…O ou O…A (2 casos). Os três números no meio: 3! = 6, mas o 0 não pode ficar na casa vizinha ao O: sobram 2 posições para o 0 e 2! para os outros = 4. Total 2 × 4 = 8.", "Petrobras 2014", 47], ["mat", "Quatro amigos dividiram uma conta de R$ 120,00. O primeiro pagou metade do que os outros três juntos; o segundo, um terço do que os outros três; o terceiro, um quarto do que os outros três. Quanto pagou o quarto?", ["R$ 26,00", "R$ 40,00", "R$ 30,00", "R$ 20,00", "R$ 24,00"], "Se x é metade do resto, x = 1/3 do total = 40. Um terço do resto = 1/4 do total = 30. Um quarto do resto = 1/5 do total = 24. Quarto: 120 − 94 = 26.", "Petrobras 2014", 49], ["bp", "Uma companhia tem, em 31/12: Caixa 1.200; Aplicação financeira de liquidez imediata 2.800; Duplicatas a receber 5.000; Estoque 3.200; Fornecedores 3.000; Empréstimo bancário (curto prazo) 1.238; CSLL a pagar 642; IR a pagar 1.968; Dividendos obrigatórios 4.286. O Passivo Circulante é", ["R$ 11.134,00", "R$ 4.238,00", "R$ 6.848,00", "R$ 9.896,00", "R$ 12.206,00"], "PC = fornecedores 3.000 + empréstimo 1.238 + CSLL 642 + IR 1.968 + dividendos 4.286 = 11.134. Dividendos propostos obrigatórios são dívida com os acionistas, não PL.", "Petrobras 2014", 56], ["bp", "Com os mesmos dados (Caixa 1.200; Aplicação de liquidez imediata 2.800; Duplicatas a receber 5.000; Empréstimos a diretores 500), o valor das Disponibilidades é", ["R$ 4.000,00", "R$ 1.200,00", "R$ 2.438,00", "R$ 5.238,00", "R$ 5.738,00"], "Disponibilidades = caixa + bancos + aplicações de liquidez imediata: 1.200 + 2.800 = 4.000. Duplicatas são créditos, não disponibilidades.", "Petrobras 2014", 57], ["sgi", "Os japoneses mostraram que, se a produção faz certo da primeira vez e sem defeitos, os desperdícios são", ["eliminados, e reduzem-se os custos.", "eliminados, e aumentam-se os custos.", "inexistentes, e mantêm-se os custos.", "reduzidos, e aumentam-se os custos.", "reduzidos, e mantêm-se os custos."], "Qualidade na fonte elimina retrabalho, refugo e inspeção extra: qualidade e produtividade andam juntas e o custo cai.", "Petrobras 2014", 63], ["log", "NÃO é causa do efeito chicote na cadeia de suprimentos:", ["estabilidade de preços", "alto custo de colocação do pedido", "agrupamento de pedidos", "racionamento de produtos", "previsão da demanda de longo prazo"], "Causas clássicas: previsões distorcidas, pedidos em lote, racionamento (pedidos inflados) e variação de preços (promoções). Preço estável reduz o efeito.", "Petrobras 2014", 64], ["estoq", "No MRP, uma das principais saídas do sistema é", ["a programação de pedidos (o que comprar ou produzir e quando).", "a lista de materiais.", "o arquivo de situação do estoque.", "o programa mestre de produção.", "a estrutura analítica do produto."], "Entradas do MRP: plano mestre de produção, lista de materiais (estrutura) e registros de estoque. Saída: ordens planejadas de compra e produção.", "Petrobras 2014", 65], ["estoq", "A demanda anual de uma peça é 200 unidades, o custo de manter uma unidade por ano é R$ 1,00 e o custo de emitir um pedido é R$ 4,00. O lote econômico de compra é", ["40", "10", "20", "30", "50"], "LEC = √(2 × D × Cp ÷ Cm) = √(2 × 200 × 4 ÷ 1) = √1.600 = 40.", "Petrobras 2014", 66], ["estoq", "Uma estação produz 300 peças por hora, leva 15 minutos para receber um contêiner e cada contêiner tem 15 peças. O número de kanbans necessários é", ["5", "1", "2", "3", "4"], "Consumo durante a reposição: 300 × 0,25 h = 75 peças. 75 ÷ 15 = 5 kanbans (sem estoque de segurança).", "Petrobras 2014", 67], ["mat", "A média das remunerações de 100 respostas foi R$ 2.380,00, mas 15 respostas eram zero (recusa). Retirando essas respostas nulas, a média passa a ser", ["R$ 2.800,00", "R$ 2.380,00", "R$ 2.487,00", "R$ 2.650,00", "R$ 2.737,00"], "Soma = 100 × 2.380 = 238.000. Os zeros não mudam a soma: 238.000 ÷ 85 = 2.800.", "Petrobras 2014", 68], ["mat", "Com os mesmos dados (100 respostas, média R$ 2.380,00, 15 zeros), a variância inicial foi 2.835.600 reais². Retirando os zeros, a média dos quadrados dos salários é, aproximadamente,", ["10.000.000", "8.500.000", "6.300.000", "4.400.000", "2.800.000"], "Variância = média dos quadrados − (média)². Média dos quadrados com 100 = 2.835.600 + 2.380² = 8.500.000; soma dos quadrados = 850.000.000. Sem os zeros: ÷ 85 = 10.000.000.", "Petrobras 2014", 69], ["mat", "Um candidato faz três provas na ordem oral, escrita, oral (independentes). Aprova na oral com probabilidade 1/4 e na escrita com 3/4. É aceito se passar em duas provas consecutivas. A probabilidade de aceitação é", ["21/64", "3/64", "9/64", "15/64", "18/64"], "Duas consecutivas exigem passar na escrita (3/4) e em pelo menos uma oral: 1 − (3/4)² = 7/16. P = 3/4 × 7/16 = 21/64.", "Petrobras 2014", 70], ["port", "A frase que respeita a ortografia é:", ["A última paralisação ocorreu há cerca de dois anos.", "A última paralização ocorreu há cerca de dois anos.", "A última paralizassão ocorreu acerca de dois anos.", "A última paralização ocorreu a cerca de dois anos.", "A última paralisação ocorreu a cerca de dois anos."], "Paralisação vem de paralisar (com s). “Há cerca de” indica tempo passado (verbo haver); “acerca de” significa “sobre”.", "Petrobras 2012", 4], ["port", "A regência verbal respeita a norma-padrão em:", ["Esquecemo-nos daquelas regras gramaticais.", "Os professores avisaram aos alunos da prova.", "Deve-se obedecer o português padrão.", "Assistimos uma aula brilhante.", "Todos aspiram o término do curso."], "Esquecer-se pede “de”. Correções: avisaram os alunos da prova; obedecer ao português; assistimos a uma aula (= ver); aspiram ao término (= desejar).", "Petrobras 2012", 5], ["port", "Em “antes que ele se criasse” há voz passiva pronominal. O mesmo ocorre em:", ["Criou-se um método de estudo diferente no curso.", "Necessita-se de muito estudo para as provas.", "É-se bastante exigente com Português nesta escola.", "Vive-se sempre em busca de oportunidades.", "Acredita-se na possibilidade de superação."], "Com verbo transitivo direto, “se” é partícula apassivadora (um método foi criado). Com verbo que pede preposição, de ligação ou intransitivo, o “se” indetermina o sujeito.", "Petrobras 2012", 6], ["port", "A frase que está de acordo com a norma-padrão é:", ["Ocorreram poucas dúvidas sobre a matéria.", "Houveram muitos acertos naquela prova.", "Existia poucos alunos com dúvidas na sala.", "Devem haver muitos aprovados este ano.", "Vão fazer dois anos que estudei a matéria."], "Ocorrer concorda com o sujeito (dúvidas). Haver = existir é impessoal e contamina o auxiliar (deve haver); existir concorda (existiam); fazer indicando tempo é impessoal (vai fazer).", "Petrobras 2012", 7], ["port", "O verbo destacado NÃO está conjugado de acordo com a norma-padrão em:", ["Assim que dispormos do gabarito, saberemos o resultado.", "Se essa tarefa não couber a ele, pedimos a outro.", "Baniram os exercícios que não ajudavam.", "Cremos em nossa capacidade.", "Todos líamos muito na época da escola."], "Dispor segue pôr: no futuro do subjuntivo é “dispusermos” (quando nós pusermos).", "Petrobras 2012", 8], ["port", "Corrigindo “Os grevistas sabiam o porque da greve, mas não entendiam porque havia tanta repressão”, obtém-se:", ["Os grevistas sabiam o porquê da greve, mas não entendiam por que havia tanta repressão.", "Os grevistas sabiam o por quê da greve, mas não entendiam porque havia tanta repressão.", "Os grevistas sabiam o porque da greve, mas não entendiam porquê havia tanta repressão.", "Os grevistas sabiam o por que da greve, mas não entendiam porque havia tanta repressão.", "Os grevistas sabiam o porquê da greve, mas não entendiam porquê havia tanta repressão."], "Substantivado (o motivo) = o porquê. Pergunta indireta (por qual razão) = por que, separado e sem acento.", "Petrobras 2012", 9], ["port", "A concordância está de acordo com a norma-padrão em:", ["Pensou-se muito nas sugestões dos funcionários.", "Na reunião, houveram muitos imprevistos.", "Estranhou-se as mudanças na empresa.", "Devem fazer cinco meses que não o vejo.", "Precisam-se de vendedores nesta loja."], "Pensar em pede preposição: “se” indetermina o sujeito e o verbo fica no singular. Correções: houve imprevistos; estranharam-se as mudanças; deve fazer cinco meses; precisa-se de vendedores.", "Petrobras 2012", 10], ["mat", "Uma urna tem 20 bolas numeradas de 1 a 20. Em quantas amostras de duas bolas (sem ordem) o produto dos números é múltiplo de 4?", ["95", "25", "45", "75", "115"], "Total C(20,2) = 190. Há 5 múltiplos de 4, 5 pares não múltiplos de 4 (2, 6, 10, 14, 18) e 10 ímpares. Sem múltiplo de 4: C(15,2) = 105, logo 85 pares têm um múltiplo de 4. Somam-se os pares de dois números do tipo 2, 6, 10…: C(5,2) = 10. Total 95.", "Petrobras 2012", 54], ["estoq", "Um fabricante usa etiquetas com código de barras que fornecem informações contínuas aos gestores de estoque. Esse sistema proporciona", ["controle nas atividades de monitoramento do estoque.", "maior tempo de ressuprimento.", "baixa sensibilidade às variações dos lotes.", "aumento do lead time de distribuição.", "aumento do lead time da contagem física."], "Código de barras automatiza a entrada de dados, aumenta a acurácia e dá controle em tempo real; reduz, e não aumenta, prazos.", "Petrobras 2012", 56], ["armaz", "Fabricantes de graxa avisam que, contaminado por areia e poeira, o produto perde características físicas e químicas. Na administração de materiais, ele é classificado como", ["perecível por contaminação", "crítico", "sujeito a obsolescência", "de reposição de alto custo", "de alta periculosidade no transporte"], "Quanto à perecibilidade, materiais podem se deteriorar por ação do tempo, umidade, contaminação etc. A graxa contaminada perde qualidade: perecível por contaminação.", "Petrobras 2012", 57], ["estoq", "Numa linha com dois postos, o posto B retira do posto A apenas os componentes de que precisa, no momento em que são demandados. Esse método de produção é o", ["Just in time", "MRP", "CRP", "de produção empurrada", "fordismo tradicional"], "Produção puxada: o posto seguinte retira o que precisa e só então o anterior repõe (kanban). É a lógica do JIT; MRP é empurrado pela previsão.", "Petrobras 2012", 60], ["mat", "Numa empresa, a média salarial é R$ 4.200,00 e o desvio padrão R$ 840,00. Todos recebem reajuste de 5% mais bônus de R$ 490,00. A razão entre o novo e o antigo coeficiente de variação é", ["0,9", "0,05", "1", "1,17", "1,4"], "Nova média: 4.200 × 1,05 + 490 = 4.900. Novo desvio: 840 × 1,05 = 882 (somar constante não muda o desvio). CV novo 882/4.900 = 0,18; antigo 840/4.200 = 0,20. Razão 0,9.", "Petrobras 2012", 67], ["mat", "O ramo e folhas do consumo de gasolina (litros) é: 9 | 1 4 7; 10 | 0 2 2 3 8; 11 | 1 2 5 5 6 6 7 7; 12 | 2 2 3 4 8 9; 13 | 0 2. Considere: I – a distribuição é assimétrica positiva; II – não possui moda; III – a mediana é 115,5. É correto o que se afirma em", ["III, apenas", "I, apenas", "I e II, apenas", "II e III, apenas", "I, II e III"], "São 24 valores; 12º = 115 e 13º = 116: mediana 115,5. Há várias modas (102, 115, 116, 117, 122), então II é falsa. A cauda está à esquerda (valores baixos 91–97), logo não é assimétrica positiva.", "Petrobras 2012", 68], ["mat", "Três urnas têm 9 bolas numeradas de 1 a 9 cada. Sorteia-se uma bola de cada urna. A probabilidade de haver exatamente dois números iguais é", ["8/27", "8/81", "19/27", "1/9", "2/9"], "Escolha o par que coincide (3 modos), a chance de coincidir (1/9) e de o terceiro ser diferente (8/9): 3 × 1/9 × 8/9 = 24/81 = 8/27.", "Petrobras 2012", 69], ["mat", "Quantos anagramas da palavra PETROBRAS começam com PE, nessa ordem?", ["2.520", "720", "5.040", "362.880", "3.628.800"], "Fixado PE, sobram 7 letras (T, R, O, B, R, A, S) com o R repetido: 7! ÷ 2! = 2.520.", "Petrobras 2010", 1], ["mat", "Quantos números naturais de 5 algarismos têm algum dígito repetido?", ["62.784", "27.216", "59.760", "69.760", "72.784"], "Total de números de 5 algarismos: 90.000. Sem repetição: 9 × 9 × 8 × 7 × 6 = 27.216. Com repetição: 90.000 − 27.216 = 62.784.", "Petrobras 2010", 2], ["mat", "Seis bombas idênticas serão pintadas de verde (etanol), amarelo (gasolina) ou preto (diesel), sem obrigação de vender todos os combustíveis. De quantas maneiras podem ser pintadas?", ["28", "20", "56", "216", "729"], "Bombas idênticas: importa só quantas de cada cor. Combinação com repetição: C(6 + 3 − 1, 2) = C(8,2) = 28.", "Petrobras 2010", 3], ["mat", "Uma embalagem cúbica tem aresta de 20 cm. A base custa R$ 50,00/m², as laterais R$ 20,00/m² e a tampa R$ 30,00/m²; a montagem custa R$ 2,00. O custo total da embalagem é", ["R$ 8,40", "R$ 6,00", "R$ 6,80", "R$ 7,40", "R$ 8,00"], "Cada face tem 0,2 × 0,2 = 0,04 m². Base 2,00 + laterais 4 × 0,04 × 20 = 3,20 + tampa 1,20 + montagem 2,00 = 8,40.", "Petrobras 2010", 5], ["mat", "Uma loja venderia 800 liquidificadores a R$ 300,00, e cada redução de R$ 5,00 no preço traria 20 vendas a mais (estoque de 1.600). Qual preço maximiza a receita?", ["R$ 250,00", "R$ 230,00", "R$ 240,00", "R$ 270,00", "R$ 280,00"], "Com k reduções: R = (300 − 5k)(800 + 20k). As raízes são k = 60 e k = −40; o vértice fica no meio, k = 10. Preço: 300 − 50 = 250.", "Petrobras 2010", 9], ["mat", "Numa barraca de tiro, o cliente ganha R$ 30,00 por acerto e paga R$ 10,00 por erro. Alguém deu 50 tiros e, no saldo, pagou R$ 100,00. Quantas vezes errou?", ["40", "10", "20", "25", "35"], "a + e = 50 e 30a − 10e = −100. Substituindo e = 50 − a: 40a − 500 = −100 → a = 10, e = 40.", "Petrobras 2010", 10], ["mat", "Um caminhão novo vale R$ 90.000,00 e, com 4 anos, R$ 50.000,00. Se o valor cai linearmente, com 2 anos ele vale", ["R$ 70.000,00", "R$ 40.000,00", "R$ 50.000,00", "R$ 60.000,00", "R$ 80.000,00"], "Perde 40.000 em 4 anos = 10.000 por ano. Com 2 anos: 90.000 − 20.000 = 70.000.", "Petrobras 2010", 11], ["mat", "Num posto entram 300 clientes por hora: 210 abastecem, 130 completam o óleo, 120 calibram pneus; 70 abastecem e completam óleo, 80 abastecem e calibram, 50 fazem as três coisas. Todos fazem ao menos uma. A probabilidade de um cliente completar o óleo e calibrar os pneus é", ["0,20", "0,10", "0,25", "0,40", "0,45"], "300 = 210 + 130 + 120 − 70 − 80 − x + 50 → x = 60 (óleo e pneus). 60 ÷ 300 = 0,20.", "Petrobras 2010", 12], ["estoq", "Sobre o Just in Time, considere: I altos estoques; II lotes unitários; III produção puxada; IV produzir o máximo possível; V produzir só quando necessário; VI aumento de produtividade; VII uso de kanbans; VIII baixo estoque em processo; IX uso só na indústria. São características do JIT apenas", ["II, III, V, VI, VII e VIII", "II, III, V, VII e VIII", "I, IV, V, VI, VIII e IX", "II, III, V, VI, VIII e IX", "III, V, VI, VII, VIII e IX"], "JIT busca lotes pequenos, produção puxada por kanban, só quando necessário, com pouco estoque e mais produtividade. Também é usado em serviços.", "Petrobras 2010", 30], ["rh", "Uma característica INADEQUADA a um padrão de avaliação de desempenho é ser", ["conveniente", "viável", "específico", "atualizado", "mensurável"], "Padrões devem ser específicos, mensuráveis, viáveis, relevantes e atualizados. “Conveniente” (para o avaliador) não é critério técnico.", "Petrobras 2010", 59], ["rh", "Associe: I – Administração por objetivos; II – Incidentes críticos; III – Comparação entre pares. P – comparar colaboradores entre si e acompanhar o desenvolvimento; Q – registrar comportamentos bons ou indesejáveis e revisá-los; R – fixar metas mensuráveis e discutir o progresso.", ["I-R, II-Q, III-P", "I-R, II-P, III-Q", "I-P, II-Q, III-R", "I-Q, II-R, III-P", "I-P, II-R, III-Q"], "APO = metas negociadas e acompanhadas. Incidentes críticos = registro de fatos extremos (bons e ruins). Comparação aos pares = comparar colaboradores entre si.", "Petrobras 2010", 63], ["rh", "Uma funcionária especializada está desmotivada. O supervisor amplia o escopo do trabalho, dá novos desafios, responsabilidades e autonomia. Esse sistema motivacional é o", ["enriquecimento do trabalho", "grupos autônomos", "reconhecimento do trabalho", "profecia autorrealizadora", "incentivos monetários"], "Enriquecimento de cargo (Herzberg) acrescenta responsabilidade, autonomia e desafio (enriquecimento vertical).", "Petrobras 2010", 64], ["rh", "Um treinamento combina aulas em sala pela manhã e trabalho orientado por um colega experiente à tarde. É a técnica de treinamento", ["de aprendizagem", "no trabalho", "por simulação", "a distância", "para segurança"], "Aprendizagem (estilo aprendiz) une instrução teórica e prática supervisionada. “No trabalho” seria só a prática no posto.", "Petrobras 2010", 65], ["transp", "A modalidade que transporta cargas e pessoas ao longo da costa de um mesmo país é o transporte", ["marítimo de cabotagem", "ferroviário", "aéreo doméstico", "marítimo de longo curso", "rodoviário porta a porta"], "Cabotagem = navegação entre portos do mesmo país. Longo curso = navegação internacional.", "Transpetro 2018 Suprimento", 21], ["transp", "As regiões Sul e Sudeste, apesar de concentrarem o PIB, têm poucas hidrovias principalmente porque apresentam", ["rios de planalto (com quedas), que dificultam a navegação.", "rios caudalosos e de grande calado.", "rios que desembocam no Atlântico.", "racionamento de água permanente.", "poucas bacias hidrográficas."], "Rios de planalto têm desníveis e cachoeiras (bons para hidrelétricas, ruins para navegação). Os rios de planície do Norte são mais navegáveis.", "Transpetro 2018 Suprimento", 22], ["transp", "Uma vantagem do transporte rodoviário em relação ao ferroviário é a", ["capilaridade das vias (chega a quase todos os lugares, porta a porta).", "maior constância do treinamento dos motoristas.", "necessidade de operar grandes volumes.", "rigidez do controle operacional.", "circulação em vias segregadas."], "Ferrovia ganha em custo para grandes volumes e distâncias; rodovia ganha em flexibilidade e capilaridade.", "Transpetro 2018 Suprimento", 24], ["log", "A área funcional da logística de caráter eminentemente estratégico, que planeja capacidade e localização das instalações, é", ["o projeto de rede", "o estoque", "o transporte", "a embalagem", "a armazenagem"], "Projeto de rede define quantos armazéns, fábricas e CDs ter e onde. As demais áreas operam sobre essa rede.", "Transpetro 2018 Suprimento", 25], ["log", "É exemplo de decisão operacional na logística a definição", ["da rota de entrega", "do nível de serviço ofertado", "da renovação da frota", "da forma de suprimento", "dos parâmetros do LEC"], "Decisão operacional é do dia a dia (roteirizar entregas). Nível de serviço e forma de suprimento são estratégicos; renovação de frota e parâmetros de estoque são táticos.", "Transpetro 2018 Suprimento", 26], ["log", "NÃO é atividade de apoio da logística:", ["transporte", "atividades ligadas à devolução", "guarda de materiais", "definição do layout do armazém", "movimentação de materiais"], "Pela divisão clássica (Ballou), transporte, gestão de estoques e processamento de pedidos são atividades primárias. Armazenagem, manuseio, embalagem e compras são de apoio.", "Transpetro 2018 Suprimento", 27], ["log", "O Service Level Agreement (SLA) é um contrato feito para", ["pactuar com o cliente os parâmetros que serão seguidos no atendimento.", "aumentar a logística reversa.", "definir a capacidade de armazenamento de dados.", "reduzir o endividamento dos ativos logísticos.", "reduzir o custo de manutenção da frota."], "SLA = acordo de nível de serviço: prazos, disponibilidade, qualidade e penalidades combinados com o cliente.", "Transpetro 2018 Suprimento", 28], ["log", "O sistema que captura informações dos clientes (hábitos, perfil, frequência, preferências) para atendê-los melhor é o", ["CRM", "EDI", "ERP", "ECR", "VMI"], "CRM = gestão do relacionamento com o cliente. EDI troca documentos eletrônicos; ERP integra a empresa; ECR é resposta eficiente ao consumidor; VMI é estoque gerido pelo fornecedor.", "Transpetro 2018 Suprimento", 30], ["log", "O conceito da cadeia de suprimentos que busca resposta rápida ao cliente por meio de troca de informações nos dois sentidos, muito usado em supermercados, é o", ["ECR", "CRM", "EDI", "ERP", "VMI"], "ECR (Efficient Consumer Response) integra varejo e fornecedores para repor rápido com base na demanda real.", "Transpetro 2018 Suprimento", 31], ["sgi", "NÃO se refere ao DMAIC (Seis Sigma):", ["ser usado para criar novos desenhos de produtos e processos.", "ter 5 fases.", "ser usado para melhorar processos existentes.", "investigar relações de causa e efeito.", "analisar dados para achar a causa-raiz dos defeitos."], "DMAIC (definir, medir, analisar, melhorar, controlar) melhora processos que já existem. Para criar novos produtos ou processos usa-se o DMADV (Design for Six Sigma).", "Transpetro 2018 Suprimento", 33], ["armaz", "Empreendimentos que alugam galpões para várias empresas de armazenagem e transbordo, com infraestrutura compartilhada e custos rateados, são chamados de", ["condomínio logístico", "armazém", "porto seco", "distrito industrial", "centro de distribuição"], "No condomínio logístico vários inquilinos dividem segurança, portaria e áreas comuns. Porto seco é recinto alfandegado no interior.", "Transpetro 2018 Suprimento", 35], ["log", "O software que melhora a qualidade e a produtividade do processo de distribuição (rotas, fretes, frota) é o", ["TMS", "ECR", "EDI", "ERP", "WMS"], "TMS = Transportation Management System (transporte). WMS = Warehouse Management System (armazém).", "Transpetro 2018 Suprimento", 36], ["info", "No Excel, o primeiro argumento da função SUBTOTAL define a função usada (soma, média…) e também", ["se serão totalizadas todas as células ou apenas as não ocultas.", "a condição para a célula entrar na totalização.", "o formato do número.", "se a totalização é por linhas ou colunas.", "se é população ou amostra."], "Códigos 1 a 11 incluem linhas ocultas manualmente; 101 a 111 as ignoram. Linhas escondidas por filtro são sempre ignoradas.", "Transpetro 2018 Suprimento", 37], ["transp", "O uso de Veículos Urbanos de Carga (VUC), de baixa capacidade, nas zonas centrais das grandes cidades se explica principalmente", ["pelas restrições das prefeituras à circulação de veículos grandes no centro.", "por ser programa nacional de renovação de frota.", "por ser menor que uma carreta.", "por ser fabricado no Brasil.", "pela menor emissão de gases."], "Mesmo com custo por km maior, o VUC é usado porque caminhões grandes têm circulação proibida ou restrita no centro.", "Transpetro 2018 Suprimento", 38], ["compras", "Pela Lei nº 13.303/2016, o Sistema de Registro de Preços deve ter rotina de controle e atualização dos preços registrados de forma", ["periódica", "parcial", "unificada", "temporal", "continuada"], "Art. 66: rotina de controle e atualização periódicos dos preços registrados.", "Transpetro 2018 Suprimento", 40], ["compras", "Pela Lei nº 13.303/2016, a alienação de bens das empresas estatais será precedida de", ["avaliação formal", "autorização dos empregados", "aval do órgão regulador", "caução imobiliária", "concordância dos adquirentes"], "Art. 49, I: a alienação exige avaliação formal do bem, ressalvadas as hipóteses do art. 28, § 3º.", "Transpetro 2018 Suprimento", 41], ["contr", "Pela Lei nº 13.303/2016, a empresa subcontratada deve atender, quanto ao objeto subcontratado, às exigências de qualificação", ["técnica", "financeira", "econômica", "patrimonial", "especializada"], "Art. 78: a subcontratada deve cumprir as exigências de qualificação técnica impostas ao vencedor.", "Transpetro 2018 Suprimento", 42], ["contr", "Pela Lei nº 13.303/2016, como regra geral, a duração dos contratos NÃO excederá", ["cinco anos", "um ano", "dois anos", "três anos", "quatro anos"], "Art. 71: até 5 anos, contados da celebração. Exceções: projetos do plano de negócios e casos em que o prazo maior é prática de mercado.", "Transpetro 2018 Suprimento", 43], ["contr", "Pela Lei nº 13.303/2016, se o convocado não assinar o contrato no prazo e nas condições estabelecidos, a estatal pode", ["revogar a licitação", "aditar o contrato", "flexibilizar as condições", "modificar as cláusulas", "escolher o substituto por sorteio"], "Art. 75: é facultado convocar os demais licitantes na ordem de classificação, nas mesmas condições do primeiro, ou revogar a licitação.", "Transpetro 2018 Suprimento", 44], ["contab", "Uma empresa comprou caixas de bombons por R$ 150.000,00 (ICMS de R$ 18.000,00 incluso) e vendeu tudo por R$ 250.000,00 (ICMS de R$ 45.000,00). Despesas administrativas: R$ 20.000,00. O resultado com mercadorias é", ["R$ 73.000,00", "R$ 55.000,00", "R$ 80.000,00", "R$ 98.000,00", "R$ 185.000,00"], "Receita líquida = 250.000 − 45.000 = 205.000. CMV = 150.000 − 18.000 (ICMS recuperável) = 132.000. RCM = 73.000. Despesas administrativas ficam fora do RCM.", "Transpetro 2018 Suprimento", 47], ["contab", "O grupo de usuários da contabilidade cuja principal preocupação é o risco inerente às suas decisões (e o retorno) é o dos", ["investidores", "credores por empréstimos", "empregados", "fornecedores", "governo"], "Investidores querem saber risco e retorno do capital aplicado. Credores olham a capacidade de pagamento; governo, a arrecadação.", "Transpetro 2018 Suprimento", 48], ["estoq", "No inventário permanente, o critério que deixa no estoque o custo mais recente (as saídas saem pelo custo mais antigo) é o", ["PEPS", "custo médio ponderado fixo", "custo médio ponderado móvel", "preço específico", "UEPS"], "PEPS (primeiro a entrar, primeiro a sair) baixa os lotes antigos; o estoque final fica com os preços mais recentes. UEPS não é aceito pelo fisco no Brasil.", "Transpetro 2018 Suprimento", 49], ["bp", "Nas empresas comerciais, o valor total das vendas de mercadorias por conta própria representa a", ["receita bruta", "disponibilidade de mercadorias", "receita líquida", "resultado com mercadorias", "resultado operacional"], "Receita bruta = total vendido. Tirando devoluções, abatimentos e impostos sobre vendas chega-se à receita líquida.", "Transpetro 2018 Suprimento", 50], ["contab", "O objetivo principal da contabilidade é fornecer", ["informações úteis para a tomada de decisão dos usuários.", "dados da estrutura de capital apenas aos gestores.", "informações de interesse exclusivo da gestão.", "elementos para políticas fiscais.", "subsídios para obrigações acessórias."], "A estrutura conceitual (CPC 00) define o objetivo: informação útil a investidores, credores e demais usuários para decidir.", "Transpetro 2018 Suprimento", 52], ["log", "NÃO faz parte da gestão da cadeia de suprimentos:", ["desenvolver o software de gestão empresarial (ERP).", "fluxo de informação.", "gestão de estoques.", "marketing e vendas.", "integração com fornecedores e clientes."], "A cadeia usa sistemas como o ERP, mas desenvolver software não é atividade da gestão da cadeia.", "Transpetro 2018 Suprimento", 53], ["log", "No comércio eletrônico, as operações logísticas se caracterizam por", ["demanda incerta e fragmentada (muitos pedidos pequenos).", "pedidos de valor elevado.", "pedidos concentrados em poucos compradores.", "maior eficiência com paletes unitizados.", "estoque empurrado para reservas amplas."], "E-commerce gera muitos pedidos pequenos, de clientes dispersos, com demanda difícil de prever; exige picking fracionado.", "Transpetro 2018 Suprimento", 54], ["armaz", "As estantes porta-paletes convencionais são vantajosas porque", ["oferecem boa densidade de armazenagem e boa segurança aos produtos.", "são muito flexíveis para qualquer formato.", "servem para cargas de formato incomum.", "servem para empilhar cargas difíceis no solo.", "têm baixo custo e fácil acesso a peças soltas."], "O porta-palete convencional dá acesso direto a cada palete, com boa ocupação vertical e proteção. Peças soltas vão para estantes leves; cargas longas para cantilever.", "Transpetro 2018 Suprimento", 55], ["compras", "Ao optar por várias fontes de fornecimento (multi-sourcing), a empresa tem", ["maior capacidade de reagir a falhas de abastecimento de um fornecedor.", "mais facilidade de obter comprometimento dos fornecedores.", "mais facilidade de garantir a qualidade.", "menor esforço de comunicação.", "mais cooperação no desenvolvimento de produtos."], "Várias fontes reduzem a dependência e estimulam a concorrência. As outras vantagens são típicas da fonte única (parceria).", "Transpetro 2018 Suprimento", 56], ["transp", "Comparando os modais, o melhor em confiabilidade, qualidade e custo (para os produtos que pode transportar) é o", ["dutoviário", "rodoviário", "aeroviário", "ferroviário", "hidroviário"], "Dutos operam 24 h, quase sem perdas, interrupções ou dependência do clima, com custo variável muito baixo. A limitação é a pouca variedade de produtos.", "Transpetro 2018 Suprimento", 57], ["info", "Para separar as palavras de frases digitadas em uma coluna do Excel, colocando cada palavra em uma coluna, usa-se", ["Texto para colunas", "Classificar", "Criar tabela", "Tabela dinâmica", "Texto para tabelas"], "Dados > Texto para Colunas divide o conteúdo de uma célula por delimitador (espaço, vírgula, ponto e vírgula) ou largura fixa.", "Transpetro 2018 Suprimento", 59], ["sgi", "Qual elemento corresponde a um conceito estatístico de controle de qualidade?", ["Amostragem", "Inspeção", "Instrução", "Treinamento", "Testagem"], "O controle estatístico avalia o lote inteiro a partir de amostras.", "Transpetro 2012 Suprimento", 21], ["sgi", "O principal propósito das cartas de controle é", ["indicar quando um processo mudou de forma a afetar a qualidade.", "indicar mudanças no clima organizacional.", "indicar efeitos do processo na saúde dos trabalhadores.", "desenvolver normas de qualidade.", "determinar as causas de um problema."], "A carta mostra se o processo saiu dos limites (causa especial). Achar a causa exige outras ferramentas, como Ishikawa.", "Transpetro 2012 Suprimento", 22], ["sgi", "Kaizen, no Controle de Qualidade Total, envolve", ["melhoria contínua e gradual", "mudanças radicais", "produção puxada", "produção em série", "produção contínua"], "Kaizen = melhoria contínua em pequenos passos. Mudança radical é reengenharia (kaikaku).", "Transpetro 2012 Suprimento", 23], ["sgi", "Uma diferença entre cartas de controle por variáveis e por atributos é que as de variáveis", ["acompanham medidas contínuas, e as de atributos, características discretas.", "usam 3 sigmas e as de atributos 2 sigmas.", "usam 2 sigmas e as de atributos 3 sigmas.", "exigem amostras em sequência e as de atributos uma só.", "acompanham dimensões discretas, e as de atributos, contínuas."], "Variáveis = medições (peso, diâmetro, tempo). Atributos = contagens (defeituoso ou não, número de defeitos). Ambas usam limites de 3 sigmas.", "Transpetro 2012 Suprimento", 24], ["estoq", "A demanda anual é de 80.000 peças, o custo de cada pedido é R$ 2.000,00 e o custo de manter uma peça por ano é R$ 20,00. O lote econômico de compra é", ["4.000", "40", "2.828", "5.656", "8.000"], "LEC = √(2 × 80.000 × 2.000 ÷ 20) = √16.000.000 = 4.000.", "Transpetro 2012 Suprimento", 25], ["estoq", "Qual estoque está sujeito unicamente à demanda independente?", ["Produtos finais", "Matérias-primas", "Materiais em transporte", "Estoque de segurança", "Produtos em processo"], "Demanda independente vem do mercado (produto acabado). Matéria-prima e componentes dependem do plano de produção (demanda dependente, calculada pelo MRP).", "Transpetro 2012 Suprimento", 27], ["compras", "É uma das funções principais da gestão de compras a", ["negociação com fornecedores", "inspeção de qualidade", "contagem de inventário", "manutenção de equipamentos", "operação de armazenagem"], "Compras seleciona, negocia e acompanha fornecedores. As outras são de qualidade, estoques, manutenção e armazém.", "Transpetro 2012 Suprimento", 28], ["compras", "Nas compras em sistema Just in Time,", ["prazo de entrega e qualidade são tão importantes quanto o preço na escolha do fornecedor.", "o preço é a variável mais importante.", "compras passa a ser feita pelo setor de vendas.", "o risco de não entrega é compensado com lotes maiores.", "aumentar o número de fornecedores é essencial."], "No JIT há poucos fornecedores parceiros, entregas pequenas e frequentes e qualidade assegurada. Lote grande contraria o JIT.", "Transpetro 2012 Suprimento", 29], ["armaz", "Uma desvantagem da estocagem fixa (endereço fixo por item) em relação à estocagem livre é o risco de", ["má distribuição (ociosidade) das áreas de armazenagem.", "não encontrar os materiais.", "quebra no transporte.", "depreciação dos materiais.", "roubo."], "No endereço fixo a vaga fica reservada mesmo vazia, desperdiçando espaço. No livre o espaço é melhor usado, mas exige controle para achar o item.", "Transpetro 2012 Suprimento", 30], ["estoq", "O Plano Mestre de Produção é dado de entrada do planejamento", ["das necessidades de materiais (MRP)", "estratégico", "de qualidade", "de compras", "de recursos humanos"], "O MRP recebe o plano mestre (o que e quando produzir), a lista de materiais e os estoques.", "Transpetro 2012 Suprimento", 32], ["estoq", "O custo de estoque diretamente reduzido pela venda direta ao consumidor pela internet (B2C) é o custo", ["de armazenagem do produto final", "financeiro da matéria-prima", "de depreciação dos produtos em processo", "de armazenagem da matéria-prima", "de depreciação da matéria-prima"], "Vendendo direto, a empresa produz conforme o pedido e reduz estoques de produto acabado na rede de distribuição.", "Transpetro 2012 Suprimento", 33], ["sgi", "A ferramenta usada para ranquear a frequência dos problemas é a", ["análise de Pareto", "diagrama de causa e efeito", "diagrama de Ishikawa", "carta de controle", "fluxograma"], "Pareto ordena os problemas do mais ao menos frequente (regra 80/20). Causa e efeito e Ishikawa são a mesma ferramenta.", "Transpetro 2012 Suprimento", 34], ["estoq", "O principal objetivo do inventário cíclico (rotativo) é", ["aumentar a acurácia dos registros de estoque.", "minimizar custos de armazenagem.", "minimizar custos de aquisição.", "reduzir perdas por depreciação.", "reduzir gastos com seguro."], "Contam-se itens em ciclos ao longo do ano, priorizando os da classe A, para manter o registro igual ao físico sem parar a operação.", "Transpetro 2012 Suprimento", 35], ["log", "A instalação de uma linha telefônica leva 20 min de operação, 6 de transporte, 4 de inspeção e 12 de espera. O instalador custa R$ 10,00 por hora. O custo real de instalar 20 linhas é", ["R$ 140,00", "R$ 100,00", "R$ 110,00", "R$ 150,00", "R$ 160,00"], "O custo real inclui todo o tempo pago, mesmo o que não agrega valor: 42 min × 20 = 840 min = 14 h × 10 = 140.", "Transpetro 2012 Suprimento", 37], ["transp", "Uma vantagem do modal marítimo em relação ao rodoviário é", ["o menor custo por carga transportada", "a maior rapidez", "a maior variedade de destinos", "o transporte de lotes menores", "o transporte porta a porta"], "Navio carrega grande volume a baixo custo por tonelada, mas é lento e depende de portos.", "Transpetro 2012 Suprimento", 38], ["log", "Uma desvantagem do compartilhamento de previsões entre elos da cadeia no CPFR é", ["a menor segurança da informação.", "o aumento do efeito chicote.", "a menor acurácia das previsões.", "o aumento dos estoques.", "o aumento dos lotes."], "Compartilhar previsões reduz o efeito chicote e os estoques; o risco é expor informações estratégicas.", "Transpetro 2012 Suprimento", 39], ["bp", "Os financiamentos de longo prazo devem ser registrados no", ["Passivo Não Circulante", "Passivo Circulante", "Patrimônio Líquido", "Ativo Circulante", "Ativo Não Circulante"], "Obrigações com vencimento após o término do exercício seguinte vão para o Passivo Não Circulante.", "Transpetro 2012 Suprimento", 56], ["contab", "A comissão mensal dos vendedores de uma rede de postos deve ser registrada como", ["despesa", "custo direto", "custo indireto", "desgaste", "investimento"], "Comissão de venda é gasto para vender, não para produzir: despesa (variável) de vendas.", "Transpetro 2012 Suprimento", 57], ["contab", "O confronto entre receitas e despesas (e custos) de um período, positivo ou negativo, é chamado de", ["resultado", "ativo", "conta", "passivo", "patrimônio"], "Resultado = receitas − custos − despesas. Positivo é lucro; negativo, prejuízo. Aparece na DRE.", "Transpetro 2012 Suprimento", 59], ["bp", "No Balanço Patrimonial, os direitos da empresa aparecem no", ["Ativo", "Passivo", "Patrimônio Líquido", "Exigível a Longo Prazo", "Reserva de Lucros"], "Ativo = bens e direitos. Passivo = obrigações. PL = capital próprio.", "Transpetro 2012 Contabilidade", 21], ["bp", "A demonstração contábil que informa a riqueza gerada pela empresa no período e como ela foi distribuída é a", ["Demonstração do Valor Adicionado (DVA)", "Balanço Patrimonial", "Demonstração do Fluxo de Caixa", "Demonstração do Resultado do Exercício", "Demonstração dos Lucros ou Prejuízos Acumulados"], "A DVA mostra a riqueza gerada e sua divisão entre pessoal, governo, financiadores e sócios. É obrigatória para companhias abertas.", "Transpetro 2012 Contabilidade", 22], ["bp", "É registrada no Passivo Não Circulante a conta", ["Financiamento de Longo Prazo", "Reserva de Capital", "Prejuízos Acumulados", "Empréstimos de Curto Prazo", "Imposto de Renda a pagar no mês seguinte"], "Reservas e prejuízos são do PL; dívidas de curto prazo são do Passivo Circulante.", "Transpetro 2012 Contabilidade", 23], ["bp", "A demonstração que apresenta as receitas do período, independentemente do recebimento, e os custos e despesas correspondentes é a", ["Demonstração do Resultado do Exercício", "Balanço Patrimonial", "DFC pelo método indireto", "Demonstração das Mutações do PL", "DFC pelo método direto"], "A DRE segue o regime de competência. A DFC segue o caixa (entradas e saídas efetivas).", "Transpetro 2012 Contabilidade", 24], ["bp", "Fazem parte do Patrimônio Líquido as contas abaixo, EXCETO", ["Intangível", "Capital Social", "Prejuízos Acumulados", "Ajustes de Avaliação Patrimonial", "Reserva de Capital"], "Intangível é grupo do Ativo Não Circulante (marcas, softwares, licenças).", "Transpetro 2012 Contabilidade", 25], ["contab", "Uma venda feita em janeiro para pagamento em duas parcelas (fevereiro e março) tem a receita reconhecida, pelo regime de competência,", ["no momento da emissão da nota fiscal (venda).", "no encerramento do exercício.", "na quitação da nota fiscal.", "no recebimento das parcelas.", "no recebimento da 1ª parcela."], "Competência: a receita pertence ao período em que a venda ocorreu (entrega e emissão da nota), não ao do recebimento.", "Transpetro 2012 Contabilidade", 26], ["contab", "As ocorrências do Custo das Mercadorias Vendidas (CMV) são lançadas em conta", ["de Resultado", "patrimonial", "de Ativo", "de Passivo", "de Patrimônio Líquido"], "CMV é conta de resultado (custo) e entra na DRE, diminuindo a receita líquida.", "Transpetro 2012 Contabilidade", 35], ["bp", "Uma empresa comprou um veículo de R$ 32.000,00 com entrada de 20% em dinheiro e o saldo em 12 parcelas mensais. O lançamento correto é", ["D – Veículos 32.000; C – Caixa 6.400; C – Financiamentos de Curto Prazo 25.600", "D – Veículos 6.400; C – Caixa 6.400", "D – Caixa 6.400; D – Veículos 25.600; C – Imobilizado 32.000", "D – Caixa 6.400; D – Bancos 25.600; C – Veículos 32.000", "D – Veículos 32.000; C – Caixa 6.400; C – Financiamentos de Longo Prazo 25.600"], "O bem entra pelo valor total. As 12 parcelas mensais vencem dentro dos 12 meses seguintes, logo o saldo é de curto prazo (Passivo Circulante).", "Transpetro 2012 Contabilidade", 38], ["contab", "O livro obrigatório que registra os fatos contábeis em ordem cronológica é o", ["Diário", "Caixa", "Razão", "Lalur", "Registro de Inventário"], "Diário = ordem cronológica (dia a dia). Razão = movimento organizado por conta.", "Transpetro 2012 Contabilidade", 39], ["contab", "Em relação ao volume produzido, os custos são classificados em", ["fixos e variáveis", "fixos e diretos", "variáveis e indiretos", "diretos e indiretos", "diretos e variáveis"], "Pelo volume: fixos (não mudam) e variáveis (acompanham a produção). Pela apropriação ao produto: diretos e indiretos.", "Transpetro 2012 Contabilidade", 42], ["contab", "Os honorários mensais fixos do contador de uma empresa são classificados como", ["despesa fixa", "custo direto", "custo fixo", "custo indireto", "despesa variável"], "O contador atua na administração, não na produção: despesa. Como o valor não muda com o volume, é fixa.", "Transpetro 2012 Contabilidade", 47], ["contab", "A provisão para o Imposto de Renda, no encerramento do exercício, registra uma dívida", ["devida e ainda não paga", "acumulada e paga", "devida e paga", "orçada e com ajustes", "prevista antes dos ajustes"], "Provisão do IR: D – Despesa com IR; C – IR a recolher (Passivo Circulante). A obrigação existe, mas o pagamento é posterior.", "Transpetro 2012 Contabilidade", 49], ["bp", "A reserva de lucros que assegura a integridade do capital social e só pode compensar prejuízos ou aumentar o capital é a", ["Reserva Legal", "Reserva Estatutária", "Reserva de Capital", "Reserva de Reavaliação", "Reserva de Debêntures"], "Lei 6.404, art. 193: 5% do lucro líquido até 20% do capital social; usos limitados a compensar prejuízos ou aumentar o capital.", "Transpetro 2012 Contabilidade", 50], ["matfin", "Um capital de R$ 1.500,00 virou R$ 1.530,00 em dois meses, a juros simples. A taxa anual é", ["12%", "1%", "1,96%", "2%", "11,76%"], "Juros 30 em 2 meses = 2% no período = 1% ao mês. Ao ano (simples): 12%.", "Transpetro 2012 Contabilidade", 53], ["matfin", "Aplicam-se R$ 7.000,00 a juros simples de 4% ao bimestre. Após 6 meses, os juros são", ["R$ 840,00", "R$ 140,00", "R$ 280,00", "R$ 7.280,00", "R$ 7.840,00"], "6 meses = 3 bimestres. J = 7.000 × 0,04 × 3 = 840. Pegadinha: 7.840 é o montante.", "Transpetro 2012 Contabilidade", 54], ["matfin", "Um empréstimo de R$ 1.000,00 por 3 meses a juros compostos de 5% ao mês gera juros de aproximadamente", ["R$ 157,63", "R$ 50,00", "R$ 105,50", "R$ 1.050,00", "R$ 1.157,63"], "M = 1.000 × 1,05³ = 1.157,63. Juros = 157,63. Pegadinha: 1.157,63 é o montante.", "Transpetro 2012 Contabilidade", 55], ["matfin", "Um veículo de R$ 30.000,00 foi comprado com 70% de entrada e o resto financiado por 3 meses a juros compostos de 1,5% ao mês, pagos no fim. O custo total do bem foi", ["R$ 30.411,00", "R$ 30.000,00", "R$ 30.405,00", "R$ 30.270,00", "R$ 30.945,00"], "Financiado: 9.000 × 1,015³ = 9.000 × 1,0457 ≈ 9.411. Total = 21.000 + 9.411 = 30.411.", "Transpetro 2012 Contabilidade", 56], ["contab", "O Sped Contábil substitui a escrituração em papel pela Escrituração Contábil Digital (ECD), transmitida pelo sistema da", ["Receita Federal do Brasil", "Receita Estadual", "Receita Municipal", "Ministério Público Federal", "Ministério Público Estadual"], "O Sped é gerido pela Receita Federal e reúne ECD, ECF, EFD-ICMS/IPI, EFD-Contribuições, eSocial e outros.", "Transpetro 2012 Contabilidade", 58], ["fluxo", "Um dos maiores desafios do administrador financeiro é", ["equilibrar liquidez e rentabilidade.", "justificar as ações financeiras ao fisco.", "garantir pessoalmente os pagamentos aos credores.", "diluir resultados entre os setores.", "fiscalizar lançamentos do caixa na contabilidade."], "Dinheiro parado dá liquidez mas não rende; investir rende mas reduz a folga de caixa. Gestão financeira busca esse equilíbrio.", "Transpetro 2012 Contabilidade", 59], ["contab", "Pela legislação do IR, o lucro real pode ser reduzido pela compensação de prejuízos fiscais de períodos anteriores em até", ["30%", "10%", "15%", "20%", "25%"], "A chamada trava dos 30%: a compensação de prejuízos fiscais limita-se a 30% do lucro real do período.", "Transpetro 2012 Contabilidade", 28], ["contab", "A alíquota geral da CSLL é de", ["9%", "1,65%", "3%", "7,6%", "15%"], "CSLL: 9% como regra geral (bancos e seguradoras têm alíquotas maiores). 1,65% e 7,6% são PIS e Cofins não cumulativos; 15% é o IRPJ.", "Transpetro 2012 Contabilidade", 32], ["contab", "No Lucro Real, o Imposto de Renda é calculado sobre o lucro", ["líquido ajustado pelas adições, exclusões e compensações.", "bruto reduzido pelas exclusões.", "bruto ajustado pelas adições.", "operacional ajustado pelas deduções.", "operacional acrescido das compensações."], "Lucro real = lucro líquido contábil + adições − exclusões − compensações, apurado no Lalur/e-Lalur.", "Transpetro 2012 Contabilidade", 34], ["bp", "Uma empresa que dá garantia de um ano aos componentes vendidos deve registrar o valor provável de gastos com garantia como", ["Provisão para garantias", "Reserva para contingências", "Reserva para garantia", "Reserva para eventos subsequentes", "Provisão para contingências"], "Obrigação provável e estimável, ligada às vendas do período: provisão (passivo) com contrapartida em despesa. Reserva é destinação de lucro.", "Transpetro 2011 Contabilidade", 22], ["bp", "Um call center comprou 20 cadeiras por R$ 1.600,00 em 8 parcelas mensais. A conta credora dessa operação é do", ["Passivo Circulante", "Imobilizado", "Investimentos", "Passivo Não Circulante", "Ativo Não Circulante"], "D – Móveis e Utensílios (Imobilizado); C – Fornecedores / contas a pagar. Oito parcelas mensais vencem em menos de 12 meses: Passivo Circulante.", "Transpetro 2011 Contabilidade", 25], ["bp", "Capital a integralizar corresponde à", ["diferença entre o capital subscrito e o capital integralizado.", "diferença entre capital próprio e de terceiros.", "soma do capital subscrito e integralizado.", "parte que os sócios já entregaram.", "parte que os sócios prometeram entregar."], "Subscrito = prometido; integralizado = entregue; a integralizar = o que falta entregar (conta redutora do PL).", "Transpetro 2011 Contabilidade", 27], ["bp", "Nos termos da lei societária, a reserva legal pode ser usada para", ["aumentar o capital social ou compensar prejuízos.", "integralizar o capital ou compensar prejuízos.", "integralizar ou aumentar o capital.", "compensar prejuízos ou pagar debêntures.", "aumentar o capital ou resgatar ações."], "Lei 6.404, art. 193, § 2º: a reserva legal só pode compensar prejuízos ou aumentar o capital.", "Transpetro 2011 Contabilidade", 29], ["bp", "Uma característica que diferencia a provisão da reserva de lucros é que a provisão", ["é constituída antes da apuração do resultado.", "pode gerar ou não despesa.", "só aumenta o passivo.", "é distribuição do resultado obtido.", "tem débito em conta patrimonial."], "Provisão é despesa (reduz o lucro) e entra antes de apurar o resultado. Reserva é destinação do lucro já apurado.", "Transpetro 2011 Contabilidade", 38], ["contab", "Pelo Regulamento do IR, as bases de cálculo do imposto da pessoa jurídica são o lucro real, o lucro", ["presumido ou arbitrado", "declarado ou presumido", "declarado ou estimado", "estimado ou determinado", "estimado ou arbitrado"], "Três regimes: lucro real, lucro presumido e lucro arbitrado (quando a escrituração não permite apurar o real ou o presumido). O Simples Nacional tem lei própria.", "Transpetro 2011 Contabilidade", 41], ["contab", "O livro fiscal que deve relacionar, entre outros itens, as mercadorias existentes no estoque na data do balanço é o", ["Registro de Inventário", "Lalur", "Registro de Controle da Produção e do Estoque", "Registro de Entradas", "Registro Permanente de Estoque"], "O livro de Registro de Inventário arrola mercadorias, matérias-primas e produtos existentes no encerramento do período.", "Transpetro 2011 Contabilidade", 44], ["contab", "Uma empresa comprou mercadorias a prazo por R$ 60.000,00 com ICMS de 18% (recuperável). O valor registrado em Estoques é", ["R$ 49.200,00", "R$ 10.800,00", "R$ 60.000,00", "R$ 70.800,00", "R$ 83.333,33"], "ICMS recuperável não é custo: 60.000 × 18% = 10.800 vai para ICMS a recuperar (ativo). Estoque = 49.200.", "Transpetro 2011 Contabilidade", 46], ["contab", "Estoque inicial R$ 89.435,00; compras R$ 76.415,00; vendas R$ 138.500,00; estoque final R$ 68.900,00. Sem impostos, o resultado com mercadorias (RCM) é", ["R$ 41.550,00", "R$ 96.950,00", "R$ 89.435,00", "R$ 68.900,00", "R$ 65.950,00"], "CMV = EI + C − EF = 89.435 + 76.415 − 68.900 = 96.950. RCM = 138.500 − 96.950 = 41.550. Pegadinha: 96.950 é o CMV.", "Transpetro 2011 Contabilidade", 49]];

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

/* ---------- 12. v10: correções de explicação ---------- */
(function(){
  const fx={"Segundo a Lei 13.303/2016, nas licitações das empresas estatais deve ser adotado preferencialmente, para a aquisição de bens e serviços comuns, o":"Art. 32, IV: adoção preferencial do pregão para bens e serviços comuns. A lei cita a Lei 10.520/2002, que foi revogada; hoje o pregão segue a Lei 14.133/2021, mas a preferência pelo pregão continua na Lei 13.303."};
  Q.forEach(q=>{if(fx[q[1]]) q[3]=fx[q[1]];});
})();

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
  $("#view").innerHTML=`
  <div class="stack"><h2>Cronograma até 06/12</h2>
  <p class="muted">A programação de cada dia, com horários, a área do app e o que fazer. Toque no dia para abrir; o dia de hoje é o mesmo da tela Hoje.</p></div>
  <div class="panel row" style="justify-content:space-between;flex-wrap:wrap;gap:10px">
    <span><b class="num">${left}</b> dias até a prova</span><span><b class="num">${full}</b> de <b class="num">${past.length}</b> dias anteriores completos</span>
    ${AG[t]?`<button class="btn sm" onclick="document.getElementById('ag-${t}').scrollIntoView({block:'center'})">Ir para hoje</button>`:""}
  </div>
  ${foldHTML("plano","Plano até 06/12 e método de estudo","as 4 fases e como estudar cada dia",planMethod(),false)}
  ${agWeeks().map((w,i)=>`<div class="stack" style="gap:8px"><h3 class="agwk">Semana ${i+1} · ${fmtK(w[0])} a ${fmtK(w[w.length-1])}</h3>${w.map(card).join("")}</div>`).join("")}
  ${Object.values(S.plan||{}).some(Boolean)?`<section class="panel stack"><h3>Lista de conteúdos por semana (antiga)</h3><p class="muted">Mantida para quem já marcou tarefas nela.</p>
  ${PLAN.map(w=>`<details><summary>${esc(w.t)} · ${esc(w.f)} <span class="muted num">${w.d}</span></summary>${w.tasks.map((x,i)=>{const id=w.id+"-"+i,ck=!!S.plan[id];return `<div class="task ${ck?"done":""}"><input type="checkbox" class="oldp" id="${id}" ${ck?"checked":""}><label for="${id}">${esc(x[0])} <span class="tchip">${x[1]}</span></label></div>`;}).join("")}</details>`).join("")}</section>`:""}`;
  document.querySelectorAll(".agday .tl input").forEach(c=>c.onchange=()=>{const k=c.dataset.k;S.daily[k]=S.daily[k]||{};S.daily[k][c.dataset.i]=c.checked;save();vCronoKeep();});
  document.querySelectorAll(".task input.oldp").forEach(c=>c.onchange=()=>{S.plan[c.id]=c.checked;save();vCronoKeep();});
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

/* ---------- 18. v13: identificação fixa das questões ---------- */
/* Cada questão ganha um código tirado do próprio conteúdo (assunto + enunciado + resposta certa).
   O progresso continua guardado pela posição, mas S.qv registra o código de cada posição:
   se a ordem do banco mudar, remapState leva o histórico para a nova posição da mesma questão. */
function qhash(s){let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619);}return (h>>>0).toString(36);}
QID=(()=>{const used={};return Q.map(q=>{let h=qhash(q.c+"|"+q[1]+"|"+q[2][0]);if(used[h]){let n=2;while(used[h+"~"+n])n++;h+="~"+n;}used[h]=1;return h;});})();
const QPOS={}; QID.forEach((id,i)=>QPOS[id]=i);
function remapState(st){
  const old=st.qv; st.qv=QID;
  if(!Array.isArray(old)||old.join()===QID.join()) return false;
  const mp=i=>{const id=old[i];if(id===undefined||QID[i]===id) return i;return QPOS[id]!==undefined?QPOS[id]:i;};
  ["srs","seen","notes","qerr"].forEach(f=>{if(!st[f]) return;const o={};Object.keys(st[f]).forEach(k=>{o[mp(+k)]=st[f][k];});st[f]=o;});
  st.wrong=(st.wrong||[]).map(mp);
  return true;
}
if(!Array.isArray(S.qv)||S.qv.join()!==QID.join()){remapState(S);saveLocal();}

/* ---------- 19. v13: sincronização entre aparelhos e entre os dois links ---------- */
/* O progresso fica numa tabela do Supabase, acessada só por funções que exigem o código de
   sincronização (tp_get / tp_save). tp_save só grava se a nuvem ainda estiver na versão que este
   aparelho conhecia (p_base); senão o app baixa, junta e envia de novo. No GitHub a chamada é direta; no claude.ai, se a página não
   puder acessar a internet, usa o conector Supabase da conta do Claude. */
const SB_URL="https://xpfcmehgdfruhnveslmj.supabase.co", SB_KEY="sb_publishable_Bgf_LtyuT9ABzExDTuAyQg_krQ9yy9R", SB_REF="xpfcmehgdfruhnveslmj";
const GH_URL="https://pedro1105.github.io/estudos-transpetro/";
const CK="transpetro26-cloud", CSNAP="transpetro26-cloudsnap";
const IN_CLAUDE=!!(window.claude&&window.claude.use);
const CL={code:null,base:0,st:"off",at:null,t:null,busy:false,via:"fetch",mcp:null,err:""};
try{const o=JSON.parse(localStorage.getItem(CK)||"{}");CL.code=o.code||null;CL.base=o.base||0;}catch(e){}
if(!CL.code&&S.cloud) CL.code=S.cloud;
function clStore(){try{localStorage.setItem(CK,JSON.stringify({code:CL.code,base:CL.base}));}catch(e){}}
function clSnap(st){try{if(st)localStorage.setItem(CSNAP,JSON.stringify(st));else localStorage.removeItem(CSNAP);}catch(e){}}
function clGetSnap(){try{return JSON.parse(localStorage.getItem(CSNAP)||"null");}catch(e){return null;}}
function newCode(){const a="abcdefghjkmnpqrstuvwxyz23456789",r=crypto.getRandomValues(new Uint8Array(24));let s="";r.forEach((x,i)=>{if(i&&i%4===0)s+="-";s+=a[x%a.length];});return "tp-"+s;}
const codeOk=c=>/^tp-[a-z0-9]{4}(-[a-z0-9]{4}){5}$/.test(c||"");

async function mcpReady(ask){
  if(!IN_CLAUDE) return false;
  if(CL.mcp) return true;
  try{
    /* permissão por conector ("mcp:Supabase"): "prompt" já pode seguir, a primeira chamada pergunta */
    const perm=await window.claude.use("permissions"), K="mcp:Supabase";
    let st=perm?await perm.state(K).catch(()=>"unavailable"):"prompt";
    if(st==="prompt"&&ask){const r=await perm.request([K]).catch(()=>null);if(r&&r[K])st=r[K];}
    CL.perm=st;
    if(st==="denied"||st==="unavailable") return false;
    CL.mcp=await window.claude.use("mcp"); return !!CL.mcp;
  }catch(e){return false;}
}
async function rpcMcp(fn,args){
  const tag="$tp"+Math.random().toString(36).slice(2,8)+"$";
  const lit=v=>typeof v==="number"?String(Math.round(v)):tag+String(v).split(tag).join("")+tag;
  const params=fn!=="tp_save"?[lit(args.p_code)]:[lit(args.p_code),lit(args.p_s),lit(args.p_upd),lit(args.p_base)];
  let res;
  try{res=await CL.mcp.callTool("Supabase","execute_sql",{project_id:SB_REF,query:`select public.${fn}(${params.join(",")})::text as r`},{cache:false});}
  catch(e){const c=e&&e.code||"";if(["consent_required","denied","not_granted"].includes(c)){CL.perm="denied";CL.st="needmcp";throw new Error("needmcp");}
    if(c==="server_not_connected"||c==="needs_reauth"){CL.st="noconn";throw new Error(c);}throw new Error(c||String(e&&e.message||e));}
  let p=res&&res.payload; if(p&&typeof p==="object"&&p.result) p=p.result; if(typeof p!=="string") p=JSON.stringify(p);
  const m=/<untrusted-data[^>]*>\s*([\s\S]*?)\s*<\/untrusted-data/.exec(p); const arr=JSON.parse(m?m[1]:p);
  const r=Array.isArray(arr)&&arr[0]?arr[0].r:null; return r?JSON.parse(r):null;
}
/* no claude.ai, o último erro de sincronização fica no banco da página, para diagnóstico */
function clLog(e){try{if(!SYNC.db||!SYNC.uid||Date.now()-(CL.logAt||0)<60000) return;CL.logAt=Date.now();SYNC.db.doc("data/users/"+SYNC.uid+"/synclog").set({err:String(e&&e.message||e).slice(0,300),via:CL.via,st:CL.st,at:Date.now(),code:!!CL.code});}catch(x){}}
async function rpc(fn,args,ask){
  try{return await rpc0(fn,args,ask);}catch(e){clLog(e);throw e;}
}
async function rpc0(fn,args,ask){
  if(CL.via==="fetch"){
    try{
      const r=await fetch(SB_URL+"/rest/v1/rpc/"+fn,{method:"POST",headers:{apikey:SB_KEY,"Content-Type":"application/json"},body:JSON.stringify(args)});
      if(!r.ok) throw new Error("HTTP "+r.status);
      const t=await r.text(); return t&&t!=="null"?JSON.parse(t):null;
    }catch(e){
      if(!IN_CLAUDE||!navigator.onLine) throw e;
      CL.via="mcp";
    }
  }
  if(!(await mcpReady(ask))){CL.st="needmcp";throw new Error("needmcp");}
  return rpcMcp(fn,args);
}

/* Junta dois progressos. base = última versão sincronizada (quando existe): contadores somam só o que
   cada lado acrescentou; sem base, fica o maior. Listas de dias, questões vistas e notas se unem. */
const ADD_PATHS=/^(stats\.[^.]+\.[ct]|days\.[^.]+|ct\.[^.]+\.[sn]|qerr\.[^.]+|slog\.[^.]+\.[^.]+|qlog\.[^.]+\.[^.]+\.[01])$/;
function deq(a,b){return JSON.stringify(a)===JSON.stringify(b);}
function merge3(base,a,b,path,newer){
  if(deq(a,b)) return a;
  if(a===undefined) return b; if(b===undefined) return a;
  if(base!==undefined&&deq(a,base)) return b;
  if(base!==undefined&&deq(b,base)) return a;
  if(/^srs\.[^.]+$/.test(path)&&a&&b&&typeof a==="object"&&typeof b==="object") return (a.l||"")>(b.l||"")?a:(b.l||"")>(a.l||"")?b:(newer==="a"?a:b);
  if(typeof a==="number"&&typeof b==="number"&&ADD_PATHS.test(path)) return typeof base==="number"?a+b-base:Math.max(a,b);
  if(Array.isArray(a)&&Array.isArray(b)&&/^qlog\./.test(path)) return [0,1].map(i=>merge3(base&&base[i],a[i],b[i],path+"."+i,newer));
  if(a&&b&&typeof a==="object"&&typeof b==="object"&&!Array.isArray(a)&&!Array.isArray(b)){
    const o={}; new Set([...Object.keys(a),...Object.keys(b)]).forEach(k=>{const v=merge3(base&&typeof base==="object"?base[k]:undefined,a[k],b[k],path?path+"."+k:k,newer);if(v!==undefined)o[k]=v;}); return o;
  }
  return newer==="a"?a:b;
}
function mergeS(a,b,base){
  const newer=(a.upd||0)>=(b.upd||0)?"a":"b";
  const o=merge3(base||undefined,a,b,"",newer);
  const hk=h=>[h.date,h.label,h.score,h.total].join("|"), seen=new Set(), hd=h=>{const d=parseBr(h.date);return d?d.getTime():0;};
  o.hist=[...(a.hist||[]),...(b.hist||[])].filter(h=>{const k=hk(h);if(seen.has(k))return false;seen.add(k);return true;}).sort((x,y)=>hd(y)-hd(x)).slice(0,40);
  o.wrong=Object.keys(o.srs||{}).map(Number);
  o.pomo=(newer==="a"?a:b).pomo||null;
  return o;
}
function clAdopt(st,upd){
  S=Object.assign({hist:[],stats:{},wrong:[],plan:{}},st); S.upd=upd; S.cloud=CL.code;
  initState(); saveLocal(); applyTheme&&applyTheme(); syncPush&&syncPush();
  if(!["quiz","real","vf","match","duel","calc"].includes(current)){const y=window.scrollY;go(current);window.scrollTo({top:y});}
}
async function clPush(){
  if(!CL.code||CL.busy) return;
  CL.busy=true;
  try{
    S.cloud=CL.code; const upd=S.upd||Date.now(), body=JSON.stringify(S);
    const r=await rpc("tp_save",{p_code:CL.code,p_s:body,p_upd:upd,p_base:CL.base||0});
    if(r&&r.ok===false){CL.busy=false;return clPull();}
    CL.base=upd; clStore(); clSnap(JSON.parse(body)); CL.st="ok"; CL.at=new Date(); CL.err="";
  }catch(e){CL.st=e.message==="needmcp"?"needmcp":(e.message==="server_not_connected"||e.message==="needs_reauth")?"noconn":"err";CL.err=String(e.message||e);}
  CL.busy=false; clLbl();
}
async function clPull(){
  if(!CL.code&&S.cloud) CL.code=S.cloud;
  if(!CL.code||CL.busy) return;
  CL.busy=true; let then=null;
  try{
    const r=await rpc("tp_get",{p_code:CL.code});
    const lu=S.upd||0;
    if(!r){then="push";}
    else if(!CL.base){
      /* primeira sincronização deste aparelho: nunca sobrescreve às cegas */
      const remote=JSON.parse(r.s);
      if(hasProgress(S)&&hasProgress(remote)&&lu!==r.upd){clAdopt(mergeS(S,remote,null),Math.max(Date.now(),r.upd+1));CL.base=r.upd;then="push";}
      else{clAdopt(remote,r.upd);CL.base=r.upd;clStore();clSnap(remote);}
    }
    else if(r.upd===CL.base){if(lu>CL.base) then="push";}
    else if(r.upd>CL.base){
      const remote=JSON.parse(r.s);
      if(lu>CL.base){const m=mergeS(S,remote,clGetSnap());clAdopt(m,Math.max(Date.now(),r.upd+1));CL.base=r.upd;then="push";}
      else{clAdopt(remote,r.upd);CL.base=r.upd;clStore();clSnap(remote);}
    }else then="push";
    CL.st="ok"; CL.at=new Date(); CL.err="";
  }catch(e){CL.st=e.message==="needmcp"?"needmcp":(e.message==="server_not_connected"||e.message==="needs_reauth")?"noconn":"err";CL.err=String(e.message||e);}
  CL.busy=false; clLbl();
  if(then==="push") clPush();
}
function clKick(){if(!CL.code&&S.cloud){CL.code=S.cloud;clStore();}if(!CL.code) return;clearTimeout(CL.t);CL.t=setTimeout(CL.base?clPush:clPull,2000);}
SAVE_HOOKS.push(clKick);
/* Atualização quase ao vivo: a cada 15 s (60 s pelo conector do Claude) pergunta só a versão da nuvem
   (tp_ver, poucos bytes) e baixa o progresso inteiro apenas quando ela mudou. */
async function clCheck(){
  if(!CL.code&&S.cloud){CL.code=S.cloud;clStore();}
  if(!CL.code||CL.busy||document.visibilityState!=="visible") return;
  if(CL.via==="mcp"&&Date.now()-(CL.lastMcp||0)<55000) return;
  if(CL.via==="mcp") CL.lastMcp=Date.now();
  try{const v=await rpc("tp_ver",{p_code:CL.code});if(v!==CL.base||(S.upd||0)>CL.base) clPull();else if(CL.st!=="ok"){CL.st="ok";CL.at=new Date();clLbl();}}
  catch(e){CL.st=e.message==="needmcp"?"needmcp":(e.message==="server_not_connected"||e.message==="needs_reauth")?"noconn":"err";CL.err=String(e.message||e);clLbl();}
}
document.addEventListener("visibilitychange",()=>{if(document.visibilityState==="visible") clPull();else if(CL.code&&CL.base&&(S.upd||0)>CL.base){clearTimeout(CL.t);clPush();}});
window.addEventListener("online",()=>clPull());
setInterval(clCheck,15000);

/* Conectar este aparelho a um código: se os dois lados já têm progresso, junta os dois sozinho. */
const hasProgress=st=>!!st&&((st.hist||[]).length>0||Object.keys(st.seen||{}).length>0);
async function clLink(code,ask){
  code=String(code||"").trim().toLowerCase();
  if(!codeOk(code)){toast("Código inválido","Copie o código inteiro, no formato tp-xxxx-xxxx-…");return;}
  CL.code=code; CL.base=0; clStore(); clLbl();
  let r=null;
  try{r=await rpc("tp_get",{p_code:code},ask);}catch(e){CL.st=e.message==="needmcp"?"needmcp":(e.message==="server_not_connected"||e.message==="needs_reauth")?"noconn":"err";clLbl();toast("Sem conexão agora","O código foi guardado; a sincronização tenta de novo sozinha.");return;}
  if(!r){S.cloud=code;save();toast("Sincronização ativada","Este aparelho passa a enviar o progresso para a nuvem.");return;}
  const remote=JSON.parse(r.s);
  if(!(hasProgress(S)&&hasProgress(remote))){clAdopt(remote,r.upd);CL.base=r.upd;clStore();clSnap(remote);}
  else{const m=mergeS(S,remote,null);clAdopt(m,Math.max(Date.now(),r.upd+1));CL.base=r.upd;clStore();await clPush();}
  toast("Aparelho conectado","O progresso agora é o mesmo nos aparelhos conectados.");
}
async function copyTxt(t,ok,sub){try{await navigator.clipboard.writeText(t);toast(ok,sub||"");}catch(e){const p=modal(`<h3>Copie o texto</h3><p class="muted">Toque e segure no texto e escolha Copiar.</p><textarea rows="3" readonly onfocus="this.select()">${esc(t)}</textarea>`,[["ok","Fechar","btn"]]);setTimeout(()=>{const x=document.querySelector("dialog.tpdlg textarea");if(x){x.focus();x.select();}},50);await p;}}
/* o painel entra no lugar do texto de status da sincronização antiga, dentro de "Backup e sincronização" */
/* link #sync=código (abre o app já conectado) */
(function(){const m=/[#&]sync=(tp-[a-z0-9-]+)/.exec(location.hash||"");if(!m) return;try{history.replaceState(null,"",location.pathname+location.search);}catch(e){}if(m[1]!==CL.code) setTimeout(()=>clLink(m[1],true),400);})();
setTimeout(clPull,1200);
/* no claude.ai a sincronização liga sozinha: se depois de carregar a conta ainda não houver código,
   cria um; ele vai junto no progresso da conta e chega aos outros aparelhos com o mesmo login */
if(IN_CLAUDE) setTimeout(()=>{if(SYNC.st==="ok"&&!CL.code&&!S.cloud){CL.code=newCode();CL.base=0;S.cloud=CL.code;clStore();save();}},8000);

/* ---------- 20. v13: janela de diálogo simples ---------- */
function modal(html,buttons){
  return new Promise(res=>{
    const d=document.createElement("dialog"); d.className="tpdlg";
    d.innerHTML=`<form method="dialog" class="stack">${html}<div class="row" style="gap:8px;flex-wrap:wrap;justify-content:flex-end">${buttons.map(([v,t,c])=>`<button class="${c}" value="${v}">${esc(t)}</button>`).join("")}</div></form>`;
    document.body.appendChild(d);
    d.addEventListener("close",()=>{const v=d.returnValue||"cancel";const data={};d.querySelectorAll("[name]").forEach(x=>{if(x.type==="radio"){if(x.checked)data[x.name]=x.value;}else data[x.name]=x.value;});d.remove();res({v,data});});
    d.showModal();
  });
}

/* ---------- 21. v13: reportar erro numa questão ---------- */
const REP_K={gab:"Gabarito errado",exp:"Explicação errada ou confusa",enun:"Enunciado ou alternativa com erro",lei:"Desatualizada ou fora do edital",out:"Outro"};
function repBtn(qi){const r=S.rep&&S.rep[QID[qi]];return `<button type="button" class="linkbtn repbtn" data-q="${qi}">${r?"⚑ Reportada · editar":"⚑ Reportar erro"}</button>`;}
async function repOpen(qi){
  S.rep=S.rep||{}; const id=QID[qi], cur=S.rep[id]||{};
  const r=await modal(`<h3>Reportar erro nesta questão</h3>
    <p class="muted">${esc(Q[qi][1].length>140?Q[qi][1].slice(0,140)+"…":Q[qi][1])}</p>
    <div class="stack" style="gap:6px">${Object.entries(REP_K).map(([k,t])=>`<label class="rrow"><input type="radio" name="k" value="${k}" ${(cur.k||"gab")===k?"checked":""}><span>${esc(t)}</span></label>`).join("")}</div>
    <label class="muted" for="repT">O que está errado (opcional)</label><textarea id="repT" name="t" rows="3" placeholder="Ex.: a resposta certa é a C, pelo art. 75">${esc(cur.t||"")}</textarea>
    <p class="muted">Fica na lista “Questões reportadas”, em Progresso, e chega para correção pela sincronização.</p>`,
    [...(S.rep[id]?[["del","Retirar o aviso","btn ghost"]]:[]),["cancel","Cancelar","btn ghost"],["ok","Enviar","btn"]]);
  if(r.v==="ok"){S.rep[id]={i:qi,k:r.data.k||"out",t:(r.data.t||"").trim().slice(0,600),d:todayK()};save();toast("Obrigado! Questão reportada","Ela será revisada na próxima atualização.");}
  else if(r.v==="del"){delete S.rep[id];save();}
  else return;
  document.querySelectorAll(`.repbtn[data-q="${qi}"]`).forEach(b=>b.outerHTML=repBtn(qi));
  if(current==="stats") vStatsKeep();
}
document.addEventListener("click",e=>{const b=e.target.closest&&e.target.closest(".repbtn");if(b){e.preventDefault();e.stopPropagation();repOpen(+b.dataset.q);}},true);
function repList(){return Object.entries(S.rep||{}).map(([id,r])=>({id,r,qi:QPOS[id]!==undefined?QPOS[id]:r.i})).filter(x=>Q[x.qi]);}
function repPanel(){
  const L2=repList(); if(!L2.length) return "";
  const txt=L2.map(x=>`[${x.id}] ${REP_K[x.r.k]||x.r.k}${x.r.t?": "+x.r.t:""}\n   ${Q[x.qi][1].slice(0,160)}`).join("\n");
  return `<section class="panel stack" id="repSec"><div class="row" style="justify-content:space-between"><h3>Questões reportadas</h3><span class="pill">${L2.length}</span></div>
    <p class="muted">${CL.code?"Elas chegam para correção junto com a sincronização.":"Ative a sincronização (em Hoje › Backup e sincronização) ou copie a lista e mande na conversa."}</p>
    <div class="stack" style="gap:8px">${L2.map(x=>`<div class="row repitem" style="justify-content:space-between;gap:8px;align-items:flex-start"><span><b>${esc(REP_K[x.r.k]||"Outro")}</b>${x.r.t?` · ${esc(x.r.t)}`:""}<br><span class="muted">${esc(Q[x.qi][1].slice(0,120))}${Q[x.qi][1].length>120?"…":""}</span></span>${repBtn(x.qi)}</div>`).join("")}</div>
    <div class="row"><button class="btn ghost sm" onclick='copyTxt(${JSON.stringify(txt).replace(/'/g,"&#39;")},"Lista copiada","Cole na conversa com o Claude.")'>Copiar lista</button></div></section>`;
}
function vStatsKeep(){const y=window.scrollY;vStats();window.scrollTo({top:y});}

/* ---------- 22. v13: tamanho da letra (por aparelho) ---------- */
const FZK="transpetro26-fz", FZS=[1,1.12,1.25,1.4,.92];
let fz=1; try{fz=+localStorage.getItem(FZK)||1;}catch(e){}
function fzApply(){document.documentElement.style.setProperty("--fz",fz);const b=$("#fzBtn");if(b)b.innerHTML=`<span aria-hidden="true">Aa</span><span class="tlbl">Letra ${Math.round(fz*100)}%</span>`;document.querySelectorAll(".fzq").forEach(x=>x.title="Letra "+Math.round(fz*100)+"%");}
function fzCycle(){const i=FZS.indexOf(fz);fz=FZS[(i+1)%FZS.length];try{localStorage.setItem(FZK,fz);}catch(e){}fzApply();toast("Tamanho da letra: "+Math.round(fz*100)+"%","Toque de novo para mudar.");}
fzApply();

/* ---------- 23. v13: resumo semanal ---------- */
/* semana de segunda a domingo; os blocos usam o histórico de simulados/treinos (S.hist) e
   os assuntos usam S.qlog, registrado a partir da v13. */
function monday(k){const d=kDate(k);const w=(d.getDay()+6)%7;d.setDate(d.getDate()-w);return dkey(d);}
function plusK(k,n){const d=kDate(k);d.setDate(d.getDate()+n);return dkey(d);}
function weekData(a){
  const b=plusK(a,6), inW=k=>k>=a&&k<=b, out={a,b,blk:{},cat:{},q:0,c:0,days:0,min:0,sims:0};
  (S.hist||[]).forEach(h=>{const d=parseBr(h.date);if(!d) return;const k=dkey(d);if(!inW(k)) return;out.sims++;Object.entries(h.byB||{}).forEach(([bk,v])=>{const x=out.blk[bk]=out.blk[bk]||{c:0,t:0};x.c+=v.c;x.t+=v.t;});});
  Object.entries(S.qlog||{}).forEach(([k,o])=>{if(!inW(k)) return;Object.entries(o).forEach(([c,[ok,t]])=>{const x=out.cat[c]=out.cat[c]||{c:0,t:0};x.c+=ok;x.t+=t;});});
  for(let k=a;k<=b;k=plusK(k,1)){const n=(S.days||{})[k]||0;out.q+=n;if(n)out.days++;const sl=(S.slog||{})[k];if(sl)for(const c in sl)out.min+=sl[c];}
  Object.values(out.blk).forEach(v=>out.c+=v.c);
  out.t=Object.values(out.blk).reduce((s,v)=>s+v.t,0);
  return out;
}
function weekFocus(w){
  const sc=Object.entries(w.cat).filter(([c,v])=>v.t>=4&&isEsp(c)).map(([c,v])=>[c,v.c/v.t]).filter(x=>x[1]<.7).sort((x,y)=>x[1]-y[1]).map(x=>x[0]);
  const out=sc.slice(0,3); weakCats(6).forEach(c=>{if(out.length<3&&!out.includes(c)) out.push(c);}); return out;
}
function weekPanel(a,title){
  const w=weekData(a), p=weekData(plusK(a,-7)), pc=v=>v&&v.t?Math.round(v.c/v.t*100):null;
  const acc=pc(w), pacc=pc(p);
  const rows=Object.keys(BLOCKS).filter(bk=>w.blk[bk]||p.blk[bk]).map(bk=>{const x=pc(w.blk[bk]),y=pc(p.blk[bk]);const d=x!==null&&y!==null?x-y:null;
    return `<div class="wkrow"><span><i class="bdot" style="background:var(--c-${bk})"></i>${esc(BLOCKS[bk])}</span><span class="num">${x===null?"—":x+"%"}</span><span class="num wkd ${d>0?"ok":d<0?"bad":""}">${d===null?"":d>0?"▲ "+d:d<0?"▼ "+(-d):"="}</span></div>`;}).join("");
  const cats=Object.entries(w.cat).filter(([,v])=>v.t>=3).map(([c,v])=>[c,v.c/v.t,v.t]);
  const best=cats.filter(x=>x[1]>=.7).sort((x,y)=>y[1]-x[1]).slice(0,2), worst=cats.filter(x=>x[1]<.7).sort((x,y)=>x[1]-y[1]).slice(0,2);
  const foc=weekFocus(w);
  return `<section class="panel stack wkpanel"><div class="row" style="justify-content:space-between"><h3>${esc(title)}</h3><span class="muted num">${fmtK(w.a)} a ${fmtK(w.b)}</span></div>
    <div class="grid3 wkstats"><div class="score"><span class="muted">Questões</span><span class="v num">${w.q}</span><span class="muted num">${w.days} de 7 dias</span></div>
    <div class="score"><span class="muted">Acerto</span><span class="v num">${acc===null?"—":acc+"%"}</span><span class="muted num">${pacc===null?"semana anterior sem dados":"semana anterior "+pacc+"%"}</span></div>
    <div class="score"><span class="muted">Estudo com cronômetro</span><span class="v num">${minFmt(w.min)}</span><span class="muted num">${w.sims} ${w.sims===1?"simulado ou treino":"simulados e treinos"}</span></div></div>
    ${rows?`<div class="stack" style="gap:6px">${rows}</div>`:`<p class="muted">Sem simulados ou treinos registrados nesta semana ainda.</p>`}
    ${cats.length?`<p>${best.length?`<b>Melhor:</b> ${best.map(x=>esc(CATS[x[0]].n)+" ("+Math.round(x[1]*100)+"%)").join(", ")}. `:""}${worst.length?`<b>Precisa de atenção:</b> ${worst.map(x=>esc(CATS[x[0]].n)+" ("+Math.round(x[1]*100)+"%)").join(", ")}.`:""}</p>`:""}
    <div class="stack" style="gap:6px"><b>3 focos para a próxima semana</b>${foc.map((c,i)=>`<div class="row" style="justify-content:space-between;gap:8px"><span>${i+1}. ${esc(CATS[c].n)}</span><span class="row" style="gap:6px"><button class="btn ghost sm" onclick="openTopic('${c}')">Resumo</button><button class="btn ghost sm" onclick="startTrainCat('${c}')">Treinar</button></span></div>`).join("")}</div>
  </section>`;
}
/* Progresso: semana atual; Hoje: no domingo, a semana que termina; na segunda, a que terminou */
const _vStats13=vStats;
vStats=function(){
  _vStats13();
  const seg=$("#view .segtabs"), h=$("#view h2"), at=(h||seg);
  const k=todayK(), a=monday(k);
  at.insertAdjacentHTML("afterend",weekPanel(a,"Resumo da semana")+prioPanel()+repPanel());
};
function weekCard(){
  const k=todayK(), wd=kDate(k).getDay();
  if(wd!==0&&wd!==1) return "";
  const a=wd===0?monday(k):monday(plusK(k,-1));
  if(S.wkSeen===a) return "";
  return `<div class="wkwrap">${weekPanel(a,wd===0?"Resumo da semana":"Resumo da semana passada").replace('<div class="row" style="justify-content:space-between"><h3>',`<div class="row" style="justify-content:space-between"><button class="linkbtn wkx" onclick="S.wkSeen='${a}';save();vGuiaKeep()" aria-label="Fechar o resumo">Fechar</button><h3>`)}</div>`;
}

(function(){const st=document.createElement("style");st.textContent=`
#view{zoom:var(--fz,1)}
.fzbtn{font:700 15px var(--f-body)}
@media (min-width:1100px){header.band .themebtn.fzbtn{order:5;margin-top:0}}
.linkbtn{all:unset;cursor:pointer;color:var(--petrol);font:600 13px var(--f-body);padding:6px 0;text-decoration:underline;text-underline-offset:3px}
.linkbtn:focus-visible{outline:2px solid var(--petrol);border-radius:4px}
.repbtn{color:var(--muted);align-self:flex-start;white-space:nowrap}
.repitem{border-top:1px solid var(--line);padding-top:8px}
dialog.tpdlg{border:1px solid var(--line);border-radius:14px;background:var(--surface);color:var(--ink);padding:18px;max-width:min(520px,calc(100vw - 32px));width:100%;box-sizing:border-box;zoom:var(--fz,1)}
dialog.tpdlg::backdrop{background:rgba(0,0,0,.45)}
dialog.tpdlg h3{margin:0}
dialog.tpdlg textarea,.clbox input{width:100%;box-sizing:border-box;font:inherit}
.rrow{display:flex;gap:10px;align-items:flex-start;cursor:pointer;line-height:1.35}.rrow input{margin:2px 0 0;flex:none;width:18px;height:18px;accent-color:var(--petrol)}
.vh{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.clcode{font:600 14px var(--f-mono,monospace);background:var(--petrol-soft);color:var(--petrol);padding:8px 10px;border-radius:8px;overflow-wrap:anywhere}
.cllbl.ok{color:var(--ok)}.cllbl.bad{color:var(--bad)}
.clbox{border-bottom:1px solid var(--line);padding-bottom:14px}
.grid3{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}
@media (max-width:520px){.grid3{grid-template-columns:1fr 1fr}.grid3>:last-child{grid-column:1/-1}}
.wkrow{display:grid;min-width:0;grid-template-columns:1fr auto 52px;gap:8px;align-items:center}
.wkd{text-align:right;font-size:13px}.wkd.ok{color:var(--ok)}.wkd.bad{color:var(--bad)}
.wkx{order:2;font-size:12px;color:var(--muted)}
.qhead .fzq{min-width:40px}
`;document.head.appendChild(st);})();

/* ---------- 24. v14: tela Hoje enxuta, programação do dia e Configurações ---------- */

/* Áreas do app: cada etapa do dia diz em qual área acontece e como aproveitar */
const AREAS={
  est:{n:"Estudar",v:"cont",how:"Resumo do assunto do dia (toque em Ouvir para escutar no caminho), quadros comparativos e fórmulas no fim do resumo, Pegadinhas da banca e a Revisão da véspera. Leia, feche e escreva de memória 3 a 5 pontos."},
  pra:{n:"Praticar",v:"pratica",how:"Onde você ganha pontos: Revisar erradas todo dia primeiro; Treino por assunto com correção na hora; Treino adaptativo quando não souber o que fazer; simulados e Modo prova real nos dias marcados; Caderno de erros para anotar por que errou."},
  jog:{n:"Jogos",v:"jogos",how:"Fixação rápida para os intervalos: Desafio do dia (5 questões), Flashcards, V ou F relâmpago, Lei seca, Cálculo sem calculadora, Ache o erro e Ordene as fases. 10 minutos por dia já mantêm a memória viva."},
  prog:{n:"Progresso",v:"stats",how:"Fechamento do dia em 5 minutos: acerto por assunto, onde está perdendo pontos, previsão de nota e o resumo da semana com os 3 focos. Uma vez por semana, confira se o acerto nas específicas subiu."}
};
const STEP_AREA={aq:"pra",sim:"pra",cor:"pra",teo:"est",q1:"pra",q2:"pra",src:"pra",lei:"pra",ger:"pra",rev:"est",cad:"pra",res:"est",dch:"jog",prog:"prog"};
const STEP_HOW={
  aq:"Responda antes de ver a explicação. Se não houver nada para revisar, faça uma rodada de V ou F em Jogos.",
  sim:"Celular longe, cronômetro ligado e respostas passadas para o cartão no fim, como na prova.",
  cor:"Para cada erro, anote o motivo no caderno: não sabia, confundi, li rápido ou errei a conta.",
  teo:"No fim do resumo há quadros comparativos e pegadinhas do assunto. O botão Ouvir lê o resumo em voz alta.",
  q1:"Correção na hora: leia a explicação também das que acertou no chute.",
  q2:"Misturar temas treina reconhecer o assunto sem aviso, como na prova.",
  src:"Questões reais de outra prova da Cesgranrio: repare no jeito da banca perguntar.",
  lei:"Jogue Lei seca em Jogos e depois faça o treino artigo por artigo.",
  ger:"Contas à mão, sem calculadora. Em Português, sublinhe a palavra-chave do enunciado.",
  rev:"Pegadinhas dos assuntos da semana e uma rodada de Flashcards em Jogos.",
  cad:"Releia as notas que voltaram hoje e escreva o que lembrar da próxima vez.",
  res:"Só leitura leve, sem questões novas.",
  dch:"Mantém a sequência de dias e treina rapidez.",
  prog:"Veja em Progresso o acerto do dia e o assunto que mais tira pontos; ele entra no plano de amanhã."
};
const ICO_AREA={est:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2zM22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/></svg>',pra:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>',jog:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="11" rx="4"/><path d="M7 11v3M5.5 12.5h3M16 12h.01M18 14h.01"/></svg>',prog:'<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>'};

/* "3. Teoria (30 min): texto" → {titulo, minutos, texto} */
function stepParse(i){
  let t=i.t.replace(/^\d+\.\s*/,""), min=null;
  const m=/^([^:(]+?)\s*\((\d+)\s*min\)\s*:\s*([\s\S]*)$/.exec(t);
  if(m) return {h:m[1],min:+m[2],d:m[3]};
  if(/\(4 h\)/.test(t)) min=240; else if(i.id==="sim"&&/Mini/.test(t)) min=50; else if(i.id==="sim") min=180;
  return {h:"",min,d:t.replace(/\s*\(4 h\)/,"")};
}
const hm=m=>String(Math.floor(m/60)%24).padStart(2,"0")+":"+String(m%60).padStart(2,"0");
function startMin(k){const wd=kDate(k).getDay(),h=(wd===0||wd===6?S.st.w:S.st.h)||"19:00";const [a,b]=h.split(":").map(Number);return a*60+(b||0);}
/* monta a agenda com horários e pausas de 10 min a cada ~50 min de estudo */
function schedule(k,its){
  let t=startMin(k), run=0; const out=[];
  its.filter(i=>!i.auto).forEach((i,idx)=>{
    const p=stepParse(i), dur=p.min||0;
    if(dur>=10&&run>=45&&run+dur>60){out.push({pause:true,a:t,b:t+10});t+=10;run=0;}
    out.push({i,p,a:dur?t:null,b:dur?t+dur:null,area:STEP_AREA[i.id]||null});
    if(dur){t+=dur;run+=dur;if(dur>=90)run=0;}
  });
  return {rows:out,start:startMin(k),end:t};
}
function areaChip(a){return a?`<span class="achip a-${a}">${ICO_AREA[a]}${AREAS[a].n}</span>`:"";}

function syncChip(){
  const s=!CL.code?["off","Não sincronizado"]:CL.st==="ok"?["ok","Sincronizado"]:CL.st==="needmcp"?["bad","Permitir sincronização"]:CL.st==="noconn"?["bad","Reconectar Supabase"]:CL.st==="err"?["bad",navigator.onLine?"Sincronização pendente":"Sem internet"]:["","Sincronizando…"];
  return `<button class="clchip ${s[0]}" onclick="go('config')" title="Configurações › Sincronização"><i></i>${s[1]}</button>`;
}

function vGuia(){
  const k=todayK(), p=dayPlan(k), its=dayItems(p), steps=its.filter(i=>!i.auto), done=steps.filter(i=>itemDone(k,i)).length;
  const meta=its.find(i=>i.auto), due=srsDue().length, sc=schedule(k,its);
  const last14=[...Array(14)].map((_,i)=>{const d=new Date();d.setDate(d.getDate()-13+i);const kk=dkey(d);return {kk,s:kk<"2026-10-27"?null:dayScore(kk)};});
  const full=(()=>{let n=0,d=new Date();if(dayScore(dkey(d))<1)d.setDate(d.getDate()-1);while(dkey(d)>="2026-10-27"&&dayScore(dkey(d))>=1){n++;d.setDate(d.getDate()-1);}return n;})();
  const wdN=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"][kDate(k).getDay()];
  const rows=tlHTML(k,its,"dl-",true);
  const tot=sc.end-sc.start;
  $("#view").innerHTML=`${runBanner()}
  <div class="hoje-top"><div class="stack" style="gap:2px"><h2>Hoje</h2><span class="muted">${wdN}, ${fmtK(k)}${p.ph?` · fase ${PHASES.indexOf(p.ph)+1}: ${esc(p.ph.t)}`:""}</span></div>${syncChip()}</div>
  ${syncBanner()}
  ${weekCard()}
  <section class="panel stack prog-dia">
    <div class="row" style="justify-content:space-between;gap:8px"><h3>Programação de hoje${p.foco?` · ${esc(p.foco)}`:""}</h3><span class="streak num">${full} ${full===1?"dia completo":"dias completos"} seguidos</span></div>
    ${tot>0?`<span class="muted num">${hm(sc.start)} às ${hm(sc.end)} · ${minFmt(tot)} de estudo com pausas · <button class="linkbtn" onclick="go('config');setTimeout(()=>{const e=$('#stH');if(e)e.focus();},200)">mudar horário</button></span>`:""}
    <div class="row" style="justify-content:space-between"><span><b class="num">${done}</b> de <b class="num">${steps.length}</b> etapas</span>${done===steps.length?'<span class="pill ok">Dia concluído</span>':""}</div>
    <div class="track"><div class="fill" style="width:${steps.length?done/steps.length*100:0}%"></div></div>
    ${due?`<div class="rule row" style="justify-content:space-between"><span><b class="num">${due}</b> ${due===1?"questão errada volta":"questões erradas voltam"} hoje na revisão espaçada.</span><button class="btn sm" onclick="startWrong()">Revisar agora</button></div>`:""}
    <div class="tlist">${rows}</div>
    ${meta?`<div class="row metaln"><span>Meta: <b class="num">${S.days[k]||0}</b> de <b class="num">${S.goal}</b> questões hoje</span>${(S.days[k]||0)>=S.goal?'<span class="pill ok">cumprida</span>':`<div class="track sm"><div class="fill" style="width:${Math.min(100,(S.days[k]||0)/S.goal*100)}%"></div></div>`}</div>`:""}
    <div class="stack" style="gap:6px"><span class="muted">Últimos 14 dias</span><div class="days14">${last14.map(x=>`<span class="d14 ${x.s===null?"na":x.s>=1?"full":x.s>=.5?"half":x.s>0?"low":""}" title="${fmtK(x.kk)}"><i>${x.kk.slice(8)}</i></span>`).join("")}</div></div>
    <div><button class="btn ghost sm" onclick="go('crono')">Ver a programação dos próximos dias</button></div>
  </section>
  ${foldHTML("ferr","Cronômetro de estudo","blocos de 50 min com 10 de pausa",pomoPanel().replace('<section class="panel stack">','<section class="stack inner">'),false)}
  ${foldHTML("areas","Como aproveitar cada área, todo dia","Estudar, Praticar, Jogos e Progresso",areasGuide(),false)}`;
  steps.forEach(i=>{const c=$("#dl-"+i.id); if(c) c.onchange=()=>{S.daily[k]=S.daily[k]||{};S.daily[k][i.id]=c.checked;save();vGuiaKeep();};});
  pomoWire();
}
/* linhas da programação de um dia (Hoje e Cronograma); pre = prefixo dos ids das caixas */
function tlHTML(k,its,pre,live){
  const steps=its.filter(i=>!i.auto), sc=schedule(k,its), nowI=live?steps.findIndex(i=>!itemDone(k,i)):-1;
  return sc.rows.map(r=>{
    if(r.pause) return `<div class="tl pause"><span class="tltime num">${hm(r.a)}</span><span class="muted">Pausa de 10 min, longe do celular</span></div>`;
    const i=r.i, ck=itemDone(k,i), cur=steps.indexOf(i)===nowI;
    return `<div class="tl ${ck?"done":""} ${cur?"cur":""}">
      <input type="checkbox" id="${pre}${i.id}" data-k="${k}" data-i="${i.id}" ${ck?"checked":""} aria-label="Concluí: ${esc(r.p.h||r.p.d)}">
      <div class="tlb"><div class="tlt">${r.a!==null?`<span class="tltime num">${hm(r.a)}–${hm(r.b)}</span>`:""}${areaChip(r.area)}${cur?'<span class="pill now">agora</span>':""}</div>
        <label for="${pre}${i.id}" class="tltitle">${r.p.h?`<b>${esc(r.p.h)}:</b> `:""}${esc(r.p.d)}</label>
        ${STEP_HOW[i.id]?`<p class="tlhow">${esc(STEP_HOW[i.id])}</p>`:""}</div>
      ${i.act?`<button class="btn ${cur?"":"ghost"} sm" onclick="${i.act}">${i.lbl}</button>`:""}</div>`;}).join("");
}
function vGuiaKeep(){const y=window.scrollY;vGuia();window.scrollTo({top:y});}
function areasGuide(){
  const order=[["est","30 a 40 min"],["pra","1 h a 1h30"],["jog","10 a 15 min"],["prog","5 min"]];
  return `<div class="stack inner" style="gap:12px">${order.map(([a,t])=>`<div class="areaitem"><div class="row" style="justify-content:space-between;gap:8px">${areaChip(a)}<span class="muted num">${t} por dia</span></div><p>${esc(AREAS[a].how)}</p><div><button class="btn ghost sm" onclick="go('${AREAS[a].v}')">Abrir ${AREAS[a].n}</button></div></div>`).join("")}
  <p class="muted">Ordem que mais rende: revisar erradas → teoria curta → questões do mesmo assunto → questões de outro assunto → caderno de erros → desafio do dia → conferir o progresso. Questões em 70% do tempo, teoria em 30%.</p></div>`;
}
function syncBanner(){
  if(CL.st==="needmcp") return `<div class="rule row" style="justify-content:space-between;gap:8px"><span>Para o progresso daqui chegar ao celular, permita uma vez o uso do conector Supabase.</span><button class="btn sm" onclick="clAllow()">Permitir</button></div>`;
  if(!CL.code&&!IN_CLAUDE) return `<div class="rule stack"><span><b>Este aparelho ainda não está sincronizado.</b> Abra o link de conexão (fica em Configurações, no app do PC ou do Claude) ou cole o código aqui.</span><div class="row" style="gap:8px;flex-wrap:wrap"><input id="clInH" placeholder="tp-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx" autocomplete="off" autocapitalize="off" spellcheck="false" style="flex:1;min-width:220px"><button class="btn sm" onclick="clLink($('#clInH').value,true).then(()=>vGuiaKeep())">Conectar</button></div></div>`;
  return "";
}
async function clAllow(){CL.via="mcp";if(CL.perm==="denied"){try{const perm=await window.claude.use("permissions");await perm.manage();}catch(e){toast("Permissão bloqueada","Abra o menu Permissões deste artifact (no topo da página) e ligue o conector Supabase.");}CL.perm=null;}
  if(await mcpReady(true)){CL.st="";clLbl();await clPull();}else toast("Sem permissão","A sincronização com o celular fica parada até você permitir o conector Supabase.");if(current==="guia")vGuiaKeep();if(current==="config")vConfigKeep();}

/* ---------- Configurações ---------- */
function clText(){
  if(!CL.code) return IN_CLAUDE?"Preparando a sincronização…":"Este aparelho ainda não está conectado. Cole o código abaixo ou abra o link de conexão.";
  if(CL.st==="ok") return "Ligada e em dia"+(CL.at?" (conferido às "+CL.at.toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"})+")":"")+". O que você faz aqui aparece nos outros aparelhos em poucos segundos.";
  if(CL.st==="needmcp") return CL.perm==="denied"?"O conector Supabase foi bloqueado para esta página. Toque em Permitir e ligue o Supabase no painel de permissões.":"Falta uma permissão: toque em Permitir para o link do Claude usar o conector Supabase.";
  if(CL.st==="noconn") return "O conector Supabase não está conectado (ou a conexão expirou) na sua conta do claude.ai. Reconecte em Configurações → Conectores do claude.ai e volte aqui.";
  if(CL.st==="err") return navigator.onLine?"Não deu para falar com a nuvem agora; o app tenta de novo sozinho. Nada se perde.":"Sem internet. O progresso fica salvo aqui e sobe quando a conexão voltar.";
  return "Conectando…";
}
function clLbl(){
  document.querySelectorAll(".cllbl").forEach(e=>{e.textContent=clText();e.className="cllbl "+(CL.st==="ok"?"ok":CL.st==="err"||CL.st==="needmcp"||CL.st==="noconn"?"bad":"");});
  const c=document.querySelector(".clchip"); if(c) c.outerHTML=syncChip();
  const b=$("#clMcp"); if(b) b.hidden=CL.st!=="needmcp";
}
function cfgSync(){
  const link=CL.code?GH_URL+"#sync="+CL.code:"";
  return `<section class="panel stack" id="cfgSync"><h3>Sincronização entre aparelhos</h3>
    <p class="cllbl">${esc(clText())}</p>
    <button class="btn sm" id="clMcp" ${CL.st==="needmcp"?"":"hidden"} onclick="clAllow()">Permitir</button>
    ${CL.code?`<div class="stack" style="gap:8px"><b>Conectar outro aparelho (uma vez só)</b>
      <p class="muted">Abra este link no outro aparelho (no celular, pelo Chrome; depois instale pelo menu, se quiser). Ele entra conectado e junta o que já tiver lá.</p>
      <code class="clcode">${esc(link)}</code>
      <div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn sm" onclick="copyTxt('${link}','Link copiado','Abra no outro aparelho.')">Copiar link</button>${navigator.share?`<button class="btn ghost sm" onclick="navigator.share({title:'Estudos Transpetro',url:'${link}'}).catch(()=>{})">Enviar para…</button>`:""}<button class="btn ghost sm" onclick="clPull()">Sincronizar agora</button></div></div>`:""}
    ${CL.code?"":`<div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn sm" id="clNew" onclick="clNew()">Este é o primeiro aparelho: criar a sincronização</button></div>`}
    <details class="rev" ${CL.code?"":"open"}><summary><span class="mark">⇄</span><span>${CL.code?"Usar outro código":"Já tenho um código (de outro aparelho)"}</span></summary>
      <div class="stack" style="margin-top:10px">${CL.code?`<span class="muted">Código atual: <span class="num">${esc(CL.code)}</span></span>`:""}<input id="clIn" placeholder="tp-xxxx-xxxx-xxxx-xxxx-xxxx-xxxx" autocomplete="off" autocapitalize="off" spellcheck="false"><div class="row" style="gap:8px;flex-wrap:wrap"><button class="btn sm" onclick="clLink($('#clIn').value,true).then(()=>vConfigKeep())">Conectar este aparelho</button>${CL.code?`<button class="btn ghost sm" onclick="clOff()">Desconectar este aparelho</button>`:""}</div></div>
    </details></section>`;
}
async function clNew(){CL.code=newCode();CL.base=0;S.cloud=CL.code;clStore();save();await clPull();vConfigKeep();}
async function clOff(){if((await modal(`<h3>Desconectar este aparelho?</h3><p class="muted">O progresso continua salvo aqui e na nuvem, mas este aparelho para de sincronizar.</p>`,[["cancel","Cancelar","btn ghost"],["ok","Desconectar","btn warn"]])).v!=="ok") return;CL.code=null;CL.base=0;CL.st="off";clStore();clSnap(null);delete S.cloud;saveLocal();vConfigKeep();}
function seg(id,cur,opts){return `<div class="segtabs" role="radiogroup" id="${id}">${opts.map(([v,t])=>`<button role="radio" aria-checked="${v===cur}" aria-selected="${v===cur}" data-v="${v}">${t}</button>`).join("")}</div>`;}
function vConfig(){
  $("#view").innerHTML=`<div class="stack"><h2>Configurações</h2><p class="muted">Ajustes deste app. O progresso é salvo sozinho a cada resposta.</p></div>
  ${cfgSync()}
  <section class="panel stack"><h3>Rotina de estudo</h3>
    <div class="cfgrow"><label for="stH">Início da programação em dias úteis</label><input type="time" id="stH" value="${S.st.h}"></div>
    <div class="cfgrow"><label for="stW">Início no sábado e no domingo</label><input type="time" id="stW" value="${S.st.w}"></div>
    <div class="cfgrow"><label for="goalSel">Meta diária</label><select id="goalSel">${[10,20,30,40,60,80].map(v=>`<option value="${v}" ${v===S.goal?"selected":""}>${v} questões</option>`).join("")}</select></div>
    <p class="muted">A programação de Hoje calcula os horários a partir daqui, com pausa de 10 min a cada bloco de cerca de 50 min.</p></section>
  <section class="panel stack"><h3>Lembrete diário</h3>
    <div class="row" style="gap:10px;flex-wrap:wrap">
      <label class="row" style="gap:8px"><input type="checkbox" id="remOn" ${S.rem.on?"checked":""} style="width:18px;height:18px;accent-color:var(--petrol)"> Avisar às</label>
      <input type="time" id="remH" value="${S.rem.h}">
      <button class="btn ghost sm" onclick="notify('Lembrete de teste','É assim que o aviso diário aparece.')">Testar</button></div>
    <p class="muted">${notifState()} Este aviso aparece com o app aberto.</p>
    <details class="rev"><summary><span class="mark">⏰</span><span>Avisos com o app fechado (agenda do celular)</span></summary>${outsidePanel().replace(/^<section class="panel stack" id="outSec"><h3>Avisos com o app fechado<\/h3>/,'<div class="stack" id="outSec" style="margin-top:10px">').replace(/<\/section>$/,"</div>")}</details></section>
  <section class="panel stack"><h3>Aparência</h3>
    <span class="muted">Tema</span>${seg("thSeg",theme,[["auto","Automático"],["light","Claro"],["dark","Escuro"]])}
    <span class="muted">Tamanho da letra</span>${seg("fzSeg",String(fz),[[".92","92%"],["1","100%"],["1.12","112%"],["1.25","125%"],["1.4","140%"]])}
    <p class="muted">Tema e letra valem só para este aparelho. Dentro do simulado, o botão Aa também muda a letra.</p></section>
  <section class="panel stack" id="syncSec"><h3>Backup manual</h3>
    <p class="synclbl">${esc(syncText())}</p>
    <div class="stack"><p class="muted">Cópia do progresso por código, para guardar ou passar para um aparelho sem internet. A importação substitui o progresso deste aparelho.</p>
      <div class="row"><button class="btn ghost sm" id="bkGen">Gerar código</button><button class="btn ghost sm" id="bkCopy">Copiar</button></div>
      <textarea id="bkTxt" rows="3" placeholder="Cole aqui o código de backup"></textarea>
      <div class="row"><button class="btn sm" id="bkImp">Importar código</button><span class="muted" id="bkMsg"></span></div></div>
    ${instEvt?`<button class="btn" id="instBtn">Instalar o app neste aparelho</button>`:IS_PWA?"":`<a class="btn ghost sm" href="${GH_URL}" target="_blank" rel="noopener">Abrir a versão instalável (GitHub)</a>`}</section>
  ${aboutExam()}
  <p class="muted">Versão 15 · ${QV().length} questões</p>`;
  $("#stH").onchange=e=>{S.st.h=e.target.value||"19:00";save();};
  $("#stW").onchange=e=>{S.st.w=e.target.value||"09:00";save();};
  $("#goalSel").onchange=e=>{S.goal=+e.target.value;save();};
  $("#remOn").onchange=e=>{remEnable(e.target.checked);};
  $("#remH").onchange=e=>{S.rem.h=e.target.value||"19:00";S.rem.last=null;save();};
  document.querySelectorAll("#thSeg button").forEach(b=>b.onclick=()=>{theme=b.dataset.v;try{localStorage.setItem("transpetro26-theme",theme);}catch(e){}applyTheme();vConfigKeep();});
  document.querySelectorAll("#fzSeg button").forEach(b=>b.onclick=()=>{fz=+b.dataset.v;try{localStorage.setItem(FZK,fz);}catch(e){}fzApply();vConfigKeep();});
  const ib=$("#instBtn"); if(ib) ib.onclick=async()=>{if(!instEvt)return;instEvt.prompt();try{await instEvt.userChoice;}catch(e){}instEvt=null;vConfigKeep();};
  syncWire(); clLbl();
}
function vConfigKeep(){if(current!=="config")return;const y=window.scrollY;vConfig();window.scrollTo({top:y});}
VIEWS.config=()=>vConfig();

/* botão de Configurações no cabeçalho (no lugar dos botões de tema e letra) */
(function(){
  const t=$("#themeBtn"); if(!t) return;
  const b=document.createElement("button"); b.className="themebtn cfgbtn"; b.id="cfgBtn"; b.type="button"; b.setAttribute("aria-label","Configurações");
  b.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg><span class="tlbl">Configurações</span>';
  b.onclick=()=>go("config"); t.after(b);
})();

/* ---------- 25. v14: o que saiu de Hoje foi para Progresso ---------- */
function prioPanel(){
  return `<section class="panel stack"><h3>Assuntos de prioridade</h3>
    <p class="muted">Os 5 assuntos específicos com pior acerto até agora (sem questões, contam como médios). Eles recebem 60% do tempo a partir da fase 2.</p>
    <div class="row" style="gap:6px;flex-wrap:wrap">${weakCats(5).map(c=>{const pc=pct(S.stats[c]);return `<button class="chipbtn" onclick="openTopic('${c}')">${esc(CATS[c].n)}${pc!==null?` · ${pc}%`:""}</button>`;}).join("")}</div></section>`;
}
function planMethod(){
  const p=dayPlan(todayK());
  return `<div class="stack inner"><div class="phases">${PHASES.map((f,i)=>`<div class="panel phase ${p.ph===f?"cur":""}"><span class="tag">Fase ${i+1} · ${fmtK(f.a)} a ${fmtK(f.b)}${p.ph===f?" · agora":""}</span><h3>${esc(f.t)}</h3><p class="muted">${esc(f.d)}</p></div>`).join("")}</div>
    <h3>Método de cada dia</h3>
    <ol class="steps">
      <li><b>Aquecimento, 10 min:</b> revisar as erradas (Praticar).</li>
      <li><b>Teoria curta, 30 min:</b> resumo do assunto (Estudar). Feche e escreva de memória 3 a 5 pontos.</li>
      <li><b>Questões, 45 min:</b> 30 min do mesmo assunto e 15 de outro ou de Português e Matemática (Praticar).</li>
      <li><b>Gerais, 25 min:</b> Português ou Matemática, contas à mão.</li>
      <li><b>Caderno de erros, 10 min:</b> motivo de cada erro; o app traz as notas de volta em 1, 3, 7 e 15 dias.</li>
      <li><b>Desafio do dia, 10 min:</b> Jogos. <b>Fechamento, 5 min:</b> Progresso.</li>
    </ol>
    <ul class="res">
      <li>Blocos de 50 minutos com 10 de pausa, longe do celular.</li>
      <li>A Cesgranrio cobra a definição do livro (Chiavenato, Ballou, Viana, Martins e Alt, Dias): na dúvida, fique com a definição clássica.</li>
      <li>Ensine em voz alta o que estudou; onde travar é o que precisa rever.</li>
      <li>Durma de 7 a 8 horas. Na prova, errar não desconta: nunca deixe em branco.</li>
      <li>Se o acerto nas específicas não subir por duas semanas, mude o método naquele assunto, não só as horas.</li>
    </ul></div>`;
}

(function(){const st=document.createElement("style");st.textContent=`
header.band .themebtn#themeBtn{display:none}
.cfgbtn[aria-current="page"]{background:var(--petrol-soft);color:var(--petrol);border-color:var(--petrol)}
@media (min-width:1100px){header.band .themebtn.cfgbtn{order:4;margin-top:auto;align-self:stretch;justify-content:flex-start;padding:0 12px}}
.hoje-top{display:flex;justify-content:space-between;align-items:flex-start;gap:10px}
.hoje-top h2{margin:0}
.clchip{all:unset;cursor:pointer;display:inline-flex;align-items:center;gap:6px;font:600 12px var(--f-body);padding:6px 10px;border-radius:99px;border:1px solid var(--line);color:var(--muted);white-space:nowrap;flex:none}
.clchip i{width:8px;height:8px;border-radius:50%;background:var(--muted)}
.clchip.ok i{background:var(--ok)}.clchip.bad{color:var(--bad)}.clchip.bad i{background:var(--bad)}.clchip.off i{background:var(--amber)}
.clchip:focus-visible{outline:2px solid var(--petrol)}
.tlist{display:flex;flex-direction:column}
.tl{display:grid;grid-template-columns:22px minmax(0,1fr) auto;gap:10px;align-items:start;padding:12px 0;border-top:1px solid var(--line)}
.tl:first-child{border-top:0}
.tl input{width:20px;height:20px;margin:2px 0 0;accent-color:var(--petrol)}
.tl.cur{background:var(--petrol-soft);margin:0 -12px;padding:12px;border-radius:12px;border-top-color:transparent}
.tl.cur+.tl{border-top-color:transparent}
.tl.done .tltitle{color:var(--muted);text-decoration:line-through;text-decoration-thickness:1px}
.tl.done .tlhow{display:none}
.tl.pause{grid-template-columns:auto 1fr;padding:8px 0 8px 32px;font-size:13px}
.tlb{display:flex;flex-direction:column;gap:4px;min-width:0}
.tlt{display:flex;flex-wrap:wrap;gap:6px;align-items:center}
.tltime{font:600 13px var(--f-body);color:var(--ink)}
.tltitle{cursor:pointer;line-height:1.4}
.tlhow{margin:0;font-size:13px;color:var(--muted);line-height:1.4}
.pill.now{background:var(--petrol);color:var(--onpetrol)}
.achip{display:inline-flex;align-items:center;gap:4px;font:600 11px var(--f-body);text-transform:uppercase;letter-spacing:.03em;padding:3px 8px;border-radius:99px;background:var(--bg);border:1px solid var(--line);color:var(--muted)}
.achip.a-est{color:var(--c-port)}.achip.a-pra{color:var(--petrol)}.achip.a-jog{color:var(--c-log)}.achip.a-prog{color:var(--c-fin)}
.metaln{justify-content:space-between;gap:10px;align-items:center}
.metaln .track.sm{flex:0 1 160px}
.areaitem{border-top:1px solid var(--line);padding-top:10px;display:flex;flex-direction:column;gap:6px}
.areaitem:first-child{border-top:0;padding-top:0}
.areaitem p{margin:0}
.cfgrow{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap}
.cfgrow label{flex:1 1 200px}
.cfgrow input,.cfgrow select{flex:0 0 auto;min-width:140px}
@media (max-width:420px){.tl{grid-template-columns:22px minmax(0,1fr)}.tl>.btn{grid-column:2;justify-self:start}}
`;document.head.appendChild(st);})();

/* ---------- 26. v15: edital verticalizado ---------- */
/* Tópicos do edital (PSP 2026.3, Ênfase 1) com os assuntos do app que cobrem cada um */
const EDITAL=[
 ["adm","rh","Recursos Humanos",["rh"],["Recrutamento e seleção","Plano de cargos e carreira","Treinamento, desenvolvimento e educação","Gerenciamento de desempenho e gestão de competências","Relações de trabalho e benefícios"]],
 ["adm","sgi","Sistema de Gestão Integrado",["sgi"],["Princípios de integração de sistemas de gestão","Auditorias internas e ações corretivas/preventivas","Melhoria contínua e gestão de riscos integrada"]],
 ["adm","patr","Administração Patrimonial",["patr"],["Controle e inventário patrimonial","Classificação, avaliação e depreciação de bens","Gestão de ativos"]],
 ["adm","manut","Gestão da Manutenção",["manut"],["Manutenções preventiva, corretiva e preditiva","Planejamento e controle da manutenção"]],
 ["adm","ind","Gestão de Indicadores",["ind"],["Acompanhamento de indicadores","Análise de indicadores para tomada de decisão","Indicadores de desempenho ESG"]],
 ["fin","matfin","Matemática Financeira",["matfin"],["Descontos","Juros simples","Juros compostos","Porcentagem"]],
 ["fin","contab","Registros Contábeis",["contab"],["Princípios e práticas contábeis fundamentais","Obrigações acessórias e controle fiscal"]],
 ["fin","fluxo","Fluxo de Caixa",["fluxo"],["Conceitos e tipos de fluxo de caixa","Elaboração e análise do fluxo direto e indireto","Gestão de entradas e saídas","Integração com orçamento e projeções financeiras"]],
 ["fin","bp","Balanço Patrimonial e DRE",["bp"],["Estrutura do Balanço Patrimonial","Estrutura da DRE","Relação entre balanço, DRE e demais demonstrações"]],
 ["log","log","Logística e Suprimentos",["log"],["Conceitos e aplicações","Sustentabilidade e logística verde","Tecnologias emergentes para logística"]],
 ["log","transp","Modalidades de Transporte",["transp"],["Tipos de transporte","Intermodalidade e multimodalidade","Regulação e legislação do transporte"]],
 ["log","estoq","Gestão de Estoques",["estoq"],["Classificação e métodos de gestão de estoques","Políticas de estoque e níveis de serviço","Tecnologias para automação do controle de estoque"]],
 ["log","armaz","Armazenagem",["armaz"],["Tipos de armazéns e suas funções","Layout e organização do armazém","Tecnologias"]],
 ["log","manus","Manuseio de Materiais e Embalagem",["manus"],["Equipamentos de movimentação","Princípios de movimentação eficiente","Tecnologias de automação","Tipos e funções da embalagem","Sustentabilidade nos materiais","Unitização de cargas","Segurança no transporte"]],
 ["log","compras","Gestão de Compras",["compras"],["Modalidades de compras e orçamento","Planejamento de compras","Lei 13.303/2016 (arts. 28 a 91)","Lei 14.133/2021"]],
 ["log","contr","Gestão de Contratos",["contr"],["Ciclo de vida do contrato","Fiscalização e gestão de contratos","Gestão de riscos e aditivos contratuais","Contratos digitais e integração com sistemas de gestão"]],
 ["info","info1","Fundamentos de Computação",["info"],["Hardware e software","Características de processadores","Sistemas operacionais, utilitários e aplicativos","Manipulação de arquivos no Windows 11"]],
 ["info","info2","Aplicativos Comerciais",["info"],["Edição de textos (Word 2024)","Planilhas (Excel 2024)","Material escrito e multimídia (Office 2024)"]],
 ["info","lgpd","Redes e Segurança",["lgpd","info"],["Internet e intranet","Principais navegadores","Noções de segurança da informação","LGPD (Lei 13.709/2018)"]],
 ["port","port","Língua Portuguesa",["port"],["Compreensão de textos","Ortografia oficial","Mecanismos de coesão textual","Emprego das classes de palavras","Concordância nominal e verbal","Crase","Pontuação","Significação das palavras"]],
 ["mat","mat","Matemática",["mat"],["Conjuntos numéricos","Razão, proporção, regra de três e porcentagem","Funções polinomiais, exponenciais, logarítmicas e trigonométricas","Equações de 1º e 2º grau, exponenciais, logarítmicas e sistemas","Análise combinatória","Probabilidade básica","Estatística básica","Juros simples e compostos","Geometria plana","Geometria espacial"]]
];
const ED_MIN=10;
function edStat(cats){return cats.reduce((s,c)=>{const x=S.stats[c];return x?{c:s.c+x.c,t:s.t+x.t}:s;},{c:0,t:0});}
function edState(e){
  const ed=S.ed||{}, n=e[4].length, lido=e[4].filter((_,j)=>ed[e[1]+"."+j]).length, st=edStat(e[3]);
  return {n,lido,st,trein:st.t>=ED_MIN,ok:st.t>=ED_MIN&&st.c/st.t>=.7,rev:ed[e[1]+".r"]||null};
}
function edToggle(id){S.ed=S.ed||{};if(S.ed[id])delete S.ed[id];else S.ed[id]=todayK();save();const y=window.scrollY;vEdital();window.scrollTo({top:y});}
function vEdital(){
  const all=EDITAL.map(e=>[e,edState(e)]), sub=all.reduce((s,[,x])=>s+x.n,0), lido=all.reduce((s,[,x])=>s+x.lido,0);
  const ok=all.filter(([,x])=>x.ok).length, tr=all.filter(([,x])=>x.trein).length, rv=all.filter(([,x])=>x.rev).length;
  const ico=(on,t)=>`<span class="edck ${on?"on":""}" title="${t}">${on?"✓":""}</span>`;
  const groups=Object.keys(BLOCKS).map(b=>{
    const es=all.filter(([e])=>e[0]===b); if(!es.length) return "";
    return `<h3 class="edb" style="color:var(--c-${b})">${esc(BLOCKS[b])}</h3>`+es.map(([e,x])=>{
      const p=x.st.t?Math.round(x.st.c/x.st.t*100):null, c0=e[3][0];
      return `<details class="rev edt" ${S.fold["ed."+e[1]]?"open":""} ontoggle="S.fold['ed.${e[1]}']=this.open||undefined">
      <summary><span class="edsum"><b>${esc(e[2])}</b><span class="edflags">${ico(x.lido===x.n,"Lido")}${ico(x.trein,"Treinado")}${ico(x.ok,"70% ou mais")}${ico(!!x.rev,"Revisado")}</span></span>
        <span class="muted num edmeta">${x.lido}/${x.n} lidos · ${x.st.t} questões${p!==null?` · ${p}%`:""}</span></summary>
      <div class="stack" style="gap:6px;margin-top:8px">
        ${e[4].map((t,j)=>{const id=e[1]+"."+j;return `<label class="rrow"><input type="checkbox" ${S.ed&&S.ed[id]?"checked":""} onchange="edToggle('${id}')"> <span>${esc(t)}</span></label>`;}).join("")}
        <div class="row" style="gap:6px;flex-wrap:wrap;margin-top:4px">
          <button class="btn ghost sm" onclick="openTopic('${c0}')">Resumo</button>
          <button class="btn ghost sm" onclick="startTrainCat('${c0}')">Treinar</button>
          <button class="btn ${x.rev?"ghost":""} sm" onclick="edToggle('${e[1]}.r')">${x.rev?"Revisado em "+fmtK(x.rev):"Marcar revisado"}</button></div>
      </div></details>`;}).join("");
  }).join("");
  $("#view").innerHTML=segNav("edital",SEG_EST)+`<div class="stack"><h2>Edital verticalizado</h2>
    <p class="muted">Cada tópico do edital com quatro marcas: <b>lido</b> (você marca os subtópicos), <b>treinado</b> (${ED_MIN}+ questões, automático), <b>70%</b> (acerto, automático) e <b>revisado</b> (você marca).</p></div>
    <section class="panel stack"><div class="grid2 edgrid">
      <div class="score"><span class="muted">Subtópicos lidos</span><span class="v num">${lido}/${sub}</span></div>
      <div class="score"><span class="muted">Tópicos treinados</span><span class="v num">${tr}/${all.length}</span></div>
      <div class="score"><span class="muted">Com 70% ou mais</span><span class="v num">${ok}/${all.length}</span></div>
      <div class="score"><span class="muted">Revisados</span><span class="v num">${rv}/${all.length}</span></div></div>
      ${bar("Edital coberto (média das 4 marcas)",lido/sub+tr/all.length+ok/all.length+rv/all.length,4)}</section>
    <div class="stack">${groups}</div>`;
}
VIEWS.edital=()=>vEdital(); TABOF.edital="cont";
SEG_EST.splice(1,0,["edital","Edital"]);

/* ---------- 27. v15: revisão espaçada FSRS ---------- */
/* Modelo FSRS-5 com pesos padrão e retenção desejada de 90% (intervalo = estabilidade).
   Errou = De novo; acertou devagar (mais de 2,5 min) = Difícil; acertou = Bom.
   Questão cujo próximo intervalo passa da véspera da prova sai da fila: já está fixada. */
const FW=[0.40255,1.18385,3.173,15.69105,7.1949,0.5345,1.4604,0.0046,1.54575,0.1192,1.01925,1.9395,0.11,0.29605,2.2698,0.2315,2.9898];
const FF=19/81, FDEC=-0.5, F_END="2026-12-05";
const fClampD=d=>Math.min(10,Math.max(1,d));
const fD0=g=>fClampD(FW[4]-Math.exp(FW[5]*(g-1))+1);
function fNextD(d,g){const dd=d-FW[6]*(g-3)*(10-d)/9;return fClampD(FW[7]*fD0(4)+(1-FW[7])*dd);}
function fRet(t,s){return Math.pow(1+FF*t/s,FDEC);}
function fSucc(d,s,r,g){return s*(1+Math.exp(FW[8])*(11-d)*Math.pow(s,-FW[9])*(Math.exp(FW[10]*(1-r))-1)*(g===2?FW[15]:1)*(g===4?FW[16]:1));}
function fFail(d,s,r){return Math.min(s,FW[11]*Math.pow(d,-FW[12])*(Math.pow(s+1,FW[13])-1)*Math.exp(FW[14]*(1-r)));}
function srsMig(e){if(e&&e.s==null){e.s=[1,3,7,15][e.b|0]||1;e.dif=5;delete e.b;}return e;}
const kDiff=(a,b)=>Math.round((kDate(a)-kDate(b))/864e5);
srsUpdate=function(qi,ok,sec){
  const t=todayK(); S.qerr=S.qerr||{};
  if(!ok) S.qerr[qi]=(S.qerr[qi]||0)+1;
  const e=srsMig(S.srs[qi]);
  if(!e){if(!ok) S.srs[qi]={s:FW[0],dif:fD0(1),d:addDaysK(1),l:t};return;}
  if(ok&&e.d>t) return;
  const g=!ok?1:(sec>150?2:3), el=e.l?Math.max(0,kDiff(t,e.l)):e.s, r=fRet(el,e.s);
  e.s=ok?fSucc(e.dif,e.s,r,g):fFail(e.dif,e.s,r); e.dif=fNextD(e.dif,g); e.l=t;
  e.s=Math.round(e.s*100)/100; e.dif=Math.round(e.dif*100)/100;
  const iv=Math.max(1,Math.round(e.s)), due=addDaysK(iv);
  if(ok&&due>F_END) delete S.srs[qi]; else e.d=due;
};
Object.values(S.srs).forEach(srsMig);
/* previsão: quantas revisões vencem em cada um dos próximos dias */
function srsForecast(n){const out=[];for(let i=0;i<n;i++){const k=addDaysK(i);out.push([k,Object.values(S.srs).filter(x=>i?x.d===k:x.d<=k).length]);}return out;}

/* ---------- 28. v15: estatísticas detalhadas (estilo TEC/QConcursos) ---------- */
function espProj(h){const B=h.byB||{};let c=0,t=0;ESP_B.forEach(b=>{if(B[b]){c+=B[b].c;t+=B[b].t;}});return t>=5?{v:c/t*40,t}:null;}
function evoChart(){
  const pts=S.hist.slice().reverse().map(h=>[h,espProj(h)]).filter(x=>x[1]).slice(-20);
  if(pts.length<2) return `<p class="muted">Faça pelo menos 2 simulados ou treinos com questões específicas para ver a evolução.</p>`;
  const W=320,H=160,L=28,R=8,T=8,Bm=22,x=i=>L+(W-L-R)*(pts.length===1?0:i/(pts.length-1)),y=v=>T+(H-T-Bm)*(1-v/40);
  const path=pts.map(([,p],i)=>(i?"L":"M")+x(i).toFixed(1)+" "+y(p.v).toFixed(1)).join(" ");
  const last=pts[pts.length-1][1].v;
  return `<svg class="evo" viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolução nas específicas, projetada para 40 questões. Último: ${Math.round(last)} de 40">
    <rect x="${L}" y="${y(32)}" width="${W-L-R}" height="${y(28)-y(32)}" class="evoband"/>
    <line x1="${L}" x2="${W-R}" y1="${y(20)}" y2="${y(20)}" class="evocut"/>
    ${[0,10,20,30,40].map(v=>`<text x="${L-6}" y="${y(v)+4}" text-anchor="end" class="evot">${v}</text>`).join("")}
    <text x="${L+4}" y="${y(20)+13}" class="evot">corte 20</text>
    <text x="${L+4}" y="${y(32)-4}" class="evot">meta 28–32</text>
    <path d="${path}" class="evol"/>
    ${pts.map(([h,p],i)=>`<circle cx="${x(i).toFixed(1)}" cy="${y(p.v).toFixed(1)}" r="3.5" class="evop"><title>${esc(h.date)} · ${esc(h.label)}: ${Math.round(p.v)}/40</title></circle>`).join("")}
  </svg><p class="muted num">Último: ${Math.round(last)}/40 projetado · ${pts.length} registros. A faixa clara é a meta; a linha tracejada, o corte.</p>`;
}
function topErr(n){return Object.entries(S.qerr||{}).filter(([i,v])=>v>=2&&Q[i]&&!Q[i].hid).sort((a,b)=>b[1]-a[1]).slice(0,n).map(([i,v])=>[+i,v]);}
function catTable(){
  const rows=Object.keys(CATS).map(c=>{const s=S.stats[c]||{c:0,t:0},ct=S.ct[c];return [c,s,ct&&ct.n?Math.round(ct.s/ct.n):null];}).filter(r=>r[1].t);
  if(!rows.length) return `<p class="muted">Ainda sem questões respondidas.</p>`;
  rows.sort((a,b)=>a[1].c/a[1].t-b[1].c/b[1].t);
  return `<div class="cattbl"><div class="ctr cth"><span>Assunto</span><span>Acerto</span><span>Questões</span><span>Tempo</span></div>${rows.map(([c,s,tm])=>{const p=Math.round(s.c/s.t*100);
    return `<div class="ctr"><button class="linkbtn" onclick="startTrainCat('${c}')">${esc(CATS[c].n)}</button><span class="num ${p<50?"bad":p<70?"mid":"ok"}">${p}%</span><span class="num">${s.c}/${s.t}</span><span class="num ${tm>180?"bad":""}">${tm===null?"–":tm>=60?Math.floor(tm/60)+"m"+String(tm%60).padStart(2,"0"):tm+"s"}</span></div>`;}).join("")}</div>
    <p class="muted">Ordenado do pior para o melhor. Tempo médio por questão; acima de 3 min fica em vermelho (na prova são cerca de 4 min por questão, contando a marcação do cartão). Toque no assunto para treinar.</p>`;
}
function startTopErr(){const ids=topErr(20).map(x=>x[0]);if(!ids.length)return;makeQuiz(shuffle(ids),"train","Treino: questões que você mais erra",0);}
function statsPanel(){
  const te=topErr(8), fc=srsForecast(7);
  return `<section class="panel stack" id="evoSec"><h3>Evolução nas específicas</h3>${evoChart()}</section>
  <section class="panel stack"><h3>Desempenho por assunto</h3>${catTable()}</section>
  <section class="panel stack"><div class="row" style="justify-content:space-between"><h3>Questões que você mais erra</h3>${te.length?`<button class="btn sm" onclick="startTopErr()">Treinar estas</button>`:""}</div>
    ${te.length?te.map(([i,v])=>`<div class="repitem"><span class="pill bad num">${v}×</span> <span class="muted">${esc(CATS[Q[i].c].n)}</span><p style="margin:4px 0 0">${esc(Q[i][1].length>140?Q[i][1].slice(0,140)+"…":Q[i][1])}</p></div>`).join(""):`<p class="muted">Aparecem aqui as questões erradas 2 vezes ou mais.</p>`}</section>
  <section class="panel stack"><h3>Revisões dos próximos 7 dias</h3><div class="fcast">${fc.map(([k,n],i)=>`<div class="fcd"><span class="num fcn" style="height:${Math.min(60,6+n*3)}px">${n}</span><span class="muted num">${i?fmtK(k):"hoje"}</span></div>`).join("")}</div>
    <p class="muted">Revisão espaçada FSRS: cada questão errada volta no dia em que a chance de você esquecer chega a 10%. Acertou rápido, o intervalo cresce; acertou devagar, cresce menos; errou, volta amanhã.</p></section>`;
}
const _vStats15=vStats;
vStats=function(){_vStats15();const w=$("#view .wkpanel");(w||$("#view h2")).insertAdjacentHTML("afterend",statsPanel());};

/* ---------- 29. v15: tutor com IA (só no link do claude.ai) ---------- */
let TUTOR=null;
if(IN_CLAUDE) window.claude.use("sample").then(s=>{TUTOR=s;if(s&&current==="quiz")vQuiz();}).catch(()=>{});
const tutorOut={};
function qBrief(qi,ord){const q=Q[qi];return `Questão (${CATS[q.c].n}, banca Cesgranrio):\n${q[1]}\n\n${ord.map((oi,p)=>L[p]+") "+q[2][oi]).join("\n")}\n\nGabarito: ${L[ord.indexOf(0)]}\nComentário do app: ${q[3]}`;}
async function tutorAsk(kind){
  if(!TUTOR||!quiz) return;
  const k=quiz.i, qi=quiz.ids[k], ord=quiz.order[k], a=quiz.ans[k], key=qi+":"+kind, box=$("#tutorOut");
  const mine=a!==null?L[a]:null, base=qBrief(qi,ord);
  tutorOut[key]={busy:true,text:"Pensando..."}; if(box) box.innerHTML=`<p class="muted">Pensando...</p>`;
  try{
    if(kind==="why"){
      const p=`Você é um professor de concursos explicando para um aluno de nível médio, sem base em contabilidade, que estuda para a Transpetro 2026 (Cesgranrio). Responda em português do Brasil, em no máximo 120 palavras, sem markdown, frases curtas.\n\n${base}\n\n${mine&&mine!==L[ord.indexOf(0)]?`O aluno marcou ${mine}. Explique por que ${mine} está errada e por que o gabarito está certo, e dê uma dica para não cair nisso de novo.`:`Explique de outro jeito por que o gabarito está certo e por que cada uma das outras está errada, em uma linha cada.`}`;
      const {text}=await TUTOR(p,{modelTier:"quick",onText:({text})=>{const b=$("#tutorOut");if(b&&quiz&&quiz.i===k)b.innerHTML=`<p class="tutxt">${esc(text)}</p>`;}});
      tutorOut[key]={text};
    }else{
      const p=`Crie UMA questão inédita de múltipla escolha no estilo Cesgranrio, nível médio, sobre o mesmo assunto e com dificuldade parecida com esta:\n\n${base}\n\nResponda só com JSON: {"enunciado": string, "alternativas": [5 strings, a primeira é a correta], "explicacao": string curta}. Português do Brasil, sem markdown, sem letras nas alternativas.`;
      const o=await TUTOR.json(p,{modelTier:"default"});
      if(!o||!o.enunciado||!Array.isArray(o.alternativas)||o.alternativas.length<4) throw {code:"bad"};
      tutorOut[key]={gen:{e:String(o.enunciado),alts:o.alternativas.slice(0,5).map(String),x:String(o.explicacao||""),ord:shuffle(o.alternativas.slice(0,5).map((_,i)=>i)),a:null}};
    }
  }catch(e){tutorOut[key]={text:e&&e.code==="not_granted"?"Sem permissão para usar o Claude nesta página.":e&&e.code==="rate_limited"?"Muitos pedidos seguidos. Tente de novo em um minuto.":"Não deu para responder agora. Tente de novo."};}
  if(current==="quiz"&&quiz&&quiz.i===k) tutorRender();
}
function tutorRender(){
  const box=$("#tutorOut"); if(!box||!quiz) return;
  const qi=quiz.ids[quiz.i], o=tutorOut[qi+":why"], g=tutorOut[qi+":sim"];
  let h=o&&o.text?`<p class="tutxt">${esc(o.text)}</p>`:"";
  if(g&&g.gen){const G=g.gen,ci=G.ord.indexOf(0);
    h+=`<div class="stack tutq"><b>Questão parecida (gerada pelo Claude)</b><p>${esc(G.e)}</p>${G.ord.map((oi,p)=>`<button class="opt ${G.a!==null?(oi===0?"right":p===G.a?"wrong":""):""}" onclick="tutorPick(${p})"><span class="l">${L[p]}</span><span>${esc(G.alts[oi])}</span></button>`).join("")}
    ${G.a!==null?`<div class="expl"><strong>${G.ord[G.a]===0?"Correto.":"Resposta: "+L[ci]+"."}</strong> ${esc(G.x)}</div>`:""}</div>`;}
  else if(g&&g.text) h+=`<p class="tutxt">${esc(g.text)}</p>`;
  box.innerHTML=h;
}
function tutorPick(p){const g=tutorOut[quiz.ids[quiz.i]+":sim"];if(!g||!g.gen||g.gen.a!==null)return;g.gen.a=p;tutorRender();}
function tutorPanel(){
  if(!TUTOR||!quiz||quiz.mode!=="train") return "";
  const k=quiz.i, a=quiz.ans[k]; if(a===null) return "";
  const wrong=quiz.order[k][a]!==0;
  return `<section class="panel stack tutor"><div class="row" style="gap:6px;flex-wrap:wrap"><span class="muted">Professor IA</span>
    <button class="btn ghost sm" onclick="tutorAsk('why')">${wrong?`Por que não a letra ${L[a]}?`:"Explicar de outro jeito"}</button>
    <button class="btn ghost sm" onclick="tutorAsk('sim')">Outra parecida</button></div><div id="tutorOut"></div></section>`;
}

/* ---------- 30. v15: deslizar entre questões e atalhos do ícone ---------- */
const _vQuiz15=vQuiz;
vQuiz=function(){_vQuiz15();const art=$("#view article.panel");if(art){const t=tutorPanel();if(t){art.insertAdjacentHTML("afterend",t);tutorRender();}}};
(function(){
  let x0=null,y0=0,t0=0;
  document.addEventListener("touchstart",e=>{if(current!=="quiz"||e.touches.length!==1||(e.target.closest&&e.target.closest("input,textarea,select,.qgrid,dialog"))){x0=null;return;}x0=e.touches[0].clientX;y0=e.touches[0].clientY;t0=Date.now();},{passive:true});
  document.addEventListener("touchend",e=>{if(x0===null||current!=="quiz"||!quiz)return;const t=e.changedTouches[0],dx=t.clientX-x0,dy=t.clientY-y0;x0=null;
    if(Math.abs(dx)>70&&Math.abs(dy)<Math.abs(dx)*.5&&Date.now()-t0<700){const n=quiz.i+(dx<0?1:-1);if(n>=0&&n<quiz.ids.length)nav(dx<0?1:-1);}},{passive:true});
})();
function runShortcut(){
  let a=null;try{a=new URLSearchParams(location.search).get("a");}catch(e){}
  if(!a) return;
  try{history.replaceState(null,"",location.pathname+location.hash);}catch(e){}
  if(a==="wrong") startWrong(); else if(a==="daily") startDaily(); else if(a==="sim") startExam("mini"); else if(a==="afc") go("afc");
}
setTimeout(runShortcut,0);

/* ---------- 31. v15: flashcards em áudio (mãos livres) ---------- */
let afc=null;
function afcSpeak(t,rate){return new Promise(res=>{if(!TTS_OK){res();return;}const vs=speechSynthesis.getVoices(),v=vs.find(v=>/pt[-_]BR/i.test(v.lang))||vs.find(v=>/^pt/i.test(v.lang));
  const u=new SpeechSynthesisUtterance(t);u.lang="pt-BR";if(v)u.voice=v;u.rate=rate;u.onend=u.onerror=()=>res();speechSynthesis.speak(u);});}
const afcWait=ms=>new Promise(r=>{afc.timer=setTimeout(r,ms);});
async function afcLoop(run){
  while(afc&&afc.run===run&&afc.i<afc.ids.length){
    const f=FC[afc.ids[afc.i]]; afc.side=0; afcDraw();
    await afcSpeak(f[1],afc.rate); if(!afc||afc.run!==run) return;
    await afcWait(afc.pause*1000); if(!afc||afc.run!==run) return;
    afc.side=1; afcDraw(); await afcSpeak(f[2],afc.rate); if(!afc||afc.run!==run) return;
    await afcWait(1500); if(!afc||afc.run!==run) return;
    afc.i++; S.gm.afcN=(S.gm.afcN||0)+1;
  }
  if(afc&&afc.run===run){afc.play=false;afcDraw();save();}
}
function afcPlay(){if(!afc)return;if(afc.play){afcPause();return;}afc.play=true;afc.run=(afc.run||0)+1;if(afc.i>=afc.ids.length)afc.i=0;afcLoop(afc.run);afcDraw();}
function afcPause(){if(!afc)return;afc.play=false;afc.run++;clearTimeout(afc.timer);try{speechSynthesis.cancel();}catch(e){}afcDraw();}
function afcSkip(d){if(!afc)return;const was=afc.play;afcPause();afc.i=Math.min(afc.ids.length-1,Math.max(0,afc.i+d));afc.side=0;if(was)afcPlay();else afcDraw();}
function afcStart(){
  const sel=$("#afcSel").value; S.gm.lastAfc=sel; S.gm.afcRate=+$("#afcRate").value; S.gm.afcPause=+$("#afcPause").value; save();
  const ids=shuffle(FC.map((f,i)=>i).filter(i=>inSel(sel,FC[i][0])));
  ids.sort((a,b)=>(S.fcl[FC[a][1]]||0)-(S.fcl[FC[b][1]]||0));
  afc={ids,i:0,side:0,play:false,rate:S.gm.afcRate,pause:S.gm.afcPause,run:0}; afcPlay();
}
function afcDraw(){
  if(current!=="afc") return;
  const box=$("#afcBox"); if(!box) return;
  if(!afc){box.innerHTML="";return;}
  const f=FC[afc.ids[afc.i]];
  box.innerHTML=`<div class="panel stack afccard"><span class="muted num">Cartão ${afc.i+1} de ${afc.ids.length} · ${esc(CATS[f[0]].n)}</span>
    <p class="afcf">${esc(f[1])}</p><p class="afcb ${afc.side?"on":""}">${afc.side?esc(f[2]):"…"}</p></div>
    <div class="row" style="gap:8px;justify-content:center"><button class="btn ghost" onclick="afcSkip(-1)" aria-label="Anterior">⏮</button>
    <button class="btn" onclick="afcPlay()">${afc.play?"Pausar":"Tocar"}</button><button class="btn ghost" onclick="afcSkip(1)" aria-label="Próximo">⏭</button></div>`;
  if("mediaSession" in navigator) try{navigator.mediaSession.metadata=new MediaMetadata({title:f[1],artist:"Flashcards · Transpetro 2026"});
    navigator.mediaSession.setActionHandler("play",afcPlay);navigator.mediaSession.setActionHandler("pause",afcPause);
    navigator.mediaSession.setActionHandler("nexttrack",()=>afcSkip(1));navigator.mediaSession.setActionHandler("previoustrack",()=>afcSkip(-1));}catch(e){}
}
function vAfc(){
  const g=S.gm;
  $("#view").innerHTML=`<div class="row"><button class="btn ghost sm" onclick="afcPause();go('jogos')">← Jogos</button></div>
  <div class="stack"><h2>Flashcards em áudio</h2><p class="muted">O app lê o conceito, espera você responder em voz alta ou de cabeça e lê a resposta. Bom para o ônibus, a caminhada ou a louça. Os cartões que você ainda não domina vêm primeiro.</p></div>
  ${TTS_OK?`<section class="panel stack"><div class="cfgrow"><label for="afcSel">Baralho</label>${gameSel("afcSel",g.lastAfc||"esp")}</div>
    <div class="cfgrow"><label for="afcRate">Velocidade</label><select id="afcRate">${[[.8,"Devagar"],[1,"Normal"],[1.2,"Rápida"],[1.4,"Muito rápida"]].map(([v,t])=>`<option value="${v}" ${v===(g.afcRate||1)?"selected":""}>${t}</option>`).join("")}</select></div>
    <div class="cfgrow"><label for="afcPause">Tempo para pensar</label><select id="afcPause">${[3,5,8,12].map(v=>`<option value="${v}" ${v===(g.afcPause||5)?"selected":""}>${v} segundos</option>`).join("")}</select></div>
    <button class="btn" onclick="afcStart()">${afc?"Recomeçar":"Começar"}</button></section><div id="afcBox" class="stack"></div>`
  :`<p class="panel">Este navegador não tem leitura em voz alta. Tente pelo Chrome ou pelo Safari.</p>`}`;
  afcDraw();
}
VIEWS.afc=()=>vAfc(); TABOF.afc="jogos";
const _vJogos15=vJogos;
vJogos=function(){_vJogos15();const g=$("#view .grid2");if(!g||!TTS_OK)return;
  g.insertAdjacentHTML("beforeend",`<div class="panel mode"><span class="tag">Mãos livres</span><h3>Flashcards em áudio</h3><p class="muted">Ouça conceito, pausa e resposta, sem olhar a tela. Funciona com fone e com a tela bloqueada em muitos celulares.</p><button class="btn" onclick="go('afc')">Ouvir</button>${S.gm.afcN?`<span class="muted num">${S.gm.afcN} cartões ouvidos</span>`:""}</div>`);};

/* ---------- 32. v15: notificações push com o app fechado (versão do GitHub) ---------- */
const VAPID_PUB="BKi1rhDT9AgD0pBxEUEAbBgg3QQ7BsTD1T_G3ZMsg6oBK4SjLUHcgeSrwF7Ol1g4wT8i9Cj5kPZ3o-10VSsgSew";
const PUSH_K="transpetro26-push";
const PUSH_OK=!IN_CLAUDE&&location.protocol==="https:"&&"serviceWorker" in navigator&&"PushManager" in window&&"Notification" in window;
function pushGet(){try{return JSON.parse(localStorage.getItem(PUSH_K)||"null");}catch(e){return null;}}
function pushSet(o){try{o?localStorage.setItem(PUSH_K,JSON.stringify(o)):localStorage.removeItem(PUSH_K);}catch(e){}}
function pushPlan(){
  const out=[], now=Date.now(), t0=todayK();
  for(let i=0;i<14;i++){
    const d=new Date(); d.setDate(d.getDate()+i); const k=dkey(d); if(k>"2026-12-06") break;
    if(k===t0&&(S.days[k]||0)>0) continue;
    const we=d.getDay()===0||d.getDay()===6, hm=k==="2026-12-06"?"06:30":(S.rem&&S.rem.on?S.rem.h:(we?S.st.w:S.st.h))||"19:00";
    const [h,m]=hm.split(":").map(Number); d.setHours(h,m,0,0); if(d.getTime()<=now) continue;
    const a=AG[k], due=Object.values(S.srs).filter(x=>x.d<=k).length;
    if(k==="2026-12-06") out.push({t:d.getTime(),ti:"Dia da prova",b:"Boa prova! Documento com foto, caneta preta de corpo transparente e calma: comece pelo que você domina.",u:"./"});
    else out.push({t:d.getTime(),ti:"Hora de estudar"+(a&&a[0]?" · "+a[0]:""),b:(due?due+(due===1?" questão para revisar":" questões para revisar")+" hoje. ":"")+"Toque para abrir a programação de hoje.",u:due?"./?a=wrong":"./"});
  }
  return out;
}
const b64u=s=>{const p="=".repeat((4-s.length%4)%4),b=atob((s+p).replace(/-/g,"+").replace(/_/g,"/"));return Uint8Array.from(b,c=>c.charCodeAt(0));};
async function pushOn(){
  const msg=$("#pushMsg");
  try{
    const perm=await Notification.requestPermission();
    if(perm!=="granted"){if(msg)msg.textContent="As notificações foram bloqueadas. Libere nas configurações do navegador para este site.";return;}
    const reg=await navigator.serviceWorker.ready;
    const sub=(await reg.pushManager.getSubscription())||await reg.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:b64u(VAPID_PUB)});
    pushSet({sub:sub.toJSON(),h:""}); await pushSync(true);
    if(msg)msg.textContent="Pronto. Os avisos chegam mesmo com o app fechado.";
  }catch(e){if(msg)msg.textContent="Não deu para ativar: "+(e.message||e);}
  vConfigKeep();
}
async function pushOff(){
  const o=pushGet(); pushSet(null);
  try{if(o) await rpc("tp_push",{p_sub:o.sub,p_plan:[]});const reg=await navigator.serviceWorker.ready,s=await reg.pushManager.getSubscription();if(s)await s.unsubscribe();}catch(e){}
  vConfigKeep();
}
let pushT=null;
async function pushSync(now){
  const o=pushGet(); if(!o||!PUSH_OK) return;
  const plan=pushPlan(), h=JSON.stringify(plan);
  if(!now&&h===o.h) return;
  try{const r=await rpc("tp_push",{p_sub:o.sub,p_plan:plan});if(r){o.h=h;o.at=Date.now();pushSet(o);}}catch(e){}
}
if(PUSH_OK){SAVE_HOOKS.push(()=>{clearTimeout(pushT);pushT=setTimeout(()=>pushSync(),8000);});setTimeout(()=>pushSync(),4000);}
function pushPanel(){
  const o=pushGet();
  if(!PUSH_OK) return `<section class="panel stack"><h3>Notificações com o app fechado</h3><p class="muted">${IN_CLAUDE?"Aqui no claude.ai o navegador não permite avisos com a página fechada. Ative na versão instalável (GitHub): ela avisa no horário de estudo com o assunto do dia e as revisões pendentes.":"Este navegador não aceita notificações push. No iPhone, instale o app na tela de início (Compartilhar → Adicionar à Tela de Início) e abra por lá."}</p>${IN_CLAUDE?`<a class="btn ghost sm" href="${GH_URL}" target="_blank" rel="noopener">Abrir a versão instalável</a>`:""}</section>`;
  const nx=pushPlan()[0];
  return `<section class="panel stack"><h3>Notificações com o app fechado</h3>
    <p class="muted">Aviso no horário de estudo (ou no horário do lembrete, se ligado) com o assunto do dia e quantas revisões vencem. Os horários são atualizados sempre que você abre o app; ele agenda as próximas 2 semanas.</p>
    ${o?`<p><span class="pill ok">Ativado</span> ${nx?`Próximo aviso: ${new Date(nx.t).toLocaleString("pt-BR",{weekday:"short",day:"2-digit",month:"2-digit",hour:"2-digit",minute:"2-digit"})}.`:""}</p><div class="row"><button class="btn ghost sm" onclick="pushOff()">Desativar</button></div>`
      :`<div class="row"><button class="btn sm" onclick="pushOn()">Ativar notificações</button></div>`}
    <p class="muted" id="pushMsg"></p></section>`;
}
const _vConfig15=vConfig;
vConfig=function(){_vConfig15();const s=$("#syncSec");if(s)s.insertAdjacentHTML("beforebegin",pushPanel());};

/* ---------- 33. v15: estilos ---------- */
(function(){const st=document.createElement("style");st.textContent=`
.edb{margin:14px 0 2px}
.edt summary{display:flex;flex-direction:column;align-items:stretch;gap:4px}
.edsum{display:flex;justify-content:space-between;gap:8px;align-items:center}
.edflags{display:flex;gap:4px;flex:none}
.edck{width:20px;height:20px;border-radius:6px;border:1.5px solid var(--line);display:inline-grid;place-items:center;font-size:12px;font-weight:700;color:#fff}
.edck.on{background:var(--ok);border-color:var(--ok)}
.edmeta{font-size:12px}
#view .edgrid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:8px}#view .edgrid .score .v{font-size:24px}
@media (min-width:720px){.edgrid{grid-template-columns:repeat(4,minmax(0,1fr))}}
svg.evo{width:100%;height:auto;max-width:560px;display:block}
.evoband{fill:var(--ok);opacity:.14}.evocut{stroke:var(--bad);stroke-dasharray:4 4;stroke-width:1.5}
.evot{font:11px var(--f-body);fill:var(--muted)}.evol{fill:none;stroke:var(--petrol);stroke-width:2.5;stroke-linejoin:round}.evop{fill:var(--petrol)}
.cattbl{display:flex;flex-direction:column;gap:2px}
.ctr{display:grid;grid-template-columns:minmax(0,1fr) 52px 60px 52px;gap:6px;align-items:center;padding:4px 0;border-bottom:1px solid var(--line);font-size:14px}
.ctr .linkbtn{white-space:normal;padding:2px 0;font-size:14px}
.ctr>span{text-align:right}.cth{font-size:12px;color:var(--muted)}.cth>span:first-child{text-align:left}
.ctr .bad{color:var(--bad)}.ctr .mid{color:var(--warn,#b7791f)}.ctr .ok{color:var(--ok)}
.fcast{display:flex;gap:6px;align-items:flex-end;min-height:80px}
.fcd{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;justify-content:flex-end}
.fcn{background:var(--petrol-soft);color:var(--petrol);width:100%;display:grid;place-items:center;border-radius:6px;font-size:12px;font-weight:700;min-height:20px}
.tutor .tutxt{white-space:pre-wrap;margin:0}
.tutq{border-top:1px solid var(--line);padding-top:10px}
.afccard{text-align:center;min-height:180px;justify-content:center}
.afcf{font:600 22px/1.3 var(--f-head,var(--f-body));margin:0}
.afcb{font-size:18px;color:var(--muted);margin:0}.afcb.on{color:var(--ink)}
`;document.head.appendChild(st);})();

if("serviceWorker" in navigator&&location.protocol==="https:"){navigator.serviceWorker.register("sw.js").catch(()=>{});}
go("guia");
