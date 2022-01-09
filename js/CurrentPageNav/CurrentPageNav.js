import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class CurrentPageNav extends Component {

	static defaultProps = {
        lastItem: false
    }

	render() {
		const { page, pageName, lastItem } = this.props;

		return (
			<>
			<NavLink
				className="currentPage__item"
				activeClassName="currentPage__item--active"
				exact
				to={page}
			>
				{pageName}
			</NavLink>
			{lastItem ? null : <i className="fas fa-chevron-right"></i>}
			</>
		);
	}
}

export default CurrentPageNav;
