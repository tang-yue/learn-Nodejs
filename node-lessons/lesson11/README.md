作用域与闭包  this，var， (function() {})

闭包
闭包这个概念，在函数式编程里很常见，简单的说，就是使内部函数可以访问定义在外部函数中的变量。
什么是闭包?
1、 闭包就是函数的局部变量集合，只是这些局部变量在函数返回后会继续存在。
2、 闭包就是函数的"堆栈"在函数返回后并不释放，我们也可以理解为这些函数堆栈并不在栈上分配而是在堆上分配。
3、当在一个函数内定义另外一个函数就会产生闭包。

举列说明：
```
function greeting(name) {
	var text = 'Hello ' + name;   // local variable

	return function() { console.log(text); }
}

var sayHello = greeting("Closure");
sayHello(); 
```
执行结果是： Hello Closure，因为sayHello() 函数在greeting函数执行完毕后，仍然
可以访问到了定义在其之内的局部变量text。


闭包的一个坑
```
for(var i = 0; i < 5; i++) {
	setTimeout(function() {
		console.log(i);
	}, 5);
}
```
执行结果是 打印出来五个5出来  而我们预想的结果是打印 0 1 2 3 4。
解释原因: 是因为setTimeout中i是对外层i的引用。当setTimeout的代码被解释的时候，运行时只是记录了i的引用，而不是值。
当setTimeout被触发时，五个setTimeout中i同时被取值，由于它们都指向了外层的同一个i，而那个i的值在迭代完成时为5，所以打印了五次5;

修改代码 改成 预想的结果

for(var i = 0; i < 5; i++) {
	(function(idx) {
		setTimeout(function() {
			console.log(idx);
		}, 5);
	})(i);
}


this
this 出现的场景分为四类，简单的说就是:
1、有对象就指向调用对象
2、没调用对象就指向全局对象
3、用new构造就指向新对象
4、通过apply或call或bind来改变this的所指。

举列1 函数有所属对象： 指向所属对象

```
var myObject = {value: 100};
myObject.getValue = function() {
	console.log(this.value); // 输出100
	// 输出{value: 100, getValue: [Function]},
	// 其实就是myObject对象本身
	console.log(this);
	return this.value;
};

console.log(myObject.getValue()); // 100

```
getValue() 属于对象myObject，并由myObject进行.调用，因此this指向对象myObject。

举列2 函数没有所属对象： 指向全局对象


```
var myObject = {value: 100};

myObject.getValue = function() {
	var foo = function() {
		console.log(this.value) // => undefined
		console.log(this);    // 指向了全局
	};

	foo();

	return this.value;
};

console.log(myObject.getValue()); // 100
```

举列3  构造器中的this: 指向新对象

js中， 我们通过new关键词来调用构造函数，此时this会绑定在该新对象。

```
var SomeClass = function() {
	this.value = 100;
}

var myCreate = new SomeClass();

console.log(myCreate.value); // 输出100
```

4.apply和call调用以及bind绑定： 指向绑定的对象

apply() 方法接受两个参数第一个是函数运行的作用域，另外一个是一个参数数组（arguments）。

call() 方法 第一个参数的意义与apply()方法相同，只是其他的参数需要一个个列举出来。



