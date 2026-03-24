import { useState, useCallback } from 'react';
import { generateChallenge, type GameMode, type ChallengeResult } from '../data/generators';

export type Screen = 'mode' | 'players' | 'game';

export interface GameState {
  screen: Screen;
  currentMode: GameMode | null;
  players: string[];
  currentTurnIndex: number;
  cardCount: number;
  isFlipped: boolean;
  currentCard: ChallengeResult | null;
}

export function useGameState() {
  const [state, setState] = useState<GameState>({
    screen: 'mode',
    currentMode: null,
    players: [],
    currentTurnIndex: 0,
    cardCount: 0,
    isFlipped: false,
    currentCard: null,
  });

  const selectMode = useCallback((mode: GameMode) => {
    setState(prev => ({
      ...prev,
      screen: 'players',
      currentMode: mode,
      players: prev.players,
      currentTurnIndex: 0,
      cardCount: 0,
      isFlipped: false,
      currentCard: null,
    }));
  }, []);

  const addPlayer = useCallback((name: string) => {
    if (!name.trim()) return;
    setState(prev => {
      if (prev.players.length >= 20) return prev;
      return { ...prev, players: [...prev.players, name.trim()] };
    });
  }, []);

  const removePlayer = useCallback((index: number) => {
    setState(prev => ({
      ...prev,
      players: prev.players.filter((_, i) => i !== index),
    }));
  }, []);

  const startGame = useCallback(() => {
    setState(prev => ({
      ...prev,
      screen: 'game',
      currentTurnIndex: 0,
      cardCount: 0,
      isFlipped: false,
      currentCard: null,
    }));
  }, []);

  const drawCard = useCallback(() => {
    setState(prev => {
      if (!prev.currentMode) return prev;

      if (!prev.isFlipped) {
        const card = generateChallenge(prev.currentMode, prev.players);
        return {
          ...prev,
          currentCard: card,
          cardCount: prev.cardCount + 1,
          isFlipped: true,
        };
      } else {
        const nextTurn = prev.players.length > 0
          ? (prev.currentTurnIndex + 1) % prev.players.length
          : 0;
        return {
          ...prev,
          isFlipped: false,
          currentTurnIndex: nextTurn,
        };
      }
    });
  }, []);

  const goToScreen = useCallback((screen: Screen) => {
    setState(prev => ({ ...prev, screen }));
  }, []);

  const resetGame = useCallback(() => {
    setState(prev => ({
      ...prev,
      screen: 'mode',
      currentMode: null,
      currentTurnIndex: 0,
      cardCount: 0,
      isFlipped: false,
      currentCard: null,
    }));
  }, []);

  return {
    state,
    selectMode,
    addPlayer,
    removePlayer,
    startGame,
    drawCard,
    goToScreen,
    resetGame,
  };
}
