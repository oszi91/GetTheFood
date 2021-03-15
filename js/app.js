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
import oneRestaurantPage from './oneRestaurantPage/oneRestaurantPage';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path={"/"} component={StartPage} />
                    <Route exact path={"/restaurants"} component={allRestaurantsPage} />
                    <Route exact path={"/restaurants/:id"} component={oneRestaurantPage} />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));












