
##### 总结
1.
** 端口号 ** 是一个16位的uint，所以其范围为1 to 65535
**端口的作用：** 通过端口来区分出同一电脑不同应用或者进程，从而实现一条物理网线(通过分组交换技术-比如internet)同时链接多个程序<code>app.listen(3000)</code>进程就被打标，电脑接收到的3000端口的网络消息就会被发送给我们启动的这个进程

2、 npm 安装速度慢的解决方法
淘宝镜像
npm install --save express --registry=http://registry.npm.taobao.org

只需要使用--registry 参数指定镜像服务器地址，为了避免每次安装都需要--registry参数，可以使用如下命令进行永久设置：

npm config set registry http://registry.npm.taobao.org