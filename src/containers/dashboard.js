import React, { Component } from 'react';
import LogoutRequest from '../store/actions/Logout';
import { connect } from 'react-redux';
import { storeRequest, productRequest, stockRequest, addSaleRequest, loadProductRequest, loadStoreRequest, addPurchaseRequest, viewSale, viewPurchase } from '../store/actions/store';
import * as Mui from 'material-ui';
import './dashboard.css';
import {
    browserHistory,

} from 'react-router';

class rootContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, isAdmin: false };
    }

    handleClose = () => this.setState({ open: false });
    _handleClick = () => {
        this.setState({ open: !this.state.open })
    };


    gotoStore = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/store');
    };

    gotoProduct = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/Product');
    };

    gotoSale = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/sale');
    };
    gotoPurchase = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/purchase');
    };

    gotoStock = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/stock');
    };
    gotoViewSale = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/ViewSale');
    };
    gotoViewPurchase = () => {
        this.setState({ open: !this.state.open })
        browserHistory.push('/viewPurchase');
    };



    logoutRequest = () => {
        this.setState({ open: !this.state.open });
        this.props.logoutRequest();
    }

    render() {
        return (
            <div>
                <Mui.AppBar
                    title="Inventory Management System"
                    onLeftIconButtonTouchTap={this._handleClick}
                />
                <Mui.Drawer open={this.state.open}
                    docked={false}
                    onRequestChange={(open) => this.setState({ open })}>
                    <Mui.MenuItem disabled className="disbaledImage">
                        <img src="http://comps.canstockphoto.com/can-stock-photo_csp26838380.jpg" className="logoImage" alt="presentation" /><br />
                    </Mui.MenuItem>
                    <br />


                    <Mui.MenuItem onTouchTap={this.gotoStore}>Create Store</Mui.MenuItem>
                    <Mui.MenuItem onTouchTap={this.gotoProduct}>Create Product</Mui.MenuItem>
                    <Mui.MenuItem onTouchTap={this.gotoPurchase}>Add Purchase</Mui.MenuItem>
                    <Mui.MenuItem onTouchTap={this.gotoSale}>Add Sale</Mui.MenuItem>
                    <Mui.MenuItem onTouchTap={this.gotoViewSale}>View Sales </Mui.MenuItem>
                    <Mui.MenuItem onTouchTap={this.gotoViewPurchase}>View Purchase</Mui.MenuItem>
                    <Mui.MenuItem onTouchTap={this.gotoStock}>View Stock</Mui.MenuItem>
                    <Mui.MenuItem onTouchTap={this.logoutRequest}>Logout</Mui.MenuItem>
                </Mui.Drawer>
                {React.cloneElement(this.props.children, { ...this.props })}
            </div>
        );
    }
}


function mapStateToProps(state) {

    return {
        auth: state.auth,
        app: state.app
    };
}

function mapDispatchToProps(dispatch) {

    return {

        logoutRequest: () => dispatch(LogoutRequest()),
        addStore: (obj) => dispatch(storeRequest(obj)),
        addProduct: (userObj) => dispatch(productRequest(userObj)),
        stockRequest: (StockObject) => dispatch(stockRequest(StockObject)),
        addSale: (SaleData) => dispatch(addSaleRequest(SaleData)),
        addPurchase: (PurchaseData) => dispatch(addPurchaseRequest(PurchaseData)),
        productRequest: (ProductData) => dispatch(loadProductRequest(ProductData)),
        storeRequest: (storedata) => dispatch(loadStoreRequest(storedata)),
        viewSales: (vSale) => dispatch(viewSale(vSale)),
        viewPurchase: (vPurchase) => dispatch(viewPurchase(vPurchase))
    };
}

const rootMainContainer = connect(mapStateToProps, mapDispatchToProps)(rootContainer);

export default rootMainContainer;