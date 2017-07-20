/**
 * Imperium 4X (Web) - Components
 * ===
 *
 * @module components
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import ComponentManager from '../../../../../shared/src/engine/component-manager';
import PositionComponent from './position-component';
import SpriteComponent from './sprite-component';
import TimeComponent from './time-component';
import VelocityComponent from './velocity-component';
import OnComponent from './on-component';

////////////////////////////////////////////////////////////////////////////////
// Definitions
///////////////////////////////////////////////////////////////////////////////
const COMPONENTS = [
  {
    id: 'position',
    constructor: PositionComponent,
    defaults: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  {
    id: 'time',
    constructor: TimeComponent,
    defaults: {
      current: 1,
      duration: 10
    }
  },
  {
    id: 'position',
    constructor: PositionComponent,
    defaults: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  {
    id: 'on',
    constructor: OnComponent,
    defaults: {
      on: false
    }
  },
  {
    id: 'sprite',
    constructor: SpriteComponent,
    defaults: {
      height: 0,
      width: 0,
      stroke: null,
      fill: null
    }
  }
];

let componentManager = new ComponentManager(COMPONENTS);
////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default componentManager;