/***************************************** Sprite Sheet Position & Animation Data ************************************************************************************************/

/**
 * Class to store together all sprite data for space invaders
 */
class SpriteData {

  //#region Sprite Data
  static RUNNER_START_POSITION = new Vector2(100, 50);
  static RUNNER_MOVE_KEYS = [Keys.A, Keys.D, Keys.W, Keys.S];
  static RUNNER_RUN_VELOCITY = 0.1;
  static RUNNER_JUMP_VELOCITY = 0.6;

  static RUNNER_ANIMATION_DATA = Object.freeze({
    id: "runner_animation_data",
    spriteSheet: document.getElementById("spritesheet_main"),
    actorType: ActorType.Player,
    alpha: 1,
    takes: {  
      "run_right" :  {       
        fps: 6,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 6,
        boundingBoxDimensions: new Vector2(49, 54), //notice I choose the largest of all the widths taken from the cellData array below
        cellData: [
          new Rect(0, 305, 47, 54),
          new Rect(55, 305, 44, 54),
          new Rect(107, 305, 44, 54),
          new Rect(152, 305, 46, 54),
          new Rect(208, 305, 49, 54),
          new Rect(265, 305, 46, 54),
          new Rect(320, 305, 42, 54),
        ]
      },
      "run_left" : {     
        fps: 6,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 6,
        boundingBoxDimensions: new Vector2(49, 54), //notice I choose the largest of all the widths taken from the cellData array below
        cellData: [
          new Rect(414, 385, 47, 54),
          new Rect(362, 385, 44, 54),
          new Rect(314, 385, 39, 54),
          new Rect(265, 385, 46, 54),
          new Rect(205, 385, 49, 54),
          new Rect(150, 385, 46, 54),
          new Rect(96, 385, 46, 54),
          new Rect(45, 385, 35, 54),
          new Rect(0, 385, 35, 54)
        ]
      },
      "run_up" : {     
        fps: 8,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 6,
        boundingBoxDimensions: new Vector2(49, 54), //notice I choose the largest of all the widths taken from the cellData array below
        cellData: [
          new Rect(0, 305, 47, 54),
          new Rect(55, 305, 44, 54),
          new Rect(107, 305, 44, 54),
          new Rect(152, 305, 46, 54),
          new Rect(208, 305, 49, 54),
          new Rect(265, 305, 46, 54),
          new Rect(320, 305, 42, 54),
        ]
      },
      "run_down" : {     
        fps: 8,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 6,
        boundingBoxDimensions: new Vector2(49, 54), //notice I choose the largest of all the widths taken from the cellData array below
        cellData: [
          new Rect(414, 385, 47, 54),
          new Rect(362, 385, 44, 54),
          new Rect(314, 385, 39, 54),
          new Rect(265, 385, 46, 54),
          new Rect(205, 385, 49, 54),
          new Rect(150, 385, 46, 54),
          new Rect(96, 385, 46, 54),
          // new Rect(45, 385, 35, 54),
          // new Rect(0, 385, 35, 54)
        ]
      }
    }
  });
  
  static ENEMY_ANIMATION_DATA = Object.freeze({
    id: "enemy_animation_data",
    spriteSheet: document.getElementById("spritesheet_main"),
    alpha: 1,
    takes: {  
      "fish" :  {    
        fps: 5,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 2,
        boundingBoxDimensions: new Vector2(35, 50), 
        cellData: [
          new Rect(20, 234, 35, 50),
          new Rect(90, 234, 35, 50),
          new Rect(160, 234, 35, 50)
        ]
      }
    }
  });
  
