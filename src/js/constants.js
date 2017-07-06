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
    },
    {
      id: 'chat',
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

const KEYBOARD = {
  BACKSPACE: 8,
  TAB: 9,
  ENTER: 13,
  SHIFT: 16,
  CTRL: 17,
  ALT: 18,
  PAUSE: 19,
  CAPS: 20,
  ESC: 27,
  PAGE_UP: 33,
  PAGE_DOWN: 34,
  END: 35,
  HOME: 36,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  INSERT: 45,
  DELETE: 46,
  ZERO: 48,
  ONE: 49,
  TWO: 50,
  THREE: 51,
  FOUR: 52,
  FIVE: 53,
  SIX: 54,
  SEVEN: 55,
  EIGHT: 56,
  NINE: 57,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90
};

const MOUSE = {
  BUTTON_ONE: 0,
  BUTTON_TWO: 2,
  BUTTON_THREE: 4
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
  START: 'start',
  INPUT_EVENT: 'input event',
  RENDER: 'render',
  STOP: 'stop'
};

export { SERVICES, UI, COMPONENTS, ASSEMBLAGES, SYSTEMS, KEYBOARD, INPUT_EVENTS, KEY_CODES, MESSAGES }