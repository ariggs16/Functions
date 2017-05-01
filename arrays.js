// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

var largest = numbers.reduce(function (a,b){
    if (a > b) {
    	return a
    } else {
    	return b
    }
    //or
    return a > b ? a : b
    // if a is greater than b if it is return a, otherwise return b (? , : = ternary)
})


// ---------------------------
// 2. Find longest string
// ---------------------------

var longest = strings.reduce(function(a,b){
	/*if (a > b) {
		return a.length
	} else {
		return b.length
	}*/
	return a.length > b.length ? a : b
})


// ---------------------------
// 3. Find even numbers
// ---------------------------

var evens = numbers.filter(function(value){
	//for( i=0; i<numbers.length; i++) how can i use this
	return value % 2 === 0
})

// ---------------------------
// 4. Find odd numbers
// ---------------------------

var odds = numbers.filter(function(value){
	return value % 2 === 1
})

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

var words = strings.filter(function(value){
	return value.indexOf('is') !== -1
	//if this is zero it will return true because not equal to -1, if its 1 it will return true its not equal to -1, if it does not find it and returns -1 then it return false 
})

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

	//var c = a.concat(b)
var bothArr = numbers.concat(strings)


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------
var instr = instructors.filter(function(value){
	return value.teaches === 'JavaScript' //all of the teachers name with JS
}).sort(function(a,b){
	if (a.firstname > b.firstname){
		return 1
	} else if (a.firstname == b.firstname){
		return 0
	} else {
		return -1
	}
})

