测试用例: supertest



nodemon https://github.com/remy/nodemon 安装

npm i -g nodemon

这个库是专门调试时候使用的，它会自动检测node.js代码的改动，然后帮你自动重新启动应用。在调试时可以完全用nodemon命令代替node命令。

$ nodemon app.js  启动我们的应用试试，然后随便改两行代码， 就可以看到nodemon帮我们重启应用了。

为什么我安装了上去，却没有反应呢。

$ nodemon app.js
bash: nodemon: command not found


测试用列


执行如下代码就好
$ mocha 
这样结果会报一个错，我也不知道为什么。

should throw when n < 0  这行报错。



