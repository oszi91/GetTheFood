import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';
import './../sass/main.scss';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import StartPage from './StartPage/StartPage';
import allRestaurantsPage from './allRestaurantsPage/allRestaurantsPage';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path={"/"} component={StartPage} />
                    <Route exact path={"/restaurants"} component={allRestaurantsPage} />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));












