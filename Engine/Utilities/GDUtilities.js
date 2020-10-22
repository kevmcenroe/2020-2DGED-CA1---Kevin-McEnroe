//add a new class with static methods to provide useful functionality for use in our engine

class GDUtilities {

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
     * Method returns a random number in the range lo-hi excluding any numbers listed on the exclValues array
     *
     * @static
     * @param {*} lo
     * @param {*} hi
     * @param {*} exclValues
     * @returns
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

class GDMath {

}

class GDString {

}