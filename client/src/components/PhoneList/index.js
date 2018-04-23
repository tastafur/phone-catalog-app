import { connect } from 'react-redux';

import Director from './stateless';
import { phonesFetch } from '../../actions/phones';

const mapStateToProps = state => {

  return {
    phones: state.phones.phones,
  }
};

const mapDispatchToProps = dispatch => ({
  phonesFetch: () => dispatch(phonesFetch())
});

export default connect(mapStateToProps, mapDispatchToProps)(Director);
