import React, { Component } from 'react';
import * as Mui from 'material-ui';
import styles from './login.css';
import { connect } from 'react-redux';
import LoginRequest from '../../store/actions/Login'




function mapStateToProps(state){
    return{
         auth : state.auth
   
    };
}

function mapDispatchToProps(dispatch){
   return{

      loginRequest : (userData) => dispatch(LoginRequest(userData))
   };
    
}
class LoginComponent extends Component{
    constructor(props){
        
        super(props);

         this.state = {email:'', password:''};
         this.handleInputChange = this.handleInputChange.bind(this);
         this.handleSubmit = this.handleLoginSubmit.bind(this);
    }
 

handleLoginSubmit(ev){
    ev.preventDefault();
    var email = this.refs.email.getValue();
     var password = this.refs.password.getValue();
     var userObj = {
         email: email, 
     password: password 
    };
         this.props.loginRequest(userObj);
 
}
    handleInputChange = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }


   render() {
      
        return (
       
             
                        <div className="signup-loginContainer">
                            {console.log(this.props,"login")}
                        <Mui.Paper className="signup-paper">
                             {/*<Mui.AppBar title= "Login" showMenuIconButton={false}  />*/}   
                        <form onSubmit={this.handleSubmit}>
                            <Mui.TextField
                                hintText="name@mail.com"
                                floatingLabelText="Email"
                                ref="email"
                                name="email"
                                required={true}
                                type="email"
                            
                                onChange={this.handleInputChange}
                                /><br />
                            <Mui.TextField
                                hintText=" Password"
                                ref="password"
                                name="password"
                                required={true}
                                type="password"
                                onChange={this.handleInputChange}
                                floatingLabelText="Password" />
                            <br />
                            <Mui.RaisedButton type="submit" label="Login" primary={true} className="signup-loginBtn"  /> 
                          
                        </form>
                        </Mui.Paper>
                   </div>
                
          
        );
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);