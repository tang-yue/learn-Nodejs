var arr1 = [[0,1], [2,3], [4,5]];



arr1 = arr1.map(function(number) {
	return({
		'first': number[0],
		// 'second': number
	})
})

console.log(arr1);