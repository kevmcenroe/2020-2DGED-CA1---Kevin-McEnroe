//#region Actor related
/**
 * Defines the actors we find in the game. We assign each new actor with a unique number.
 * The numbers will be used to set the draw order for the actors (i.e. Background first, then NPC etc)
 * 
 * @see Actor2D::Actor2D
 */
const ActorType = Object.freeze({
  /*
   * VERY IMPORTANT - The order of the actors below DEFINES the draw order
   * which means if we were, for example to set Background to 20 that it would be
   * the highest number and the LAST drawn. That would mean we would NOT see anything
   * EXCEPT the background sprites because it would be OVERDRAWING everything else.
   */
  Background: 0,
  NPC: 1,
  Player: 2,
  Projectile: 3,
  //add as many actor types as your game needs here BUT remember that the assigned number will determine drawn sort order...
});
//#endregion

//#region Keyboard, Color related

/**
 * Used to draw color to the screen e.g. ClearScreen(Color.Black)
 * @see Draw() method in your main game JS file (e.g. SpaceInvaders.js)
 */
const Color = Object.freeze({
  Black: "#000000",
  White: "#FFFFFF",
  Grey: "#8b8680",
  CornFlowerBlue: "#6495ed",
  LightGreen: "#CACB63",
  DarkGreen: "#688318",
  PaleYellow: "rgb(255, 255, 231)" //we can also specify in rgb() format too
  //add more colors that you use often here
  //Use https://html-color-codes.info/colors-from-image/ to determine hex codes for colors that you use in free 3rd party images/sprites that you find online
});

/**
 * Used by the KeyboardManager to map key codes (e.g. 65 for A) to a human-readable symbol (e.g. A)
 * @see KeyboardManager
 */
const Keys = Object.freeze({
  Space: 32,
  Enter: 13,
  ArrowLeft: 37,
  ArrowUp: 38,
  ArrowRight: 39,
  ArrowDown: 40,
  A: 65,
  B: 66,
  C: 67,
  D: 68,
  E: 69,
  F: 70,
  G: 71,
  H: 72,
  I: 73,
  J: 74,
  K: 75,
  L: 76,
  M: 77,
  N: 78,
  O: 79,
  P: 80,
  Q: 81,
  R: 82,
  S: 83,
  T: 84,
  U: 85,
  V: 86,
  W: 87,
  X: 88,
  Y: 89,
  Z: 90,
  F1: 112,
  F2: 113,
  F3: 114,
  F4: 115,
  F5: 116,
  F6: 117,
  F7: 118,
  F8: 119,
  F9: 120,
  F10: 121,
  F11: 122,
  F12: 123,
  NumPad0: 96,
  NumPad1: 97,
  NumPad2: 98,
  NumPad3: 99,
  NumPad4: 100,
  NumPad5: 101,
  NumPad6: 102,
  NumPad7: 103,
  NumPad8: 104,
  NumPad9: 105,
});

//#endregion
