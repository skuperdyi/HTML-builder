const fs = require('fs');
const path = require('path');

fs.readdir('./03-files-in-folder/secret-folder/', (err, files) => {
  if (err) throw err;
  for (let i = 0; i < files.length; i++) {
    fs.stat(path.join('./03-files-in-folder/secret-folder/', files[i]), (err, stat) => {
      if (err) throw err;
      if (stat.isFile()) {
        let fileExpansion = path.extname(files[i]).split('.').join('');
        let nameFile = files[i].split('.')[0];
        console.log(nameFile, '-', fileExpansion, '-', stat.size  + 'b');
      }
    });
  }
});