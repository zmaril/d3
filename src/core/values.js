d3.values = function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
};

//Next: [core/entries.js](/d3/src/core/entries.html)