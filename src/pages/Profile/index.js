import React, { useContext, useEffect, useState } from 'react'
import { getUserIdByToken } from '../../utils/DecodedToken'
import { GetUserInfo, UpdateUserInfo } from '../../services/UserService'
import { UserContext } from '../../context/UserContext'
import * as S from './styles'
import { ButtonAtom } from '../../components'

const Profile = () => {
  const { user } = useContext(UserContext)
  const [ userData, setUserData ] = useState();
  const { profileImage, name, lastName, email, phoneNumber, password, newPassword, ...rest } = userData || {};
  const [error, setError] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = await getUserIdByToken(user.token);

    if (!userId) {
      return 'User not found';
    }

    if (!password && newPassword) {
      return setError('Password is required to change password');
    }

    if (password && !newPassword) {
      return setError('New password is required to change password');
    }

    const request = await UpdateUserInfo(user.token, userId, userData);

    if (request.status === 200) {
      setError('');
      setUserData(userData);
      return window.location.reload()
    }

    if (request.status === 400) {
      return setError(request.error);
    }
  }

  const getUserData = async () => {
    const userId = await getUserIdByToken(user.token)
    if (!userId) {
      return 'Error getting user data'
    }

    const userData = await GetUserInfo(user.token, userId)

    return setUserData(userData)
  }

  useEffect(() => {
    getUserData();
  }, [])

  return (
    <S.ProfileWrapper>
      <S.ProfileImageArea>
        <S.ProfileHeaderEffect />
        <S.ProfileImageContainer>
          <S.ProfileImage src={profileImage || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"} />
        </S.ProfileImageContainer>
      </S.ProfileImageArea>
      <S.ProfileInfosArea>
        <S.ProfileInfosContainer onSubmit={handleSubmit}>
          {error && <S.Error>{error}</S.Error>}
          <S.InputContainer>
            <S.ProfileInfoLabel htmlFor="name">
              Name
            </S.ProfileInfoLabel>
            <S.ProfileInfoItem id="name" type="text" name="name" value={name + ' ' + lastName} disabled />
          </S.InputContainer>
          <S.InputContainer>
            <S.ProfileInfoLabel htmlFor="profileImage">
              Profile Image
            </S.ProfileInfoLabel>
            <S.ProfileInfoItem id="profileImage" type="text" name="profileImage" value={profileImage} onChange={handleChange} placeholder="Example -> https://i.imgur.com/0A1MofC.png"/>
          </S.InputContainer>
          <S.InputContainer>
            <S.ProfileInfoLabel htmlFor="email">
              Email
            </S.ProfileInfoLabel>
            <S.ProfileInfoItem id="email" type="email" name="email" value={email ?? ''} onChange={handleChange} />
          </S.InputContainer>
          <S.InputContainer>
            <S.ProfileInfoLabel htmlFor="phoneNumber">
              Phone Number
            </S.ProfileInfoLabel>
            <S.ProfileInfoItem id="phoneNumber" type="text" name="phoneNumber" value={phoneNumber ?? ''} onChange={handleChange} />
          </S.InputContainer>
          <S.InputContainer>
            <S.ProfileInfoLabel htmlFor="password">
              Password
            </S.ProfileInfoLabel>
            <S.ProfileInfoItem id="password" type="password" name="password" value={password ?? ''} onChange={handleChange} />
          </S.InputContainer>
          <S.InputContainer>
            <S.ProfileInfoLabel htmlFor="newPassword">
              New password
            </S.ProfileInfoLabel>
            <S.ProfileInfoItem id="newPassword" type="password" name="newPassword" value={newPassword ?? ''} onChange={handleChange} />
          </S.InputContainer>
          <ButtonAtom type="submit" title="Alterar dados" />
        </S.ProfileInfosContainer>
      </S.ProfileInfosArea>
    </S.ProfileWrapper>
  )
}

export default Profile