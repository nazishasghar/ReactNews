import React,{useState} from 'react';
import './App.css';
import SignInView from './components/Screens/SignInView/SignInView';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import SignUpView from './components/Screens/SignUpView/SignUpView';
import HomeView from './components/Screens/HomeView/HomeView';
import NavbarView from './components/navBar/Navbar';
import Headline from './components/Screens/Headlines/Headline';
function App() {
  const [loggedIn,setLoggedIn] = useState(true);
  const [region,setRegion] = useState('us');
  const [search,setSearch] = useState('bitcoin');
  return (
    <BrowserRouter>
    <div className="App">
    <NavbarView loggedIn={loggedIn}/>
      
      <Routes>
        <Route path="/SignIn" element = {<SignInView/>}/>
        <Route path="/HomeView" exact element={<HomeView search={search}/>}/>
        <Route path="/SignUp" exact element={<SignUpView/>}/>
        <Route path="/Headline" exact element={<Headline region={region}/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
