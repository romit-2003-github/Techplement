import './App.css';
import MainPage from './components/MainPage';
import Navbar from './components/Navbar';
import RegisterPage from './pages/RegisterPage';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<FrontPage />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  );
}


export default App;
