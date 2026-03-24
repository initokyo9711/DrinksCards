// ============================================================
// DRINKS CARD GAME — Standalone (No Firebase)
// ============================================================

// Mad-Libs Generator
const GENERATORS = {
    "Party": {
        level: "Medium",
        subjects: [
            "Kamu", "Orang di sebelah kirimu", "Orang di sebelah kananmu",
            "Pemain termuda", "Pemain tertua", "Semua cowok", "Semua cewek",
            "Semua pemain dengan baju gelap", "Semua pemain dengan baju terang",
            "Pemain dengan tubuh paling tinggi", "Pemain dengan baterai HP paling rendah",
            "Orang yang terakhir kali update status WA/IG", "Orang yang pakai kacamata",
            "Pemain yang tanggal lahirnya paling dekat", "Orang yang pegang gelas saat ini",
            "Dua orang di sebelah kanan dan kirimu", "Pemain paling cerewet",
            "Pemain paling pendiam", "Orang yang rambutnya paling panjang",
            "Kamu dan orang di seberangmu", "Pemain yang belum punya pacar",
            "Semua orang kecuali yang menarik kartu ini", "Orang dengan sepatu terbaik",
            "Pemain dengan follower IG terbanyak", "Pemain yang baru ganti gaya rambut",
            "Pemain yang HP-nya retak", "Orang yang bawa kendaraan hari ini"
        ],
        actions: [
            "harus sebutkan 3 nama Presiden dalam 5 detik",
            "harus nyanyi reff lagu dangdut kesukaan",
            "harus menirukan gaya artis terkenal sampai ada yang bisa tebak",
            "harus berdiri dengan 1 kaki selama 30 detik",
            "harus cerita hal paling memalukan waktu SD",
            "harus pilih 1 'budak minum' yang ikut minum tiap kali dia minum selama 3 putaran",
            "harus sebutkan 5 merk mobil dalam 5 detik",
            "harus menirukan gaya hewan yang dipilih pemain lain",
            "harus joget TikTok acak secara barbar",
            "harus tatap mata orang di depan tanpa kedip selama 15 detik",
            "harus push up 5 kali sambil dihitung lantang",
            "harus bicara pakai aksen keminggris sampai giliran berikutnya",
            "harus tahan tawa sementara pemain lain menggoda selama 30 detik",
            "harus sebutkan 5 kata benda berawalan huruf K",
            "harus ganti nama panggilan jadi 'Monyet' selama 1 putaran penuh",
            "harus membacakan chat terakhir di WhatsApp tanpa sebut nama",
            "harus menunjukkan foto selfie terakhir di galeri HP",
            "tidak boleh menyebut kata 'aku' atau 'kamu'",
            "harus pura-pura jadi presenter berita saat mengambil giliran minum",
            "harus menggombali orang di sisi kanan",
            "harus tebak warna celana dalam orang di sisi kiri",
            "harus merangkul pemain di sebelah kanan hingga putaran berikutnya",
            "harus membius tawa (jokes bapak-bapak), kalau garing minum 2x lipat"
        ]
    },
    "Brutal": {
        level: "Hard",
        subjects: [
            "Kamu", "Pemain di sebelah kanan", "Pemain di sebelah kiri",
            "Pemilik HP termurah di meja ini", "Pemain paling tua",
            "Pemain paling muda", "Orang yang paling banyak minum hari ini",
            "Orang yang duduk di depanmu", "Kamu dan orang di seberang",
            "Semua pemain", "Pemain yang terakhir kali tertawa",
            "Kamu sendiri", "Semua pemain berbaju hitam/gelap",
            "Pemain yang jomblo terlama", "Pemain yang pakai cincin/gelang",
            "Dua pemain berlawanan jenis", "Pemain yang suara ketawanya paling aneh",
            "Orang yang paling bau parfumnya", "Pemain dengan isi dompet paling tipis"
        ],
        actions: [
            "harus tampar pelan pantat sendiri",
            "harus hapus 1 aplikasi random di HP sekarang juga",
            "harus tunjukkan DM Instagram urutan ke-3 dari atas",
            "harus telepon kontak nomor 5 di HP dan bilang 'Aku putus/hamil'",
            "harus jilat siku sendiri (dijamin susah!)",
            "harus minum campuran minuman 3 pemain lainnya (jika aman)",
            "harus makan 1 sendok teh saus sambal murni",
            "harus cium ketiak orang di sebelah kanan (lewat baju)",
            "harus telpon bos/dosen dan bilang 'I love you'",
            "harus spill siapa orang di ruangan ini yang diam-diam disukai",
            "harus tahan napas dalam baskom air selama 5 detik",
            "harus buka history pencarian YouTube terakhir dan bacakan lantang",
            "harus membaca chat paling atas di WhatsApp grup",
            "harus push-up 15 kali",
            "harus minta maaf ke benda mati di meja selama 1 menit penuh",
            "harus ngemut es batu sampai cair sepenuhnya di mulut",
            "harus menunjukkan mutasi rekening M-Banking terakhir",
            "harus memposting selfie jelek dengan caption 'Aku wibu' di Story",
            "harus memberikan HP-nya ke pemain lain bebas selama 30 detik",
            "harus cium sepatu orang di seberang meja"
        ]
    },
    "Couple": {
        level: "Hot",
        subjects: [
            "Kamu", "Pasanganmu", "Kalian berdua",
            "Kamu (sebagai sang Dominan)", "Pasanganmu (sebagai sang Penurut)",
            "Kamu (tutup matamu sekarang)", "Pasanganmu (tutup matanya sekarang)",
            "Si cowok di hubungan ini", "Si cewek di hubungan ini",
            "Pihak yang nyetir ke sini tadi",
            "Siapapun yang lebih gampang cemburu",
            "Siapapun yang menang main batu gunting kertas barusan",
            "Siapapun yang lebih sering 'minta' jatah duluan",
            "Pihak yang lebih nakal di ranjang"
        ],
        actions: [
            "bebas melakukan APAPUN ke pasangan di area pinggang ke atas selama 2 menit",
            "bebas melakukan APAPUN ke pasangan di area pinggang ke bawah selama 2 menit",
            "harus melepaskan SELURUH pakaian (tersisa pakaian dalam) sampai 3 putaran ke depan",
            "harus melepaskan 1 per 1 potong pakaian lawan jenis pakai gigi",
            "harus memangku pasangan dengan posisi intim selama 5 putaran penuh",
            "harus memberi ciuman basah dan gigitan kecil dari ceruk leher turun ke dada",
            "harus meraba area paling sensitif pasangan lewat dalam baju selama 30 detik tanpa henti",
            "harus saling tatap mata 1 menit sambil berangkulan erat, yang tertawa lepas 1 pakaian",
            "harus duduk ngangkang berhadapan di atas pangkuan sedekat mungkin",
            "harus ciuman french kiss sangat liar selama minimal 25 detik",
            "harus membiarkan tangannya diikat (pakai baju/tali) selama 2 putaran",
            "harus menjilat pelan daun telinga pasangan lalu bisikkan kalimat kotor",
            "harus memberikan cupang (hickey) nyata di tempat yang bisa sedikit terlihat",
            "harus suap-suapan minuman keras langsung dari mulut ke mulut",
            "harus elus paha bagian dalam hingga sangat dekat batas inti selama 10 detik",
            "harus pasrah digoda dan disentuh di manapun 1 menit penuh tanpa boleh membalas sama sekali (hanya boleh mendesah)",
            "harus mengisap jari telunjuk pasangan secara sugestif selama 5 detik",
            "bebas menyentuh titik kelemahan pasangan di balik pakaian selama 30 detik penuh"
        ]
    }
};

