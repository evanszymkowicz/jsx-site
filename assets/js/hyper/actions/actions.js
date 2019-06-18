function reviewRight(state, actions) {
  return {
    reviewIndex: {
      current:
        state.reviewIndex.current >= state.reviews.length - 1
          ? state.reviews.length - 1
          : state.reviewIndex.current + 1
    }
  };
}

function reviewLeft(state, actions) {
  return {
    reviewIndex: {
      current:
        state.reviewIndex.current <= 0 ? 0 : state.reviewIndex.current - 1
    }
  };
}

function showMenu() {
  return { menu: "active" };
}

function closeMenu(state, actions) {
  return { menu: "inactive" };
}

function close(state, actions) {
  return { times: !state.times };
}

// var arrowLeft = function(state, actions) {
//   return {
//     reviewStatus: {
//       currentReview: state.reviewCount.currentReview - 1
//     }
//   };
// };
//
// var arrowRight = function(state, actions) {
//   return {
//     reviewStatus: {
//       currentReview: state.reviewStatus.currentReview + 1
//     }
//   };
// };
//
// function showMenu(){
//   return (
//     {menu: 'active'}
//   )
// }
//
// function closeMenu(state, actions){
//   return (
//     {menu: 'inactive'}
//   )
// }

export const actions = {
  reviewLeft,
  reviewRight,
  showMenu,
  closeMenu,
  close
};
