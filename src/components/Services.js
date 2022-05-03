import React from "react";
import image_1 from './img/teamwork.png';
import image_2 from './img/Teamwork-5.png'
import image_3 from './img/Upstream-8.png'

const Services = () =>(
    <div className="services offcanvas-header justify-content-center d-flex flex-column text-center">
        <div className="servicesText">
        <h1 className="h1 pt-3">Teaching Redefined.</h1>
        <p className="py-3">We explore different techniques and methods of teaching <br></br> ensuring
        maximum understanding.
        </p>
        </div>
        <div className="users row w-100">
        <img src={image_1} className='mx-auto my-2 servicesImg col-lg-4 col-md-6 col-sm-12' alt="img"/>
        <img src={image_2} className='mx-auto my-2 servicesImg col-lg-4 col-md-6 col-sm-12' alt="img"/>
        <img src={image_3} className='mx-auto my-2 servicesImg col-lg-4 col-md-6 col-sm-12' alt="img"/>
        </div>
    </div>
);

export default Services;