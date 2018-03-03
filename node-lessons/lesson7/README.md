**总结**

用到的模块  mocha should 

引用了`<script src='https://cdn.rawgit.com/chaijs/chai/master/chai.js'></script>` chai

了解 headless 浏览器 phantomjs；

这里直接使用mocha-phantomjs 帮助我们在命令行运行测试

全局安装了 npm i -g mocha-phantomjs


在命令行中运行

mocha-phantomjs index.html --ssl-protocol=any --ignore-ssl-errors=true

另一种方式 这个方式很不错。
"scripts": {
	"test": "mocha-phantomjs index.html --ssl-protocol=any --ignore-ssl-errors=true"
}

将mocha-phantomjs 作为依赖 当前目录下的开发依赖

npm i mocha-phantomjs --save-dev

直接运行
npm test