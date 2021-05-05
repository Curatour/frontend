import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, Redirect } from 'react-router-dom';
import './SignUp.css'

const Signup = () => {
  const [emailText, setEmail] = useState('')
  const [passwordText, setPassword] = useState('')
  const [confirmText, setConfirm] = useState('')
  const { signUp, currentUser, signInWithPopup } = useAuth()

  const [error, setError] = useState('')

  function handleChange(event) {
    event.preventDefault()
    if (event.target.id === 'email') {
      setEmail(event.target.value)
    } else if (event.target.id === 'password') {
      setPassword(event.target.value)
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
      setError(error.message)
    }
  }

  function handleSignInWithPopup(event) {
    signInWithPopup(event.target.id)
  }

  return (
    <>
      {/* {currentUser && <Redirect to='/' />} */}
      <h1>sign up</h1>
    </>
  )
}

export default Signup