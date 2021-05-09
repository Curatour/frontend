import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import './Login.css'
import { googleProvider } from '../../context/firebase';
import google from '../../assets/googlelogo.png'
import logo from '../../assets/CTicon.png'

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
      setError('Email or Password is incorrect, please try again.')
    }
  }

  function handleSignInWithPopup() {
    signInWithPopup(googleProvider)
  }

  return (
    <>
      {currentUser && <Redirect to='/' />}
      <section className='login-section'>
        <img
          src={logo}
          alt='CuraTour logo - yellow butterfly'
          className='small-logo'
        />
        {error && <p>{error}</p>}
        <p>Please Log In</p>
        <form>
          <input
            className='email'
            id='email'
            type='email'
            placeholder=' email'
            value={emailText}
            onChange={handleChange}
            required
          />
          <input
            className='password'
            id='password'
            type='password'
            placeholder=' password'
            value={passwordText}
            onChange={handleChange}
            required
          />
          <button
            className='login-btn'
            onClick={handleSubmit}
          >
            Log In
          </button>
        </form>
          <button
            className='google-button'
            id='google'
            onClick={handleSignInWithPopup}
          >
            <img 
              src={google}
              alt='google login'
              style={{ height: '.9rem', marginRight: '.5rem' }}
              />
              <p>
                Continue With Google
              </p>
          </button>
        <p className='sign-up'>
          New to CuraTour? 
        <Link to="/signup">
          Sign Up Now
        </Link>
        </p>
      </section>
    </>
  )
}

export default Login