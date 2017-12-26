// Example # 1

// .map() is a higher order function
// e => e*e is the lower order function
const myArray = [1, 2, 3].map(e => e*e);
console.log(myArray);


// OR


// Example # 2

function square(e) {
	return e * e;
}
// .map() is a higher order function
// square is the lower order function
const newArray = [1, 2, 3].map(square);
console.log(newArray);


/*
Example # 3
Finding odd numbers with higher order function
*/

function isOdd(e) {
	return e % 2 == 1;
}
// .filter() is a higher order function
// isOdd is the lower order function
const oddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].filter(isOdd);
console.log(oddArray);