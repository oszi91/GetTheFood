import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import './../sass/main.scss';

import RestaurantsData from './API/RestaurantsData.json';

import filteredRestaurantsBasedOnAddress from './utils/filteredRestaurantsBasedOnAddress';

import AllRestaurantsPage from './AllRestaurantsPage/AllRestaurantsPage';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import OneRestaurantPage from './OneRestaurantPage/OneRestaurantPage';
import StartPage from './StartPage/StartPage';

class App extends Component {
	state = {
		data: RestaurantsData,
		address: '',
		showSearchBar: false,
		blockAddress: false,
	};

	handleAddress = address => {
		this.setState({
			address,
		});
	};

	render() {
		const { data, address, showSearchBar, blockAddress } = this.state;
		if (!data) return null;

		const restaurantsBasedOnUserAddress = filteredRestaurantsBasedOnAddress(
			data.restaurants,
			address
		);

		const filteredData = {
			...data,
			restaurants: restaurantsBasedOnUserAddress,
		};

		return (
			<HashRouter>
				<Header
					address={address}
					showSearchBar={showSearchBar}
					data={data}
					handleAddress={this.handleAddress}
					blockAddress={blockAddress}
				/>
				<Switch>
					<Route
						exact
						path={'/'}
						component={() => (
							<StartPage data={data} handleAddress={this.handleAddress} />
						)}
					/>
					<Route
						exact
						path={'/restaurants'}
						component={() =>
							Object.keys(address).length ? (
								<AllRestaurantsPage data={filteredData} address={address} />
							) : (
								<Redirect to="/" />
							)
						}
					/>
					<Route
						exact
						path={'/restaurants/:id'}
						render={props =>
							Object.keys(address).length ? (
								<OneRestaurantPage data={data} address={address} {...props} />
							) : (
								<Redirect to="/" />
							)
						}
					/>
				</Switch>
				<Footer />
			</HashRouter>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
