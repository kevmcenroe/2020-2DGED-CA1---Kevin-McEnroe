/**
 * Primitive to support drawing rectangles
 */
class Rect {

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    /**
     * Method to render the rect to the canvas referenced by the context, ctx
     *
     * @param {*} ctx
     * @param {*} lineWidth
     * @param {*} strokeStyle
     * @memberof Rect
     */
    draw(ctx, lineWidth, strokeStyle) {
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = strokeStyle;
        ctx.strokeRect(this.x, this.y, this.width, this.height);
    }

    /**
     * Provides a copy of the current object
     *
     * @returns Rect object (deep-copy)
     * @memberof Rect
     */
    clone() {
        //deep-copy
        return new Rect(this.x, this.y, this.width, this.height);
    }

    //to do...add equals
}