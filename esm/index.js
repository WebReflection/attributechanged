/*! (c) Andrea Giammarchi */
function attributechanged(poly) {'use strict';
  var Event = poly.Event;
  return function observe(node) {
    try {
      (new MutationObserver(changes))
        .observe(node, {attributes: true, attributeOldValue: true});
    } catch(o_O) {
      node.addEventListener('DOMAttrModified', attrModified, true);
    }
    return node;
  };
  function attrModified(event) {
    dispatchEvent(event.target, event.attrName, event.prevValue);
  }
  function dispatchEvent(node, attributeName, oldValue) {
    var event = new Event('attributechanged');
    event.attributeName = attributeName;
    event.oldValue = oldValue;
    event.newValue = node.getAttribute(attributeName);
    node.dispatchEvent(event);
  }
  function changes(records) {
    for (var record, i = 0, length = records.length; i < length; i++) {
      record = records[i];
      dispatchEvent(record.target, record.attributeName, record.oldValue);
    }
  }
}
export default attributechanged;
