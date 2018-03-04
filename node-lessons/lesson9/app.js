var multiline = require('multiline');

var text = multiline.stripIndent(function () {
/*
    head
    ```
    code code2 .code3```
    ```
    foot
*/
});

var match1 = text.match(/^```[\s\S]+?^```/gm);
console.log(match1) // => [ '```\ncode code2 code3```\n```' ]