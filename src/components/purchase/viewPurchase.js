import React, { Component } from 'react';
import * as Mui from 'material-ui';
// import './stock.css';

class viewPurchase extends Component {

    componentDidMount() {
        console.log("props", this.props)
        this.props.viewPurchase();
    }


    render() {
        const style1 = {
            backgroundColor: '#00BCD4',
            textAlign: 'center',

        };
        const Purchase = this.props && this.props.app && this.props.app.purchase ? this.props.app.purchase : [];

        console.log("purchase data ", Purchase)
        return (
            <div className="stock-loginContainer">


                <Mui.Paper className="store-paper">


                    <Mui.AppBar title="Purchase List" showMenuIconButton={false} />
                    {Purchase && Purchase.length > 0 ?
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
                                    <Mui.TableHeaderColumn>Unit Price</Mui.TableHeaderColumn>{/**/}
                                    <Mui.TableHeaderColumn>Purchase Date</Mui.TableHeaderColumn>

                                </Mui.TableRow>
                            </Mui.TableHeader>
                            <Mui.TableBody displayRowCheckbox={false}>


                                {Purchase.map((data, index) => {
                                    return (
                                        <Mui.TableRow key={index}>
                                            <Mui.TableRowColumn>{data.store}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.product}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.Quantity}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.Unit}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.PurchasesDate}</Mui.TableRowColumn>
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

export default viewPurchase;