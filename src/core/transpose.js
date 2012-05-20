d3.transpose = function(matrix) {
  return d3.zip.apply(d3, matrix);
};

//Next: [core/zip.js](/d3/src/core/zip.html)