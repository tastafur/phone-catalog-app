import { connect } from 'react-redux';

import Director from './stateless';
import { phonesFetch } from '../../actions/phones';

const mapStateToProps = state => ({
  phones: state.person.person,
});

const mapDispatchToProps = dispatch => ({
  phonesFetch: () => dispatch(phonesFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(Director);
