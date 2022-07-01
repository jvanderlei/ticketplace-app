import styled from 'styled-components'
import { defaultTheme as theme } from '../../styles/theme'


export const ProfileWrapper = styled.div`
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`

export const ProfileImageArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`

export const ProfileInfosContainer = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
`

export const ProfileInfosArea = styled.div`

`

export const ProfileInfoItem = styled.input`
  width: 100%;
  border: none;
  padding: 5px 0;
  background: transparent;
  border-bottom: 1px solid ${theme.colors.gray};
  color: ${theme.colors.gray};
  outline: none;
`

export const ProfileInfoLabel = styled.label`
  font-size: 14px;
  color: ${theme.colors.dark};
  font-weight: bold;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 15px 0; 
`

export const ProfileHeaderEffect = styled.div`
  width: 100%;
  min-height: 300px;
  clip-path: polygon(0 0, 100% 0%, 100% 25%, 0% 100%);
  border-radius: 8px 8px 0 0;
  background-image: linear-gradient(to right, ${theme.colors.primary}, #699DF2);
`

export const ProfileImageContainer = styled.div`
  border-radius: 9999px;
  border: 3px solid #f2f2f2;
  width: 150px;
  height: 150px;
  position: absolute;
  left: calc(50% - 75px);
  top: calc(60% - 75px);
  overflow: hidden;
  z-index: 20;
`

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  object-position: center;
`

export const Error = styled.p`
  font-size: 12px;
  color: ${theme.colors.error};
  padding-bottom: 10px;
`
