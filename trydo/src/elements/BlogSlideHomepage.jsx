import React, { Component } from "react";
import Slider from "react-slick";
import {slickDot2 } from "../page-demo/script";
import Content1 from "../elements/blog/Content1";


class BlogSlideHomepage extends Component{
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
                            <h2 className="title ">Nos domaines d'expertise</h2>
                        </div>
                    </div>

                        {/* Start Single Service  */}
                        <div className="col-lg-12">
                            <Slider {...slickDot2}>
                                {this.props.PostList.map((value , index) => (
                                    <div className="blog col-lg-12 col-md-4 mt--30" key={index}>
                                            <div className="thumbnail">
                                                <img src={`/assets/images/blog/comenco-blog-${value.images}.jpg`} alt={`DNA Global Analytics - ${value.title}`}/>
                                            </div>
                                            <div className="content"><br/><h3 className="title">{value.title}</h3>
                                                <p >{value.description}</p>
                                                {/*<a className="btn-transparent rn-btn-dark" href={value.link}><span className="text"style={{color:'#F9004D'}}>Read More</span></a>*/}
                                            </div>
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


export default BlogSlideHomepage;
