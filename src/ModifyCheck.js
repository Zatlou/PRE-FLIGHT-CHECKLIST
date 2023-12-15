import styled from "styled-components";
import Aside from "./aside";
import { postDataToApi } from "./api";
import { useState } from 'react';

const FormWrapper = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #FFD166;
  border: none;
  border-radius: 35px;
  padding: 50px;

  input {
    color: #333;
    background-color: #f4f4f4;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    font-size: 16px;
    padding: 8px;
    width: 300px;
  }

  button {
    margin: 10px 0px 30px 100px;
    display: block;
    border: none;
    padding: 8px;
    border-radius: 10px;

    &:hover {
      background-color: #EF476F;
      color: white;
    }
  }

  .saveButton {
    display: flex;
    justify-content: center;
    padding: 15px;
    width: 100px;
    background-color: #EF476F;
  }
`;

const TotalDiv = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: bisque;
`;

const FormContainerDiv = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    position: relative;
    font-size: 3rem;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    color: #EF476F;
  }
`;

const ModifyChecklistPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);

  const handleTodoChange = (index, event) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], [event.target.name]: event.target.value };
    setTodos(newTodos);
  };

  const handleAddTodo = () => setTodos([...todos, { title: '', description: '' }]);

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

  return (
    <TotalDiv>
      <Aside />
      <FormContainerDiv>
        <h1>Edit Checklist</h1>
        <FormWrapper onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Edit Title"
            value={title}
            onChange={handleTitleChange}
          />

          <input
            type="text"
            placeholder="Edit Description"
            value={description}
            onChange={handleDescriptionChange}
          />

          {todos.map((todo, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Edit Todo Title"
                value={todo.title}
                name="title"
                onChange={(event) => handleTodoChange(index, event)}
              />
            </div>
          ))}

          <button type="button" onClick={handleAddTodo}>
            Add Todo
          </button>

          <button type="submit" className="saveButton">
            Save
          </button>
        </FormWrapper>
      </FormContainerDiv>
    </TotalDiv>
  );
};

export default ModifyChecklistPage;
