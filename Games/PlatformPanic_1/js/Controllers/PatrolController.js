
class PatrolController {

    /**
     *Creates an instance of PatrolController.
     * @param {Vector2} moveVector Vector2 with direction and length
     * @param {Number} maxDistance Max distance from start point
     * @memberof PatrolController
     */
    constructor(moveVector, maxDistance) {
        this.moveVector = moveVector;
        this.maxDistance = maxDistance;
        this.startTranslation = new Vector2(0,0);
        this.bFirst = true;
        this.currentDistance = 0;
        this.currentDirection = 1
    }
  
    Execute(gameTime, parent) {
        if(this.bFirst){
            this.startTranslation = parent.Transform2D.Translation;
            this.bFirst = false;
        }

        var moveVector = Vector2.MultiplyScalar(this.moveVector, this.currentDirection);
        parent.Transform2D.TranslateBy(moveVector);

        this.currentDistance += this.currentDirection * this.moveVector.Length();
        if(Math.abs(this.currentDistance) > this.maxDistance)
            this.currentDirection *= -1;

        if(this.currentDirection > 0){
            if(parent.Artist){
                parent.Artist.SetTake("run_right");
            }
        }
        else
        {
            if(parent.Artist){
                parent.Artist.SetTake("run_left");
            }
        }
    }
  }