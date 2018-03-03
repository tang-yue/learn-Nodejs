lesson6 测试用例: mocha, should, istanbul

```
if(require.main === module) {
	// 如果是直接执行main.js，则进入此处
	// 如果main.js 被其他文件require，则此处不会执行。
	var n = Number(process.argv[2]);
	console.log('fibonacci(' + n +') is', fibonacci(n));
}
```
上述代码值得注意。

测试框架 mocha   装在了全局上面  测试驱动开发：先把要达到的目的都描述清楚，然后让现有的程序跑不过case,再补程序，让case通过。
断言库 should
测试率覆盖工具 Istanbul  安装在全局上面
简单Makefile的编写