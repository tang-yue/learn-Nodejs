###### 总结

1. 从req.query中取出我们的q参数。
如果是post传来的body数据，则是在req.body里面，不过express默认不处理body中的信息，需要引入https://github.com/expressjs/body-parser 这个中间件才会处理。

2. 当我们不传入q参数时，req.query.q取到的是undefined，utility.md5直接使用空值会报错。

要学习http知识 分清什么是query,什么是body。