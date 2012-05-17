//IE9 doesn't string coerce values. Errors were getting thrown left and right by this, so mbostock put in a shim for Date.now. 
// See [this commit](https://github.com/zmaril/d3/commit/c2e37352ac84eb8b4be89feed90bc2249866f715) for more information. 
if (!Date.now) Date.now = function() {
  return +new Date;
};
