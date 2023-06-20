import { connect } from 'react-redux';
import { signOutStart } from '../redux/user/userActions';
import SignoutButton from '@/components/Buttons/SignoutButton';

export default connect(null, { signOutStart })(SignoutButton);
