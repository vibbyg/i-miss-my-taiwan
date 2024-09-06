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
  }
`

const StyledList = styled.ul`
  list-style: none;
  font-size: ${props => props.theme.fontSize.p};
`
const StyledItem = styled.li`
  float: left;
  margin: 0.5rem;
`

type FooterList = {
  title: string;
  navigation?: string;
}

const footerListData = [
  {
    title: 'inspiration'
  },
  {
    title: 'more works'
  },
  {
    title: 'see more...'
  }
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