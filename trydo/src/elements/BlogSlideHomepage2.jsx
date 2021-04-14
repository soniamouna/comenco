import React, { Component } from "react";
import Slider from "react-slick";
import {slickDot2 } from "../page-demo/script";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


class BlogSlideHomepage2 extends Component{
  constructor(props){
    super (props);
    }
    render(){



        return(
          <React.Fragment>
            <div  className=" rn-featured-service-area  pb--120 bg_color--5" id="blog">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-12 mt--30">
                            <div className="text-left section-title">
                                <h2>{this.props.titre}</h2>
                            </div>
                        </div>
                        {/* Start Single Service  */}
                        <div className="col-lg-12">
                            <Slider {...slickDot2}>
                                {this.props.PostList.map((value , index) => (
                                    <div className="blog col-lg-12 col-md-4 mt--30" key={index}>
                                        <a className="btn-transparent rn-btn-dark">
                                            <div className="thumbnail">
                                                <img src={`/assets/images/blog/comenco-blog-${value.images}.jpg`} alt={`Comenco - ${value.title}`}/>
                                            </div>
                                            <div className="content"><br/>
                                                <Popup trigger={<h3 className="title text-uppercase">{value.title}</h3>} position="center">
                                                    <ul>
                                                        {value.description.map((v , i) => (
                                                            <li>{v}</li>
                                                        ))}      
                                                    </ul>
                                                </Popup>
                                                {/*<a className="btn-transparent rn-btn-dark" href={value.link}><span className="text"style={{color:'#F9004D'}}>Read More</span></a>*/}
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
          </React.Fragment>
        )
    }
}


export default BlogSlideHomepage2;
