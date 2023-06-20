import { createStructuredSelector } from 'reselect';
import { selectSortedByCatergoryFeedBackObj } from '@/redux/admin/adminSelectors';
import { connect } from 'react-redux';
import CardTable from '@/components/Cards/CardTable';

const mapStateToProps = createStructuredSelector({
  feedbackObjByCategory: selectSortedByCatergoryFeedBackObj,
});

export default connect(mapStateToProps)(CardTable);
