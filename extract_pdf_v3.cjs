const fs = require('fs');
const path = require('path');

// Try to require the exact file
const pdfPath = path.join(__dirname, 'node_modules', 'pdf-parse', 'dist', 'pdf-parse', 'cjs', 'index.cjs');
const pdf = require(pdfPath);

console.log('Type of pdf:', typeof pdf);
console.log('Keys:', Object.keys(pdf));

const dataBuffer = fs.readFileSync('MARTINEZ RIVERA, KALEB 26.pdf');

async function extract() {
    try {
        if (typeof pdf === 'function') {
            const data = await pdf(dataBuffer);
            console.log(data.text);
        } else if (pdf.default && typeof pdf.default === 'function') {
            const data = await pdf.default(dataBuffer);
            console.log(data.text);
        } else {
            console.log('Still cannot find function');
        }
    } catch (err) {
        console.error(err);
    }
}

extract();
