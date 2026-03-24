<!DOCTYPE html>
<html lang="id" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Drinks Card Game</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-[#0a0a1a] text-white font-['Outfit'] min-h-screen flex flex-col items-center justify-center p-4 select-none overflow-x-hidden">

    <!-- ============== SCREEN 1: MODE SELECT ============== -->
    <div id="modeScreen" class="w-full max-w-md flex flex-col items-center text-center animate-enter">
        <!-- Logo Area -->
        <div class="mb-10 animate-float">
            <div class="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/20">
                <img src="{{ asset('DrinksCardDesign.png') }}" alt="Logo" class="w-full h-full object-cover">
            </div>
            <h1 class="text-4xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">DRINKS CARD</h1>
            <p class="text-gray-500 text-sm font-medium mt-1 tracking-widest uppercase">Game Edition</p>
        </div>

        <p class="text-gray-400 font-semibold text-xs tracking-[0.25em] uppercase mb-5">— Select Mode —</p>

        <div class="grid grid-cols-2 gap-4 w-full mb-4">
            <button data-mode="Party" class="mode-btn group relative bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-black py-7 rounded-2xl text-2xl shadow-xl transition-all duration-300 active:scale-95 hover:scale-[1.03] glow-blue overflow-hidden">
                <span class="relative z-10 tracking-wider">PARTY</span>
                <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button data-mode="Brutal" class="mode-btn group relative bg-gradient-to-br from-orange-500 to-amber-600 text-white font-black py-7 rounded-2xl text-2xl shadow-xl transition-all duration-300 active:scale-95 hover:scale-[1.03] glow-orange overflow-hidden">
                <span class="relative z-10 tracking-wider">BRUTAL</span>
                <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button data-mode="Couple" class="mode-btn group relative bg-gradient-to-br from-pink-500 to-rose-600 text-white font-black py-7 rounded-2xl text-2xl shadow-xl transition-all duration-300 active:scale-95 hover:scale-[1.03] glow-pink overflow-hidden">
                <span class="relative z-10 tracking-wider">COUPLE</span>
                <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
            <button data-mode="Mixed" class="mode-btn group relative bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white font-black py-7 rounded-2xl text-2xl shadow-xl transition-all duration-300 active:scale-95 hover:scale-[1.03] glow-purple overflow-hidden">
                <span class="relative z-10 tracking-wider">MIXED</span>
                <div class="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
        </div>
    </div>

    <!-- ============== SCREEN 2: PLAYER SETUP ============== -->
    <div id="playerScreen" class="hidden w-full max-w-md flex flex-col items-center text-center">
        <div class="w-full glass rounded-2xl p-6 mb-4 animate-enter">
            <h2 class="text-2xl font-black mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Add Players</h2>
            <p id="playerModeLabel" class="text-gray-500 text-sm font-medium mb-5">Mode: Party 🎈</p>

            <!-- Add Player Input -->
            <div class="flex gap-2 mb-4">
                <input type="text" id="playerNameInput" placeholder="Ketik nama pemain..." maxlength="20"
                    class="flex-1 bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 font-semibold placeholder-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all">
                <button id="addPlayerBtn" class="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-5 py-3 rounded-xl transition-all active:scale-95 shadow-md shadow-indigo-500/20">
                    +
                </button>
            </div>

            <!-- Player List -->
            <div id="playerList" class="flex flex-wrap gap-2 mb-4 min-h-[40px] justify-center">
                <!-- Player chips will be injected here -->
            </div>

            <p id="playerCount" class="text-gray-600 text-xs font-medium mb-1">Belum ada pemain ditambahkan</p>
        </div>

        <!-- Action Buttons -->
        <button id="startGameBtn" class="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 rounded-2xl text-lg shadow-lg transition-all active:scale-95 hover:scale-[1.02] glow-emerald mb-3">
            Mulai Main!
        </button>
        <button id="backToModeBtn" class="w-full bg-white/5 hover:bg-white/10 text-gray-400 font-semibold py-3 rounded-2xl text-sm transition-all active:scale-95 border border-white/5">
            ← Ganti Mode
        </button>
    </div>

    <!-- ============== SCREEN 3: GAME ============== -->
    <div id="gameScreen" class="hidden w-full max-w-md flex flex-col items-center text-center">
        <!-- Header -->
        <div class="w-full flex justify-between items-center mb-4 animate-enter">
            <div class="text-left">
                <h1 class="text-xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">DRINKS CARD</h1>
                <p id="gameModeLabel" class="text-xs text-gray-600 font-semibold">Mode: Party 🎈</p>
            </div>
            <button id="backToLobbyBtn" class="glass text-gray-400 hover:text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all active:scale-95">
                ✕ Keluar
            </button>
        </div>

        <!-- Turn Indicator -->
        <div id="turnIndicator" class="hidden w-full glass rounded-xl px-4 py-2.5 mb-4 animate-enter">
            <p class="text-sm font-semibold text-gray-400">Giliran: <span id="turnName" class="text-indigo-400 font-bold text-base"></span></p>
        </div>

        <!-- Card Counter -->
        <p class="text-gray-600 text-xs font-semibold tracking-widest mb-3">KARTU KE-<span id="cardCounter" class="text-indigo-400">0</span></p>

        <!-- 3D Card Area -->
        <div id="cardContainer" class="w-full max-w-sm h-[400px] perspective-1000 mb-5 cursor-pointer animate-enter pulse-glow rounded-2xl" onclick="window.drawCard()">
            <div class="relative w-full h-full transition-transform duration-700 transform-style-3d flip-card-inner rounded-2xl" id="cardInner">
                <!-- Front Card (Cover) -->
                <div class="absolute w-full h-full backface-hidden rounded-2xl flex items-center justify-center border border-indigo-500/20 overflow-hidden bg-[#0d0d2b]">
                    <img src="{{ asset('DrinksCardDesign.png') }}" alt="Drinks Card" class="w-full h-full object-cover opacity-80">
                    <div class="absolute bottom-5 left-0 right-0">
                        <p class="text-white/50 text-xs font-semibold animate-pulse tracking-widest uppercase">Tap untuk buka</p>
                    </div>
                </div>

                <!-- Back Card (Challenge) -->
                <div class="absolute w-full h-full backface-hidden rotate-y-180 bg-[#0d0d2b] rounded-2xl p-6 flex flex-col justify-between border border-indigo-500/20">
                    <div class="flex justify-between items-start">
                        <span id="cardCategory" class="px-3 py-1 bg-indigo-500/15 text-indigo-300 text-[10px] font-bold rounded-full uppercase tracking-wider">Party 🎈</span>
                        <span id="cardLevel" class="px-3 py-1 bg-white/5 text-gray-500 text-[10px] font-bold rounded-full">Level: Medium</span>
                    </div>

                    <div class="text-center my-auto py-6">
                        <p id="cardChallenge" class="text-[1.3rem] font-bold leading-relaxed text-white/90">Tap kartu untuk mulai!</p>
                    </div>

                    <p class="text-indigo-500/40 text-[10px] font-semibold tracking-widest uppercase text-center">Tap untuk lanjut →</p>
                </div>
            </div>
        </div>

        <!-- Next Card Button -->
        <button onclick="window.drawCard()" class="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 hover:scale-[1.02] text-base tracking-wide" style="box-shadow: 0 0 30px rgba(99,102,241,0.3);">
            Buka Kartu Berikutnya
        </button>
    </div>

</body>
</html>
