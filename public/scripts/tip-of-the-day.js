const tips = [
    "Practice paradiddles slowly, then gradually increase the tempo.",
    "Warm up with single stroke rolls before starting your routine.",
    "Focus on your stick control, not just speed.",
    "Record yourself to identify areas for improvement.",
    "Use a metronome to maintain consistent timing.",
    "Alternate between loud and soft strokes to improve dynamics.",
    "Take a short break every 30 minutes to prevent fatigue.",
    "Experiment with drumline exercises to improve rhythm variety.",
    "Practice with eyes closed to improve feel and timing.",
    "Combine rudiments into small patterns for creativity.",
    "Practice with a metronome daily to develop rock-solid internal timing.",
    "Focus on your grip - a relaxed fulcrum allows for better rebound and control.",
    "Record yourself playing and listen back. You'll catch mistakes you didn't notice while playing.",
    "Match your stick heights with your section for visual uniformity during performances.",
    "Subdivide everything! Breaking down rhythms into smaller parts makes complex passages easier.",
    "Play on a practice pad before moving to drums - it builds fundamental technique.",
    "Watch your posture. Good playing position prevents fatigue and reduces injury risk.",
    "Listen to recordings of top drumlines to internalize quality sound and timing.",
    "Slow practice is fast practice. Master it slowly, then gradually increase tempo.",
    "Communicate with your section. Musical unity comes from listening and adjusting together.",
    "Use a mirror to check your stick heights and playing form.",
    "Mark your music clearly - dynamics, stickings, and playing zones help in the heat of performance.",
    "Stay hydrated during rehearsals! Dehydration affects concentration and muscle control.",
    "Practice playing at different dynamic levels to develop full expressive range.",
    "Count out loud when learning new music - it reinforces rhythm and keeps you accountable."
];

const tipModal = document.getElementById("tipModal");
const tipText = document.getElementById("tipText");
const newTipBtn = document.getElementById("newTipBtn");
const closeModal = document.querySelector(".close-modal");

function showTip() {
    const index = Math.floor(Math.random() * tips.length);
    tipText.textContent = tips[index];
}

setTimeout(() => {
    tipModal.style.display = "block";
    document.body.style.overflow = "hidden";
    const today = new Date().getDate();
    tipText.textContent = tips[today % tips.length];
}, 5000);

closeModal.addEventListener("click", () => {
    tipModal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
    if (e.target === tipModal) {
        tipModal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

newTipBtn.addEventListener("click", showTip);
