import React, { Component } from 'react';

class OneDishOrderDetails extends Component {
    

    render() {

        const {dish} = this.props;
       
        return (
            <div key={dish.id} className={`oneDishViewContainer ${this.props.classAdd(dish.id)}`}>
                <div className="oneDishViewBig">
                    <div className="oneDishViewBig__close" onClick={this.props.handleOpenDetails}>
                        <i className="fas fa-times"></i>
                    </div>
                    <h1 className="oneDishViewBig__name">{dish.name}</h1>
                    <h2 className="oneDishViewBig__ingriedents">{dish.ingriedents}</h2>
                    <div className="oneDishViewBig__additionals">
                        {dish.additionals.map(add => (
                            <div key={add.name} className="oneDishViewBig__additionals__item">
                                <input className="oneDishViewBig__additionals__item__check" type="checkbox" value={add.price} />
                                <p className="oneDishViewBig__additionals__item__name">
                                    {add.name}
                                    <span className="oneDishViewBig__additionals__item__name--bold">{add.price} PLN</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="oneDishViewBig__quantity">
                        <button className="oneDishViewBig__quantity__minus">-</button>
                        <p className="oneDishViewBig__quantity__number">1</p>
                        <button className="oneDishViewBig__quantity__add">+</button>
                    </div>
                    <button 
                    onClick={this.props.handleOpenDetails}
                    className="oneDishViewBig__addToOrder"
                    >Add to Order <span>({dish.price} PLN)</span></button>
                </div>
            </div>
        );
    }
}

export default OneDishOrderDetails;