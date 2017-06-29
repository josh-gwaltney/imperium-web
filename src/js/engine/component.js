/**
 * Imperium 4X (Web) - Component
 * ===
 *
 * @module component
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Guid from '../../../../shared/src/util/guid';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class Component {

  //////////////////////////////////////////////////////////////////////////////
  // Static Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _id;
  _entityId;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  get id(){
    return this._id;
  }

  get entityId(){
    return this._entityId;
  }

  /**
   * @constructor
   * @param entityId
   * @param state
   */
  constructor (entityId, state) {
    if (state === null){
      throw new Error('Component state cannot be null');
    }

    this._id = Guid.create();
    this._entityId = entityId;
  };

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  update(state){
    let self = this;
    for(let key in state){
      if(self.hasOwnProperty('_' + key) && state.hasOwnProperty(key)){
        self['_' + key] = state[key];
      }
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default Component;