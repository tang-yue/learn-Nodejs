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