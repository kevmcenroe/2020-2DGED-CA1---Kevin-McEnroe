/**
 * Moves sprite based either on time-based or user input.
 * @author niall mcguinness
 * @version 1.0
 * @class SimpleMoveController
 */
class SimpleMoveController
{
    /**
     * Creates an instance of SimpleMoveController to show how we can move a sprite with a controller
     * @param {Vector2} moveDirection
     * @param {Number} moveSpeed
     * @memberof SimpleMoveController
     */
    constructor(moveDirection, moveSpeed)
    {
          this.moveDirection = moveDirection;
          this.moveSpeed = moveSpeed;
    }


    /**
     * Executes the code inside the method to modify the parent (usually modifying Transform2D or AnimatedSpiteArtist)
     *
     * @param {*} gameTime
     * @param {*} parent
     * @memberof SimpleMoveController
     */
    Execute(gameTime, parent)
    {
       let translateBy = Vector2.MultiplyScalar(this.moveDirection, gameTime.ElapsedTimeInMs * this.moveSpeed);
       parent.Transform2D.TranslateBy(translateBy);
    }

   Clone() {
    return new SimpleMoveController(this.moveDirection, this.moveSpeed);
   }

}