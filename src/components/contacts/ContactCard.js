import React from 'react';

const ContactCard = (props) => {
  const { lastName, firstName, email, phone } = props.contact;
  return (
    <article className="ContactCard">
      <h3>{`${lastName}, ${firstName}`}</h3>
      <ul className='contact-info'>
        <li>{`Email: ${email}`}</li>
        <li>{`Phone: ${phone}`}</li>
      </ul>
    </article>
  );
};

export default ContactCard;