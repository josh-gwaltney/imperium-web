/**
 *
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Entity from './entity';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class EntityManager {
  constructor(){
    this._entities = {};
    this._init();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  createEntity(){
    let entity = new Entity();
    let id = entity.id;
    this._entities[id] = entity;
    return id;
  }

  findEntity(id){
    if(this._entities[id]){
      return this._entities[id];
    }
    return false
  }

  removeEntity(id){
    if(this._entities[id]){
      delete this._entities[id];
      return true;
    }
    return false;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _init(){

  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default EntityManager;