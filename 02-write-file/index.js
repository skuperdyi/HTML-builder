const fs = require('fs');
const path = require('path');
const {stdin, stdout, exit} = require('process');

const stream = fs.createWriteStream('./02-write-file/mynotes.txt');

        stdout.write('Напишите что хотите\n');
        stdin.on('data', data => {
            if(data.toString().trim() === 'exit'){
                stdout.write('досвидули');
                exit();
            } else {
                stream.write(data);
                stdout.write('Напишите еще что-то\n');
              }
            });



