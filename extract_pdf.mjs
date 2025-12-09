import fs from 'fs';
import pdf from 'pdf-parse';

const dataBuffer = fs.readFileSync('MARTINEZ RIVERA, KALEB 26.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(err => {
    console.error(err);
});
