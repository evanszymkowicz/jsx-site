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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return actions; });
//this the only part of the app that uses actions
var arrowLeft = function arrowLeft(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewCount.currentReview - 1
    }
  };
};

var arrowRight = function arrowRight(state, actions) {
  return {
    reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    }
  };
};

var actions = {
  arrowLeft: arrowLeft,
  arrowRight: arrowRight,
  intro: intro,
  // showMenu,
  closeMenu: closeMenu,
  close: close
};

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = App;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Header_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__LeadImage_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Background_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SeasonalMenu_js__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__QuoteGenerator_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Contact_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Reviews_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Reservations_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Promotions_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Footer_js__ = __webpack_require__(15);












function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return React.createElement(
    "div",
    { "class": 'app' },
    React.createElement(__WEBPACK_IMPORTED_MODULE_1__Header_js__["a" /* default */], { state: state, actions: actions })
  );
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return globalState; });
var companyInfo = {
  //regular object, no JSON
  title: " Restaurant",
  phone: "202-555-5555",
  location: "Washington, D.C."
};

var seasonalMenu = [{
  title: "",
  description: "",
  price: 25
}];

var reviews = [{
  author: "",
  outlet: "",
  authorID: "",
  slugLine: "",
  review: ""
}];

var dankQuotes = [{
  author: "",
  quote: ""
}];

var globalState = {
  count: 0,
  companyInfo: companyInfo, //older versions of JS would require setting the property equal to the variable
  seasonalMenu: seasonalMenu,
  reviews: reviews,
  dankQuotes: dankQuotes,
  reviewCount: {
    currentReview: 1
  }
};

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);


function Background(_ref) {
	var state = _ref.state,
	    actions = _ref.actions;

	return React.createElement(
		"section",
		{ id: "Background" },
		React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"div",
				{ className: "row" },
				React.createElement(
					"div",
					{ className: "col-md-6" },
					React.createElement(
						"h5",
						{ className: "comp-title" },
						"About us:"
					),
					React.createElement(
						"h2",
						null,
						"Because when you think Washington, you think steaks"
					),
					React.createElement("p", null),
					React.createElement(
						"div",
						{ className: "quote" },
						React.createElement("i", null),
						"Joe Schmo"
					),
					React.createElement(
						"a",
						{ href: "#", className: "reserve-btn" },
						"Reservations"
					)
				),
				React.createElement(
					"div",
					{ className: "col-md-6" },
					React.createElement("div", { className: "vide-img" })
				)
			)
		)
	);
}

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);


function Contact(_ref) {
	var state = _ref.state,
	    actions = _ref.actions;

	return React.createElement(
		"section",
		{ id: "contact", className: "texturebg" },
		React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"h5",
				{ className: "comp-title" },
				"Contact"
			),
			React.createElement("h2", null),
			React.createElement(
				"div",
				{ className: "box" },
				React.createElement(
					"div",
					{ className: "row" },
					React.createElement(
						"div",
						{ className: "col-md-6" },
						React.createElement(
							"div",
							{ className: "city" },
							state.companyInfo.location
						),
						React.createElement(
							"h6",
							{ className: "address" },
							"123 Somewhere Avenue",
							React.createElement("br", null),
							"Washington, D.C."
						),
						React.createElement(
							"p",
							null,
							React.createElement(
								"strong",
								null,
								"email us:"
							),
							React.createElement(
								"a",
								{ href: "mailto:info@steakjoint.com" },
								"info@steakjoint.com"
							)
						)
					),
					React.createElement(
						"div",
						{ className: "col-md-6" },
						React.createElement(
							"h6",
							null,
							"Lunch"
						),
						React.createElement(
							"div",
							{ className: "hours" },
							"202 555-555"
						),
						React.createElement(
							"p",
							null,
							"Come back to this ",
							React.createElement("br", null)
						),
						React.createElement(
							"h6",
							null,
							"Dinner"
						),
						React.createElement(
							"div",
							{ className: "hours" },
							"202 555-555"
						),
						React.createElement(
							"p",
							null,
							"Come back to this ",
							React.createElement("br", null)
						)
					)
				)
			)
		)
	);
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);


