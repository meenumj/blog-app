import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLogin from './Components/UserLogin';
import UserSignup from './Components/UserSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin/>} />
        <Route path="/viewpost" element={<UserLogin/>}/>
        <Route path="/signup" element={<UserSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
