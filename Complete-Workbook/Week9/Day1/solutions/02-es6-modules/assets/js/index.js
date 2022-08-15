// import * as Banana from "./game.js";
// when doing import * as bananable from './pathToFile.js' all named exports will be saved under a bananable variable
// files must not have export default if we use import *

// import Game from "./game.js";

// if you have a default export and named exports, we can import them together like so. 
import Game, { sayHi } from "./game.js";

// any other export can be imported comma separated within the curly braces. 

window.onload = () => {
  const game = new Game();
  // const game = new Banana.Game();
  // To use any exported item from that file we can key into it.
  // Banana.sayHi();

  game.start();
  sayHi();
};
