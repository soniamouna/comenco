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
                          countTitle: 'Que ce soit à l’intérieur comme à l’extérieur, nous vous offrons une maintenance irréprochable ',
                      },
                      {
                        title : 'Professionnalisme',
                        countTitle: 'Grâce à nos services de maintenance et de conciergerie, et de notre entretien professionnel nous conserverons la valeur de vos biens immobiliers et installations. Dans toutes nos activités, vos bâtiments ont toute l’année un aspect irréprochable et dégagent une atmosphère agréable pour vous, votre famille, vos collaborateurs et vos clients. ',
                      },
                      {
                          title : 'Proximité',
                          countTitle: 'Les travaux à effectués sont définis avec précision par notre équipe et nos partenaires, ce qui permet aussi de déceler les possibilités de réduire les coûts.',

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
