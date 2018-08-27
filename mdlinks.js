const fs = require('fs');

fs.open('/home/cynthia/Documentos/nodejs/scl-2018-01-FE-markdown/text.text', 'r', (err, fd) => {
  if (err) throw err;
  fs.close(fd, (err) => {
    if (err) throw err;
  });
});
