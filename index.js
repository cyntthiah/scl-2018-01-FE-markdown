const fetch = require('node-fetch');
callweb("https://raw.githubusercontent.com/cyntthiah/scl-2018-01-FE-markdown/master/README.md");
callweb("https://www.google.com");

function callweb(web){
    fetch(web)
    .then(data=>{
        console.log(data)
    })
    .catch(err=>{
        console.log(err)
    });

    
}

