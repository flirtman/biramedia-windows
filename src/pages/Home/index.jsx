import React, {useEffect} from 'react';
import {Fade, Slide} from 'react-reveal';
import './styles.scss';
import MainNav from "../../components/MainNav";
import {Col, Row} from 'react-bootstrap';

import Background from '../../assets/images/background_01.jpg';

import ImgSales1 from '../../assets/images/phone-ring.png';
import ImgSales2 from '../../assets/images/worenty.png';
import ImgSales3 from '../../assets/images/lisence.png';

import inner_blue_02 from '../../assets/images/inner_blue_02.jpg';



import AboutUsSection from "../../components/AboutUsSection";
import BlueQuoteStripe  from '../../components/BlueQuoteStripe';
import ServiceBoxes  from '../../components/ServiceBoxes';
import configs from "../../assets/configs";

import SERVICE_LEGENDS from '../../assets/images/SERVICE-LEGENDS.jpg';
import OUR_GOAL from '../../assets/images/OUR-GOAL.jpg';
import OUR_CLIENTS from '../../assets/images/OUR-CLIENTS.jpg';
import OUR_PRIMARY_PURPOSE from '../../assets/images/OUR-PRIMARY-PURPOSE.jpg';

import bg2 from '../../assets/images/home-img3.jpg';

import AC_INSTALLATION from '../../assets/images/AC_INSTALLATION.jpg';
import AC_REPAIR from '../../assets/images/AC_REPAIR.jpg';
import AC_MAINTENANCE from '../../assets/images/AC_MAINTENANCE.jpg';

import Footer from '../../components/Footer';

const Home = (props) => {
    const setStyle = {
        backgroundImage: "url(" + Background + ")"
    };
    useEffect( () =>{
        document.title = `${configs.companyName} | Professional windows installation and repair services in ${configs.greatCity} and surrounding areas`;
    });
    return (
        <div className="page-wrapper">
            <div style={setStyle} className="page-wrapper-content">
                <MainNav/>
                <div className="container">
                    <div className="header-wrapper">
                        <div style={{maxWidth: '600px'}} className="header-content">
                            <Fade left cascade>
                                <h1 className="">
                                    Professional <span className="blue-text">windows </span> installation & repair <br/>
                                     in <span className="blue-text">{configs.greatCity}</span>
                                </h1>
                            </Fade>
                            <Fade>
                                <p className="">{configs.companyName} are here when you need us to service both your residential and commercial properties.</p>
                                <div className="">
                                    <div className="button-blue">
                                        <a href={`${process.env.PUBLIC_URL}/get-a-quote`}>Request Service</a>
                                    </div>
                                    <div className="button-white">
                                        <a href={`${process.env.PUBLIC_URL}/about`}>About Us</a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <Fade left cascade>
                        <ServiceBoxes/>
                    </Fade>
                    <Fade bottom>
                        <div className="sales-line-section">
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales1} alt=""/>
                                </div>
                                <p>AVAILABLE 24 HOURS</p>
                            </div>
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales2} alt=""/>
                                </div>
                                <p>LICENSED & INSURED</p>
                            </div>
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales3} alt=""/>
                                </div>
                                <p>WARRANTY & MAINTENANCE</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <Fade bottom>
                    <div className="about-section">
                    <Slide left>
                        <div className="about-section-left">
                            <div className="about-section-left-content">
                                <h3>Who <span>We</span> Are</h3>
                                <p>We serve to be your one-stop destination for all the HVAC services that you might be looking for.</p>
                                <p>You only tend to pay attention to the HVAC system when it breaks down. With <strong>{configs.companyName}</strong>, you can look forward
                                    to getting it up and running effectively at your premise. Being a licensed
                                    and specialized service provider of top-notch HVAC solutions, we can resolve all types of ventilation, air
                                    conditioning, and heating problems.</p>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={SERVICE_LEGENDS} alt=""/>
                                            </span>
                                            <span>
                                                <h4>SERVICE LEGENDS</h4>
                                                <p>We are highly renowned for our bespoke HVAC services across {configs.greatCity}.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={OUR_CLIENTS} alt=""/>
                                            </span>
                                            <span>
                                                <h4>OUR GOAL</h4>
                                                <p>We are committed to serving our clients with top-notch HVAC installation and repair services across residential and commercial premises.</p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={OUR_GOAL} alt=""/>
                                            </span>
                                            <span>
                                                <h4>OUR CLIENTS</h4>
                                                <p>We cater to both residential as well as commercial units with our professional range of services.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={OUR_PRIMARY_PURPOSE} alt=""/>
                                            </span>
                                            <span>
                                                <h4>OUR PRIMARY PURPOSE</h4>
                                                <p>We aim at providing top-class experiences to our clients through the installation, repair, replacement, and maintenance of HVAC systems.</p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="about-section-right" style={{backgroundImage: `url(${inner_blue_02})`}} >
                            <div className="about-section-right-content">
                                <h3>Trusted & Proud</h3>
                                <p>We have over 15 years of experience in providing windows installation and repair services.</p>
                            </div>
                        </div>
                    </Slide>
                </div>
                </Fade>
                <div className="ac-section">
                    <Slide left>
                        <div className="ac-section-left" style={{backgroundImage: `url(${bg2})`}} >
                            <div className="ac-section-left-content">
                                {/*<h3>Trusted & Proud</h3>*/}
                                {/*<p>We have over 15 years experience in the air conditioning industry.</p>*/}
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="ac-section-right">
                            <div className="ac-section-right-content">
                                <h3><span>Windows</span> Services</h3>
                                <p>Whether it is a large or a small project, if it is related to Electricity, then our team of experts is here to cater
                                    to your specific requirements.</p>
                                <Row>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={AC_INSTALLATION} alt=""/>
                                            </span>
                                            <span>
                                                <h4>Air Conditioning:</h4>
                                                <p>We ensure that your property is cool and breezy throughout summers through our air conditioning services.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={AC_REPAIR} alt=""/>
                                            </span>
                                            <span>
                                                <h4>Heating:</h4>
                                                <p>If you are not satisfied with the performance of the heating unit, you can reach out to us for advanced solutions.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={AC_MAINTENANCE} alt=""/>
                                            </span>
                                            <span>
                                                <h4>Air Quality:</h4>
                                                <p>With us, you can access a reliable team of air quality service provider to deal with molds, dust, allergens, and pollen issues.</p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Slide>
                </div>
                <BlueQuoteStripe/>
                <AboutUsSection/>
                <Footer/>
            </div>
        </div>
    )
};

export default Home;
