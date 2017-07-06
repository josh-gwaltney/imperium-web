// test code used in site.js

//import Game from './game';
//import Engine from './engine';
//import Display from './ui/display';
//import InputHandler from './ui/input-handler';
//import WindowManager from './ui/window-manager';
//import UI from './ui';

//let game = new Game();
//let engine = new Engine();
//let display = new Display({ parentId: 'content' });
//let ui = new UI(CONFIG);
//let inputHandler = new InputHandler(CONFIG);
//let windowManager = new WindowManager(CONFIG);

//let config = {
//  id: 'foo',
//  height: 250,
//  width: 250,
//  x: 50,
//  y: 50,
//  z: 71
//};
//
//let screen = Screen.create(config);
//let element = screen.element;
//let content = document.getElementById('root');
//content.append(element);
//
//console.log(screen.width);
//screen.resize(100, 100);

//let hexagon = new Hexagon(0, 0);
//let hexagon2 = new Hexagon(3, 4);
//let cube = new Cube(0, 0, 0);
//let cube2 = new Cube(3, -7, -4);
//
//for(let idx = 0; idx < 6; idx++){
//  let size = 25;
//  let corner = hexagon._findCorner(size, idx);
//  console.log('x: ' + corner.x + ' y: ' + corner.y);
//}
//console.log('hex distance: ' + Hexagon.hexagonDistance(hexagon, hexagon2));
//console.log('cube distance: ' + Cube.cubeDistance(cube, cube2));

//import DisplayManager from './ui/display-manager';
//
//let displayManager = new DisplayManager(CONFIG);
//let sprites = [];
//sprites.push(new Hexagon(3, 3));
//sprites.push(new Hexagon(3, 2));
//sprites.push(new Hexagon(4, 2));
//sprites.push(new Hexagon(4, 3));
//sprites.push(new Hexagon(3, 4));
//sprites.push(new Hexagon(2, 4));
//sprites.push(new Hexagon(2, 3));
//
//displayManager.render(sprites);

