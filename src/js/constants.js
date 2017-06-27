import MessageBus from '../../../shared/src/services/message-bus';

const SERVICES = {
  MESSAGE_BUS: new MessageBus()
};

const UI = {
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
};

const COMPONENTS = {

};

const ASSEMBLAGES = {

};

const SYSTEMS = {

};

const INPUT_EVENTS = {
  MOUSE_DOWN: 'mousedown',
  MOUSE_UP: 'mouseup',
  MOUSE_WHEEL: 'mousewheel',
  CONTEXT_MENU: 'contextmenu',
  KEY_DOWN: 'keydown'
};

const KEY_CODES = {

};

const MESSAGES = {
  INPUT_EVENT: 'input event',
  RENDER: 'render'
};

export { SERVICES, UI, COMPONENTS, ASSEMBLAGES, SYSTEMS, INPUT_EVENTS, KEY_CODES, MESSAGES }