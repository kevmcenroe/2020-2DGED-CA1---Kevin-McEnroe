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
    //do we have a row for this ActorType?
    if (!this.sprites[sprite.ActorType]) {
      this.sprites[sprite.ActorType] = [];
    }

    this.sprites[sprite.ActorType].push(sprite);
  }

  Find(predicate) {
    //to do...
  }

  RemoveFirstBy(predicate) {
    //to do...
  }

  RemoveAllBy(predicate) {
    //to do...
  }

  //(a, b) => { return a.ActorType - b.ActorType;}
  Sort(comparator) {
    //to do...
  }

  Clear() {
    //to do...
  }
  //#endregion

  //#region Update & Draw
  Update(gameTime) {
    for (let key in this.sprites) { //[0, 2]
      for (let sprite of this.sprites[key]) {
        sprite.Update(gameTime);
      }
    }
  }

  Draw(gameTime) {
    for (let key in this.sprites) { //[0, 2]
      for (let sprite of this.sprites[key]) {
        sprite.Draw(gameTime);
      }
    }
  }
  //#endregion
}
