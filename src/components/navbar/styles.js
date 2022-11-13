import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
`

export const NavbarMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  color: ${(props) => props.theme.palette.primary.main};
  list-style: none;
`
