import React from "react";
import { Col, Row, Container } from "../components/Grid";
import GameEscape from "../components/Game2";
import TimerApp from "../components/Timer/App";

const GameTwo = () => {
    return (
        <Container fluid>
            <Row>
                <Col size="md-9">
                    <GameEscape />
                </Col>
                <Col size="md-3">
                <TimerApp />
                    <h3>Narrow Escape</h3>
                    <p>Try to escape the deadly puzzles in this challenging and fun one-touch game!</p>
                    <h5>How to Play:</h5>
                    <p>Tap the screen to move the circle upwards. Avoid the deadly traps and move fast so the walls don't destroy you! Each trap avoided will score you a point, so try and beat your highscore!</p>
                    <h5>Controls:</h5>
                    <p>Mobile and PC: Tap the screen to move upwards.</p>
                    <h5>Credit:</h5>
                    <p>Taken from <a href="http://my-ga.me/narrowescape">this site</a> and created by <a href="https://play.idevgames.co.uk/profile/AMGaming">AMGaming</a>.</p>
                </Col>
            </Row>
        </Container>
    );
};


export default GameTwo;