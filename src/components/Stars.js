import React, { Component } from 'react';
import {VelocityComponent, velocityHelpers} from 'velocity-react';

class Stars extends Component {

  constructor(props){
    super(props);
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.rint = 50;

    if(window.innerWidth/window.innerHeight < 1.2)
      this.portraitish = true;
    else
      this.portraitish = false;

    let ani = velocityHelpers.registerEffect({
      defaultDuration: 0,
      calls: [
        [{
            translateX: '-10vw',
            translateY:'-10vh'
        }, 1, {
            delay: 0,
            easing: 'cubic-bezier(.75,0,.25,1)'
        }]
      ]
    });

    this.state = {
      width: width*1.1,
      height: height*1.1,
      style: {transform: `translate(-10vw,-10vh)`},
      animation: ani
    };

    this.draw = this.draw.bind(this);
  }

  componentDidMount(){
    this.ctx = this.refs.canvas.getContext('2d');
    const numOfStars = 70;
    this.pxs = new Array(numOfStars);
    for(var i = 0; i < numOfStars; i++) {
  		this.pxs[i] = new this.Circle
              (this.ctx, this.state.width, this.state.height, this.rint);
  		this.pxs[i].reset();
  	}
  	setInterval(this.draw,this.rint);
    this.draw();
  }

  draw() {
  	this.ctx.clearRect(0,0,this.state.width,this.state.height);
  	for(var i = 0; i < this.pxs.length; i++) {
  		this.pxs[i].fade();
  		this.pxs[i].move();
  		this.pxs[i].draw();
  	}
  }

  animation = (e) => {
    if(this.portraitish) return;
    let x = -10 - (e.pageX /this.state.width - 0.5)*3;
    let y = -10 - (e.pageY /this.state.height - 0.5)*3;

    let ani = velocityHelpers.registerEffect({
      defaultDuration: 500,
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
      this.refs.starsAni.runAnimation()
    });
  }

  Circle(ctx, width, height, rint) {
  	this.s = {ttl:8000, xmax:5, ymax:2, rmax:10, rt:1, xdef:960, ydef:540, xdrift:4, ydrift: 4, random:true, blink:true};
    this.ctx = ctx;
    this.WIDTH = width;
    this.HEIGHT = height;
    this.rint = rint;
    let g;

  	this.reset = function() {
  		this.x = (this.s.random ? this.WIDTH*Math.random() : this.s.xdef);
  		this.y = (this.s.random ? this.HEIGHT*Math.random() : this.s.ydef);
  		this.r = ((this.s.rmax-1)*Math.random()) + 1;
  		this.dx = (Math.random()*this.s.xmax) * (Math.random() < .5 ? -1 : 1);
  		this.dy = (Math.random()*this.s.ymax) * (Math.random() < .5 ? -1 : 1);
  		this.hl = (this.s.ttl/this.rint)*(this.r/this.s.rmax);
  		this.rt = Math.random()*this.hl;
  		this.s.rt = Math.random()+1;
  		this.stop = Math.random()*.2+.4;
  		this.s.xdrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
  		this.s.ydrift *= Math.random() * (Math.random() < .5 ? -1 : 1);
  	}

  	this.fade = function() {
  		this.rt += this.s.rt;
  	}

  	this.draw = function() {
  		if(this.s.blink && (this.rt <= 0 || this.rt >= this.hl)) this.s.rt = this.s.rt*-1;
  		else if(this.rt >= this.hl) this.reset();
  		var newo = 1-(this.rt/this.hl);
  		this.ctx.beginPath();
  		this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,true);
  		this.ctx.closePath();
  		var cr = this.r*newo;
  		g = this.ctx.createRadialGradient(this.x,this.y,0,this.x,this.y,(cr <= 0 ? 1 : cr));
  		g.addColorStop(0.0, 'rgba(252,228,236,'+newo+')');
  		g.addColorStop(this.stop, 'rgba(244,144,177,'+(newo*.2)+')');
  		g.addColorStop(1.0, 'rgba(244,144,177,0)');
  		this.ctx.fillStyle = g;
  		this.ctx.fill();
  	}

  	this.move = function() {
  		this.x += (this.rt/this.hl)*this.dx;
  		this.y += (this.rt/this.hl)*this.dy;
  		if(this.x > this.WIDTH || this.x < 0) this.dx *= -1;
  		if(this.y > this.HEIGHT || this.y < 0) this.dy *= -1;
  	}

  	this.getX = function() { return this.x; }
  	this.getY = function() { return this.y; }
  }

  render() {
    return (
      <VelocityComponent ref="starsAni" id='mountainWrap' animation={this.state.animation} interruptBehavior={'stop'} runOnMount={false}>
        <canvas ref="canvas" style={this.state.style} width={this.state.width} height={this.state.height}/>
      </VelocityComponent>
    );
  }
}

export default Stars;
