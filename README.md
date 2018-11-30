# attributechanged

[![Build Status](https://travis-ci.com/WebReflection/attributechanged.svg?branch=master)](https://travis-ci.com/WebReflection/attributechanged) ![WebReflection status](https://offline.report/status/webreflection.svg)


In less than 0.3K, it enables `attributechanged` element's listener, an ideal companion for [disconnected](https://github.com/WebReflection/disconnected).

The only optional dependencies it has is a constructable `Event` which must be passed along as configuration object, and a polyfill might be needed only for legacy browsers.

```js
// requires both modern Event and WeakSet
import attributechanged from 'attributechanged';
const observe = attributechanged({Event});

observe(mainElement);
mainElement.addEventListener('attributechanged', (e) => {
  console.log(
    e.target === mainElement, // true
    e.attributeName,          // any name
    e.oldValue,               // previous value or null
    e.newValue                // new value or null if removed
  );
});

observe(subElement);
observe(topElement);

// optionally listen to a list of filters only
observe(anyElement, ['only', 'some', 'attribute']);
```


### Compatibility

[Even IE9](https://webreflection.github.io/attributechanged/test/), as long as a usable `Event` is provided.


### DOM Level 0 Like events ?

Using [with-level-0](https://github.com/WebReflection/with-level-0) would make it possible to have `el.onattributechanged = ...` simplification too.
```js
withLevel0('attributechanged');

// remember to observe the node
var div = observe(document.createElement('div'));

// add your Level 0 listener
div.onattributechanged = function () {
  div.textContent = 'Level 0';
};

// that's it!
document.body.appendChild(div).setAttribute('test', 'ok');

// feel free to clean it up via
div.onattributechanged = null;
```
