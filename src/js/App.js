import React, {useState} from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

import '../css/App.css';
import {Navbar, NavbarBrand} from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

import CityWeather from "./CityWeather";
import CityCode from "./CityCode";

function App(){
    let [cityCode, setCityCode] = useState(null);
    let [weather, setWeather] = useState("No city selected");

    return(
        <div className="app">
            {/*<Header/>*/}
            <Container className="p-3">
                <Jumbotron>
                    <h1 className="header">Pokémon need to live in suitable environments,
                        find out what Pokémon you might find in these big cities
                    </h1>
                    *Non-exhaustive list
                </Jumbotron>

                <CityCode cityName="44418" setCityCode={setCityCode}/>

                <CityWeather cityCode={cityCode} setWeather={setWeather}/>

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
                                <Button>Pokémon API</Button>
                            </li>
                            <li className="nav-item">
                                <Button>Weather API</Button>
                            </li>
                        </ul>
                    </NavbarCollapse>
                </ButtonToolbar>
            </Container>
        </Navbar>
    </header>
);

export default App;
