import { useCallback } from 'react';
import { play } from './sounds';

type SoundName = 'hover' | 'click' | 'success' | 'error';

export function useSounds() {
    const playHover = useCallback(() => play('hover'), []);
    const playClick = useCallback(() => play('click'), []);
    const playSuccess = useCallback(() => play('success'), []);
    const playError = useCallback(() => play('error'), []);
    const playSound = useCallback((name: SoundName) => play(name), []);

    return { playHover, playClick, playSuccess, playError, playSound };
}