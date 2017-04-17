import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, browserHistory, IndexRedirect } from 'react-router'
import { Provider } from 'react-redux';
import store from './store';
import LoginComponent from './containers/login/Login'
import Product from './components/product/product';
import Store from './components/store/store';
import Sale from './components/sale/sale';
import Purchase from './components/purchase/purchase';
import Stock from './components/store/stock';
import ViewSale from './components/sale/viewSale';
import ViewPurchase from './components/purchase/viewPurchase';
// import Dashboard from './components/dashboard/dashboard';
import rootMainContainer from './containers/dashboard';
import AppBar from './components/dashboard/dashboard';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render((
    <MuiThemeProvider>
        <Provider store={store}>

            <Router history={browserHistory}>
                <Route path="/" component={rootMainContainer}>
                    <IndexRedirect to="/login" />

                    <Route path="/product" component={Product} />
                    <Route path="/store" component={Store} />
                    <Route path="/sale" component={Sale} />
                    <Route path="/purchase" component={Purchase}/>
                    <Route path="/stock" component={Stock} />
                    <Route path="/viewPurchase" component={ViewPurchase} />
                    <Route path="/viewSale" component={ViewSale} />
                    <Route />


                    <Route path="/app" component={AppBar} />
                    
                </Route>
                <Route path="/login" component={LoginComponent} />

            </Router>

        </Provider>
    </MuiThemeProvider>
),
    document.getElementById('root')
);
