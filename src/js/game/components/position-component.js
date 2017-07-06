/**
 * Imperium 4X (Web) - Position Component
 * ===
 *
 * @module positionComponent
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Component from '../../../../../shared/src/engine/component';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class PositionComponent extends Component{

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * [ description ]
   * @private
   * @property
   * @type{ [ type ]} [ name ] - [ description ]
   */
  _x;
  _y;
  _z;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  get x(){
    return this._x;
  }

  get y(){
    return this._y;
  }

  get z(){
    return this._z;
  }

  //constructor (entityId, state) {
  //  super(entityId, state);
  constructor (state) {
    super(state);

    this._x = state.x;
    this._y = state.y;
    this._z = state.z;
  };

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default PositionComponent;