/**
 * @name storm-number-incrementer: Numeric input incrementer
 * @version 0.1.0: Tue, 06 Jun 2017 09:40:25 GMT
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
	max: 100
};

var StormNumberIncrementer = {
	init: function init() {
		var _this = this;

		this.max = this.input.getAttribute('max') || this.settings.max;
		this.min = this.input.getAttribute('min') || this.settings.min;

		var boundTriggered = this.handleTriggered.bind(this);

		CONSTANTS.TRIGGER_EVENTS.forEach(function (trigger) {
			_this.btns.forEach(function (btn) {
				btn.addEventListener(trigger, function (e) {
					boundTriggered(e, btn);
				});
			});
		});

		return this;
	},
	handleTriggered: function handleTriggered(e, btn) {
		if (!!e.keyCode && !~CONSTANTS.TRIGGER_KEYCODES.indexOf(e.keyCode)) return;
		this[btn.getAttribute('data-change')]();
	},
	increment: function increment() {
		this.input.value = parseInt(this.input.value) + 1 > this.max ? this.max : parseInt(this.input.value) + 1;
	},
	decrement: function decrement() {
		this.input.value = parseInt(this.input.value) - 1 < this.min ? this.min : parseInt(this.input.value) - 1;
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
