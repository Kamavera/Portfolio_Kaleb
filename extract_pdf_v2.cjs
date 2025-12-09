const fs = require('fs');
const pdf = require('pdf-parse/node');

console.log('Type of pdf:', typeof pdf);
console.log('Keys:', Object.keys(pdf));

const dataBuffer = fs.readFileSync('MARTINEZ RIVERA, KALEB 26.pdf');

async function extract() {
    try {
        // Try direct call
        if (typeof pdf === 'function') {
            const data = await pdf(dataBuffer);
            console.log('Text extracted length:', data.text.length);
            console.log(data.text);
            return;
        }

        // Try default
        if (pdf.default && typeof pdf.default === 'function') {
            const data = await pdf.default(dataBuffer);
            console.log('Text extracted length:', data.text.length);
            console.log(data.text);
            return;
        }

        // Try PDFParse
        if (pdf.PDFParse && typeof pdf.PDFParse === 'function') {
            // PDFParse might be a class or function
            // Check if it's a class
            try {
                const parser = new pdf.PDFParse();
                // usage might differ
            } catch (e) { }

            // Or maybe it's the main function
            const data = await pdf.PDFParse(dataBuffer);
            console.log(data.text);
            return;
        }

        console.log('Could not find entry function');

    } catch (err) {
        console.error('Error:', err);
    }
}

extract();
