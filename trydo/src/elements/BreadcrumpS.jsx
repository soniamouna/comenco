import React, { Component } from "react";
import Slider from "react-slick";
import { slideSlick2 } from "../page-demo/script";
import Particles from 'react-particles-js';


const SlideList = [
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--2',
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--3',
    },
    {
        textPosition: 'text-left',
        bgImage: 'bg_image--4',
    }
]

class BreadcrumpS extends Component{
    render(){

        return(
          <React.Fragment>
            <div className="slider-wrapper slider-creative-agency with-particles" id="home">
                  <div className="slider-activation">
                      <Slider className="rn-slick-dot dot-light" {...slideSlick2}>
                          {SlideList.map((value , index) => (
                              <div data-black-overlay="6" className={`slide slide-style-2 slider-box-content without-overlay d-flex align-items-center justify-content-center bg_image ${value.bgImage}`} key={index}>

                                  <div className="container">
                                      <div className="row">
                                          <div className="col-lg-12">
                                              <div className={`inner ${value.textPosition}`}>
                                                  <h2 style={{color:'white'}} className="title">La sécurité une affaire de spécialistes</h2>
                                                  <p className="description">Votre compagnie de sécurité basée à Genève vous protège partout en Suisse.</p>
                                                  <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href="#contact">Nous contacter</a></div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          ))}
                      </Slider>
                  </div>
              </div>
          </React.Fragment>
        )
    }
}


export default BreadcrumpS;
