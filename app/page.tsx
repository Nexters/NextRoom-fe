"use client";

import styled from "styled-components";

import { useHintState } from "./components/atoms/hints.atom";

export default function Home() {
  const [hintState, setHintState] = useHintState();

  const addUsedHintState = () => setHintState(hintState + 1);

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 10em;
    width: 100vw;
    height: 100vh;
    color: #fff;
    background-color: #000;
    justify-content: center;
    align-items: center;
  `;

  return (
    <div>
      <Wrapper>
        <div>Escape Room</div>
        <div onClick={addUsedHintState}>{hintState}</div>
      </Wrapper>
    </div>
  );
}
