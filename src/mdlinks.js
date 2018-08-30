const Marked = require('marked');
const fetch = require('node-fetch');


var fs = require('fs');
var count = 0;
var text = fs.readFileSync('/home/cynthia/Documentos/nodejs/scl-2018-01-FE-markdown/README.md','utf8');
var arrayLinks = markdownLinkExtractor(text);
for(var line in text)
{
        console.log(line);
}
console.log(count);


for(var i=0;i<arrayLinks.length;i++){
    //console.log(arrayLinks[i].href);
    let status = "";
    fetch(arrayLinks[i].href)
    .then(response=>{
        if(response.ok == true)
        {
             status =  "ok";
        }
        else
        {
            status = "broken";
        }
        console.log(response.url + ' is ' + status);
        
    }) 
    .catch(err=>{
        console.log(err);
    });
    
}


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
 console.log(`Current directory: ${process.cwd('./../README.md')}`);

