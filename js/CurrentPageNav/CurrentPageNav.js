import React, { Component } from 'react';
import {
    NavLink
} from 'react-router-dom';

class CurrentPageNav extends Component {
  
    render() { 
        const {page, pageName} = this.props;

        return ( 
            <NavLink
            className="currentPage__item"
            activeClassName="currentPage__item--active"
            exact to={page}>
            {pageName}
            </NavLink>
         );
    }
}
 
export default CurrentPageNav;