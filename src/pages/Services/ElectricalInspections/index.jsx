import React, {useEffect} from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

import configs from "../../../assets/configs";

const ElectricalInspections = () => {
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
                            <h1>Electrical Inspections</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> Electrical Inspection Services</h2>
                                    <p>
                                        Whether you own an apartment or a condo, office, or some other commercial unit, there are chances
                                        that you will require professional electrical inspection at some instance of time. {configs.companyName} is
                                        capable of covering a full range of residential as well as commercial electrical inspections with full
                                        diligence. Our team of trained and licensed electrical inspectors is capable of finding out the smallest of
                                        problems in any electrical unit or system. We are known to provide our electrical inspection services
                                        through maintenance inspection, commercial safety inspection, and home sales inspections in and around
                                        {configs.greatCity} for optimized results.
                                    </p>
                                    <p>
                                        In addition to providing a comprehensive range of inspection services, our experienced team of
                                        electrical experts is also capable of troubleshooting any electrical problems that you might encounter in
                                        your property. In case you come across any common signs of electrical problems in your premise
                                        –residential or commercial, in {configs.greatCity}, you can call our team right away:
                                    </p>
                                    <ul>
                                        <li>Flickering lights</li>
                                        <li>Overloaded circuits</li>
                                        <li>Power surges</li>
                                        <li>Non-working switches or outlets</li>
                                        <li>Redundant wiring</li>
                                        <li>Higher electricity bills</li>
                                        <li>Exploding or popping light bulbs</li>
                                        <li>Breaker and fuse issues</li>
                                    </ul>
                                    <p>
                                        Electrical regulations that apply to commercial properties can be particularly stringent in {configs.greatCity}. As
                                        such, you will be most likely required to hire professional third-party electrical services for performing
                                        in-depth electrical inspections. We offer electrical inspection services at competitive rates. Moreover,
                                        our trained team is also known to offer access to thorough investigation for leaving you prepared for the
                                        next visit from the concerned authorities. At the same time, you can also be convinced to keep your
                                        business safe and sound.
                                    </p>
                                    <p>
                                        If you need to carry out electrical inspections on your property due to some electrical problem, you can
                                        reach out to our experts right away! {configs.companyName} is your one-stop destination for all solutions
                                        related to electrical problems in and around {configs.greatCity}.
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

export default ElectricalInspections;
