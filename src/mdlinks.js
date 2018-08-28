const Marked = require('marked');
const fetch = require('node-fetch');


var fs = require('fs');

var text = fs.readFileSync('/home/cynthia/Documentos/nodejs/scl-2018-01-FE-markdown/README.md','utf8');
var arrayLinks = markdownLinkExtractor(text);
console.log(arrayLinks);

for(var i=0;i<arrayLinks.length;i++){
    console.log(arrayLinks[i].href);
    fetch(arrayLinks[i].href)
    .then(response=>{
        console.log(response.status);
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
        // Remove image size at the end, e.g. ' =20%x50'
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
