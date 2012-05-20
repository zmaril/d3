d3_transitionPrototype.duration = function(value) {
  var groups = this;
  return groups.each(typeof value === "function"
      ? function(d, i, j) { groups[j][i].duration = Math.max(1, value.apply(this, arguments) | 0); }
      : (value = Math.max(1, value | 0), function(d, i, j) { groups[j][i].duration = value; }));
};

//Next: [core/transition-each.js](/d3/src/core/transition-each.html)