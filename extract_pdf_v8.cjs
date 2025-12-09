const fs = require('fs');
const path = require('path');

const pdfPath = path.join(__dirname, 'node_modules', 'pdf-parse', 'dist', 'pdf-parse', 'cjs', 'index.cjs');
const pdf = require(pdfPath);

const dataBuffer = fs.readFileSync('MARTINEZ RIVERA, KALEB 26.pdf');

async function extract() {
    try {
        const instance = new pdf.PDFParse(dataBuffer);
        console.log('Loading...');
        await instance.load();
        console.log('Loaded.');

        console.log('Getting text...');
        const text = await instance.getText();
        console.log('Text extracted length:', text.length);
        console.log(text);
    } catch (e) {
        console.error('Error:', e);
    }
}

extract();
