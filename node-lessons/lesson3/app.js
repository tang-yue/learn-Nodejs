var express = require('express');

var superagent = require('superagent');

var cheerio = require('cheerio');

var app = express();

app.get('/', function(req, res, next) {
	superagent.get('https://cnodejs.org/')
		.end(function(err, sres) {
			// 常规错误处理
			if(err) {
				return next(err);
			}
			// sres.text 里面存储着网页的html内容,将它传递给cheerio.load 之后
			// 就可以得到一个实现了jquery接口的变量，我们习惯地将它命名为$
			// 剩下的就是jquery的内容了
			var $ = cheerio.load(sres.text);
			var items = [];
			$('#topic_list .topic_title').each(function(idx, element) {
				var $element = $(element);
				items.push({
					title: $element.attr('title'),
					href: $element.attr('href')
				});
			});
			res.send(items);
		})
})

app.listen(3000, function(req, res) {
	console.log('app run in localhost:3000');
})