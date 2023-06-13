const fs = require('fs');

function countLines(fileName) {
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        let lines = data.split("\n");
        return lines.length;
    } catch (error) {
        return 0;
    }
}

console.log(countLines('readme.txt'));
