// Šibenica - Geografia Ázie (6. ročník)

const words = [
    "kazachstan", "bangladéš", "tadžikistan", "uzbekistan", "mongolsko", "filipíny", "indonézia", "malajzia", "turkmenistan", "kirgizstan", "azerbajdžan", "arménsko", "singapur", "maldivy", "pakistan", "vietnamci", "himálaje", "gobi", "mekong", "amudarja",
    "hindukúš", "pamírskeho", "aralské more", "kaspické more", "japonské more", "sumatra", "borneo", "tajga", "bambusové lesy", "čajovník", "bavlník"
];

const wordHints = {
    "kazachstan": "Štát v strednej Ázii",
    "bangladéš": "Štát v južnej Ázii",
    "tadžikistan": "Štát v strednej Ázii",
    "uzbekistan": "Štát v strednej Ázii",
    "mongolsko": "Štát vo východnej Ázii",
    "filipíny": "Ostrovy v juhovýchodnej Ázii",
    "indonézia": "Ostrovy v juhovýchodnej Ázii",
    "malajzia": "Štát v juhovýchodnej Ázii",
    "turkmenistan": "Štát v strednej Ázii",
    "kirgizstan": "Štát v strednej Ázii",
    "azerbajdžan": "Štát na Kaukaze",
    "arménsko": "Štát na Kaukaze",
    "singapur": "Mestský štát v juhovýchodnej Ázii",
    "maldivy": "Ostrovy v Indickom oceáne",
    "pakistan": "Štát v južnej Ázii",
    "vietnamci": "Obyvatelia štátu v juhovýchodnej Ázii",
    "himaláje": "Najvyššie pohorie sveta",
    "gobi": "Púšť v strednej Ázii",
    "mekong": "Rieka v juhovýchodnej Ázii",
    "amudarja": "Rieka v strednej Ázii",
    "hindukúš": "Pohorie v strednej Ázii",
    "pamír": "Pohorie v strednej Ázii",
    "aralské more": "Jazero medzi Kazachstanom a Uzbekistanom",
    "kaspické more": "Najväčšie jazero sveta",
    "japonské more": "More medzi Japonskom a Áziou",
    "sumatra": "Veľký ostrov v Indonézii",
    "borneo": "Veľký ostrov v juhovýchodnej Ázii",
    "tajga": "Rozsiahly ihličnatý les v severnej Ázii",
    "bambusové lesy": "Typické lesy v Číne a juhovýchodnej Ázii",
    "čajovník": "Rastlina pestovaná v Ázii na výrobu čaju",
    "bavlník": "Rastlina pestovaná v Ázii na výrobu textilu"
};

