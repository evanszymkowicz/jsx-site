import {h, app} from 'hyperapp';

export default function QuoteGenerator({state, actions}) {
	var searchMenu = function() {
		return (
	        <div className="quoteContainer" data-aos="fade" data-aos-once="true">
	          <h1 className="quoteContent">
	          <span className="quote">&ldquo;</span>{quote.quote}
	          </h1>
	          <div className="quoteAuthor">
	            - {quote.author} -
	          </div>
	        </div>
	      )
	   })
  }
  return (
    <section id="Quote">
      <div className="container">
        {quote()}
      </div>
    </section>
  )
}
