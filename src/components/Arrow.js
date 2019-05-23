import React, { Component } from 'react';
import './Arrow.css';
import $ from 'jquery';


class Arrow extends Component {
  constructor(props){
    super(props);
    this.nextprevPage = this.nextprevPage.bind(this);
  }

  nextprevPage = (str) =>{
    if (typeof this.props.nextprevPage === 'function') {
        this.props.nextprevPage(str);
    }
  };

  leftClick = () => {
    $('.c-arrow--left').toggleClass('is-triggered');
    setTimeout(()=>{
      $('.is-triggered').toggleClass('is-triggered');
    },550);
  }

  rightClick = () => {
    $('.c-arrow--right').addClass('is-triggered');
    setTimeout(()=>{
      $('.is-triggered').removeClass('is-triggered');
    },550);
  }

  leftKey = (e) =>{
    console.log(e.key);
  }


  render(){
    if(this.props.direction === 'left')
      return(
        <a onClick={()=>{this.nextprevPage('prev'); this.rightClick()}} className="c-arrow c-arrow--left u-absolute">
        <span className="c-arrow__mode c-arrow__mode--default u-absolute u-block u-overflow-h">
        <span className="c-arrow__circle u-absolute u-block u-pos-tl u-fit u-overflow-h">
        </span>
        <span className="c-arrow__circle-trigger u-absolute u-block u-pos-tl u-fit">
        </span>
        </span>
        <span className="c-arrow__inner u-block u-absolute u-pos-tl u-fit">
        <span className="c-arrow__icon u-absolute u-block u-overflow-h">
        <span className="c-arrow__icon-inner u-absolute u-block u-pos-tl u-fit">
        <span className="c-arrow__bar u-absolute u-inline-block">
        </span>
        <span className="arrow-pointer">
        </span>
        </span>
        </span>
        </span>
        </a>
      );
    else if(this.props.direction === 'right')
      return(
        <a onClick={()=>{this.nextprevPage('next'); this.rightClick()}} className="c-arrow c-arrow--right u-absolute">
        <span className="c-arrow__mode c-arrow__mode--default u-absolute u-block u-overflow-h">
        <span className="c-arrow__circle u-absolute u-block u-pos-tl u-fit u-overflow-h">
        </span>
        <span className="c-arrow__circle-trigger u-absolute u-block u-pos-tl u-fit">
        </span>
        </span>
        <span className="c-arrow__inner u-block u-absolute u-pos-tl u-fit">
        <span className="c-arrow__icon u-absolute u-block u-overflow-h">
        <span className="c-arrow__icon-inner u-absolute u-block u-pos-tl u-fit">
        <span className="c-arrow__bar u-absolute u-inline-block">
        </span>
        <span className="arrow-pointer">
        </span>
        </span>
        </span>
        </span>
        </a>
      );
    else return undefined;
  }
}

export default Arrow;
