
const fs = require('fs');
const path = require('path');

const output = fs.createWriteStream('./05-merge-styles/project-dist/bundle.css');
fs.readdir('./05-merge-styles/styles/', (err, files) => {
  if (err) throw err;
  for (let i = 0; i < files.length; i++) {
    let extension = path.extname(files[i]).split('.').pop();
    if (extension === 'css') {
      const input = fs.createReadStream(path.join('./05-merge-styles/styles/', files[i]));
      input.on('data', data => {
        output.write(data.toString() + '\n');
      });
    }
  }
});


