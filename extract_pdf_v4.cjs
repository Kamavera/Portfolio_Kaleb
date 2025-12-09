const fs = require('fs');
const path = require('path');

const pdfPath = path.join(__dirname, 'node_modules', 'pdf-parse', 'dist', 'pdf-parse', 'cjs', 'index.cjs');
const pdf = require(pdfPath);

console.log('Type of pdf.PDFParse:', typeof pdf.PDFParse);
if (typeof pdf.PDFParse === 'object') {
    console.log('Keys of pdf.PDFParse:', Object.keys(pdf.PDFParse));
}
console.log('pdf.PDFParse:', pdf.PDFParse);
