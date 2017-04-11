/**
 * @name storm-number-incrementer: Numeric input incrementer
 * @version 0.1.0: Tue, 11 Apr 2017 16:59:55 GMT
 * @author stormid
 * @license MIT
 */
const CONSTANTS = {
		TRIGGER_EVENTS: ['click', 'keydown'],
		TRIGGER_KEYCODES: [13, 32],
	},
	defaults = {
		min: 100,
		max: 0
	};

const StormNumberIncrementer = {
	init(){
		this.max = this.input.getAttribute('max') || this.settings.max;
		this.min = this.input.getAttribute('min') || this.settings.min;

		let boundTriggered = this.handleTriggered.bind(this);

		CONSTANTS.TRIGGER_EVENTS.forEach(trigger => { 
			this.btns.forEach(btn => {
				btn.addEventListener(trigger, e => { boundTriggered(e, btn);});
			});
		});

		return this;
	},
	handleTriggered(e, btn){
		if(!!e.keyCode && !~CONSTANTS.TRIGGER_KEYCODES.indexOf(e.keyCode)) return;
		this[btn.getAttribute('data-change')]();
	},
	increment(){
		this.input.value = parseInt(this.input.value) + 1 > this.max ? this.max : parseInt(this.input.value) + 1;
	},
	decrement(){
		this.input.value = parseInt(this.input.value) - 1 < this.min ? this.min : parseInt(this.input.value) - 1;
	}
};

const init = (sel, opts) => {
	let els = [].slice.call(document.querySelectorAll(sel));
	
	if(!els.length) return;

	return els.map((el) => {
		return Object.assign(Object.create(StormNumberIncrementer), {
			node: el,
			input: el.querySelector('input'),
			btns: [].slice.call(el.querySelectorAll('[data-change]')),
			settings: Object.assign({}, defaults, opts)
		}).init();
	});
};

export default { init };