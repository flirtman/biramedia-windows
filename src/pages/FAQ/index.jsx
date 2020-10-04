import React, {useEffect} from 'react';
import {Container, Row, Col, Accordion, Card} from 'react-bootstrap';
import './styles.scss';
import MainNav from "../../components/MainNav";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";
import Footer from "../../components/Footer";
import ServicesSider from "../../components/ServicesSider";

import configs from "../../assets/configs";

import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const FAQ = (props) => {
    const setStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    useEffect( () =>{
        document.title = `${configs.companyName} | Professional electrical services in ${configs.greatCity} and surrounding areas`;
    });
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="faq-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Accordion defaultActiveKey="0">
                                    <Card><Accordion.Toggle as={Card.Header} eventKey="0">
                                        <LiveHelpIcon/>
                                            How do I know that I have to call an windows?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                There are some red flags that could indicate that you require assistance from a professional
                                                windows. Blown fuses, triggered circuit breakers, flickering lights, and others are some of the
                                                common signs of an electrical failure. However, there could be some other signs as well wherein
                                                you would like to consider professional services from Mario Power Inc.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card><Accordion.Toggle as={Card.Header} eventKey="1">
                                        <LiveHelpIcon/>
                                            How much electrical work can I do on my own?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                Indeed, DIY electrical tricks are enticing. However, they also come with potential risks of
                                                harming yourself in the process. Therefore, you should never take up an electrical project unless
                                                it is too urgent. You should protect yourself from the overall risk by hiring reliable electrical
                                                services from the local experts in Toronto.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card><Accordion.Toggle as={Card.Header} eventKey="2">
                                        <LiveHelpIcon/>
                                            How quickly can you respond to my query?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                The expert windowss at Mario Power Inc. in Toronto are available round-the-clock, 24/7 for
                                                your services. Therefore, you can consider booking an appointment in advance to be assured of
                                                the best outcomes.
                                                </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card><Accordion.Toggle as={Card.Header} eventKey="3">
                                        <LiveHelpIcon/>
                                            In case the circuit trips, is it dangerous?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                Frequent breaker trips indicate that the circuit gets overloaded in the given property. An
                                                appliance, socket, or a wire could be overheating.
                                                </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card><Accordion.Toggle as={Card.Header} eventKey="4">
                                        <LiveHelpIcon/>
                                            Why do I need a generator?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                In Toronto, you might experience power-cut issues at some instances. Therefore, you should
                                                consider installing a reliable power generator for your premises. You can take help from the
                                                reliable electrical service providers in Toronto.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>

                                    <Card><Accordion.Toggle as={Card.Header} eventKey="5">
                                        <LiveHelpIcon/>
                                            What type of electrical panel does my property require?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                For your property, you should determine the amperage requirements. You should aim
                                                calculating the average square footage of the given area and then, analyze the exact type of
                                                electrical accessories you need for the property. Depending on your requirements, you can
                                                reach out to our team of electrical experts in Toronto.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col md={4}>
                                <ServicesSider/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <BlueQuoteStripe/>
            <Footer/>
        </div>
    )
};

export default FAQ;
