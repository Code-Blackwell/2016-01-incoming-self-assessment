/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // [3]
 */
//define an iterator
var i = 0;

var binarySearch = function (array, target) {
  // your code her
 
  //define base case
  if(array[i] === target){
  	return i;
  }
  //increment the iterator
  i++
  //return recursive statement
  return binarySearch(array, target)
};