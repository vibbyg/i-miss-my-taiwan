import styled from "styled-components"
import { Dialog, DialogInterface } from "./Dialog"
import React from "react"



const StyledInfoDialog = styled.div`
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  font-size: ${props => props.theme.fontSize.h2};
  // margin-bottom: 2rem;
`
const Content = styled.div`
  font-size: ${props => props.theme.fontSize.p};
  line-height: 2;
`

const linkStyle = {
  'textDecoration': 'none',
  'color': 'inherit'
}
export const InfoDialog = ({ onDialogClick }: DialogInterface)=> {

  return(
    <Dialog onDialogClick={onDialogClick}>
      <StyledInfoDialog>
        <Title>inspo</Title>
        <Content>
        <p>hi y’all!</p>
        <p>this past 2024 winter, i was fortunate enough to embark on an exchange term in taiwan for 4 months.</p>
        <p>during my time there, i experienced some of the most surreal sights ⛰️, met some really cool people 🧍, and created core memories i’ll look back to many years down the road. 
        coming back from exchange, i reminisced over the vibrant culture of taiwan and wanted a way to feel connected to its culture and people.</p>
        <p>with inspiration from <a href="https://imissmycafe.com" target="_blank" style={linkStyle}><b>imissmycafe ☕</b></a>, and my girlfriend k’s idea of creating something similar but for taiwan, 
        this personal artifact was brought to life.
        although a few sounds are from my own footage, i also want to give credit to <a href="https://taiwanquest.com" target="_blank" style={linkStyle}><b>taiwan quest 🇹🇼</b></a> and <a href="https://fh-potsdam.github.io/Sounds-of-Taipei/" target="_blank" style={linkStyle}><b>postdam's sounds of taipei</b></a> for their catalog of sounds to use.</p>
        <p>come and immerse yourselves in some of the most prominent sounds taiwan has to offer :) </p>
        <a href="https://instagram.com/vibbyridge" target="_blank" style={linkStyle}><b>- vibhor ( ͡❛ ͜ʖ ͡❛)✌</b></a>
        </Content>
      </StyledInfoDialog>
      
    </Dialog>
  )
}