import React from "react";

import './styles.scss';
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";

const BlueQuoteStripe = () => {
    return (
        <div className="blue-quote-stripe">
            <Container className="text-center">
                <Row>
                    <Col>
                        <Fade left>
                            <p>Stay Comfortable & Save Money</p>
                        </Fade>
                    </Col>
                    <Col>
                        <Fade right>
                            <div className="button-white">
                                <a href={`${process.env.PUBLIC_URL}/get-a-quote`}>Get A Quote</a>
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BlueQuoteStripe
