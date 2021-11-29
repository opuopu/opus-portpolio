import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import Fade from 'react-reveal/Fade';


const Contact = () => {
    // const [swal,setswal] = useState('')
  
    const sendEmail = (e) => {
        e.preventDefault();
       
    // service_njqpage
        emailjs.sendForm('service_njqpage', 'template_dzqdvog', e.target, 'user_11TTzeKsnh0ZFLEWweaCS')
          .then((result) => {
              console.log(result.text);
              if(result.text){
                swal("Good job!", "email successfully!", "success");
                alert('email send successfully')
                e.target.reset()
       

              }
          }, (error) => {
              console.log(error.text);
          });
      };
    return (
        <div>
            <Header></Header>
        <div className="contact-main top">
        <div className="text-center">
           <p className="padas">Contact Me</p>
           <h2 className=" text-white fw-bold my-2">Get In Touch</h2>
           <p className="contact-he">I am available to work on your projects and bring your ideas to life. I am just a click away.</p>
        </div>
        <Container>
            <div className="row my-5">
             <Fade left>
             <div className="col-md-5">
                   <div className="d-flex align-items-center  justify-content-around"> <img className=" icons" src="https://www.kemiadeleke.com/media/contact-address.svg" alt="" />
                  <p className="icons-title">Lakshmipur Bangladesh</p>
                   </div>
        
                   <div className="d-flex align-items-center  justify-content-around"> <img className=" icons" src="https://www.kemiadeleke.com/media/contact-email.svg" alt="" />
                  <p className="icons-title">nurmdopu428@gmail.com</p>
                   </div>
                   <div className="d-flex align-items-center  justify-content-around"> <img className=" icons" src="https://www.kemiadeleke.com/media/contact-phone.svg" alt="" />
                  <p className="icons-title">+(0088)01876399629(bd)</p>
                   </div>
                </div>
             </Fade>
             <Fade right>
             <div className="col-md-7">
          
          <form onSubmit={sendEmail}>
                     <div className="row pt-5 mx-auto">
                         <div className="col-8 form-group mx-auto">
                             <input type="text" className="form-control inputs" placeholder="Name" name="name" />
                         </div>
                         <div className="col-8 pt-2 form-group mx-auto">
                             <input type="email" className="form-control inputs" placeholder="Email Address" name="email" />
                         </div>
                         <div className="col-8 pt-2 form-group mx-auto">
                             <input type="text" className="form-control inputs" placeholder="Subject" name="subject" />
                         </div>
                         <div className="col-8 pt-2 form-group mx-auto">
                             <textarea className="form-control inputss"
                                 cols="30"
                                 rows="8"
                                 placeholder="Your Message" name="message" />
                         </div>
                         <div className="col-8 pt-3 mx-auto">
                             <input type="submit" className="send" value="send message" />
                         </div>
                     </div>
                 </form>
                     </div>
             </Fade>
            </div>
        </Container>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Contact;