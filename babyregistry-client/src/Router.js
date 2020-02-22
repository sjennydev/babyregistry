import React, { Component }  from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AuthPage from './components/AuthPage.js';
import StorePage from './components/StorePage.js';

export default class AppRouter extends Component {
    render () {
        return ( 
            <Router>
              <Switch>
                <Route path="/" exact component={AuthPage} />
                <Route path="/ourstores" exact component={StorePage} />
              </Switch>
            </Router>
          );
    }

    
}


// const { HashRouter, NavLink, Route } = ReactRouterDOM;


// export default class AppRouter extends Component {
//   return (
//         <HashRouter>
//             <nav>
//                 <Link to="/">Home</Link>
//             </nav>
//             <Route path="/" exact component={App} />
//             <Route path="/about" component={About} />
//         </BrowserHashRouterRouter>
//     );
// }