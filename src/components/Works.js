import React, { Component } from 'react';
import {VelocityTransitionGroup} from 'velocity-react';
import Tilt from 'react-tilt'
import RaisedButton from 'material-ui/RaisedButton';

import CodeIcon from 'react-icons/lib/md/code';
import DesktopIcon from 'react-icons/lib/md/desktop-windows';

import candycrush from '../assets/candycrush.png';
import RayTracer from '../assets/RayTracer.png';
import hairschool from '../assets/hairschool.png';
import Cobrakai from '../assets/Cobrakai.png';
import copWatch from '../assets/copWatch.png';
import ecommerce from '../assets/ecommerce.png';

class TiltOrDiv extends Component {
  constructor(props) {
    super(props);
    const isMobile = props.browser.isMobile;
    const tiltOption = props.browser.tiltOption;

    this.state={
      isMobile: isMobile,
      tiltOption: tiltOption
    }
  }

  render() {
    if(this.state.isMobile)
      return (
        <div className="project">
          {this.props.children}
        </div>
      );
    else
      return(
        <Tilt className="project" options={this.state.tiltOption}>
          {this.props.children}
        </Tilt>
      );
  }

}


class Works extends Component {
  constructor(props){
    super(props);
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    const isMobile = (typeof window.orientation !== 'undefined') ||  navigator.userAgent.match(/Android/i)
                                                                 || navigator.userAgent.match(/webOS/i)
                                                                 || navigator.userAgent.match(/iPhone/i)
                                                                 || navigator.userAgent.match(/iPad/i)
                                                                 || navigator.userAgent.match(/iPod/i)
                                                                 || navigator.userAgent.match(/BlackBerry/i)
                                                                 || navigator.userAgent.match(/Windows Phone/i);

    const tiltOption = (isMobile) ? undefined : {
      max:            (isChrome) ? 30 : 0,     // max tilt rotation (degrees)
      perspective:    (isChrome) ? 1000 : 0,   // Transform perspective, the lower the more extreme the tilt gets.
      scale:          1.05,      // 2 = 200%, 1.5 = 150%, etc..
      speed:          1000,    // Speed of the enter/exit transition
      transition:     false,   // Set a transition on enter/exit.
    }

    this.state={
      clicked : false,
      selected : '',
      browser:{
        isMobile: isMobile,
        tiltOption: tiltOption
      }
    }
  }

  projectSelect(project){
    this.setState(()=>({
      clicked : true,
      selected : project
    }));
  }

  projectClose(){
    this.setState(()=>({
      clicked : false,
      selected: ''
    }));
  }

