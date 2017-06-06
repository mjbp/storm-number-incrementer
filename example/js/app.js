(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _stormNumberIncrementer = require('./libs/storm-number-incrementer');

var _stormNumberIncrementer2 = _interopRequireDefault(_stormNumberIncrementer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onDOMContentLoadedTasks = [function () {
    _stormNumberIncrementer2.default.init('.js-number-incrementer');
}];

if ('addEventListener' in window) window.addEventListener('DOMContentLoaded', function () {
    onDOMContentLoadedTasks.forEach(function (fn) {
        return fn();
    });
});

},{"./libs/storm-number-incrementer":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * @name storm-number-incrementer: Numeric input incrementer
 * @version 0.1.0: Tue, 06 Jun 2017 09:40:24 GMT
 * @author stormid
 * @license MIT
 */
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

exports.default = { init: init };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLW51bWJlci1pbmNyZW1lbnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7OztBQUVBLElBQU0sMEJBQTBCLENBQUMsWUFBTTtBQUNuQyxxQ0FBa0IsSUFBbEIsQ0FBdUIsd0JBQXZCO0FBQ0gsQ0FGK0IsQ0FBaEM7O0FBSUEsSUFBRyxzQkFBc0IsTUFBekIsRUFBaUMsT0FBTyxnQkFBUCxDQUF3QixrQkFBeEIsRUFBNEMsWUFBTTtBQUFFLDRCQUF3QixPQUF4QixDQUFnQyxVQUFDLEVBQUQ7QUFBQSxlQUFRLElBQVI7QUFBQSxLQUFoQztBQUFnRCxDQUFwRzs7Ozs7Ozs7QUNOakM7Ozs7OztBQU1BLElBQU0sWUFBWTtBQUNoQixpQkFBZ0IsQ0FBQyxPQUFELEVBQVUsU0FBVixDQURBO0FBRWhCLG1CQUFrQixDQUFDLEVBQUQsRUFBSyxFQUFMO0FBRkYsQ0FBbEI7QUFBQSxJQUlDLFdBQVc7QUFDVixNQUFLLENBREs7QUFFVixNQUFLO0FBRkssQ0FKWjs7QUFTQSxJQUFNLHlCQUF5QjtBQUM5QixLQUQ4QixrQkFDeEI7QUFBQTs7QUFDTCxPQUFLLEdBQUwsR0FBVyxLQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEtBQXhCLEtBQWtDLEtBQUssUUFBTCxDQUFjLEdBQTNEO0FBQ0EsT0FBSyxHQUFMLEdBQVcsS0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixLQUF4QixLQUFrQyxLQUFLLFFBQUwsQ0FBYyxHQUEzRDs7QUFFQSxNQUFJLGlCQUFpQixLQUFLLGVBQUwsQ0FBcUIsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBckI7O0FBRUEsWUFBVSxjQUFWLENBQXlCLE9BQXpCLENBQWlDLG1CQUFXO0FBQzNDLFNBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsZUFBTztBQUN4QixRQUFJLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLGFBQUs7QUFBRSxvQkFBZSxDQUFmLEVBQWtCLEdBQWxCO0FBQXdCLEtBQTdEO0FBQ0EsSUFGRDtBQUdBLEdBSkQ7O0FBTUEsU0FBTyxJQUFQO0FBQ0EsRUFkNkI7QUFlOUIsZ0JBZjhCLDJCQWVkLENBZmMsRUFlWCxHQWZXLEVBZVA7QUFDdEIsTUFBRyxDQUFDLENBQUMsRUFBRSxPQUFKLElBQWUsQ0FBQyxDQUFDLFVBQVUsZ0JBQVYsQ0FBMkIsT0FBM0IsQ0FBbUMsRUFBRSxPQUFyQyxDQUFwQixFQUFtRTtBQUNuRSxPQUFLLElBQUksWUFBSixDQUFpQixhQUFqQixDQUFMO0FBQ0EsRUFsQjZCO0FBbUI5QixVQW5COEIsdUJBbUJuQjtBQUNWLE9BQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsU0FBUyxLQUFLLEtBQUwsQ0FBVyxLQUFwQixJQUE2QixDQUE3QixHQUFpQyxLQUFLLEdBQXRDLEdBQTRDLEtBQUssR0FBakQsR0FBdUQsU0FBUyxLQUFLLEtBQUwsQ0FBVyxLQUFwQixJQUE2QixDQUF2RztBQUNBLEVBckI2QjtBQXNCOUIsVUF0QjhCLHVCQXNCbkI7QUFDVixPQUFLLEtBQUwsQ0FBVyxLQUFYLEdBQW1CLFNBQVMsS0FBSyxLQUFMLENBQVcsS0FBcEIsSUFBNkIsQ0FBN0IsR0FBaUMsS0FBSyxHQUF0QyxHQUE0QyxLQUFLLEdBQWpELEdBQXVELFNBQVMsS0FBSyxLQUFMLENBQVcsS0FBcEIsSUFBNkIsQ0FBdkc7QUFDQTtBQXhCNkIsQ0FBL0I7O0FBMkJBLElBQU0sT0FBTyxTQUFQLElBQU8sQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFlO0FBQzNCLEtBQUksTUFBTSxHQUFHLEtBQUgsQ0FBUyxJQUFULENBQWMsU0FBUyxnQkFBVCxDQUEwQixHQUExQixDQUFkLENBQVY7O0FBRUEsS0FBRyxDQUFDLElBQUksTUFBUixFQUFnQjs7QUFFaEIsUUFBTyxJQUFJLEdBQUosQ0FBUSxVQUFDLEVBQUQsRUFBUTtBQUN0QixTQUFPLE9BQU8sTUFBUCxDQUFjLE9BQU8sTUFBUCxDQUFjLHNCQUFkLENBQWQsRUFBcUQ7QUFDM0QsU0FBTSxFQURxRDtBQUUzRCxVQUFPLEdBQUcsYUFBSCxDQUFpQixPQUFqQixDQUZvRDtBQUczRCxTQUFNLEdBQUcsS0FBSCxDQUFTLElBQVQsQ0FBYyxHQUFHLGdCQUFILENBQW9CLGVBQXBCLENBQWQsQ0FIcUQ7QUFJM0QsYUFBVSxPQUFPLE1BQVAsQ0FBYyxFQUFkLEVBQWtCLFFBQWxCLEVBQTRCLElBQTVCO0FBSmlELEdBQXJELEVBS0osSUFMSSxFQUFQO0FBTUEsRUFQTSxDQUFQO0FBUUEsQ0FiRDs7a0JBZWUsRUFBRSxVQUFGLEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IE51bWJlckluY3JlbWVudGVyIGZyb20gJy4vbGlicy9zdG9ybS1udW1iZXItaW5jcmVtZW50ZXInO1xuXG5jb25zdCBvbkRPTUNvbnRlbnRMb2FkZWRUYXNrcyA9IFsoKSA9PiB7XG4gICAgTnVtYmVySW5jcmVtZW50ZXIuaW5pdCgnLmpzLW51bWJlci1pbmNyZW1lbnRlcicpO1xufV07XG4gICAgXG5pZignYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHsgb25ET01Db250ZW50TG9hZGVkVGFza3MuZm9yRWFjaCgoZm4pID0+IGZuKCkpOyB9KTsiLCIvKipcbiAqIEBuYW1lIHN0b3JtLW51bWJlci1pbmNyZW1lbnRlcjogTnVtZXJpYyBpbnB1dCBpbmNyZW1lbnRlclxuICogQHZlcnNpb24gMC4xLjA6IFR1ZSwgMDYgSnVuIDIwMTcgMDk6NDA6MjQgR01UXG4gKiBAYXV0aG9yIHN0b3JtaWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5jb25zdCBDT05TVEFOVFMgPSB7XG5cdFx0VFJJR0dFUl9FVkVOVFM6IFsnY2xpY2snLCAna2V5ZG93biddLFxuXHRcdFRSSUdHRVJfS0VZQ09ERVM6IFsxMywgMzJdLFxuXHR9LFxuXHRkZWZhdWx0cyA9IHtcblx0XHRtaW46IDAsXG5cdFx0bWF4OiAxMDBcblx0fTtcblxuY29uc3QgU3Rvcm1OdW1iZXJJbmNyZW1lbnRlciA9IHtcblx0aW5pdCgpe1xuXHRcdHRoaXMubWF4ID0gdGhpcy5pbnB1dC5nZXRBdHRyaWJ1dGUoJ21heCcpIHx8IHRoaXMuc2V0dGluZ3MubWF4O1xuXHRcdHRoaXMubWluID0gdGhpcy5pbnB1dC5nZXRBdHRyaWJ1dGUoJ21pbicpIHx8IHRoaXMuc2V0dGluZ3MubWluO1xuXG5cdFx0bGV0IGJvdW5kVHJpZ2dlcmVkID0gdGhpcy5oYW5kbGVUcmlnZ2VyZWQuYmluZCh0aGlzKTtcblxuXHRcdENPTlNUQU5UUy5UUklHR0VSX0VWRU5UUy5mb3JFYWNoKHRyaWdnZXIgPT4geyBcblx0XHRcdHRoaXMuYnRucy5mb3JFYWNoKGJ0biA9PiB7XG5cdFx0XHRcdGJ0bi5hZGRFdmVudExpc3RlbmVyKHRyaWdnZXIsIGUgPT4geyBib3VuZFRyaWdnZXJlZChlLCBidG4pO30pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblx0aGFuZGxlVHJpZ2dlcmVkKGUsIGJ0bil7XG5cdFx0aWYoISFlLmtleUNvZGUgJiYgIX5DT05TVEFOVFMuVFJJR0dFUl9LRVlDT0RFUy5pbmRleE9mKGUua2V5Q29kZSkpIHJldHVybjtcblx0XHR0aGlzW2J0bi5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hhbmdlJyldKCk7XG5cdH0sXG5cdGluY3JlbWVudCgpe1xuXHRcdHRoaXMuaW5wdXQudmFsdWUgPSBwYXJzZUludCh0aGlzLmlucHV0LnZhbHVlKSArIDEgPiB0aGlzLm1heCA/IHRoaXMubWF4IDogcGFyc2VJbnQodGhpcy5pbnB1dC52YWx1ZSkgKyAxO1xuXHR9LFxuXHRkZWNyZW1lbnQoKXtcblx0XHR0aGlzLmlucHV0LnZhbHVlID0gcGFyc2VJbnQodGhpcy5pbnB1dC52YWx1ZSkgLSAxIDwgdGhpcy5taW4gPyB0aGlzLm1pbiA6IHBhcnNlSW50KHRoaXMuaW5wdXQudmFsdWUpIC0gMTtcblx0fVxufTtcblxuY29uc3QgaW5pdCA9IChzZWwsIG9wdHMpID0+IHtcblx0bGV0IGVscyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWwpKTtcblx0XG5cdGlmKCFlbHMubGVuZ3RoKSByZXR1cm47XG5cblx0cmV0dXJuIGVscy5tYXAoKGVsKSA9PiB7XG5cdFx0cmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShTdG9ybU51bWJlckluY3JlbWVudGVyKSwge1xuXHRcdFx0bm9kZTogZWwsXG5cdFx0XHRpbnB1dDogZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKSxcblx0XHRcdGJ0bnM6IFtdLnNsaWNlLmNhbGwoZWwucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2hhbmdlXScpKSxcblx0XHRcdHNldHRpbmdzOiBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0cywgb3B0cylcblx0XHR9KS5pbml0KCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgeyBpbml0IH07Il19
