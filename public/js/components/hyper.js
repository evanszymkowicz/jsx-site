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

var actions = exports.actions = {
  reviewLeft: reviewLeft,
  reviewRight: reviewRight,
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

var _Reviews = __webpack_require__(21);

var _Reservations = __webpack_require__(20);

var _Promotions = __webpack_require__(18);

var _Footer = __webpack_require__(15);

function App(_ref) {
		var state = _ref.state,
		    actions = _ref.actions;

		return (0, _hyperapp.h)(
				"div",
				{ "class": 'app' },
				(0, _hyperapp.h)(_Header.Header, { state: state, actions: actions }),
				(0, _hyperapp.h)(_LeadImage.LeadImage, { state: state, actions: actions }),
				(0, _hyperapp.h)(_Background.Background, { state: state, actions: actions }),
				(0, _hyperapp.h)(_SeasonalMenu.SeasonalMenu, { state: state, actions: actions }),
				(0, _hyperapp.h)(_QuoteGenerator.QuoteGenerator, { state: state, actions: actions }),
				(0, _hyperapp.h)(_Contact.Contact, { state: state, actions: actions }),
				(0, _hyperapp.h)(_Reviews.Reviews, { state: state, actions: actions }),
				(0, _hyperapp.h)(_Reservations.Reservations, { state: state, actions: actions }),
				(0, _hyperapp.h)(_Promotions.Promotions, { state: state, actions: actions }),
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
//regular objects, no JSON
var restaurantInfo = {
  title: 'Prime Cut',
  phone: '(202) 555-5555',
  address: {
    state: 'New York',
    city: 'New York City',
    address: '167 E 4th St #2, New York, NY 10003'
  },
  email: 'fildonskoy@gmail.com'
};

var seasonalMenuData = [{
  title: 'Fillet Mignon',
  description: 'Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine',
  price: '$30'
}, {
  title: 'Beef Cutlet',
  description: 'Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine',
  price: '$20'
}, {
  title: 'Party Platter',
  description: 'Clean cut of fillet mignon surrounded by roasted red potatoes with rosemary, mushroom sauce, vine',
  price: '$50'
}];

var reviewsData = [{
  outlet: "HBO",
  quote: "Best restaurant that i used to experience!",
  body: "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones.",
  authorTitle: "Chef Extraordinaire",
  author: "Fredrick Helsing Von Heisenhoper"
}, {
  outlet: "HBO",
  quote: "Unlike any other!",
  body: "Unicorn banjo woke knausgaard af, viral plaid cold-pressed forage. Air plant cornhole man bun, squid tilde disrupt dreamcatcher. Pickled drinking vinegar polaroid selfies intelligentsia brooklyn meh farm-to-table kitsch glossier. Typewriter try-hard bushwick, celiac cloud bread ugh bicycle rights viral literally fam air plant man braid hexagon. Craft beer keytar quinoa iPhone swag irony fixie four dollar toast poutine prism.",
  authorTitle: "Executive Producer",
  author: "Dick Wolfe"
}, {
  outlet: "HBO",
  quote: "Coming back for fifths!",
  body: "Pickled cliche direct trade lyft. Drinking vinegar pabst stumptown organic gluten-free bespoke. Butcher subway tile quinoa air plant aesthetic brooklyn. Flexitarian snackwave trust fund hexagon leggings. Paleo microdosing tote bag crucifix fixie wayfarers jianbing art party hammock. Pitchfork schlitz yuccie chambray vegan austin sartorial swag roof party.",
  authorTitle: "Mayor",
  author: "Michael Bloomberg"
}, {
  outlet: "HBO",
  quote: "Stunning food and great recipe!",
  body: "IPhone four loko twee bitters. Beard etsy helvetica, thundercats readymade bushwick selvage taiyaki pop-up forage distillery. Pug tacos fingerstache, +1 lumbersexual intelligentsia lyft craft beer hoodie succulents bitters tumblr 8-bit. Cloud bread marfa wayfarers ugh aesthetic, mumblecore pour-over before they sold out tote bag letterpress godard dreamcatcher.",
  authorTitle: "Former First Lady",
  author: "Michelle Obama"
}, {
  outlet: "HBO",
  quote: "Superb experience and atmosphere!",
  body: "Cronut letterpress ugh, coloring book neutra fam gluten-free yr humblebrag tumeric knausgaard waistcoat banh mi ramps. Vexillologist taiyaki snackwave keytar, yuccie blog tacos tattooed tilde pug drinking vinegar flannel hoodie. Selfies prism tote bag chillwave mustache stumptown occupy cloud bread. VHS next level pabst swag marfa.",
  authorTitle: "Manager",
  author: "Michael Scott"
}];

var dankQuotesData = [{
  author: "Fil Don",
  quote: "I love cooking"
}, {
  author: "Fil Don",
  quote: "I love cooking"
}, {
  author: "Fil Don",
  quote: "I love cooking"
}];

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
  menu: 'inactive',
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
exports.default = Background;

var _hyperapp = __webpack_require__(0);

function Background(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "Background" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6" },
          (0, _hyperapp.h)(
            "h6",
            null,
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Cooking is the art of adjustment"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "Hella lyft cray put a bird on it art party squid pour-over swag organic irony listicle. Chia synth shaman everyday carry tbh, hot chicken pickled. VHS trust fund pitchfork cronut, venmo helvetica thundercats beard edison bulb hexagon offal portland chicharrones."
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "quote" },
            (0, _hyperapp.h)(
              "strong",
              null,
              "Chef Extraordinaire"
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
          (0, _hyperapp.h)("img", { src: "/img/lambChop.jpg!d" })
        )
      )
    )
  );
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token (5:2)\n\n  3 | export default function Contact({state, actions}) {\n  4 | \treturn (\n> 5 | \t\treturn (\n    | \t\t^\n  6 |     <section id=\"Contact\">\n  7 |       <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2381.7399040776495!2d-6.261147484122739!3d53.34791197997939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1462581622087\"\n  8 |       width=\"600\" height=\"450\" frameborder=\"0\" style=\"border:0\" allowfullscreen>\n");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
	var state = _ref.state,
	    actions = _ref.actions;

	return (0, _hyperapp.h)(
		"footer",
		{ id: "Footer" },
		(0, _hyperapp.h)(
			"div",
			{ className: "container" },
			(0, _hyperapp.h)(
				"nav",
				{ className: "footer-menu" },
				(0, _hyperapp.h)(
					"a",
					{ href: "#Header" },
					"Home"
				),
				(0, _hyperapp.h)(
					"p",
					null,
					"|"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#OurStory" },
					"About"
				),
				(0, _hyperapp.h)(
					"p",
					null,
					"|"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#SpecialMenu" },
					"Seasonal Menu"
				),
				(0, _hyperapp.h)(
					"p",
					null,
					"|"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#Reviews" },
					"Reviews"
				),
				(0, _hyperapp.h)(
					"p",
					null,
					"|"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#Reservations" },
					"Reservations"
				),
				(0, _hyperapp.h)(
					"p",
					null,
					"|"
				),
				(0, _hyperapp.h)(
					"a",
					{ href: "#ContactUs" },
					"Contact"
				)
			),
			(0, _hyperapp.h)(
				"ul",
				{ "class": "social-media" },
				(0, _hyperapp.h)(
					"li",
					null,
					(0, _hyperapp.h)(
						"a",
						{ href: "https://twitter.com/", target: "new" },
						(0, _hyperapp.h)("i", { "class": "fa fa-twitter", "aria-hidden": "true" })
					)
				),
				(0, _hyperapp.h)(
					"li",
					null,
					(0, _hyperapp.h)(
						"a",
						{ href: "https://www.facebook.com/", target: "new" },
						(0, _hyperapp.h)("i", { "class": "fa fa-facebook", "aria-hidden": "true" })
					)
				),
				(0, _hyperapp.h)(
					"li",
					null,
					(0, _hyperapp.h)(
						"a",
						{ href: "https://plus.google.com/discover", target: "new" },
						(0, _hyperapp.h)("i", { "class": "fa fa-google-plus", "aria-hidden": "true" })
					)
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
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
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

  return (
    //I'm going to keep using className so I don't forget about it
    //Hyper doesn't require it, but it is jsx standard
    (0, _hyperapp.h)(
      "section",
      { id: "LeadImage" },
      (0, _hyperapp.h)(
        "div",
        { className: "container" },
        (0, _hyperapp.h)(
          "div",
          { className: "title", "data-aos": "fade-right", "data-aos-once": "true" },
          (0, _hyperapp.h)(
            "h5",
            null,
            "Welcome"
          ),
          (0, _hyperapp.h)(
            "h1",
            null,
            " ",
            this.state.restaurantInfo.title,
            " "
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "contact-info", id: "contact-info", "data-aos-anchor": "#contact-info", "data-aos-anchor-placement": "top-bottom", "data-aos": "fade-up", "data-aos-once": "true" },
          (0, _hyperapp.h)(
            "div",
            null,
            "Call for reservations"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            state.restaurantInfo.phone
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "hours" },
            (0, _hyperapp.h)(
              "span",
              null,
              "Opening Hours: "
            ),
            (0, _hyperapp.h)(
              "span",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "Mon-Fri:"
              ),
              " 9am - 9pm "
            ),
            (0, _hyperapp.h)(
              "span",
              null,
              (0, _hyperapp.h)(
                "strong",
                null,
                "Weekend:"
              ),
              " 9am - 11:00pm "
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Promotions;

var _hyperapp = __webpack_require__(0);

function Promotions(_ref) {
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
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: Unexpected token, expected ; (15:5)\n\n  13 | \t        </div>\n  14 | \t      )\n> 15 | \t   })\n     | \t    ^\n  16 |   }\n  17 |   return (\n  18 |     <section id=\"Quote\">\n");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reservations;

var _hyperapp = __webpack_require__(0);

function Reservations(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "div",
    { id: "Reservations", className: "" + (state.times ? 'inactive' : '') },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "p",
        { className: "close", onclick: actions.close },
        "\xD7"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "reserveHeader" },
        "Place a Reservation"
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "reserveSubHeader" },
        "Fill out the form, secure your spot"
      ),
      (0, _hyperapp.h)(
        "form",
        { id: "ContactForm" },
        (0, _hyperapp.h)(
          "div",
          { className: "row" },
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { className: "form-group" },
              (0, _hyperapp.h)("input", { className: "form-control", "data-validation-required-message": "Please enter your name.", id: "name", placeholder: "Name *", required: "", type: "text", "aria-invalid": "false" }),
              (0, _hyperapp.h)(
                "p",
                { className: "help-block text-danger" },
                " "
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { className: "form-group" },
              (0, _hyperapp.h)("input", { className: "form-control", "data-validation-required-message": "Please enter your phone.", id: "name", placeholder: "Your Phone *", required: "", type: "text" }),
              (0, _hyperapp.h)(
                "p",
                { className: "help-block text-danger" },
                " "
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "row" },
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { className: "form-group" },
              (0, _hyperapp.h)("input", { className: "form-control", "data-validation-required-message": "Please enter your email.", id: "name", placeholder: "Email *", required: "", type: "text", "aria-invalid": "false" }),
              (0, _hyperapp.h)(
                "p",
                { className: "help-block text-danger" },
                " "
              )
            )
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "col-md-6" },
            (0, _hyperapp.h)(
              "div",
              { className: "form-group" },
              (0, _hyperapp.h)("input", { className: "form-control", "data-validation-required-message": "Please enter your date.", id: "name", placeholder: "Date *", required: "", type: "text" }),
              (0, _hyperapp.h)(
                "p",
                { className: "help-block text-danger" },
                " "
              )
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-12" },
          (0, _hyperapp.h)(
            "div",
            { className: "form-group" },
            (0, _hyperapp.h)("textarea", { className: "form-control", "data-validation-required-message": "Please enter a message.", id: "message", name: "message", placeholder: "Do You Have Any Special Requirements? *", required: "" }),
            (0, _hyperapp.h)(
              "p",
              { className: "help-block text-danger" },
              " "
            )
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "row" },
          (0, _hyperapp.h)(
            "div",
            { className: "col-lg-12 text-center" },
            (0, _hyperapp.h)(
              "div",
              { id: "success" },
              " "
            ),
            (0, _hyperapp.h)(
              "button",
              { className: "btn btn-contact", type: "button", onclick: actions.close },
              "Book"
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var searchReviews = function searchReviews() {
    return (0, _hyperapp.h)(
      "div",
      { className: "review" },
      (0, _hyperapp.h)(
        "div",
        { className: "reviewQuote" },
        "\"",
        state.reviews[currentReview].quote,
        "\""
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
  /* Refactored to include some ES6 funcs */
  /* Scroll function: Each review is indexed 1-4. If there is one in the que, (an index greater than 0), the arrow button will work.
  If the current index is equal to the max (length -1), the the arrow will not work and turn gray. (The boolean will switch to [? '' : 'ready '] from [? 'ready' : '']) */
  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "row" },
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6 second", "data-aos": "fade-right", "data-aos-once": "true" },
          (0, _hyperapp.h)("img", { src: "/img/chef.png" })
        ),
        (0, _hyperapp.h)(
          "div",
          { className: "col-md-6 first" },
          (0, _hyperapp.h)(
            "h6",
            null,
            "Review"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "What They're Saying"
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "reviewContainer", "data-aos": "fade-up", "data-aos-once": "true" },
            searchReviews()
          ),
          (0, _hyperapp.h)(
            "div",
            { className: "arrow", onclick: state.actions.reviewLeft },
            (0, _hyperapp.h)(
              "a",
              { onclick: actions.reviewLeft,
                href: "",
                className: "left " + (state.reviewIndex.current > 0 ? 'active' : '') },
              (0, _hyperapp.h)("i", { "class": "fas fa-arrow-left" })
            ),
            (0, _hyperapp.h)(
              "a",
              { onclick: actions.reviewRight,
                href: "", className: "right " + (state.reviewIndex.current < state.reviews.length - 1 ? 'active' : '') },
              (0, _hyperapp.h)("i", { "class": "fas fa-arrow-right" })
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SeasonalMenu;

var _hyperapp = __webpack_require__(0);

function SeasonalMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var searchMenu = function searchMenu() {
    return state.seasonalMenuData.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { className: "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { className: "box" },
          (0, _hyperapp.h)(
            "div",
            { className: "box-img" },
            (0, _hyperapp.h)(
              "div",
              { className: "price-circle" },
              item.price
            ),
            (0, _hyperapp.h)(
              "span",
              { className: "title" },
              item.title
            ),
            (0, _hyperapp.h)(
              "p",
              { className: "details" },
              item.description
            )
          )
        )
      );
    });
  };
  //this prints the stuff called up above
  return (0, _hyperapp.h)(
    "section",
    { id: "SeasonalMenu" },
    (0, _hyperapp.h)(
      "div",
      { className: "container" },
      (0, _hyperapp.h)(
        "div",
        { className: "hContainer", "data-aos": "fade", "data-aos-once": "true" },
        (0, _hyperapp.h)(
          "h6",
          null,
          "Seasonal Menu"
        ),
        (0, _hyperapp.h)(
          "h3",
          null,
          "Upcoming Summer Specials"
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "specialContainer", "data-aos": "fade-up", "data-aos-once": "true" },
        menuItems()
      ),
      (0, _hyperapp.h)(
        "div",
        { className: "menuLink", "data-aos": "fade", "data-aos-once": "true" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "View full menu"
        )
      )
    )
  );
}

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
    state: _globalState.globalState,
    view: function view(state, actions) {
      return (0, _hyperapp.h)("app", { state: state, actions: actions });
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
      }
      // load(state, actions) {}

    },
    mixins: [(0, _hyperappReduxDevtools2.default)()]
  });
};

/***/ })
],[23]);