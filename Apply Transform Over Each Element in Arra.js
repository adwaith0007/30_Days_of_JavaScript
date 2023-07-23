/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    let transformationArray=[];

    for(i=0;i<arr.length;i++)
    {
        transformationArray.push ( fn(arr[i], i));
        
    }
        return transformationArray;
    
};