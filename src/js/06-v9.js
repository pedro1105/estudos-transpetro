/* ===== v9: conteúdo novo ===== */
/* explicações completas para as questões de cálculo */

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
["info","No Excel, a fórmula =CONT.SES(A:A;\"Compras\";B:B;\">1000\") conta",["as linhas em que A é Compras e B é maior que 1.000","as linhas em que A é Compras ou B é maior que 1.000","a soma dos valores de B maiores que 1.000 em Compras","as células da coluna A que contêm a palavra Compras","as células da coluna B com valor maior que 1.000"],"CONT.SES conta as linhas que atendem a todos os critérios ao mesmo tempo (lógica do “e”, não do “ou”). Para somar valores com vários critérios, use SOMASES."],
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
 ["13.303","Art. 71, parágrafo único","É vedado o contrato por prazo ___.","indeterminado",["superior a 5 anos","inferior a 1 ano","determinado"]],
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

