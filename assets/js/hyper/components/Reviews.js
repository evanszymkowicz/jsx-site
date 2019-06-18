import { h, app } from "hyperapp";

export default function Reviews({ state, actions }) {
  var searchReviews = function() {
    return (
      <div className="review">
          <div className="reviewQuote">
            &quot;{state.reviews[currentReview].quote}&quot;
          </div>
          <p>{state.reviews[currentReview].body}</p>
          <div className="quote">
            <strong>{state.reviews[currentReview].authorTitle}</strong> <span>&#9702;</span> {state.reviews[currentReview].author}
          </div>
        </div>
      )
  }
  /* Refactored to include some ES6 funcs */
  /* Scroll function: Each review is indexed 1-4. If there is one in the que, (an index greater than 0), the arrow button will work.
  If the current index is equal to the max (length -1), the the arrow will not work and turn gray. (The boolean will switch to [? '' : 'ready '] from [? 'ready' : '']) */
  return (
    <section id="Reviews">
      <div className="container">
        <div className="row">
          <div className="col-md-6 second" data-aos="fade-right" data-aos-once="true">
            <img src="/img/chef.png" />
          </div>
          <div className="col-md-6 first">
           <h6>Review</h6>
            <h2>What They're Saying</h2>
            <div className="reviewContainer" data-aos="fade-up" data-aos-once="true">
              {searchReviews()}
            </div>
            <div className="arrow" onclick={state.actions.reviewLeft}>
              <a onclick={actions.reviewLeft}
                href=""
                className={`left ${(state.reviewIndex.current > 0) ? 'active': ''}`}>
                <i class="fas fa-arrow-left"></i>
              </a>
              <a onclick={actions.reviewRight}
                href="" className={`right ${(state.reviewIndex.current < state.reviews.length-1) ? 'active': ''}`}>
                <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
