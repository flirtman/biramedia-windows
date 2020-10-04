import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

import configs from "../../../assets/configs";

const Residential = () => {
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
                            <h1>Residential</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> Residential Services</h2>
                                    <p>
                                        At {configs.companyName}, our team of {configs.greatCity} electrical experts can help in providing assistance with any
                                        type of residential electrical project –right from installations to repairs, replacements, and maintenance
                                        services. Whether you are building an extension to your property or renovating any corner of the house
                                        with respect to electrical parts or components, or even installing lighting in your apartment, our team of
                                        electrical experts can help you in {configs.greatCity}.
                                    </p>
                                    <p>
                                        When you hire services from the licensed {configs.greatCity} windowss at {configs.companyName}, here are some
                                        services you can expect:
                                    </p>
                                    <ul>
                                        <li>
                                            Electrical Maintenance Work: Most homeowners tend to face problems associated with
                                            maintaining the electrical units at their property –especially in case of a power blackout. As
                                            such, our team of electrical experts in {configs.greatCity} will provide the best-in-class assistance to assure
                                            that you remain at peace of mind. With their in-depth industry knowledge and expertise, they
                                            are able to deliver top-notch electrical maintenance services across homes in {configs.greatCity}.
                                        </li>
                                        <li>
                                            Electrical Remodeling: We offer a comprehensive range of electrical remodeling solutions
                                            –including full-range electrical re-wiring, installation of new lighting, installation of new
                                            electrical panels, fixtures, and so more.
                                        </li>
                                        <li>
                                            Electrical System Upgrades: Our team is also adept at performing upgrade services for service
                                            boxes –especially in circuits of older homes. With our upgrade solutions, you can look forward
                                            to being at peace of mind with respect to electrical units at your home.
                                        </li>
                                        <li>
                                            Specialty Wiring: Our experts also deliver assistance with specialty wiring –including wiring for
                                            lighting, pool area, equipment &amp; pumps, landscape lighting, and so more.
                                        </li>
                                    </ul>
                                    <p>
                                        We are a team of well-trained and licensed electrical experts having several years of expertise in the
                                        given industry. We are happy to serve our clients with their unique electrical installation needs in &amp;
                                        around {configs.greatCity}.
                                    </p>
                                    <p><strong>For more information, you can reach out to our team of experts now!</strong></p>
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

export default Residential;
