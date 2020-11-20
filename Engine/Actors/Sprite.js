/**
 * Represents any drawn non-player or non-player character entity within a game with position information (e.g. pickup, obstacle, UI element)
 * @author niall mcguinness
 * @version 1.0
 * @class Sprite
 */
class Sprite extends Actor2D {
  //#region  Fields
  //#endregion

  //#region  Properties
    get Artist(){
      return this.artist;
    }
  //#endregion

  //#region Constructors and Core methods

  /**
   * Constructs a Sprite object which represents a static or animated image rendered to the canvas
   * @param {String} id Identifier for the sprite, does not necessarily need to be unique 
   * @param {ActorType} actorType An "enum" used to indicate the type of the actor (e.g Player, Pickup)
   * @param {StatusType} statusType An "enum" used to set if the sprite is Drawn and/or Updated, or Off
   * @param {Transform2D} transform2D Transform2D holding the position-related information used to render the image
   * @param {Artist} artist Used to draw the image to the canvas (can be either a SpriteArtist or AnimatedSpriteArtist) 
   */
  constructor(id, actorType, statusType, transform2D, artist) {
    super(id, actorType, statusType, transform2D);
    this.artist = artist;
  }

  Update(gameTime) {
    if((this.statusType & StatusType.Updated) != 0)
      this.artist.Update(gameTime, this);

      super.Update(gameTime);
  }

  Draw(gameTime) {
    if((this.statusType & StatusType.Drawn) != 0)
      this.artist.Draw(gameTime, this);
  }
  //#endregion

  //#region Equals, Clone, ToString
  //to do...
  
  //deep-copy
  Clone(){
    return new Sprite(this.ID + " - clone", 
    this.ActorType,
    this.StatusType,
    this.Transform2D.Clone(), 
    this.artist.Clone());
  }
  //#endregion
}
