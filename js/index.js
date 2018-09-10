console.log('active');
//files for test functions
const userFile = 'js/read.md';
const user2File = 'js/read.txt';
let htmlFile = {};
let markedFile;
let totalLinksFounded = 0;
//modules requirements Core Node Modules
const fs = require('fs');
const pathExt = require('path');
//modules requirements form another NPM libraries
const myMarked = require('marked');
myMarked.setOptions({});

//Function to validate links of .md files
const mdLinks = (path, options) => {
  //console.log('file type' + pathExt.extname(path)); Revisando el tipo de extensión
  const userTypeFile = pathExt.extname(path);
  if (userTypeFile !== '.md') {
    //return to end the process
    return console.log(
      'Incorrect type file! please give a .md file to review' +
        userTypeFile +
        ' is not an accepted file type'
    );
  } else {
    //notice that the type of file es .md
    console.log('correct type file' + userTypeFile);
    fs.readFile(path, 'utf8', (error, file) => {
      //UTF-8 (8-bit Unicode Transformation Format) codification of longitude variable. Others could be utf16 or unicode.
      if (error) {
        console.log('Hay un error' + error);
        //Error Handling refers to how Express catches and processes errors that occur both synchronously and asynchronously, it's a parameter by defaulf of readFile
      } else {
        linkSearcher(file);
      }
    });
  }
};

mdLinks(
  userFile,
  (options = (stats, validate) => {
    console.log('Leyendo función de callback');
  })
);

//Function to search tag a and href contents on a file, will be invoked throw callback
const linkSearcher = file => {
  //Variables to keep matches
  htmlFile = myMarked(file);
  //console.log(htmlFile);
  //Give a regular expression to find the links in the href html tag, include lower and upper case
  const regExprLink = /href="(.*?)"/gi;
  //Give a regular expression to find the <a> html tag content, include lower and upper case
  const regExprATag = />[^<]*<[ ]*\/a[ ]*>/gi;
  //create new variables to keep the matches finded with the patterns of the regular expressions:
  const linkMatchesKeeper = htmlFile.match(regExprLink);
  //console.log('Links', linkMatchesKeeper);
  const aTagMatchesKeeper = htmlFile.match(regExprATag);
  //console.log('A tag:', aTagMatchesKeeper);
  stringCleaner(linkMatchesKeeper);
  stringTagCleanner(aTagMatchesKeeper);
  console.log('Characters Extension: ', htmlFile.length);
  console.log(typeof htmlFile);
};
//cleaner*
const stringCleaner = stringstoClean => {
  const arrayOfLinkStrings = stringstoClean.map(item => item.slice(6, -1));
  console.log(arrayOfLinkStrings);
  console.log(arrayOfLinkStrings.length);
  //linkValidator(arrayOfLinkStrings);
};

const stringTagCleanner = stringstoClean => {
  const arrayOfTagStrings = stringstoClean.map(item => item.slice(1, -4));
  console.log(arrayOfTagStrings);
  console.log(arrayOfTagStrings.length);
  //addLinkDescription(arrayOfTagStrings, arrayOfTagStrings);
};
const linkValidator = (arrayOfLinks) => {
console.log(arrayOfLinks);
arrayOfLinks.forEach(item => {
  fetch(item).then(response => response.stats()
  .then(status => console.log(status))
);

}




// mdLinks(user2File, function() {
//   console.log('Leyendo el Callback');
// });

//export to testing
module.exports = {
  mdLinks
};

// var data = fs.readFile('js/read.txt', 'utf8');
// console.log(data);
