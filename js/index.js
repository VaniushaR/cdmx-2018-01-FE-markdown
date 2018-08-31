console.log('hello word');
let userFile = 'js/read.md';
const fs = require('fs');
const pathExt = require('path');
const notValid = 'Not valid type file';
const mdLinks = (path, callback) => {
  console.log('file type' + pathExt.extname(path));
  const userTypeFile = pathExt.extname(path);

  if (userTypeFile !== '.md') {
    console.log('Incorrect type file!' + userTypeFile);
    return notValid;
  } else {
    console.log('correct type file' + userTypeFile);
    fs.readFile(path, 'utf8', (error, file) => {
      if (error) {
        console.log('Hay un error' + error);
      } else {
        console.log(file);
        callback();
      }
    });
  }
};

mdLinks(userFile, function() {
  console.log('hola vania');
});

// var data = fs.readFile('js/read.txt', 'utf8');
// console.log(data);

//Segundo intento
// var express = require('express');
// var app = express();

// app.get = ('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000)

// const searchingLinksFile = inputFile => {
//   (fs = require('fs')),
//     (readline = require('readline')),
//     (instream = fs.createReadStream(imputFile)),
//     (outstream = new (require('stream'))()),
//     (rl = readline.createInterface(instream, outstream));

//   rl.on('line', function(line) {
//     console.log(line);
//   });
//   rl.on('close', function(line) {
//     console.log(line);
//     console.log('donde reading file.');
//   });
// };
// searchingLinksFile('read.txt');

//Primer intento:
// const mdLinks = require('md-links');

// mdLinks('./some/example.md')
//   .then(links => {
//     // => [{ href, text, file }]
//   })
//   .catch(console.error);

// mdLinks('./some/example.md', { validate: true })
//   .then(links => {
//     // => [{ href, text, file, status, ok }]
//   })
//   .catch(console.error);

// mdLinks('./some/example.md', { stats: true })
//   .then(links => {
//     // => [{total, unique }]
//   })
//   .catch(console.error);

// mdLinks('./some/example.md', { stats: true, validate: true })
//   .then(links => {
//     // => [{total, unique, broken }]
//   })
//   .catch(console.error);

// mdLinks('./some/dir')
//   .then(links => {
//     // => [{ href, text, file }]
//   })
//   .catch(console.error);
