import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

import configs from "../../../assets/configs";

const NewInstallation = () => {
    const setStyle={
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    };
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>New Installations</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> New Electrical Installation Services</h2>
                                    <p>
                                        A major part of the electrical services in {configs.greatCity} offered by {configs.companyName} is new electrical
                                        installations. We deliver electrical installation services for both residential as well as commercial units.
                                        As heavy machinery, large appliances, and other expensive devices can have specific requirements,
                                        when you have access to a professional windows at your premise, the overall installation process can
                                        appear as seamless as possible. Our team of licensed experts is here to deal with all scales and sizes of
                                        installation processes –right from non-conventional wiring setups to running direct lines to the electrical
                                        panel. We are committed to providing dedicated electrical panel solutions to our clients.
                                    </p>
                                    <p>
                                        As we handle all sorts of {configs.greatCity} new electrical installation services, here are some of our specialized
                                        solutions for you to consider:
                                    </p>
                                    <ul>
                                        <li>Lighting fixture installation</li>
                                        <li>Ceiling fan installation</li>
                                        <li>Air conditioning installation</li>
                                        <li>Washer or dryer installation</li>
                                        <li>Water heater installation</li>
                                        <li>Home automation system installation</li>
                                        <li>Electrical heater installation</li>
                                        <li>Workshop tool installation</li>
                                        <li>Thermostat control installation</li>
                                        <li>Media devices and home technology system installation</li>
                                        <li>Surge protection installation</li>
                                    </ul>
                                    <p>
                                        As most of the given electrical installations are known to involve valuable appliances and devices, most
                                        residential as well as commercial property owners in and around {configs.greatCity} prefer hiring a professional to
                                        install the same for protecting the overall investment.
                                    </p>
                                    <p>
                                        Our professional range of electrical installation services are carried out by making use of the topmost
                                        quality of materials. As such, you do not have to worry about any damage to the property during
                                        installation. Our team of electrical experts in {configs.greatCity} is capable of handling all cleaning up process once
                                        the new installations are done. {configs.companyName} and its team are capable of handling new electrical
                                        installation projects of all scales and complexities.
                                    </p>
                                    <p><strong>For more information on our professional electrical services, reach out to us now!</strong></p>
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

export default NewInstallation;
