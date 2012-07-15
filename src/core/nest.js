//d3.nest may be one of the most underappericated set of functions of
//d3. Take a look at the [API wiki for the overview of what nest and
//it's functions do](https://github.com/mbostock/d3/wiki/Arrays). What
//nest does is allow a developer to create a hierarchy for a flat set of
//objects. So, if you have a big csv of items, you can start grouping
//them by their characteristics. Here's an example of how to use d3.nest
//
//             d3.map({a:1}).get('a') == 1
// 
//             var books = [ 
//                 {title: "Hackers & Painters", author: "Paul Graham"},
//                 {title: "On Lisp", author: "Paul Graham"},
//                 {title: "Harry Potter and the Philsopher's Stone", author: "J.K. Rowling"},
//                 {title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling"},
//                 {title: "Harry Potter and the Order of the Phoenix", author: "J.K. Rowling"},
//                 {title: "If I did it", author: "O.J. Simpson"}
//              ] 
// 
//              var BooksByAuthor = d3.nest()
//                  .key(function(d){ return d.author})
//                  .entries(books)
//Test

//Boolean function that tells whether or not the key is in the map. 
// 
//             d3.map({a:1}).has('a') == true

d3.nest = function() {
  var nest = {},
      keys = [],
      sortKeys = [],
      sortValues,
      rollup;

  function map(array, depth) {
    if (depth >= keys.length) return rollup
        ? rollup.call(nest, array) : (sortValues
        ? array.sort(sortValues)
        : array);

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        object,
        valuesByKey = new d3_Map,
        values,
        o = {};

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(object = array[i]))) {
        values.push(object);
      } else {
        valuesByKey.set(keyValue, [object]);
      }
    }

    valuesByKey.forEach(function(keyValue) {
      o[keyValue] = map(valuesByKey.get(keyValue), depth);
    });

    return o;
  }

  function entries(map, depth) {
    if (depth >= keys.length) return map;

    var a = [],
        sortKey = sortKeys[depth++],
        key;

    for (key in map) {
      a.push({key: key, values: entries(map[key], depth)});
    }

    if (sortKey) a.sort(function(a, b) {
      return sortKey(a.key, b.key);
    });

    return a;
  }

  nest.map = function(array) {
    return map(array, 0);
  };

  nest.entries = function(array) {
    return entries(map(array, 0), 0);
  };

  nest.key = function(d) {
    keys.push(d);
    return nest;
  };

  // Specifies the order for the most-recently specified key.
  // Note: only applies to entries. Map keys are unordered!
  nest.sortKeys = function(order) {
    sortKeys[keys.length - 1] = order;
    return nest;
  };

  // Specifies the order for leaf values.
  // Applies to both maps and entries array.
  nest.sortValues = function(order) {
    sortValues = order;
    return nest;
  };

  nest.rollup = function(f) {
    rollup = f;
    return nest;
  };

  return nest;
};

//Next: [core/keys.js](/d3/src/core/keys.html)