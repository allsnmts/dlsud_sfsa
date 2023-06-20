import { connect } from 'react-redux';
import { microsoftSignInStart } from '../redux/user/userActions';
import SigninButton from '@/components/Buttons/SigninButton';

export default connect(null, { microsoftSignInStart })(SigninButton);
