import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap';

import './styles.scss';
import MainNav from "../../components/MainNav";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";
import Footer from "../../components/Footer";

import Img1 from '../../assets/images/gallery_about-us.jpg';
import Img2 from '../../assets/images/guarantee-customer-satisfaction.png';
import configs from "../../assets/configs";


import ServiceBoxes  from '../../components/ServiceBoxes';

const About = () => {
    useEffect( () =>{
        document.title = `${configs.companyName} | Professional electrical services in ${configs.greatCity} and surrounding areas`;
    });
    return (
        <div className="page-wrapper">
            <MainNav/>
            <Container style={{'margin' : '50px  auto'}}>
                <div className="main-title">
                    <h1>About Us</h1>
                </div>
                <Row>
                    <Col md={4}>
                        <div className="image-wrap-right">
                            <img src={Img1} style={{'width' : '100%'}} alt=""/>
                        </div>
                    </Col>
                    <Col md={8}>
                        <h2>{configs.companyName}</h2>
                        <p>
                           {configs.companyName} is a leading electrical services provider in {configs.greatCity} for a wide range of residential and
                            commercial clients. Our in-depth knowledge of local {configs.greatCity} local codes as well as infrastructure is
                            something that makes us a great choice for any electrical-related tasks –right from complex installations
                            to routine maintenance.
                        </p>
                        <p>
                           {configs.companyName} serves to be the ultimate contractor for electrical services –both residential as well as
                            commercial properties across {configs.greatCity} area. On the residential front, we help house owners with
                            everything related to electrical solutions –including addition of outlets to electrical installations, dealing
                            with electrical issues, and so more. For residential clients in {configs.greatCity}, we are also capable of undertaking
                            complicated projects –including generator installation, rewiring for the full home, and so more.
                        </p>
                        <p>
                            Our services with {configs.greatCity} commercial clients include in-depth stages of planning and execution of high-
                            end electrical solutions for industrial complexes, retail units, and institutional buildings. Additionally, we
                            are also reliable service providers of routine maintenance solutions to ensure that your electrical
                            systems are safe & efficient.
                        </p>
                        <h2>Why We Stand Out?</h2>
                        <p>
                            At {configs.companyName}, we never aim at making compromises on the overall quality of services that we
                            deliver. When you go for choosing our professional range of electrical services in {configs.greatCity}, here are some
                            benefits that you can obtain out of the same:
                        </p>
                        <ul>
                            <li>
                                Local Understanding: Our team of local windowss has in-depth local knowledge –about specific
                                norms or standards that are required to be followed.
                            </li>
                            <li>
                                Electrical Knowledge: Our windowss are also highly knowledgeable and well-versed in the
                                given field to deliver optimized services.
                            </li>
                            <li>
                                Competitive pricing: We value our clients highly. Therefore, we follow a transparent, affordable
                                pricing policy for our comprehensive range of electrical services in {configs.greatCity}.
                            </li>
                        </ul>
                        <p><strong>Get the most of our electrical services in {configs.greatCity} for optimized results.</strong></p>
                        <img src={Img2} className="customer-satisfaction" alt=""/>
                        <div className="button-blue">
                            <a href={`${process.env.PUBLIC_URL}/get-a-quote`}>Request Service</a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container style={{margin: '50px auto'}}>
                <div className="main-title">
                    <h2>Our Services</h2>
                </div>
                <ServiceBoxes/>
            </Container>

            <BlueQuoteStripe/>
            <Footer/>
        </div>
    )
};

export default About;
