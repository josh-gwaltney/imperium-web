////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import MessageBus from '../../../shared/src/services/message-bus';
import PositionComponent from './game/components/position-component';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const SERVICES = {

};

const COMPONENTS = [
  {
    id: 'position',
    constructor: PositionComponent,
    defaults: {
      x: 0,
      y: 0,
      z: 0
    }
  }
];

const ASSEMBLAGES = [
  {
    id: 'cell',
    components: [
        'position'
    ]
  }
];

const SYSTEMS = {

};

const UI = {
  ROOT_ID: 'root'
};

const CONFIG = {
  SERVICES: {
    MESSAGE_BUS: new MessageBus()

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
      {
        id: 'economy',
        x: '16px',
        y: '16px',
        z: 72,
        height: '100px',
        width: '100px'
      },
      {
        id: 'technology',
        x: '132px',
        y: '16px',
        z: 73,
        height: '100px',
        width: '100px'
      },
      {
        id: 'diplomacy',
        x: '248px',
        y: '16px',
        z: 74,
        height: '100px',
        width: '100px'
      }
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

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default CONFIG;