
import React, { useState } from 'react';
import axios from 'axios';


const updateUrl = 'https://greenvelvet.alwaysdata.net/pfc/checklist/update';
const token = '4fc2905c2978dc89033cf15f161db2b623345da3';

const Modification = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

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
      const response = await axios.post(updateUrl, formData, {
        headers: {
          'token': token,
        },
      });

      console.log('Update API Response:', response.data);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div>
      
      <h1>Modify a Checklist</h1>
      <form onSubmit={handleFormSubmit}>
      <FormDiv onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Add a Title"
            value={title}
            onChange={handleTitleChange}
          />

          <input
            type="text"
            placeholder="Add a Description"
            value={description}
            onChange={handleDescriptionChange}
          />

          {todos.map((todo, index) => (
            <input
              key={index}
              type="text"
              placeholder="Add a Todo Title"
              value={todo.title}
              name="title"
              onChange={(event) => handleTodoChange(index, event)}
            />
          ))}

          <button type="button" onClick={handleAddTodo}>
            Add Todo
          </button>

          <button type="submit" className="saveButton">
            Save
          </button>
        </FormDiv>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Modification;
