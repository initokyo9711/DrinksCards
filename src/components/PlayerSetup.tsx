import { useState, type KeyboardEvent } from 'react';
import type { GameMode } from '../data/generators';

interface PlayerSetupProps {
  mode: GameMode;
  players: string[];
  onAddPlayer: (name: string) => void;
  onRemovePlayer: (index: number) => void;
  onStartGame: () => void;
  onBack: () => void;
}

export default function PlayerSetup({
  mode,
  players,
  onAddPlayer,
  onRemovePlayer,
  onStartGame,
  onBack,
}: PlayerSetupProps) {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      onAddPlayer(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="w-full max-w-md flex flex-col items-center text-center animate-enter px-4">
      <div className="w-full glass rounded-2xl p-6 mb-4">
        <h2 className="text-2xl font-black mb-1 bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Add Players
        </h2>
        <p className="text-gray-500 text-sm font-medium mb-5">Mode: {mode}</p>

        {/* Input */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ketik nama pemain..."
            maxLength={20}
            className="flex-1 bg-white/5 border border-white/10 text-white rounded-xl py-3 px-4 font-semibold placeholder-gray-600 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
          />
          <button
            onClick={handleAdd}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-5 py-3 rounded-xl transition-all active:scale-95 shadow-md shadow-indigo-500/20 cursor-pointer"
          >
            +
          </button>
        </div>

        {/* Player Chips */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[40px] justify-center">
          {players.map((name, i) => (
            <span
              key={i}
              className="player-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold text-indigo-300 animate-enter"
            >
              {name}
              <button
                onClick={() => onRemovePlayer(i)}
                className="text-gray-600 hover:text-red-400 transition-colors text-xs ml-1 cursor-pointer"
              >
                ✕
              </button>
            </span>
          ))}
        </div>

        <p className="text-gray-600 text-xs font-medium mb-1">
          {players.length === 0
            ? 'Belum ada pemain ditambahkan (opsional)'
            : `${players.length} pemain`}
        </p>
      </div>

      {/* Action Buttons */}
      <button
        onClick={onStartGame}
        className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold py-4 rounded-2xl text-lg shadow-lg transition-all active:scale-95 hover:scale-[1.02] glow-emerald mb-3 cursor-pointer"
      >
        Mulai Main!
      </button>
      <button
        onClick={onBack}
        className="w-full bg-white/5 hover:bg-white/10 text-gray-400 font-semibold py-3 rounded-2xl text-sm transition-all active:scale-95 border border-white/5 cursor-pointer"
      >
        ← Ganti Mode
      </button>
    </div>
  );
}
