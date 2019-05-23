import React, { Component } from 'react';
import mountainsImg from '../assets/mountains.png';
import {VelocityComponent, velocityHelpers} from 'velocity-react';

class Mountains extends Component {
    constructor(props){
      super(props);
      if(window.innerWidth/window.innerHeight < 1.2)
        this.portraitish = true;
      else
        this.portraitish = false;
      let translateY;
      if(this.portraitish) translateY = '0';
      else translateY = '20vh';

      let ani = velocityHelpers.registerEffect({
        defaultDuration: 0,
        calls: [
          [{
              translateX: '10vw',
              translateY: translateY
          }, 1, {
              delay: 0,
              easing: 'cubic-bezier(.75,0,.25,1)'
          }]
        ]
      });

      this.state = {
        animation: ani
      };
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    }

    animation = (e) => {
      if(this.portraitish) return;
      let x = 10 - (e.pageX /this.width - 0.5)*8;
      let y = 20 - (e.pageY /this.height - 0.5)*10;
      let ani = velocityHelpers.registerEffect({
        defaultDuration: 600,
        calls: [
          [{
            translateX: x+ `vw`,
            translateY: y+ `vh`
          }, 1, {
              delay: 20,
              easing: 'cubic-bezier(.75,0,.25,1)'
          }]
        ]
      });
      new Promise(()=>{
        this.setState(prevState => ({
          animation: ani
        }));
      }).then(()=>{
        this.refs.mountainAni.runAnimation()
      });
    }



    render() {
      return (
        <VelocityComponent ref="mountainAni" id='mountainWrap' animation={this.state.animation} interruptBehavior={'stop'} runOnMount={false}>
          <img id='mountains' src = {mountainsImg} alt=""/>
        </VelocityComponent>
      );
    }
}

export default Mountains;
