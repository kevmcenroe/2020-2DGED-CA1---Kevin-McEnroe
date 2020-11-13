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
  constructor(
    context,
    spritesheet,
    sourcePosition,
    sourceDimensions,
    alpha = 1
  ) {
    this.context = context;
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
  Draw(gameTime, parent) {
    //draw the sprite!!!
    // this.context.drawImage(this.spritesheet, this.sourcePosition.x, this.sourcePosition.y,
    //     this.sourceDimensions.x, this.sourceDimensions.y,
    //       parent.transform2D.translation.x, parent.transform2D.translation.y,
    //         parent.transform2D.drawnDimensions.x, parent.transform2D.drawnDimensions.y);

    //save whatever context settings were used before this (color, line, text styles)
    this.context.save();

    //access the transform for the parent that this artist is attached to
    let transform = parent.transform2D;

    //set transparency
    this.context.globalAlpha = this.alpha;

    //draw image
    this.context.drawImage(
      this.spritesheet,
      this.sourcePosition.x,
      this.sourcePosition.y,
      this.sourceDimensions.x,
      this.sourceDimensions.y,
      transform.translation.x - transform.origin.x,
      transform.translation.y - transform.origin.y,
      transform.dimensions.x,
      transform.dimensions.y
    );

    this.context.restore();
  }
  //#endregion

  //#region Equals, Clone, ToString

  //hybrid
  Clone() {
    return new SpriteArtist(
      this.context, //shallow
      this.spritesheet, //shallow
      this.sourcePosition, //deep, if shallow then all clones will point to same Vector2 representing sourcePosition
      this.sourceDimensions.Clone() //deep
    );
  }
  //#endregion
}
