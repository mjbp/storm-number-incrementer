/**
 * @name storm-number-incrementer: Numeric input incrementer
 * @version 0.1.3: Mon, 26 Feb 2018 10:33:13 GMT
 * @author stormid
 * @license MIT
 */
(function(root, factory) {
   var mod = {
       exports: {}
   };
   if (typeof exports !== 'undefined'){
       mod.exports = exports
       factory(mod.exports)
       module.exports = mod.exports.default
   } else {
       factory(mod.exports);
       root.StormNumberIncrementer = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var CONSTANTS = {
	TRIGGER_EVENTS: ['click', 'keydown'],
	TRIGGER_KEYCODES: [13, 32]
},
    defaults = {
	min: 0,
	max: 100,
	callback: false
},
    findAncestorButton = function findAncestorButton(node) {
	var match = false;
	while (!match) {
		if (node.hasAttribute('data-change')) match = node;
		node = node.parentNode;
	}
	return match;
};

var StormNumberIncrementer = {
	init: function init() {
		var _this = this;

		this.max = this.input.getAttribute('max') || this.settings.max;
		this.min = this.input.getAttribute('min') || this.settings.min;

		this.boundHandler = this.handler.bind(this);

		CONSTANTS.TRIGGER_EVENTS.forEach(function (trigger) {
			_this.btns.forEach(function (btn) {
				btn.addEventListener(trigger, _this.boundHandler);
			});
		});

		return this;
	},
	handler: function handler(e) {
		if (!!e.keyCode && !~CONSTANTS.TRIGGER_KEYCODES.indexOf(e.keyCode)) return;
		this.input.value = this[findAncestorButton(e.target).getAttribute('data-change')]();
		!!this.settings.callback && typeof this.settings.callback === 'function' && this.settings.callback.call(this);
	},
	increment: function increment() {
		return parseInt(this.input.value) + 1 > this.max ? this.max : parseInt(this.input.value) + 1;
	},
	decrement: function decrement() {
		return parseInt(this.input.value) - 1 < this.min ? this.min : parseInt(this.input.value) - 1;
	},
	destroy: function destroy() {
		var _this2 = this;

		CONSTANTS.TRIGGER_EVENTS.forEach(function (trigger) {
			_this2.btns.forEach(function (btn) {
				btn.removeEventListener(trigger, _this2.boundHandler);
			});
		});
	}
};

var init = function init(sel, opts) {
	var els = [].slice.call(document.querySelectorAll(sel));

	if (!els.length) return;

	return els.map(function (el) {
		return Object.assign(Object.create(StormNumberIncrementer), {
			node: el,
			input: el.querySelector('input'),
			btns: [].slice.call(el.querySelectorAll('[data-change]')),
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

exports.default = { init: init };;
}));
