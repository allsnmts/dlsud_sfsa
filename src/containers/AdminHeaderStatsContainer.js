import { createStructuredSelector } from 'reselect';
import { selectSortedByCatergoryFeedBackObj } from '@/redux/admin/adminSelectors';
import { connect } from 'react-redux';
import AdminHeaderStats from '@/components/AdminHeaderStats';

const mapStateToProps = createStructuredSelector({
  feedbackObjByCategory: selectSortedByCatergoryFeedBackObj,
});

export default connect(mapStateToProps)(AdminHeaderStats);
