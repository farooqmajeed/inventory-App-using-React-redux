import React, { Component } from 'react';
import * as Mui from 'material-ui';
import './product.css'
import styles from './productStyle';

class Product extends Component {
    constructor(Props) {
        super(Props);

        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleProductSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleProductSubmit(evt) {
        evt.preventDefault();
        var productName = this.refs.productName.getValue();
        var manufacturer = this.refs.manufacturer.getValue();
        var description = this.refs.description.getValue();
        // var quantity = this.refs.quantity.getValue();

        var userObj = {
            productName: productName,
            manufacturer: manufacturer,
            description: description,
            quantity: 0

        };
        this.props.addProduct(userObj);
        console.log("this.props", this.props);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {


        return (
            <div className="product-Container">
                <Mui.Paper className="product-paper">


                    <Mui.AppBar title="Create Product" showMenuIconButton={false} />
                    <form onSubmit={this.handleSubmit} >
                        <Mui.TextField
                            hintText="Product Name"
                            floatingLabelText="Product Name"
                            className="full-width-container"
                            ref="productName"
                            name="productName"
                            required={true}
                            type="text"
                            onChange={this.handleInputChange}
                        /><br />
                        <Mui.TextField
                            hintText="Product Manufacturer"
                            floatingLabelText="Product Manufacturer"
                            className="full-width-container"
                            ref="manufacturer"
                            name="manufacturer"
                            required={true}
                            type="text"
                            onChange={this.handleInputChange} />
                        <br />

                        <Mui.TextField
                            hintText="Product Description"
                            floatingLabelText="Product Description"
                            className="full-width-container"
                            ref="description"
                            name="description"
                            required={true}
                            type="text"
                            onChange={this.handleInputChange} />
                        <br />

                        {/*<Mui.TextField
                            hintText="Product Quantity"
                            floatingLabelText="Product Quantity"
                            className="full-width-container"
                            ref="quantity"
                            name="quantity"
                            required={true}
                            type="text"
                            onChange={this.handleInputChange} />*/}
                        <br />

                        <Mui.RaisedButton type="submit" label="Create Product" primary={true} className="product-loginBtn" />

                    </form>
                    <div style={styles.clear} />
                </Mui.Paper>
            </div>
        )
    }


}
export default Product;