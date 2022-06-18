import React, { useState } from 'react';
import Logo from '../../assets/images/png/FakeLogo.png'
import { ButtonAtom, InputAtom } from '../../components';
import * as S from './styles'

const Register = (props) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  });
  const { name, email, username, password, confirmPassword } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitRegistration = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setInputValue({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
      });
    }
  }

  return (
    <S.Container>
      <S.FormWrapper>
        <img src={Logo} width="100%" />
        <h4>Register</h4>
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
            type="email"
            placeholder="email@email.com"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <InputAtom
            type="text"
            placeholder="Username"
            name="username"
            value={username}
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