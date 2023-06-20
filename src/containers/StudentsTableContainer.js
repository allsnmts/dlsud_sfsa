import { connect } from 'react-redux';
import AdminTable from '@/components/Tables/StudentsTable';
import { createStructuredSelector } from 'reselect';
import { selectFeedbackArr, selectStudent } from '@/redux/admin/adminSelectors';
import { addStudent } from '../redux/admin/adminActions';

const mapStateToProps = createStructuredSelector({
  feedbackArr: selectFeedbackArr,
  student: selectStudent,
});

export default connect(mapStateToProps, { addStudent })(AdminTable);
