/*! (c) Andrea Giammarchi */
function attributechanged(t){"use strict";function e(t){a(t.target,t.attrName,t.prevValue)}function a(t,e,a){var r=new n("attributechanged");r.attributeName=e,r.oldValue=a,r.newValue=t.getAttribute(e),t.dispatchEvent(r)}function r(t){for(var e,r=0,n=t.length;r<n;r++)e=t[r],a(e.target,e.attributeName,e.oldValue)}var n=t.Event;return function(t){try{new MutationObserver(r).observe(t,{attributes:!0,attributeOldValue:!0})}catch(a){t.addEventListener("DOMAttrModified",e,!0)}return t}}