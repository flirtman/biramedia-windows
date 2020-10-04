import {Fade} from "react-reveal";
import React from "react";
import {Col, Container, Nav, Row} from "react-bootstrap";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import PhoneInTalkOutlinedIcon from "@material-ui/icons/PhoneInTalkOutlined";
import configs from "../../assets/configs";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import BuildIcon from "@material-ui/icons/Build";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import ScrollUpButton from "react-scroll-up-button";

import './styles.scss';

const Footer = () => {
    return (
        <footer>
            <Fade bottom>
                <Container>
                    <Row>
                        <Col xs={12} sm={6} md={3}>
                            <h3><ContactSupportIcon/> Contact Us</h3>
                            <ul className="contact-info">
                                <li><PhoneInTalkOutlinedIcon/> {configs.phone}</li>
                                <li><MailOutlineIcon/> {configs.email}</li>
                                <li><RoomOutlinedIcon/> {configs.companyAddress}</li>
                            </ul>
                            <ul className="social-info">
                                <li><a href="/"><FacebookIcon/></a></li>
                                <li><a href="/"><TwitterIcon/></a></li>
                                <li><a href="/"><LinkedInIcon/></a></li>
                                <li><a href="/"><YouTubeIcon/></a></li>
                                <li><a href="/"><InstagramIcon/></a></li>
                                <li><a href="/"><PinterestIcon/></a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <h3><BuildIcon/> Our Services</h3>
                            <ul className="services-info">
                                <li><a href={`${process.env.PUBLIC_URL}/service/residential`}>Residential</a></li>
                                <li><a href={`${process.env.PUBLIC_URL}/service/commercial`}>Commercial</a></li>
                                <li><a href={`${process.env.PUBLIC_URL}/service/electrical-inspections`}>Electrical Inspections</a></li>
                                <li><a href={`${process.env.PUBLIC_URL}/service/generator-services`}>Generator Services</a></li>
                                <li><a href={`${process.env.PUBLIC_URL}/service/lighting-services`}>Lighting Services</a></li>
                                <li><a href={`${process.env.PUBLIC_URL}/service/new-installation`}>New Installation</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <h3><QueryBuilderIcon/> Working Hours</h3>
                            <ul className="hours-info">
                                <li>Mon: 9:00 - 17:00</li>
                                <li>Tue: 9:00 - 17:00</li>
                                <li>Wed: 9:00 - 17:00</li>
                                <li>Thu: 9:00 - 17:00</li>
                                <li>Fri: 9:00 - 17:00</li>
                                <li>Sat: Closed</li>
                                <li>Sun: Closed</li>
                            </ul>
                        </Col>
                        <Col xs={12} sm={6} md={3}>
                            <h3><AccountTreeIcon/> Site Map</h3>
                            <ul className="pages-info">
                                <li><Nav.Link href={`${process.env.PUBLIC_URL}/`}>Home</Nav.Link></li>
                                <li><Nav.Link href={`${process.env.PUBLIC_URL}/about`}>About Us</Nav.Link></li>
                                <li><Nav.Link href={`${process.env.PUBLIC_URL}/gallery`}>Gallery</Nav.Link></li>
                                <li><Nav.Link href={`${process.env.PUBLIC_URL}/faq`}>FAQ</Nav.Link></li>
                                <li><Nav.Link href={`${process.env.PUBLIC_URL}/get-a-quote`}>Get a Quote</Nav.Link></li>
                                <li><Nav.Link href={`${process.env.PUBLIC_URL}/contact`}>Contacts</Nav.Link></li>
                            </ul>
                        </Col>
                    </Row>
                    <hr/>
                    <div className="copyright-info">
                        <p>{configs.companyName} {new Date().getFullYear()} Copyright | Powered by biramedia.com</p>
                    </div>
                </Container>
            </Fade>
            <ScrollUpButton/>
        </footer>
    )
};


export default Footer;
