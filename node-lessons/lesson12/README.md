线上部署： heroku


IaaS , PasS , SaaS 的区别  -- 摘自阮一峰的总结

云服务的三大类，即Iass，Pass，SaaS。

从左到右，自己承担的工作量越来越少，IasS>PasS>SaaS

IaaS： 基础设施服务
PaaS：平台服务
SaaS：软件服务

SaaS是软件的开发、管理、部署都交给第三方，不需要关心技术问题，可以拿来即用。

PaaS 提供软件部署平台，抽象掉了硬件操作系统细节，可以无缝地扩展。开发者只需要关注自己的业务逻辑，不需要关注底层。

IasS是云服务的最底层，主要提供一些基础资源。



heroku 主动提供一个环境变量process.env.PORT来供我们监听。以防止大家都监听5000端口会有冲突。


Procfile 是普通的文本文件，需要将其放到代码的跟目录中，其内容是定义如何将程序运行起来。 通常情况下
只包含一行信息即可。


 heroku 注册 https://www.heroku.com/

 然后下载它的工具包  http://toolbelt.heroku.com