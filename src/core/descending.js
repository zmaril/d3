d3.descending = function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
};

//Next: [core/mean.js](/d3/src/core/mean.html)