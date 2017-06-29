/**
 * Imperium 4X (Web) - Screen
 * ===
 *
 * @module screen
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
class Screen {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @property
   * @private
   * @type { [ type ] } [ name ]
   * [ description ]
   */
  _id;
  _x = null;
  _y = null;
  _z = null;
  _height = null;
  _width = null;
  _element = null;
  _hidden = null;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @property
   * @public
   * @type { [ type ] } [ name ]
   * @returns { [ type ] } [ name ]
   * [ description ]
   */
  get element(){
    let element = document.getElementById(this._parentId);
    return element;
  }

  /**
   * @constructor
   * [ description ]
   * @param  { [ type ]} [ name ] - [ description ]
   */
  constructor(config){
    this._id = config.id;
    this._x = config.x;
    this._y = config.y;
    this._z = config.z;
    this._height = config.height;
    this._width = config.width;
    this._xOffset = config.xOffset;
    this._yOffset = config.yOffset;
    this._scale = config.scale;

    this._init();
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
    let element = document.createElement('div');
    element.id = this._id;
    element.style.height = this._height;

    this._id = config.id;
    this._element = document.createElement('div');
    this._element.id = config.id;
    this._element.style.width = config.width;
    this._element.style.height = config.height;
    this._element.classList.add('window');
    this._element.style.top = config.y;
    this._element.style.left = config.x;
    this._element.style.zIndex = config.z;

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
    let element = document.createElement('div');
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Screen;