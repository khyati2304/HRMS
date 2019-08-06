
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';


import {Jumbotron,Button,Nav,Navbar,NavbarBrand,NavDropdown,Form,FormControl} from "react-bootstrap";
import logo from "./logo.svg";
import NavItem from "react-bootstrap/NavItem";

class Navigation extends Component {


  render()
  {
    return(

  <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Brand href="#home"><h1 align="Center">Home</h1></Navbar.Brand>
      <Navbar.Brand href="#home"><h2 align="Center">Profile</h2></Navbar.Brand>
      <Navbar.Brand href="#home"><h2 align="Center">Attendance</h2></Navbar.Brand>
      <Navbar.Brand href="#home"><h2 align="Center">Leaves</h2></Navbar.Brand>
      <Navbar.Brand href="#home"><h2 align="Center">About</h2></Navbar.Brand>

</Navbar>

    );
  }

}

export default Navigation;




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
