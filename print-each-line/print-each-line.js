const fs = require('fs');

try {
    const data = fs.readFileSync('my-file.txt', 'utf8');
    console.log(data);
} catch (error) {
    console.log('Unable to read file: my-file.txt');
}