var asnyc = require('async');

// 并发连接数的计数器
var concurrencyCount = 0;

var fetchUrl = function(url, callback) {
	var delay = parseInt((Math.random() * 10000000) % 2000, 10);
	// delay 的值在2000以内，是个随机的整数
	concurrencyCount++;
	console.log('现在的并发数是', concurrencyCount, ', 正在抓取的是', url, ',耗时' + delay+'毫秒');

	setTimeout(function() {
		concurrencyCount--;
		callback(null, url + ' html content');
	}, delay);
}

// 我们接着来伪造一组链接
var urls = [];

for(var i = 0; i < 30; i++) {
	urls.push('http://datasource_' + i);
}

// console.log(urls);
// 使用async.mapLimit来并发抓取，并获取结果。
asnyc.mapLimit(urls, 5, function(url, callback) {
	fetchUrl(url, callback);

}, function(err, result) {
	console.log('final:');
	console.log(result);
});