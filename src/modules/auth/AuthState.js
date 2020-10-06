const AUTH_LOGIN_SUCCESS = 'AuthState/LOGIN_SUCCESS';
const AUTH_LOGIN_FAIL = 'AuthState/LOGIN_FAIL';
const AUTH_LOGOUT = 'AuthState/LOGOUT';
const AUTH_SIGNUP_SUCCESS = 'AuthState/SIGNUP_SUCCESS';
const AUTH_SIGNUP_FAIL = 'AuthState/SIGNUP_FAIL';
import { NODE_LOGIN, NODE_LOGIN_ANDROID, NODE_SIGNUP, NODE_SIGNUP_ANDROID, GOOGLE_WEB_ID, GOOGLE_IOS_ID } from 'react-native-dotenv';
import { Platform } from 'react-native';

export const initialState = {
  isSocialLoggedIn: false,
  isLoggedIn: false,
  isSignedUp: false,
  isError: false
};

export const signIn_social = () => (dispatch) => {
  dispatch({ type: AUTH_LOGIN_SUCCESS })
}

export const signIn = (name, password) => (dispatch) => {
  let login_url = NODE_LOGIN
  if (Platform.OS === 'android') {
    login_url = NODE_LOGIN_ANDROID
  }
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: name, password: password })
  };
  fetch(login_url, requestOptions)
    .then(response => {
      if (response.status == 401) {
        throw response;
      }
      return response.json()
    })
    .then(data => {
      // console.log(data);
      //  localStorage.setItem('id_token', data.token);
      dispatch({ type: AUTH_LOGIN_SUCCESS })
    }).catch(err => {
      console.log(err);
      dispatch({ type: AUTH_LOGIN_FAIL });
      // err.json().then(json => {
      //   dispatch({ type: AUTH_LOGIN_FAIL }); 
      // })
    });
};

export const signOut = () => (dispatch) => {
  // localStorage.removeItem("id_token");
  dispatch({ type: AUTH_LOGOUT });
}

export const signUp = (name, password) => (dispatch) => {
  let signup_url = NODE_SIGNUP;
  if (Platform.OS === 'android') {
    signup_url = NODE_SIGNUP_ANDROID;
  }
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email: name, password: password })
  };
  fetch(signup_url, requestOptions)
    .then(response => {
      if (response.status != 200) {
        throw response;
      }
      return response.json()
    })
    .then(data => {
      console.log(data);
      dispatch({ type: AUTH_SIGNUP_SUCCESS })
    }).catch(err => {
      console.log(err);
      dispatch({ type: AUTH_SIGNUP_FAIL });
    });
}

export default function AuthStateReducer(
  state = initialState,
  action,
) {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        isError: false,
        isSignedUp: false
      };
    case AUTH_LOGIN_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        isError: true,
        isSignedUp: false
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        isError: false,
        isSignedUp: false
      };
    case AUTH_SIGNUP_SUCCESS:
      return {
        ...state,
        isSignedUp: true,
        isError: false
      };
    case AUTH_SIGNUP_FAIL:
      return {
        ...state,
        isSignedUp: false,
        isError: true
      };
    default:
      return state;
  }
}
