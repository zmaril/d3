// Takes in an object and returns all of the key-value pairs from the object. 

//A simple example: 
//           
// 
//              var ob = {a:1, b:2, c:3}
//              d3.entries(ob) == [{a:1}, {b:2}, {c:3}]

d3.entries = function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
};

//Next: [core/permute.js](/d3/src/core/permute.html)