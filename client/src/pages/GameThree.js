import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GameSlime from "../components/Game3";
// import Jumbotron from "../components/Jumbotron";
// import Nav from "../components/Nav";

const GameThree = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-9">
                    <GameSlime />
                </Col>
                <Col size="md-3">
                    <h3>Tap Slime</h3>
                    <p>Play as a little cannon and defend the center from the slimes! Rack up a high score defending your base in this simple and quick game.</p>
                    <h5>How to Play:</h5>
                    <p>Slimes will come out and try and bite the center base. Each bite will take away a bit of your health. In order to stop this, shoot each slime with two bullets to stop them!</p>
                    <h5>Controls:</h5>
                    <p>Mobile and PC: Tap on the screen to shoot a bullet in that direction.</p>
                    <h5>Credit:</h5>
                    <p>Taken from <a href="https://play.idevgames.co.uk/game/tap-slime">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/custardsoft">Custardsoft</a>.</p>
                </Col>
            </Row>
        </Container>
    );
};


export default GameThree;