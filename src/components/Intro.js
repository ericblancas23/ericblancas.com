import React, { Component } from 'react';
import angularLogo from '../assets/angular.svg';
import rails from '../assets/rails.png';
import mongoLogo from '../assets/mongo.svg';
import nodeJsLogo from '../assets/nodejs.svg';
import reactLogo from '../assets/react.svg';

import {VelocityTransitionGroup} from 'velocity-react';

class Intro extends Component {

  render(){
    return(
      <div className="intro">
        <VelocityTransitionGroup enter={{animation: "transition.flipYIn", duration: 700, delay:0}} runOnMount={true}>
          <h2>
            About <span className='highlight'>Me</span>
          </h2>
          <h5 className="introContents">
          I am passionate about building excellent software that improves the lives of those around me.<br /> I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.<br /> All of my work is produced locally from Los Angeles, CA. <br/>What would you do if you had a software expert available at your fingertips?
          </h5>
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: "transition.slideRightBigIn", duration: 700, delay:0}} runOnMount={true}>
          <h4 className="techIntro">
            <span>What I have worked with:</span>
          </h4>
        </VelocityTransitionGroup>
        <div className="flex marginBox">
          <div className="flexChildren">
            <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:800}} runOnMount={true}>
              <img className="logoImg" src = {angularLogo} alt="Angular Logo Appears here"/>
            </VelocityTransitionGroup>
            <div className="caption">Angular 4</div>
          </div>
          <div className="flexChildren">
            <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:600}} runOnMount={true}>
              <img className="logoImg" src = {reactLogo} alt="React Logo Appears here"/>
            </VelocityTransitionGroup>
            <div className="caption react">React</div>
          </div>
          <div className="flexChildren">
            <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:400}} runOnMount={true}>
              <img className="logoImg" src = {nodeJsLogo} alt="NodeJs Logo Appears here"/>
            </VelocityTransitionGroup>
            <div className="caption">Node.js</div>
          </div>
          <div className="flexChildren">
            <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:200}} runOnMount={true}>
              <img className="logoImg" src = {mongoLogo} alt="MongoDb Logo Appears here"/>
            </VelocityTransitionGroup>
            <div className="caption">MongoDB</div>
          </div>
          <div className="flexChildren">
            <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:0}} runOnMount={true}>
              <img className="logoImg" src = {rails} alt="AWS Logo Appears here"/>
            </VelocityTransitionGroup>
            <div className="caption">Ruby On Rails</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Intro;
