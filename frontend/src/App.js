
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/navbar';
import Home from './components/home';
import ContectPage from './components/contectpage'
import About from './components/about';



function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Home/>}/>
          <Route path='/Contect' element={<ContectPage/>} />
          <Route path='/AboutME' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
