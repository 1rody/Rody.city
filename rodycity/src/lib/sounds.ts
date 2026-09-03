    type SoundName = 'hover' | 'click' | 'success' | 'error';

    const sounds: Partial<Record<SoundName, HTMLAudioElement>> = {};

    function initSounds() {
    if (typeof window === 'undefined') return;
    
    (Object.keys({ hover: 1, click: 1, success: 1, error: 1 }) as SoundName[]).forEach(name => {
        sounds[name] = new Audio(`/sounds/${name}.mp3`);
        sounds[name]!.volume = 0.3;
        sounds[name]!.preload = 'auto';
    });
    }

    // Inicializa no client-side
    initSounds();

    export function play(soundName: SoundName): void {
    const audio = sounds[soundName];
    if (!audio) return;
    
    audio.currentTime = 0;
    audio.play().catch(() => {});
    }

    export function setVolume(val: number): void {
    Object.values(sounds).forEach(audio => {
        if (audio) audio.volume = Math.max(0, Math.min(1, val));
    });
    }