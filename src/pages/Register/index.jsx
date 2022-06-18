import React, { useState } from 'react';
import { ButtonAtom } from '../../components';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitRegistration = () => {

  }

  return (
    <>
      <div className='container'>
        <form>
          <input
            type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonAtom type="submit" onClick={submitRegistration} title='Submit' backgroundColor='#2877ee'/>
        </form>
      </div>
    </>
  )
}

export default Register