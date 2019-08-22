webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function reviewRight(state, actions) {
  return {
    reviewIndex: {
      current: state.reviewIndex.current >= state.reviews.length - 1 ? state.reviews.length - 1 : state.reviewIndex.current + 1
    }
  };
}

function reviewLeft(state, actions) {
  return {
    reviewIndex: {
      current: state.reviewIndex.current <= 0 ? 0 : state.reviewIndex.current - 1
    }
  };
}

function showMenu() {
  return { menu: 'active' };
}

function closeMenu(state, actions) {
  return { menu: 'inactive' };
}

function close(state, actions) {
  return { times: !state.times };
}

function intro(state, actions) {
  return { count: state.count + 1 };
}

var actions = exports.actions = {
  reviewRight: reviewRight,
  reviewLeft: reviewLeft,
  intro: intro,
  showMenu: showMenu,
  closeMenu: closeMenu,
  close: close
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(16);

var _LeadImage = __webpack_require__(17);

var _Background = __webpack_require__(13);

var _SeasonalMenu = __webpack_require__(22);

var _QuoteGenerator = __webpack_require__(19);

var _Contact = __webpack_require__(14);

var _Promotions = __webpack_require__(18);

var _Reviews = __webpack_require__(21);

var _Reservations = __webpack_require__(20);

var _Footer = __webpack_require__(15);

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "div",
    { "class": "app" },
    (0, _hyperapp.h)(_Header.Header, { state: state, actions: actions }),
    (0, _hyperapp.h)(_LeadImage.LeadImage, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Background.Background, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SeasonalMenu.SeasonalMenu, { state: state, actions: actions }),
    (0, _hyperapp.h)(_QuoteGenerator.QuoteGenerator, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Contact.Contact, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Promotions.Promotions, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews.Reviews, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reservations.Reservations, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer.Footer, { state: state, actions: actions })
  );
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var restaurantInfo = {
  title: "Prime Cut",
  phone: "(202) 555-5555",
  address: {
    state: "D.C.",
    city: "Washington",
    address: "1225 19th St NW, Washington, DC 20036"
  },
  email: "evan.szymkowicz@evanwolf.co"
};

var seasonalMenuData = [{
  title: "Fillet Mignon",
  description: "Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine",
  price: "$39"
}, {
  title: "Beef Cutlet",
  description: "Stir-fried beef masla seasoned with kashmiri chili, Served on a bed of vegetables and rice"
}, {
  title: "Party Platter",
  description: "Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine",
  price: "$63"
}];

var reviewsData = [{
  outlet: "Washingtonian",
  quote: "Best new restaurant in the Washington area!",
  body: "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.",
  authorTitle: "Food Critic",
  author: "Ann Limpert"
}, {
  outlet: "NBC4",
  quote: "Unlike any other!",
  body: "Unicorn banjo woke knausgaard af, viral plaid cold-pressed forage. Air plant cornhole man bun, squid tilde disrupt dreamcatcher. Pickled drinking vinegar polaroid selfies intelligentsia brooklyn meh farm-to-table kitsch glossier. Typewriter try-hard bushwick, celiac cloud bread ugh bicycle rights viral literally fam air plant man braid hexagon. Craft beer keytar quinoa iPhone swag irony fixie four dollar toast poutine prism.",
  authorTitle: "Executive Producer",
  author: "Eun Yang"
}, {
  outlet: "Washington Post",
  quote: "Pleases even my pretentious palate!",
  body: "Pickled cliche direct trade lyft. Drinking vinegar pabst stumptown organic gluten-free bespoke. Butcher subway tile quinoa air plant aesthetic brooklyn. Flexitarian snackwave trust fund hexagon leggings. Paleo microdosing tote bag crucifix fixie wayfarers jianbing art party hammock. Pitchfork schlitz yuccie chambray vegan austin sartorial swag roof party.",
  authorTitle: "Food Critic",
  author: "Tom Sietsema"
}, {
  outlet: "ABC",
  quote: "Stunning food and great recipe!",
  body: "IPhone four loko twee bitters. Beard etsy helvetica, thundercats readymade bushwick selvage taiyaki pop-up forage distillery. Pug tacos fingerstache, +1 lumbersexual intelligentsia lyft craft beer hoodie succulents bitters tumblr 8-bit. Cloud bread marfa wayfarers ugh aesthetic, mumblecore pour-over before they sold out tote bag letterpress godard dreamcatcher.",
  authorTitle: "Former First Lady",
  author: "Michelle Obama"
}, {
  outlet: "New York Times",
  quote: "Superb experience and atmosphere!",
  body: "We loved crushing steaks while recording our podcast.",
  authorTitle: "Host",
  author: "Michael Barbaro"
}];

