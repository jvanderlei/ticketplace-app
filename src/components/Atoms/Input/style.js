import styled from 'styled-components'
import { defaultTheme as theme } from '../../../styles/theme'

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 15px;

  &:after {
    content: ' ';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 5px;
    border-radius: 5px 0 0 5px;
    height: ${({ hasLabel }) => hasLabel ? 'calc(100% - 25px)' : '100%'};
    background: ${theme.colors.primary};
    transition: all .10s
  }
`

export const Input = styled.input`
  border:none;
  padding: 10px 20px;
  background: #f2f2f2;
  position: relative;
  width: 100%;
  border-radius: 5px;

  &:focus-visible {
    outline: none;
  }
`

export const TextArea = styled.textarea`
  position: relative;
  width: 100%;
  display: block;
  border:none;
  padding: 10px;
  border-radius: 5px;
  background: #f2f2f2;
  resize: none;

  &&:focus-visible {
    outline: none;
  }
`

export const Select = styled.select`
  position: relative;
  width: 100%;
  display: block;
  border:none;
  padding: 10px;
  border-radius: 5px;
  background: #f2f2f2;
  resize: none;

  &&:focus-visible {
    outline: none;
  }
`

export const Label = styled.label`
display:block;
font-size: 12px;
color: #cbd5e1;
font-weight: bold;
text-transform: uppercase;
padding: 5px 0;
`

export const InputComponent = ({ type, ...props }) => {
if (type === 'message') {
  return <TextArea {...props}/>
}

if(type === 'select') {
  return <Select {...props} />
}

return <Input type={type} {...props}/>
}
