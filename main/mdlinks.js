#!/usr/bin/env node

const Marked = require('marked');
const fs = require('fs');
const fetch = require('node-fetch');
const path = require('path');
const [,,...args] = process.argv;
const file = path.resolve(args[0]);

var text = fs.readFileSync(file,'utf8');
var count = 1;
var validate = false;
if(args[1]== "--validate")
{
    validate = true;
}
 
 
 
var lines = text.split('\n');
for(var line of lines)
{
    let number = count++;
    let textLine = markdownLinkExtractor(line);
    if(typeof textLine[0] !== "undefined")
    {
       
        if(validate == true)
        {
            fetch(textLine[0].href).then(
                (response)=>{
                    if(response.ok = true)
                    {
                        console.log(file + ':' + number + ' ' + response.url + ' is OK' );
                    }
                    else
                    {
                       
                    }
                }
            ).catch((err)=>{
                console.log(file + ':' + number + ' ' + textLine[0].href + 'is Broken' );
            })
        }
        else{
            console.log(file + ':' + count + ' ' + textLine[0].href);
        }
    }
    else
    {
       
    }
}
console.log(count);
 
 
 
 
function markdownLinkExtractor(markdown) {
  const links = [];
  const renderer = new Marked.Renderer();
  const linkWithImageSizeSupport = /^!?\[((?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?)\]\(\s*(<(?:\\[<>]?|[^\s<>\\])*>|(?:\\[()]?|\([^\s\x00-\x1f()\\]*\)|[^\s\x00-\x1f()\\])*?(?:\s+=(?:[\w%]+)?x(?:[\w%]+)?)?)(?:\s+("(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)))?\s*\)/;
 
  Marked.InlineLexer.rules.normal.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.gfm.link = linkWithImageSizeSupport;
  Marked.InlineLexer.rules.breaks.link = linkWithImageSizeSupport;
 
  renderer.link = function(href, title, text) {
    links.push({
      href: href,
      text: text,
      title: title,
    });
  };
  renderer.image = function(href, title, text) {
      href = href.replace(/ =\d*%?x\d*%?$/, '');
      links.push({
        href: href,
        text: text,
        title: title,
      });
  };
  Marked(markdown, {renderer: renderer});
 
  return links;
};
module.exports = {'Marked': Marked};