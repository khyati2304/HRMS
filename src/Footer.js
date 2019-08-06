
import './index.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logOut from './App'


import {Jumbotron,Container,Card,Button,CardDeck,Navbar,NavbarBrand,NavDropdown,Form,FormControl} from "react-bootstrap";



class footer extends Component {
    render() {
        return (
<div><div className="logOut">
    <div className="difference"/>
        <button className="btn btn-warning" onClick={()=>{
          this.logOut();
        }}>Log Out</button>
      </div>

           <Jumbotron className="bg-dark" >
               <div bg="primary" className="row ">
                   <CardDeck bg="primary">
                       <Card style={{ width: '90rem' }}>
                           <Card.Body>
                               <Card.Title>Operational hours</Card.Title>
                               <Card.Text>

                                   <div className="small text-black-50">Mon - Fri 9 am to 5 pm
                                        Sat - Sun 10 am to 3 pm
                                    </div>
                               </Card.Text>

                           </Card.Body>
                       </Card>

                       <Card style={{ width: '90rem' }}>
                       <Card.Body>
                           <Card.Title> Contact</Card.Title>
                           <Card.Text>

                               <div className="small text-black-50">
                                        <a href="#">customer@dhkr.com</a>
                                        <div className="text-black-50">+1 (519) 987-4253</div>
                                    </div>
                           </Card.Text>

                       </Card.Body>
                       </Card>




                   </CardDeck>
               </div>
           </Jumbotron>
</div>




    );
    }
}

export default footer

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
