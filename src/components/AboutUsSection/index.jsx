import React from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import configs from '../../assets/configs';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import './styles.scss';

const AboutUsSection = () => {
    return (
        <div className='about-us-section-wrap'>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={6}>
                        <h3>Our Comprehensive Range of Electrical Services in <span>{configs.greatCity}</span></h3>
                        <p>
                            {configs.companyName} strives to ensure the highest level of service as well as integrity. Reach out to {configs.greatCity} electrical
                            experts to know more about our electrical needs. We ensure that every service contract or call
                            is always carried out by abiding to the Ontario Electrical Safety Code.
                        </p>
                        <ul>
                            <li>Residential electrical services</li>
                            <li>Commercial electrical services</li>
                            <li>New installation</li>
                            <li>Generator services</li>
                            <li>Lighting services</li>
                        </ul>
                    </Col>
                    <Col xs={12} sm={12} md={6}>
                        <h3>Why <span>Choose Us</span>?</h3>
                        <p>
                            At {configs.companyName}, we are fully dedicated to ensuring ultimate customer satisfaction. Here are some
                            reasons to choose us:
                        </p>
                        <ul>
                            <li>Presence of industry experts</li>
                            <li>Quick turnaround time</li>
                            <li>Competitive pricing</li>
                            <li>Top-notch customer service</li>
                        </ul>
                        <div className="button-blue">
                            <a href={`+1${configs.phone}`}><PhoneInTalkIcon/> For more information, give us a call!</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default AboutUsSection;
