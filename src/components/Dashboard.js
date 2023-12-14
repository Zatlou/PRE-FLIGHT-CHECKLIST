import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Checklist from './Checklist';
import { fetchDataFromApi } from '../pages/Api';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
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

  const renderChecklists = () => {
    if (checklists.length > 0) {
      return checklists.map((checklist, index) => (
        <Checklist key={index} data={checklist} />
      ));
    } else {
      return <NoChecklistsMessage>No checklists available</NoChecklistsMessage>;
    }
  };

  return (
    <DashboardContainer>
      
      <DashboardContent>
        <DashboardTitle>My Dashboard</DashboardTitle>
        <CreateButton onClick={() => handleNavigation('/form')}>Create a New Checklist</CreateButton>
        <ChecklistContainer>{renderChecklists()}</ChecklistContainer>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 150vh;
  color: #26547C;
  background-color: #EF476F; 
`;


const DashboardContent = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const DashboardTitle = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-family: 'Roboto', sans-serif;
  color: #26547C;
  margin-bottom: 20px;
`;

const CreateButton = styled.button`
  margin-top: 20px;
  width: 100%;
  max-width: 300px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  background-color: #ffd166;
  cursor: pointer;
  font-size: 1rem;
  color: #333;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #ef476f;
    transform: scale(1.05);
  }
`;

const ChecklistContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
 
`;

const NoChecklistsMessage = styled.p`
  margin-top: 40px;
  text-align: center;
  
`;
