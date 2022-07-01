import styled from "styled-components";
import { defaultTheme as theme } from '../../styles/theme';

export const Title = styled.h3`
  text-transform: uppercase;
  padding: 15px 0;
`

export const Populares = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: center;
  align-items: center;
  gap: 45px;
  min-height: calc(100vh - 400px);
`

export const  Error = styled.div`
  grid-column: span 12;
  text-align: center;
  font-size: 20px;
  color: ${theme.colors.primary};
  padding: 10px;
  border-radius: 8px;

`