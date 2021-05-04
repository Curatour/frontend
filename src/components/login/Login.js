import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import './Login.css'

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

  function handleSignInWithPopup(event) {
    signInWithPopup(event.target.id)
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
    </>
  )
}

export default Login
