/**
 * Imperium 4X (Web) - Movement System
 * ===
 *
 * @module movementSystem
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import System from '../../../../../shared/src/engine/system';

////////////////////////////////////////////////////////////////////////////////
// Definitions
///////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
class TimerSystem extends System
{
  //////////////////////////////////////////////////////////////////////////////
  // Static Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * [ description ]
   * @static
   * @property
   * @type{ [ type ]} [ name ] - [ description ]
   */

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * [ description ]
   * @private
   * @property
   * @type{ [ type ]} [ name ] - [ description ]
   */
  _flaggedForUpdate;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * [ description ]
   * @property
   * @type{ [ type ]} [ name ] - [ description ]
   */

  /**
   * [ description ]
   * @constructor
   * @param  { [ type ]} [ name ] - [ description ]
   */
  constructor(){
    super();

    this._flaggedForUpdate = [];
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * [ description ]
   * @param  { [ type ]} [ name ] - [ description ]
   * @return { [ type ]} [ name ] - [ description ]
   */
  update(state){
    let components = state.findComponentsByType('time');
    let timer = components[0];
    timer.update({current: timer.current + 1});
    if (timer.current === timer.duration) {
      timer.update({current: 1});
      let cells = state.findEntitiesByAssemblage('cell');

      let grid = this._convertToGrid(cells);
      this._findNeighbors(grid);
      this._flaggedForUpdate.forEach((x) => {
        x.update({on: !x.on});
      });
      this._flaggedForUpdate = [];
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _findNeighbors(grid){
    const DIRECTIONS = [
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
      [-1, 1],
      [-1, 0]
    ];

    for (let idx = 0; idx < grid.length; idx++) {
      let column = grid[idx];
      for (let jdx = 0; jdx < column.length; jdx++) {
        let cell = grid[idx][jdx];
        //console.log(cell);
        let count = 0;
        DIRECTIONS.forEach((dir) => {
          let x = idx + dir[0];
          let y = jdx + dir[1];
          if (x >= 0 && x < grid.length && y >= 0 && y < column.length){
            let neighbor = grid[x][y];
            if (neighbor.on){
              count++;
            }
          }
        });
        if(this._determineState(cell, count)) {
          this._flaggedForUpdate.push(cell);
        }
      }
    }
  }

  _determineState(cell, count){
    if (count < 2 && cell.on) {
      return true;
    } else if (count === 3 && !cell.on) {
      return true;
    } else if (count > 3 && cell.on) {
      return true;
    }

    return false;
  }

  _convertToGrid(cells){
    let grid = [];

    for (let key in cells){
      let cell = cells[key];
      if (!grid[cell.position.x]) {
        grid[cell.position.x] = [];
      }
      grid[cell.position.x][cell.position.y] = cell.on;
    }

    return grid;
  }

  /**
   * [ description ]
   * @private
   * @param  { [ type ]} [ name ] - [ description ]
   * @return { [ type ]} [ name ] - [ description ]
   */

  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * [ description ]
   * @static
   * @param  { [ type ]} [ name ] - [ description ]
   * @return { [ type ]} [ name ] - [ description ]
   */

}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
/**
 * [ description ]
 * @exports
 */
export default TimerSystem;