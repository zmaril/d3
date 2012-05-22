//Given an array, this function provides a [linear combination](http://en.wikipedia.org/wiki/Linear_combination) with the elements of the array acting as a [basis](http://en.wikipedia.org/wiki/Basis_(linear_algebra)).

//Calls a function on each element as well. 
d3.mean = function(array, f) {
  var n = array.length,
      a,
      m = 0,
      i = -1,
      j = 0;
  if (arguments.length === 1) {
    while (++i < n) if (d3_number(a = array[i])) m += (a - m) / ++j;
  } else {
    while (++i < n) if (d3_number(a = f.call(array, array[i], i))) m += (a - m) / ++j;
  }
  return j ? m : undefined;
};

//Did you know that a mean is just a linear 
//Next: [core/median.js](/d3/src/core/median.html)