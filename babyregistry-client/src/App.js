import React, { Component } from 'react';
import AuthPage from './components/AuthPage.js';
import StorePage from './components/StorePage.js';
import AppLayout from './components/AppLayout.js';
import Welcome from './components/Welcome.js';
// import Routes 
import './App.css';
import AppRouter from './Router.js';
// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<AuthPage parentContext={this}/>);
    this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
        {/* <AppRouter /> */}
        {/* <AppLayout /> */}
        {/* <AuthPage /> */}
        {/* <StorePage /> */}
      </div>
    );
  }
}
const style = {
  margin: 15,
};

export default App;
