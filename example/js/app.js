(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(require,module,exports){
'use strict';

var _stormNumberIncrementer = require('./libs/storm-number-incrementer');

var _stormNumberIncrementer2 = _interopRequireDefault(_stormNumberIncrementer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var onDOMContentLoadedTasks = [function () {
    window.__INCREMENTERS__ = _stormNumberIncrementer2.default.init('.js-number-incrementer');
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
 * @version 0.1.3: Mon, 26 Feb 2018 10:33:12 GMT
 * @author stormid
 * @license MIT
 */
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

exports.default = { init: init };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJleGFtcGxlL3NyYy9hcHAuanMiLCJleGFtcGxlL3NyYy9saWJzL3N0b3JtLW51bWJlci1pbmNyZW1lbnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7Ozs7O0FBRUEsSUFBTSwyQkFBMkIsWUFBTSxBQUNuQztXQUFBLEFBQU8sbUJBQW1CLGlDQUFBLEFBQWtCLEtBQTVDLEFBQTBCLEFBQXVCLEFBQ3BEO0FBRkQsQUFBZ0MsQ0FBQTs7QUFJaEMsSUFBRyxzQkFBSCxBQUF5QixlQUFRLEFBQU8saUJBQVAsQUFBd0Isb0JBQW9CLFlBQU0sQUFBRTs0QkFBQSxBQUF3QixRQUFRLFVBQUEsQUFBQyxJQUFEO2VBQUEsQUFBUTtBQUF4QyxBQUFnRDtBQUFwRyxDQUFBOzs7Ozs7OztBQ05qQzs7Ozs7O0FBTUEsSUFBTTtpQkFDWSxDQUFBLEFBQUMsU0FERCxBQUNBLEFBQVUsQUFDMUI7bUJBQWtCLENBQUEsQUFBQyxJQUZyQixBQUFrQixBQUVFLEFBQUs7QUFGUCxBQUNoQjtJQUdEO01BQVcsQUFDTCxBQUNMO01BRlUsQUFFTCxBQUNMO1dBUEYsQUFJWSxBQUdBO0FBSEEsQUFDVjtJQUlELHFCQUFxQixTQUFyQixBQUFxQix5QkFBUSxBQUM1QjtLQUFJLFFBQUosQUFBWSxBQUNaO1FBQU0sQ0FBTixBQUFPLE9BQU0sQUFDWjtNQUFHLEtBQUEsQUFBSyxhQUFSLEFBQUcsQUFBa0IsZ0JBQWdCLFFBQUEsQUFBUSxBQUM3QztTQUFPLEtBQVAsQUFBWSxBQUNaO0FBQ0Q7UUFBQSxBQUFPLEFBQ1A7QUFoQkY7O0FBbUJBLElBQU07QUFBeUIsdUJBQ3hCO2NBQ0w7O09BQUEsQUFBSyxNQUFNLEtBQUEsQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixVQUFVLEtBQUEsQUFBSyxTQUFsRCxBQUEyRCxBQUMzRDtPQUFBLEFBQUssTUFBTSxLQUFBLEFBQUssTUFBTCxBQUFXLGFBQVgsQUFBd0IsVUFBVSxLQUFBLEFBQUssU0FBbEQsQUFBMkQsQUFFM0Q7O09BQUEsQUFBSyxlQUFlLEtBQUEsQUFBSyxRQUFMLEFBQWEsS0FBakMsQUFBb0IsQUFBa0IsQUFFdEM7O1lBQUEsQUFBVSxlQUFWLEFBQXlCLFFBQVEsbUJBQVcsQUFDM0M7U0FBQSxBQUFLLEtBQUwsQUFBVSxRQUFRLGVBQU8sQUFDeEI7UUFBQSxBQUFJLGlCQUFKLEFBQXFCLFNBQVMsTUFBOUIsQUFBbUMsQUFDbkM7QUFGRCxBQUdBO0FBSkQsQUFNQTs7U0FBQSxBQUFPLEFBQ1A7QUFkNkIsQUFlOUI7QUFmOEIsMkJBQUEsQUFldEIsR0FBRSxBQUNUO01BQUcsQ0FBQyxDQUFDLEVBQUYsQUFBSSxXQUFXLENBQUMsQ0FBQyxVQUFBLEFBQVUsaUJBQVYsQUFBMkIsUUFBUSxFQUF2RCxBQUFvQixBQUFxQyxVQUFVLEFBQ25FO09BQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFLLG1CQUFtQixFQUFuQixBQUFxQixRQUFyQixBQUE2QixhQUFyRCxBQUFtQixBQUFLLEFBQTBDLEFBQ2pFO0dBQUMsQ0FBQyxLQUFBLEFBQUssU0FBUCxBQUFnQixZQUFZLE9BQU8sS0FBQSxBQUFLLFNBQVosQUFBcUIsYUFBbEQsQUFBK0QsY0FBZSxLQUFBLEFBQUssU0FBTCxBQUFjLFNBQWQsQUFBdUIsS0FBckcsQUFBOEUsQUFBNEIsQUFDMUc7QUFuQjZCLEFBb0I5QjtBQXBCOEIsaUNBb0JuQixBQUNWO1NBQU8sU0FBUyxLQUFBLEFBQUssTUFBZCxBQUFvQixTQUFwQixBQUE2QixJQUFJLEtBQWpDLEFBQXNDLE1BQU0sS0FBNUMsQUFBaUQsTUFBTSxTQUFTLEtBQUEsQUFBSyxNQUFkLEFBQW9CLFNBQWxGLEFBQTJGLEFBQzNGO0FBdEI2QixBQXVCOUI7QUF2QjhCLGlDQXVCbkIsQUFDVjtTQUFPLFNBQVMsS0FBQSxBQUFLLE1BQWQsQUFBb0IsU0FBcEIsQUFBNkIsSUFBSSxLQUFqQyxBQUFzQyxNQUFNLEtBQTVDLEFBQWlELE1BQU0sU0FBUyxLQUFBLEFBQUssTUFBZCxBQUFvQixTQUFsRixBQUEyRixBQUMzRjtBQXpCNkIsQUEwQjlCO0FBMUI4Qiw2QkEwQnBCO2VBQ1Q7O1lBQUEsQUFBVSxlQUFWLEFBQXlCLFFBQVEsbUJBQVcsQUFDM0M7VUFBQSxBQUFLLEtBQUwsQUFBVSxRQUFRLGVBQU8sQUFDeEI7UUFBQSxBQUFJLG9CQUFKLEFBQXdCLFNBQVMsT0FBakMsQUFBc0MsQUFDdEM7QUFGRCxBQUdBO0FBSkQsQUFLQTtBQWhDRixBQUErQjtBQUFBLEFBQzlCOztBQWtDRCxJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxLQUFELEFBQU0sTUFBUyxBQUMzQjtLQUFJLE1BQU0sR0FBQSxBQUFHLE1BQUgsQUFBUyxLQUFLLFNBQUEsQUFBUyxpQkFBakMsQUFBVSxBQUFjLEFBQTBCLEFBRWxEOztLQUFHLENBQUMsSUFBSixBQUFRLFFBQVEsQUFFaEI7O1lBQU8sQUFBSSxJQUFJLFVBQUEsQUFBQyxJQUFEO2dCQUFRLEFBQU8sT0FBTyxPQUFBLEFBQU8sT0FBckIsQUFBYyxBQUFjO1NBQXlCLEFBQ3BFLEFBQ047VUFBTyxHQUFBLEFBQUcsY0FGZ0UsQUFFbkUsQUFBaUIsQUFDeEI7U0FBTSxHQUFBLEFBQUcsTUFBSCxBQUFTLEtBQUssR0FBQSxBQUFHLGlCQUhtRCxBQUdwRSxBQUFjLEFBQW9CLEFBQ3hDO2FBQVUsT0FBQSxBQUFPLE9BQVAsQUFBYyxJQUFkLEFBQWtCLFVBSlAsQUFBcUQsQUFJaEUsQUFBNEI7QUFKb0MsQUFDMUUsR0FEcUIsRUFBUixBQUFRLEFBS25CO0FBTEosQUFBTyxBQU1QLEVBTk87QUFMUjs7a0JBYWUsRUFBRSxNLEFBQUYiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsImltcG9ydCBOdW1iZXJJbmNyZW1lbnRlciBmcm9tICcuL2xpYnMvc3Rvcm0tbnVtYmVyLWluY3JlbWVudGVyJztcblxuY29uc3Qgb25ET01Db250ZW50TG9hZGVkVGFza3MgPSBbKCkgPT4ge1xuICAgIHdpbmRvdy5fX0lOQ1JFTUVOVEVSU19fID0gTnVtYmVySW5jcmVtZW50ZXIuaW5pdCgnLmpzLW51bWJlci1pbmNyZW1lbnRlcicpO1xufV07XG4gICAgXG5pZignYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHsgb25ET01Db250ZW50TG9hZGVkVGFza3MuZm9yRWFjaCgoZm4pID0+IGZuKCkpOyB9KTsiLCIvKipcbiAqIEBuYW1lIHN0b3JtLW51bWJlci1pbmNyZW1lbnRlcjogTnVtZXJpYyBpbnB1dCBpbmNyZW1lbnRlclxuICogQHZlcnNpb24gMC4xLjM6IE1vbiwgMjYgRmViIDIwMTggMTA6MzM6MTIgR01UXG4gKiBAYXV0aG9yIHN0b3JtaWRcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5jb25zdCBDT05TVEFOVFMgPSB7XG5cdFx0VFJJR0dFUl9FVkVOVFM6IFsnY2xpY2snLCAna2V5ZG93biddLFxuXHRcdFRSSUdHRVJfS0VZQ09ERVM6IFsxMywgMzJdLFxuXHR9LFxuXHRkZWZhdWx0cyA9IHtcblx0XHRtaW46IDAsXG5cdFx0bWF4OiAxMDAsXG5cdFx0Y2FsbGJhY2s6IGZhbHNlXG5cdH0sXG5cdGZpbmRBbmNlc3RvckJ1dHRvbiA9IG5vZGUgPT4ge1xuXHRcdGxldCBtYXRjaCA9IGZhbHNlO1xuXHRcdHdoaWxlKCFtYXRjaCl7XG5cdFx0XHRpZihub2RlLmhhc0F0dHJpYnV0ZSgnZGF0YS1jaGFuZ2UnKSkgbWF0Y2ggPSBub2RlO1xuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblx0XHR9XG5cdFx0cmV0dXJuIG1hdGNoO1xuXHR9O1xuXG5cbmNvbnN0IFN0b3JtTnVtYmVySW5jcmVtZW50ZXIgPSB7XG5cdGluaXQoKXtcblx0XHR0aGlzLm1heCA9IHRoaXMuaW5wdXQuZ2V0QXR0cmlidXRlKCdtYXgnKSB8fCB0aGlzLnNldHRpbmdzLm1heDtcblx0XHR0aGlzLm1pbiA9IHRoaXMuaW5wdXQuZ2V0QXR0cmlidXRlKCdtaW4nKSB8fCB0aGlzLnNldHRpbmdzLm1pbjtcblxuXHRcdHRoaXMuYm91bmRIYW5kbGVyID0gdGhpcy5oYW5kbGVyLmJpbmQodGhpcyk7XG5cblx0XHRDT05TVEFOVFMuVFJJR0dFUl9FVkVOVFMuZm9yRWFjaCh0cmlnZ2VyID0+IHsgXG5cdFx0XHR0aGlzLmJ0bnMuZm9yRWFjaChidG4gPT4ge1xuXHRcdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcih0cmlnZ2VyLCB0aGlzLmJvdW5kSGFuZGxlcik7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXHRoYW5kbGVyKGUpe1xuXHRcdGlmKCEhZS5rZXlDb2RlICYmICF+Q09OU1RBTlRTLlRSSUdHRVJfS0VZQ09ERVMuaW5kZXhPZihlLmtleUNvZGUpKSByZXR1cm47XG5cdFx0dGhpcy5pbnB1dC52YWx1ZSA9IHRoaXNbZmluZEFuY2VzdG9yQnV0dG9uKGUudGFyZ2V0KS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2hhbmdlJyldKCk7XG5cdFx0KCEhdGhpcy5zZXR0aW5ncy5jYWxsYmFjayAmJiB0eXBlb2YgdGhpcy5zZXR0aW5ncy5jYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykgJiYgdGhpcy5zZXR0aW5ncy5jYWxsYmFjay5jYWxsKHRoaXMpO1xuXHR9LFxuXHRpbmNyZW1lbnQoKXtcblx0XHRyZXR1cm4gcGFyc2VJbnQodGhpcy5pbnB1dC52YWx1ZSkgKyAxID4gdGhpcy5tYXggPyB0aGlzLm1heCA6IHBhcnNlSW50KHRoaXMuaW5wdXQudmFsdWUpICsgMTtcblx0fSxcblx0ZGVjcmVtZW50KCl7XG5cdFx0cmV0dXJuIHBhcnNlSW50KHRoaXMuaW5wdXQudmFsdWUpIC0gMSA8IHRoaXMubWluID8gdGhpcy5taW4gOiBwYXJzZUludCh0aGlzLmlucHV0LnZhbHVlKSAtIDE7XG5cdH0sXG5cdGRlc3Ryb3koKSB7XG5cdFx0Q09OU1RBTlRTLlRSSUdHRVJfRVZFTlRTLmZvckVhY2godHJpZ2dlciA9PiB7IFxuXHRcdFx0dGhpcy5idG5zLmZvckVhY2goYnRuID0+IHtcblx0XHRcdFx0YnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIodHJpZ2dlciwgdGhpcy5ib3VuZEhhbmRsZXIpO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmNvbnN0IGluaXQgPSAoc2VsLCBvcHRzKSA9PiB7XG5cdGxldCBlbHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsKSk7XG5cdFxuXHRpZighZWxzLmxlbmd0aCkgcmV0dXJuO1xuXG5cdHJldHVybiBlbHMubWFwKChlbCkgPT4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFN0b3JtTnVtYmVySW5jcmVtZW50ZXIpLCB7XG5cdFx0XHRub2RlOiBlbCxcblx0XHRcdGlucHV0OiBlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLFxuXHRcdFx0YnRuczogW10uc2xpY2UuY2FsbChlbC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jaGFuZ2VdJykpLFxuXHRcdFx0c2V0dGluZ3M6IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRzLCBvcHRzKVxuXHRcdH0pLmluaXQoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB7IGluaXQgfTsiXX0=
