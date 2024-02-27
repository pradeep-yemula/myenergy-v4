import React from "react";

const Footer = () =>{

 
    return (
      <div style={{marginTop:"20px"}}>
        <footer className="text-center text-lg-start bg-light text-muted">
          <section className="">
            <div className="container text-center text-md-start mt-1">
              <div className="row mt-3">
                <div className="col-md-8 col-lg-8 col-xl-8 mx-auto mb-8">
                  <h6 className="text-uppercase fw-bold mb-8">
                    About MyEnergy App
                  </h6>
                  <p className='weltext'> This demo site allows the consumers to login and visualize their sample electricity consumption data. 
                This site uses the draft APIs defined in the standard. 
                This project is funded by National Smart Grid Mission (NSGM), 
                supported by Bureau of Indian Standards and exectued by IIT Hyderabad. 
                Login and explore this site to get more information.</p> </div>

                <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful Links</h6>
                  <p>
                    <a href="https://powersense.in/api/docs" className="text-reset">
                    Draft API Documentation
                    </a>
                  </p>
                  <p>
                    <a href="https://docs.google.com/document/d/e/2PACX-1vSCkKTUoB7lyjsCWyosZ35fopygCjGBmwTokaOUL4e0Kd0ILPU3mN1Zeg71bFhMu4Sg_p8jRfjKDpdL/pub" className="text-reset">
                    Draft Project Report (PDF)
                    </a>
                  </p>
                  <p>
                    <a href="https://drive.google.com/file/d/19lmJNpQre9iaD3m5yac8Sm9SRwSbg2jh/view?usp=drive_link" className="text-reset">
                      Project Sanction Letter (PDF)
                    </a>
                  </p>
                  <p>
                    <a href="https://docs.google.com/presentation/d/106bX4uXZqyhoFPHLwrSbVcYdshC4QusxJJrBv1Hp1zc/edit?usp=sharing" className="text-reset">
                      Project Presentation
                    </a>
                  </p>
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    Dr. Pradeep Yemula,
                    Associate Professor, IIT Hyderbad, India </p>
                    <p> email: ypradeep@ee.iith.ac.in </p>
                    <p> +91 8374993999 </p>
                  
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
              IIT Hyderabad
            </a>
          </div>
        </footer>
        </div>
      
    );
  }


export default Footer;
