import { h, app } from "hyperapp";

export const Reviews = ({ state, actions }) => {
  let currentReview = state.reviewIndex.current;
  let loopReviews = () => {
    return (
      <div className="review">
        <div className="reviewQuote">{state.reviews[currentReview].quote}</div>
        <p>{state.reviews[currentReview].body}</p>
        <div className="quote">
          <strong>{state.reviews[currentReview].authorTitle}</strong>{" "}
          <span>&#9702;</span> {state.reviews[currentReview].author}
        </div>
      </div>
    );
  };

  return (
    <section id="Reviews">
      <div class="container">
        <div class="row">
          <h5 class="comp-title">What They're Saying:</h5>
          <div class="col-md-8">{loopReviewImages()}</div>
          <div class="col-md-4">
            {loopReviews()}
            <div class="arrows">
              <i
                onclick={leftClickBtn}
                class={`fa fa-arrow-left ${
                  state.reviewStatus.currentReview > 0 ? "ready" : ""
                }`}
                aria-hidden="true"
              />
              <i
                onclick={rightClickBtn}
                class={`fa fa-arrow-right ${
                  state.reviewStatus.currentReview <
                  state.reviewsData.length - 1
                    ? "ready"
                    : ""
                }`}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Refactored to include some ES6 funcs */
/* Scroll function: Each review is indexed 1-4. If there is one in the que, (an index greater than 0), the arrow button will work.
If the current index is equal to the max (length -1), the the arrow will not work and turn gray. (The boolean will switch to [? '' : 'ready '] from [? 'ready' : '']) */

// const loopReviewImages = () => {
//     return (
//       <div>
//         <img class="chef-img" src={`/img/${state.reviewsData[state.reviewStatus.currentReview].photo}`}/>
//       </div>
//     )
//   }
//
//   const leftClickBtn = () => {
//     if(state.reviewStatus.currentReview > 0){
//       actions.reviewLeftClicked()
//     }
//   }
//
// const rightClickBtn = () => {
//   if(state.reviewStatus.currentReview < (state.reviewsData.length - 1)){
//     actions.reviewRightClicked()
//   }
// }
