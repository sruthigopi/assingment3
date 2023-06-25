import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './componets/Navbar';
import ViewData from './componets/ViewData';
import AddMovie from './componets/AddMovie';
import AboutUs from './componets/AboutUs';
import Search from './componets/Search';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/' element={<ViewData/>}/>
      <Route path='/add' element={<AddMovie data={{MovieName:"",Actor:"",Actress:"",Director:"",ReleasedYear:"",Camera:"",Producer:"",Language:""}} method ="post"/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path='/search' element={<Search/>}></Route> 
    </Routes>
  
    </div>
  );
}

export default App;
