/**
 * Represents any drawn non-player or non-player character entity within a game with position information (e.g. pickup, obstacle, UI element)
 * @author niall mcguinness
 * @version 1.0
 * @class Sprite
 */
class Sprite {
  //#region  Fields
  behaviours = new Array();
  //#endregion

  //#region  Properties
  //#endregion

  //#region Constructors and Core methods
  constructor(id, transform2D, artist) {
    this.id = id;
    this.transform2D = transform2D;
    this.artist = artist;
  }

  Update(gameTime) {

  }

  Draw(gameTime) {
    this.artist.Draw(gameTime, this);
  }
  //#endregion

  //#region Equals, Clone, ToString
  //to do...
  
  //deep-copy
  Clone(){
    return new Sprite(this.id + " - clone", this.transform2D.Clone(), this.artist.Clone());
  }
  //#endregion
}
