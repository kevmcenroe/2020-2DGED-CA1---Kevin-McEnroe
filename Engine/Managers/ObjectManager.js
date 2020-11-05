/**
 * This class is responsible for storing and updating all the sprites within the game.
 * @author niall mcguinness
 * @version 1.0
 * @class ObjectManager
 */

class ObjectManager {
  //#region Fields
  context;
  sprites = [];
  //#endregion

  //#region Properties
  //#endregion

  constructor(context) {
    this.context = context;
  }

  //#region Add, Remove, Find, Clear
  Add(sprite) {
    this.sprites.push(sprite);
    //to do...
  }

  FindIndex() {
    //to do...
  }

  FindIndices() {
    //to do...
  }

  Find() {
    //to do...
  }

  RemoveFirst() {
    //to do...
  }

  RemoveFirstBy() {
    //to do...
  }

  RemoveAllBy() {
    //to do...
  }

  RemoveAllByType() {
    //to do...
  }

  Get() {
    //to do...
  }

  Sort() {
    //to do...
  }

  Clear() {
    //to do...
  }
  //#endregion

  //#region Update & Draw
  Update(gameTime) {
    for(let sprite of this.sprites){
      if(sprite.StatusType & StatusType.Updated != StatusType.Off)
        sprite.Update(gameTime);
    }
  }

  Draw(gameTime) {
    for(let sprite of this.sprites){
      if(sprite.StatusType & StatusType.Drawn != StatusType.Off)
          sprite.Draw(gameTime);
    }
  }
  //#endregion
}
