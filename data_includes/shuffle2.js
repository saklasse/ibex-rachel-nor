/* This software is licensed under a BSD license; see the LICENSE file for details. */

// Given an array of arrays, returns a single array with elements
// from each array shuffled evenly into it.
// WARNING: This will destructively modify the matrix array.
// IMPORTANT: The order of elements in subarrays is NOT preserved.
function evenShuffle2(arrayOfArrays) {
    fisherYates(arrayOfArrays);

    var longestArrayLength = 0;
    var totalLength = 0;
    for (var i = 0; i < arrayOfArrays.length; ++i) {
	fisherYates(arrayOfArrays[i])
        if (arrayOfArrays[i].length > longestArrayLength)
            longestArrayLength = arrayOfArrays[i].length;
        totalLength += arrayOfArrays[i].length;
    }

    if (totalLength == 0) { return []; }

    var loopsPerIncrement = new Array(arrayOfArrays.length);
    for (var i = 0; i < arrayOfArrays.length; ++i) {
        loopsPerIncrement[i] = (arrayOfArrays[i].length + 0.0) / (longestArrayLength + 0.0)
    }

    var indexArray = new Array(arrayOfArrays.length);
    for (var i = 0; i < indexArray.length; ++i) {
        indexArray[i] = 0.0;
    }

    var shuffledArray = new Array(totalLength);
    for (var idx = 0; idx < totalLength;) {
        for (var j = 0; j < arrayOfArrays.length; ++j) {
            var oldi = indexArray[j];
            var newi = oldi + loopsPerIncrement[j];
            if (Math.floor(oldi) != Math.floor(newi)) {
                if (oldi < arrayOfArrays[j].length) {
                    shuffledArray[idx] = arrayOfArrays[j][Math.floor(oldi)];
                    ++idx;
                    if (! (idx < totalLength)) {
                        break; // The outer loop will now exit too.
                    }
                }
            }
            indexArray[j] = newi;
        }
    }

    return shuffledArray;
}

function Shuffle2(args) {
    this.args = args;

    this.run = function(arrays) {
        return evenShuffle2(arrays);
    }
}

function rshuffle2() { return new Shuffle2($.map(rshuffle2.arguments, randomize)); }
