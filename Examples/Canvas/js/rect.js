//create a class to draw a rect
class Rect{
    //get/set
    get x(){
        return this.x;
    }
    set x(value){
        this.x = value > 0 ? value : 0; //ternary operator (3 operands)
    }
    //to do - add y, width, height get/set pairs

    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(ctx, lineWidth, strokeStyle){
        //begin()
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
        //close()
    }

    //clone
    clone(){
        //deep-copy
        return new Rect(this.x, this.y, this.width, this.height);
    }

    //to do - toString, equals
}