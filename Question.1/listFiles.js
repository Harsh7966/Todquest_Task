const fs = require('fs');

const directoryPath = 'C:\\My_projects\\MERN Task\\Question.1\\directory1';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  console.log("List of files:-")
  files.forEach(file => {
    console.log(file);
  });
});

