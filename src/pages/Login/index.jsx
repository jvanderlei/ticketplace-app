import React, { useState } from 'react';
import Logo from '../../assets/images/png/FakeLogo.png'
import { ButtonAtom, InputAtom } from '../../components';
import * as S from './styles'

const Login = (props) => {
  const [inputValue, setInputValue] = useState({ username: "", password: "" });
  const { username, password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitLogin = (e) => {
    e.preventDefault();
    setInputValue({ username: "", password: "" })
    console.log(inputValue);
  }

  return (
    <S.Container>
      <S.FormWrapper>
        <img src={Logo} width="100%" />
        <h4>Login</h4>
        <S.Form>
          <InputAtom
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleChange}
          />
          <InputAtom
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <ButtonAtom type="submit" onClick={submitLogin} title='Login' backgroundColor='#2877ee' fullWidth />
        </S.Form>
        <S.HelpWrapper>
          <a>Forgot Password</a>
          <p>Don't have account?</p>
          <a href="/register">Creat an account here</a>
        </S.HelpWrapper>
      </S.FormWrapper>
    </S.Container>
  )
}

export default Login