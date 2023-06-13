const fs = require('fs');

function changeFileContent(fileName) {
    let data = fs.readFileSync(fileName, 'utf8');
    newData = data.concat("\n", "Darius");
    try {
        fs.writeFileSync('my-file.txt', newData);
    } catch (error) {
        console.log('Unable to write file: my-file.txt');
    }
}

changeFileContent('readme.txt');