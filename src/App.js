import React, { Component } from 'react';
import 'velocity-animate';
import 'velocity-animate/velocity.ui';

import {VelocityTransitionGroup} from 'velocity-react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Stars from './components/Stars';
import Mountains from './components/Mountains';
import Navigation from './components/Navigation';
import Arrow from './components/Arrow';
import Home from './components/Home';
import Intro from './components/Intro';
import Works from './components/Works';
import Contact from './components/Contact';
import SnackBarCustom from './components/SnackBarCustom';
import './App.css';
import mistImg from './assets/mist.jpg';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      pageIndex:0,
      open: true,
      mobile: this.detectmob()
    };
    this.pageChange = this.pageChange.bind(this);
    this.nextprevPage = this.nextprevPage.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyUp);
  }

  detectmob() {
     if(window.innerWidth <= 800 || window.innerHeight <= 600) {
       return true;
     } else {
       return false;
     }
  }

  handleKeyUp(e){
    if(e.key === 'ArrowUp' || e.key ==='ArrowRight'){
      if(this.rightArrow) {
        this.rightArrow.rightClick();
        this.rightArrow.nextprevPage('next');
      }
    }
    else if(e.key === 'ArrowDown' || e.key === 'ArrowLeft'){
      if(this.leftArrow) {
        this.leftArrow.leftClick();
        this.leftArrow.nextprevPage('prev');
      }
    }
  }

  pageChange(index) {
    this.setState(prevState => ({
      pageIndex: index
    }));
  }

  nextprevPage(str) {
    if(str === "next" && this.state.pageIndex < 3){
      this.setState(prevState => ({
        pageIndex: prevState.pageIndex + 1
      }));
    }
    else if(str === "prev" && this.state.pageIndex > 0){
      this.setState(prevState => ({
        pageIndex: prevState.pageIndex - 1
      }));
    }
  }

  render() {

    const mist = (
      <img id='mist' src={mistImg} alt=''/>
    )

    const ContentPicker = (props) => {
      if(props.pageIndex === 0){
        return (<Home/>);
      }
      else if (props.pageIndex === 1) {
        return(<Intro/>);
      }
      else if (props.pageIndex === 2) {
        return(<Works/>);
      }
      else if (props.pageIndex === 3) {
        return(<Contact/>);
      }
      else{
        return (<p>Sorry, Still Working on it.<br/>pageIndex: {props.pageIndex}</p>);
      }
    }

    return (
      <MuiThemeProvider>
        <div
        onKeyPress={(e)=>{console.log(e.key);}}
        onMouseMove={(e)=>{this.refs.mountains.animation(e);
                           this.refs.stars.animation(e);}}>
          <Stars ref="stars"/>
          <Stars/>
          <Mountains ref="mountains"/>
          {mist}
          <Navigation pageChange={this.pageChange}/>
          <VelocityTransitionGroup enter={{animation: 'transition.expandIn', duration: 600}} leave={{animation: 'transition.slideLeftOut', duration: 800}}>
            {(this.state.pageIndex>0) ? <Arrow ref={(leftArrow)=>{this.leftArrow = leftArrow}} nextprevPage={this.nextprevPage} pageIndex={this.state.pageIndex} direction='left'/> : undefined}
          </VelocityTransitionGroup>
          <VelocityTransitionGroup>
            {(this.state.pageIndex<3) ? <Arrow ref={(rightArrow)=>{this.rightArrow = rightArrow}} nextprevPage={this.nextprevPage} pageIndex={this.state.pageIndex} direction='right'/> : undefined}
          </VelocityTransitionGroup>

          <div id="contents">
              <ContentPicker pageIndex={this.state.pageIndex}/>
          </div>
          {this.state.mobile ? undefined : <SnackBarCustom/>}
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;
