**总结**
```
topics = topics.map(function (topicPair) {
        var topicUrl = topicPair[0]; // 这里为什么数组0是url
        var topicHtml = topicPair[1]; // 这里为什么数组1是Html
        // 我觉得这里是要打印出来具体去看然后才知道的
        var $ = cheerio.load(topicHtml);
        return ({
          title: $('.topic_full_title').text().trim(),
          href: topicUrl,
          comment1: $('.reply_content').eq(0).text().trim(),
        });
      });

```

关于map 内部不太熟悉了做个测试
```
var arr1 = [[0,1], [2,3], [4,5]];

arr1 = arr1.map(function(number) {
	return({
		'first': number[0],
	})
})

console.log(arr1); // [{first: 0}, {first: 2}, {first: 4}]
```