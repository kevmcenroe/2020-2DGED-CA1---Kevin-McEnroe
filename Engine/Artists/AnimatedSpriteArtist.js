/**
 * Renders the pixel data from a spritesheet at a source location (x, y, width, heigth) stored in the current cell index of an array of cells.
 * The array of cells indicate the (x, y, width, height) data for each cell in the animation.
 * @author niall mcguinness
 * @version 1.0
 * @class AnimatedSpriteArtist
 */

class AnimatedSpriteArtist extends Artist {
  //#region  Fields
  //#endregion

  //#region  Properties
  //#endregion

  //#region Constructors and Core methods
  constructor(
    spriteSheet,
    cells,
    frameRatePerSec,
    frameIntervalInMs,
    startCellIndex,
    endCellIndex
  ) {
    this.spriteSheet = spriteSheet;
    this.cells = cells;
    this.frameRatePerSec = frameRatePerSec;
    this.frameIntervalInMs = frameIntervalInMs;
    this.startCellIndex = startCellIndex;
    this.endCellIndex = endCellIndex;

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
   * Increments the current cell index and wraps if > length
   *
   * @memberof AnimatedSpriteArtist
   */
  Advance(parent) {
    //if not at end frame then advance 1
    if (this.currentCellIndex < this.endCellIndex) 
    this.currentCellIndex++;
    else {
      //if running infinitely then restart
      this.currentCellIndex = this.startCellIndex;

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

    let cell = this.cells[this.currentCellIndex];
    activeCamera.context.drawImage(
      this.animationData.spriteSheet,
      cell.x,
      cell.y,
      cell.width,
      cell.height,
      transform.translation.x - transform.origin.x,
      transform.translation.y - transform.origin.y,
      cell.width,
      cell.height
    );
  }
  //#endregion

  //#region Equals, Clone, ToString
  //to do...
  //#endregion
}
