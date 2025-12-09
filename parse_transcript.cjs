const fs = require('fs');
const path = require('path');

// Re-run extraction to get text (or just hardcode the text for now if I want to be fast, but better to re-run)
const pdfPath = path.join(__dirname, 'node_modules', 'pdf-parse', 'dist', 'pdf-parse', 'cjs', 'index.cjs');
const pdf = require(pdfPath);

const dataBuffer = fs.readFileSync('MARTINEZ RIVERA, KALEB 26.pdf');
const uint8Array = new Uint8Array(dataBuffer);

async function parse() {
    try {
        const instance = new pdf.PDFParse(uint8Array);
        await instance.load();
        const result = await instance.getText();
        const text = result.text;

        const lines = text.split('\n');
        const courses = [];
        let currentCategory = 'General';

        const courseRegex = /^([A-Z]{4})\s+(\d{4})\s+(\d+)\s+([A-Z0-9]+)\s+(\d+)/;

        for (const line of lines) {
            const trimmed = line.trim();
            if (!trimmed) continue;

            // Detect categories
            if (trimmed.includes('CURSOS BÁSICOS')) currentCategory = 'Basic Courses';
            else if (trimmed.includes('RELACIONADOS')) currentCategory = 'Related Courses';
            else if (trimmed.includes('ESPECIALIDAD')) currentCategory = 'Specialization';
            else if (trimmed.includes('ELECTIVAS ORIENTADAS')) currentCategory = 'Oriented Electives';
            else if (trimmed.includes('ELECTIVAS LIBRES')) currentCategory = 'Free Electives';

            const match = trimmed.match(courseRegex);
            if (match) {
                courses.push({
                    code: match[1] + ' ' + match[2],
                    credits: parseInt(match[3]),
                    grade: match[4],
                    points: parseInt(match[5]),
                    category: currentCategory
                });
            }
        }

        console.log(JSON.stringify(courses, null, 2));

        // Write to src/data/transcriptData.js
        const fileContent = `export const transcriptData = ${JSON.stringify(courses, null, 2)};`;
        // We will write this file later using write_to_file tool

    } catch (e) {
        console.error(e);
    }
}

parse();
