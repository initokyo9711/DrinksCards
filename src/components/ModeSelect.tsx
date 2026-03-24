import type { GameMode } from '../data/generators';

interface ModeSelectProps {
  onSelect: (mode: GameMode) => void;
}

const modes: { mode: GameMode; label: string; gradient: string; glow: string }[] = [
  { mode: 'Party', label: 'PARTY', gradient: 'from-cyan-500 to-blue-600', glow: 'shadow-cyan-500/30' },
  { mode: 'Brutal', label: 'BRUTAL', gradient: 'from-orange-500 to-amber-600', glow: 'shadow-orange-500/30' },
  { mode: 'Couple', label: 'COUPLE', gradient: 'from-pink-500 to-rose-600', glow: 'shadow-pink-500/30' },
  { mode: 'Mixed', label: 'MIXED', gradient: 'from-purple-500 to-fuchsia-600', glow: 'shadow-purple-500/30' },
];

export default function ModeSelect({ onSelect }: ModeSelectProps) {
  return (
    <div className="w-full max-w-md flex flex-col items-center text-center animate-enter px-4">
      {/* Logo */}
      <div className="mb-10 animate-float">
        <div className="w-24 h-24 mx-auto mb-4 rounded-2xl overflow-hidden border-2 border-indigo-500/30 shadow-lg shadow-indigo-500/20">
          <img src="/DrinksCardDesign.png" alt="Logo" className="w-full h-full object-cover" />
        </div>
        <h1 className="text-4xl font-black tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          DRINKS CARD
        </h1>
        <p className="text-gray-500 text-sm font-medium mt-1 tracking-[0.25em] uppercase">Game Edition</p>
      </div>

      <p className="text-gray-400 font-semibold text-xs tracking-[0.25em] uppercase mb-5">— Select Mode —</p>

      <div className="grid grid-cols-2 gap-4 w-full mb-4">
        {modes.map(({ mode, label, gradient, glow }) => (
          <button
            key={mode}
            onClick={() => onSelect(mode)}
            className={`group relative bg-gradient-to-br ${gradient} text-white font-black py-7 rounded-2xl text-2xl shadow-xl ${glow} transition-all duration-300 active:scale-95 hover:scale-[1.03] overflow-hidden cursor-pointer`}
          >
            <span className="relative z-10 tracking-[0.15em]">{label}</span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        ))}
      </div>
    </div>
  );
}
