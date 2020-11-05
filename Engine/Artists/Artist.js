/**
 * Base class for all artists.
 * @author niall mcguinness
 * @version 1.0
 * @class Artist
 */
class Artist {
    //#region  Fields 
    //#endregion 

    //#region  Properties
    get Alpha() {
        return this.alpha;
    }
    set Alpha(alpha) {
        this.alpha = alpha > 1 || alpha < 0 ? 1 : alpha;
    }
    //#endregion

    constructor(alpha) {
        this.Alpha = alpha;
    }

    /**
     * Currently unused.
     *
     * @param {GameTime} gameTime (unused)
     * @param {Sprite} parent (unused)
     * @memberof Artist
     */
    Update(gameTime, parent) {

    }

    /**
     * Currently unused.
     *
     * @param {GameTime} gameTime (unused)
     * @param {Sprite} parent
     * @memberof Artist
     */
    Draw(gameTime, parent) {

    }

    //#region Equals, Clone, ToString 
    Equals(other) {
        return GDUtility.IsSameTypeAsTarget(this, other) && this.alpha === other.Alpha;
    }

    Clone() {
        return new Artist(this.alpha);
    }

    ToString() {
        return "[" + this.alpha + "]";
    }
    //#endregion
}