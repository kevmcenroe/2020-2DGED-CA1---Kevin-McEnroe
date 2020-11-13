/**
 * Renders the pixel data from a spritesheet at a source location (x, y, width, heigth) stored in the current frame index of an array of frames.
 * The array of frames indicate the (x, y, width, height) data for each frame in the animation.
 * @author niall mcguinness
 * @version 1.0
 * @class AnimatedSpriteArtist
 */

class AnimatedSpriteArtist {
  //#region  Fields
  //#endregion

  //#region  Properties
  //#endregion

  //#region Constructors and Core methods

  /**
   *  Constructs an artist which will cycle through (animate) a set of image frames
   * @param {Image} spriteSheet Image containing frames for the animation
   * @param {Array} frames Array of frames (see GameConstants) defining the animation sequence
   * @param {Number} startFrameIndex Zero-based index of first animation frame in the sequence 
   * @param {Number} endFrameIndex Zero-based index of last animation frame in the sequence
   * @param {Number} frameRatePerSec Integer number of frames to play per second 
   */
  constructor(
    context,
    spriteSheet,
    frames,
    startFrameIndex,
    endFrameIndex,
    frameRatePerSec
  ) {
    this.context = context;
    this.spriteSheet = spriteSheet;
    this.frames = frames;
    this.startFrameIndex = startFrameIndex;
    this.endFrameIndex = endFrameIndex;
    this.frameIntervalInMs = Math.ceil(1000/frameRatePerSec);

    //internal variables
    this.currentCellIndex = 0;
  }

  /**
   * Advances animation to the next frame based on elapsed time since last frame
   *
   * @param {GameTime} gameTime
   * @param {Sprite} parent
   * @memberof AnimatedSpriteArtist
   */
  Update(gameTime, parent) {
    if (!this.paused) {
      this.timeSinceLastFrameInMs += Math.round(gameTime.ElapsedTimeInMs);
      if (this.timeSinceLastFrameInMs > this.frameIntervalInMs) {
        this.Advance(parent);
        this.timeSinceLastFrameInMs = 0;
      }
    }
  }

  /**
   * Increments the current frame index and wraps if > length
   *
   * @memberof AnimatedSpriteArtist
   */
  Advance(parent) {
    //if not at end frame then advance 1
    if (this.currentCellIndex < this.endFrameIndex) 
      this.currentCellIndex++;
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
    this.context.save();

    //access the transform for the parent that this artist is attached to
    let transform = parent.transform2D;

    //set transparency
    this.context.globalAlpha = this.alpha;

    let frame = this.frames[this.currentCellIndex];
    this.context.drawImage(
      this.spriteSheet,
      frame.x,
      frame.y,
      frame.width,
      frame.height,
      transform.translation.x - transform.origin.x,
      transform.translation.y - transform.origin.y,
      frame.width,
      frame.height
    );
  }
  //#endregion

  //#region Equals, Clone, ToString
  //to do...
  //#endregion
}
