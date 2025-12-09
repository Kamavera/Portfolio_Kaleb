const fs = require('fs');
const path = require('path');

const pdfPath = path.join(__dirname, 'node_modules', 'pdf-parse', 'dist', 'pdf-parse', 'cjs', 'index.cjs');
const pdf = require(pdfPath);

const dataBuffer = fs.readFileSync('MARTINEZ RIVERA, KALEB 26.pdf');

async function extract() {
    console.log('Trying new PDFParse(buffer)...');
    try {
        const instance = new pdf.PDFParse(dataBuffer);
        console.log('Instance created.');
        console.log('Keys:', Object.keys(instance));

        // Check for text property
        if (instance.text) {
            console.log('Text found:', instance.text.length);
            console.log(instance.text);
        } else if (instance.extractText) {
            const text = await instance.extractText();
            console.log('Text extracted:', text);
        } else {
            console.log('No obvious text property. Dumping instance:', instance);
        }
    } catch (e) {
        console.log('Instantiation failed:', e.message);
        console.log(e.stack);
    }
}

extract();
