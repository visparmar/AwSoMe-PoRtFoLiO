
import "./App.scss";
import Nav from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/banner'
import Footer from './components/footer'
import Main from './components/main'
import Projects from './components/Projects'

function App() {
  return (
    <Router>
<main>
  <Routes>
  <Route path="/" element={<><Main/></>} />
  <Route path="/Projects" element={<><Nav/>< Projects/></>} />

 
  </Routes>
  

    </main>
    </Router>
    
  );
}

export default App;
