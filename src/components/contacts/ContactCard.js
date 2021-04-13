import React from 'react';

const ContactCard = (props) => {
  const { lastName, firstName, email, phone } = props.contact;
  return (
    <article className="ContactCard">
      <h3>{`${lastName}, ${firstName}`}</h3>
      <ul className='contact-info'>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
    </article>
  );
};

export default ContactCard;