var dankQuotesData = [{
  author: "Guy on the Street",
  quote: "I love cooking"
}, {
  author: "Anothe Guy on the Street",
  quote: "Looks good."
}, {
  author: "Some Rando",
  quote: "P Nice."
}];

function reviewLeft() {
  globalState.reviewIndex.current - 1;
}
function reviewRight() {
  globalState.reviewIndex.current + 1;
}

var actions = {
  reviewRight: reviewRight,
  reviewLeft: reviewLeft
};

var globalState = exports.globalState = {
  count: 0,
  restaurantInfo: restaurantInfo,
  seasonalMenuData: seasonalMenuData,
  reviewsData: reviewsData,
  dankQuotesData: dankQuotesData,
  reviewIndex: {
    current: 0
  },
  actions: actions,
  menu: "inactive",
  times: false
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OurStory = undefined;

var _hyperapp = __webpack_require__(0);

var OurStory = exports.OurStory = function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory", "data-aos": "fade-up", "data-aos-once": "true" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6 first" },
          (0, _hyperapp.h)(
            "h6",
            null,
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "We brought the taste of New York to Washington"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Home is where the steak sizzles."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "quote" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Chef in Residence"
            ),
            " ",
            (0, _hyperapp.h)(
              "span",
              null,
              "\u25E6"
            ),
            " Fredrick Helsing Von Heisenhoper"
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", className: "reserve-btn" },
            "Book A Reservation"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6 second" },
          (0, _hyperapp.h)("img", { src: "/images/lambChop.jpg" })
        )
      )
    )
  );
};

/* <div className="col-md-6">
	<h5 className="comp-title">About us:</h5>
	<h2>Because when you think Washington, you think steaks</h2>
	<p></p>
	<div className="quote"><i></i>Joe Schmo</div>
	<a href="#" className="reserve-btn">Reservations</a>
</div> */

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Contact = undefined;

var _hyperapp = __webpack_require__(0);

var Contact = exports.Contact = function Contact(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Contact" },
    (0, _hyperapp.h)("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.7399040776495!2d-6.261147484122739!3d53.34791197997939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1462581622087",
      width: "600", height: "450", frameborder: "0", style: "border:0", allowfullscreen: true }),
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h6",
        { "data-aos": "zoom-in", "data-aos-once": "true" },
        "Contact us"
      ),
      (0, _hyperapp.h)(
        "h3",
        { "data-aos": "zoom-in", "data-aos-once": "true" },
        "we're here to help"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "contactBox", "data-aos": "flip-left", "data-aos-once": "true" },
        (0, _hyperapp.h)(
          "div",
          { className: "left" },
          (0, _hyperapp.h)(
            "div",
            { className: "city" },
            (0, _hyperapp.h)(
              "strong",
              null,
              state.restaurantInfo.address.city,
              ","
            ),
            " ",
            state.restaurantInfo.address.state
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "address" },
            state.restaurantInfo.address.address
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "email" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Email: "
            ),
            state.restaurantInfo.email
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "right" },
          "Call directly:",
          (0, _hyperapp.h)(
            "div",
            { className: "phoneNumber" },
            "+1(201)-555-5555"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "serviceInfo" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Lunch Service:"
            ),
            (0, _hyperapp.h)("br", null),
            "Weekend Catering: Bookings from 12pm - 3pm"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "serviceInfo" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Dinner Service:"
            ),
            (0, _hyperapp.h)("br", null),
            "Daily Catering: Bookings from 6pm - 8pm"
          )
        )
      )
    )
  );
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = undefined;

var _hyperapp = __webpack_require__(0);

var Footer = exports.Footer = function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Footer" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)("div", { className: "logo" }),
      (0, _hyperapp.h)(
        "div",
        { className: "links" },
        (0, _hyperapp.h)(
          "li",
          null,
          "Reservations"
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          "Catering"
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          "Contact"
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          "Reviews"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "social" },
        (0, _hyperapp.h)(
          "div",
          { className: "media" },
          (0, _hyperapp.h)("i", { "class": "fab fa-twitter" })
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "media" },
          (0, _hyperapp.h)("i", { "class": "fab fa-facebook-f" })
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "media" },
          (0, _hyperapp.h)("i", { "class": "fab fa-instagram" })
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "media" },
          (0, _hyperapp.h)("i", { "class": "fas fa-rss" })
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        (0, _hyperapp.h)("i", { "class": "fa fa-copyright", "aria-hidden": "true" }),
        "Evan Szymkowicz",
        (0, _hyperapp.h)("br", null),
        "2019"
      )
    )
  );
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Header = undefined;

