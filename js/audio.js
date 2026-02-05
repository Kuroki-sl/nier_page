//Sistema de audio sintetizado para no depender de archivos externos
const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();

const playTone = (freq, type, duration, vol = 0.1) => {
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + duration);
};

export const uiSounds = {
    hover: () => {
        //Sonido agudo y corto
        playTone(1200, 'sine', 0.05, 0.05);
    },
    click: () => {
        //Sonido de confirmacion grave
        playTone(800, 'square', 0.1, 0.05);
        setTimeout(() => playTone(1200, 'square', 0.1, 0.03), 50);
    },
    move: () => {
        //Sonido de deslizamiento/cambio de pagina
        playTone(400, 'sawtooth', 0.15, 0.05);
    },
    cancel: () => {
        playTone(150, 'sawtooth', 0.2, 0.1);
    }
};

//Exponer globalmente para uso en HTML inline si es necesario
window.playUiSound = (type) => {
    if (uiSounds[type]) uiSounds[type]();
};
