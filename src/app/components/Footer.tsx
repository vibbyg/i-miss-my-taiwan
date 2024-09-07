import styled from "styled-components"


const StyledFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (orientation: portrait) {
    position: relative;
    justify-content: flex-end;
  }
`

const StyledList = styled.ul`
  list-style: none;
  font-size: ${props => props.theme.fontSize.p};

  @media (max-width: 375px) {
    font-size: ${props => props.theme.fontSize.mp}
  }
`
const StyledItem = styled.li`
  float: left;
  margin: 0.5rem;
  cursor: pointer;
  color: ${props => props.theme.colors.red};
  
  &:hover {
    font-weight: bold;
  }
`

type FooterList = {
  title: string;
  navigation?: string;
}

const footerListData = [
  {
    title: '?'
  },
  {
    title: 'more works!'
  },
] 

export const Footer = () => {

  return (
    <StyledFooter>
      <StyledList>
        {
          footerListData.map((item, index) => {
            return <StyledItem key={index}>{item.title}</StyledItem>
          })
        }
      </StyledList>
    </StyledFooter>
  )
}