function Footer(_ref) {
	var state = _ref.state,
	    actions = _ref.actions;

	return React.createElement(
		"footer",
		{ id: "Footer" },
		React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"nav",
				{ className: "footer-menu" },
				React.createElement(
					"a",
					{ href: "#Header" },
					"Home"
				),
				React.createElement(
					"a",
					{ href: "#Header" },
					"Home"
				),
				React.createElement(
					"p",
					null,
					"|"
				),
				React.createElement(
					"a",
					{ href: "#OurStory" },
					"About"
				),
				React.createElement(
					"p",
					null,
					"|"
				),
				React.createElement(
					"a",
					{ href: "#SpecialMenu" },
					"Seasonal Menu"
				),
				React.createElement(
					"p",
					null,
					"|"
				),
				React.createElement(
					"a",
					{ href: "#Reviews" },
					"Reviews"
				),
				React.createElement(
					"p",
					null,
					"|"
				),
				React.createElement(
					"a",
					{ href: "#Reservations" },
					"Reservations"
				),
				React.createElement(
					"p",
					null,
					"|"
				),
				React.createElement(
					"a",
					{ href: "#ContactUs" },
					"Contact"
				)
			),
			React.createElement(
				"ul",
				{ "class": "social-media" },
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "https://twitter.com/", target: "new" },
						React.createElement("i", { "class": "fa fa-twitter", "aria-hidden": "true" })
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "https://www.facebook.com/", target: "new" },
						React.createElement("i", { "class": "fa fa-facebook", "aria-hidden": "true" })
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{ href: "https://plus.google.com/discover", target: "new" },
						React.createElement("i", { "class": "fa fa-google-plus", "aria-hidden": "true" })
					)
				)
			),
			React.createElement(
				"div",
				{ "class": "copyright" },
				React.createElement("i", { "class": "fa fa-copyright", "aria-hidden": "true" }),
				"Evan Szymkowicz",
				React.createElement("br", null),
				"2019"
			)
		)
	);
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Header;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);

//	I'm going to keep using className so I don't forget about it
//	Hyper doesn't require it, but it is jsx standard

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return React.createElement(
    "header",
    null,
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "logo" },
        "Logo"
      ),
      React.createElement(
        "nav",
        null,
        React.createElement(
          "a",
          { href: "#" },
          "Home"
        ),
        React.createElement(
          "a",
          { href: "#" },
          "Locations"
        ),
        React.createElement(
          "a",
          { href: "#" },
          "Rewards"
        ),
        React.createElement(
          "a",
          { href: "#" },
          "Reservations"
        )
      )
    )
  );
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);


function LeadImage(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  // console.log(state.globalState.companyInfo.title)
  return (
    //I'm going to keep using className so I don't forget about it
    //Hyper doesn't require it, but it is jsx standard
    React.createElement(
      "section",
      { id: "LeadImage" },
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "title" },
          React.createElement(
            "h5",
            null,
            "Welcome"
          ),
          React.createElement(
            "h1",
            null,
            this.state.globalState.companyInfo.title
          )
        ),
        React.createElement(
          "div",
          { className: "contact-info" },
          React.createElement(
            "div",
            { className: "container" },
            React.createElement(
              "div",
              { className: "book" },
              "Call us Today"
            ),
            React.createElement(
              "h2",
              null,
              "(202) 555-5555"
            ),
            React.createElement(
              "div",
              { className: "hours" },
              "Hours ",
              React.createElement(
                "strong",
                null,
                "Mon - Wed: "
              ),
              " 4:30p.m. - 11:45 p.m.",
              React.createElement(
                "strong",
                null,
                "Thurs - Sat: "
              ),
              " 4:00.m. - 1:00 a.m."
            )
          )
        )
      )
    )
  );
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);


