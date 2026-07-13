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
        }
    ],

    // Novena Sample Data
    novenaDays: [
        {
            day: "1º Dia da Novena",
            title: "Senhora Aparecida: Mãe da Esperança",
            text: `
                <p><strong>Palavra da Igreja:</strong> "Esperar contra toda esperança!" Maria permaneceu de pé junto à Cruz. Ela guardou a fé mesmo no sábado do silêncio.</p>
                <p><strong>Meditação:</strong> Ao iniciarmos esta novena, pedimos a Nossa Senhora Aparecida que cure nossos desânimos e nos ensine a confiar no tempo de Deus. Nenhum filho de Maria é abandonado.</p>
                <p><strong>Oração do Dia:</strong> Ó Virgem Aparecida, consoladora dos aflitos, colocamos em vosso coração nossa esperança. Intercedei por nós junto a Jesus para obtermos as forças necessárias para vencer os desafios diários. Amém.</p>
            `,
            number: "Missa de Abertura"
        },
        {
            day: "2º Dia da Novena",
            title: "Senhora Aparecida: Estrela da Família",
            text: `
                <p><strong>Palavra da Igreja:</strong> A família é o santuário da vida e a igreja doméstica. Maria, José e Jesus formaram o lar sagrado de Nazaré.</p>
                <p><strong>Meditação:</strong> Colocamos sob o manto protetor de Nossa Senhora todas as famílias do Brasil, especialmente aquelas que sofrem com divisões, desemprego ou enfermidades.</p>
                <p><strong>Oração do Dia:</strong> Mãe Aparecida, abençoai nossa casa, protegei nossos filhos e trazei harmonia, paz e fé a todos os casais. Fazei do nosso lar uma extensão de Nazaré. Amém.</p>
            `,
            number: "Missa das Famílias"
        },
        {
            day: "3º Dia da Novena",
            title: "Senhora Aparecida: Auxílio dos Enfermos",
            text: `
                <p><strong>Palavra da Igreja:</strong> "Estive doente e me visitastes". Jesus curava os necessitados e Maria compartilha desse amor compassivo.</p>
                <p><strong>Meditação:</strong> O sofrimento físico e mental faz parte do mistério da cruz. Entregamos a Maria a cura e o alívio das dores daqueles que padecem nos hospitais e lares.</p>
                <p><strong>Oração do Dia:</strong> Ó Mãe de Misericórdia, saúde dos enfermos, derramai vossas graças de restabelecimento físico e espiritual sobre todos os que sofrem. Dai-nos paciência e confiança. Amém.</p>
            `,
            number: "Missa da Saúde"
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
            let fileUrl = '';
            let finalFileName = fileName;
            
            // Se for imagem ou pôster, baixa a arte real ns_aparecida.png
            if (fileName.endsWith('.jpg') || fileName.endsWith('.png') || fileName.includes('Poster-Nossa-Senhora') || fileName.includes('Wallpaper')) {
                fileUrl = 'assets/ns_aparecida.png';
                // Garante que a extensão do arquivo seja de imagem (.png)
                finalFileName = fileName.replace(/\.pdf$/, '.png').replace(/\.jpg$/, '.png');
            } else {
                // Gera um arquivo de texto de demonstração e muda a extensão para .txt
                const content = `Associação Cultural Salvai-me Mãe Santíssima\n\nEste é o arquivo demonstrativo do seu Kit Devocional:\n- Nome do Material: ${fileName}\n\nNa versão final de produção do cliente, este link fará o download do arquivo PDF/ZIP completo contendo o material diagramado de 100+ páginas.`;
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
