import React, { Component } from 'react';
import * as Mui from 'material-ui';
import './sale.css'
class Sale extends Component {

    constructor(props) {
        super(props);
        this.state = { PurchasesDate: "", store: "Sumsung", product: "Sumansung S4", month: "" };

        this.handleSubmit = this.handleSaleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleStorename = (event, index, value) => { this.setState({ store: value }); console.log(value) }
    handleProductname = (event, index, value) => { this.setState({ product: value, key: value }) }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        // this.props.loadStoreState();
        // console.log("Store", this.props.productRequest())
        this.props.productRequest();
        this.props.storeRequest();

    }

    handleSaleSubmit(evt) {
        const month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
        const getmonth = this.state.PurchasesDate.getMonth();
        const months = month[getmonth];
        const hours = this.state.PurchasesDate.getHours() > 12 ? this.state.PurchasesDate.getHours() - 12 : this.state.PurchasesDate.getHours();
        const timeconvention = this.state.PurchasesDate.getHours() > 12 ? "PM" : "AM";

        const combine = this.state.product;
        const product = combine.split("||");
        const productName = product[0];
        const key = product[1];
        // console.log("Product Data", product)

        evt.preventDefault();
        var ObjectSave = {
            store: this.state.store,
            product: productName,
            productId: key,
            PurchasesDate: months + " /" + this.state.PurchasesDate.getDate() + "/" + this.state.PurchasesDate.getFullYear() + " " + " " + " " + hours + ":" + this.state.PurchasesDate.getMinutes() + ":" + this.state.PurchasesDate.getSeconds() + " " + timeconvention,
            Quantity: this.refs.quantity.getValue(),
            Unit: this.refs.unitprice.getValue(),
            total: this.refs.quantity.getValue() * this.refs.unitprice.getValue(),
        }
        this.props.addSale(ObjectSave);
        console.log(ObjectSave)
    }

    handleDateChange = (event, date) => {
        this.setState({
            PurchasesDate: date,
            month: date,
        });
        console.log(date);
    };

    render() {


        const store = this.props && this.props.app && this.props.app.storeData ? this.props.app.storeData : [];
        console.log("Store", store)

        const product = this.props && this.props.app && this.props.app.productData ? this.props.app.productData : [];
        return (
            <div className="sale-Container">
                <Mui.Paper className="sale-paper">

                    <Mui.AppBar title="Add Sale" showMenuIconButton={false} />
                    <form onSubmit={this.handleSubmit} onChange={this.clearErrors}>
                        <Mui.SelectField
                            required
                            floatingLabelText="Store"
                            className="full-width-container"
                            value={this.state.store}
                            onChange={this.handleStorename}
                            ref="store">
                            {
                                store.map((v, i) => {
                                    return (
                                        <Mui.MenuItem value={v.storeName} key={i} primaryText={v.storeName}></Mui.MenuItem>
                                    )
                                })
                            }
                        </Mui.SelectField><br />


                        <Mui.SelectField
                            required
                            floatingLabelText="Product"
                            className="full-width-container"
                            value={this.state.product}
                            onChange={this.handleProductname}
                            ref="product">
                            {
                                product.map((v, i) => {
                                    return (
                                        <Mui.MenuItem value={v.productName + "||" + v.key} key={i} primaryText={v.productName}></Mui.MenuItem>
                                    )
                                })
                            }
                        </Mui.SelectField><br />

                        <Mui.DatePicker
                            ref="PurchaseDate"
                            hintText="Sale Date"
                            className="full-width-container"
                            floatingLabelText="Sale Date"

                            onChange={this.handleDateChange}
                        >
                        </Mui.DatePicker>
                        <Mui.TextField
                            hintText="Quantity"
                            floatingLabelText="Quantity"
                            className="full-width-container"
                            ref="quantity"
                            name="quantity"
                            required={true}
                            type="text"
                            onChange={this.handleInputChange}>
                        </Mui.TextField><br />
                        <br />
                        <Mui.TextField
                            hintText="Unit Price"
                            floatingLabelText="Unit Price"
                            className="full-width-container"
                            ref="unitprice"
                            name="unitprice"
                            required={true}
                            type="text"
                            onChange={this.handleInputChange}>
                        </Mui.TextField><br />

                        <Mui.RaisedButton type="submit" label="Add Sale" primary={true} className="sale-loginBtn" />

                    </form>

                </Mui.Paper>
            </div>
        )
    }

}
export default Sale;