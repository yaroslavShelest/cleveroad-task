import React from 'react';
import {
  Container,
  Col,Row
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"

import Time from './components/Time';
import Astronams from './containers/Astronams';
import Locations from './containers/Locations';
import MyMap from './containers/Maps';

import './App.css';

function App(props) {
  return ( 
  <>
  <Container >
    <div className = "title" > 
        <h1> Международная Космическая Станция (МКС) </h1>
    </div >
    <Row>
       <Col> 
          <Locations />
       </Col>
       <Col> 
          <Time />
       </Col>
    </Row>
    <Row>
        <Col> 
          <MyMap сoordinate={props.location} />
        </Col>
        <Col> 
          <Astronams />
        </Col>
    </Row>
  </Container> 
  </>
  );
}

export default App;
