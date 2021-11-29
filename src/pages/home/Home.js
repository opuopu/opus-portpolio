import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import './home.css'

const Home = () => {
    return (
        <div>
<Header></Header>
            <div className="home-main top">
                <Container>
                   <div className="d-flex justify-content-between flex-column flex-lg-row align-items-center ">
                       <div className="">
                           <p className="text-white">HI THERE  <img  src="https://www.kemiadeleke.com/media/emoji.svg" alt="" /> i m</p>
                           <h1 className="text-white ">MD Nur Mohammod</h1>
                           <h5 className="h-t">im a junior react js developer.</h5>
                               <a className="hire-btn" href="https://drive.google.com/uc?export=download&id=1CRmLr6_OLEqIA6g4AyypQ5yaxZTGt7Uf">Get Resume</a>
                       </div>
                       <div className="">
                           <img className="img-fluid py-5  " src="https://res.cloudinary.com/dejiabiola/image/upload/v1607804394/envato_2.0/kem-hero.png" alt="" />
                       </div>
                   </div>
                 
                </Container>
            </div>
            <div className="second-home">
                <Container>
<div className="d-flex justify-content-between flex-column flex-lg-row align-items-center ">
    <div className="col-md-6">
         <h1 className="text-white fw-bold my-4">LET ME <span className="intro">INTRODUCE</span> MYSELF</h1>
         <h5 className="text-white ">I fell in love with programming and I have at least learnt something, I think… </h5>
         <h5 className="text-white  my-3">I feel comfortable in classics like <span className="intro"> Javascript,react js,node js.</span></h5>
         <h5 className="text-white"> <span className="intro">My field of Interest's are building</span> new  Web Technologies and Products</h5>
         <h5 className="text-white">
         Whenever possible, I also apply my passion for developing products with <span className="intros">Node.js,react js,react router,html,css,bootstrap,tailwind css,node js,express js,mongoDB,firebase.</span>
         </h5>
    </div>
    <div className="col-md-">
        <img className="py-5" src="https://soumyajit.tech/static/media/avatar.5852f40f.svg" alt="" />
    </div>
</div>


{/* next part */}
<div className="my-5">
    <p className="intro text-center">what i do</p>
    <h2 className="text-white text-center">My Services</h2>

    <div className="d-flex justify-content-around flex-column flex-lg-row  my-5">
        <div className="">
           <div className="cards">
           <img  src="https://www.kemiadeleke.com/media/react-logo.svg" alt="" />
           <h3 className="cards-title fw-bold">Product Design</h3>
           <p className="cards-text">I work with certain design tools to create <br /> high-fidelity designs and prototypes. <br /> I design accessible and usable products <br /> which aid business growth.</p>
           </div>

        </div>
        <div className="">
           <div className="cards">
           <img src="https://www.kemiadeleke.com/media/brackets.svg" alt="" />
           <h3 className="cards-title fw-bold">Full Stack Development</h3>
           <p className="cards-text">I use various web technologies to develop <br /> attractive websites which converts <br /> visitors to  customers. I develop creative and <br /> responsive website layouts.</p>
           </div>

        </div>
    </div>
</div>
<div className="last-home text-center py-5">
    <h1 className="text-white">FIND ME ON</h1>
    <p className="cards-text">feel free to <span className="intro">connect</span> with me</p>
    <div className="">
  <a href="https://github.com/opuopu">  <i className="fab fabs fa-github px-3"></i></a>
  <a href="https://www.linkedin.com/in/md-nur-mohammod-2b8a55226/"><i className="fab fabs fa-linkedin px-3"></i></a>
    </div>

</div>
                </Container>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;