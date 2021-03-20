import React, { Component } from 'react';
import OneDish from './OneDish/OneDish';

class DishesList extends Component {

    render() {
        const { foodMenu } = this.props;

        return (
            <>
                {foodMenu.map(res => (
                    <div key={res.sectionName} className="dishesList__container">
                        <h1 className="dishesList__container__category" ref={this.props.refs}>{res.sectionName}</h1>
                        <ul className="dishesList">
                            <OneDish menu={res.menuItems} />
                        </ul>
                    </div>
                ))
                }
            </>
        );
    }
}

export default DishesList;