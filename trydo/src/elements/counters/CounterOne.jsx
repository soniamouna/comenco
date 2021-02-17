import React, { Component , Fragment } from "react";
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

class CounterOne extends Component{
  constructor(props){
    super (props);
    this.state = {
        didViewCountUp: false
    };}
    onVisibilityChange = isVisible => {
        if (isVisible) {
            this.setState({didViewCountUp: true});
        }
    }

    render(){

        return(
            <Fragment>
                <div className="row">
                    {this.props.DataCounter.map( (value, index) => (
                        <div className= {`${value.countStyle}`} key={index}>
                            <h5 className="counter">
                              {value.countSymbole}
                              <VisibilitySensor onChange={this.onVisibilityChange} offset={{top:10}} delayedCall>
                                  <CountUp end={this.state.didViewCountUp ? value.countNum : 0} />
                              </VisibilitySensor>
                            </h5>
                            <p className="description">{value.countTitle}</p>
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }
}
export default CounterOne;
