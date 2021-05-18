import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GameEscape from "../components/Game2";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";

const GameTwo = () => {
    return (
        <Container fluid>
            <Row>
                <GameEscape />
            </Row>
        </Container>
    );
};


export default GameTwo;