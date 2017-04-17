import React, { Component } from 'react';
import * as Mui from 'material-ui';
import './stock.css';

class Stock extends Component {

    componentDidMount() {
        console.log("props", this.props)
        this.props.stockRequest();
    }


    render() {
        const style1 = {
            backgroundColor: '#00BCD4',
            textAlign: 'center',

        };
        const stock = this.props && this.props.app && this.props.app.stock ? this.props.app.stock : [];

        console.log("Stock data ", stock)
        return (
             <div className="stock-loginContainer">
               

                <Mui.Paper className="store-paper">


                    <Mui.AppBar title="Stock" showMenuIconButton={false} />
                    {stock && stock.length > 0 ?
                        <Mui.Table
                            adjustForCheckbox={false}
                            displayRowCheckbox={false}>
                            <Mui.TableHeader
                                adjustForCheckbox={false}
                                displaySelectAll={false}>
                                <Mui.TableRow>
                                    <Mui.TableHeaderColumn>Store</Mui.TableHeaderColumn>
                                    <Mui.TableHeaderColumn>Product</Mui.TableHeaderColumn>
                                    <Mui.TableHeaderColumn>Quantity</Mui.TableHeaderColumn>
                                    <Mui.TableHeaderColumn>Unit Price</Mui.TableHeaderColumn>
                                    <Mui.TableHeaderColumn>Stock Volume</Mui.TableHeaderColumn>

                                </Mui.TableRow>
                            </Mui.TableHeader>
                            <Mui.TableBody displayRowCheckbox={false}>


                                {stock.map((data, index) => {
                                    return (
                                        <Mui.TableRow key={index}>
                                            <Mui.TableRowColumn>{data.store}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.productName}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.quantity}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.Unit}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.saleVolume}</Mui.TableRowColumn>
                                        </Mui.TableRow>
                                    )
                                })}
                            </Mui.TableBody>
                        </Mui.Table>
                        : null}




                </Mui.Paper>
            </div>
        )
    }
}

export default Stock;