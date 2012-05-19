d3.ascending = function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
};

//Next: [core/descending.js](/d3/src/core/descending.html)