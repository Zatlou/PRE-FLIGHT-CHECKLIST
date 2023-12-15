import axios from 'axios';

const API_BASE_URL = 'https://greenvelvet.alwaysdata.net/pfc';
const API_TOKEN = '4fc2905c2978dc89033cf15f161db2b623345da3';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'token': API_TOKEN,
  },
});

export const fetchDataFromApi = async () => {
  try {
    const response = await api.get('/checklists');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching data from API:', error.message);
  }
};

export const postDataToApi = async (data) => {
  try {
    const response = await api.post('/checklist/add', data);
    return response.data;
  } catch (error) {
    console.error('Error posting data to API:', error);
    throw error;
  }
};

export const deleteDataFromApi = async (id) => {
  try {
    const response = await api.get(`/checklist/delete?id=${id}`);
    console.log(`Delete request for ID ${id} successful. Response:`, response.data);
  } catch (error) {
    console.error(`Error deleting ID ${id}. Status: ${error.response?.status}. Message: ${error.response?.data?.message}`, error);
  }
};

export const updateDataFromApi = async (id, modifiedData) => {
  try {
    const response = await api.post(`/checklist/update?id=${id}`, modifiedData);
    console.log("Update API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating data:", error);
    throw error;
  }
};

export const statutDataFromApi = async (id, statut) => {
  try {
    const response = await api.get(`/checklist/statut?id=${id}&statut=${statut}`);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default api;
