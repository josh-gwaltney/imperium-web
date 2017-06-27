/**
 *
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

import Window from './window';
import Display from './display';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

export default class WindowManager {

  constructor(config){
    this._messageBus = config.SERVICES.MESSAGE_BUS;

    this._windows = {};
    this._rootElement = null;

    this._init(config);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  handleInputEvent(msg){
    switch(msg.type){
      case 'click':
        this._handleClick(msg);
        break;
      case 'drag':
        this._handleDrag(msg);
        break;
      case 'zoom':
        this._handleZoom(msg);
        break;
      case 'keyboard':
        this._handleKeyboard(msg);
        break;
    }
  }

  createWindow(config){
    let window = new Window(config);
    this._windows[config.id] = window;
    let element = window.element;
    this._rootElement.append(window.element);
    let display = new Display(config);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  _init(config){
    const UI = config.UI;
    const MESSAGES = config.MESSAGES;
    this._messageBus.subscribe(MESSAGES.INPUT_EVENT, (x) => this.handleInputEvent(x));
    this._rootElement = document.getElementById(config.UI.ROOT_ELEMENT_ID);

    let windows = config.UI.WINDOWS;

    windows.forEach((obj) => {
      this.createWindow(obj);
    });
  }

  _handleClick(msg){
    console.log('x: ' + msg.x + ' y: ' + msg.y);
    let window;
    //for(let idx in this._windows){
    //  console.log(this._windows[idx]);
    //}
  }

  _handleDrag(msg){
    console.log('x1: ' + msg.x1 + ' y1: ' + msg.y1);
    console.log('x2: ' + msg.x2 + ' y2: ' + msg.y2);
  }

  _handleZoom(msg){
    console.log(msg.elementId);
    console.log(msg.deltaY);
  }

  _handleKeyboard(msg){
    console.log(msg.keyCode);
  }


}
