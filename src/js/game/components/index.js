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
      current: 0,
      duration: 10
    }
  }
];

let componentManager = new ComponentManager(COMPONENTS);
////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default componentManager;