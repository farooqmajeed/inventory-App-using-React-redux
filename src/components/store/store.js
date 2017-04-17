import React, { Component } from 'react';
import * as Mui from 'material-ui';
import './store.css'

class Store extends Component {
    constructor(Props) {
        super(Props);
        console.log("store props", this.props);
        this.state = { email: '', password: '' };
        this.handleSubmit = this.handleStoreSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleStoreSubmit(evt) {
        evt.preventDefault();
        var storeName = this.refs.store.getValue();
        var location = this.refs.location.getValue();
        var userObj = {
            storeName: storeName,
            location: location
        };
        this.props.addStore(userObj);
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
            <div className="store-loginContainer">
                <Mui.Paper className="store-paper">
                    <Mui.AppBar title="Create Store" showMenuIconButton={false} />
                    <form onSubmit={this.handleSubmit} >
                        <Mui.TextField
                            hintText="Store Name"
                            floatingLabelText="Store Name"
                            className="full-width-container"
                            ref="store"
                            name="store"
                            required={true}
                            type="text"
                            onChange={this.handleInputChange}
                        /><br />
                        <Mui.TextField
                            hintText="Location"
                            floatingLabelText="Location"
                            className="full-width-container"
                            ref="location"
                            name="location"
                            required={true}
                            type="text"
                            onChange={this.handleInputChange} />
                        <br />
                        <Mui.RaisedButton type="submit" label="Create Store" primary={true} className="store-loginBtn"/>

                    </form>
                    <div className="clear" />
                </Mui.Paper>
            </div>
        )
    }


}
export default Store;