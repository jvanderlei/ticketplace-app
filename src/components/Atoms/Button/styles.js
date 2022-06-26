import styled from 'styled-components';
import { defaultTheme as theme } from '../../../styles/theme';

export const Button = styled.button`
  padding: 10px;
  background-color: ${props => props.backgroundColor ?? theme.colors.primary};
  color: ${props => (props.isDark) ? '#000' : '#FFF'};
  border: 1px solid ${theme.colors.primary};
  border-radius: 8px;
  cursor: pointer;
  ${({ fullWidth }) => fullWidth && 'width: 100%'};
` 

