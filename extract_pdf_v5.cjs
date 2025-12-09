const fs = require('fs');
const path = require('path');

const pdfPath = path.join(__dirname, 'node_modules', 'pdf-parse', 'dist', 'pdf-parse', 'cjs', 'index.cjs');
const pdf = require(pdfPath);

const dataBuffer = fs.readFileSync('MARTINEZ RIVERA, KALEB 26.pdf');

async function extract() {
    console.log('Trying new PDFParse()...');
    try {
        const instance = new pdf.PDFParse();
        console.log('Instance created. Keys:', Object.keys(instance));
        // Maybe instance has a parse method?
        if (instance.parse) {
            const data = await instance.parse(dataBuffer);
            console.log('Parsed with instance.parse:', data.text.length);
            console.log(data.text);
            return;
        }
    } catch (e) {
        console.log('Instantiation failed:', e.message);
    }

    console.log('Trying PDFParse(buffer)...');
    try {
        const data = await pdf.PDFParse(dataBuffer);
        console.log('Parsed with function call:', data.text.length);
        console.log(data.text);
    } catch (e) {
        console.log('Function call failed:', e.message);
    }
}

extract();
