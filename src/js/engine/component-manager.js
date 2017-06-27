/**
 *
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////

export default class ComponentManager {
  constructor(){
    this._templates = {};
    this._components = {};
    this._init();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  createComponent(templateId, entityId, state){
    let template = this._findTemplate(templateId);
    let component = new template.constructor(entityId, template.defaults);
    if(state){
      component.update(state);
    }
    let id = component.id;
    this._components[id] = component;
    return id;
  }

  findComponent(id){
    if(this._components[id]){
      return this._components[id];
    }
    return false
  }

  removeComponent(id){
    if(this._components[id]){
      delete this._components[id];
      return true;
    }
    return false;
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _init(){

  }

  _addTemplate(template){
    let id = template.id;
    if(!this._templates[id]){
     this._templates[id] = {
       constructor: template.constructor,
       defaults: template.defaults
     };
    }
  }

  _findTemplate(id){
    if(!this._templates[id]){
      throw new Error('Component template ' + id + ' does not exit');
    }
    return this._templates[id];
  }
}