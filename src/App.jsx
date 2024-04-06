import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home'
import Detail from './Pages/DetailCountry';
import Base from './Containers/Base';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Base />} >
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
    
  );
}


export default App;
