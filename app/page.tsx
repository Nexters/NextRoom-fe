"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { StyledEngineProvider } from "@mui/styled-engine";
import { useHintState } from "./components/atoms/hints.atom";
import { MakeHintModal } from "./components/MakeHintModal";

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

const MyButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px;
  padding: 0 20px;
`;

export default function Home() {
  const [hintState, setHintState] = useHintState();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log({ open });
  }, [open]);
  const addUsedHintState = () => setHintState(hintState + 1);

  return (
    <div>
      <Wrapper>
        <div>Escape Room</div>
        <button className="hint" type="button" onClick={addUsedHintState}>
          {hintState}
        </button>

        <StyledEngineProvider injectFirst>
          <MyButton onClick={handleOpen}>MUI 버튼</MyButton>
          <MakeHintModal handleClose={handleClose} open={open} id="id" />
        </StyledEngineProvider>
      </Wrapper>
    </div>
  );
}
