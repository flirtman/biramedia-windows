import React, {useEffect, useState} from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import './style.scss';
import Logo from '../../assets/images/logo.png';

import configs from '../../assets/configs';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';

const MainNav = () => {
    const [path, setPath] = useState('');

    useEffect(() => {
        setPath(window.location.pathname.split(process.env.PUBLIC_URL + '/')[1])
    }, []);

    const checkIfActive = (given) => {
        return path === given;
    };
    return (
        <Container className="nav-container">
            <Navbar expand="lg" bg="dark" variant="light">
                <Navbar.Brand href="/">
                    <img src={Logo} alt={'Company Name'} className={'logo-top'}/>
                    <p>{configs.companyName}</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <FormatAlignRightIcon/>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href={`${process.env.PUBLIC_URL}/`} className={checkIfActive('') ? 'active' : ''}>Home</Nav.Link>
                        <Nav.Link href={`${process.env.PUBLIC_URL}/about`} className={checkIfActive('about') ? 'active' : ''}>About</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown" className={checkIfActive('service') ? 'active' : ''}>
                            <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/residential`}>Residential</NavDropdown.Item>
                            <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/commercial`}>Commercial</NavDropdown.Item>
                            <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/electrical-inspections`}>Electrical Inspections</NavDropdown.Item>
                            <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/generator-services`}>Generator Services</NavDropdown.Item>
                            <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/lighting-services`}>Lighting Services</NavDropdown.Item>
                            <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/new-installation`}>New Installation</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href={`${process.env.PUBLIC_URL}/gallery`} className={checkIfActive('gallery') ? 'active' : ''}>Gallery</Nav.Link>
                        <Nav.Link href={`${process.env.PUBLIC_URL}/faq`} className={checkIfActive('faq') ? 'active' : ''}>FAQ</Nav.Link>
                        <Nav.Link href={`${process.env.PUBLIC_URL}/get-a-quote`} className={checkIfActive('get-a-quote') ? 'active' : ''}>Get a Quote</Nav.Link>
                        <Nav.Link href={`${process.env.PUBLIC_URL}/contact`} className={checkIfActive('contact') ? 'active' : ''}>Contacts</Nav.Link>
                        <Nav.Link href="tel:5144760669">| <span>{configs.phone}</span></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
};

export default MainNav;