  static COLLECTIBLES_ANIMATION_DATA = Object.freeze({
    id: "collectibles_animation_data",
    spriteSheet: document.getElementById("spritesheet_main"),
    alpha: 1,
    actorType: ActorType.Pickup,
    takes: {  
      "sapphire_glint" :  {
        fps: 6,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 4,
        boundingBoxDimensions: new Vector2(46, 50), 
        cellData: [
          new Rect(185, 138, 30, 35),
          new Rect(220, 138, 30, 35),
          new Rect(258, 138, 30, 35),
          new Rect(294, 138, 30, 35),
          new Rect(331, 138, 30, 35)
        ]
      },
      "ruby_glint" :  {
        fps: 6,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 4,
        boundingBoxDimensions: new Vector2(30, 35), 
        cellData: [
          new Rect(3, 138, 30, 35),
          new Rect(39, 138, 30, 35),
          new Rect(76, 138, 30, 35),
          new Rect(112, 138, 30, 35),
          new Rect(148, 138, 30, 35)
        ]
      },
      "gold_glint" :  {
        fps: 6,
        maxLoopCount: -1, //-1 = always, 0 = run once, N = run N times
        startCellIndex: 0,
        endCellIndex: 2,
        boundingBoxDimensions: new Vector2(30, 30), 
        cellData: [
          new Rect(65, 540, 30, 30),
          new Rect(96, 540, 30, 30),
          new Rect(128, 540, 30, 30)
        ]
      }
    }
  });
  
  static PLATFORM_DATA = Object.freeze({
    id: "platform",
    spriteSheet: document.getElementById("spritesheet_jungle"),
    sourcePosition: new Vector2(0, 112),
    sourceDimensions: new Vector2(48, 48),
    rotation: 0,
    scale: new Vector2(1, 1),
    origin: new Vector2(0, 0),
    alpha: 1,
    actorType: ActorType.Platform,
    translationArray: [
      //added spaces here so that you can easily see which grouping is which on screen
      
      // Roof
      new Vector2(50, 0),
      new Vector2(100, 0),
      new Vector2(150, 0),
      new Vector2(200, 0),
      new Vector2(250, 0),
      new Vector2(300, 0),
      new Vector2(350, 0),
      new Vector2(400, 0),
      new Vector2(450, 0),
      new Vector2(500, 0),
      new Vector2(550, 0),
      new Vector2(600, 0),
      new Vector2(650, 0),
      new Vector2(700, 0),
      new Vector2(750, 0),
      new Vector2(800, 0),
      new Vector2(850, 0),
      new Vector2(900, 0),
      new Vector2(950, 0),

      // Floor
      new Vector2(0, 750),
      new Vector2(50, 750),
      new Vector2(100, 750),
      new Vector2(150, 750),
      new Vector2(200, 750),
      new Vector2(250, 750),
      new Vector2(300, 750),
      new Vector2(350, 750),
      new Vector2(400, 750),
      new Vector2(450, 750),
      new Vector2(500, 750),
      new Vector2(550, 750),
      new Vector2(600, 750),
      new Vector2(650, 750),
      new Vector2(700, 750),
      new Vector2(750, 750),
      new Vector2(800, 750),
      new Vector2(850, 750),
      new Vector2(900, 750),
      new Vector2(950, 750),
      new Vector2(1000, 750),

      // Left border
      new Vector2(0, 0),
      new Vector2(0, 50),
      new Vector2(0, 100),
      new Vector2(0, 150),
      new Vector2(0, 200),
      new Vector2(0, 250),
      new Vector2(0, 300),
      new Vector2(0, 350),
      new Vector2(0, 400),
      new Vector2(0, 450),
      new Vector2(0, 500),
      new Vector2(0, 550),
      new Vector2(0, 600),
      new Vector2(0, 650),
      new Vector2(0, 700),
      new Vector2(0, 750),

      // Right border
      new Vector2(980, 0),
      new Vector2(980, 50),
      new Vector2(980, 100),
      new Vector2(980, 150),
      new Vector2(980, 200),
      new Vector2(980, 250),
      new Vector2(980, 300),
      new Vector2(980, 350),
      new Vector2(980, 400),
      new Vector2(980, 450),
      new Vector2(980, 500),
      new Vector2(980, 550),
      new Vector2(980, 600),
      new Vector2(980, 650),
      new Vector2(980, 700),
      new Vector2(980, 750),

      new Vector2(50, 150),
      new Vector2(100, 150),
      new Vector2(150, 150),
      new Vector2(200, 150),
      new Vector2(250, 150),
      new Vector2(300, 150),
      new Vector2(350, 150),
      new Vector2(400, 150),
      new Vector2(450, 150),
      new Vector2(500, 150),
      new Vector2(550, 150),
      new Vector2(600, 150),
      new Vector2(650, 150),
      new Vector2(700, 150),
      new Vector2(750, 150),
      new Vector2(800, 150),

      new Vector2(200, 300),
      new Vector2(250, 300),
      new Vector2(300, 300),
      new Vector2(350, 300),
      new Vector2(350, 350),
      new Vector2(350, 400),
      new Vector2(350, 450),
      new Vector2(350, 500),

      new Vector2(500, 200),
      new Vector2(500, 250),
      new Vector2(500, 300),

      new Vector2(500, 650),
      new Vector2(500, 700),

      new Vector2(800, 700),
      new Vector2(800, 650),
      new Vector2(800, 600),
      new Vector2(800, 550),
      new Vector2(800, 500),
      new Vector2(800, 450),

      new Vector2(650, 550),
      new Vector2(650, 600),

      new Vector2(650, 350),
      new Vector2(650, 400),
      new Vector2(650, 450),
      new Vector2(650, 500),

      new Vector2(600, 500),
      new Vector2(550, 500),
      new Vector2(500, 500),
      new Vector2(450, 500),
      new Vector2(400, 500),

      new Vector2(350, 550),
      new Vector2(350, 600),
      new Vector2(300, 600),
      new Vector2(250, 600),
      new Vector2(350, 600),
      new Vector2(200, 600),

      new Vector2(200, 450),
      new Vector2(150, 450),
      new Vector2(100, 450),
      new Vector2(50, 450),

      new Vector2(650, 300),
      new Vector2(700, 300),
      new Vector2(750, 300),
      new Vector2(800, 300),
      new Vector2(850, 300),
      new Vector2(900, 300),
      new Vector2(950, 300),
      new Vector2(1000, 300),
    ]
  });
  
