import React, { Component } from 'react';
import {VelocityTransitionGroup, velocityHelpers} from 'velocity-react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        show: true
    }
  }

  Animations = {
    in: velocityHelpers.registerEffect({
      defaultDuration: 600,
      calls: [
        [{
          width: '100%'
        }, 1, {
          delay: 50,
          easing: 'ease-out',
        }]
      ],
    }),

    out: velocityHelpers.registerEffect({
      defaultDuration: 200,
      calls: [
        [{
          width: 0
        }, 1, {
          delay: 50,
          easing: 'ease-in',
        }]
      ],
    }),
  };

  render(){
    return(
      <div className="home">
        <div className="nameLogo">
          <VelocityTransitionGroup enter={{animation: "slideDown", duration: 700, delay:600}} runOnMount={true}>
            <h1 className="myName">Eric Blancas</h1>
          </VelocityTransitionGroup>
            <div className="strokeWrapper">
            <VelocityTransitionGroup enter={{animation: this.Animations.in, duration: 800, delay:100}} runOnMount={true}>
              <hr className="middleStroke"/>
            </VelocityTransitionGroup>
            </div>
          <VelocityTransitionGroup enter={{animation: "slideDown", duration: 700, delay:600}} runOnMount={true}>
            <h4 className="shortIntro">Computer Scientist | Fullstack Dev</h4>
          </VelocityTransitionGroup>
        </div>
      </div>
    );
  }
}

export default Home;
