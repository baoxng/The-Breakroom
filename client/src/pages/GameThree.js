import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GameSlime from "../components/Game3";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";

const GameThree = () => {
    return (
        <Container fluid>
            <Row>
                <GameSlime />
            </Row>
        </Container>
    );
};


export default GameThree;