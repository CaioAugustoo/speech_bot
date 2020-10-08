const utterance = new SpeechSynthesisUtterance();

utterance.lang = 'pt-BR'; 
utterance.rate = 1.5; // seta a velocidade da fala

const speak = () => {
  speechSynthesis.speak(utterance);
}

const stop = () => { 
  speechSynthesis.cancel();
}

const setText = ({target}) => {
  utterance.text = target.innerText;
}