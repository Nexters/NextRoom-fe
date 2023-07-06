"use client";

import styled from "styled-components";

export default function Home() {
  const Wrapper = styled.div`
    display: flex;
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
      <Wrapper>Escape Room</Wrapper>
    </div>
  );
}
