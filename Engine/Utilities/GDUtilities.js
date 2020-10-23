//add a new class with static methods to provide useful functionality for use in our engine

class GDUtilities {

     /**
     * Returns true if "other" is non-null, not undefined and of type "target".
     *
     * @static
     * @param {JS/user-defined data type} target
     * @param {JS/user-defined data type} other
     * @returns True if target and other are the same data type, otherwise false
     * @memberof GDUtility
     */
    static IsSameTypeAsTarget(target, other) {

        if (other == null || other == undefined)
            throw "Error: Other object is null or undefined";

        if (other.constructor.name != target.constructor.name)
            throw "Error: Other object is type " + other.constructor.name + " and should be type " + target.constructor.name;

        //returns false if both point to the same object in RAM i.e. a shallow copy
        return target != other;
    }

    /**
     * Returns a random integer in the range lo - hi
     *
     * @static
     * @param {number} lo Integer
     * @param {number} hi Integer
     * @returns Random integer
     * @memberof GDUtilities
     */
    static getRandomInRange(lo, hi) {

        //failure tests
        if (lo == undefined || hi == undefined)
            //    || typeof(exclValues[0]) == "number")
            throw "One or more parameters is undefined";

        if (lo > hi)
            throw "Lo value must be less than hi!";

        return Math.round(((hi - lo) * Math.random()) + lo);
    }
    /**
     * Returns a random integer in the range lo-hi excluding any numbers listed on the exclValues array
     *
     * @static
     * @param {number} lo Integer
     * @param {number} hi Integer
     * @param {*} exclValues Array of integer values to exclude (e.g. -10, 10, [2, 3, 4])
     * @returns Random integer
     * @memberof GDUtilities
     */
    static getRandomInRangeExcl(lo, hi, exclValues) {

        //failure tests
        if (lo == undefined || hi == undefined ||
            exclValues == undefined || exclValues == null)
            //    || typeof(exclValues[0]) == "number")
            throw "One or more parameters is undefined";

        if (exclValues.length == 0)
            return Math.round(((hi - lo) * Math.random()) + lo);

        if (lo > hi)
            throw "Lo value cannot be greater than value!";

        var numArray = new Array();
        var bCollision = false;

        for (let i = lo; i <= hi; i++) {
            for (let j = 0; j < exclValues.length; j++) {
                if (i == exclValues[j]) {
                    bCollision = true;
                    break;
                }
            }
            if (!bCollision)
                numArray.push(i);
            bCollision = false;
        }

        //now I have an array with values lo->hi and excluding exclValues and I shuffle
        GDUtilities.shuffle(numArray);

        var randPos = Math.round(Math.random() * numArray.length - 1);
        //return the first shuffled value
        return numArray[randPos];
    }

    /**
     * Randomly shuffles the elements in an array of any type (e.g. number, string)
     *
     * @static
     * @param {Array} array An array of values of any type
     * @returns Array of shuffled values
     * @memberof GDUtilities
     * @see https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
     * @author Geeksforgeeks
     * @since October 2020
     */
    static shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            // Generate random number  
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
}

/************************************************************************/

/**
 * Provides common math related functions.
 * @author niall mcguinness
 * @version 1.0
 * @class GDMath
 */
class GDMath {

    /**
     * Returns degrees value in radians
     *
     * @static
     * @param {number} degrees Degrees value 
     * @returns Radians value
     * @memberof GDMath
     */
    static ToRadians(degrees) {
        degrees %= 360;
        return degrees * (Math.PI / 180);
    }

    /**
     * Returns radians value in degrees
     *
     * @static
     * @param {number} radians Radians value 
     * @returns Degrees value
     * @memberof GDMath
     */
    static ToDegrees(radians) {
        return Math.fround(radians * (180 / Math.PI));
    }

    /**
     * Converts a floating-point value to a fixed based precision in a specified base (e.g. 8, 16, 10)
     *
     * @static
     * @param {number} value Floating-point value to be converted
     * @param {number} precision Integer precision (e.g. 0, 1, 2)
     * @param {number} base Number base (e.g. 8,16,10)
     * @returns
     * @memberof GDMath
     */
    static ToFixed(value, precision, base) {
        if (value == 0)
            return 0;

        let pow = Math.pow(base || 10, precision);
        return Math.round(value * pow) / pow;
    }
}


/************************************************************************/

class GDString {

}