 const fs = require('fs');
 const data = '';

 module.exports.ls = () => {
 	fs.readdir('./',(err,files) => {
      const filesToString = files.reduce((acc,file) => {
      	return `${acc} ${file}`;
      }, '');
      console.log(filesToString); 
 	});	
 };

module.exports.touch = () => {
  fs.writeFile('newfile.txt', data, (err) => {
  	if(err) throw err;
  	console.log('File created');
  });
};

module.exports.mkdir = () => {
  fs.mkdir('./newfolder/', { recursive: false }, (err) => {
    if (err) throw err;
    console.log('Folder created');
  });
};