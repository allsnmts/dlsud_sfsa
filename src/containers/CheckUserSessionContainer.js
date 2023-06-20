import CheckUserSession from '@/layouts/CheckUserSession';
import { connect } from 'react-redux';
import { checkUserSession } from '../redux/user/userActions';
import { createStructuredSelector } from 'reselect';
import { selectCurrentAdmin } from '../redux/user/userSelectors';

const mapStateToProps = createStructuredSelector({
  admin: selectCurrentAdmin,
});

export default connect(mapStateToProps, { checkUserSession })(CheckUserSession);
