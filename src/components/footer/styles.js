import styled from 'styled-components';

import { Container } from '../container';

export const FooterSection = styled.footer`
  background-color: ${(props) => props.theme.palette.secondary.main};
  width: 100%;
  height: 500px;
`

export const FooterContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  border-bottom: 5px solid ${(props) => props.theme.palette.tertiary.main};
  padding: 50px 0;
`

export const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.palette.primary.main};

  .transparent {
    opacity: 0.7;
  }
`

export const FooterNav = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${(props) => props.theme.palette.primary.main};
  margin: 30px 0;
  padding: 0 5px;

  .nav-menu {
    ul {
      display: grid;
      grid-auto-flow: column;
      grid-template-rows: repeat(3, 1fr);
      column-gap: 75px;
      row-gap: 5px;
      list-style: none;

      li a {
        color: ${(props) => props.theme.palette.primary.main};
      }
    }
  }
`

export const FooterCopyright = styled.div`
  color: ${(props) => props.theme.palette.primary.main};
  font-size: 15px;
  margin: 25px 0;
`

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    gap: 20px;
    
    a {
      color: ${(props) => props.theme.palette.primary.main};
      font-size: 15px;
      font-weight: 600;
    }
  }
`
