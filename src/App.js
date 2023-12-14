import {  Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Form from './components/Formulaire';
import Modification from './pages/Modification';


function App() {
 

  return (
    <>
  
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/form" element={<Form />} />
          <Route path="/modif" element={<Modification/>} />
        </Routes>
 

  </>
  );
}

export default App;
