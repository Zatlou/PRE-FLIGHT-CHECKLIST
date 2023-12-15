import styled from "styled-components";
import Aside from "./aside";
import Checklist from "./Checklist";
import { fetchDataFromApi } from "./api";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardContainer = styled.div`
  /* Styles du container du tableau de bord */
`;

const PageTitle = styled.h1`
  /* Styles du titre de la page */
`;

const CreateButton = styled.button`
  /* Styles du bouton de création */
`;

const ChecklistContainer = styled.div`
  /* Styles du container des checklists */
`;

const DashboardPage = () => {
  const [checklists, setChecklists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchDataFromApi()
      .then((data) => {
        setChecklists(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <DashboardContainer>
      <Aside />
      <PageTitle>Dashboard</PageTitle>
      <CreateButton onClick={() => handleNavigation('/form')}>Create Checklist</CreateButton>
      <ChecklistContainer>
        {checklists && checklists.length > 0 ? (
          checklists.map((checklist, index) => (
            <Checklist key={index} checklistData={checklist} />
          ))
        ) : (
          <p>No checklists available</p>
        )}
      </ChecklistContainer>
    </DashboardContainer>
  );
};

export default DashboardPage;
