import StudentCard from '@/components/Cards/StudentCard';
import { selectStudent } from '@/redux/admin/adminSelectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

const mapStateToProps = createStructuredSelector({ studentObj: selectStudent });

export default connect(mapStateToProps)(StudentCard);
