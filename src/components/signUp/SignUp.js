import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import logo from '../../assets/CTicon.png'
import './SignUp.css'

const SignUp = () => {
  const [emailText, setEmail] = useState('')
  const [passwordText, setPassword] = useState('')
  const [confirmText, setConfirm] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const { signUp, currentUser, signInWithPopup } = useAuth()

  const [error, setError] = useState('')

  function handleChange(event) {
    event.preventDefault()
    if (event.target.id === 'email') {
      setEmail(event.target.value)
    } else if (event.target.id === 'password') {
      setPassword(event.target.value)
    } else if (event.target.id === 'first-name') {
      setFirstName(event.target.value)
    } else if (event.target.id === 'last-name') {
      setLastName(event.target.value)
    } else {
      setConfirm(event.target.value)
    }
  }

  function validatePasswords(event){
    event.preventDefault()

    if (passwordText !== confirmText) {
      setError('Passwords do not match')
    } else {
      handleSubmit(event)
    }
  }

  async function handleSubmit(event) {
    event.preventDefault()
   
    try {
      await signUp(emailText, passwordText)
      setError('')
    } catch (error) {
      setError('Something went wrong, please try again')
    }
  }

  function handleSignInWithPopup(event) {
    signInWithPopup(event.target.id)
    //change to google provider
  }

  return (
    <>
      {currentUser && <Redirect to='/' />}
      <section className='sign-up-section'>
        <img
          src={logo}
          alt='CuraTour logo - yellow butterfly'
          className='small-logo-signup'
        />
        <h1 className="new-account">Create a new account</h1>
        {error && <p>{error}</p>}
        <form className='signup-form'>
          <label for='first-name'>First Name</label>
          <input
            className='first-name'
            id="first-name"
            type='text'
            value={firstName}
            onChange={handleChange}
            required
          />
          <label for='last-name'>Last Name</label>
            <input
              className='last-name'
              id="last-name"
              type='text'
              value={lastName}
              onChange={handleChange}
              required
            />
            <label for='email'>Email</label>
            <input
              className='email'
              id='email'
              type='email'
              value={emailText}
              onChange={handleChange}
              required
            />
            <label for='password'>Password</label>
            <input
              className='password'
              id='password'
              type='new-password'
              value={passwordText}
              onChange={handleChange}
              required
            />
            <label for='confirm'>Confirm Password</label>
            <input
              className='password'
              id="confirm"
              type='new-password'
              value={confirmText}
              onChange={handleChange}
              required
            />
          <button
            type='submit'
            className='form-submit-button'
            onClick={validatePasswords}>
          Sign Up
          </button>
        </form>
        <p className='sign-up'>
          Have an account? 
        <Link to="/login">
          Log In
        </Link>
        </p>
      </section>
    </>
  )
}

export default SignUp