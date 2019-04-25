import styled, { css } from 'styled-components'

export const Button = styled.button`
  background: #FF4057;
  border-radius: 10px;
  border: none;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  width: 100px;
  height: 50px;
  font-size: 18px;
  color: white;
  cursor: pointer;

  ${props => props.primary && css`
    background: #3BBC56;
    color: white;
  `}
`;
