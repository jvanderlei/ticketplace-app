import styled from "styled-components";

export const Title = styled.h3`
  text-transform: uppercase;
  padding: 15px 0;
`

export const Populares = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  justify-content: space-evenly;
  gap: 45px;
`