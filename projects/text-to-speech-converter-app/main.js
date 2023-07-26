const voiceSelector = document.querySelector('#voice');
const voices = new Map();
let init = false;

speechSynthesis.addEventListener('voiceschanged', () => {
    if (init) return;
    let index = 0;
    for (const voice of speechSynthesis.getVoices()) {
        voices.set(voice.name, voice)
        const voiceOption = `<option value='${voice.name}' ${index++ === 0 ? 'selected' : ''}>${voice.name}</voice>`;
        voiceSelector.insertAdjacentHTML('beforeend', voiceOption);
    }
    init = true;
});

document.forms['text-to-speech'].addEventListener('submit', (e) => {
    e.preventDefault();
    const messsage = document.querySelector('#message').value;
    if (!messsage) return;
    const utternace = new SpeechSynthesisUtterance(messsage);
    utternace.voice = voices.get(voiceSelector.value);
    speechSynthesis.speak(utternace);
});