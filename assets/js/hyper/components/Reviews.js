import { h, app } from "hyperapp";

export default function Reviews({ state, actions }) {
  var searchReviews = function() {
    return (
      <div>
        <h5 className="comp-title">What They're Saying</h5>
        <h2>{state.reviews[state.reviewCount.currentReview].outlet}</h2>
        <h4>{state.reviews[state.reviewCount.currentReview].slugLine}</h4>
        <p>{state.reviews[state.reviewCount.currentReview].review}</p>
        <div className="auth">
          <strong>
            {state.reviews[state.reviewCount.currentReview].author} -
            <em>{state.reviews[state.reviewCount.currentReview].authorID}</em>
          </strong>
        </div>
      </div>
    );
  };

var smashThatLeftClick = function() {
  if(state.reviewCount.currentReview == 0) {
    //console.log('we gucci')
  } else {
    actions.arrowLeftBtn()
  }
}

var smashThatRightClick = function() {
  if(state.reviewCount.currentReview == (state.reviews.length -1)) {
    //console.log('we gucci')
  } else {
    actions.arrowRightBtn()
  }
}

  return (
    <section id="Reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <img src="" />
          </div>
        </div>
        <div className="col-md-4">
          {searchReviews()}
          {/* Refactored to include some ES6 funcs */}
          {/* Scroll function: Each review is indexed 1-4. If there is one in the que, (an index greater than 0), the arrow button will work.
          If the current index is equal to the max (length -1), the the arrow will not work and turn gray. (The boolean will switch to [? '' : 'ready '] from [? 'ready' : '']) */}
          <div className="decoration">
            <i onClick={smashThatLeftClick}
              className={`fa fa-arrow-left ${(state.reviewCount.currentReview > 0) ? 'ready' : ''}`}
              aria-hidden="true"></i>
            <i onClick={smashThatRightClick}
              className={`fa fa-arrow-right ${(state.reviewCount.currentReview == (state.reviews.length -1)) ? '' : 'ready'}`} aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
