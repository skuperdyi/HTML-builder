
const fs = require('fs');
const path = require('path');

fs.mkdir('./04-copy-directory/files-copy', { recursive: true }, (err) => {
    if (err) throw err;
});


fs.readdir('./04-copy-directory/files/', (err, files) => {
  if (err) throw err;
  for (let i = 0; i < files.length; i++) {
    fs.copyFile(path.join('./04-copy-directory/files/', files[i]) , path.join('./04-copy-directory/files-copy/', files[i]), (err, stat) => {
      if (err) throw err;
      });
    }
    });

