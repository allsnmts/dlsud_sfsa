import CardBarChart from '@/components/Cards/CardBarChart';
import { createStructuredSelector } from 'reselect';
import { selectAllCategoriesExceptTotalObj } from '@/redux/admin/adminSelectors';
import { connect } from 'react-redux';

const mapStateToProps = createStructuredSelector({
  feedbackObjByCategory: selectAllCategoriesExceptTotalObj,
});

export default connect(mapStateToProps)(CardBarChart);
