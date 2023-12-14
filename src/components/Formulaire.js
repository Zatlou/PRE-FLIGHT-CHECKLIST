import styled from "styled-components";
import { postDataToApi } from "../pages/Api";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleTodoChange = (index, event) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], [event.target.name]: event.target.value };
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    setTodos([...todos, { title: '', description: '' }]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      title: title,
      description: description,
      todo: todos,
    };

    try {
      const response = await postDataToApi(formData);
      console.log('Response from API:', response);
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <TotalDiv>
      
      <FormContainerDiv>
        <FormHeading>Create a New List</FormHeading>
        <FormDiv onSubmit={handleFormSubmit}>
          <InputField
            type="text"
            placeholder="Add a Title"
            value={title}
            onChange={handleTitleChange}
          />
          <InputField
            type="text"
            placeholder="Add a Description"
            value={description}
            onChange={handleDescriptionChange}
          />
          {todos.map((todo, index) => (
            <TodoContainer key={index}>
              <InputField
                type="text"
                placeholder="Add a Todo Title"
                value={todo.title}
                name="title"
                onChange={(event) => handleTodoChange(index, event)}
              />
              <DeleteButton onClick={() => handleDeleteTodo(index)}>Delete</DeleteButton>
            </TodoContainer>
          ))}
          <AddTodoButton type="button" onClick={handleAddTodo}>
            Add Todo
          </AddTodoButton>
          <ButtonsDiv>
            <SaveButton type="submit">Save</SaveButton>
            <BackButton onClick={() => handleNavigation('/')}>Back to Dashboard</BackButton>
          </ButtonsDiv>
        </FormDiv>
      </FormContainerDiv>
    </TotalDiv>
  );
}

const TotalDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #EF476F; 
`;

const FormContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
    font-family: "Arial", sans-serif;
    color: #26547C; /* Red */
    margin-bottom: 20px;
  }
`;

const FormHeading = styled.h1`
  font-size: 2.5rem;
  font-family: "Roboto", sans-serif;
  color: #ff5252; /* Red */
  margin-bottom: 20px;
`;

const FormDiv = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  border-radius: 15px;
  padding: 50px;

  input {
    margin: 10px;
    color: #333;
    background-color:#FFD166;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    padding: 8px;
    width: 300px;
  }

  button {
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .saveButton {

  }
`;

const InputField = styled.input`
  width: 100%;
`;

const TodoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const DeleteButton = styled.button`
  margin-left: 10px;
  background-color: #ff5252; /* Red */
`;

const AddTodoButton = styled.button`
  margin-top: 20px;
  background-color: #26547C; /* Green */
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
 
`;

const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 15px;
  width: 100px;
  background-color: #26547C; /* Green */
`;

const BackButton = styled.button`
  margin-left: 10px;
  display: flex;
  justify-content: center;
  padding: 15px;
  width: 150px;
  background-color: #26547C; /* Green */
`;
