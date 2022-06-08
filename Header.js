import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import About from './About'; 
import Contact from './Contact';
import StudentLogin from './StudentLogin';
import Login from './Login';

import Services from './Services';
import Signup from './Signup';
import Home from './Home';
import Advisor from './Advisor';
import Admin from './Admin';
import ProfessorLogin from './ProfessorLogin';

function Header(){
    
    return(
        
            <Router>
                    <center>
    <h1 styles="center: auto;">sayITright</h1>  </center>
        <div class="topnav">
                <a> <Link styles="color: black;"  to="/Home">Home</Link></a>
        <a> <Link styles="color: black;"  to="/About">About</Link></a>
        <a> <Link styles="color: black;"  to="/Services">Services</Link></a>
        <a> <Link styles="color: black;"  to="/Contact">Contact</Link></a>
        <a> <Link styles="color: black;"  to="/Signup">Signup</Link></a>
        <a> <Link styles="color: black;"  to="/Login">Login</Link></a>
        <a><Link styles="color:black;" to={{pathname:"https://mxb9030.uta.cloud/"}} target="_blank">Blog</Link></a>
     
    
</div>



<Switch>
<Route path="/Login"><Login/></Route>
<Route path="/StudentLogin"><StudentLogin/></Route>
<Route path="/Advisor"><Advisor/></Route>
<Route path="/Admin"><Admin/></Route>
<Route path="/ProfessorLogin"><ProfessorLogin/></Route>
<Route path="/Contact"><Contact/></Route>
<Route path="/Services"><Services/></Route>
<Route path="/About"><About/></Route>
    <Route path="/Signup"><Signup/></Route>
    
    <Route path="/"><Home/></Route>
    
    
</Switch>

</Router>

    );
}
export default Header;