/**
 *
 * ===
 *
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import Point2D from './point2d';
import Cube from './cube';

////////////////////////////////////////////////////////////////////////////////
// Definitions
///////////////////////////////////////////////////////////////////////////////
const DIRECTIONS = [
  [0, -1],
  [1, -1],
  [1, 0],
  [0, 1],
  [-1, 1],
  [-1, 0]
];

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class Hexagon extends Point2D{
  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor(x, y){
    super(x, y);
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  findNeighbors(){
    let neighbors = [];
    for(let idx = 0; idx < DIRECTIONS.length; idx++){
      let direction = DIRECTIONS[idx];
      let x = this._x + direction[0];
      let y = this._y + direction[1];
      let hexagon = new Hexagon(x, y);
      neighbors.push(hexagon);
    }
    return neighbors;
  }

  toCube(){
    let z = this._y;
    let y = (this._x + z) * -1;
    return new Cube(this._x, y, z);
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
export default Hexagon;