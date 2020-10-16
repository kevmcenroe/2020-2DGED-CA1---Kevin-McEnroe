//add a new class with static methods to provide useful functionality for use in our engine

class GDUtilities{

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
    static getRandomInRangeExcl(lo, hi, exclValues){
        
        //failure tests
        if(lo == undefined || hi == undefined 
            || exclValues == undefined || exclValues == null)
                //    || typeof(exclValues[0]) == "number")
            throw "One or more parameters is undefined";

        if(lo > hi)
            throw "Lo value cannot be greater than value!";

        var numArray = new Array();
        var bCollision = false;
        
        for(let i = lo; i <= hi; i++){
            for(let j = 0; j < exclValues.length; j++){
                if(i == exclValues[j])
                    bCollision = true;
            }
            if(!bCollision)
                numArray.push(i);
            bCollision = false;
        }

        //now I have an array with values lo->hi and excluding exclValues
        //[-5,-4,-3,-1, 0, 2, 3, 4]
        //shuffle
        

        return numArray[0];
    }


    //to do...https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    static shuffle(array){
        return array;
    }


}

class GDMath{

}

class GDString{

}

