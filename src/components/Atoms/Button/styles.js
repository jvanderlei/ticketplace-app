import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.isDark ? '#000' : '#FFF'};
  border: none;
` 

