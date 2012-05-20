d3.entries = function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
};

//Next: [core/permute.js](/d3/src/core/permute.html)