var _hyperapp = __webpack_require__(0);

//	I'm going to keep using className so I don't forget about it
//	Hyper doesn't require it, but it is jsx standard
var Header = exports.Header = function Header(_ref) {
	var state = _ref.state,
	    actions = _ref.actions;

	return (0, _hyperapp.h)(
		"header",
		null,
		(0, _hyperapp.h)(
			"div",
			{ className: "container" },
			(0, _hyperapp.h)("div", { className: "logo" }),
			(0, _hyperapp.h)(
				"div",
				{ className: "hamburger", onclick: actions.showMenu },
				(0, _hyperapp.h)("div", null),
				(0, _hyperapp.h)("div", null),
				(0, _hyperapp.h)("div", null)
			),
			(0, _hyperapp.h)(
				"nav",
				{ className: state.menu },
				(0, _hyperapp.h)(
					"a",
					{ href: "#SpecialMenu" },
					"Menu"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#", onclick: actions.close },
					"Reservations"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#Reviews" },
					"Reviews"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#Contact" },
					"Contact"
				),
				(0, _hyperapp.h)(
					"div",
					{ className: "close", onclick: actions.closeMenu },
					(0, _hyperapp.h)("i", { "class": "fas fa-times" })
				)
			)
		)
	);
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = LeadImage;

var _hyperapp = __webpack_require__(0);

function LeadImage(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  // console.log(state.globalState.restaurantInfo.title)
  return (
    //I'm going to keep using className so I don't forget about it
    //Hyper doesn't require it, but it is jsx standard
    (0, _hyperapp.h)(
      "section",
      { id: "LeadImage" },
      (0, _hyperapp.h)(
        "div",
        { "class": "overlay" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "title" },
            (0, _hyperapp.h)(
              "div",
              { "class": "motto" },
              (0, _hyperapp.h)(
                "h5",
                null,
                "Welcome"
              ),
              (0, _hyperapp.h)(
                "h1",
                null,
                state.restaurantInfoData.title
              ),
              (0, _hyperapp.h)(
                "h1",
                null,
                "Restaurant"
              )
            ),
            (0, _hyperapp.h)(
              "div",
              { "class": "details" },
              (0, _hyperapp.h)(
                "div",
                { "class": "contact-info" },
                (0, _hyperapp.h)(
                  "div",
                  { "class": "container" },
                  (0, _hyperapp.h)(
                    "h6",
                    null,
                    "Book Table Directly:"
                  ),
                  (0, _hyperapp.h)(
                    "h3",
                    null,
                    state.restaurantInfoData.phone
                  ),
                  (0, _hyperapp.h)(
                    "h6",
                    null,
                    "Opening Hours | ",
                    (0, _hyperapp.h)(
                      "strong",
                      null,
                      "Monday-Thursday: "
                    ),
                    " ",
                    "11:30am-9:30pm || ",
                    (0, _hyperapp.h)(
                      "strong",
                      null,
                      "Weekend: "
                    ),
                    " 11am - 11pm"
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}
{
  /* <div className="container">
        <div className="title">
          <h5>Welcome</h5>
          <h1>{this.state.globalState.restaurantInfo.title}</h1>
        </div>
        <div className="contact-info">
          <div className="container">
            <div className="book">Call us Today</div>
            <h2>(202) 555-5555</h2>
            <div className="hours">
              Hours <strong>Mon - Wed: </strong> 4:30p.m. - 11:45 p.m.
              <strong>Thurs - Sat: </strong> 4:00.m. - 1:00 a.m.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  } */
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Promotions = undefined;

var _hyperapp = __webpack_require__(0);

var Promotions = exports.Promotions = function Promotions(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Promotions" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h6",
        { "data-aos": "fade", "data-aos-once": "true" },
        "our news"
      ),
      (0, _hyperapp.h)(
        "h3",
        { "data-aos": "fade", "data-aos-once": "true" },
        "promotions & events"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "specialContainer" },
        (0, _hyperapp.h)("div", { className: "box image1", "data-aos": "fade-right", "data-aos-once": "true" }),
        (0, _hyperapp.h)(
          "div",
          { className: "box event", "data-aos": "fade-right", "data-aos-once": "true" },
          (0, _hyperapp.h)(
            "div",
            { className: "eventTitle" },
            "Beef Sauteed onions - Let's enjoy!"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "divider" },
            "-----------------"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "eventDetails" },
            (0, _hyperapp.h)(
              "div",
              { className: "eventAddress" },
              "49-49 Tortellini Ave, Pastafari, Italy"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "eventTime" },
              "10:00 AM - 11:00 AM"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "eventDate" },
              "March 3rd, 2018"
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "box event", "data-aos": "fade-right", "data-aos-once": "true" },
          (0, _hyperapp.h)(
            "div",
            { className: "eventTitle" },
            "Art photography in foody"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "divider" },
            "-----------------"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "eventDetails" },
            (0, _hyperapp.h)(
              "div",
              { className: "eventAddress" },
              "162 Hamilton St, Macbeth Township, Shakespeare"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "eventTime" },
              "3:00 PM - 7:00 PM"
            ),
            (0, _hyperapp.h)(
              "div",
              { className: "eventDate" },
              "April 20th, 2018"
            )
          )
        ),
        (0, _hyperapp.h)("div", { className: "box image2", "data-aos": "fade-right", "data-aos-once": "true" })
      )
    )
  );
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Quote = undefined;

