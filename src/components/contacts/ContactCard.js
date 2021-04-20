import React from 'react';
import { useApp } from '../../context/AppContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ContactCard = (props) => {
  const { id, lastName, firstName, email, phoneNumber } = props.contact;
  const { deleteContact } = useApp()
  return (
    <article className="ContactCard">
      <div className='delete-contact'>
        <div className='contact-icons'>
          <p>{firstName[0]}{lastName[0]}</p>
        </div>
        <FontAwesomeIcon className='delete-contact-button' id={id} icon={faTrashAlt} onClick={(event) => deleteContact(id)} />
      </div>
      <div className='contact-details'>
        <h3 className='contact-name'>{`${firstName} ${lastName}`}</h3>
        <section className='contact-info'>
          <div className='contact-link'>
            <p className='contact-label'>Email:</p>
            <a className='email' href={`mailto:${email}`}>{email}</a>
          </div>
          <div className='contact-link'>
            <p className='contact-label'>Phone:</p>
            <a className='phone' href={`tel:${phoneNumber}`}>{phoneNumber}</a>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ContactCard;