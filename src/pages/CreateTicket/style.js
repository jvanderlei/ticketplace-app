import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #f2f2f2;
`
export const ImageWrapper = styled.div`
  width: 100%;
  height: 450px;
`

export const Image = styled.img`
  width:100%;
  min-height: 150px;
  height:100%;
  object-fit: cover;
  object-position: center;
`

export const FormWrapper = styled.div`
  
  padding: 20px;
  width: 100%;
  text-align: center;
  max-width: 400px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  img {
    max-width: 70px;
  }

  h4 {
    padding: 5px 0 20px 0;
    text-transform: uppercase;
  }
`

export const Form = styled.form``
