import Register from './Register';
import { connect } from 'react-redux';
import * as actions from '../../actions/authentication_actions';

const mapStateToProps = (state) => ({
  // currentUser: state.currentUser.currentUser
});

const mapDispatchToProps = () => ({

});

export default connect(
  // mapStateToProps,
  null,
  null
)(Register);
