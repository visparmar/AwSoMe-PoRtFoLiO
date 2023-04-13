
import "./App.scss";
import Nav from './components/Navigation'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Banner from './components/banner'
import Footer from './components/footer'
import Main from './components/main'

function App() {
  return (
    <Router>
<main>
  <Routes>
  <Route path="/" element={<>
   {/* <Nav/> */}
  {/* <Banner/> */}
  {/* <Footer/> */}
  <Main/>
  </>} />

 
  </Routes>
  
{/* <Footer/> */}
    </main>
    </Router>
    
  );
}

export default App;
