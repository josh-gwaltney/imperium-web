/**
 * Imperium 4X (Web) - Account Service
 * ===
 *
 * @module accountService
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import AjaxService from '../../../../shared/src/services/ajax-service';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////
const API = 'http://localhost:3099';
const RESOURCE = '/accounts';

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class AccountService {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  _ajaxService;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor(){
    this._ajaxService = new AjaxService();
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  register(account){
    let options = {
      url: API + RESOURCE,
      headers: this._buildHeaders(),
      body: JSON.stringify(account)
    };

    return this._ajaxService.post(options)
      .then((data) => {
        console.log(data);
      }).catch((err) => {
      console.log(err);
    });
  }

  getAccounts(){
    let options = {
      url: API + RESOURCE,
      headers: this._buildHeaders()
    };

    return this._ajaxService.get(options)
      .then((data) => {
        console.log(data);
      }).catch((err) => {
      console.log(err);
    });
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _buildHeaders(token){
    let headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return headers;
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default AccountService;