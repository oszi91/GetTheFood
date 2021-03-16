import React, { Component } from 'react';

class StartPage extends Component {

    state = {  }

    render() { 
        return ( 
            <div className="startPage">
                <div className="searchPlace">
                    <h1 className="searchPlace__text">Order your favourite food!</h1>
                    <h2 className="searchPlace__text searchPlace__text--smaller">Enter the address and start</h2>
                    <form className="searchPlace__form">
                    <input className="searchPlace__form__input" type="text"/>
                    <button className="searchPlace__form__btn">Search</button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default StartPage;