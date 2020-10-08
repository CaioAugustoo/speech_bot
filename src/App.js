import React, { useState } from "react";
import Button from "./Components/Button/Button";
import TextArea from "./Components/TextArea/TextArea";
import styled from "styled-components";

const Wrapper = styled.div`
  text-align: center;
`;

const App = () => {
  const [text, setText] = useState("");

  const utterance = new SpeechSynthesisUtterance();
  utterance.lang = "pt-BR";
  utterance.rate = 1.5; // seta a velocidade da fala
  utterance.text = text;

  const speak = () => {
    speechSynthesis.speak(utterance);
  };

  const stop = () => {
    speechSynthesis.cancel();
  };

  return (
    <Wrapper>
      <TextArea
        placeholder="Digite aqui o texto"
        rows="5"
        onChange={({ target }) => setText(target.value)}
      />
      <Button text="Falar" onClick={speak} background="#e9d8fd" cor="black" />
      <Button text="Parar" onClick={stop} background="#6b46c1" cor="white" />
    </Wrapper>
  );
};

export default App;
