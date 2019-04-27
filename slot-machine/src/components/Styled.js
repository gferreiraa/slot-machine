import styled, { css } from 'styled-components'

export const Display = styled.div`
    background-color: #FF4057;
    width: 672px;
    height: 242px;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
export const Container = styled.div`
    display: flex
`
export const Wheel = styled.div`
    background-color: white;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`
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
