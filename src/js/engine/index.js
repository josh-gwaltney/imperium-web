/**
 *
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////

import { timestamp } from '../../../../shared/src/util/timestamp';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

export default class Engine {


  constructor(messageBus){
    this._messageBus = messageBus || {};
    this._stateManager = null;
    this._systemManager = null;
    this._frame = null;
    this._lastTick = null;
    this._tickLength = 50;

    this._init();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

  start(){
    let now = timestamp();
    this._frame = window.requestAnimationFrame(() => this._tick());
    let delta = now - this._lastTick;
    this._update(delta);
    this._render(delta);
    this._lastTick = now;
  }

  stop(){
    if(this._frame){
      window.cancelAnimationFrame(this._frame);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  _init(){

  }

  _tick(){
    if(this._frame){
        window.cancelAnimationFrame(this._frame);
    }
    //this._stateManager = new StateManager(config);
    //this._systemManager = new SystemManager(config.systems);
    this._lastTick = timestamp();
    this._tick();
  }

  _update(dt){
    console.log('called from engine update');
    let state = this._stateManager.state;
    this._systemManager.update(state);
  }

  _render(dt){
    let state = this._stateManager.state;
    this._messageBus.publish({name: 'RENDER', body: state});
  }
}