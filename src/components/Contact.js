import React, { Component } from 'react';
import {VelocityTransitionGroup} from 'velocity-react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
// import Checkbox from 'material-ui/Checkbox';
// import ActionFavorite from 'material-ui/svg-icons/action/favorite';
// import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Send from 'material-ui/svg-icons/content/send';
import GithubIcon from 'react-icons/lib/fa/github';
import LinkedInIcon from 'react-icons/lib/fa/linkedin-square';
import EmailIcon from 'react-icons/lib/md/email';
import resume from '../assets/resume.pdf';


class Contact extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked: false,
      emailLabel: "Email Address",
      checkBoxLabelColor: '#d4d3d0',
      emailInput: '',
      textInput: ''
    }
  }

  updateCheck() {
    this.setState((oldState) => {
      console.log(oldState.emailLabel);
      let newEmailLabel = (oldState.emailLabel === ' ') ? 'Email Address' : ' ';
      let newCheckBoxLabelColor= (oldState.checkBoxLabelColor === '#d4d3d0') ? '#1db954' : '#d4d3d0';
      return {
        checked: !oldState.checked,
        emailLabel: newEmailLabel,
        checkBoxLabelColor: newCheckBoxLabelColor
      };
    });
  }

  emailInputChange = (e) => {
    this.setState({
      emailInput: e.target.value,
    });
  }

  textInputChange = (e) => {
    let body = e.target.value.replace(/\n/g, "%0D%0A")
    this.setState({
      textInput: body,
    });
  }

  render(){
    return(
      <div className="contact">
        <VelocityTransitionGroup enter={{animation: "transition.flipYIn", duration: 700, delay:0}} runOnMount={true}>
          <h2 className="contactHeader">Let's <span role="img" aria-label="Taco Emoji inserted here">🌮</span>'bout <span className='highlight'>New Ideas.</span></h2>
        </VelocityTransitionGroup>
        <div className="contactBody flex">
        <VelocityTransitionGroup enter={{animation: "transition.slideLeftIn", duration: 700, delay:0}} runOnMount={true}>
          <div className="contactLeft">
            <h4>Questions? Project Proposal? <span className="highlight">Email me!</span></h4>
              <div className="emailInput">
                <TextField
                  disabled={this.state.checked}
                  underlineDisabledStyle={{borderColor: '#d4d3d0'}}
                  floatingLabelText={this.state.emailLabel}
                  underlineStyle={{color: '#d4d3d0'}}
                  floatingLabelStyle={{color: '#1db954', fontSize: '1.3em'}}
                  underlineFocusStyle={{borderColor: '#1db954'}}
                  inputStyle={{color: '#ecebe8', fontSize: '1.3em'}}
                  style={{marginRight: 15, marginTop: 0}}
                  className="emailAddressInput"
                  onChange={this.emailInputChange}
                />
                <span className="pasteBack here"></span>
              </div>

              <TextField
                className="emailBodyInput"
                hintText="Hi, Eric. I love your website!"
                floatingLabelText="What do you want to Talk about?"
                multiLine={true}
                rows={2}
                rowsMax={6}
                fullWidth={true}
                hintStyle={{color: '#949391'}}
                underlineStyle={{color: '#d4d3d0'}}
                floatingLabelStyle={{color: '#1db954', fontSize: '1.3em'}}
                underlineFocusStyle={{borderColor: '#1db954'}}
                textareaStyle={{color: '#ecebe8', fontSize: '1.3em'}}
                onChange={this.textInputChange}
              />
              <RaisedButton
                label="Send"
                backgroundColor="#1db954"
                buttonStyle={{width: 300, height: 50, lineHeight:'50px'}}
                className='sendBtn'
                icon={<Send />}
                labelStyle={{fontSize:'1.15em'}}
                overlayStyle={{height: 50}}
                href={`mailto:ericblancas23@gmail.com?subject=ericblancas.com Feedback&body=From ${this.state.emailInput}%0D%0A%0D%0A${this.state.textInput}`}
              />
          </div>
          </VelocityTransitionGroup>
          <VelocityTransitionGroup enter={{animation: "transition.slideRightIn", duration: 700, delay:0}} runOnMount={true}>
          <div className="contactRight">
            <div className="socialIconFlex">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/ericblancas23">
                <GithubIcon className="socialIcon"/>
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/eric-blancas23/">
                <LinkedInIcon className="socialIcon"/>
              </a>
              <a href="mailto:ericblancas23@gmail.com">
                <EmailIcon className="socialIcon"/>
              </a>
            </div>
            <h5 className="resume"><a target="_blank" href={resume}>View My <span  className="highlight">Resume</span></a>
            </h5>
          </div>
          </VelocityTransitionGroup>
        </div>
        <VelocityTransitionGroup enter={{animation: "transition.slideLeftBigIn", duration: 1000, delay:0}} runOnMount={true}>
          <div className="footer">
            <h5>Go for <span role="img" aria-label="heartLove emoji inserts here"></span> Eric | © 2019</h5>
          </div>
        </VelocityTransitionGroup>
      </div>
    );
  }
}

// <Checkbox
//   className="anonymousCheckBox"
//   checkedIcon={<ActionFavorite style={{fill: '#1db954'}}/>}
//   uncheckedIcon={<ActionFavoriteBorder style={{fill: '#d4d3d0'}}/>}
//   iconStyle={{color: '#1db954'}}
//   label="Anonymous Feedback"
//   labelStyle={{color: this.state.checkBoxLabelColor, fontSize: '0.7em'}}
//   onCheck={this.updateCheck.bind(this)}
// />
export default Contact
