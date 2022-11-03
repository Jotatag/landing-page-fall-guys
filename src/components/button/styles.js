import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.tertiary.contrastText};
  background-color: ${(props) => props.theme.palette.tertiary.main};
  font-size: 20px;
  padding: 20px 115px;
  margin: 30px 0;
  width: fit-content;

  &.small {
    font-size: 24px;
    padding: 18px 34px;
  }
`

export const ButtonReverse = styled(Button)`
  border: 1px solid ${(props) => props.theme.palette.tertiary.main};
  background-color: transparent;
`
