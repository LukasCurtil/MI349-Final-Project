const bpmInput = document.getElementById('bpm');
const startStopBtn = document.getElementById('startStop');
const beatIndicator = document.querySelector('.beat-indicator');

let intervalId = null;
let isRunning = false;

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playClick() {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
    gain.gain.setValueAtTime(1.5, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.03);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);

    beatIndicator.style.opacity = 1;
    beatIndicator.style.transform = 'scale(1.3)';
    setTimeout(() => {
        beatIndicator.style.opacity = 0.3;
        beatIndicator.style.transform = 'scale(1)';
    }, 50);
}

function startMetronome() {
    let bpm = parseInt(bpmInput.value);

    if (bpm < 30) bpm = 30;
    if (bpm > 300) bpm = 300;

    bpmInput.value = bpm;

    const interval = 60000 / bpm;

    intervalId = setInterval(playClick, interval);
    startStopBtn.textContent = 'Stop';
    isRunning = true;
}

function stopMetronome() {
    clearInterval(intervalId);
    startStopBtn.textContent = 'Start';
    isRunning = false;
}

startStopBtn.addEventListener('click', () => {
    if (!isRunning) {
        startMetronome();
    } else {
        stopMetronome();
    }
});
