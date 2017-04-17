import React, { Component } from 'react';
import * as Mui from 'material-ui';
// import {browserHistory} from 'react-router';

class AppBar extends Component {
    render() {
        const style = {
            width: 1500,
            height: 800,
            padding: 20,
            marginLeft: 80
   
          }
        return (
            <div>
                <div>
                    <br />
                    <Mui.Card style={style} >

                        <Mui.CardMedia
                            overlay={<Mui.CardTitle title="React App" />}
                        >
                            <img src="http://www.kentpropertyconsultants.co.uk/images/forinventories.png" />
                        </Mui.CardMedia>

                    </Mui.Card>
                </div>

            </div>
        )
    }
}

export default AppBar;