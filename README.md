node-lessons

为我自己 学习[node.js 教程](https://github.com/alsotang/node-lessons)的笔记



git pull 
报错 : refusing to merge unrelated histories

解决命令行
git pull origin master --allow-unrelated-histories

撤销 git add . 命令 添加了错误的文件

解决命令行
git reset `<file>`   #撤销指定的文件
git reset #撤销所有的文件

只撤销commit操作，保留文件

解决命令行
git reset HEAD~1

