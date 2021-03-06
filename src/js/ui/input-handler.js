/**
 * Imperium 4X (Web) - Input Handler
 * ===
 *
 * @module inputHandler
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
class InputHandler {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _messageBus;
  _state;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor(messageBus){
    this._messageBus = messageBus;

    this._mouse = {
      x: 0,
      y: 0
    };

    this._state = {
      mouse: {
        down: false,
        x: 0,
        y: 0
      },
      keyboard: {
        m: false,
        d: false,
        t: false,
        c: false,
        e: false
      }
    };

    this._init();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _init(){
    document.addEventListener('keydown', (event) => this._handleKeyDown(event));
    document.addEventListener('mousedown', (event) => this._handleMouseDown(event));
    document.addEventListener('mouseup', (event) => this._handleMouseUp(event));
    document.addEventListener('mousewheel', (event) => this._handleMouseWheel(event));
    document.addEventListener('contextmenu', (event) => { event.preventDefault(); });
  }

  _handleMouseDown(event){
    event.preventDefault();
    if(event.button === 0){
      this._mouse.x = event.clientX;
      this._mouse.y = event.clientY;
      this._messageBus.publish({ subject: 'INPUT', body: {
          type: 'click',
          elementId: event.target.parentElement.id,
          x: this._mouse.x,
          y: this._mouse.y
        }
      });
    }
  }

  _handleMouseUp(event){
    event.preventDefault();
    if(event.button === 0) {
      let absX = Math.abs(this._mouse.x - event.clientX);
      let absY = Math.abs(this._mouse.y - event.clientY);
      if ((absX > 10) || (absY > 10)) {
        this._messageBus.publish({
          subject: 'INPUT', body: {
            type: 'drag',
            elementId: event.target.parentElement.id,
            x1: this._mouse.x,
            y1: this._mouse.y,
            x2: event.clientX,
            y2: event.clientY
          }
        });
      }
    }
  }

  _handleMouseWheel(event){
    event.preventDefault();
    this._messageBus.publish({ subject: 'INPUT', body: {
      type: 'zoom',
      elementId: event.target.parentElement.id,
      deltaY: event.deltaY
    } });
  }

  _handleKeyDown(event){
    this._messageBus.publish({ subject: 'INPUT',
      body: {
        type: 'keyboard',
        keyCode: event.keyCode
      } });
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default InputHandler;