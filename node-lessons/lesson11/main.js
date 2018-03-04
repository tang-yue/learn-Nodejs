var adder = function(x) {
	var base = x;
	return function(n) {
		return n + base;
	}; 
};

var add10 = adder(10);
console.log(add10(5));

var add20 = adder(20);
console.log(add20(5));

// 举列说明
// 列子1
function greeting(name) {
	var text = 'Hello ' + name;   // local variable

	return function() { console.log(text); }
}

var sayHello = greeting("Closure");
sayHello(); 

// 列子2  闭包中局部变量是引用而非拷贝
function say667() {
	var num = 666;

	var sayAlert = function() { console.log(num) }

	num++;

	return sayAlert;
}

var sayAlert = say667();
sayAlert();   // 667

// 列子3   多个函数绑定同一个闭包，因为他们定义在同一个函数内。

function setupSomeGlobals() {
	var num = 666;

	gAlertNumber = function() { console.log(num); }

	gIncreaseNumber = function() { num++; }

	gSetNumber = function(x) { num = x; }
}

setupSomeGlobals();  // 为三个全局变量赋值

gAlertNumber(); // 666

gIncreaseNumber();

gAlertNumber(); // 667

gSetNumber(12);

gAlertNumber(); // 12

// 列子3:  当在一个循环中赋值函数时，这些函数将绑定同样的闭包

function buildList(list) {
	var result = [];

	for(var i = 0; i < list.length; i++) {
		var item = 'item' + list[i];
		result.push( function() { console.log(item + '' + list[i])});
	}
	return result;
}


function testList() {
	var fnlist = buildList([1,2,3]);

	for(var j = 0; j < fnlist.length; j++) {
		fnlist[j]();
	}
}

testList();

// testList的执行结果是弹出item3undefined窗口三次，因为这三个函数绑定了同一个闭包，
// 而且item的值为最后计算的结果，但是当i跳出循环时i值为4,所以list[4]的结果为undefined。

// 列子4：外部函数所有局部变量都在闭包内，即使这个变量声明在内部函数定义之后

function sayAlice() {
	var sayAlert = function() { alert(alice); }

	var alice = 'Hello Alice'
}