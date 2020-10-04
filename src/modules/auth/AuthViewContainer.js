// @flow
import { compose } from 'recompose';
import { connect } from 'react-redux';

import AuthView from './AuthView';
import {signIn} from './AuthState';

export default compose(connect(null,{signIn}))(AuthView);
