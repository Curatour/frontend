import React, { useContext, useState, useEffect } from 'react'
import { auth, googleProvider } from './firebase'

const Context = React.createContext()

export function useAuth() {
  return useContext(Context)
}

export default function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [displayName, setDisplayName] = useState('User')

  function signUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function signOut() {
    setCurrentUser()
    return auth.signOut()
  }

  async function signInWithPopup() {
    try {
      const result = await auth.signInWithPopup(googleProvider)
      const credential = await result.credential
      await credential.accessToken
      await setCurrentUser(auth.currentUser)
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    const changeUserState = auth.onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user)
        setDisplayName(user.displayName)
      }
    })
    return changeUserState
  }, [])

  const value = {
    currentUser,
    displayName,
    signOut,
    signUp,
    login,
    signInWithPopup,
  }

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  )
}