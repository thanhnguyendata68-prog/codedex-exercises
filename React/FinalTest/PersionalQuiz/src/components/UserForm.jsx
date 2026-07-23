//UserForm.jsx: This component will have a search input that holds the name of the person taking the quiz for personalization
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './UserContext';

export default function UserForm() {
  const [inputName, setInputName] = useState('');
  const { setName } = useContext(UserContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setName(inputName);
    navigate('/quiz');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter your name:
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}