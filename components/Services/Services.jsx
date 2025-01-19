import React from "react";
import { services } from "./data";


const OurServices = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
          <h1 className="mb-5">
            Explore Our <span className="text-primary text-uppercase">Services</span>
          </h1>
        </div>
        <div className="row g-4">
          {services.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              key={index}
              data-wow-delay={service.delay}
            >
              <a className="service-item rounded" href="#">
                <div className="service-icon bg-transparent border rounded p-1">
                  <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                    <i className={`fa ${service.icon} fa-2x text-primary`}></i>
                  </div>
                </div>
                <h5 className="mb-3">{service.title}</h5>
                <p className="text-body mb-0">{service.description}</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
