import { connect } from 'react-redux';

import Director from './stateless';
import { askForPersonSubmit } from '../../actions/phones';

const mapStateToProps = state => ({
  person: state.person.person,
});

const mapDispatchToProps = dispatch => ({
  askForPersonSubmit: () => dispatch(askForPersonSubmit())
});

export default connect(mapStateToProps, mapDispatchToProps)(Director);
