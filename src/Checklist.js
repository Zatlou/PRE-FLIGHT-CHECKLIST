import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const ChecklistContainer = styled.div`
  /* Styles du container de la checklist */
`;

const ChecklistTitle = styled.h1`
  /* Styles du titre de la checklist */
`;

const TodoList = styled.ul`
  /* Styles de la liste de tâches */
`;

const TodoItem = styled.li`
  /* Styles d'un élément de tâche */
`;

const ChecklistButton = styled.button`
  /* Styles des boutons de la checklist */
`;

const Checklist = ({ checklistData }) => {
  const { title, description, todos } = checklistData;
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <ChecklistContainer>
      <ChecklistTitle>{title}</ChecklistTitle>
      <p>{description}</p>
      <TodoList>
        {todos.map((todo, index) => (
          <TodoItem key={index}>
            <input type="checkbox" id={`item_${index}`} />
            <label htmlFor={`item_${index}`}>{todo.title}</label>
          </TodoItem>
        ))}
      </TodoList>
      <ChecklistButton onClick={() => handleNavigation('/modify')}>Edit</ChecklistButton>
      <ChecklistButton>Delete</ChecklistButton>
    </ChecklistContainer>
  );
};

export default Checklist;
