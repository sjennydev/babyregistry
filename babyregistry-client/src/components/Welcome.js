import React, { Component } from 'react';
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-eric.css';

class Welcome extends Component {
    render () {
        return (
            <>
                <h1>Welcome</h1>
                <img src='https://hotandsourblog.com/wp-content/uploads/2017/11/babyregistrynewbornphotographyrichmondhillga.png'></img> <br/>
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


            </>
        )
    }
}
export default Welcome;