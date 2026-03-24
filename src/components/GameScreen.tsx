import type { GameMode, ChallengeResult } from '../data/generators';

interface GameScreenProps {
  mode: GameMode;
  players: string[];
  currentTurnIndex: number;
  cardCount: number;
  isFlipped: boolean;
  currentCard: ChallengeResult | null;
  onDrawCard: () => void;
  onExit: () => void;
}

export default function GameScreen({
  mode,
  players,
  currentTurnIndex,
  cardCount,
  isFlipped,
  currentCard,
  onDrawCard,
  onExit,
}: GameScreenProps) {
  return (
    <div className="w-full max-w-md flex flex-col items-center text-center animate-enter px-4">
      {/* Header */}
      <div className="w-full flex justify-between items-center mb-4">
        <div className="text-left">
          <h1 className="text-xl font-black bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight">
            DRINKS CARD
          </h1>
          <p className="text-xs text-gray-600 font-semibold">Mode: {mode}</p>
        </div>
        <button
          onClick={onExit}
          className="glass text-gray-400 hover:text-white font-semibold px-4 py-2 rounded-xl text-sm transition-all active:scale-95 cursor-pointer"
        >
          ✕ Keluar
        </button>
      </div>

      {/* Turn Indicator */}
      {players.length > 0 && (
        <div className="w-full glass rounded-xl px-4 py-2.5 mb-4 animate-enter">
          <p className="text-sm font-semibold text-gray-400">
            Giliran:{' '}
            <span className="text-indigo-400 font-bold text-base">
              {players[currentTurnIndex]}
            </span>
          </p>
        </div>
      )}

      {/* Card Counter */}
      <p className="text-gray-600 text-xs font-semibold tracking-[0.2em] mb-3">
        KARTU KE-<span className="text-indigo-400">{cardCount}</span>
      </p>

      {/* 3D Card */}
      <div
        onClick={onDrawCard}
        className="w-full max-w-sm h-[400px] perspective-1000 mb-5 cursor-pointer pulse-glow rounded-2xl"
      >
        <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d rounded-2xl ${isFlipped ? 'rotate-y-180' : ''}`}>
          {/* Front (Cover) */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl flex items-center justify-center border border-indigo-500/20 overflow-hidden bg-[#0d0d2b]">
            <img
              src="/DrinksCardDesign.png"
              alt="Drinks Card"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-5 left-0 right-0">
              <p className="text-white/50 text-xs font-semibold animate-pulse tracking-[0.2em] uppercase">
                Tap untuk buka
              </p>
            </div>
          </div>

          {/* Back (Challenge) */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#0d0d2b] rounded-2xl p-6 flex flex-col justify-between border border-indigo-500/20">
            <div className="flex justify-between items-start">
              <span className="px-3 py-1 bg-indigo-500/15 text-indigo-300 text-[10px] font-bold rounded-full uppercase tracking-wider">
                {currentCard?.category ?? mode}
              </span>
              <span className="px-3 py-1 bg-white/5 text-gray-500 text-[10px] font-bold rounded-full">
                Level: {currentCard?.level ?? '—'}
              </span>
            </div>

            <div className="text-center my-auto py-6">
              <p className="text-[1.3rem] font-bold leading-relaxed text-white/90">
                {currentCard?.challenge ?? 'Tap kartu untuk mulai!'}
              </p>
            </div>

            <p className="text-indigo-500/40 text-[10px] font-semibold tracking-[0.2em] uppercase text-center">
              Tap untuk lanjut →
            </p>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onDrawCard}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-95 hover:scale-[1.02] text-base tracking-wide cursor-pointer"
        style={{ boxShadow: '0 0 30px rgba(99,102,241,0.3)' }}
      >
        Buka Kartu Berikutnya
      </button>
    </div>
  );
}
