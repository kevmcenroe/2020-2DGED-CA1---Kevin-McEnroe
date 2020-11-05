//#region Actor related
//defines the actors we find in the game
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
  Projectile: 3
  //add as many actor types as your game needs here BUT remember that the assigned number will determine drawn sort order...
});

//e.g. StatusType.Drawn | Status.Updated = 3
//0001
//0010
//----
//0011 (3)

//0011
//0010
//----
//0010 (2) != 0 => this value contains/has Updated set
//0000 0010
//0000 1000
//0010 0000
const StatusType = Object.freeze({
  Off: 0,
  Drawn: 1, //0001
  Updated: 2, //0010
  //add more here as required but ENSURE they are 2^N values
  //its important that the values are powers of two because we combine them using a bitwise-OR
  //e.g. StatusType.Updated | StatusType.Drawn
  //if we dont need to ever combine the values then we just use a number of Symbol() as in the types below.
});
//#endregion

//#region Keyboard, Color related
//used to draw color to the screen e.g. ClearScreen(Color.Black)
const Color = Object.freeze({
  Black: "#000000",
  White: "#FFFFFF",
  Grey: "#8b8680",
  CornFlowerBlue: "#6495ed",
  LightGreen: "#CACB63",
  DarkGreen: "#688318",
  //add more colors that you use often here
  //Use https://html-color-codes.info/colors-from-image/ to determine hex codes for colors that you use in free 3rd party images/sprites that you find online
});

//used by any entity which listens for key input
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

/*
//enumerate different types of audio (genre/theme/application) within our game
//AudioType.Win set volume to 0
const AudioType = Object.freeze({
  Background: Symbol("Background"),
  Menu: Symbol("Menu"),
  Explosion: Symbol("Explosion"),
  Move: Symbol("Move"),
  Win: Symbol("Win"),
  Lose: Symbol("Lose"),
  Weapon: Symbol("Weapon"),
  Other: Symbol("Other"),
});
*/