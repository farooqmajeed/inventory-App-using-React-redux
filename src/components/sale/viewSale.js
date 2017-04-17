import React, { Component } from 'react';
import * as Mui from 'material-ui';
// import './stock.css';

class ViewSale extends Component {

    componentDidMount() {
        console.log("props", this.props)

        this.props.viewSales();
    }


    render() {

        const sale = this.props && this.props.app && this.props.app.Sale ? this.props.app.Sale : [];
        console.log("jjajaja", sale)
        return (
            <div className="stock-loginContainer">


                <Mui.Paper className="store-paper">


                    <Mui.AppBar title="View Sales" showMenuIconButton={false} />
                    {sale && sale.length > 0 ?
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
                                    <Mui.TableHeaderColumn>Total Price</Mui.TableHeaderColumn>
                                    <Mui.TableHeaderColumn>Sale Date</Mui.TableHeaderColumn>

                                </Mui.TableRow>
                            </Mui.TableHeader>
                            <Mui.TableBody displayRowCheckbox={false}>


                                {sale.map((data, index) => {
                                    return (
                                        <Mui.TableRow key={index}>
                                            <Mui.TableRowColumn>{data.store}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.product}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.Quantity}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.Unit}</Mui.TableRowColumn>
                                            <Mui.TableRowColumn>{data.total}</Mui.TableRowColumn>
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

export default ViewSale;