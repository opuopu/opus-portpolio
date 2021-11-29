import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import emailjs from 'emailjs-com';
import swal from 'sweetalert';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';


const Contact = () => {
    // const [swal,setswal] = useState('')
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_njqpage', 'template_hgfhipt', form.current, 'user_11TTzeKsnh0ZFLEWweaCS')
          .then((result) => {
              console.log(result.text);
              if(result.text){
                swal("Good job!", "You clicked the button!", "success");
                alert('email send successfully')

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
                <div className="col-md-7">
                <form ref={form} onSubmit={sendEmail}>
     
      <input className="inputs" placeholder="enter your name" type="text" name="user_name" /> <br />

      <input placeholder="enter your email"  className="inputs" type="email" name="user_email" /> <br />
    
      <textarea placeholder="enter text" className="inputss" cols="70" rows="10" name="message" /> <br />
      <input type="submit" className="send" value="Send email" />
    </form>
                </div>
            </div>
        </Container>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default Contact;