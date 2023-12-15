import './App.css';
import { Route, Routes,  BrowserRouter} from 'react-router-dom';
import DashboardPage from './Dashoard';
import FormPage from './Formulaire';
import ModifyCheckPage from './ModifyCheck';


function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<DashboardPage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/modify" element={<ModifyCheckPage />} />
      </Routes>
    </>
  );
}

export default App;