  static BACKGROUND_DATA = [
    {
      id: "background_1",
      spriteSheet: document.getElementById("forest-1"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(384, 216),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(1, 1),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.2
    },
    // {
    //   id: "background_2",
    //   spriteSheet: document.getElementById("forest-2"),
    //   sourcePosition: new Vector2(0, 0),
    //   sourceDimensions: new Vector2(384, 216),
    //   translation: new Vector2(0, 0),
    //   rotation: 0,
    //   scale: new Vector2(1, 1),
    //   origin: new Vector2(0, 0),
    //   alpha: 1,
    //   actorType: ActorType.Background,
    //   layerDepth: 1,
    //   scrollSpeedMultiplier: 0.15
    // },
    // {
    //   id: "background_3",
    //   spriteSheet: document.getElementById("forest-3"),
    //   sourcePosition: new Vector2(0, 0),
    //   sourceDimensions: new Vector2(384, 216),
    //   translation: new Vector2(0, 0),
    //   rotation: 0,
    //   scale: new Vector2(1, 1),
    //   origin: new Vector2(0, 0),
    //   alpha: 1,
    //   actorType: ActorType.Background,
    //   layerDepth: 1,
    //   scrollSpeedMultiplier: 0.1
    // },
    // {
    //   id: "background_4",
    //   spriteSheet: document.getElementById("forest-4"),
    //   sourcePosition: new Vector2(0, 0),
    //   sourceDimensions: new Vector2(384, 216),
    //   translation: new Vector2(0, 0),
    //   rotation: 0,
    //   scale: new Vector2(1, 1),
    //   origin: new Vector2(0, 0),
    //   alpha: 1,
    //   actorType: ActorType.Background,
    //   layerDepth: 1,
    //   scrollSpeedMultiplier: 0.05
    // },
    {
      id: "background_5",
      spriteSheet: document.getElementById("forest-5"),
      sourcePosition: new Vector2(0, 0),
      sourceDimensions: new Vector2(384, 216),
      translation: new Vector2(0, 0),
      rotation: 0,
      scale: new Vector2(1, 1),
      origin: new Vector2(0, 0),
      alpha: 1,
      actorType: ActorType.Background,
      layerDepth: 1,
      scrollSpeedMultiplier: 0.01
    }
  ];
  //#endregion
  
  }
  