// Pridanie zaujímavostí
const wordFacts = {
    "kazachstan": "Kazachstan je najväčší vnútrozemský štát na svete.",
    "bangladéš": "Bangladéš má jednu z najvyšších hustôt obyvateľstva na svete.",
    "tadžikistan": "Tadžikistan je najhornatejšia krajina v strednej Ázii.",
    "uzbekistan": "Uzbekistan je jednou z dvoch vnútrozemských krajín obklopených ďalšími vnútrozemskými krajinami.",
    "mongolsko": "Mongolsko je najmenej husto obývaný nezávislý štát na svete.",
    "filipíny": "Filipíny tvoria viac ako 7 000 ostrovov.",
    "indonézia": "Indonézia je najväčší ostrovný štát na svete.",
    "malajzia": "Malajzia je známa svojimi dažďovými pralesmi a orangutanmi.",
    "turkmenistan": "V Turkmenistane sa nachádza tzv. Brána do pekla – horiaci kráter Darvaza.",
    "kirgizstan": "Kirgizstan je známy svojimi vysokými horami a jazerom Issyk-Kul.",
    "azerbajdžan": "Azerbajdžan je krajina ohňa – má veľa prírodných plynových výverov.",
    "arménsko": "Arménsko bolo prvou krajinou, ktorá prijala kresťanstvo ako štátne náboženstvo.",
    "singapur": "Singapur je jedným z najbohatších a najčistejších miest na svete.",
    "maldivy": "Maldivy sú najnižšie položený štát na svete.",
    "pakistan": "V Pakistane sa nachádza druhý najvyšší vrch sveta – K2.",
    "vietnamci": "Vietnamská kuchyňa je známa svojimi polievkami pho a jarnými rolkami.",
    "himaláje": "V Himalájach sa nachádza Mount Everest, najvyšší vrch sveta.",
    "gobi": "Púšť Gobi je známa extrémnymi teplotnými rozdielmi.",
    "mekong": "Mekong je jednou z najdlhších riek Ázie a preteká šiestimi krajinami.",
    "amudarja": "Amudarja je dôležitá rieka pre zavlažovanie v strednej Ázii.",
    "hindukúš": "Hindukúš je známy svojimi vysokými a strmými vrchmi.",
    "pamír": "Pamír je známy ako 'strecha sveta' kvôli svojim vysokým horám.",
    "aralské more": "Aralské more sa dramaticky zmenšilo v dôsledku zavlažovania bavlníkových polí.",
    "kaspické more": "Kaspické more je známe svojimi obrovskými rozmermi a bohatstvom na ropu a plyn.",
    "japonské more": "Japonské more je známe svojimi silnými prúdmi a bohatstvom na morské plody.",
    "sumatra": "Sumatra je domovom mnohých ohrozených druhov, vrátane orangutanov a tigrov.",
    "borneo": "Borneo je tretí najväčší ostrov na svete a je rozdelené medzi tri krajiny.",
    "tajga": "Tajga je najväčší svetový biotop ihličnatých lesov.",
    "bambusové lesy": "Bambusové lesy sú domovom mnohých druhov, vrátane pandy veľkej.",
    "čajovník": "Čajovník je rastlina, z ktorej sa získavajú listy na výrobu čaju.",
    "bavlník": "Bavlník je rastlina, z ktorej sa získavajú vlákna na výrobu textilu."
};

let selectedWords = [];
let currentRound = 0;
let maxRounds = 8;
let maxTries = 8;
let triesLeft = maxTries;
let guessedLetters = [];
let word = "";
let timerInterval = null;
let totalTime = 600; // 10 minút v sekundách
let timeLeft = totalTime;
let score = 0;
let correctAnswers = 0;
let wrongAnswers = 0;

const startBtn = document.getElementById('start-btn');
const startScreen = document.getElementById('start-screen');
const gameScreen = document.getElementById('game-screen');
const timerDiv = document.getElementById('timer');
const hangmanDiv = document.getElementById('hangman');
const wordDiv = document.getElementById('word');
const lettersDiv = document.getElementById('letters');
const infoDiv = document.getElementById('info');
const nextRoundBtn = document.getElementById('next-round-btn');
const restartBtn = document.getElementById('restart-btn');

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    shuffle(words);
    selectedWords = words.slice(0, maxRounds); // maxRounds = 8
    currentRound = 0;
    score = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    timeLeft = totalTime;
    startScreen.style.display = 'none';
    gameScreen.style.display = 'block';
    restartBtn.style.display = 'none';
    nextRoundBtn.style.display = 'none';
    startTimer();
    startRound();
}

function startTimer() {
    updateTimer();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endGame('Čas vypršal!');
        }
    }, 1000);
}

function updateTimer() {
    let min = Math.floor(timeLeft / 60);
    let sec = timeLeft % 60;
    timerDiv.textContent = `Čas: ${min}:${sec.toString().padStart(2, '0')}`;
}

function startRound() {
    guessedLetters = [];
    triesLeft = maxTries;
    word = selectedWords[currentRound];
    infoDiv.textContent = '';
    nextRoundBtn.style.display = 'none';
    updateHangman();
    updateWord();
    renderLetters();
    // Odstrániť starú nápovedu ak existuje
    let oldHint = document.getElementById('hint');
    if (oldHint) oldHint.remove();
    // Pridať novú nápovedu
    let hint = wordHints[word] || "Geografický pojem z Ázie";
    document.getElementById('word').insertAdjacentHTML('beforebegin', `<div id="hint" style="margin-bottom:8px;color:#0074d9;font-size:1.1em;">Nápoveda: ${hint}</div>`);
    updateTriesAndRound();
}

