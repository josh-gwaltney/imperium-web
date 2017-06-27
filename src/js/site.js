import '../css/_site.scss';
import CONFIG from './config';
import { SERVICES, UI, COMPONENTS, ASSEMBLAGES, SYSTEMS, INPUT_EVENTS, KEY_CODES, MESSAGES } from './constants';

import Game from './game';
import Engine from './engine';
import Display from './ui/display';
import InputHandler from './ui/input-handler';
import WindowManager from './ui/window-manager';
//import UI from './ui';

let game = new Game();
let engine = new Engine();
//let display = new Display({ parentId: 'content' });
//let ui = new UI(CONFIG);
let inputHandler = new InputHandler(CONFIG);
let windowManager = new WindowManager(CONFIG);
