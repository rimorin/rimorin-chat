const AUTH_LOGIN_SUCCESS = 'AuthState/LOGIN_SUCCESS';
const AUTH_LOGIN_FAIL = 'AuthState/LOGIN_FAIL';
const AUTH_LOGOUT = 'AuthState/LOGOUT';
import { NODE_LOGIN } from 'react-native-dotenv';
// const ENV_VAR = proces.env;
export const initialState = {
    isLoggedIn: false
};

export const signIn = (name, password) => (dispatch) => {
  console.log(`login url is ${NODE_LOGIN}`)
          const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: name, password: password })
      };
      fetch(NODE_LOGIN, requestOptions)
        .then(response => {
          console.log(response);
          if(response.status == 401) {
            throw new Error(response)
         }
          return response.json()
        })
        .then(data => {
          console.log(data);
        //  localStorage.setItem('id_token', data.token);
        dispatch({ type: AUTH_LOGIN_SUCCESS })
        }).catch(function(err) {
          console.log(err);
            dispatch({ type: AUTH_LOGIN_FAIL });  
      });
  };
  
 export const signOut = () => (dispatch) => {
    // localStorage.removeItem("id_token");
    console.log("Logging out!!");
    dispatch({ type: AUTH_LOGOUT });
  }
    

export default function AuthStateReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn : true
      };
    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn : false
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isLoggedIn : false
      };
    default:
      return state;
  }
}
