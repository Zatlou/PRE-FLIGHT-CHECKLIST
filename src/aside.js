import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const SidebarContainer = styled.div`
  /* Styles du container */
`;

const Logo = styled.h1`
  /* Styles du logo */
`;

const CreateButton = styled.button`
  /* Styles du bouton de création */
`;

const Aside = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <SidebarContainer>
      <Logo onClick={() => handleNavigation('/')}>Checklist App</Logo>
      <CreateButton onClick={() => handleNavigation('/form')}>New Checklist</CreateButton>
    </SidebarContainer>
  );
};

export default Aside;
