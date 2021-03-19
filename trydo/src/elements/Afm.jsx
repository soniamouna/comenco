import React, { Component , Fragment } from "react";
import Slider from "react-slick";
import { slickDot } from "../page-demo/script";
import Scrollspy from 'react-scrollspy';
import ScrollToTop from 'react-scroll-up';
import Particles from 'react-particles-js';
import { FiChevronUp , FiX , FiMenu } from "react-icons/fi";
import ServiceList from "../elements/service/ServiceList";
import CounterOne from "../elements/counters/CounterOne";
import Testimonial from "../elements/Testimonial";
import Team from "../elements/Team";
import BlogContent from "../elements/blog/BlogContent";
import BrandTwo from "../elements/BrandTwo";
import FooterTwo from "../component/footer/FooterTwo";
import Contact from "../elements/contact/ContactTwo";
import Helmet from "../component/common/Helmet";
import BreadcrumpS from "../elements/BreadcrumpS";
import Difference from "../elements/Difference";
import BlogSlideHomepage from "../elements/BlogSlideHomepage";
import { FiHeadphones , FiMail , FiMapPin } from "react-icons/fi";
import Content2 from "../elements/blog/Content2";




const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Creative One Page',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact'
    }
]

const list = [
    {
        image: 'image-4',
        category: '',
        title: 'Securité et Surveillance',
        link:'/'
    },
    {
        image: 'image-1',
        category: '',
        title: 'Active Facility Managment',
        link:'/facility-managment'
    },
    {
        image: 'image-2',
        category: '',
        title: 'Assistance à maître d’œuvre',
        link:'/amoe'
    },
    {
        image: 'image-3',
        category: '',
        title: 'Recrutement',
        link:'https://www.comenco.ch/recrutement-securite/'
    },

]

const DataCounter = [
    {
        countNum : 99,
        countTitle: 'DE CLIENTS SATISFAITS',
        countSymbole: '',
        countStyle: 'counterup_style--3 col-lg-4 col-md-4 col-sm-6 col-12'
    },
    {
        countNum : 2500,
        countTitle: 'INTERVENTIONS PAR AN.',
        countSymbole: '',
        countStyle: 'counterup_style--4 col-lg-4 col-md-4 col-sm-6 col-12'
    },
    {
        countNum : 100,
        countTitle: 'A VOTRE SERVICE',
        countSymbole: '',
        countStyle: 'counterup_style--3 col-lg-4 col-md-4 col-sm-6 col-12 '
    },
];



