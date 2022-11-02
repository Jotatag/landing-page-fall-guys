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
`
