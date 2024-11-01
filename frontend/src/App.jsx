import './App.css'
import { Route , Routes } from 'react-router-dom';
import axios from 'axios';
import Layout from './Layout';
import { UserContextProvider } from './UserContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import IndexPage from './pages/IndexPage';

axios.defaults.baseURL = 'http://localhost:4000';
axios.defaults.withCredentials = true;

function App() {

  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
    </Routes>
    </UserContextProvider>  
  )
}

export default App
