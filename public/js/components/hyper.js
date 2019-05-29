webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var actions = exports.actions = {
	up: up,
	intro: intro,
	showMenu: showMenu
};

function up(state, actions) {
	return { count: state.count + 1 };
}

function showMenu() {}

function intro(state, actions) {
	console.log('Just fired off an action');
	return { count: state.count + 1 };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _LeadImage = __webpack_require__(6);

var _LeadImage2 = _interopRequireDefault(_LeadImage);

var _Background = __webpack_require__(4);

var _Background2 = _interopRequireDefault(_Background);

var _SeasonalMenu = __webpack_require__(7);

var _SeasonalMenu2 = _interopRequireDefault(_SeasonalMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
	var state = _ref.state,
	    actions = _ref.actions;

	return (
		//do this to pass down state to every component
		React.createElement(
			'div',
			{ 'class': 'app' },
			React.createElement(_Header2.default, { state: state, actions: actions }),
			React.createElement(_LeadImage2.default, { state: state, actions: actions }),
			React.createElement(_Background2.default, { state: state, actions: actions }),
			React.createElement(SpecialMenu, { state: state, actions: state })
		)
	);
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var globalState = exports.globalState = {
  count: 0
};

/***/ }),
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

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
/* 6 */
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
						"D.C. Steakhouse"
					)
				),
				React.createElement(
					"div",
					{ className: "contact-info" },
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
	);
}

/***/ }),
/* 7 */
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

	return React.createElement(
		"section",
		{ id: "SpecialMenu" },
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
				React.createElement(
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
								{ className: "pricey-boy" },
								"$39"
							)
						),
						"//TODO: come back to this for the portfolio site",
						React.createElement(
							"span",
							{ className: "title" },
							"Come back to this"
						),
						React.createElement(
							"p",
							{ "class": "details" },
							"Some details to add later"
						)
					)
				),
				React.createElement(
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
								{ className: "pricey-boy" },
								"$39"
							)
						),
						"//TODO: come back to this for the portfolio site",
						React.createElement(
							"span",
							{ className: "title" },
							"Come back to this"
						),
						React.createElement(
							"p",
							{ "class": "details" },
							"Some details to add later"
						)
					)
				),
				React.createElement(
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
								{ className: "pricey-boy" },
								"$39"
							)
						),
						"//TODO: come back to this for the portfolio site",
						React.createElement(
							"span",
							{ className: "title" },
							"Come back to this"
						),
						React.createElement(
							"p",
							{ "class": "details" },
							"Some details to add later"
						)
					)
				)
			),
			React.createElement(
				"a",
				{ href: "#", className: "link" },
				" View Menu"
			)
		)
	);
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _globalState = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _hyperapp.app)({
  state: { globalState: _globalState.globalState },
  view: function view(state, actions) {
    return React.createElement(_App2.default, { state: state, actions: actions });
  },
  root: document.getElementById('app'),
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
  }
});

/***/ })
],[8]);