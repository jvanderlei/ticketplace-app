import React, { useState} from 'react';

const Login = (props) => {
    const [username, usernameSet] = useState('');
    const [password, passwordSet] = useState('');

    const submitLogin = () => {
        
    }

    return (
        <>
            <div className='container'>
                <form>
                    <input
                        type='text'
                        value={username}
                        onChange={(e) => usernameSet(e.target.value)}
                    />
                    <input
                        type='password'
                        value={password}
                        onChange={(e) => passwordSet(e.target.value)}
                    />
                    <button type="submit" onClick={submitLogin}/>
                </form>
            </div>
        </>
    )
}

export default Login