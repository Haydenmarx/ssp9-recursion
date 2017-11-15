// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if array
  if (Array.isArray(obj)) {
    return '[' + 
            obj.map(function(item) {
              return stringifyJSON(item);
            }) +
            ']';
  //if object  --already checked array, still need to check null and primitives
  } else if (typeof obj === 'object' && obj !== null) {
    var objKeys = Object.keys(obj);
    return '{' +
           objKeys.map(function(key) {
             if (typeof obj[key] !== 'undefined' && typeof obj[key] !== 'function') {
               var strKey = stringifyJSON(key);
               var value = stringifyJSON(obj[key]);
               return strKey + ':' + value;
             }
           }).filter(function(x) { return x !== undefined; }) +
           '}';
  }
  //null + primitives
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  return String(obj);
};