﻿var fs = require('fs');
var ejs = require('ejs');

var template = fs.readFileSync('ReadmeEJS.html', 'utf8');
var jsTemplate = fs.readFileSync('CodeEJS.html', 'utf8');

for (var i = 1; i <= 12; i++) {
    (function (i) {
        fs.readdir('chapter_' + i, function (error, result) {
            if (error) {
                console.log('There is no Directory');
            } else {
                if (i >= 8) {
                    var texts = {};
                    for (var j = 0; j < result.length; j++) {
                        try{
                            texts[result[j]] = fs.readFileSync('chapter_' + i + '/' + result[j], 'utf8');
                        } catch (e) { }
                            
                    }

                    fs.writeFile('Chapter ' + i + '.html', ejs.render(jsTemplate, {
                        title: 'Chapter_' + i,
                        files: result,
                        texts: texts
                    }));
                } else {
                    fs.writeFile('Chapter ' + i + '.html', ejs.render(template, {
                        title: 'Chapter_' + i,
                        files: result
                    }));
                }
            }
        });
    })(i);
}