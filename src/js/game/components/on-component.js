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
class OnComponent extends Component{

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * [ description ]
   * @private
   * @property
   * @type{ [ type ]} [ name ] - [ description ]
   */
  _on;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  get on(){
    return this._on;
  }

  constructor (state) {
    super(state);

    this._on = state.on;
  };

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default OnComponent;