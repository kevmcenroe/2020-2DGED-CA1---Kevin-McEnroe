/**
 * Renders the pixel data from a spritesheet at a source location (x, y, width, heigth) stored in the current frame index of an array of frames.
 * The array of frames indicate the (x, y, width, height) data for each frame in the animation.
 * @author niall mcguinness
 * @version 1.0
 * @class AnimatedSpriteArtist
 */

class AnimatedSpriteArtist extends Artist {
  //#region  Fields
  //#endregion

  //#region  Properties
  get FrameRatePerSec() {
    return this.frameRatePerSec;
  }
  set FrameRatePerSec(frameRatePerSec) {
    this.frameRatePerSec = frameRatePerSec;
    this.frameIntervalInMs = 1000 / frameRatePerSec; //2fps => 1/2 =? 0.5 secs/frame =? 500ms/frame
  }
  //#endregion

  //#region Constructors and Core methods

  /**
   *  Constructs an artist which will cycle through (animate) a set of image frames
   *
   * @param {CanvasRenderingContext2D} context Handle to draw context
   * @param {HTMLImageElement} spriteSheet Handle to the image data
   * @param {Number} alpha Floating point value (0-1) indicating sprite transparency
   * @param {Array} frames Array of frames (see GameConstants) defining the animation sequence
   * @param {Number} startFrameIndex Zero-based index of first animation frame in the sequence
   * @param {Number} endFrameIndex Zero-based index of last animation frame in the sequence
   * @param {Number} frameRatePerSec Integer number of frames to play per second
   */
  constructor(
    context,
    spriteSheet,
    alpha,
    frames,
    startFrameIndex,
    endFrameIndex,
    frameRatePerSec
  ) {
    super(context, spriteSheet, alpha);

    this.frames = frames;
    this.startFrameIndex = startFrameIndex;
    this.endFrameIndex = endFrameIndex;
    this.frameRatePerSec = frameRatePerSec;

    //internal variables
    this.frameIntervalInMs = Math.ceil(1000 / frameRatePerSec);
    this.currentCellIndex = 0;
    this.timeSinceLastFrameInMs = 0;
  }

  /**
   * Advances animation to the next frame based on elapsed time since last frame
   *
   * @param {GameTime} gameTime
   * @param {Sprite} parent
   * @memberof AnimatedSpriteArtist
   */
  Update(gameTime, parent) {
    this.timeSinceLastFrameInMs += Math.round(gameTime.ElapsedTimeInMs);
    if (this.timeSinceLastFrameInMs >= this.frameIntervalInMs) {
      this.Advance(parent);
      this.timeSinceLastFrameInMs = 0;
    }
  }

  /**
   * Increments the current frame index and wraps if > length
   *
   * @memberof AnimatedSpriteArtist
   */
  Advance(parent) {
    //if not at end frame then advance 1
    if (this.currentCellIndex < this.endFrameIndex) this.currentCellIndex++;
    else {
      //if running infinitely then restart
      this.currentCellIndex = this.startFrameIndex;

      //if max loop count has been reached then remove this sprite
      //to do...
    }
  }

  /**
   * Renders pixel data from spritesheet to canvas on a frame by frame basis
   *
   * @param {GameTime} gameTime (unused)
   * @param {Sprite} parent
   * @memberof AnimatedSpriteArtist
   */
  Draw(gameTime, parent) {
    //save whatever context settings were used before this (color, line, text styles)
    this.Context.save();

    //access the transform for the parent that this artist is attached to
    let transform2D = parent.Transform2D;

    //set transparency
    this.Context.globalAlpha = this.Alpha;

    let frame = this.frames[this.currentCellIndex];
    this.Context.drawImage(
      this.SpriteSheet,
      frame.x,
      frame.y,
      frame.width,
      frame.height,
      transform2D.Translation.x - transform2D.Origin.x,
      transform2D.Translation.y - transform2D.Origin.y,
      frame.width, //scale?
      frame.height //scale?
    );

    //restore whatever context settings were used before save() was called above
    this.Context.restore();
  }
  //#endregion

  //#region Equals, Clone, ToString
  //to do...

  //hybrid
  Clone() {
    return new AnimatedSpriteArtist(
      this.Context,           //shallow
      this.SpriteSheet,       //shallow
      this.Alpha,             //deep
      this.frames,            //shallow
      this.startFrameIndex,   //deep
      this.endFrameIndex,     //deep
      this.frameRatePerSec    //deep
    );
  }

  //#endregion
}
