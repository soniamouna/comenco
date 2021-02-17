import React, { Component , Fragment } from "react";

          class Difference extends Component{
              state = {
                  didViewCountUp: false
              };
              onVisibilityChange = isVisible => {
                  if (isVisible) {
                      this.setState({didViewCountUp: true});
                  }
              }
              render(){
                  let Data = [
                      {
                          title : 'Disponibilité',
                          countTitle: 'Nous sommes réactifs, prenons le temps  d’écouter , comprendre et  répondre aux questions de nos clients, les rassurer et les accompagner dans leurs démarches. ',
                      },
                      {
                        title : 'Professionnalisme',
                        countTitle: 'Nos agents de sécurité interviennent dans le cadre de leur mission dans le strict respect des lois, règles, procédures et consignes. Tous les agents de sécurité déployés sont des agents qualifiés et certifiés,',
                      },
                      {
                          title : 'Proximité',
                          countTitle: 'Implantée au cœur de la ville de Genève et intervenant sur tout le territoire Suisse, la proximité avec nos clients est un facteur essentiel de qualité et de services',

                      },
                  ];

                  return(
                      <Fragment>
                      <br/>

                          <div className=" row">
                              {Data.map( (value, i) => (
                                  <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={i}>
                                      <h3 style={{color:'#f9004d'}}>{value.title}</h3>
                                      <p className="description">{value.countTitle}</p>

                                  </div>
                              ))}
                          </div>
                      </Fragment>
                  )
              }
          }

      /*  {  </React.Fragment>
      )
  }

}*/
export default Difference;
