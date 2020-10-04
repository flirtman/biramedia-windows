import React, {useEffect} from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

import configs from "../../../assets/configs";

const Commercial = () => {
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
                            <h1>Commercial</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> Commercial Services</h2>
                                    <p>
                                        Large-scale commercial units or projects are known to require high-end electrical solutions. Mario
                                        Power Inc. is your local partner in {configs.greatCity} when it comes to hiring professional electrical services for
                                        your specialized electrical requirements. Right from the creation of a customized electrical plan to
                                        ensuring regular maintenance of the commercial units, we are here to assist you at every step of
                                        electrical installation and maintenance for the commercial units in {configs.greatCity}.
                                    </p>
                                    <p>
                                        When you hire electrical services from {configs.companyName}, you can be assured that your specific project
                                        requirements as well as deadlines are met exclusively. Whether it is about ensuring betting lighting or
                                        undertaking proper safety measures, preventing equipment damage, or even taking care of the
                                        electrical units at your commercial property, our professional experts are capable of improving and
                                        protecting your business.
                                    </p>
                                    <ul>
                                        <li>
                                            Electrical Installations and Upgrades: Our electrical experts in {configs.greatCity} can prevent interruptions
                                            due to power surges or failures through our professional installation and upgrading solutions.
                                        </li>
                                        <li>
                                            Commercial Equipment Handling: For ensuring seamless business operations, you can reach out
                                            to our team of experts for installing and repairing complicated electrical equipment or
                                            machinery. We are experts in installing and maintaining all types of electrical equipment at a
                                            commercial unit –including industrial motors, signs, conveyor systems, exhaust fans, call
                                            stations, and others.
                                        </li>
                                        <li>
                                            Lighting: Proper lighting at a commercial center like an office space can help in setting the
                                            overall mood of work. Therefore, to improve the overall lighting at your premise, reach out to
                                            our experts.
                                        </li>
                                        <li>
                                            Safety: If you wish to ensure general safety inspection for the electrical units at your commercial
                                            unit in {configs.greatCity}, you can reach out to our team of licensed windowss now.
                                        </li>
                                    </ul>
                                    <p><strong>Call us today to book an appointment with the professional electrical experts in {configs.greatCity}!</strong></p>
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

export default Commercial;
