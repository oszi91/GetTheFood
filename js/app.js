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
import AllRestaurantsPage from './AllRestaurantsPage/AllRestaurantsPage';
import OneRestaurantPage from './OneRestaurantPage/OneRestaurantPage';
import RestaurantsData from './API/RestaurantsData.json';

class App extends Component {

    state = {
        data: RestaurantsData,
        address: '',
        showSearchBar: false
    }

    componentDidMount() {
        this.setState({
            data: this.state.data
        })
    }

    handleAddress = address => {
        this.setState({
            address
        })
    }

    render() {
        const { data, address } = this.state;
        if (!data) return null;

        let restaurantsIndexToDelete = [];
        data.restaurants.forEach((res, i) => {

            if (address) {
                const compare = res.deliveryAddress.filter(o1 => [address].some(o2 => o1.street === o2.street));
                if (!compare.length) {
                    restaurantsIndexToDelete.push(i)
                }
            }
        });

        const newRestaurantsList = data.restaurants.filter((v, i) => {
            return restaurantsIndexToDelete.indexOf(i) === -1;
        })

        const newData = { ...data, restaurants: newRestaurantsList }
     
        return (
            <BrowserRouter>
                <Header
                    address={this.state.address}
                    showSearchBar={this.state.showSearchBar}
                    data={data}
                    handleAddress={this.handleAddress}
                />
                <Switch>
                    <Route exact path={"/"} component={() => <StartPage data={data} handleAddress={this.handleAddress} />} />
                    <Route exact path={"/restaurants"} component={() => <AllRestaurantsPage data={newData} />} />
                    <Route exact path={"/restaurants/:id"} render={(props) => <OneRestaurantPage data={data} {...props} />} />
                </Switch>
                <Footer />
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));