function updateHangman() {
    hangmanDiv.innerHTML = `<svg width="120" height="120">
        <line x1="10" y1="110" x2="110" y2="110" stroke="#333" stroke-width="4" />
        <line x1="40" y1="110" x2="40" y2="20" stroke="#333" stroke-width="4" />
        <line x1="40" y1="20" x2="90" y2="20" stroke="#333" stroke-width="4" />
        <line x1="90" y1="20" x2="90" y2="35" stroke="#333" stroke-width="4" />
        ${triesLeft <= 7 ? '<circle cx="90" cy="45" r="10" stroke="#333" stroke-width="3" fill="none" />' : ''}
        ${triesLeft <= 6 ? '<line x1="90" y1="55" x2="90" y2="80" stroke="#333" stroke-width="3" />' : ''}
        ${triesLeft <= 5 ? '<line x1="90" y1="60" x2="80" y2="70" stroke="#333" stroke-width="3" />' : ''}
        ${triesLeft <= 4 ? '<line x1="90" y1="60" x2="100" y2="70" stroke="#333" stroke-width="3" />' : ''}
        ${triesLeft <= 3 ? '<line x1="90" y1="80" x2="80" y2="100" stroke="#333" stroke-width="3" />' : ''}
        ${triesLeft <= 2 ? '<line x1="90" y1="80" x2="100" y2="100" stroke="#333" stroke-width="3" />' : ''}
        ${triesLeft <= 1 ? '<circle cx="90" cy="48" r="2" fill="#d9534f" />' : ''}
        ${triesLeft <= 0 ? '<text x="60" y="60" font-size="18" fill="#d9534f">X</text>' : ''}
    </svg>`;
}

function updateWord() {
    let display = '';
    for (let i = 0; i < word.length; i++) {
        const ch = word[i];
        if (ch === ' ') {
            if (guessedLetters.includes(' ')) {
                display += ' ';
            } else {
                display += '_';
            }
        } else if (ch === '-') {
            display += '-';
        } else if (guessedLetters.includes(ch)) {
            display += ch.toUpperCase();
        } else {
            display += '_';
        }
    }
    wordDiv.textContent = display;
}

function updateTriesAndRound() {
    document.getElementById('tries-left').textContent = `Pokusy: ${triesLeft}/${maxTries}`;
    document.getElementById('round-info').textContent = `Kolo: ${currentRound + 1}/${maxRounds}`;
}

function renderLetters() {
    const abc = 'AÁÄBCČDĎEÉFGHIÍJKLĹĽMNŇOÓÔPQRŔSŠTŤUÚVWXYZŽ';
    lettersDiv.innerHTML = '';
    for (let ch of abc) {
        const btn = document.createElement('button');
        btn.textContent = ch;
        btn.style.textTransform = 'uppercase';
        btn.disabled = guessedLetters.map(l=>l.toUpperCase()).includes(ch) || triesLeft === 0;
        if (guessedLetters.map(l=>l.toUpperCase()).includes(ch)) {
            btn.style.background = '#d9534f';
            btn.style.color = '#fff';
        }
        btn.onclick = () => guessLetter(ch);
        lettersDiv.appendChild(btn);
    }
    // Pridať tlačidlo medzery
    const spaceBtn = document.createElement('button');
    spaceBtn.textContent = 'MEDZERA';
    spaceBtn.style.minWidth = '60px';
    spaceBtn.disabled = guessedLetters.includes(' ');
    if (guessedLetters.includes(' ')) {
        spaceBtn.style.background = '#d9534f';
        spaceBtn.style.color = '#fff';
    }
    spaceBtn.onclick = () => guessLetter(' ');
    lettersDiv.appendChild(spaceBtn);
}

