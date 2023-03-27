import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './components/assets/style.css';
import HomePage from './components/pages/public/Homepage/HomePage';
import Login from './components/account/Login';
import Callback from './components/account/callback';
import Logout from './components/account/Logout';

function App (){
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
