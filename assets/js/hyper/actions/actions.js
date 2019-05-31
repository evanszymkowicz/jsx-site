//this the only part of the app that uses actions
var arrowLeft = function(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewCount.currentReview - 1
    }
  };
};

var arrowRight = function(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewCount.currentReview + 1
    }
  };
};

export const actions = {
  arrowLeft,
  arrowRight
};
