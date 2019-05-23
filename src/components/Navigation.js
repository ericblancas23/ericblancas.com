import React, { Component } from 'react';
import './Navigation.css';
import $ from "jquery";
// import 'velocity-animate';
// import 'velocity-animate/velocity.ui';
import resume from '../assets/resume.pdf';



class Navigation extends Component {
  constructor(props){
    super(props);
    this.changeIndex = this.changeIndex.bind(this);
  }

  toggleNav = () => {
    $('.nav').toggleClass('is-expanded');
    $('.nav__items').toggleClass('is-fading-up');
  };

  changeIndex = (index) => {
    if (typeof this.props.pageChange === 'function') {
        this.props.pageChange(index);
    }
  };

  render() {
    return(
      <div>
      <div className="nav__button" onClick={this.toggleNav}>
        <svg viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>

        </div>
        <nav className="nav" onClick={this.toggleNav}>
        <ul>
          <li className="nav__items"><a onClick={()=>{this.changeIndex(0)}}>Home</a></li>
          <li className="nav__items"><a onClick={()=>{this.changeIndex(1)}}>About Me</a></li>
          <li className="nav__items"><a onClick={()=>{this.changeIndex(2)}}>Works</a></li>
          <li className="nav__items"><a onClick={()=>{this.changeIndex(3)}}>Contact</a></li>
          <li className="nav__items">
            <a target="_blank" rel="noopener noreferrer" href={resume}>Resume</a>
          </li>
        </ul>
        </nav>
      </div>
    );
  }
}
export default Navigation;
