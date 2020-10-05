// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import AuthView from './AuthView';
import {signIn, signUp} from './AuthState';

export default compose(connect(state => ({
    isError: state.auth.isError,
    isSignedUp: state.auth.isSignedUp
  }),{signIn, signUp}))(AuthView);
