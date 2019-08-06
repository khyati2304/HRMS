
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


import {Jumbotron,Button,Nav,Navbar,NavbarBrand,NavDropdown,Form,FormControl} from "react-bootstrap";
import Capture from './Capture.JPG';

class Header extends Component {


  render()
  {
    return(
    <header className="App-header">

        <img src={Capture}  className="logo" width={250} height={100} alt="logo"  />

  <Navbar expand="md" className="App-Navigation">
  <Navbar.Brand href="#home"><h2 className="align-content-center">Welcome to Hr Management System</h2></Navbar.Brand>

</Navbar>


      </header>
    );
  }

}

export default Header;




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
