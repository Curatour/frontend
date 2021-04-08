import React from 'react'
import './Form.css';

const Form = () => {
  const [name, setName] = useState("Name");

  return (
    <div className="Form">
      <h1>THIS IS THE Form</h1>
      <form>
        <input
          type="text"
          name="eventName"
          />
      </form>
    </div>
  );
}

export default Form;