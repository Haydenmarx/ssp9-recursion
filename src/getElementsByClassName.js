// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  var loopdocument = function(item) {
    if (item.classList && item.classList.contains(className)) {
      result.push(item);
    }
    item.childNodes.forEach(function(x, i) {
      loopdocument(item.childNodes[i]);
    });
    return result;
  };
  loopdocument(document.body);
  return result;
};