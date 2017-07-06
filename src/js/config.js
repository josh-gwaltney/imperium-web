////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
// Services
import MessageService from '../../../shared/src/services/message-service';

// Engine
import Engine from '../../../shared/src/engine';
import EntityManager from '../../../shared/src/engine/entity-manager';
import StateManager from '../../../shared/src/engine/state-manager';
import componentManager from './game/components';
import assemblageManager from './game/assemblages';
import systemManager from './game/systems';

// UI
//import UI from './ui';

// Game
import Game from './game';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const UI = {
  ROOT_ID: 'root'
};

const CONFIG = {
  SERVICES: {
    MESSAGE_SERVICE: new MessageService()

  },
  COMPONENTS: {

  },
  ASSEMBLAGES: {

  },
  SYSTEMS: {

  },
  UI: {
    ROOT_ELEMENT_ID: 'root',
    UNIT: 10,
    WINDOWS: [
      {
        id: 'map',
        x: 0,
        y: 0,
        z: 71,
        height: '100%',
        width: '100%'
      },
      //{
      //  id: 'economy',
      //  x: '16px',
      //  y: '16px',
      //  z: 72,
      //  height: '100px',
      //  width: '100px'
      //},
      //{
      //  id: 'technology',
      //  x: '132px',
      //  y: '16px',
      //  z: 73,
      //  height: '100px',
      //  width: '100px'
      //},
      //{
      //  id: 'diplomacy',
      //  x: '248px',
      //  y: '16px',
      //  z: 74,
      //  height: '100px',
      //  width: '100px'
      //}
      // chat
    ]
  },
  EVENTS: {
    KEY_DOWN: 'keydown',
    KEY_UP: 'keyup',
    MOUSE_UP: 'mouseup',
    MOUSE_DOWN: 'mousedown',
    MOUSE_WHEEL: 'mousewheel'
  },
  MESSAGES: {
    INPUT_EVENT: 'input event'
  }
};

let entityManager = new EntityManager();
let stateManager = new StateManager(entityManager, componentManager, assemblageManager);
let engine = new Engine({}, stateManager, systemManager);

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export { CONFIG, engine };