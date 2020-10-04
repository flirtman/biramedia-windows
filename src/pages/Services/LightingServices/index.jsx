import React, {useEffect} from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

import configs from "../../../assets/configs";

const LightingServices = () => {
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
                            <h1>Lighting Services</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> Lighting Services</h2>
                                    <p>
                                        At {configs.companyName}, we help in illuminating your house and property professionally. Our team of
                                        electrical experts is known to go beyond the concept of electrical installations and repairs. We take
                                        pride in offering our professional range of lighting services for residential and commercial units in {configs.greatCity}. Our lighting services can help in enhancing the overall appeal and aesthetics of the given
                                        property instantly and effortlessly. We can help you come across the right lighting option that suits your
                                        budget as well as preferences.
                                    </p>
                                    <p>
                                        Our {configs.greatCity} windowss have immense knowledge and industry-relevant experience with respect to
                                        electrical lighting options for the customers. We are committed to continually educating our team of
                                        windowss such that they are always updated on the latest lighting technology and trends.
                                        Some of our professional lighting services include:
                                    </p>
                                    <ul>
                                        <li>Indoor lighting installation</li>
                                        <li>LED light installation</li>
                                        <li>Outdoor lighting installation</li>
                                        <li>Ceiling light installation</li>
                                        <li>Spot lighting installation</li>
                                        <li>Wall light installation</li>
                                        <li>Motion sensor light installation</li>
                                        <li>Parking lot light installation</li>
                                        <li>Energy-efficient light installation</li>
                                        <li>Pool light installation</li>
                                        <li>Repair and maintenance of existing lighting</li>
                                    </ul>
                                    <p>
                                        {configs.companyName} can help in enhancing the overall look of the property with the help of professional
                                        landscape lighting services in {configs.greatCity}. From security lights to deck lights, accent lighting, pool lighting,
                                        and so more, we have an abundant of lighting options for your entire property. With our extensive
                                        experience in the electrical department, we have helped property owners in {configs.greatCity} to enhance the
                                        overall property.
                                    </p>
                                    <p>
                                        In addition to the common lighting services, we can help you in coming across the right fixtures for any
                                        type of situation. If you are willing to bring more lighting throughout your property, you can reach out to
                                        our {configs.greatCity} electrical service provider.
                                    </p>
                                    <p><strong>For more information on our professional electrical services, contact our team now!</strong></p>
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

export default LightingServices;
