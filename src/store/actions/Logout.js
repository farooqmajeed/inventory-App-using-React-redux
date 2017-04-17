import ActionTypes from './actions';
import * as fbConfig from '../../firebaseConfig/config';
import {browserHistory} from 'react-router';
function LogoutRequest(loginData) {
    return dispatch => {
        dispatch(logoutRequest());
        return fbConfig.auth.signOut()
            .then((data) => {
                dispatch(logoutRequestSuccess());
                console.log("logout Success")
                browserHistory.push('/login')
            })
            .catch((error) => {
                
                dispatch(logoutRequestFail());
            });
    }
}

function logoutRequest() {
    return {
        type: ActionTypes.LogoutRequest
    };
}

function logoutRequestSuccess() {
    return {
        type: ActionTypes.LogoutRequestSuccess
    };
}

function logoutRequestFail() {
    return {
        type: ActionTypes.LogoutRequestFail
    };
}
export default LogoutRequest;