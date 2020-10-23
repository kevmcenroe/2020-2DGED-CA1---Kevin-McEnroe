/**
 * Renders the pixel data from a spritesheet at a source location (x, y, width, heigth) stored in sourcePosition.
 * @author niall mcguinness
 * @version 1.0
 * @class SpriteArtist
 */
class SpriteArtist {
  //#region  Fields
  //#endregion

  //#region  Properties
  //#endregion

  //#region Constructors and Core methods
  constructor(spritesheet, sourcePosition, sourceDimensions, alpha = 1) {
    this.alpha = alpha;
    this.spritesheet = spritesheet;
    this.sourcePosition = sourcePosition;
    this.sourceDimensions = sourceDimensions;
  }

  /**
   * Currently unused as, unlike AnimatedSpriteArtist, we are drawing the same pixel data in each draw call.
   *
   * @param {GameTime} gameTime (unused)
   * @param {Sprite} parent (unused)
   * @memberof SpriteArtist
   */
  Update(gameTime, parent) {}

  /**
   * Renders pixel data from spritesheet to canvas
   *
   * @param {GameTime} gameTime (unused)
   * @param {Sprite} parent
   * @param {Camera2D} activeCamera
   * @memberof SpriteArtist
   */
  Draw(gameTime, parent) {}
  //#endregion

  //#region Equals, Clone, ToString
  //to do...
  //#endregion
}
