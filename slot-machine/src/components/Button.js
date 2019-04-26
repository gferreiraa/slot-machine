import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: #FF4057;
  border-radius: 5px;
  border: none;
  width: 100px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  margin: 30px 5px;

  ${props => props.primary && css`
    background: #3BBC56;
    color: white;
  `}
`;