  render(){
    let snackBarMsg = (<h4>This Project Description has not been updated yet.</h4>);
    let openedImg;

    if(this.state.selected === 'candycrush'){
      openedImg = (<img className="projectImg openImg" src = {candycrush} alt="project img appears here/may be loading" />);
      snackBarMsg = (
        <div>
          <h4 className="highlight">CandyCrush</h4>
          <h5>Candy Crush game made with Angular!</h5>
          <h5>Integrated with Phaser.io game engine along with using typescript</h5>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://github.com/ericblancas23/phaser-candycrush"
            target="_blank"
            label="View Codes"
            icon={<CodeIcon />}
          />
          <span className="btnPadding"></span>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://candy-game.herokuapp.com/"
            target="_blank"
            label="Try It"
            backgroundColor="#1db954"
            labelStyle={{color: '#ecebe8'}}
            icon={<DesktopIcon />}
          />
        </div>
      )
    }
    else if(this.state.selected === 'RayTracer'){
      openedImg = (<img className="projectImg openImg" src = {RayTracer} alt="project img appears here/may be loading"/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">Ray-Tracer</h4>
          <h5>Ray Tracer: Animation Technique to render pixelated Computer Graphics</h5>
          <h5>Using C++ and Unreal Engine</h5>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://github.com/ericblancas23/Ray_tracer"
            target="_blank"
            label="View Codes"
            icon={<CodeIcon />}
          />
        </div>
      )
    }
    else if(this.state.selected === 'hairschool'){
      openedImg = (<img className="projectImg openImg" src = {hairschool} alt="project img appears here/may be loading"/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">hairschool</h4>
          <h5>React web application.
          Large Scale Group Project to help users schedule appointments.</h5>
          <h5>
            Conducted with the Mern Stack.
          </h5>
          <div className="btnFlex">
            <div className="btnItem">
              <RaisedButton
                onClick ={(e)=>{e.stopPropagation();}}
                href="https://github.com/ericblancas23/CS8-hairschool"
                target="_blank"
                label="Client Codes"
                fullWidth={true}
                icon={<CodeIcon />}
              />
            </div>
            <div className="btnItem">
              <RaisedButton
                onClick ={(e)=>{e.stopPropagation();}}
                href="https://www.lambdahairschool.com/"
                target="_blank"
                label="Try It"
                fullWidth={true}
                backgroundColor="#1db954"
                labelStyle={{color: '#ecebe8'}}
                icon={<DesktopIcon />}
              />
            </div>
          </div>
        </div>
      );
    }
    else if(this.state.selected === 'Cobrakai'){
      openedImg = (<img className="projectImg openImg" src = {Cobrakai} alt="project img appears here/may be loading"/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">Cobra-Kai</h4>
          <h5>A webapplication based off of the hit Youtube TV series Cobra Kai!</h5>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://github.com/ericblancas23/Cobra-kai"
            target="_blank"
            label="View Codes"
            icon={<CodeIcon />}
          />
          <span className="btnPadding"></span>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://cobra-kai.live/"
            target="_blank"
            label="Try It"
            backgroundColor="#1db954"
            labelStyle={{color: '#ecebe8'}}
            icon={<DesktopIcon />}
          />
        </div>
      );
    }
    else if(this.state.selected === 'copwatch'){
      openedImg = (<img className="projectImg openImg" src = {copWatch} alt="project img appears here/may be loading"/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">CopWatch</h4>
          <h5>ShellHacks Hakathon Submit At Florida International University</h5>
          <h5>React Native Mobile App and Angular Web App</h5>
        </div>
      );
    }
    else if(this.state.selected === 'ecommerce'){
      openedImg = (<img className="projectImg openImg" src = {ecommerce} alt="project img appears here/may be loading"/>);
      snackBarMsg = (
        <div>
          <h4 className="highlight">Ecommerce-Template</h4>
          <h5>Template that was developed with Angular and Ruby On Rails.<br/>
           This template is used for my freelancing business for consumers who would like to conduct their own e-commerce business.
          </h5>
          <h5>Angular, Ruby On Rails</h5>
          <RaisedButton
            onClick ={(e)=>{e.stopPropagation();}}
            href="https://github.com/ericblancas23/ecommerce-app"
            target="_blank"
            label="View Codes"
            icon={<CodeIcon />}
          />
          <span className="btnPadding"></span>
        </div>
      );
    }
    else{
      openedImg = undefined;
      snackBarMsg = undefined;
    }

    const SelectedProject = () =>{
      return(
        <div className="projectOpen" onClick={(e)=>{this.projectClose();}}>
          {openedImg}
        </div>
      );
    }

    return(
      <div className = "works" style={{zIndex: (this.state.clicked) ? 401 : 4}}>
        <VelocityTransitionGroup enter={{animation: "transition.flipYIn", duration: 700, delay:0}} runOnMount={true}>
          <h2>
            Take a look at My <span className="highlight">Projects.</span>
          </h2>
        </VelocityTransitionGroup>
        <div className="flex projectList">
          <TiltOrDiv browser={this.state.browser}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:200}} runOnMount={true}>
              <img className="projectImg" style={{height: 400}}src = {candycrush} alt="" onClick={(e)=>{this.projectSelect('candycrush');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
          <TiltOrDiv browser={this.state.browser}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:400}} runOnMount={true}>
              <img className="projectImg" style={{height: 400}} src = {RayTracer} alt="" onClick={(e)=>{this.projectSelect('RayTracer');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
          <TiltOrDiv browser={this.state.browser}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:600}} runOnMount={true}>
              <img className="projectImg" style={{height: 400}} src = {hairschool} alt="" onClick={(e)=>{this.projectSelect('hairschool');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
          <TiltOrDiv browser={this.state.browser}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:800}} runOnMount={true}>
              <img className="projectImg" style={{height: 400}} src = {Cobrakai} alt="" onClick={(e)=>{this.projectSelect('Cobrakai');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
          <TiltOrDiv browser={this.state.browser}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay:1000}} runOnMount={true}>
              <img className="projectImg" style={{height: 400}} src = {copWatch} alt="" onClick={(e)=>{this.projectSelect('copwatch');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
          <TiltOrDiv browser={this.state.browser}>
            <VelocityTransitionGroup enter={{animation: 'transition.perspectiveUpIn', delay: 1200}} runOnMount={true}>
              <img className="projectImg" style={{height: 400}} src = {ecommerce} alt="" onClick={(e)=>{this.projectSelect('ecommerce');}}/>
            </VelocityTransitionGroup>
          </TiltOrDiv>
        </div>
        <VelocityTransitionGroup enter={{animation: 'transition.bounceDownIn', duration: 500}} leave={{animation: 'transition.bounceUpOut', duration: 500}}>
          {this.state.clicked ? <div className="overlay" style={{position: 'fixed',zIndex: 11}} onClick={(e)=>{this.projectClose();}}></div> : undefined}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: 'transition.expandIn', duration: 400, delay: 200}} leave={{animation: 'transition.expandOut',duration: 400, delay: 200}}>
          {this.state.clicked ? <SelectedProject/> : undefined}
        </VelocityTransitionGroup>
        <VelocityTransitionGroup enter={{animation: 'transition.slideUpBigIn', duration: 500, delay: 400}} leave={{animation: 'transition.slideDownBigOut', duration: 500}}>
          {this.state.clicked ? <div className="snackBar" onClick={(e)=>{this.projectClose();}}>{snackBarMsg}</div> : undefined}
        </VelocityTransitionGroup>
      </div>
    );
  }
}
export default Works;
