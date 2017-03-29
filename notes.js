var arr = [1,2,3,4,5,6,7,8,9]

// foreach

arr.forEach(function(value){
	console.log(value) //called 9x because there are 9 values
}) // it returns undefined

// filter // returns a new copy of the array or whatever you are doing

var newArr = arr.filter(function(value){
	var isOdd = value % 2 == 1
	return isOdd 
})

// map // is to create a new array its to take each value and give you new value

var newArr = arr.map(function(value){
	return {
		count: value
	}
	// or
	return value.toString()
})

// reduce // is to reduce array (list) of values down to a single of values

var sum = arr.reduce(function(a,b){
	return a + b 
	// or 
	if (typeof a == "number") {
		return {
		sum: a + b
		}
	} else { 
		return {
			sum: a.sum + b
		}
	}
})
// another way of reduce
var sum = arr.reduce(function(a,b){
	return {
		sum: a.sum + b
	}
}, {sum:0})

// var arr = { 1,2,3,4,5,6,7,8,9}
var arr = 