/**
 * Imperium 4X (Web) - State
 * ===
 *
 * @module state
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
class State {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _id;
  _entityManager;
  _componentManager;
  _assemblageManager;
  _entities;
  _components;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  get id(){
    return this._id;
  }

  constructor(entityManager, componentManager, assemblageManager){
    this._id = Guid.create();
    this._entityManager = entityManager || {};
    this._componentManager = componentManager || {};
    this._assemblageManager = assemblageManager || {};
    this._entities = {};
    this._components = {};
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  createEntity(template, settings){
    let assemblage = this._assemblageManager.findTemplate(template);
    let entityId = this._entityManager.createEntity();
  }

  findEntity(id){
    if(this._entities[id]){
      return this._entities[id];
    }
    return false
  }

  updateEntity(id, newState){

  }

  removeEntity(id){
    return this._entityManager.removeEntity(id);
  }

  createComponent(templateId, entityId, state){
    let id = this._componentManager.createComponent(templateId, entityId, state);
  }

  findComponent(id){

  }

  findComponentsByType(type){

  }

  findComponentsForEntity(id){

  }

  removeComponent(id){
    return this._componentManager.removeComponent(id);
  }

  addComponentToEntity(entityId, template, state){

  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default State;