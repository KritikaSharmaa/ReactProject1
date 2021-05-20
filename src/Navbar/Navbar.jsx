import react from 'react';
import './Navbar.css';
import logo from './logo.png';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(<>
        <div className="Navigation_block">
            <div className="block1">
            <NavLink to="/" className="HomePage">Home</NavLink>
            <NavLink to="/AboutUs" className="AboutUs">AboutUs</NavLink>
            </div>
            <img src={logo} alt="logo" className="Mylogo"/>
        </div>
    </>);
};

export default Navbar;