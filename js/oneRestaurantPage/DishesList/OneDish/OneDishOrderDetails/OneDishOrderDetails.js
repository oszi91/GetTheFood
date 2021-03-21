import React, { Component } from 'react';

class OneDishOrderDetails extends Component {

    state = {
        quantity: 1,
        onlyDishPrice: this.props.dish.price,
        addsPrice: 0,
        addID: undefined,
        orderDetails: []
    }

    handleAdditionals = (e, id) => {
        const addPrice = Number(e.target.dataset.price);
        const addName = e.target.dataset.name;

        if (addName === id) {
            this.setState({
                [addName]: e.target.checked
            })

            if (e.target.checked) {
                this.setState({
                    addsPrice: this.state.addsPrice + addPrice,

                })
            } else {
                this.setState({
                    addsPrice: this.state.addsPrice - addPrice
                })
            }
        }
    }

    handleQuantity = val => {

        if (val === 'plus') {
            this.setState({
                quantity: ++this.state.quantity,
                onlyDishPrice: this.props.dish.price * this.state.quantity
            })
        } else if (val === 'minus') {
            this.setState({
                quantity: this.state.quantity <= 1 ? 1 : --this.state.quantity,
                onlyDishPrice: this.props.dish.price * this.state.quantity
            })
        }
    }

    handleOrder = (btnVal, dish, id) => {
    
        this.setState({
            orderDetails: {
                name: dish,
                id: id,
                price: this.state.onlyDishPrice + this.state.addsPrice,
                quantity: this.state.quantity,
                additionals: this.state.addsPrice ? true : false
            }
        }, () => {
            this.props.handleOrder(this.state.orderDetails, btnVal)
        })
    }

    classAdd = id => {
        return (
            (this.props.orderDetails && this.props.id === id) ? "oneDishViewContainer__showDetails" : ""
        )
     }


    render() {
        const { dish } = this.props;
  
        return (
            <div key={dish.id} className={`oneDishViewContainer ${this.classAdd(dish.id)}`}>
                <div className="oneDishViewBig">
                    <div className="oneDishViewBig__close" onClick={() => this.props.handleOpenDetails(dish.id)}>
                        <i className="fas fa-times"></i>
                    </div>
                    <h1 className="oneDishViewBig__name">{dish.name}</h1>
                    <h2 className="oneDishViewBig__ingriedents">{dish.ingriedents}</h2>
                    <div className="oneDishViewBig__additionals">
                        {dish.additionals.map(add => (
                            <div key={add.name} className="oneDishViewBig__additionals__item">
                                <input
                                    className="oneDishViewBig__additionals__item__check"
                                    data-price={add.price}
                                    data-name={add.name}
                                    type="checkbox"
                                    onClick={e => this.handleAdditionals(e, add.name)}
                                />
                                <p className="oneDishViewBig__additionals__item__name">
                                    {add.name}
                                    <span className="oneDishViewBig__additionals__item__name--bold">{add.price.toFixed(2)} PLN</span>
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className="oneDishViewBig__quantity">
                        <button className="oneDishViewBig__quantity__minus" value="minus" onClick={e => this.handleQuantity(e.target.value)}>-</button>
                        <p className="oneDishViewBig__quantity__number">{this.state.quantity}</p>
                        <button className="oneDishViewBig__quantity__add" value="plus" onClick={e => this.handleQuantity(e.target.value)}>+</button>
                    </div>
                    <button
                        onClick={() => {this.handleOrder('addOrModify', dish.name, dish.id); this.props.handleOpenDetails(dish.id)}}
                        className="oneDishViewBig__addToOrder"
                    >Add to Order <span>({(this.state.onlyDishPrice + this.state.addsPrice).toFixed(2)} PLN)</span></button>
                </div>
            </div>
        );
    }
}

export default OneDishOrderDetails;