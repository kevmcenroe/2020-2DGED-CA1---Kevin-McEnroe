/**
 * Represents a 2D rectangle (x, y, width, height) which is typically used for collision detection/collision response.
 * @author niall mcguinness
 * @version 1.0
 * @class Rect
 */
class Rect {
  //#region Fields
  //#endregion

  //#region Properties
  static get Zero() {
    return new Rect(0, 0, 1, 1);
  }
  get X() {
    return this.x;
  }
  get Y() {
    return this.y;
  }
  get Width() {
    return this.width;
  }
  get Height() {
    return this.height;
  }

  get Center() {
    return new Vector2(this.x + this.width / 2, this.y + this.height / 2);
  }

  set X(x) {
    this.x = x;
  }
  set Y(y) {
    this.y = y;
  }
  set Width(width) {
    this.width = width;
  }
  set Height(height) {
    this.height = height;
  }
  //#endregion

  //#region Constructors and Core methods
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.originalX = x;
    this.originalY = y;
    this.width = width;
    this.height = height;
    this.originalWidth = width;
    this.originalHeight = height;
  }

  Reset() {
    this.x = this.originalX;
    this.y = this.originalY;

    this.width = this.originalWidth;
    this.height = this.originalHeight;
  }

  Move(vector) {
    this.x += vector.x;
    this.y += vector.y;
  }

  Move(x, y) {
    this.x += x;
    this.y += y;
  }
  //#endregion

  //#region Collision Detection
  Contains(otherRect) {
    let enclosingRect = this.GetEnclosingRect(otherRect);
    return (
      enclosingRect.Width == Math.max(this.width, otherRect.Width) &&
      enclosingRect.Height == Math.max(this.height, otherRect.Height)
    );
  }

  Intersects(otherRect) {
    let enclosingRect = this.GetEnclosingRect(otherRect);
    return (
      enclosingRect.Width <= this.width + otherRect.Width &&
      enclosingRect.Height <= this.height + otherRect.Height
    );
  }

  GetEnclosingRect(otherRect) {
    if (
      otherRect == null ||
      otherRect == undefined ||
      !otherRect instanceof Rect
    )
      throw (
        "Error: One or more objects is null, undefined, or not type " +
        this.constructor.name
      );

    let minX = Math.min(this.x, otherRect.x);
    let minY = Math.min(this.y, otherRect.y);

    let width =
      Math.max(this.x + this.width, otherRect.x + otherRect.width) - minX;
    let height =
      Math.max(this.y + this.height, otherRect.y + otherRect.height) - minY;

    return new Rect(minX, minY, width, height);
  }
  //#endregion

  //#region Equals, Clone, ToString
  Equals(otherRect) {
    //if we get here then we have two valid (i.e. non-null, defined, correct type) and distinct (i.e. separate RAM) objects that we need to test
    return (
      GDUtility.IsSameTypeAsTarget(this, otherRect) &&
      this.x === otherRect.X &&
      this.y === otherRect.Y &&
      this.width === otherRect.Width &&
      this.height === otherRect.Height
    );
  }

  Clone() {
    //shallow copy if we simply return this
    //return this;

    //if we see 'new' then we are making a DISTINCT object in RAM i.e. deep copy
    return new Rect(this.x, this.y, this.width, this.height);
  }

  ToString() {
    return (
      "[" + this.x + "," + this.y + "," + this.width + "," + this.height + "]"
    );
  }
  //#endregion

  //#region Static Methods
  static Contains(rect1, rect2) {
    if (rect1 == null || rect1 == undefined || !rect1 instanceof Rect)
      throw (
        "Error: One or more objects is null, undefined, or not type " +
        rect1.constructor.name
      );

    return rect1.Contains(rect2);
  }

  static Intersects(rect1, rect2) {
    if (rect1 == null || rect1 == undefined || !rect1 instanceof Rect)
      throw (
        "Error: One or more objects is null, undefined, or not type " +
        rect1.constructor.name
      );

    return rect1.Intersects(rect2);
  }

  static GetEnclosingRect(rect1, rect2) {
    if (rect1 == null || rect1 == undefined || !rect1 instanceof Rect)
      throw (
        "Error: One or more objects is null, undefined, or not type " +
        rect1.constructor.name
      );

    return rect1.GetEnclosingRect(rect2);
  }

  static Move(rect, vector) {
    let clone = rect.Clone();
    clone.Move(vector);
    return clone;
  }

  static Round(rect, precision) {
    return new Rect(
      GDMath.ToFixed(rect.x, precision, 10),
      GDMath.ToFixed(rect.y, precision, 10),
      GDMath.ToFixed(rect.width, precision, 10),
      GDMath.ToFixed(rect.height, precision, 10)
    );
  }
  //#endregion
}
