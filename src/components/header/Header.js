import React from 'react'
import logo from '../../assets/CuratourLogo.png'
import './Header.css';
import { Link } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { signOut, currentUser } = useAuth()


  async function handleLogout(event) {
    event.preventDefault()
    try {
      await signOut()
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <header className="Header">
      <Link to="/dashboard">
      <img className="logo" src={logo} alt="CuraTour Logo"/>
      </Link>
      <article className='user-display'>
          <p>{`${currentUser.displayName}` || 'User'}</p>
          <p>Turing Graduate Inc.</p>
        {currentUser && <button className='logout-btn' onClick={handleLogout}>Logout</button>}
      </article>
    </header>
  );
}

export default Header;