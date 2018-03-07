持续集成平台： travis  [网址](https://travis-ci.org/)


注册 travis  然后用直接用github登录， 你的公共仓库就会直接添加进去。
然后选择你想要测试的仓库。 如下图：


![login](./login.png)

添加 .travis.yml 文件进你的仓库。  具体配置请参考官方文档。这个课程的配置现在会出现一些问题。
下面是我的配置

```
language: node_js
node_js:
 - '6.11.2'
```
之后 git push 之后就会自动帮你测试 如图
![final](./process.png)
最后测试通过的图标。
![result](https://travis-ci.org/tang-yue/react-resume.svg?branch=master)

