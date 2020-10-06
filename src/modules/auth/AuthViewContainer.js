// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import AuthView from './AuthView';
import {signIn, signUp, signIn_social} from './AuthState';

export default compose(connect(state => ({
    isError: state.auth.isError,
    isSignedUp: state.auth.isSignedUp
  }),{signIn, signUp, signIn_social}))(AuthView);
