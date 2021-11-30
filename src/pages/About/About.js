import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Fade from 'react-reveal/Fade';

const About = () => {
    return (
        <div className="mainss">
            <Header></Header>
       
            <div className="about-main">
            <h1 className="text-white text-center fw-bold pt-4">ABOUT <span className="me">ME</span></h1>
                <Container>
                    <div className="d-flex align-items-center justify-content-around py-5 flex-column flex-lg-row">
                       <Fade left>
                       <div>
                            <h1 className="text-white  fw-bold">Know Who <span className="iam">I am</span></h1>
                            <p className="pp">Hello! My name is Brittany and  <br /> I enjoy creating things that live on the internet. <span className="middle"> My  interest in web development</span> <br /> started back in 2021 when I decided to try editing front end <br />  — turns out develop a custom ui taught me a lot about react js!</p>

                            <p className="pp">I’m a Front-End Developer located in bd. <span className="middle">I have a serious passion <br /> for UI effects, animations and creating intuitive, dynamic user experiences.</span>

</p>

<p className="pp">Well-organised person, problem solver, independent employee with <br /> high attention to detail. Fan of MMA, outdoor activities, TV series <br /> and particing english. A family person and father of two fractious boys,

</p>

 <p className="pp middle">Interested in the entire full stack development  and working on ambitious projects with positive people.</p>

                        </div>
                       </Fade>
                      <Fade right>
                      <div>
                            <img className="img-fluid" src="https://soumyajit.tech/static/media/about.aee0f771.png"/>
                        </div>
                      </Fade>

                    </div>
                  
                </Container>
                </div> 
                <Footer></Footer>
        </div>
    );
};

export default About;