// ============================================================
// STATE
// ============================================================
let currentMode = null;
let players = [];
let currentTurnIndex = 0;
let cardCount = 0;
let isFlipped = false;

// DOM
const modeScreen = document.getElementById('modeScreen');
const playerScreen = document.getElementById('playerScreen');
const gameScreen = document.getElementById('gameScreen');
const cardContainer = document.getElementById('cardContainer');
const turnIndicator = document.getElementById('turnIndicator');

// Utility
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

function showScreen(screen) {
    [modeScreen, playerScreen, gameScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
    screen.classList.remove('animate-enter');
    void screen.offsetWidth;
    screen.classList.add('animate-enter');
}

// ============================================================
// SCREEN 1: MODE SELECT
// ============================================================
document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        currentMode = btn.dataset.mode;
        players = [];
        currentTurnIndex = 0;
        cardCount = 0;
        isFlipped = false;

        document.getElementById('playerModeLabel').textContent = "Mode: " + currentMode;
        renderPlayerList();
        showScreen(playerScreen);
    });
});

// ============================================================
// SCREEN 2: PLAYER SETUP
// ============================================================
const playerInput = document.getElementById('playerNameInput');
const addPlayerBtn = document.getElementById('addPlayerBtn');

function renderPlayerList() {
    const list = document.getElementById('playerList');
    const countEl = document.getElementById('playerCount');

    if (players.length === 0) {
        list.innerHTML = '';
        countEl.textContent = 'Belum ada pemain ditambahkan (opsional)';
        return;
    }

    list.innerHTML = players.map((name, i) => `
        <span class="player-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-indigo-300 animate-enter">
            ${name}
            <button onclick="window.removePlayer(${i})" class="text-gray-600 hover:text-red-400 transition-colors text-xs ml-1">✕</button>
        </span>
    `).join('');

    countEl.textContent = `${players.length} pemain`;
}

