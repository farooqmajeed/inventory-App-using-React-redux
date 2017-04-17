import ActionTypes from './../actions/actions';

const int_state = { };
function authreducer (state = int_state, action) {
    switch (ActionTypes){
        case ActionTypes.SignUpRequestSuccess:{
            var newState = Object.assign({}, state, {user: action.data});
            state = newState;
            return state;
        }

        case ActionTypes.LoginRequestSuccess:{
       return  Object.assign({}, state, {user: action.data})
           
        }
         
         case ActionTypes.LogoutRequestSuccess: {
           return Object.assign( {}, state, {user:action.data})
                  }
          default:
      return state;
    }
    
}  

export default authreducer;
