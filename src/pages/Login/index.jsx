import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext'
import { AuthLoginService } from '../../services/AuthService'
import Logo from '../../assets/images/png/FakeLogo.png'
import { ButtonAtom, InputAtom } from '../../components';
import * as S from './styles'

const Login = (props) => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const [ error, setError ] = useState();
  const [ loading, setLoading ] = useState(false)
  const { email, password } = inputValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const requestLogin = await AuthLoginService(inputValue);
    if (requestLogin.status === 200) {
      setInputValue({ email: "", password: "" })
      localStorage.setItem('TICKETPLACE@TOKEN', requestLogin.token);
      setUser({ token: localStorage.getItem('TICKETPLACE@TOKEN') });
      navigate('/')
    }

    if (requestLogin.status === 400) {
      setError("Verify your email and password - server error: " + requestLogin.error);
    }

    setLoading(false);
    setInputValue({ email: "", password: "" })
  }

  // TODO : FORGOT PASSWORD

  return (
    <S.Container>
      <S.FormWrapper>
        <img src={Logo} width="100%" />
        <h4>Login</h4>
        { error && <S.Error>{error}</S.Error> }
        <S.Form onSubmit={submitLogin}>
          <InputAtom
            type="email"
            placeholder="Email"
            name="email"
            value={email}
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
          <ButtonAtom type="submit" title={ loading ? "Loading..." : "Login" } backgroundColor='#2877ee' fullWidth />
        </S.Form>
        <S.HelpWrapper>
          <p>Don't have account?</p>
          <a href="/register">Create an account here</a>
        </S.HelpWrapper>
      </S.FormWrapper>
    </S.Container>
  )
}

export default Login