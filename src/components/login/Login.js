import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import './Login.css'
import { googleProvider } from '../../context/firebase';

const Login = () => {
  const [emailText, setEmail] = useState('')
  const [passwordText, setPassword] = useState('')
  const { login, currentUser, signInWithPopup } = useAuth()

  const [error, setError] = useState('')

  function handleChange(event){
    event.preventDefault()
    if(event.target.id === 'email'){
      setEmail(event.target.value)
    } else if(event.target.id === 'password'){
      setPassword(event.target.value)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      await login(emailText, passwordText)
      setError('')
    } catch (error) {
      setError(error.message)
    }
  }

  function handleSignInWithPopup() {
    signInWithPopup(googleProvider)
  }

  return (
    <>
      {currentUser && <Redirect to='/' />}
      <h1>Welcome to CuraTour</h1>
      <p>Please login</p>
      <form>
        <input
          className='email'
          id='email'
          type='email'
          placeholder='email'
          value={emailText}
          onChange={handleChange}
          required
        />
         <input
          className='password'
          id='password'
          type='password'
          placeholder='password'
          value={passwordText}
          onChange={handleChange}
          required
        />
        <button
          className='login-btn'
          onClick={handleSubmit}
        >
          Login
        </button>
      </form>
      <p>Or Sign In Using: </p>
        <button
          className='google-button'
          id='google'
          onClick={handleSignInWithPopup}
        >
          <img 
            src=""
            alt='google login'
            style={{ height: '1.5rem', marginRight: '.25rem' }}
            />
            Continue With Google
        </button>
      <p>New to CuraTour?</p>
      <Link to="/signup">
        Sign Up Now
      </Link>
    </>
  )
}

export default Login