import { useGameState } from './hooks/useGameState';
import ModeSelect from './components/ModeSelect';
import PlayerSetup from './components/PlayerSetup';
import GameScreen from './components/GameScreen';

export default function App() {
  const {
    state,
    selectMode,
    addPlayer,
    removePlayer,
    startGame,
    drawCard,
    goToScreen,
  } = useGameState();

  return (
    <div className="min-h-screen bg-[#0a0a1a] text-white font-['Outfit'] flex flex-col items-center justify-center p-4 select-none overflow-x-hidden relative">
      {/* Ambient gradient mesh background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-900/20 blur-[120px] animate-ambient-1" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/15 blur-[120px] animate-ambient-2" />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-pink-900/10 blur-[100px] animate-ambient-3" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        {state.screen === 'mode' && (
          <ModeSelect onSelect={selectMode} />
        )}

        {state.screen === 'players' && state.currentMode && (
          <PlayerSetup
            mode={state.currentMode}
            players={state.players}
            onAddPlayer={addPlayer}
            onRemovePlayer={removePlayer}
            onStartGame={startGame}
            onBack={() => goToScreen('mode')}
          />
        )}

        {state.screen === 'game' && state.currentMode && (
          <GameScreen
            mode={state.currentMode}
            players={state.players}
            currentTurnIndex={state.currentTurnIndex}
            cardCount={state.cardCount}
            isFlipped={state.isFlipped}
            currentCard={state.currentCard}
            onDrawCard={drawCard}
            onExit={() => goToScreen('mode')}
          />
        )}
      </div>
    </div>
  );
}
