import React from "react";
import './styles.scss';
import configs from "../../assets/configs";
import {Nav} from "react-bootstrap";

const ServicesSider = () => {
  return (
      <div className="section-service-sider">
          <div className="services-sider-wrap">
              <h2>Services</h2>
              <ul>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/residential`}>Residential</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/commercial`}>Commercial</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/electrical-inspections`}>Electrical Inspections</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/generator-services`}>Generator Services</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/lighting-services`}>Lighting Services</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/new-installation`}>New Installation</Nav.Link></li>
              </ul>
          </div>
          <a className="call-now" href={`tel:${configs.phone}`}><strong><big>{configs.phone}</big></strong></a>
          <a className="get-a-quote" href={`${process.env.PUBLIC_URL}/get-a-quote`}>GET A QUOTE</a>
      </div>
  )
};

export default ServicesSider;
