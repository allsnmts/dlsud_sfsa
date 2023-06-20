export default function CheckFeedbackData({
  feedbackArr,
  ifFeedbackArrIsNotEmpty,
  ifFeedbackArrIsEmpty,
}) {
  return feedbackArr.length ? ifFeedbackArrIsNotEmpty : ifFeedbackArrIsEmpty;
}
