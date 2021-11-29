import React from 'react';
import { Card, Carousel, Col, Container, Row } from 'react-bootstrap';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import './projects.css'

const Projects = () => {
    return (
        <div>
          <Header></Header>
         <div className="projects-main top">
           <h1 className="text-white text-center">My Recet  <span className="works">Works</span></h1>
           <p className="text-white text-center dd">Here are few projects i have work recently</p>
             <Container>
                   <div className="row g-4">
                       <div className="col-md-6">
                           <div className="pro shadow">
                           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/138KHX0Q/Screenshot-6.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/yxNR8pvH/Screenshot-7.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/vTpmw0KX/Screenshot-8.png"
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
  <h1  className="pro-title text-white text-center fw-bold my-3">Motorcycle Vally</h1>
  <p className="text-white  desc">A user can order products and he/she can see his/her order from the      
                        dashboard. 
Customers create their account using email and password and they can give a review with a dynamic rating system.
Admin can delete and add products from the admin panel dashboard.

</p>
<div className="d-flex justify-content-around">
<p className="techs">react js</p> <p className="techs">node  js</p> <p className="techs">react router</p> <p className="techs">Bootstrap</p> <p className="techs">firebase</p> <p className="techs">mongoDB</p> <p className="techs">react reveal</p>
</div>
<div className="d-flex justify-content-around">
<a className="links" href="https://apurbo-2dc23.web.app/"> <i class="fab fa-telegram-plane"></i> Live site</a>
<a className="links" href="https://github.com/opuopu/motorcycle-shop"> <i class="fab fa-github"></i> Github Client</a>
<a className="links" href="https://github.com/opuopu/motorcycle-shop-backend"> <i class="fab fa-github"></i> Github Client</a>

</div>
                           </div>
                       </div>
                       <div className="col-md-6">
                           <div className="pro shadow">
                           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/Xq80QQbp/Screenshot-9.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/qRcfvjgj/Screenshot-10.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="https://i.postimg.cc/kGwkxGQS/Screenshot-11.png"
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
  <h1 className="pro-title text-white text-center fw-bold my-3">Turisom</h1>
  <p className="text-white  desc">The travelers who want to travel can choose a place and book a ticket.
A user can delete his/her order.
A user can add a service from the add a service section.
implemented firebase login system and applied animation.

</p>
<div className="d-flex justify-content-around">
<p className="techs">react js</p> <p className="techs">node  js</p> <p className="techs">react router</p> <p className="techs">Bootstrap</p> <p className="techs">firebase</p> <p className="techs">mongoDB</p> <p className="techs">react reveal</p>
</div>




<div className="d-flex justify-content-around">
<a className="links" href="https://fir-authentication-form.web.app/"> <i class="fab fa-telegram-plane"></i> Live site</a>
<a className="links" href="https://github.com/opuopu/turisom-client"> <i class="fab fa-github"></i> Github Client</a>
<a className="links" href="https://github.com/opuopu/turisom-server-side"> <i class="fab fa-github"></i> Github server </a>
</div>
                           </div>
                       </div>
                       <div className="col-md-6">
                           <div className="pro shadow">
                           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/brMRcj8M/Screenshot-12.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/prgKcYJM/Screenshot-13.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="https://i.postimg.cc/85YvsB3f/Screenshot-15.png"
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
  <h1 className="pro-title text-white text-center fw-bold my-3">Mediacare Healthcare</h1>
  <p className="text-white desc">This is a healthcare-related website. Users can appointment from the
                        appointment section.        
Users can see service details.
Implemented firebase login signup system.
fully responsive.


</p>
<div className="d-flex justify-content-around">
<p className="techs">react js</p>  <p className="techs">react router</p> <p className="techs">Bootstrap</p> <p className="techs">firebase</p>  
</div>

<div className="d-flex justify-content-around">
<a className="links" href="https://bd-cash-c8e62.web.app/home"> <i class="fab fa-telegram-plane"></i> Live site</a>
<a className="links" href="https://github.com/opuopu/mediacare-healthcare-website"> <i class="fab fa-github"></i> Github Client</a>

</div>
                           </div>
                       </div>
                       <div className="col-md-6">
                           <div className="pro shadow">
                           <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/L5WQ2bjq/Screenshot-19.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.postimg.cc/NfyPpQwR/Screenshot-17.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 img-fluid"
      src="https://i.postimg.cc/kgKYPwG4/Screenshot-16.png"
      alt="First slide"
    />
  </Carousel.Item>
  </Carousel>
  <h1 className="pro-title text-white text-center fw-bold my-3">Mediacare Healthcare</h1>
  <p className="text-white desc">This is a simple it related website.. Users can see services from the
                        services  section.        

fully responsive.


</p>
<div className="d-flex justify-content-around">
<p className="techs">react js</p> <p className="techs">css</p>  <p className="techs">Bootstrap</p> <p className="techs">rest api</p> 
</div>

<div className="d-flex justify-content-around">
<a className="links" href="https://cranky-hamilton-12ced0.netlify.app/home"><i class="fab fa-telegram-plane"></i> Live site</a>
<a className="links" href="https://github.com/opuopu/it-review-website"> <i class="fab fa-github"></i> Github Client</a>

</div>
                           </div>
                       </div>
                       
                   </div>
             </Container>
         </div>
         <Footer></Footer>
        </div>
    );
};

export default Projects;