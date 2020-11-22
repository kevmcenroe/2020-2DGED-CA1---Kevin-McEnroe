/**
 * This class is responsible for storing, drawing, and updating all the sprites within the game.
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

  /**
   * Constructs an empty ObjectManager
   * 
   * @param {CanvasRenderingContext2D} context Handle to draw context
   */
  constructor(context) {
    this.context = context;
  }

  //#region Add, Remove, Find, Clear

  /**
   * Adds a new Sprite to the sprites array using the ActorType to determine in which 
   * row of the 2D sprites array the new Sprite object will be added.
   * 
   * @param {Sprite} sprite A Sprite object 
   */
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

  /**
   * Called in the main game JS file to update all sprites stored in the ObjectManager
   * Without this method then no Sprites would be updated in their behaviour (e.g. check for collision, listen for keyboard)
   * @param {GameTime} gameTime GameTime object
   */
  Update(gameTime) {
    for (let key in this.sprites) { 
      for (let sprite of this.sprites[key]) {
        sprite.Update(gameTime);
      }
    }
  }

  /**
   * Called in the main game JS file to draw all sprites stored in the ObjectManager
   * Without this method then no Sprites would be visible on the screen
   * 
   * @param {GameTime} gameTime GameTime object
   */
  Draw(gameTime) {
    for (let key in this.sprites) { //[0, 2]
      for (let sprite of this.sprites[key]) {
        sprite.Draw(gameTime);
      }
    }
  }
  //#endregion
}
