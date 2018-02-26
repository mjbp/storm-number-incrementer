/**
 * @name storm-number-incrementer: Numeric input incrementer
 * @version 0.1.3: Mon, 26 Feb 2018 10:33:12 GMT
 * @author stormid
 * @license MIT
 */
const CONSTANTS = {
		TRIGGER_EVENTS: ['click', 'keydown'],
		TRIGGER_KEYCODES: [13, 32],
	},
	defaults = {
		min: 0,
		max: 100,
		callback: false
	},
	findAncestorButton = node => {
		let match = false;
		while(!match){
			if(node.hasAttribute('data-change')) match = node;
			node = node.parentNode;
		}
		return match;
	};


const StormNumberIncrementer = {
	init(){
		this.max = this.input.getAttribute('max') || this.settings.max;
		this.min = this.input.getAttribute('min') || this.settings.min;

		this.boundHandler = this.handler.bind(this);

		CONSTANTS.TRIGGER_EVENTS.forEach(trigger => { 
			this.btns.forEach(btn => {
				btn.addEventListener(trigger, this.boundHandler);
			});
		});

		return this;
	},
	handler(e){
		if(!!e.keyCode && !~CONSTANTS.TRIGGER_KEYCODES.indexOf(e.keyCode)) return;
		this.input.value = this[findAncestorButton(e.target).getAttribute('data-change')]();
		(!!this.settings.callback && typeof this.settings.callback === 'function') && this.settings.callback.call(this);
	},
	increment(){
		return parseInt(this.input.value) + 1 > this.max ? this.max : parseInt(this.input.value) + 1;
	},
	decrement(){
		return parseInt(this.input.value) - 1 < this.min ? this.min : parseInt(this.input.value) - 1;
	},
	destroy() {
		CONSTANTS.TRIGGER_EVENTS.forEach(trigger => { 
			this.btns.forEach(btn => {
				btn.removeEventListener(trigger, this.boundHandler);
			});
		});
	}
};

const init = (sel, opts) => {
	let els = [].slice.call(document.querySelectorAll(sel));
	
	if(!els.length) return;

	return els.map((el) => Object.assign(Object.create(StormNumberIncrementer), {
			node: el,
			input: el.querySelector('input'),
			btns: [].slice.call(el.querySelectorAll('[data-change]')),
			settings: Object.assign({}, defaults, opts)
		}).init());
};

export default { init };