import React, { Component } from 'react'; 
// import { Link } from 'react-router';
import {
    AwesomeButton,
    AwesomeButtonProgress,
    AwesomeButtonSocial,
  } from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-eric.css';
// import AuthPage from './AuthPage';

class AppLayout extends Component {
    render () {
        return (
            <>
                <head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                </head>
                <body>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-4 text-uppercase font-weight-bold">Bow-Wow</h1>
                        <p>Little puppies for big hearts <span className="heart">&hearts;</span></p>
                        <nav className="navbar nav-justified">
                        <AwesomeButton
                    type="primary"
                    size="large"
                    >
                    Home
                </AwesomeButton>
                {/* <li><Link to={"/AuthPage"} >Login</Link></li> */}
                            <a href="/" >Home</a>
                            <a href="/registry"className="btn btn-outline-success" type="button">Registry</a>
                            <a href="/StorePage.js" className="btn btn-outline-success" type="button">Our Stores</a>
                            <a href="/petShop" className="btn btn-outline-success" type="button">Pets</a>                       
                        </nav>
                    </div>
                </div>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/react-router-dom/5.1.2/react-router-dom.js" integrity="sha256-yw9KNHjNtzdhGiw5Bz1JBzK5Sjf2W/S0tDluJs2NSts=" crossorigin="anonymous"></script>
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
                </body>
            </>
        )
    }
}

export default AppLayout;