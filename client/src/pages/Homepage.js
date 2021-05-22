import React from "react";
// import ChatApp from "../components/Chat/app";
import { Col, Row, Container } from "../components/Grid";
import TimerApp from "../components/Timer/App";

const Homepage = () => {
    return (
        <Container fluid>
            <Row>
                <p>
                    <TimerApp />
                </p>
            </Row>
        </Container>
    );
};


export default Homepage;