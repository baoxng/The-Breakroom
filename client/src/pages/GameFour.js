import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GameFruitmachine from "../components/Game4";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";

const GameFour = () => {
    return (
        <Container fluid>
            <Row>
                <GameFruitmachine />
            </Row>
        </Container>
    );
};


export default GameFour;