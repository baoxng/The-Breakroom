import React from "react";
import { Col, Row, Container } from "../components/Grid";
import TimerApp from "../components/Timer/App";

const Homepage = () => {
    return (
        <Container fluid>
            <Row>
                <Jumbotron />
                <p>
                    <TimerApp />
                </p>
            </Row>
        </Container>
    );
};


export default Homepage;