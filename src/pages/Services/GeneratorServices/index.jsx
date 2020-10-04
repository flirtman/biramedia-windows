import React, {useEffect} from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

import configs from "../../../assets/configs";

const GeneratorServices = () => {
    const setStyle={
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    };
    useEffect( () =>{
        document.title = `${configs.companyName} | Professional electrical services in ${configs.greatCity} and surrounding areas`;
    });
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Generator Services</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> Generator Services</h2>
                                    <p>
                                        {configs.greatCity} is known to experience power surges or breaks from time to time. What happens when your
                                        {configs.greatCity} home would lose power? Do you frantically look out for candles or other alternatives modes of
                                        electricity as power breaks out? In such a scenario, buying a generator could be the ultimate solutions.
                                        Mario Power Inc. can help you in walking through the entire process of generator setup process. Our
                                        electrical experts can help you in advising the right generator model for the specific situation while
                                        providing installation and maintenance solutions once the purchase has been made.
                                    </p>
                                    <p>
                                        A generator not only helps in delivering power. It also helps in delivering a sense of protection and security
                                        that comes along with knowing the fact that you will never have to worry about the electricity supply
                                        going out again. {configs.companyName}, we can help you with generator-related electrical services in the
                                        following manner:
                                    </p>
                                    <ul>
                                        <li>Generator installation</li>
                                        <li>Generator repair</li>
                                        <li>Generator maintenance</li>
                                        <li>Portable generators</li>
                                        <li>Commercial generators</li>
                                    </ul>
                                    <p>
                                        In case you already have a generator at your premise, but it might not be performing correctly, then also
                                        you can hire our professional range of generator repair services in {configs.greatCity}. When you avail our
                                        professional range of repair services, it will turn out to be highly affordable as you will not be required to
                                        buy an entirely new unit. Inconsistent power delivery, generation of loud noises, or terminating for no
                                        reason are some of the potential reasons for which you might require to hire our professional generator
                                        repair services.
                                    </p>
                                    <p>
                                        {configs.companyName}, we have relevant experience in working on a wide range of generator models and
                                        makes. Generators serve to be great choices for property owners witnessing frequent power outages or
                                        surges. <strong>Contact us now!</strong>
                                    </p>
                                    <div className="">
                                        <div className="button-blue">
                                            <a href={`${process.env.PUBLIC_URL}/contact`}>Contact us right away to know more!</a>
                                        </div>
                                    </div>
                                    </Fade>
                            </Col>
                            <Col md={4}>
                                <Fade>
                                    <ServicesSider/>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <BlueQuoteStripe/>
                <Footer/>
            </div>
        </div>
    );
};

export default GeneratorServices;
