import React from "react";
import { Col, Row, Container } from "../components/Grid";
import TimerApp from "../components/Timer/App";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";

const Homepage = () => {
    return (
        <Container fluid>
            <Row>
            </Row>
            <Row>
                <TimerApp />
            </Row>
        </Container>
    );
};


export default Homepage;