import React from 'react';
import ImgBox1 from "../../assets/images/inner_11.jpg";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ImgBox2 from "../../assets/images/inner_12.jpg";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import ImgBox3 from "../../assets/images/inner_13.jpg";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";



import './styles.scss'

const ServiceBoxes = () => {
    return (
        <div className="boxes-section">
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox1} alt=""/>
                </div>
                <div className="box-icon"><HomeOutlinedIcon/></div>
                <div className="box-content">
                    <h2>Lighting Services</h2>
                    <p>We illuminate your house & property professionally.</p>
                    <div className="box-btn"><a href={`${process.env.PUBLIC_URL}/service/lighting-services`}>Read More</a></div>
                </div>
            </div>
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox2} alt=""/>
                </div>
                <div className="box-icon"><BusinessOutlinedIcon/></div>
                <div className="box-content">
                    <h2>New Installations</h2>
                    <p>We deliver our services for both residential and commercial.</p>
                    <div className="box-btn"><a href={`${process.env.PUBLIC_URL}/service/new-installation`}>Read More</a></div>
                </div>
            </div>
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox3} alt=""/>
                </div>
                <div className="box-icon"><BuildOutlinedIcon/></div>
                <div className="box-content">
                    <h2>Electrical Inspections</h2>
                    <p>We cover range of electrical inspections with full diligence.</p>
                    <div className="box-btn"><a href={`${process.env.PUBLIC_URL}/service/electrical-inspections`}>Read More</a></div>
                </div>
            </div>
        </div>
    )
};

export default ServiceBoxes
