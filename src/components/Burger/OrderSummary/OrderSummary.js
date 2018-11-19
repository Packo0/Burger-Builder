import React, { Component } from 'react';

import Wrapper from '../../../hoc/WrapperElement/WrapperElement';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate () {
        console.log('[OrderSummary]');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (<li key={igKey}>
                    <span style={{ textTransform: 'capitalize' }}>{igKey}: </span> {this.props.ingredients[igKey]}</li
                >);
            })
        return (
            <Wrapper>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: </strong> {this.props.price.toFixed(2)}</p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Wrapper>
        );
    }
}

export default OrderSummary;