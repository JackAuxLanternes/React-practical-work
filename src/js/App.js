import React, {useState} from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import '../css/App.css';
import {Navbar, NavbarBrand} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

import RandomUser from "./RandomUser";

function App(){
    let [someoneName, setSomeoneName] = useState("");

    return(
        <div className="app">
            {/*<Header/>*/}
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header">
                        There is a lot of websites in the world, even with peoples name, let's see that together
                    </h1>
                    *People names are randomly generate, don't mind if you think it's someone you know
                </Jumbotron>

                <RandomUser setSomeone={setSomeoneName}/>

            </Container>
        </div>
    );
}

const Header = () => (
    <header>
        <Navbar>
            <Container>
                <ButtonToolbar className="custom-btn-toolbar">
                    <NavbarBrand>
                        <Button>Home</Button>
                    </NavbarBrand>
                    <NavbarCollapse>
                        Show data of
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Button>Random User API</Button>
                            </li>
                            <li className="nav-item">
                                <Button>Domain Names Search API</Button>
                            </li>
                        </ul>
                    </NavbarCollapse>
                </ButtonToolbar>
            </Container>
        </Navbar>
    </header>
);

export default App;
