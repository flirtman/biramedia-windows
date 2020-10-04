import React, {useEffect} from 'react';
import {Fade } from 'react-reveal';
import './styles.scss';
import MainNav from "../../components/MainNav";
import {Col, Row } from 'react-bootstrap';

import Background from '../../assets/images/bg-map.jpg';
import ImgSales1 from '../../assets/images/phone-ring.png';
import ImgSales2 from '../../assets/images/worenty.png';
import ImgSales3 from '../../assets/images/lisence.png';

import ImgEmailFly from '../../assets/images/email-fly.png';

import configs from "../../assets/configs";

import Footer from '../../components/Footer';
import ContactForm from "../../components/ContactForm";

import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import PhoneInTalkOutlinedIcon from '@material-ui/icons/PhoneInTalkOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Contacts = (props) => {
    const setStyle = {
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '85vh'
    };
    useEffect( () =>{
        document.title = `${configs.companyName} | Professional electrical services in ${configs.greatCity} and surrounding areas`;
    });
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="container">
                    <div className="header-wrapper">
                        <div style={{maxWidth: '600px'}}>
                            <Fade left cascade>
                                <h1 title="contacts">Get In Touch</h1>
                            </Fade>
                            <Fade>
                                <p className="">
                                    Use the contact form below to contact us by email, and we will get back to you at our earliest convenience.
                                    You can also give us a call using the number below to speak to us for any emergencies.
                                </p>
                                <div className="">
                                    <div className="button-blue-stroke">
                                        <a href={`${process.env.PUBLIC_URL}/get-a-quote`}>Request Service</a>
                                    </div>
                                    <div className="button-white">
                                        <a href={`tel:${configs.phone}`}>Call Now</a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <Row  className="box-section">
                        <Col md={8} className="bg-white">
                            <h2>Send us a message</h2>
                            <img src={ImgEmailFly} alt="" className="email-fly-icon"/>
                            <ContactForm/>
                        </Col>
                        <Col md={4} className="bg-blue-regular">
                            <h2>Contact information</h2>
                            <div>
                                <div className="flex">
                                    <RoomOutlinedIcon/>
                                    <p>{configs.companyAddress}</p>
                                </div>
                                <div className="flex">
                                    <PhoneInTalkOutlinedIcon/>
                                    <p>{configs.phone}</p>
                                </div>
                                <div className="flex">
                                    <DraftsOutlinedIcon/>
                                    <p>{configs.email}</p>
                                </div>
                            </div>
                            <ul className="social-wrap">
                                <li><a href="/"><FacebookIcon/></a></li>
                                <li><a href="/"><LinkedInIcon/></a></li>
                                <li><a href="/"><TwitterIcon/></a></li>
                                <li><a href="/"><PinterestIcon/></a></li>
                            </ul>
                        </Col>
                    </Row>
                    <Fade bottom>
                        <p className="text-center privacy-paragraph"><small>Your Data is always safe with us. We will only contact you in conjunction with your inquiry and your details are stored securely in the meantime.</small></p>
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
                <Footer/>
            </div>
        </div>
    )
};

export default Contacts;
