import React from 'react';
import './App.css';
import Languages from './Components/Languages/Languages';
import { BrowserRouter, Route, NavLink } from 'react-router-dom'; 
import LoginContainer from './Components/LogIn';
import Profile from './Components/Profile';
import SingupContainer from './Components/SingUp';
import Home from './Components/Home';


const App = (props) => (
    <div className="App">
      <div className = "Container">
         <BrowserRouter>
            <Languages />
            <Route path='/'exact component={Home}/>
            <NavLink to = 'login'></NavLink>
            <Route path='/login' exact component={ LoginContainer }/>
            <Route path='/singup' exact component={ SingupContainer }/>
            <Route path='/profile' exact component={ Profile }/>
          </BrowserRouter>
      </div>
    </div>
  );

export default App;
