import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-eric.css';
import Login from './Login';
import Register from './Register';
import { AppBar } from 'material-ui';
// import 'AppLayout.js';

// import styles from 'react-awesome-button/src/styles/themes/theme-red';

class AuthPage extends Component {
    constructor(props){
        super(props);
        this.state={
          username:'',
          password:'',
          loginscreen:[],
          loginmessage:'',
          buttonLabel:'Register',
          isLogin:true
        }
    }
    componentWillMount(){
        var loginscreen=[];
        loginscreen.push(<Login parentContext={this} appContext={this.props.parentContext}/>);
        var loginmessage = "Not registered yet, Register Now";
        this.setState({
                      loginscreen:loginscreen,
                      loginmessage:loginmessage
                        })
    }
    handleClick(event){
        // console.log("event",event);
        var loginmessage;
        if(this.state.isLogin){
          var loginscreen=[];
          loginscreen.push(<Register parentContext={this}/>);
          loginmessage = "Already registered.Go to Login";
          this.setState({
                         loginscreen:loginscreen,
                         loginmessage:loginmessage,
                         buttonLabel:"Login",
                         isLogin:false
                       })
        }
        else{
          var loginscreen=[];
          loginscreen.push(<Login parentContext={this}/>);
          loginmessage = "Not Registered yet.Go to registration";
          this.setState({
                         loginscreen:loginscreen,
                         loginmessage:loginmessage,
                         buttonLabel:"Register",
                         isLogin:true
                       })
        }
    }
    render () {
        return (
            <>
            <MuiThemeProvider>
                <AppBar
                title="Welcome"
                
                />
                <div className="loginscreen">
                <img src='https://hotandsourblog.com/wp-content/uploads/2017/11/babyregistrynewbornphotographyrichmondhillga.png'></img> <br/>
                    {this.state.loginscreen}
                    <div>
                        {this.state.loginmessage}
                      
                            <div>
                                <RaisedButton label={this.state.buttonLabel} primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                            </div>
                        
                    </div>
                    
                
                <AwesomeButton
                    type="primary"
                    size="large"
                    onClick= {(event) => this.handleClick(event)}
                >
                    Sign Up
                </AwesomeButton>
                <AwesomeButton
                    type="primary"
                    size="large"
                >
                    Log In
                </AwesomeButton>
                </div>
                </MuiThemeProvider>

            </>
        )
    }
}
const style = {
    margin: 15,
  };

export default AuthPage;