function Promotions(_ref) {
	var state = _ref.state,
	    actions = _ref.actions;

	return React.createElement(
		"section",
		{ id: "Promotions" },
		React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"h6",
				{ "data-aos": "fade", "data-aos-once": "true" },
				"News"
			),
			React.createElement(
				"h3",
				{ "data-aos": "fade", "data-aos-once": "true" },
				"Promotions"
			),
			React.createElement(
				"div",
				{ className: "specialContainer" },
				React.createElement("div", {
					className: "box image1",
					"data-aos": "fade-right",
					"data-aos-once": "true"
				}),
				React.createElement(
					"div",
					{ className: "box event", "data-aos": "fade-right", "data-aos-once": "true" },
					React.createElement(
						"div",
						{ className: "eventTitle" },
						"Beef Sauteed onions - Let's enjoy!"
					),
					React.createElement(
						"div",
						{ className: "divider" },
						"-----------------"
					),
					React.createElement(
						"div",
						{ className: "eventDetails" },
						React.createElement(
							"div",
							{ className: "eventAddress" },
							"49-49 Tortellini Ave, Pastafari, Italy"
						),
						React.createElement(
							"div",
							{ className: "eventTime" },
							"10:00 AM - 11:00 AM"
						),
						React.createElement(
							"div",
							{ className: "eventDate" },
							"March 3rd, 2018"
						)
					)
				),
				React.createElement(
					"div",
					{ className: "box event", "data-aos": "fade-right", "data-aos-once": "true" },
					React.createElement(
						"div",
						{ className: "eventTitle" },
						"Art photography in foody"
					),
					React.createElement(
						"div",
						{ className: "divider" },
						"-----------------"
					),
					React.createElement(
						"div",
						{ className: "eventDetails" },
						React.createElement(
							"div",
							{ className: "eventAddress" },
							"162 Hamilton St, Macbeth Township, Shakespeare"
						),
						React.createElement(
							"div",
							{ className: "eventTime" },
							"3:00 PM - 7:00 PM"
						),
						React.createElement(
							"div",
							{ className: "eventDate" },
							"April 20th, 2018"
						)
					)
				),
				React.createElement("div", {
					className: "box image2",
					"data-aos": "fade-right",
					"data-aos-once": "true"
				})
			)
		)
	);
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);


function QuoteGenerator(_ref) {
	var state = _ref.state,
	    actions = _ref.actions;

	return React.createElement(
		"section",
		{ id: "QuoteGenerator", className: "texturebg" },
		React.createElement(
			"div",
			{ className: "container" },
			React.createElement(
				"h1",
				null,
				"What They're Saying:"
			),
			React.createElement("span", { className: "John J. Doe" })
		)
	);
}

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);


function Reservations(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return React.createElement(
    "div",
    { id: "Reservations", className: "" + (state.times ? "inactive" : "") },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "p",
        { className: "close", onclick: actions.close },
        "\xD7"
      ),
      React.createElement(
        "div",
        { className: "reserveHeader" },
        "Reservations"
      ),
      React.createElement(
        "div",
        { className: "reserveSubHeader" },
        "Fill out the form, secure your spot"
      ),
      React.createElement(
        "form",
        { id: "ContactForm" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-6" },
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("input", {
                className: "form-control",
                "data-validation-required-message": "Please enter your name.",
                id: "name",
                placeholder: "Name *",
                required: "",
                type: "text",
                "aria-invalid": "false"
              }),
              React.createElement(
                "p",
                { className: "help-block text-danger" },
                " "
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6" },
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("input", {
                className: "form-control",
                "data-validation-required-message": "Please enter your phone.",
                id: "name",
                placeholder: "Your Phone *",
                required: "",
                type: "text"
              }),
              React.createElement(
                "p",
                { className: "help-block text-danger" },
                " "
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-6" },
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("input", {
                className: "form-control",
                "data-validation-required-message": "Please enter your email.",
                id: "name",
                placeholder: "Email *",
                required: "",
                type: "text",
                "aria-invalid": "false"
              }),
              React.createElement(
                "p",
                { className: "help-block text-danger" },
                " "
              )
            )
          ),
          React.createElement(
            "div",
            { className: "col-md-6" },
            React.createElement(
              "div",
              { className: "form-group" },
              React.createElement("input", {
                className: "form-control",
                "data-validation-required-message": "Please enter your date.",
                id: "name",
                placeholder: "Date *",
                required: "",
                type: "text"
              }),
              React.createElement(
                "p",
                { className: "help-block text-danger" },
                " "
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "col-md-12" },
          React.createElement(
            "div",
            { className: "form-group" },
            React.createElement("textarea", {
              className: "form-control",
              "data-validation-required-message": "Please enter a message.",
              id: "message",
              name: "message",
              placeholder: "Do You Have Any Special Requirements? *",
              required: ""
            }),
            React.createElement(
              "p",
              { className: "help-block text-danger" },
              " "
            )
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-lg-12 text-center" },
            React.createElement(
              "div",
              { id: "success" },
              " "
            ),
            React.createElement(
              "button",
              {
                className: "btn btn-contact",
                type: "button",
                onclick: actions.close
              },
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);


function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var searchReviews = function searchReviews() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h5",
        { className: "comp-title" },
        "What They're Saying"
      ),
      React.createElement(
        "h2",
        null,
        state.reviews[state.reviewCount.currentReview].outlet
      ),
      React.createElement(
        "h4",
        null,
        state.reviews[state.reviewCount.currentReview].slugLine
      ),
      React.createElement(
        "p",
        null,
        state.reviews[state.reviewCount.currentReview].review
      ),
      React.createElement(
        "div",
        { className: "auth" },
        React.createElement(
          "strong",
          null,
          state.reviews[state.reviewCount.currentReview].author,
          " -",
          React.createElement(
            "em",
            null,
            state.reviews[state.reviewCount.currentReview].authorID
          )
        )
      )
    );
  };

  var smashThatLeftClick = function smashThatLeftClick() {
    if (state.reviewCount.currentReview == 0) {
      //console.log('we gucci')
    } else {
      actions.arrowLeftBtn();
    }
  };

  var smashThatRightClick = function smashThatRightClick() {
    if (state.reviewCount.currentReview == state.reviews.length - 1) {
      //console.log('we gucci')
    } else {
      actions.arrowRightBtn();
    }
  };

  return React.createElement(
    "section",
    { id: "Reviews" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-8" },
          React.createElement("img", { src: "" })
        )
      ),
      React.createElement(
        "div",
        { className: "col-md-4" },
        searchReviews(),
        React.createElement(
          "div",
          { className: "decoration" },
          React.createElement("i", { onClick: smashThatLeftClick,
            className: "fa fa-arrow-left " + (state.reviewCount.currentReview > 0 ? 'ready' : ''),
            "aria-hidden": "true" }),
          React.createElement("i", { onClick: smashThatRightClick,
            className: "fa fa-arrow-right " + (state.reviewCount.currentReview == state.reviews.length - 1 ? '' : 'ready'), "aria-hidden": "true" })
        )
      )
    )
  );
}

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);


function SeasonalMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var searchMenu = function searchMenu() {
    return state.seasonalMenu.map(function (item) {
      return React.createElement(
        "div",
        { className: "col-md-4" },
        React.createElement(
          "div",
          { className: "box" },
          React.createElement(
            "div",
            { className: "box-img" },
            React.createElement(
              "div",
              { className: "price-circle" },
              item.price
            ),
            React.createElement(
              "span",
              { className: "title" },
              item.title
            ),
            React.createElement(
              "p",
              { className: "details" },
              item.description
            )
          )
        )
      );
    });
  };

  return React.createElement(
    "section",
    { id: "SpecialMenu", className: "texturebg" },
    React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "h5",
        { className: "comp-title" },
        "Seasonal Menu"
      ),
      React.createElement(
        "h2",
        null,
        "Upcoming Summer Specialties"
      ),
      React.createElement(
        "div",
        { className: "row boxes" },
        searchMenu()
      ),
      React.createElement(
        "a",
        { href: "#", className: "link" },
        " ",
        "View Menu"
      )
    )
  );
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hyperapp__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hyperapp_redux_devtools__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_hyperapp_redux_devtools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_hyperapp_redux_devtools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_globalState_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_App_js__ = __webpack_require__(10);






window.onload = function () {
  //This should fix the render bug
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__components_App_js__["a" /* default */])({
    state: __WEBPACK_IMPORTED_MODULE_3__state_globalState_js__["a" /* globalState */],
    view: function view(state, actions) {
      return React.createElement("app", { state: state, actions: actions });
    },
    root: document.getElementById("app"),
    actions: __WEBPACK_IMPORTED_MODULE_2__actions_actions_js__["a" /* actions */],
    events: {
      action: function action(state, actions, _ref) {
        var name = _ref.name,
            data = _ref.data;

        console.group("Action Info");
        console.log("Name:", name);
        console.log("Data:", data);
        console.groupEnd();
      },
      load: function load(state, actions) {}
    },
    mixins: [__WEBPACK_IMPORTED_MODULE_1_hyperapp_redux_devtools___default()()]
  });
};

/***/ })
],[23]);