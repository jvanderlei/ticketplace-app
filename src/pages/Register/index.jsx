import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/png/FakeLogo.png'
import { ButtonAtom, InputAtom } from '../../components';
import { AuthRegisterService } from '../../services/AuthService';
import * as S from './styles'

const Register = (props) => {
  const navigate = useNavigate();
  const [ error, setError ] = useState();
  const [inputValue, setInputValue] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { name, lastName, phoneNumber, email, password, confirmPassword } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const submitRegistration = async (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      const requestRegister = await AuthRegisterService(inputValue);

      if (requestRegister.status === 200) {
        navigate('/login')
      }

      if (requestRegister.status === 400) {
        setError(requestRegister.error)
      }
    }

    setInputValue({
      name: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    });
  }

  return (
    <S.Container>
      <S.FormWrapper>
        <img src={Logo} width="100%" />
        <h4>Register</h4>
        { error && <S.Error>{error}</S.Error> }
        <S.Form onSubmit={submitRegistration}>
          <InputAtom
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          <InputAtom
            type="text"
            placeholder="Last name"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
          />
          <InputAtom
            type="email"
            placeholder="email@email.com"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <InputAtom
            type="text"
            placeholder="Phone number"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            required
          />
          <InputAtom
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
          <InputAtom
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            required
          />
          <ButtonAtom
            type="submit"
            title='Create account'
            backgroundColor='#2877ee'
            fullWidth
          />
        </S.Form>
      </S.FormWrapper>
    </S.Container>
  )
}

export default Register