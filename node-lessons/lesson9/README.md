总结

《正则表达式》

测试你自己的正则表达式 网站:http://refiddle.com/

i 的是意义是不区分大小写

g 的意义是，匹配多个

m 的意义是，是^和$可以匹配每一行的开头

? 匹配前面的子表达式零次或一次，或指明一个非贪婪限定符。要匹配?字符，请使用\?。

\b  匹配一个字边界，即字与空格间的位置

慵懒限定符

`*?`重复任意次，但尽可能少重复 -->

`+?` 重复1次或更多次，但尽可能少重复

`??` 重复0次或1次，但尽可能少重复

{n,m}? 重复n到m次，但尽可能少重复

{n,}?  重复n次以上，但尽可能少重复


非打印字符
\s 匹配任何空白字符，包括空格，制表符，换页符等等。等价于[\f\n\r\t\v]

\S 匹配任何非空白字符。等价于[^\f\n\r\t\v]


注意 RegExp.prototype.exec() 中，加g之后，如果你的正则不是字面量的正则，而是存储
在变量中的话，那么这个变量就会变得有记忆！！
```
/h(.*?)\b/g.exec('hello hell')
[
	'hello',
	'ello',
	 index: 0,
	 input: 'hello hell'
]
/h(.*?)\b/g.exec('hello hell')
[
	'hello',
	'ello',
	 index: 0,
	 input: 'hello hell'
]

var re = /h(.*?)\b/g;
undefined

re.exec('hello hell')
[
	'hello',
	'ello',
	 index: 0,
	 input: 'hello hell'
]

re.exec('hello hell')
[
	'hell',
	 'ell',
	 index: 6,     // 至于这里为什么是6  我也不知道为什么。         
	 input: 'hello hell'
]
```

. 是不可以匹配\n的，如果我们想匹配的数据涉及到了跨行，
比如是这样的
```
var multiline = require('multiline');

var text = multiline.stripIndent(function () {
/*
    head
    ***
    code code2 .code3***
    ***
    foot
*/
});
```
我们想把这两个`***`中包含的内容取出来，应该怎么办?

直接用.匹配不到\n, 所以我们需要找到一个原子，能匹配包括\n在内的所有字符。

这个原子的惯用写法就是 `[\s\S]`

var match1 = text.match(/^***[\s\S]+?^***/gm);

console.log(match1) 


