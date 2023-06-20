import React from 'react';
import { connect } from 'react-redux';
import CheckFeedbackData from '@/layouts/CheckFeedbackData';
import { createStructuredSelector } from 'reselect';
import { selectFeedbackArr } from '../redux/admin/adminSelectors';

const mapStateToProps = createStructuredSelector({
  feedbackArr: selectFeedbackArr,
});

export default connect(mapStateToProps)(CheckFeedbackData);
