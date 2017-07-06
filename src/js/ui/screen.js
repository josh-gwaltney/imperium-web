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
  _element;
  _canvas;

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
    return this._element;
  }

  get height(){
    return this.element.style.height;
  }

  get width(){
    return this.element.style.width;
  }

  get x(){
    return this.element.style.left;
  }

  get y(){
    return this.element.style.top;
  }

  get z(){
    return this.element.style.zIndex;
  }

  set height(val){
    this.element.style.height = val + 'px';
  }

  set width(val){
    this.element.style.width = val + 'px';
  }

  set x(val){
    this.element.style.left = val + 'px';
  }

  set y(val){
    this.element.style.top = val + 'px';
  }

  set z(val){
    this.element.style.zIndex = val;
  }
  /**
   * @constructor
   * [ description ]
   * @param  {Object} element - the HTML element used for the screen
   */
  constructor(element){
    this._element = element;
    this._init();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  toggle(){
    this._element.classList.toggle('hidden');
  }

  resize(height, width){

  }

  drag(x, y){

  }

  zoom(delta){

  }

  scroll(delta){

  }

  render(sprites){
    this._refresh();
    this._draw(sprites);
  }
  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _init(){
    this._canvas = document.createElement('canvas');
    this._element.append(this._canvas);
  }

  _refresh(){
    let height = this._element.clientHeight;
    let width = this._element.clientWidth;
    this._canvas.height = height;
    this._canvas.width = width;
  }

  _draw(sprites){
    let ctx = this._canvas.getContext('2d');
    ctx.save();
    //ctx.clearRect();
    ctx.fillStyle = '#FFFFFF';
    ctx.rect(0, 0, this._canvas.width, this._canvas.height);
    ctx.fill();

    sprites.forEach((x) => {
      x.render(ctx);
    });
    ctx.restore();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  static create(config){
    let element = document.createElement('div');
    element.id = config.id;
    element.style.height = config.height;
    element.style.width = config.width;
    element.style.left = config.x;
    element.style.top = config.y;
    element.style.zIndex = config.z;
    element.classList.add('window');

    return new Screen(element);
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Screen;