var _hyperapp = __webpack_require__(0);

var Quote = exports.Quote = function Quote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var quote = function quote() {
    return state.bannerQuote.map(function (quote) {
      return (0, _hyperapp.h)(
        "div",
        { className: "quoteContainer", "data-aos": "fade", "data-aos-once": "true" },
        (0, _hyperapp.h)(
          "h1",
          { className: "quoteContent" },
          (0, _hyperapp.h)(
            "span",
            { className: "quote" },
            "\u201C"
          ),
          quote.quote
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "quoteAuthor" },
          "- ",
          quote.author,
          " -"
        )
      );
    });
  };
  return (0, _hyperapp.h)(
    "section",
    { id: "Quote" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      quote()
    )
  );
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reservations = undefined;

var _hyperapp = __webpack_require__(0);

var Reservations = exports.Reservations = function Reservations(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { id: 'Reservations', className: '' + (state.times ? 'inactive' : '') },
    (0, _hyperapp.h)(
      'div',
      { className: 'container' },
      (0, _hyperapp.h)(
        'p',
        { className: 'close', onclick: actions.close },
        '\xD7'
      ),
      (0, _hyperapp.h)(
        'div',
        { className: 'reserveHeader' },
        'Reserve'
      ),
      (0, _hyperapp.h)(
        'div',
        { className: 'reserveSubHeader' },
        'Fill out the form, secure your spot'
      ),
      (0, _hyperapp.h)(
        'form',
        { id: 'ContactForm' },
        (0, _hyperapp.h)(
          'div',
          { className: 'row' },
          (0, _hyperapp.h)(
            'div',
            { className: 'col-md-6' },
            (0, _hyperapp.h)(
              'div',
              { className: 'form-group' },
              (0, _hyperapp.h)('input', { className: 'form-control', 'data-validation-required-message': 'Please enter your name.', id: 'name', placeholder: 'Name *', required: '', type: 'text', 'aria-invalid': 'false' }),
              (0, _hyperapp.h)(
                'p',
                { className: 'help-block text-danger' },
                ' '
              )
            )
          ),
          (0, _hyperapp.h)(
            'div',
            { className: 'col-md-6' },
            (0, _hyperapp.h)(
              'div',
              { className: 'form-group' },
              (0, _hyperapp.h)('input', { className: 'form-control', 'data-validation-required-message': 'Please enter your phone.', id: 'name', placeholder: 'Your Phone *', required: '', type: 'text' }),
              (0, _hyperapp.h)(
                'p',
                { className: 'help-block text-danger' },
                ' '
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { className: 'row' },
          (0, _hyperapp.h)(
            'div',
            { className: 'col-md-6' },
            (0, _hyperapp.h)(
              'div',
              { className: 'form-group' },
              (0, _hyperapp.h)('input', { className: 'form-control', 'data-validation-required-message': 'Please enter your email.', id: 'name', placeholder: 'Email *', required: '', type: 'text', 'aria-invalid': 'false' }),
              (0, _hyperapp.h)(
                'p',
                { className: 'help-block text-danger' },
                ' '
              )
            )
          ),
          (0, _hyperapp.h)(
            'div',
            { className: 'col-md-6' },
            (0, _hyperapp.h)(
              'div',
              { className: 'form-group' },
              (0, _hyperapp.h)('input', { className: 'form-control', 'data-validation-required-message': 'Please enter your date.', id: 'name', placeholder: 'Date *', required: '', type: 'text' }),
              (0, _hyperapp.h)(
                'p',
                { className: 'help-block text-danger' },
                ' '
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { className: 'col-md-12' },
          (0, _hyperapp.h)(
            'div',
            { className: 'form-group' },
            (0, _hyperapp.h)('textarea', { className: 'form-control', 'data-validation-required-message': 'Please enter a message.', id: 'message', name: 'message', placeholder: 'Do You Have Any Special Requirements? *', required: '' }),
            (0, _hyperapp.h)(
              'p',
              { className: 'help-block text-danger' },
              ' '
            )
          )
        ),
        (0, _hyperapp.h)(
          'div',
          { className: 'row' },
          (0, _hyperapp.h)(
            'div',
            { className: 'col-lg-12 text-center' },
            (0, _hyperapp.h)(
              'div',
              { id: 'success' },
              ' '
            ),
            (0, _hyperapp.h)(
              'button',
              { className: 'btn btn-contact', type: 'button', onclick: actions.close },
              'Book'
            )
          )
        )
      )
    )
  );
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Reviews = undefined;

var _hyperapp = __webpack_require__(0);

var Reviews = exports.Reviews = function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var currentReview = state.reviewIndex.current;
  var loopReviews = function loopReviews() {
    return (0, _hyperapp.h)(
      "div",
      { className: "review" },
      (0, _hyperapp.h)(
        "div",
        { className: "reviewQuote" },
        state.reviews[currentReview].quote
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviews[currentReview].body
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "quote" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.reviews[currentReview].authorTitle
        ),
        " ",
        (0, _hyperapp.h)(
          "span",
          null,
          "\u25E6"
        ),
        " ",
        state.reviews[currentReview].author
      )
    );
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "h5",
          { "class": "comp-title" },
          "What They're Saying:"
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8" },
          loopReviewImages()
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          loopReviews(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", {
              onclick: leftClickBtn,
              "class": "fa fa-arrow-left " + (state.reviewStatus.currentReview > 0 ? "ready" : ""),
              "aria-hidden": "true"
            }),
            (0, _hyperapp.h)("i", {
              onclick: rightClickBtn,
              "class": "fa fa-arrow-right " + (state.reviewStatus.currentReview < state.reviewsData.length - 1 ? "ready" : ""),
              "aria-hidden": "true"
            })
          )
        )
      )
    )
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpecialMenu = undefined;

var _hyperapp = __webpack_require__(0);

var SpecialMenu = exports.SpecialMenu = function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var searchMenu = function searchMenu() {
    return state.specialMenu.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { className: "one special" },
        (0, _hyperapp.h)(
          "div",
          { className: "specialTop" },
          (0, _hyperapp.h)(
            "div",
            { className: "specialPrice" },
            item.price
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "specialDescription" },
          (0, _hyperapp.h)(
            "div",
            { className: "dish" },
            item.title
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "ingredients" },
            item.description
          )
        )
      );
    });
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "SeasonalMenu", className: "texturebg" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "h5",
        { className: "comp-title" },
        "Seasonal Menu"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Upcoming Summer Specialties"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "row boxes" },
        searchMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { target: "_blank", href: "http://www.hydeparkrestaurants.com/dtlunch.pdf", "class": "view-menu" },
        (0, _hyperapp.h)(
          "strong",
          null,
          "View Full Menu"
        )
      )
    )
  );
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(12);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(9);

var _globalState = __webpack_require__(11);

var _App = __webpack_require__(10);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  (0, _hyperapp.app)({
    state: { globalState: _globalState.globalState },
    view: function view(state, actions) {
      return (0, _hyperapp.h)(_App2.default, { state: state, actions: actions });
    },
    root: document.getElementById("app"),
    actions: _actions.actions,
    events: {
      action: function action(state, actions, _ref) {
        var name = _ref.name,
            data = _ref.data;

        console.group("Action Info");
        console.log("Name:", name);
        console.log("Data:", data);
        console.groupEnd();
      },
      load: function load(state, actions) {
        actions.intro();
      }
    },
    mixins: [(0, _hyperappReduxDevtools2.default)()]
  });
};

/***/ })
],[23]);