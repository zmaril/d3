d3.json = function(url, callback) {
  d3.text(url, "application/json", function(text) {
    callback(text ? JSON.parse(text) : null);
  });
};

//Next: [core/html.js](/d3/src/core/html.html)