/**
 * Imperium 4X (Web) - Display
 * ===
 *
 * @module display
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class Display {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _parentelement;
  _canvas;
  _xOffset;
  _yOffset;
  _scale;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor(config){
    this._parentElement = null;
    this._canvas = null;
    this._xOffset = null;
    this._yOffset = null;
    this._scale = null;

    this._init(config);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  drag(){

  }

  scroll(){

  }

  zoom(){

  }

  render(){
    this._refresh();
    this._draw();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _init(config){

    this._parentElement = document.getElementById(config.id);
    this._canvas = document.createElement('canvas');
    this._parentElement.append(this._canvas);

    this._refresh();
  }

  _refresh(){
    let height = this._parentElement.clientHeight;
    let width = this._parentElement.clientWidth;

    this._canvas.height = height;
    this._canvas.width = width;
  }

  _draw(){

  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  static create(config){

  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Display;