/***************************************** Sprite Sheet Position & Animation Data ************************************************************************************************/

//scope of variable is global
// const ENEMY_ONE_FRAMES = [
//   {
//     //animation frame 1
//     x: 0,
//     y: 0,
//     width: 22,
//     height: 16,
//   },
//   {
//     //animation frame 2
//     x: 0,
//     y: 16,
//     width: 22,
//     height: 16,
//   },
// ];


/**
 * Class to store together all sprite data for space invaders
 */
class SpriteData {

  //sprite positions on spritesheet
  static ENEMY_ONE_FRAMES = [
    {
      //animation frame 1
      x: 0,
      y: 0,
      width: 22,
      height: 16,
    },
    {
      //animation frame 2
      x: 0,
      y: 16,
      width: 22,
      height: 16,
    },
  ];

  //jellyfish
  static ENEMY_TWO_FRAMES = [
    {
      //animation frame 1
      x: 22,
      y: 0,
      width: 16,
      height: 16,
    },
    {
      //animation frame 2
      x: 22,
      y: 16,
      width: 16,
      height: 16,
    },
  ];

  static ENEMY_THREE_FRAMES = [
    {
      //animation frame 1
      x: 38,
      y: 0,
      width: 24,
      height: 16,
    },
    {
      //animation frame 2
      x: 38,
      y: 16,
      width: 24,
      height: 16,
    },
  ];

  static BARRIER_HEIGHT = 24;
  static BARRIER_WIDTH = 36;
  static BARRIER_x = 84;
  static BARRIER_y = 8;

  static PLAYER_FRAMES = [
    {
      x: 62,
      y: 0,
      width: 22,
      height: 16,
    }
  ];

  static PLAYER_FRAMES_V2 = [
    {
      sourcePosition: new Vector2(62, 0),
      sourceDimensions: new Vector2(22, 16)
    }
  ];
}
