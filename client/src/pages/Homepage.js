import React from "react";
// import ChatApp from "../components/Chat/app";
import { Row, Container } from "../components/Grid";
import TimerApp from "../components/Timer/App";
import ChatApp from "../components/Chat/App";

const Homepage = () => {
    return (
        <Container fluid>
            <Row>
                <p>
                    <TimerApp />
                    <ChatApp />
                </p>
            </Row>
        </Container>
    );
};


export default Homepage;