import React from 'react';

import Navigator from './navigation/Navigator';
import ChatNavigator from './navigation/ChatNavigation';
import {signOut} from './auth/AuthState';
// export default function AppView() {
//   return <ChatNavigator onNavigationStateChange={() => {}} uriPrefix="/app" />;
// }

import { compose, lifecycle, withState } from 'recompose';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {

}

export default connect(mapStateToProps, {signOut})
  (ChatNavigator);
