import React from 'react';

const ContactCard = (props) => {
  const { lastName, firstName, email, phone } = props.contact;
  return (
    <article className="ContactCard">
      <div className='contact-icons'>
        <p>{firstName[0]}{lastName[0]}</p>
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
            <a className='phone' href={`tel:${email}`}>{phone}</a>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ContactCard;