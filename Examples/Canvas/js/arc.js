//add Arc class


class Arc{

    constructor(x, y, radius, startAngle, endAngleInRads){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngleInRads = endAngleInRads;
    }
/**
 * Method to...
 *
 * @param {*} ctx
 * @param {*} lineWidth
 * @param {*} strokeStyle
 * @param {*} fillStyle
 * @param {*} drawClockwise
 * @memberof Arc
 */
draw(ctx, lineWidth, strokeStyle, fillStyle, drawClockwise){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngleInRads, drawClockwise);
        if(lineWidth != -1)
            ctx.lineWidth = lineWidth;
        if(strokeStyle != null){
            ctx.strokeStyle = strokeStyle;   
            ctx.stroke();
        } 
        if(fillStyle != null){
            ctx.fillStyle = fillStyle;   
            ctx.fill();
        } 
        ctx.closePath();
    }
    
    clone(){

    }
}