/**
 * Imperium 4X (Web) - Assemblages
 * ===
 *
 * @module assemblages
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import AssemblageManager from '../../../../../shared/src/engine/assemblage-manager';

////////////////////////////////////////////////////////////////////////////////
// Definitions
///////////////////////////////////////////////////////////////////////////////
const ASSEMBLAGES = [
  {
    name: 'timer',
    components: [
      'time'
    ]
  },
  {
    name: 'cell',
    components: [
      'position',
      'sprite',
      'on'
    ]
  }
];

let assemblageManager = new AssemblageManager(ASSEMBLAGES);

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default assemblageManager;