
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import { Header } from "./components/navbar/Header/Header";

import Navbar2 from './components/navbar/Navbar2';
import Footer from "./Pages/Home/footer/Footer.js";

import About from "./Pages/about/About";
import Blog from "./Pages/learn/Blogs";
import Home from "./Pages/Home/Home"
import Tools from "./Pages/Tools";
import Sip from "./tools/Calculator/sip";
import Lumpsum from "./tools/Calculator/lps";
import Emergencyfundcal from "./tools/Calculator/emergencyfund";
// import Addpage from "./Blogs/addpage";
import Addata from "./Pages/learn/addata";
// import Navbar2 from "./components/navbar/Navbar2";

function App() {
  return (
    <div className="main-container">
    {/* <Header /> */}
    <Navbar2/>
    <Router>
      <Routes>
      <Route exact path="/" element={<Home/> }/>
          <Route  path="/about" element={<About/> }/>
          <Route  path="/blogs" element={<Blog/> }/>
      <Route  path="/tools" element={<Tools/>}/>
          <Route exact path="SIP" element={<Sip />} />
          <Route exact path="Lumpsum" element={<Lumpsum />} />
          {/* <Route exact path="Blog" element={<Lumpsum />} /> */}
          <Route exact path="emergency" element={<Emergencyfundcal />} />
          <Route exact path="addata" element={<Addata />} />
         
        
      </Routes>
    </Router>

    
 

    {/* <Footer/> */}
  
    </div>
  );
}

export default App;
