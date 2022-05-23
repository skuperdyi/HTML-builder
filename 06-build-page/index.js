const fs = require('fs');
const path = require('path');

fs.mkdir('./06-build-page/project-dist', { recursive: true }, (err) => {
    if (err) throw err;
});

const output = fs.createWriteStream('./06-build-page/project-dist/index.html');
fs.readdir('./06-build-page/', (err) => {
  if (err) throw err;
      const input = fs.createReadStream('./06-build-page/template.html');
      input.on('data', data => {
        output.write(data.toString() + '\n');
      }); 
  });



const outPut = fs.createWriteStream('./06-build-page/project-dist/style.css');
fs.readdir('./06-build-page/styles/', (err, files) => {
  if (err) throw err;
  for (let i = 0; i < files.length; i++) {
    let extension = path.extname(files[i]).split('.').pop();
    if (extension === 'css') {
      const input = fs.createReadStream(path.join('./06-build-page/styles/', files[i]));
      input.on('data', data => {
        outPut.write(data.toString() + '\n');
      });
    }
  }
});

fs.mkdir('./06-build-page/project-dist/assets', { recursive: true }, (err) => {
    if (err) throw err;
});


fs.readdir('./06-build-page/assets/', (err, fileses) => {
  if (err) throw err;
  for (let i = 0; i < fileses.length; i++) {
    fs.copyFile(path.join('./06-build-page/assets/', fileses[i]) , path.join('./06-build-page/project-dist/assets/', fileses[i]), (err, stat) => {
      if (err) throw err;
      });
    }
    });

