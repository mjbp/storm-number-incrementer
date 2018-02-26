import NumberIncrementer from './libs/storm-number-incrementer';

const onDOMContentLoadedTasks = [() => {
    window.__INCREMENTERS__ = NumberIncrementer.init('.js-number-incrementer');
}];
    
if('addEventListener' in window) window.addEventListener('DOMContentLoaded', () => { onDOMContentLoadedTasks.forEach((fn) => fn()); });