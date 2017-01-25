(function( global ) {
  "use strict";

  var shape = {};

  function BaseShape() {
    // ..
  }

  BaseShape.prototype.constructor = BaseShape;

  function 0Shape() {
    // ..
  }

  0Shape.prototype = new BaseShape();
  0Shape.prototype.constructor = 0Shape;

  // Pack all the shape classes in one object (name)
  Shape.0 = 0Shape;

  // Export the shape namespace to the global scope
  global.Shape = Shape;
}( window ))