class Afm extends Component{
    constructor(props) {
        super(props);
        this.menuTrigger = this.menuTrigger.bind(this);
        this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
        this.stickyHeader = this.stickyHeader.bind(this);

       //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
        window.addEventListener('load', function() {
            console.log('All assets are loaded');
        })
    }
    menuTrigger() {
        document.querySelector('.header-wrapper').classList.toggle('menu-open')
    }
    CLoseMenuTrigger() {
        document.querySelector('.header-wrapper').classList.remove('menu-open')
    }
    stickyHeader () {}
    render(){
        const PostList = BlogContent.slice(0 , 5);

        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 100) {
                document.querySelector('.header--fixed').classList.add('sticky')
            }else{
                document.querySelector('.header--fixed').classList.remove('sticky')
            }
        });

        var elements = document.querySelectorAll('.has-droupdown > a');
        for(var i in elements) {
            if(elements.hasOwnProperty(i)) {
                elements[i].onclick = function() {
                    this.parentElement.querySelector('.submenu').classList.toggle("active");
                    this.classList.toggle("open");
                }
            }
        }

        return(
            <Fragment>
                <Helmet pageTitle="Comenco" />

                {/* Start Header Area  */}
                <header className="header-area formobile-menu header--fixed default-color">
                    <div className="header-wrapper" id="header-wrapper">
                        <div className="header-left">
                            <div className="logo">
                                <a href="./" rel="home" itemprop="url">
                          					<h3 className="title" style={{color:"grey"}}>COMENCO SA <img draggable="false" role="img" class="col-2" alt="🇨🇭" src="assets/images/logo/logo-ch.svg"/></h3>
                          				</a>
                            </div>
                        </div>
                        <div className="header-right">
                            <nav className="mainmenunav d-lg-block">
                                <Scrollspy className="mainmenu" items={['home', 'about','expertise','services', 'difference']} currentClassName="is-current" offset={-200}>
                                    <li><a href="./">Accueil</a></li>
                                    <li><a href="#about">Qui sommes-nous</a></li>
                                    <li><a href="#expertise">Expertises</a></li>
                                    <li><a href="#services">Nous solliciter</a></li>
                                    <li><a href="#difference">Nos différences</a></li>


                                </Scrollspy>
                            </nav>
                            <div className="header-btn">
                                <a className="rn-btn" href="#contact">
                                    <span>Contactez-nous</span>
                                </a>
                            </div>
                            {/* Start Humberger Menu  */}
                            <div className="humberger-menu d-block d-lg-none pl--20">
                                <span onClick={this.menuTrigger} className="menutrigger text-white"><FiMenu /></span>
                            </div>
                            {/* End Humberger Menu  */}
                            <div className="close-menu d-block d-lg-none">
                                <span onClick={this.CLoseMenuTrigger} className="closeTrigger"><FiX /></span>
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Header Area  */}

                {/* Start Slider Area   */}
                <div className="bg_image bg_image--2" id="home">
                            <div data-black-overlay="6"  className="slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center" >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="inner text-left">
                                                <h2 className="title text-white text-uppercase">Comenco Facility Managment</h2>
                                                <p className="description">Avec nous, vous êtes assuré de la carte de la qualité</p>
                                                <div className="slide-btn"><a className="rn-button-style--2 btn-solid" href="#contact">Nous contacter</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                {/* End Slider Area   */}


                {/* Start About Area */}
                <div id="about" className=" about-area ptb--120 bg_color--5">
                  <div className="about-wrapper">
                      <div className="container">
                            <div className="section-title">
                                <h2 className="title">Qui sommes nous ?</h2>
                                <p className="description">

                                </p>
                                <br/>
                                <h3 className="title">Vos spécialistes intégral</h3>
                                <p>
                                    Comenco SA se charge des tâches liées à la gestion des immeubles et de diverses infrastructures. La qualité du travail mais
                                    également le suivi sur le long terme sont pour nous des valeurs essentielles. Notre mission est
                                    de conserver vos biens au quotidien.
                                </p>
                                <p>
                                  Ces domaines sont couverts pour le moment par nos partenaires spécialisés dans
                                  l’exercice de la gestion des installations modernes et reliées à toute les
                                  disciplines, le meilleur parti des synergies ainsi dégagées.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End About Area */}


                                {/* Start Service Area
                                <div id="expertise" className="service-area creative-service-wrapper ptb--120 bg_color--1">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-lg-12 col-12">
                                                <div className="section-title text-left mb--30">
                                                    <h2>Nos domaines d'expertise</h2>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row creative-service">
                                            <div className="col-lg-12">
                                                <ServiceList item="19" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End Service Area  */}
                                <div id="expertise">
                                    <BlogSlideHomepage PostList={Content2} titre={"Nos domaines d’expertises et de services"}/>
                                </div>

                {/* Start Portfolio Area */}
                <div className="portfolio-area pt--120 pb--140 bg_color--1" id="services">
                    <div className="rn-slick-dot">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="section-title service-style--3 text-left mb--15 mb_sm--0">
                                        <h2 className="title">Nous solliciter</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="slick-space-gutter--15 slickdot--20">
                                        <Slider {...slickDot}>
                                            {list.map((value , index) => (
                                                <div className="portfolio" key={index}>
                                                  <a href={value.link}>
                                                    <div className="thumbnail-inner">
                                                        <div className={`thumbnail ${value.image}`}></div>
                                                        <div className={`bg-blr-image ${value.image}`}></div>
                                                    </div>
                                                    <div className="content">
                                                        <div className="inner">
                                                            <p>{value.category}</p>
                                                            <h4 className="text-white">{value.title}</h4>
                                                            {/*<div className="portfolio-button">
                                                                <a className="rn-btn" href={value.link}>Nous contacter</a>
                                                            </div>*/}
                                                        </div>
                                                    </div>
                                                    </a>
                                                </div>
                                            ))}
                                        </Slider>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* End Portfolio Area */}

                <div id="difference" className="rn-counterup-area pt--140 p pb--110 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h2 className="title">Nos différences</h2>
                                </div>
                            </div>
                        </div>
                        <Difference/>
                    </div>
                </div>

                <div id="about" className=" about-area ptb--120 bg_color--5">
                  <div className="about-wrapper">
                      <div className="container">
                            <div className="section-title">
                                <h2 className="title">Notre promesse</h2>

                                <p className="description">
                                  Nous sommes à l’écoute de vos besoins et dotée d’un véritable esprit professionnel qui se distingue par un personnel dynamique et efficace.
                                  Une prestation avec des prix attractifs qui tient compte des besoins et des moyens financiers de nos clients en vue de faire des économies.

                                </p>
                                <p className="description">
                                  Nos services aux professionnels visent à entretenir au mieux l’image de marque, la sécurité et le bien être de vos clients.
                                </p>
                                <p className="description">
                                  Notre métier, votre plus-value
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Start CounterUp Area */}
                <div className="rn-counterup-area pt--140 p pb--110 bg_color--5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    <h3 className="fontWeight500">Quelques chiffres</h3>
                                </div>
                            </div>
                        </div>
                        <CounterOne DataCounter={DataCounter}/>
                    </div>
                </div>
                {/* End CounterUp Area */}






                {/* Start Contact Us
                <div className="rn-contact-us ptb--120 bg_color--5" id="contact">
                    <Contact />
                </div>
                {/* End Contact Us */}

                {/* Start Contact Top Area  */}
                <div id="contact" className="rn-contact-top-area ptb--120 bg_color--5">
                    <div className="container">
                        <h2 className="title">Nous contacter</h2>
                        <div className="row">
                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiHeadphones />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Contact With Phone Number</h4>
                                        <p><a href="tel:+41 22 503 52 07 ">+41 22 503 52 07 </a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_mobile--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMail />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Email Address</h4>
                                        <p>
                                          <a href="mailto:admin@gmail.com"><a href="mailto:info@comenco.ch" target="_blank">
                                            <span class="elementor-icon-list-icon">
							                                <i aria-hidden="true" class="far fa-envelope"></i>
                                            </span>
										                        <span class="elementor-icon-list-text">info@comenco.ch</span>
											                    </a></a></p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                            {/* Start Single Address  */}
                            <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt_md--50 mt_sm--50">
                                <div className="rn-address">
                                    <div className="icon">
                                        <FiMapPin />
                                    </div>
                                    <div className="inner">
                                        <h4 className="title">Location</h4>
                                        <p>Rue rousseau 1, 1201 Genève, Suisse </p>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Address  */}

                        </div>
                    </div>
                </div>
                {/* End Contact Top Area  */}




                 {/* Start Footer Style  */}
                 <FooterTwo />
                {/* End Footer Style  */}

                {/* Start Back To Top */}
                <div className="backto-top">
                    <ScrollToTop showUnder={160}>
                        <FiChevronUp />
                    </ScrollToTop>
                </div>
                {/* End Back To Top */}

            </Fragment>
        )
    }
}
export default Afm;
