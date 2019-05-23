import React, { Component } from 'react';
import Snackbar from 'material-ui/Snackbar';

class SnackBarCustom extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }
  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        open: true
      });
    },600);
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render(){
    return(
      <Snackbar
      open={this.state.open}
      message="Navigate between pages with: Buttons, Nav menu, Arrow keys"
      autoHideDuration={4500}
      onRequestClose={this.handleRequestClose}
      contentStyle={{fontSize:'1em', color: '#ecebe8'}}
      bodyStyle={{backgroundColor:'rgba(29,185,84,.7)'}}
      />
    );
  }
}

export default SnackBarCustom;
