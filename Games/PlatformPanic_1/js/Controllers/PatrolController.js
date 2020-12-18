
class PatrolController {

    constructor(moveVector, maxDistance) {
        this.moveVector = moveVector;
        this.maxDistance = maxDistance;
        this.startTranslation = null;
        this.bFirst = true;
        this.currentDistance = 0;
        this.currentDirection = 1
    }
  
    Execute(gameTime, parent) {
        if(this.bFirst){
            startTranslation = parent.Transform2D.Translation;
            this.bFirst = false;
        }

        var moveVector = Vector2.MultiplyScalar(this.moveVector, this.currentDistance * this.currentDirection);
        parent.Transform2D.TranslateBy(moveVector);

        this.currentDistance += this.moveVector.Length();
        if(this.currentDistance > this.maxDistance)
            this.currentDirection *= -1;
    }
  }