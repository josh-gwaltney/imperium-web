/**
 * Imperium 4X (Web) - Display Manager
 * ===
 *
 * @module displayManager
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Screen from './screen';

//////////////////////////////////////////////////////////////////////////////
// Public Properties
//////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class DisplayManager {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _messageService;
  _options;
  _screens;
  _sprites;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor(messageService, config){
    this._messageService = messageService;
    this._options = {
      unit: config.UNIT,
      spacing: config.SPACING,
      zoom: config.ZOOM
    };

    this._screens = {};
    this._sprites = {};
    this._init(config);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  handleInputEvent(msg){
    if (msg.type === 'zoom') {
      this._handleZoom(msg.deltaY);
    }
  }

  render(sprites) {
    let converted = [];
    for (let key in sprites) {
      let sprite = sprites[key];
      let template = this._sprites[sprite['sprite'].name];
      if (sprite['on'].on) {
        let convert = new template({
          x: ((sprite['position'].x * this._options.unit) + this._options.spacing) * this._options.zoom,
          y: ((sprite['position'].y * this._options.unit) + this._options.spacing) * this._options.zoom,
          height: (sprite['sprite'].height * this._options.unit - (this._options.spacing * 2)) * this._options.zoom,
          width: (sprite['sprite'].width * this._options.unit - (this._options.spacing * 2)) * this._options.zoom,
          fill: sprite['sprite'].fill,
          stroke: sprite['sprite'].stroke
        });

        converted.push(convert);
      }
    }

    for(let key in this._screens){
      let screen = this._screens[key];
      screen.render(converted);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _init(config){

    let sprites = config.SPRITES;
    sprites.forEach((sprite) => {
      this._sprites[sprite.name] = sprite.constructor;
    });

    this._messageService.subscribe('RENDER', (x) => this.render(x));
    this._messageService.subscribe('INPUT', (x) => this.handleInputEvent(x));
    this._rootElement = document.getElementById(config.ROOT_ELEMENT_ID);

    let windows = config.WINDOWS;

    windows.forEach((obj) => {
      this._createScreen(obj);
    });
  }

  _createScreen(settings){
    let screen = Screen.create(settings);
    this._screens[settings.id] = screen;
    let element = screen.element;
    this._rootElement.append(element);
  }

  _handleZoom(delta){
    if (delta > 0 && this._options.zoom > -10) {
      this._options.zoom -= .5;
    } else if (delta < 0 && this._options.zoom < 10) {
      this._options.zoom += .5;
    }
    console.log(this._options.zoom);
  }

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default DisplayManager;