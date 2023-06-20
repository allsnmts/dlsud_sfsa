import { createSelector } from "reselect";

const selectAdmin = (state) => state.admin;

export const selectFeedbackArr = createSelector(
  [selectAdmin],
  (admin) => admin.feedbackArr
);

export const selectStudent = createSelector(
  [selectAdmin],
  (admin) => admin.student
);

const categories = ["positive", "negative", "total"];

export const selectSortedByCatergoryFeedBackObj = createSelector(
  [selectFeedbackArr],
  (feedbackArr) =>
    categories.reduce(
      (obj, category) => (
        (obj[category] =
          category.toLowerCase() === "total"
            ? feedbackArr
            : feedbackArr.filter(
                (d) => category === d.feedbackCategory.toLowerCase()
              )),
        obj
      ),
      {}
    )
);

export const selectAllCategoriesExceptTotalObj = createSelector(
  [selectSortedByCatergoryFeedBackObj],
  (feedbackObj) => {
    const { total, ...rest } = feedbackObj;

    return rest;
  }
);
