/**
 * Imperium 4X (Web) - App
 * ===
 *
 * @module app
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
///////////////////////////////////////////////////////////////////////////////
import '../css/_site.scss';
import SessionModel from './models/session-model';
import { MODULES, UI_SETTINGS } from './constants';
import InputHandler from './ui/input-handler';
import DisplayManager from './ui/display-manager';

// Game
import Game from './game';

// Engine
import Engine from '../../../shared/src/engine';
import EntityManager from '../../../shared/src/engine/entity-manager';
import StateManager from '../../../shared/src/engine/state-manager';
import assemblageManager from './game/assemblages';
import componentManager from './game/components';
import systemManager from './game/systems';

(function(){
  window.debug = MODULES;

  let sessionModel = new SessionModel();
  let messageService = new MODULES.MESSAGE_SERVICE();
  let displayManager = new DisplayManager(messageService, UI_SETTINGS);
  let inputHandler = new InputHandler(messageService);

  // Game
  let game = new Game();

  // Engine
  let entityManager = new EntityManager();
  let stateManager = new StateManager(entityManager, componentManager, assemblageManager);
  let engine = new Engine(messageService, stateManager, systemManager);


  let gameService = new MODULES.GAME_SERVICE();
  gameService.createGame()
    .then((id) => {
      engine.start(game.create());
      //displayManager.render(game.cells);
    });

})();



