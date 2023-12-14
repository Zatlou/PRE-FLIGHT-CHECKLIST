import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';

const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
`;

const CheckDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(239, 71, 111, 1);
  width: 250px;
  border-radius: 8px;
  box-shadow: 0 0 10px black;
  margin: 30px;
  padding: 20px;

  h1, p {
    color: white;
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      input {
        margin-right: 8px;
      }

      label {
        color: white;
      }
    }
  }

  &:hover {
    transform: scale(1.2);
    animation: ${scaleAnimation} 0.6s ease infinite;
  }
`;

const CheckButton = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px; 

  button {
    padding: 8px;
    border: none;
    border-radius: 10px;
    background-color: #ffd166;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
      background-color: #26547c;
      color: white;
      transform: translateY(-5px);
    }
  }
`;

const Checklist = ({ dataForChecklist }) => {
  const { title, description, todos } = dataForChecklist;
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <CheckDiv>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" id={`item_${index}`} />
            <label htmlFor={`item_${index}`}>{todo.title}</label>
          </li>
        ))}
      </ul>
      <CheckButton>
        <button onClick={() => handleNavigation('/modif')}>Edit</button>
        <button>Delete</button>
      </CheckButton>
    </CheckDiv>
  );
};

export default Checklist;
