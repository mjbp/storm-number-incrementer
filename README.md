# Storm Number Incrementer

[![Build Status](https://travis-ci.org/mjbp/storm-number-incrementer.svg?branch=master)](https://travis-ci.org/mjbp/storm-number-incrementer)
[![codecov.io](http://codecov.io/github/mjbp/storm-number-incrementer/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-number-incrementer?branch=master)
[![npm version](https://badge.fury.io/js/storm-number-incrementer.svg)](https://badge.fury.io/js/storm-number-incrementer)

Numeric input incrementer

## Example
[https://mjbp.github.io/storm-number-incrementer](https://mjbp.github.io/storm-number-incrementer)

## Usage
HTML
```
<div class="field__container js-number-incrementer">
    <button type="button" class="field__number-btn" data-change="decrement">
        <svg class="field__number-icon" fill="#575755" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <title>Decrease</title>
            <path d="M19 13H5v-2h14v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    </button>
    <input class="field field__number" type="text" id="7" name="7" value="0" min="0" max="10" readonly>
    <button type="button" class="field__number-btn" data-change="increment">
        <svg class="field__number-icon" fill="#575755" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
            <title>Increase</title>
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
        </svg>
    </button>
    <label class="field__number-label" for="7">Label</label>
</div>

```
CSS
Example CSS implementation
```
.field__container {
    position: relative;
    display: block;
}
.field__number-btn {
    display: inline-block;
    padding: 12px 18px;
    cursor: pointer;
    vertical-align: middle;
}
.field__number-icon {
    position: relative;
    top: 3px;
}
.field {
    color: #575755;
    width: 100%;
    padding: 18px;
    background: transparent;
    border: 1px solid #D0D0D0;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    display: block;
    font-size: 16px;
    text-align: left;
    z-index: 1;
    position: relative;
    -webkit-transition: border-color 120ms ease;
    transition: border-color 120ms ease;
}
.field__number {
    display: inline-block;
    vertical-align: middle;
    width: 70px;
    text-align: center;
    height: 55px;
    background-color: #fff;
}
.field__number-btn {
    display: inline-block;
    padding: 12px 18px;
    cursor: pointer;
    vertical-align: middle;
    background-color: transparent;
    border-radius: 0;
    border: 0 none;
}
.field__number-label {
    padding: 0 15px;
}
```
JS
```
npm i -S storm-number-incrementer
```
either using es6 import
```
import NumberIncrementer from 'storm-number-incrementer';

NumberIncrementer.init('.js-number-incrementer');
```
asynchronous browser loading (use the .standalone version in the /dist folder) using the global name (Storm + capitalised package name)
```
import Load from 'storm-load';

Load('{{path}}/storm-number-incrementer.standalone.js')
    .then(() => {
        StormNumberIncrementer.init('.js-number-incrementer');
    });
```

## Options
```
{
    min: 100,   //can be overridden in min/max attributes on the input
    max: 0
}
```

## Tests
```
npm run test
```

## Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

The es5 version depends upon Object.assign, element.classList, and Promises so all evergreen browsers are supported out of the box, ie9+ is supported with polyfills. ie8+ will work with even more polyfills for Array functions and eventListeners.

## Dependencies
None

## License
MIT