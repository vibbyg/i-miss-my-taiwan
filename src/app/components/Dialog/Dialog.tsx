'use client'
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components"
import { CloseGraphic } from "../svg/CloseGraphic";


export interface DialogInterface {
  children: React.ReactNode;
  onDialogClick?: any;
}

const StyledDialog = styled.div`
  width: 40rem;
  height: 40rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-radius: 10px;
  border-width: 5px;
  position: fixed;
  background-color: ${props => props.theme.colors.solidBackground};
  z-index: 1000;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (orientation: portrait) {
    width: 80vw;
    height: 80vh;
  }
`
const StyledDialogContent = styled.div`
  padding: 2rem;
`
const StyledCloseButton = styled.div`
  position: absolute;
  top: 2%;
  right: 2%;
  width: 3rem;
  cursor: pointer;
`
const BackgroundBlur = styled.div`
  backdrop-filter: blur(5px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 400;
`
export const Dialog = ({children, onDialogClick}: DialogInterface) => {
  const overlayEl = typeof window === "object" ? document.querySelector('#portal') : null;
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  
  return overlayEl && mounted ? ReactDOM.createPortal(
    <div>
    {/* <BackgroundBlur onClick={onDialogClick} /> */}
    <StyledDialog>
      <StyledCloseButton onClick={onDialogClick}>
        <CloseGraphic />
      </StyledCloseButton>
      <StyledDialogContent>
        {children}
      </StyledDialogContent>
    </StyledDialog>
    <BackgroundBlur onClick={onDialogClick} />
    </div>,
    overlayEl
  ) : null;

}