// Kontrola správnosti slovenského slova vrátane interpunkcie
function isSlovakWordValid(word) {
    // Slovenské písmená a povolené interpunkčné znaky
    const slovakRegex = /^[A-ZÁÄČĎEÉFGHIÍJKLĹĽMNŇOÓÔPQRŔSŠTŤUÚVWXYZŽa-záäčďéíĺľňóôŕšťúýž\-\s\.\,\!\?\:]+$/;
    return slovakRegex.test(word);
}

function showFact(word) {
    let fact = wordFacts[word] || "Zaujímavé, však?";
    infoDiv.textContent = `Správne! ${fact}`;
}

function guessLetter(ch) {
    ch = ch.toLowerCase();
    if (guessedLetters.includes(ch) || triesLeft === 0) return;
    guessedLetters.push(ch);
    if (word.includes(ch)) {
        updateWord();
        if (isWordGuessed()) {
            score++;
            correctAnswers++;
            showFact(word);
            nextRoundBtn.style.display = 'inline-block';
            disableLetters();
        }
    } else {
        triesLeft--;
        updateHangman();
        updateTriesAndRound();
        if (triesLeft === 0) {
            wrongAnswers++;
            infoDiv.textContent = `Prehral si! Slovo bolo: ${word.toUpperCase()}`;
            nextRoundBtn.style.display = 'inline-block';
            disableLetters();
        }
    }
    renderLetters();
}

function isWordGuessed() {
    for (let ch of word) {
        if (ch !== ' ' && ch !== '-' && !guessedLetters.includes(ch)) {
            return false;
        }
    }
    return true;
}

function disableLetters() {
    const btns = lettersDiv.querySelectorAll('button');
    btns.forEach(btn => btn.disabled = true);
}

nextRoundBtn.onclick = () => {
    currentRound++;
    if (currentRound < maxRounds) {
        startRound();
    } else {
        clearInterval(timerInterval);
        endGame('Hra dokončená!');
    }
};

restartBtn.onclick = () => {
    clearInterval(timerInterval);
    startGame();
};

function endGame(msg) {
    infoDiv.innerHTML = `${msg} Skóre: ${score}/${maxRounds}`;
    nextRoundBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
    disableLetters();
    // Zobraziť tabuľku výsledkov
    let table = `<div style='margin-top:20px;text-align:center;'>
        <table style='margin:0 auto;border-collapse:collapse;'>
            <tr><th style='padding:6px 16px;border:1px solid #0074d9;'>Správne</th><th style='padding:6px 16px;border:1px solid #0074d9;'>Nesprávne</th></tr>
            <tr><td style='padding:6px 16px;border:1px solid #0074d9;'>${correctAnswers}</td><td style='padding:6px 16px;border:1px solid #0074d9;'>${wrongAnswers}</td></tr>
        </table>
    </div>`;
    infoDiv.innerHTML += table;
}

// Podpis v pravom dolnom rohu
const podpis = document.createElement('div');
podpis.textContent = 'Alex F.';
podpis.style.position = 'fixed';
podpis.style.right = '24px';
podpis.style.bottom = '16px';
podpis.style.color = '#0074d9';
podpis.style.fontWeight = 'bold';
podpis.style.fontSize = '1.1em';
podpis.style.opacity = '0.7';
document.body.appendChild(podpis);

// Pridať logo do ľavého dolného rohu
const logo = document.createElement('img');
logo.src = 'https://zssvit.edupage.org/photos/partners/thumbs/max1920x1920trifxf26e002e8398c3aa_SVIT_Komenskeho_logo_FINAL_2016_C.png';
logo.alt = 'Logo školy';
logo.style.position = 'fixed';
logo.style.left = '16px';
logo.style.bottom = '16px';
logo.style.width = '100px';
logo.style.height = '100px';
logo.style.zIndex = '1000';
document.body.appendChild(logo);

startBtn.onclick = startGame;

// Pridať podporu pre stlačenie medzerníka na klávesnici
window.addEventListener('keydown', function(e) {
    if (document.getElementById('game-screen').style.display !== 'none') {
        if (e.code === 'Space' || e.key === ' ') {
            guessLetter(' ');
        }
    }
});
