const fs = require('fs');
const pdf = require('pdf-parse');

console.log('Type of pdf:', typeof pdf);
console.log('Keys of pdf:', Object.keys(pdf));

let dataBuffer = fs.readFileSync('MARTINEZ RIVERA, KALEB 26.pdf');

if (typeof pdf === 'function') {
    pdf(dataBuffer).then(function (data) {
        console.log(data.text);
    });
} else if (typeof pdf.default === 'function') {
    pdf.default(dataBuffer).then(function (data) {
        console.log(data.text);
    });
} else {
    console.log('Cannot find pdf function');
}
