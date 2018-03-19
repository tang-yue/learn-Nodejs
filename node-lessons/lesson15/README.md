<< Mongodb 与 Mongoose的使用 >>

1、了解 mongodb(http://www.mongodb.com/)
2、学习 mongoose的使用(http://mongoosejs.com/)

安装 mongodb 

在sql中，我们的数据层级是:数据库(db) -> 表（table）->记录（record）->字段；在mongodb中，数据层级是:
数据库 -> collection -> document ->字段. 这四个概念可以对应得上。


文档型数据这个名字中，"文档"两个字很容易误解。其实这个文档就是bson的意思。bson是json的超集，比如json中没法存储二进制类型。而bson拓展了类型，提供了二进制支持。mongodb中存储的一条条记录都可以用bson来表示。所以你也可以认为，mongodb是个存bson数据的数据库，或是存哈希数据的数据库。

在mondodb中，表与表之间是没有联系的，不像sql中一样，可以设定外键，可以进行表连接。

mongodb是用来存非临时数据的，可以认为是存在硬盘上的，而redis的数据可以认为都在内存中，存储临时数据，丢了也无所谓。

我发现用 命令行 $ npm install -g mongodb 没有反应。

安装步骤 参考链接 https://vxhly.github.io/2017/05/install-mongodb-on-windwos/