function addPlayer() {
    const name = playerInput.value.trim();
    if (!name) return;
    if (players.length >= 20) return alert("Maksimal 20 pemain!");
    players.push(name);
    playerInput.value = '';
    playerInput.focus();
    renderPlayerList();
}

addPlayerBtn.addEventListener('click', addPlayer);
playerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addPlayer();
});

window.removePlayer = function(index) {
    players.splice(index, 1);
    renderPlayerList();
};

// Start Game
document.getElementById('startGameBtn').addEventListener('click', () => {
    currentTurnIndex = 0;
    cardCount = 0;
    isFlipped = false;

    document.getElementById('gameModeLabel').textContent = "Mode: " + currentMode;
    document.getElementById('cardCounter').textContent = "0";
    document.getElementById('cardChallenge').textContent = "Tap kartu untuk mulai!";
    cardContainer.classList.remove('flipped');

    // Show turn indicator only if players exist
    if (players.length > 0) {
        turnIndicator.classList.remove('hidden');
        document.getElementById('turnName').textContent = players[0];
    } else {
        turnIndicator.classList.add('hidden');
    }

    showScreen(gameScreen);
});

// Back to Mode Select
document.getElementById('backToModeBtn').addEventListener('click', () => {
    showScreen(modeScreen);
});

// Back to Lobby from Game
document.getElementById('backToLobbyBtn').addEventListener('click', () => {
    showScreen(modeScreen);
});

// ============================================================
// SCREEN 3: GAME LOGIC
// ============================================================
function generateChallenge(mode) {
    let actualMode = mode;
    if (mode === "Mixed") {
        const categories = ["Party", "Brutal", "Couple"];
        actualMode = pick(categories);
    }

    const gen = GENERATORS[actualMode];
    let subject = pick(gen.subjects);

    // If players exist, randomly replace generic subjects with actual player names
    if (players.length > 0) {
        const usePlayerName = Math.random() < 0.5; // 50% chance to use a real name
        if (usePlayerName) {
            subject = pick(players);
        }
    }

    const action = pick(gen.actions);
    return {
        challenge: `${subject} ${action}. Tolak = Minum 1 gelas!`,
        category: actualMode,
        level: gen.level
    };
}

function advanceTurn() {
    if (players.length === 0) return;
    currentTurnIndex = (currentTurnIndex + 1) % players.length;
    document.getElementById('turnName').textContent = players[currentTurnIndex];
}

window.drawCard = function() {
    if (!currentMode) return;

    if (!isFlipped) {
        // Flip to challenge
        const card = generateChallenge(currentMode);
        document.getElementById('cardChallenge').textContent = card.challenge;
        document.getElementById('cardCategory').textContent = card.category;
        document.getElementById('cardLevel').textContent = "Level: " + card.level;

        cardCount++;
        document.getElementById('cardCounter').textContent = cardCount;

        cardContainer.classList.add('flipped');
        cardContainer.classList.remove('animate-enter');
        void cardContainer.offsetWidth;
        cardContainer.classList.add('animate-enter');

        isFlipped = true;
    } else {
        // Flip back to cover + advance turn
        cardContainer.classList.remove('flipped');
        cardContainer.classList.remove('animate-enter');
        void cardContainer.offsetWidth;
        cardContainer.classList.add('animate-enter');

        advanceTurn();
        isFlipped = false;
    }
};
