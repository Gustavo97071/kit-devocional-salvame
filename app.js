/* ==========================================================================
   APP DEVOCIONAL "SALVAI-ME MÃE SANTÍSSIMA" - CORE JS
   ========================================================================== */

const app = {
    // Current active states
    currentEbookDay: 0,
    currentNovenaDay: 0,
    currentBeadIndex: 0,
    currentMysteryType: 'gozosos',
    calendarMonth: 9, // October (0-indexed: 9 = October)
    calendarYear: 2026,
    
    // Ebook Sample Data
        ebookDays: [
        {
            day: "Dia 1",
            title: "O Encontro da Imagem",
            leftContent: `
            <p>No ano de 1717, três pescadores — Filipe Pedroso, Domingos Garcia e João Alves — navegavam pelo Rio Paraíba do Sul. A pescaria estava muito escassa, e eles já desanimavam de conseguir peixes para o banquete do governador local.</p>
            <p>Ao lançarem as redes no Porto de Itaguaçu, pescaram primeiro o corpo de uma pequena imagem de terracota. Logo após, ao lançarem novamente as redes no mesmo local, resgataram a cabeça da mesma imagem.</p>
            <p>Unindo as duas partes, viram que se tratava da Imagem da Imaculada Conceição. Imediatamente, ao lançarem novamente suas redes, elas encheram-se de peixes em abundância, no primeiro milagre da Virgem Aparecida.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Deus se manifesta nas situações de escassez e cansaço. As redes vazias representam nossos corações desanimados; a Imagem quebrada e recolhida nos lembra que a Mãe Santíssima une nossas vidas fragmentadas e nos restaura.</p>
            <p><strong>Propósito:</strong> Hoje, reze um mistério do terço oferecendo pelas suas maiores dificuldades de trabalho ou finanças familiares, confiando que a providência divina não faltará.</p>
            <div class="verse">
                "Fazei tudo o que Ele vos disser." (João 2,5)
            </div>
        `
        },
        {
            day: "Dia 2",
            title: "O Milagre das Velas",
            leftContent: `
            <p>Após o resgate no rio, a imagem de Nossa Senhora Aparecida permaneceu na capela da humilde residência do pescador Filipe Pedroso. A vizinhança reunia-se todos os sábados à noite para rezar o Santo Terço em comunidade.</p>
            <p>Em uma noite de oração fervorosa, as duas velas de cera que iluminavam a imagem da Virgem apagaram-se repentinamente, sem que houvesse qualquer brisa ou janela aberta no aposento.</p>
            <p>Uma devota adiantou-se para reacendê-las, mas, antes de tocá-las com o fogo, as duas chamas voltaram a arder sozinhas espontaneamente na presença de todas as testemunhas.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>A fé é a chama que ilumina nossa família. Mesmo que os ventos do mundo tentem apagar nossa esperança e devoção diária, Maria intercede junto a Deus para reacender a luz do Espírito Santo em nossos lares.</p>
            <p><strong>Propósito:</strong> Reúna sua família ou tire um momento a sós no silêncio à noite para acender uma vela e rezar uma Ave-Maria pedindo paz e harmonia para seus familiares e parentes.</p>
            <div class="verse">
                "O povo que andava nas trevas viu uma grande luz." (Isaías 9,2)
            </div>
        `
        },
        {
            day: "Dia 3",
            title: "A Libertação de Zacarias",
            leftContent: `
            <p>Por volta de 1850, um escravizado chamado Zacarias, que havia fugido de uma fazenda, foi capturado por um feitor de escravos. Ao ser levado de volta acorrentado, ele passou em frente à antiga capela de Nossa Senhora Aparecida.</p>
            <p>Zacarias implorou para fazer uma breve prece diante do altar. Ao se ajoelhar e começar a rezar fervorosamente com profunda contrição, as pesadas correntes de ferro caíram de seus braços e pescoço espontaneamente.</p>
            <p>O feitor, profundamente tocado pelo prodígio divino, converteu-se à devoção mariana e comprou a liberdade definitiva de Zacarias, concedendo-lhe sua carta de alforria.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Nossa Senhora nos liberta de todas as algemas da alma: o pecado, o rancor, a ansiedade e o desespero. Diante do olhar materno de Maria, nenhuma corrente de maldade consegue se manter de pé em nossa vida.</p>
            <p><strong>Propósito:</strong> Faça um exame de consciência hoje e identifique qual hábito nocivo, mágoa ou vício está prendendo sua liberdade espiritual. Entregue essa amarra à intercessão de Maria.</p>
            <div class="verse">
                "Se o Filho vos libertar, sereis verdadeiramente livres." (João 8,36)
            </div>
        `
        },
        {
            day: "Dia 4",
            title: "O Cavaleiro sem Fé",
            leftContent: `
            <p>Um orgulhoso cavaleiro de Cuiabá, de passagem por Aparecida, desdenhou da fé dos devotos que visitavam a capela da santa. Para provar que aquela devoção era uma farsa, ele decidiu entrar na igreja montado em seu cavalo.</p>
            <p>Entretanto, ao tentar cruzar o portal do templo sagrado, as patas dianteiras de seu animal colaram-se milagrosamente na pedra da escadaria, impedindo qualquer movimento.</p>
            <p>O cavaleiro, tomado de profundo temor de Deus e arrependimento, desmontou, ajoelhou-se e pediu perdão por sua audácia e falta de respeito ao sagrado, tornando-se um grande propagador do milagre.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>A arrogância tenta pisar nos mistérios divinos, mas a graça de Deus estabelece limites claros. O respeito ao templo e à fé simples das pessoas é agradável aos olhos do Senhor.</p>
            <p><strong>Propósito:</strong> Hoje, faça um ato de humildade: evite julgar ou criticar a fé de qualquer pessoa, e peça a Maria que remova a soberba do seu próprio coração.</p>
            <div class="verse">
                "Deus resiste aos soberbos, mas dá graça aos humildes." (Tiago 4,6)
            </div>
        `
        },
        {
            day: "Dia 5",
            title: "A Cura da Menina Cega",
            leftContent: `
            <p>Uma menina cega de nascença, moradora de Jaboticabal, ouviu falar dos milagres de Nossa Senhora Aparecida e implorou à sua mãe que a levasse ao santuário da santa.</p>
            <p>Após uma longa e cansativa viagem a pé e em lombo de burro, ao se aproximarem da colina onde estava a capela, a menina olhou em direção ao templo e disse admirada: 'Olha, mamãe, como aquela igreja é bonita!'</p>
            <p>A mãe, chorando de alegria, percebeu que sua filha havia recebido a visão física naquele exato momento. A partir de então, a menina passou a enxergar perfeitamente.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Nossa Senhora não apenas cura a cegueira física, mas deseja abrir os nossos olhos espirituais para as belezas e verdades do Evangelho de Jesus Cristo.</p>
            <p><strong>Propósito:</strong> Peça a Maria a cura da sua 'cegueira espiritual'. Reze hoje pedindo a graça de enxergar as necessidades do seu próximo com maior clareza.</p>
            <div class="verse">
                "Abri-me os olhos para que eu contemple as maravilhas de vossa lei." (Salmo 118,18)
            </div>
        `
        },
        {
            day: "Dia 6",
            title: "O Menino no Rio",
            leftContent: `
            <p>Um menino que brincava às margens do Rio Paraíba do Sul escorregou e caiu em uma parte profunda da correnteza, sendo rapidamente arrastado por um violento redemoinho.</p>
            <p>O pai do menino, que estava próximo e não sabia nadar bem, clamou em desespero: 'Nossa Senhora Aparecida, salvai meu filho!'</p>
            <p>Imediatamente, o redemoinho parou de girar e a força da água empurrou o menino suavemente até a margem, onde ele foi resgatado são e salvo, sem qualquer ferimento.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Nos redemoinhos da vida — ansiedades, medos e crises repentinas — o clamor da fé à Mãe de Deus tem o poder de acalmar as tempestades e nos trazer segurança espiritual.</p>
            <p><strong>Propósito:</strong> Sempre que se sentir angustiado ou desamparado hoje, repita pausadamente a jaculatória: 'Nossa Senhora Aparecida, salvai-me e protegei-me!'</p>
            <div class="verse">
                "Invocai-me no dia da tribulação, eu vos livrarei." (Salmo 49,15)
            </div>
        `
        },
        {
            day: "Dia 7",
            title: "O Caçador e a Onça",
            leftContent: `
            <p>Um caçador que andava pelas matas do vale do Paraíba foi surpreendido por uma grande onça-pintada. Sem tempo para fugir, ele apontou sua espingarda para o animal.</p>
            <p>No entanto, a arma falhou e o gatilho travou por três vezes consecutivas. Vendo-se desarmado e à mercê do animal feroz, ele ajoelhou-se e suplicou a proteção de Nossa Senhora Aparecida.</p>
            <p>A onça, inexplicavelmente, acalmou-se, desviou o olhar do caçador e caminhou pacificamente de volta para a mata profunda, poupando a vida do homem.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Existem situações em nossa jornada onde nossas defesas humanas falham por completo. É nesses momentos de total entrega que a proteção divina se torna nosso único e perfeito escudo.</p>
            <p><strong>Propósito:</strong> Entregue nas mãos de Nossa Senhora aquele problema que parece insolúvel ou aquela situação que você não consegue controlar sozinho.</p>
            <div class="verse">
                "O Senhor é o meu auxílio e o meu escudo; nele confiou o meu coração." (Salmo 27,7)
            </div>
        `
        },
        {
            day: "Dia 8",
            title: "O Manto Imperial",
            leftContent: `
            <p>A Princesa Isabel, filha de Dom Pedro II, era uma devota fervorosa de Nossa Senhora Aparecida. Em 1868, ela visitou a capela da santa pela primeira vez, trazendo uma promessa em seu coração.</p>
            <p>Ela ofertou à imagem um riquíssimo manto azul marinho, bordado a fios de ouro e decorado com pedras preciosas, que simbolizavam a realeza de Maria sobre o Brasil.</p>
            <p>Este manto tornou-se a veste oficial da Imagem, marcando visualmente a profunda devoção da família imperial e do povo brasileiro à Padroeira.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>O manto azul de Maria nos cobre com sua doçura materna e nos protege contra as forças espirituais do mal. Vestir-se de Maria é revestir-se das virtudes de Cristo.</p>
            <p><strong>Propósito:</strong> Reze hoje pedindo a Maria que o ajude a cobrir sua vida com a pureza, a modéstia e a caridade que seu manto simboliza.</p>
            <div class="verse">
                "Revestiram-se de mansidão e santidade." (Colossenses 3,12)
            </div>
        `
        },
        {
            day: "Dia 9",
            title: "A Coroa de Ouro",
            leftContent: `
            <p>Em 1884, retornando a Aparecida em agradecimento pelas graças de sua maternidade, a Princesa Isabel cumpriu a segunda parte de sua promessa e doou uma coroa de ouro maciço à Virgem.</p>
            <p>A coroa imperial foi cravejada com brilhantes e coroou solenemente a imagem de Nossa Senhora Aparecida como Rainha e Padroeira do Brasil.</p>
            <p>Esse gesto marcou o reconhecimento público da soberania espiritual de Maria sobre nossa nação, consolidando o amor do povo por sua Rainha Celeste.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Maria reina servindo. Sua coroa não é de dominação, mas de amor, intercessão e misericórdia divina. Fazer de Maria nossa Rainha é colocar Jesus no centro de tudo.</p>
            <p><strong>Propósito:</strong> Faça a oração da Salve Rainha hoje com profunda atenção, proclamando Maria como a soberana e protetora de sua vida familiar.</p>
            <div class="verse">
                "Apareceu no céu um grande sinal: uma mulher vestida do sol, com a lua debaixo dos seus pés, e uma coroa de doze estrelas sobre a cabeça." (Apocalipse 12,1)
            </div>
        `
        },
        {
            day: "Dia 10",
            title: "O Nome de Maria",
            leftContent: `
            <p>O nome de Maria, do hebraico 'Myrham', traz belos significados na tradição cristã, dentre os quais 'Estrela do Mar' e 'Senhora Iluminadora'.</p>
            <p>Pronunciar o nome de Maria com fé e devoção afasta os pensamentos ruins, acalma a mente atribulada e convida a presença dos anjos guardiões ao nosso redor.</p>
            <p>Os santos afirmam que o nome de Maria é mel aos ouvidos, doce no coração e força nos combates espirituais cotidianos.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>O nome da Mãe de Deus é um porto seguro para as almas atribuladas. Clamar por Maria nos direciona imediatamente ao amor de Jesus.</p>
            <p><strong>Propósito:</strong> Sempre que sentir raiva, desânimo ou tentação hoje, pronuncie com amor o nome de Maria até que seu coração se acalme.</p>
            <div class="verse">
                "O nome da Virgem era Maria." (Lucas 1,27)
            </div>
        `
        },
        {
            day: "Dia 11",
            title: "A Pesca Abundante",
            leftContent: `
            <p>A abundância de peixes após o encontro da Imagem representa a generosidade de Deus em nossas vidas quando obedecemos à Sua Palavra.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>A abundância de peixes após o encontro da Imagem representa a generosidade de Deus em nossas vidas quando obedecemos à Sua Palavra.</p>
            <p><strong>Propósito:</strong> Reze pelas vocações sacerdotais e missionárias, para que tragam muitos peixes para a rede de Cristo.</p>
            <div class="verse">
                "Lançai a rede para o lado direito da barca e achareis." (João 21,6)
            </div>
        `
        },
        {
            day: "Dia 12",
            title: "A Imaculada Conceição",
            leftContent: `
            <p>Maria foi preservada do pecado original desde o primeiro instante de sua existência, sendo cheia de graça e pureza espiritual.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Maria foi preservada do pecado original desde o primeiro instante de sua existência, sendo cheia de graça e pureza espiritual.</p>
            <p><strong>Propósito:</strong> Faça um ato de contrição hoje e planeje confessar-se nos próximos dias para purificar seu coração.</p>
            <div class="verse">
                "Tu és toda bela, ó minha amiga, e em ti não há mancha alguma." (Cânticos 4,7)
            </div>
        `
        },
        {
            day: "Dia 13",
            title: "As Águas do Rio Paraíba",
            leftContent: `
            <p>O rio, que outrora parecia estéril, tornou-se o berço de uma das maiores manifestações de fé mariana do mundo inteiro.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>O rio, que outrora parecia estéril, tornou-se o berço de uma das maiores manifestações de fé mariana do mundo inteiro.</p>
            <p><strong>Propósito:</strong> Agradeça a Deus pelas bênçãos escondidas nas aparentes perdas e desertos de sua vida.</p>
            <div class="verse">
                "Quem crer em mim, do seu interior correrão rios de água viva." (João 7,38)
            </div>
        `
        },
        {
            day: "Dia 14",
            title: "A Simplicidade do Barro",
            leftContent: `
            <p>A imagem é feita de terracota simples. Deus não escolheu o ouro para se manifestar em Aparecida, mas sim o barro humilde.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>A imagem é feita de terracota simples. Deus não escolheu o ouro para se manifestar em Aparecida, mas sim o barro humilde.</p>
            <p><strong>Propósito:</strong> Pratique a modéstia e a simplicidade em suas palavras e atitudes no dia de hoje.</p>
            <div class="verse">
                "Temos este tesouro em vasos de argila, para que se veja que este poder extraordinário pertence a Deus." (2 Coríntios 4,7)
            </div>
        `
        },
        {
            day: "Dia 15",
            title: "A Primeira Capela",
            leftContent: `
            <p>O lar dos pescadores foi o primeiro templo da santa. É na igreja doméstica da nossa casa que a devoção mariana deve começar.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>O lar dos pescadores foi o primeiro templo da santa. É na igreja doméstica da nossa casa que a devoção mariana deve começar.</p>
            <p><strong>Propósito:</strong> Abram um espaço em sua casa para rezar o terço em família ou faça um altar de oração hoje.</p>
            <div class="verse">
                "Eu e minha casa serviremos ao Senhor." (Josué 24,15)
            </div>
        `
        },
        {
            day: "Dia 16",
            title: "A Estrela da Evangelização",
            leftContent: `
            <p>Maria é aquela que aponta o caminho para Jesus. Propagar a devoção a Nossa Senhora é evangelizar e espalhar o amor de Cristo.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Maria é aquela que aponta o caminho para Jesus. Propagar a devoção a Nossa Senhora é evangelizar e espalhar o amor de Cristo.</p>
            <p><strong>Propósito:</strong> Compartilhe uma mensagem de fé ou uma oração com um amigo ou familiar hoje.</p>
            <div class="verse">
                "Proclamai a sua glória entre as nações." (Salmo 95,3)
            </div>
        `
        },
        {
            day: "Dia 17",
            title: "A Arma do Santo Rosário",
            leftContent: `
            <p>O Rosário é a oração que agrada o coração de Maria e afasta os perigos de nossa alma e da nossa família.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>O Rosário é a oração que agrada o coração de Maria e afasta os perigos de nossa alma e da nossa família.</p>
            <p><strong>Propósito:</strong> Reze pelo menos uma dezena do terço hoje com especial atenção e devoção.</p>
            <div class="verse">
                "Perseveravam todos unanimemente na oração, com Maria, Mãe de Jesus." (Atos 1,14)
            </div>
        `
        },
        {
            day: "Dia 18",
            title: "A Intercessão em Caná",
            leftContent: `
            <p>Maria percebe as necessidades antes mesmo de pedirmos, como fez nas bodas de Caná quando o vinho faltou.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Maria percebe as necessidades antes mesmo de pedirmos, como fez nas bodas de Caná quando o vinho faltou.</p>
            <p><strong>Propósito:</strong> Confie suas necessidades diárias à intercessão de Maria, sabendo que Ela cuidará de tudo.</p>
            <div class="verse">
                "Eles não têm mais vinho." (João 2,3)
            </div>
        `
        },
        {
            day: "Dia 19",
            title: "O Escudo de Proteção",
            leftContent: `
            <p>O manto de Nossa Senhora é um escudo espiritual que afasta as flechas do inimigo e as tentações diárias.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>O manto de Nossa Senhora é um escudo espiritual que afasta as flechas do inimigo e as tentações diárias.</p>
            <p><strong>Propósito:</strong> Peça a proteção dos santos anjos guardiões sobre a sua saúde física e espiritual hoje.</p>
            <div class="verse">
                "Debaixo da vossa proteção nos refugiamos, Santa Mãe de Deus."
            </div>
        `
        },
        {
            day: "Dia 20",
            title: "A Coroa da Glória Eterna",
            leftContent: `
            <p>Maria foi assunta ao céu e coroada pelo Pai como Rainha do Universo, mostrando o destino das almas fiéis.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Maria foi assunta ao céu e coroada pelo Pai como Rainha do Universo, mostrando o destino das almas fiéis.</p>
            <p><strong>Propósito:</strong> Lembre-se da eternidade hoje. Nossas lutas nesta terra são temporárias, mas a recompensa celeste é eterna.</p>
            <div class="verse">
                "Recebereis a coroa da glória, que não desbota." (1 Pedro 5,4)
            </div>
        `
        },
        {
            day: "Dia 21",
            title: "Mãe da Santa Esperança",
            leftContent: `
            <p>Maria nos sustenta nos momentos em que a cruz se torna pesada, apontando sempre para o milagre da Ressurreição.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Maria nos sustenta nos momentos em que a cruz se torna pesada, apontando sempre para o milagre da Ressurreição.</p>
            <p><strong>Propósito:</strong> Visite uma pessoa idosa, doente ou necessitada e leve uma palavra de esperança hoje.</p>
            <div class="verse">
                "A esperança não decepciona." (Romanos 5,5)
            </div>
        `
        },
        {
            day: "Dia 22",
            title: "Mãe de Misericórdia",
            leftContent: `
            <p>O coração de Maria é repleto de misericórdia para com todos os pecadores e desamparados da terra.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>O coração de Maria é repleto de misericórdia para com todos os pecadores e desamparados da terra.</p>
            <p><strong>Propósito:</strong> Pratique uma obra de misericórdia espiritual ou corporal no dia de hoje (dar um bom conselho, ajudar um necessitado).</p>
            <div class="verse">
                "Bem-aventurados os misericordiosos, porque alcançarão misericórdia." (Mateus 5,7)
            </div>
        `
        },
        {
            day: "Dia 23",
            title: "A Consagração Pessoal",
            leftContent: `
            <p>Consagrar-se a Maria é entregar todas as nossas ações e bens espirituais nas mãos da Mãe para que Ela os purifique.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Consagrar-se a Maria é entregar todas as nossas ações e bens espirituais nas mãos da Mãe para que Ela os purifique.</p>
            <p><strong>Propósito:</strong> Renove sua consagração pessoal a Nossa Senhora rezando a oração da Consagração.</p>
            <div class="verse">
                "Sou todo vosso, ó Rainha e Mãe minha."
            </div>
        `
        },
        {
            day: "Dia 24",
            title: "A Igreja no Lar",
            leftContent: `
            <p>A família cristã é chamada a ser um santuário de oração, respeito e amor mútuo, imitando a Sagrada Família.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>A família cristã é chamada a ser um santuário de oração, respeito e amor mútuo, imitando a Sagrada Família.</p>
            <p><strong>Propósito:</strong> Evite discussões ou palavras ásperas em seu lar hoje, semeando a paz de Cristo.</p>
            <div class="verse">
                "A paz de Cristo reine em vossos corações." (Colossenses 3,15)
            </div>
        `
        },
        {
            day: "Dia 25",
            title: "O Silêncio Contemplativo",
            leftContent: `
            <p>Maria guardava todas as coisas em seu coração, ouvindo a voz de Deus no silêncio e na oração contínua.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Maria guardava todas as coisas em seu coração, ouvindo a voz de Deus no silêncio e na oração contínua.</p>
            <p><strong>Propósito:</strong> Tire 5 minutos de silêncio absoluto hoje para escutar a Deus após ler a palavra.</p>
            <div class="verse">
                "Maria guardava todas estas coisas, meditando-as no seu coração." (Lucas 2,19)
            </div>
        `
        },
        {
            day: "Dia 26",
            title: "O Sim Generoso",
            leftContent: `
            <p>O 'Sim' de Maria ao plano de Deus trouxe o Salvador ao mundo. Nosso 'Sim' diário santifica nossa rotina.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>O 'Sim' de Maria ao plano de Deus trouxe o Salvador ao mundo. Nosso 'Sim' diário santifica nossa rotina.</p>
            <p><strong>Propósito:</strong> Aceite com paciência e amor os pequenos contratempos do dia de hoje, oferecendo como sacrifício a Deus.</p>
            <div class="verse">
                "Eis aqui a serva do Senhor; faça-se em mim segundo a vossa palavra." (Lucas 1,38)
            </div>
        `
        },
        {
            day: "Dia 27",
            title: "A Caridade sem Demora",
            leftContent: `
            <p>Ao saber da gravidez de Isabel, Maria partiu apressadamente para as montanhas para servir sua prima idosa.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Ao saber da gravidez de Isabel, Maria partiu apressadamente para as montanhas para servir sua prima idosa.</p>
            <p><strong>Propósito:</strong> Seja solícito a ajudar alguém em sua casa ou no trabalho hoje antes mesmo que lhe peçam.</p>
            <div class="verse">
                "Naqueles dias, Maria partiu apressadamente para a região montanhosa."
            </div>
        `
        },
        {
            day: "Dia 28",
            title: "Maria, Rainha da Paz",
            leftContent: `
            <p>A Virgem Maria intercede para afastar a discórdia das famílias, das sociedades e do mundo inteiro.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>A Virgem Maria intercede para afastar a discórdia das famílias, das sociedades e do mundo inteiro.</p>
            <p><strong>Propósito:</strong> Peça perdão a alguém que você tenha magoado e reconcilie-se hoje.</p>
            <div class="verse">
                "Deixo-vos a paz, a minha paz vos dou." (João 14,27)
            </div>
        `
        },
        {
            day: "Dia 29",
            title: "De pé Junto à Cruz",
            leftContent: `
            <p>Maria permaneceu firme aos pés da Cruz de Jesus, unindo seu sofrimento ao sacrifício redentor do Filho.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Maria permaneceu firme aos pés da Cruz de Jesus, unindo seu sofrimento ao sacrifício redentor do Filho.</p>
            <p><strong>Propósito:</strong> Suporte com fé e paciência os sofrimentos ou cansaços de hoje, unindo-os às dores de Jesus na cruz.</p>
            <div class="verse">
                "Junto à cruz de Jesus estava de pé sua mãe." (João 19,25)
            </div>
        `
        },
        {
            day: "Dia 30",
            title: "A Consagração do Brasil",
            leftContent: `
            <p>Consagramos nossa pátria, nossas famílias e nossas vidas à proteção eterna de Nossa Senhora Aparecida.</p>
            <p>Ao longo da história de devoção mariana no Brasil, os relatos de cura, conversão e libertação junto ao altar da Virgem de Itaguaçu continuam a se multiplicar diariamente.</p>
            <p>Que esta meditação fortaleça a sua confiança filial na intercessão daquela que nunca desampara os seus filhos mais necessitados.</p>
        `,
            rightContent: `
            <h4 style="font-family:var(--font-serif); font-size:1.3rem; margin-bottom:10px; color:var(--marian-blue-light);">Reflexão & Propósito</h4>
            <p>Consagramos nossa pátria, nossas famílias e nossas vidas à proteção eterna de Nossa Senhora Aparecida.</p>
            <p><strong>Propósito:</strong> Faça uma oração sincera pelo progresso, pela paz e pela fé em nosso país.</p>
            <div class="verse">
                "Feliz a nação cujo Deus é o Senhor." (Salmo 32,12)
            </div>
        `
        }
    ],

    // Novena Sample Data
        novenaDays: [
        {
            day: "1º Dia da Novena",
            title: "Senhora Aparecida: Mãe da Esperança",
            text: `
            <p><strong>Palavra da Igreja:</strong> "Esperar contra toda esperança!" Maria permaneceu de pé junto à Cruz. Ela guardou a fé mesmo no sábado do silêncio.</p>
            <p><strong>Meditação:</strong> Ao iniciarmos esta novena, pedimos a Nossa Senhora Aparecida que cure nossos desânimos e nos ensine a confiar no tempo de Deus. Nenhum filho de Maria é abandonado nas suas necessidades.</p>
            <p><strong>Oração do Dia:</strong> Ó Virgem Aparecida, consoladora dos aflitos, colocamos em vosso coração nossa esperança. Intercedei por nós junto a Jesus para obtermos as forças necessárias para vencer os desafios diários. Amém.</p>
        `,
            number: "Missa de Abertura"
        },
        {
            day: "2º Dia da Novena",
            title: "Senhora Aparecida: Estrela da Família",
            text: `
            <p><strong>Palavra da Igreja:</strong> A família é o santuário da vida e a igreja doméstica. Maria, José e Jesus formaram o lar sagrado e obediente de Nazaré.</p>
            <p><strong>Meditação:</strong> Colocamos sob o manto protetor de Nossa Senhora todas as famílias do Brasil, especialmente aquelas que sofrem com divisões, desemprego ou enfermidades.</p>
            <p><strong>Oração do Dia:</strong> Mãe Aparecida, abençoai nossa casa, protegei nossos filhos e trazei harmonia, paz e fé a todos os casais. Fazei do nosso lar uma extensão de Nazaré. Amém.</p>
        `,
            number: "Missa das Famílias"
        },
        {
            day: "3º Dia da Novena",
            title: "Senhora Aparecida: Auxílio dos Enfermos",
            text: `
            <p><strong>Palavra da Igreja:</strong> "Estive doente e me visitastes". Jesus curava os necessitados e Maria compartilha desse amor compassivo por suas dores.</p>
            <p><strong>Meditação:</strong> O sofrimento físico e mental faz parte do mistério da cruz. Entregamos a Maria a cura e o alívio das dores daqueles que padecem nos hospitais e lares.</p>
            <p><strong>Oração do Dia:</strong> Ó Mãe de Misericórdia, saúde dos enfermos, derramai vossas graças de restabelecimento físico e espiritual sobre todos os que sofrem. Dai-nos paciência e confiança. Amém.</p>
        `,
            number: "Missa da Saúde"
        },
        {
            day: "4º Dia da Novena",
            title: "Senhora Aparecida: Consoladora dos Aflitos",
            text: `
            <p><strong>Palavra da Igreja:</strong> "Vinde a mim, todos os que estais cansados". Jesus é o porto seguro e Maria é o canal de amor que nos conduz ao Seu consolo divino.</p>
            <p><strong>Meditação:</strong> Nas aflições de perdas, solidão e incertezas do futuro, Maria nos acolhe sob seu manto azul, trazendo serenidade e alento aos nossos corações fatigados.</p>
            <p><strong>Oração do Dia:</strong> Ó Virgem Consoladora, olhai para nossas angústias. Afastai o desespero de nossa mente e concedei-nos a força do Espírito Santo para vencer as provações diárias. Amém.</p>
        `,
            number: "Missa da Proteção"
        },
        {
            day: "5º Dia da Novena",
            title: "Senhora Aparecida: Mãe dos Pobres e Humildes",
            text: `
            <p><strong>Palavra da Igreja:</strong> "Derrubou os poderosos de seus tronos e elevou os humildes". O cântico do Magnificat proclama a predileção de Deus pelos pequeninos.</p>
            <p><strong>Meditação:</strong> O resgate da Imagem simples por pescadores humildes e a libertação de Zacarias nos mostram que a Mãe de Deus está sempre atenta e solícita às preces dos oprimidos.</p>
            <p><strong>Oração do Dia:</strong> Mãe Aparecida, ensinai-nos a partilhar com os necessitados e dai-nos um coração generoso, livre do egoísmo e cheio de caridade cristã. Amém.</p>
        `,
            number: "Missa da Caridade"
        },
        {
            day: "6º Dia da Novena",
            title: "Senhora Aparecida: Guia da Juventude",
            text: `
            <p><strong>Palavra da Igreja:</strong> A Igreja necessita do sim generoso e forte dos jovens para levar a palavra do Evangelho a todos os cantos e renovar o mundo.</p>
            <p><strong>Meditação:</strong> Sob o patrocínio da Virgem, confiamos os projetos e caminhos da juventude, para que sigam caminhos de retidão, verdade, respeito e integridade.</p>
            <p><strong>Oração do Dia:</strong> Ó Virgem Imaculada, protegei nossos jovens contra as ilusões do mundo, guardai sua pureza e dai-lhes coragem para testemunhar a fé cristã com orgulho. Amém.</p>
        `,
            number: "Missa dos Jovens"
        },
        {
            day: "7º Dia da Novena",
            title: "Senhora Aparecida: Rainha da Paz",
            text: `
            <p><strong>Palavra da Igreja:</strong> "Deixo-vos a paz, a minha paz vos dou". Maria é a Mãe do Príncipe da Paz e nos ensina a ser construtores de reconciliação.</p>
            <p><strong>Meditação:</strong> As discórdias, fofocas e falta de perdão destroem as famílias. Pedimos a intercessão da Rainha da Paz para restabelecer a união e o amor recíproco.</p>
            <p><strong>Oração do Dia:</strong> Rainha da Paz, afastai toda ira e rancor dos nossos corações. Semeai o diálogo e a compreensão mútua em nossas casas e na sociedade em que vivemos. Amém.</p>
        `,
            number: "Missa da Paz"
        },
        {
            day: "8º Dia da Novena",
            title: "Senhora Aparecida: Mãe das Vocações",
            text: `
            <p><strong>Palavra da Igreja:</strong> "Eis aí a tua mãe". Do alto da cruz, Jesus entregou a Igreja inteira aos cuidados de Maria, que nos acompanha e sustenta.</p>
            <p><strong>Meditação:</strong> Rezamos pelo Papa, bispos e sacerdotes. Pedimos à Mãe das Vocações que inspire muitos corações jovens a doar suas vidas pela causa do Reino de Deus.</p>
            <p><strong>Oração do Dia:</strong> Ó Mãe do Bom Conselho, abençoai nossos sacerdotes e religiosos. Despertai nas famílias vocações santas e generosas para o serviço do Evangelho. Amém.</p>
        `,
            number: "Missa Vocacional"
        },
        {
            day: "9º Dia da Novena",
            title: "Senhora Aparecida: Padroeira do Brasil",
            text: `
            <p><strong>Palavra da Igreja:</strong> Em 1930, o Papa Pio XI declarou solenemente Nossa Senhora da Conceição Aparecida como a Padroeira Principal de toda a nação brasileira.</p>
            <p><strong>Meditação:</strong> No encerramento desta novena de fé, consagramos nosso país, nosso povo, nossos lares e paróquias sob o manto azul marinho da Virgem Maria Aparecida.</p>
            <p><strong>Oração do Dia:</strong> Ó Senhora Aparecida, Rainha e Padroeira do Brasil, acolhei nossa nação sob vossa proteção constante. Livrai-nos dos perigos e guiai-nos à pátria celeste. Amém.</p>
        `,
            number: "Missa Solene da Festa"
        }
    ],

    // Prayers Database
    prayers: [
        {
            id: "salve-rainha",
            title: "Salve Rainha",
            category: "marianas",
            text: `
                <p>Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas.</p>
                <p>Eia, pois, advogada nossa, esses vossos olhos misericordiosos a nós volvei, e depois deste desterro mostrai-nos Jesus, bendito fruto do vosso ventre, ó clemente, ó piedosa, ó doce sempre Virgem Maria.</p>
                <p>V. Rogai por nós, Santa Mãe de Deus.<br>R. Para que sejamos dignos das promessas de Cristo. Amém.</p>
            `
        },
        {
            id: "consagracaomarian",
            title: "Consagração a Nossa Senhora",
            category: "marianas",
            text: `
                <p>Ó minha Senhora, ó minha Mãe, eu me ofereço todo a vós e, em prova da minha devoção para convosco, vos consagro neste dia e para sempre, meus olhos, meus ouvidos, minha boca, meu coração e todo o meu ser.</p>
                <p>E porque assim sou vosso, ó incomparável Mãe, guardai-me e defendei-me como coisa e propriedade vossa. Amém.</p>
            `
        },
        {
            id: "credo",
            title: "Creio (Símbolo dos Apóstolos)",
            category: "diarias",
            text: `
                <p>Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos, foi crucificado, morto e sepultado; desceu à mansão dos mortos; ressuscitou ao terceiro dia; subiu aos céus, está sentado à direita de Deus Pai Todo-Poderoso, donde há de vir a julgar os vivos e os mortos.</p>
                <p>Creio no Espírito Santo; na Santa Igreja Católica; na comunhão dos santos; na remissão dos pecados; na ressurreição da carne; na vida eterna. Amém.</p>
            `
        },
        {
            id: "oracao-manha",
            title: "Oração da Manhã",
            category: "diarias",
            text: `
                <p>Senhor, no início deste dia, venho pedir-vos a paz, a sabedoria e a força. Quero olhar hoje o mundo com olhos cheios de amor, ser paciente, compreensivo, manso e prudente.</p>
                <p>Ver, além das aparências, vossos filhos como vós mesmo os vedes, e assim não ver senão o bem em cada um. Cerrai meus ouvidos a toda calúnia. Guardai minha língua de toda maldade. Que só de bênçãos se encha meu espírito.</p>
                <p>Que eu seja tão bondoso e alegre, que todos quantos se aproximarem de mim sintam a vossa presença. Revesti-me de vossa beleza, Senhor, e que, no decurso deste dia, eu vos revele a todos. Amém.</p>
            `
        },
        {
            id: "sao-francisco",
            title: "Oração de São Francisco",
            category: "santos",
            text: `
                <p>Senhor, fazei-me instrumento de vossa paz. Onde houver ódio, que eu leve o amor; onde houver ofensa, que eu leve o perdão; onde houver discórdia, que eu leve a união; onde houver dúvida, que eu leve a fé; onde houver erro, que eu leve a verdade; onde houver desespero, que eu leve a esperança; onde houver tristeza, que eu leve a alegria; onde houver trevas, que eu leve a luz.</p>
                <p>Ó Mestre, fazei que eu procure mais consolar que ser consolado; compreender que ser compreendido; amar que ser amado. Pois é dando que se recebe, é perdoando que se é perdoado, e é morrendo que se nasce para a vida eterna. Amém.</p>
            `
        },
        {
            id: "miguel-arcanjo",
            title: "Oração a São Miguel Arcanjo",
            category: "santos",
            text: `
                <p>São Miguel Arcanjo, defendei-nos no combate, sede o nosso refúgio contra as maldades e ciladas do demônio. Ordene-lhe Deus, instantemente o pedimos, e vós, príncipe da milícia celeste, pelo divino poder, precipitai no inferno a Satanás e a todos os espíritos malignos que andam pelo mundo para perder as almas. Amém.</p>
            `
        }
    ],

    // Rosary Simulator Bead Prayer Map
    tercoPrayers: [
        {
            type: "crucifix",
            bead: "Cruz",
            title: "O Creio",
            text: "Creio em Deus Pai Todo-Poderoso, Criador do céu e da terra; e em Jesus Cristo, seu único Filho, nosso Senhor, que foi concebido pelo poder do Espírito Santo; nasceu da Virgem Maria; padeceu sob Pôncio Pilatos..."
        },
        {
            type: "pai",
            bead: "Pai Nosso",
            title: "Pai Nosso",
            text: "Pai nosso, que estais no céu, santificado seja o vosso nome; venha a nós o vosso reino; seja feita a vossa vontade, assim na terra como no céu. O pão nosso de cada dia nos dai hoje; perdoai-nos as nossas ofensas, assim como nós perdoamos a quem nos tem ofendido; e não nos deixeis cair em tentação, mas livrai-nos do mal. Amém."
        },
        {
            type: "ave",
            bead: "Ave Maria (Pela Fé)",
            title: "Ave Maria",
            text: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém."
        },
        {
            type: "ave",
            bead: "Ave Maria (Pela Esperança)",
            title: "Ave Maria",
            text: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém."
        },
        {
            type: "ave",
            bead: "Ave Maria (Pela Caridade)",
            title: "Ave Maria",
            text: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus, rogai por nós, pecadores, agora e na hora de nossa morte. Amém."
        },
        {
            type: "pai",
            bead: "Glória / Mistério",
            title: "Glória ao Pai e Mistério",
            text: "Glória ao Pai, e ao Filho, e ao Espírito Santo. Como era no princípio, agora e sempre. Amém. Ó meu Jesus, perdoai-nos, livrai-nos do fogo do inferno, levai as almas todas para o céu e socorrei principalmente as que mais precisarem."
        },
        {
            type: "medal",
            bead: "Medalha de N. Sra.",
            title: "Salve Rainha",
            text: "Salve Rainha, Mãe de misericórdia, vida, doçura e esperança nossa, salve! A vós bradamos os degredados filhos de Eva. A vós suspiramos, gemendo e chorando neste vale de lágrimas..."
        },
        // 1st Decade
        { type: "ave", bead: "1ª Ave Maria (1ª Dezena)", title: "Ave Maria", text: "Ave Maria, cheia de graça, o Senhor é convosco, bendita sois vós entre as mulheres, e bendito é o fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus..." },
        { type: "ave", bead: "2ª Ave Maria (1ª Dezena)", title: "Ave Maria", text: "Ave Maria, cheia de graça, o Senhor é convosco..." },
        { type: "ave", bead: "3ª Ave Maria (1ª Dezena)", title: "Ave Maria", text: "Ave Maria, cheia de graça..." },
        { type: "ave", bead: "4ª Ave Maria (1ª Dezena)", title: "Ave Maria", text: "Ave Maria..." },
        { type: "ave", bead: "5ª Ave Maria (1ª Dezena)", title: "Ave Maria", text: "Ave Maria..." },
        {
            type: "pai",
            bead: "Glória / 2º Mistério",
            title: "Glória e Anúncio do 2º Mistério",
            text: "Glória ao Pai, ao Filho e ao Espírito Santo. Anunciamos o Segundo Mistério do Terço e iniciamos a próxima dezena."
        },
        // 2nd Decade
        { type: "ave", bead: "1ª Ave Maria (2ª Dezena)", title: "Ave Maria", text: "Ave Maria, cheia de graça, o Senhor é convosco..." },
        { type: "ave", bead: "2ª Ave Maria (2ª Dezena)", title: "Ave Maria", text: "Ave Maria..." },
        { type: "ave", bead: "3ª Ave Maria (2ª Dezena)", title: "Ave Maria", text: "Ave Maria..." },
        { type: "ave", bead: "4ª Ave Maria (2ª Dezena)", title: "Ave Maria", text: "Ave Maria..." },
        { type: "ave", bead: "5ª Ave Maria (2ª Dezena)", title: "Ave Maria", text: "Ave Maria..." },
        {
            type: "pai",
            bead: "Glória / 3º Mistério",
            title: "Glória e Anúncio do 3º Mistério",
            text: "Glória ao Pai, ao Filho e ao Espírito Santo. Anunciamos o Terceiro Mistério do Terço e iniciamos a próxima dezena."
        },
        // 3rd Decade
        { type: "ave", bead: "1ª Ave Maria (3ª Dezena)", title: "Ave Maria", text: "Ave Maria, cheia de graça, o Senhor é convosco..." },
        { type: "ave", bead: "2ª Ave Maria (3ª Dezena)", title: "Ave Maria", text: "Ave Maria..." },
        { type: "ave", bead: "3ª Ave Maria (3ª Dezena)", title: "Ave Maria", text: "Ave Maria..." },
        { type: "ave", bead: "4ª Ave Maria (3ª Dezena)", title: "Ave Maria", text: "Ave Maria..." },
        { type: "ave", bead: "5ª Ave Maria (3ª Dezena)", title: "Ave Maria", text: "Ave Maria, bendito fruto do vosso ventre, Jesus. Santa Maria, Mãe de Deus. Amém." }
    ],

    // Mysteries Data
    mysteries: {
        gozosos: [
            "1º Mistério: A Anunciação do Arcanjo São Gabriel a Nossa Senhora.",
            "2º Mistério: A Visitação de Nossa Senhora à sua prima Santa Isabel.",
            "3º Mistério: O Nascimento de Jesus na gruta de Belém.",
            "4º Mistério: A Apresentação do Menino Jesus no Templo.",
            "5º Mistério: A Perda e o Encontro do Menino Jesus no Templo."
        ],
        luminosos: [
            "1º Mistério: O Batismo de Jesus no Rio Jordão.",
            "2º Mistério: A Auto-revelação de Jesus nas Bodas de Caná.",
            "3º Mistério: O Anúncio do Reino de Deus convidando à Conversão.",
            "4º Mistério: A Transfiguração de Jesus no Monte Tabor.",
            "5º Mistério: A Instituição da Eucaristia na Última Ceia."
        ],
        dolorosos: [
            "1º Mistério: A Agonia de Jesus no Horto das Oliveiras.",
            "2º Mistério: A Flagelação de Jesus atado à coluna.",
            "3º Mistério: A Coroação de espinhos de Jesus.",
            "4º Mistério: Jesus carregando a pesada Cruz a caminho do Calvário.",
            "5º Mistério: A Crucificação e Morte de Jesus na Cruz."
        ],
        gloriosos: [
            "1º Mistério: A Ressurreição de Jesus.",
            "2º Mistério: A Ascensão de Jesus ao Céu.",
            "3º Mistério: A Descida do Espírito Santo sobre os Apóstolos e Maria.",
            "4º Mistério: A Assunção de Nossa Senhora ao Céu.",
            "5º Mistério: A Coroação de Nossa Senhora como Rainha do Céu e da Terra."
        ]
    },

    // Liturgical Feast Data (October 2026)
    liturgicalCalendar: {
        "4": { title: "São Francisco de Assisi", color: "white", desc: "Memória de São Francisco de Assis, diácono, que fundou a Ordem dos Frades Menores e escolheu viver uma vida de extrema pobreza e humildade evangelizadora." },
        "7": { title: "Nossa Senhora do Rosário", color: "white", desc: "Memória de Nossa Senhora do Rosário. Celebração da vitória cristã e a eficácia da oração do Rosário contra as heresias e dificuldades da Igreja." },
        "11": { title: "28º Domingo do Tempo Comum", color: "green", desc: "Liturgia Dominical. Meditação das escrituras e consagração do dia do Senhor." },
        "12": { title: "SOLENIDADE DE NOSSA SENHORA APARECIDA", color: "white", desc: "Solenidade da Padroeira Principal do Brasil. Encontro da imagem milagrosa e consagração de todo o povo brasileiro à Mãe Santíssima." },
        "15": { title: "Santa Teresa de Jesus", color: "white", desc: "Memória de Santa Teresa de Ávila, virgem e Doutora da Igreja. Mística carmelita descalça, escritora e mestre da oração contemplativa." },
        "18": { title: "São Lucas Evangelista", color: "red", desc: "Festa de São Lucas, evangelista, que escreveu o terceiro Evangelho e os Atos dos Apóstolos. Padroeiro dos médicos e pintores." },
        "25": { title: "29º Domingo do Tempo Comum", color: "green", desc: "Liturgia Dominical. Meditação semanal." },
        "28": { title: "São Simão e São Judas, Apóstolos", color: "red", desc: "Festa dos Santos Apóstolos Simão e Judas Tadeu, colunas da Igreja que selaram sua pregação com o martírio." }
    },

    /* ==========================================
       INITIALIZATION
       ========================================== */
    init() {
        console.log("Kit Devocional App Initialized!");
        this.renderEbookPage();
        this.renderNovenaPage();
        this.renderPrayersList();
        this.loadDiaryEntries();
        this.renderCalendar();
        this.selectBead(0); // select crucifix initially
    },

    /* ==========================================
       NAVIGATION & TABS
       ========================================== */
    switchMainTab(tab) {
        document.getElementById('tab-presentation').classList.remove('active');
        document.getElementById('tab-portal').classList.remove('active');
        document.getElementById('view-presentation').classList.remove('active');
        document.getElementById('view-portal').classList.remove('active');

        if (tab === 'presentation') {
            document.getElementById('tab-presentation').classList.add('active');
            document.getElementById('view-presentation').classList.add('active');
        } else {
            document.getElementById('tab-portal').classList.add('active');
            document.getElementById('view-portal').classList.add('active');
            
            // Switch sidebar layout active links if mobile view changed
            setTimeout(() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 50);
        }
    },

    scrollToGrid() {
        const el = document.getElementById('kit-details-section');
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    },

    openPortalItem(viewName) {
        this.switchMainTab('portal');
        this.switchPortalView(viewName);
    },

    switchPortalView(viewName) {
        // Deactivate all sidebar links
        const sidebarLinks = document.querySelectorAll('.sidebar-link');
        sidebarLinks.forEach(link => link.classList.remove('active'));

        // Deactivate all portal views
        const portalViews = document.querySelectorAll('.portal-view');
        portalViews.forEach(view => view.classList.remove('active'));

        // Activate specific one
        const activeLink = document.getElementById(`menu-${viewName}`);
        const activeView = document.getElementById(`port-${viewName}`);
        
        if (activeLink) activeLink.classList.add('active');
        if (activeView) activeView.classList.add('active');
    },

    /* ==========================================
       EBOOK READER COMPONENT
       ========================================== */
    renderEbookPage() {
        const dayData = this.ebookDays[this.currentEbookDay];
        
        // Pagina Esquerda (Meditação)
        document.getElementById('ebook-day-title-left').innerText = dayData.day;
        document.getElementById('ebook-page-number-left').innerText = `Página ${(this.currentEbookDay * 2) + 2}`;
        
        const contentAreaLeft = document.getElementById('ebook-page-content-left');
        contentAreaLeft.innerHTML = `
            <div class="book-title-tag" style="font-size: 1.6rem; margin-bottom:15px; color: var(--gold-dark);">${dayData.title}</div>
            <div class="book-page-content">${dayData.leftContent}</div>
        `;
        
        // Pagina Direita (Oração e Prática)
        document.getElementById('ebook-day-title-right').innerText = dayData.day;
        document.getElementById('ebook-page-number-right').innerText = `Página ${(this.currentEbookDay * 2) + 3}`;
        
        const contentAreaRight = document.getElementById('ebook-page-content-right');
        contentAreaRight.innerHTML = `
            <div class="book-page-content">${dayData.rightContent}</div>
        `;
        
        document.getElementById('ebook-day-indicator').innerText = `Dia ${this.currentEbookDay + 1} de ${this.ebookDays.length}`;
        
        // Desativar botões nos limites
        document.getElementById('btn-prev-day').disabled = (this.currentEbookDay === 0);
        document.getElementById('btn-next-day').disabled = (this.currentEbookDay === this.ebookDays.length - 1);
    },

    changeEbookDay(direction) {
        const newDayIndex = this.currentEbookDay + direction;
        if (newDayIndex >= 0 && newDayIndex < this.ebookDays.length) {
            this.currentEbookDay = newDayIndex;
            
            // Add subtle page flip effect
            const spine = document.querySelector('.book-spine');
            spine.style.opacity = '0.5';
            spine.style.transform = 'scale(0.99)';
            setTimeout(() => {
                this.renderEbookPage();
                spine.style.opacity = '1';
                spine.style.transform = 'scale(1)';
            }, 150);
        }
    },

    /* ==========================================
       NOVENA COMPONENT
       ========================================== */
    renderNovenaPage() {
        const dayData = this.novenaDays[this.currentNovenaDay];
        document.getElementById('novena-day-title').innerText = dayData.day;
        document.getElementById('novena-page-number').innerText = dayData.number;
        
        const contentArea = document.getElementById('novena-page-content');
        contentArea.innerHTML = `
            <div class="book-title-tag" style="font-size: 1.5rem; margin-bottom:10px;">${dayData.title}</div>
            <div class="book-page-content">${dayData.text}</div>
        `;
        
        document.getElementById('novena-day-indicator').innerText = `Dia ${this.currentNovenaDay + 1} de ${this.novenaDays.length}`;
        
        document.getElementById('btn-prev-novena').disabled = (this.currentNovenaDay === 0);
        document.getElementById('btn-next-novena').disabled = (this.currentNovenaDay === this.novenaDays.length - 1);
    },

    changeNovenaDay(direction) {
        const newDayIndex = this.currentNovenaDay + direction;
        if (newDayIndex >= 0 && newDayIndex < this.novenaDays.length) {
            this.currentNovenaDay = newDayIndex;
            this.renderNovenaPage();
        }
    },

    /* ==========================================
       PRAYER DEVOCIONÁRIO COMPONENT
       ========================================== */
    renderPrayersList(filterCategory = 'all', searchQuery = '') {
        const container = document.getElementById('prayers-list-container');
        container.innerHTML = '';
        
        const filtered = this.prayers.filter(prayer => {
            const matchesCat = (filterCategory === 'all' || prayer.category === filterCategory);
            const matchesSearch = prayer.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  prayer.text.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });

        if (filtered.length === 0) {
            container.innerHTML = '<p style="color:var(--text-muted); grid-column: 1/-1; text-align:center; padding: 20px;">Nenhuma oração encontrada.</p>';
            return;
        }

        filtered.forEach(prayer => {
            const isFav = this.isFavoritePrayer(prayer.id);
            const card = document.createElement('div');
            card.className = 'prayer-card';
            card.onclick = () => this.showPrayerDetail(prayer.id);
            
            card.innerHTML = `
                <div class="prayer-card-header">
                    <span class="prayer-card-category">${prayer.category}</span>
                    <span class="prayer-card-fav ${isFav ? 'active' : ''}" onclick="app.toggleFavoritePrayer('${prayer.id}', event)">★</span>
                </div>
                <h4 class="prayer-card-title">${prayer.title}</h4>
                <p class="prayer-card-snippet">${prayer.text.replace(/<[^>]*>/g, '').substring(0, 100)}...</p>
            `;
            container.appendChild(card);
        });
    },

    filterPrayers(category, element) {
        document.querySelectorAll('.filter-pill').forEach(pill => pill.classList.remove('active'));
        element.classList.add('active');
        
        const searchInput = document.getElementById('search-prayers');
        this.renderPrayersList(category, searchInput.value);
    },

    searchPrayers() {
        const activePill = document.querySelector('.filter-pill.active');
        const category = activePill ? activePill.innerText.toLowerCase().replace('todas', 'all').replace('santos / diversas', 'santos').replace('diárias', 'diarias') : 'all';
        const searchInput = document.getElementById('search-prayers');
        this.renderPrayersList(category, searchInput.value);
    },

    showPrayerDetail(id) {
        const prayer = this.prayers.find(p => p.id === id);
        if (prayer) {
            document.getElementById('displayed-prayer-title').innerText = prayer.title;
            document.getElementById('displayed-prayer-text').innerHTML = prayer.text;
            
            const area = document.getElementById('prayer-display-area');
            area.style.display = 'block';
            area.scrollIntoView({ behavior: 'smooth' });
        }
    },

    closePrayerDisplay() {
        document.getElementById('prayer-display-area').style.display = 'none';
    },

    toggleFavoritePrayer(id, event) {
        event.stopPropagation(); // prevent opening details
        let favs = JSON.parse(localStorage.getItem('fav_prayers') || '[]');
        
        if (favs.includes(id)) {
            favs = favs.filter(favId => favId !== id);
            this.showToast('Removida dos favoritos');
        } else {
            favs.push(id);
            this.showToast('Adicionada aos favoritos!');
        }
        
        localStorage.setItem('fav_prayers', JSON.stringify(favs));
        
        // Re-render
        const activePill = document.querySelector('.filter-pill.active');
        const category = activePill ? activePill.innerText.toLowerCase().replace('todas', 'all').replace('santos / diversas', 'santos').replace('diárias', 'diarias') : 'all';
        const searchInput = document.getElementById('search-prayers');
        this.renderPrayersList(category, searchInput.value);
    },

    isFavoritePrayer(id) {
        const favs = JSON.parse(localStorage.getItem('fav_prayers') || '[]');
        return favs.includes(id);
    },

    /* ==========================================
       INTERACTIVE SANTO TERÇO COMPONENT
       ========================================== */
    selectBead(index) {
        this.currentBeadIndex = index;
        
        // Remove active class from all beads
        const beads = document.querySelectorAll('.bead');
        beads.forEach(bead => bead.classList.remove('active'));

        // Add active class to clicked bead
        const activeBead = document.getElementById(`bead-${index}`);
        if (activeBead) {
            activeBead.classList.add('active');
        }

        // Render bead details in text panel
        const beadData = this.tercoPrayers[index];
        if (beadData) {
            document.getElementById('terco-step-info').innerText = beadData.bead;
            
            // Check if it's a mystery announcement
            if (beadData.type === 'pai' && index > 4) {
                // Determine decade index
                let decade = 0;
                if (index === 5) decade = 0; // 1st
                else if (index === 12) decade = 1; // 2nd
                else if (index === 18) decade = 2; // 3rd
                
                const mysteryList = this.mysteries[this.currentMysteryType];
                document.getElementById('terco-mystery-title').innerText = mysteryList[decade];
            } else {
                document.getElementById('terco-mystery-title').innerText = beadData.title;
            }
            
            document.getElementById('terco-prayer-text').innerHTML = beadData.text;
            document.getElementById('terco-progress-label').innerText = `Conta ${index + 1} / ${this.tercoPrayers.length}`;
        }
    },

    navigateTerco(direction) {
        let newIndex = this.currentBeadIndex + direction;
        if (newIndex >= 0 && newIndex < this.tercoPrayers.length) {
            this.selectBead(newIndex);
        }
    },

    changeMysteries(type) {
        this.currentMysteryType = type;
        this.selectBead(this.currentBeadIndex); // force redraw with new mystery text if active
        this.showToast('Mistérios atualizados!');
    },

    /* ==========================================
       DIÁRIO ESPIRITUAL COMPONENT
       ========================================== */
    saveDiaryEntry() {
        const text = document.getElementById('diary-text').value.trim();
        const promptSelect = document.getElementById('diary-prompt');
        const promptText = promptSelect.options[promptSelect.selectedIndex].text;
        
        if (!text) {
            this.showToast('⚠️ Digite algo antes de salvar!');
            return;
        }

        const entries = JSON.parse(localStorage.getItem('diary_entries') || '[]');
        const newEntry = {
            date: new Date().toLocaleDateString('pt-BR'),
            time: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
            prompt: promptSelect.value ? promptText : 'Folha em branco',
            text: text
        };

        entries.unshift(newEntry); // add to top
        localStorage.setItem('diary_entries', JSON.stringify(entries));
        
        document.getElementById('diary-text').value = '';
        promptSelect.selectedIndex = 0;
        
        this.loadDiaryEntries();
        this.showToast('Anotação salva com sucesso!');
    },

    loadDiaryEntries() {
        const container = document.getElementById('diary-entries-container');
        container.innerHTML = '';
        
        const entries = JSON.parse(localStorage.getItem('diary_entries') || '[]');
        
        if (entries.length === 0) {
            container.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding:15px; font-size:0.9rem;">Nenhuma reflexão anotada ainda.</p>';
            return;
        }

        entries.forEach((entry, idx) => {
            const card = document.createElement('div');
            card.className = 'diary-entry-card';
            card.onclick = () => {
                document.getElementById('diary-text').value = entry.text;
                this.showToast('Reflexão carregada para edição');
            };
            
            card.innerHTML = `
                <div class="diary-entry-meta">
                    <span>📅 ${entry.date}</span>
                    <span>🕒 ${entry.time}</span>
                </div>
                <div class="diary-entry-prompt">${entry.prompt}</div>
                <div class="diary-entry-text">${entry.text}</div>
                <button style="color: #e53e3e; font-size:0.75rem; font-weight:bold; margin-top:8px;" onclick="app.deleteDiaryEntry(${idx}, event)">Excluir</button>
            `;
            container.appendChild(card);
        });
    },

    applyDiaryPrompt(value) {
        if (value) {
            const textarea = document.getElementById('diary-text');
            textarea.value = value + '\n\n' + textarea.value;
            textarea.focus();
        }
    },

    deleteDiaryEntry(index, event) {
        event.stopPropagation(); // prevent loading card
        if (confirm('Tem certeza que deseja excluir esta anotação?')) {
            let entries = JSON.parse(localStorage.getItem('diary_entries') || '[]');
            entries.splice(index, 1);
            localStorage.setItem('diary_entries', JSON.stringify(entries));
            this.loadDiaryEntries();
            this.showToast('Anotação excluída');
        }
    },

    /* ==========================================
       LITURGICAL CALENDAR COMPONENT
       ========================================= */
    renderCalendar() {
        const grid = document.getElementById('calendar-grid-body');
        grid.innerHTML = '';
        
        // Render Days Header
        const weekdays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        weekdays.forEach(day => {
            const el = document.createElement('div');
            el.className = 'calendar-day-header';
            el.innerText = day;
            grid.appendChild(el);
        });

        // Set Month/Year label
        const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        document.getElementById('calendar-month-year').innerText = `${months[this.calendarMonth]} ${this.calendarYear}`;

        // Get first day of month and number of days
        const firstDayIndex = new Date(this.calendarYear, this.calendarMonth, 1).getDay();
        const numDays = new Date(this.calendarYear, this.calendarMonth + 1, 0).getDate();

        // Render Empty pre-cells
        for (let i = 0; i < firstDayIndex; i++) {
            const el = document.createElement('div');
            el.className = 'calendar-day-cell empty';
            grid.appendChild(el);
        }

        // Render day cells
        for (let day = 1; day <= numDays; day++) {
            const cell = document.createElement('div');
            cell.className = 'calendar-day-cell';
            cell.onclick = () => this.showDayDetails(day);
            
            // Check if there is liturgical data for this day
            const feast = this.liturgicalCalendar[day];
            let colorDotClass = 'green'; // default: Ordinary time
            let feastTitle = '';

            // Sundays colors
            const dateObj = new Date(this.calendarYear, this.calendarMonth, day);
            if (dateObj.getDay() === 0) { // Sunday
                colorDotClass = 'green';
                feastTitle = 'Tempo Comum';
            }

            if (feast) {
                colorDotClass = feast.color;
                feastTitle = feast.title;
            }

            cell.innerHTML = `
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <span class="day-number">${day}</span>
                    <span class="liturgy-dot ${colorDotClass}"></span>
                </div>
                <div class="day-feast">${feastTitle}</div>
            `;
            grid.appendChild(cell);
        }
        
        // Auto select October 12 (feast of Aparecida) to display default details
        if (this.calendarMonth === 9) { // October
            this.showDayDetails(12);
        } else {
            document.getElementById('calendar-day-details').style.display = 'none';
        }
    },

    changeMonth(direction) {
        this.calendarMonth += direction;
        if (this.calendarMonth < 0) {
            this.calendarMonth = 11;
            this.calendarYear--;
        } else if (this.calendarMonth > 11) {
            this.calendarMonth = 0;
            this.calendarYear++;
        }
        this.renderCalendar();
    },

    showDayDetails(day) {
        const feast = this.liturgicalCalendar[day];
        const dateObj = new Date(this.calendarYear, this.calendarMonth, day);
        const dayStr = dateObj.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' });
        
        document.getElementById('detail-day-date').innerText = dayStr;
        
        const detailsContainer = document.getElementById('calendar-day-details');
        detailsContainer.style.display = 'block';

        if (feast) {
            document.getElementById('detail-day-liturgy').innerText = feast.title;
            document.getElementById('detail-day-liturgy').style.color = `var(--liturgy-${feast.color})`;
            document.getElementById('detail-day-description').innerText = feast.desc;
        } else {
            // General Liturgy
            const isSunday = dateObj.getDay() === 0;
            document.getElementById('detail-day-liturgy').innerText = isSunday ? 'Domingo do Tempo Comum' : 'Feria do Tempo Comum';
            document.getElementById('detail-day-liturgy').style.color = 'var(--liturgy-green)';
            document.getElementById('detail-day-description').innerText = isSunday ? 
                'Celebração eucarística dominical da Ressurreição do Senhor. Dia santo de repouso e espiritualidade.' :
                'Dia de semana do Tempo Comum. Leitura da liturgia diária ordinária e meditação individual.';
        }
        
        detailsContainer.scrollIntoView({ behavior: 'smooth' });
    },

    /* ==========================================
       DOWNLOAD / NOTIFICATIONS / UTILS
       ========================================= */
    downloadFile(fileName) {
        this.showToast(`📥 Iniciando download de: ${fileName}...`);
        
        setTimeout(() => {
            // Caso especial: Marcadores de Bíblia gerados dinamicamente em alta resolução para impressão
            if (fileName.includes('Marcadores')) {
                this.generateBookmarksSheet((dataUrl) => {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'Marcadores-de-Biblia-Impressao.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    this.showToast(`✅ Marcadores baixados para impressão!`);
                });
                return;
            }

            // Caso especial: Pôster Oficial Nossa Senhora
            if (fileName.includes('Poster-Nossa-Senhora')) {
                this.generatePosterNossaSenhora((dataUrl) => {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'Poster-Nossa-Senhora-Impressao.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    this.showToast(`✅ Pôster Oficial baixado para impressão!`);
                });
                return;
            }

            // Caso especial: Pôster Consagração do Lar
            if (fileName.includes('Poster-Consagracao')) {
                this.generatePosterConsagracao((dataUrl) => {
                    const link = document.createElement('a');
                    link.href = dataUrl;
                    link.download = 'Poster-Consagracao-Impressao.png';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                    this.showToast(`✅ Pôster de Consagração baixado para impressão!`);
                });
                return;
            }

            let fileUrl = '';
            let finalFileName = fileName;
            
            // Caso geral: se for imagem, baixa ns_aparecida.png
            if (fileName.endsWith('.jpg') || fileName.endsWith('.png') || fileName.includes('Wallpaper')) {
                fileUrl = 'assets/ns_aparecida.png';
                finalFileName = fileName.replace(/\.pdf$/, '.png').replace(/\.jpg$/, '.png');
            } else {
                // Gera um arquivo de texto de demonstração e muda a extensão para .txt
                const content = `Associação Mãe Santíssima\n\nEste é o arquivo demonstrativo do seu Kit Devocional:\n- Nome do Material: ${fileName}\n\nNa versão final de produção do cliente, este link fará o download do arquivo PDF/ZIP completo contendo o material diagramado de 100+ páginas.`;
                const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
                fileUrl = URL.createObjectURL(blob);
                finalFileName = fileName.replace(/\.pdf$/, '-Demonstracao.txt').replace(/\.zip$/, '-Demonstracao.txt');
            }
            
            // Dispara o download real no navegador
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = finalFileName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            
            this.showToast(`✅ Arquivo ${finalFileName} baixado com sucesso!`);
        }, 1000);
    },

    generateBookmarksSheet(callback) {
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 800;
        const ctx = canvas.getContext('2d');
        
        // Fundo Creme
        ctx.fillStyle = '#faf6ee';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Título da Folha de Impressão
        ctx.fillStyle = '#0b2545';
        ctx.font = 'bold 32px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText('Marcadores de Bíblia - Salvai-me Mãe Santíssima', canvas.width / 2, 60);
        
        ctx.fillStyle = '#64748b';
        ctx.font = 'italic 16px sans-serif';
        ctx.fillText('Instruções de Impressão: Imprima em papel de alta gramatura (ex: Opalina ou Couchê 240g), recorte nas bordas externas e dobre ao meio.', canvas.width / 2, 95);
        
        // Carrega imagem de Nossa Senhora
        const img = new Image();
        img.src = 'assets/ns_aparecida.png';
        
        const drawAll = () => {
            // Desenha Frente do Marcador (Esquerda)
            this.drawSingleBookmark(ctx, 240, 140, 320, 580, 'Salvai-me Rainha', 'São Bernardo', '“Nunca se ouviu dizer que algum daqueles que recorreu à vossa proteção fosse por Vós desamparado.”', img, true);
            
            // Desenha Verso do Marcador (Direita)
            this.drawSingleBookmark(ctx, 640, 140, 320, 580, 'Consagração', 'São Luís de Montfort', '“Sou todo vosso, ó Rainha e Mãe minha, e tudo o que tenho vos pertence. Guardai-me como propriedade vossa.”', img, false);
            
            callback(canvas.toDataURL('image/png'));
        };
        
        img.onload = drawAll;
        img.onerror = drawAll;
    },

    drawSingleBookmark(ctx, x, y, w, h, title, author, quote, img, isFront) {
        // Borda dourada externa
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 4;
        ctx.strokeRect(x, y, w, h);
        
        // Borda pontilhada interna
        ctx.strokeStyle = 'rgba(170, 124, 17, 0.3)';
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 4]);
        ctx.strokeRect(x + 8, y + 8, w - 16, h - 16);
        ctx.setLineDash([]); // reset
        
        // Título do Marcador
        ctx.fillStyle = '#0b2545';
        ctx.font = 'bold 24px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText(title, x + w/2, y + 45);
        
        // Cruz de Ouro
        ctx.fillStyle = '#d4af37';
        ctx.font = '28px Georgia';
        ctx.fillText('†', x + w/2, y + 85);
        
        // Área da Arte
        const artY = y + 115;
        const artH = 190;
        const artW = w - 40;
        const artX = x + 20;
        
        if (isFront && img) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(artX, artY, artW, artH);
            ctx.clip();
            // centralizar imagem
            ctx.drawImage(img, artX - 10, artY - 30, artW + 20, artH + 60);
            ctx.restore();
        } else {
            // Desenho do Terço no Verso
            ctx.fillStyle = 'rgba(212, 175, 55, 0.08)';
            ctx.fillRect(artX, artY, artW, artH);
            ctx.strokeStyle = 'rgba(212, 175, 55, 0.25)';
            ctx.strokeRect(artX, artY, artW, artH);
            
            ctx.fillStyle = '#aa7c11';
            ctx.font = '48px sans-serif';
            ctx.fillText('📿', x + w/2, artY + artH/2 + 15);
        }
        
        // Texto da Citação (com quebra de linha)
        ctx.fillStyle = '#1e293b';
        ctx.font = 'italic 16px Georgia';
        this.wrapTextOnCanvas(ctx, quote, x + w/2, y + 360, w - 50, 24);
        
        // Autor da Citação no Rodapé
        ctx.fillStyle = '#64748b';
        ctx.font = 'bold 11px sans-serif';
        ctx.fillText(author.toUpperCase(), x + w/2, y + h - 35);
    },

    wrapTextOnCanvas(ctx, text, x, y, maxWidth, lineHeight) {
        const words = text.split(' ');
        let line = '';
        let currentY = y;
        
        for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = ctx.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > maxWidth && n > 0) {
                ctx.fillText(line, x, currentY);
                line = words[n] + ' ';
                currentY += lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, x, currentY);
    },

    generatePosterNossaSenhora(callback) {
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 1130;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = '#faf6ee';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 6;
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
        
        ctx.strokeStyle = '#0b2545';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(32, 32, canvas.width - 64, canvas.height - 64);
        
        const img = new Image();
        img.src = 'assets/ns_aparecida.png';
        
        const drawAll = () => {
            if (img.complete && img.naturalWidth !== 0) {
                const imgW = 540;
                const imgH = 540;
                ctx.drawImage(img, (canvas.width - imgW) / 2, 130, imgW, imgH);
            } else {
                ctx.fillStyle = '#aa7c11';
                ctx.font = '120px sans-serif';
                ctx.textAlign = 'center';
                ctx.fillText('†', canvas.width / 2, 400);
            }
            
            ctx.fillStyle = '#0b2545';
            ctx.font = 'bold 36px Georgia';
            ctx.textAlign = 'center';
            ctx.fillText('Nossa Senhora da', canvas.width / 2, 780);
            ctx.fillText('Conceição Aparecida', canvas.width / 2, 825);
            
            ctx.fillStyle = '#d4af37';
            ctx.font = 'bold italic 22px Georgia';
            ctx.fillText('Rainha e Padroeira do Brasil', canvas.width / 2, 885);
            
            ctx.fillStyle = '#64748b';
            ctx.font = 'italic 16px sans-serif';
            ctx.fillText('Associação Mãe Santíssima', canvas.width / 2, 1040);
            
            callback(canvas.toDataURL('image/png'));
        };
        
        img.onload = drawAll;
        img.onerror = drawAll;
    },

    generatePosterConsagracao(callback) {
        const canvas = document.createElement('canvas');
        canvas.width = 800;
        canvas.height = 1130;
        const ctx = canvas.getContext('2d');
        
        ctx.fillStyle = '#faf6ee';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = '#0b2545';
        ctx.lineWidth = 6;
        ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
        
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(32, 32, canvas.width - 64, canvas.height - 64);
        
        ctx.fillStyle = '#d4af37';
        ctx.font = '48px Georgia';
        ctx.textAlign = 'center';
        ctx.fillText('†', canvas.width / 2, 120);
        
        ctx.fillStyle = '#0b2545';
        ctx.font = 'bold 36px Georgia';
        ctx.fillText('Consagração a Nossa Senhora', canvas.width / 2, 210);
        
        ctx.strokeStyle = 'rgba(212, 175, 55, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(250, 250);
        ctx.lineTo(550, 250);
        ctx.stroke();
        
        ctx.fillStyle = '#1e293b';
        ctx.font = 'italic 22px Georgia';
        
        const text = 'Ó minha Senhora, ó minha Mãe,\n' +
                     'eu me ofereço todo a vós\n' +
                     'e, em prova da minha devoção para convosco,\n' +
                     'vos consagro neste dia e para sempre,\n' +
                     'meus olhos, meus ouvidos, minha boca,\n' +
                     'meu coração e todo o meu ser.\n\n' +
                     'E porque assim sou vosso,\n' +
                     'ó incomparável Mãe,\n' +
                     'guardai-me e defendei-me\n' +
                     'como coisa e propriedade vossa.\n\n' +
                     'Amém.';
                     
        const lines = text.split('\n');
        let currentY = 320;
        lines.forEach(line => {
            ctx.fillText(line, canvas.width / 2, currentY);
            currentY += 40;
        });
        
        ctx.fillStyle = '#aa7c11';
        ctx.font = 'bold 16px sans-serif';
        ctx.fillText('ASSOCIAÇÃO MÃE SANTÍSSIMA', canvas.width / 2, 1020);
        
        callback(canvas.toDataURL('image/png'));
    },

    showToast(message) {
        const toast = document.getElementById('app-toast');
        const text = document.getElementById('toast-text');
        
        text.innerText = message;
        toast.style.display = 'flex';
        
        // Clear previous timeouts if click fast
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
        }
        
        this.toastTimeout = setTimeout(() => {
            toast.style.animation = 'none';
            // Trigger reflow to restart animation
            toast.offsetHeight; 
            toast.style.display = 'none';
        }, 3000);
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
