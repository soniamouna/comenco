import React, { Component } from "react";
import Slider from "react-slick";
import { slideSlick2 } from "../page-demo/script";


const SlideList = [
    {   title:'Comenco security',
        description: 'Avec nous, vous êtes assuré de la carte de la qualité',
        textPosition: 'text-left',
        bgImage: 'bg_image--3',
        link:'/',
    },
    {   title:'Comenco facility managment',
        description: 'La gestion et la sécurité de vos bâtiments',
        textPosition: 'text-left',
        bgImage: 'bg_image--2',
        link:'/facility-managment',
    },
    {   title:'Comenco AMO',
        description: 'Vous avez une construction ou une rénovation complexe ou spécifique à effectuer ?',
        textPosition: 'text-left',
        bgImage: 'bg_image--4',
        link:'/assistance-maitrise-oeuvre',
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
                                                  <h2 style={{color:'white'}} className="text-uppercase title">{value.title}</h2>
                                                  <p className="description">{value.description}</p>
                                                  <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href={value.link}>Découvrir</a></div>
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
