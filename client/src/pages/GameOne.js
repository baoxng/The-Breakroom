import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Game from "../components/Game1";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";

const GameOne = () => {
    return (
        <Container fluid>
            <Row>
                <Game />
            </Row>
        </Container>
    );
};


export default GameOne;