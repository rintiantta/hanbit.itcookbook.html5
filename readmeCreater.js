var fs = require('fs');
var ejs = require('ejs');

var template = fs.readFileSync('ReadmeEJS.html', 'utf8')
console.log(template)
for (var i = 1; i < 12; i++) {
    (function (i) {
        fs.readdir('chapter_' + i, function (error, result) {
            if (error) {
                console.log('There is no Directory');
            } else {
                fs.writeFile('Chapter ' + i + '.html', ejs.render(template, {
                    title: 'Chapter_' + i,
                    files: result
                }));
            }
        });
    })(i);
}