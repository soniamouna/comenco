import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Société sécurité Genève  </title>
                    <meta name="description" content="Avec 25 ans d’expérience dans le domaine de la sécurité, la direction Comenco SA rassemble des équipes de professionnels motivés à même de proposer à nos clients une large palette de services sur mesure." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
