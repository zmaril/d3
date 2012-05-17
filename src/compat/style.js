//A solution to fix the problem with IE9 and setting the style of an element.  
// 
// See [this commit](https://github.com/zmaril/d3/commit/c2e37352ac84eb8b4be89feed90bc2249866f715) for more information. 
 
//Does the error happen? 
// 
//If so then change the prototype to include a function that does what setProperty is supposed to. 

try {
  document.createElement("div").style.setProperty("opacity", 0, "");
} catch (error) {
  var d3_style_prototype = CSSStyleDeclaration.prototype,
      d3_style_setProperty = d3_style_prototype.setProperty;
  d3_style_prototype.setProperty = function(name, value, priority) {
    d3_style_setProperty.call(this, name, value + "", priority);
  };
}
