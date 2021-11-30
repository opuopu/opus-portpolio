import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className="footer-main">
           <Container>
               <div className="d-flex align-items-center justify-content-between flex-column  flex-lg-row">
                   <h5 className="text-white">Designed and Developed by Soumyajit Behera</h5>
                   <h5 className="text-white">Copyright © 2021 </h5>
                   <h5>
                 <a target="_blank" href="https://github.com/opuopu">  <i className="fab text-white fa-github px-3"></i></a>
                   <a target="_blank" href="https://www.linkedin.com/in/md-nur-mohammod-2b8a55226/"><i className="fab text-white fa-linkedin px-3"></i></a>
                  
                   </h5>
               </div>
           </Container>
           </div>
        </div>
    );
};

export default Footer;