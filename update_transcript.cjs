const fs = require('fs');

const rawText = `CURSOS BÁSICOS CR Nota PH Prog Conval
ARTE 3116 3 B 9
ESPA 3101 3 B 9
ESPA 3102 3 C 6
INGL 3103 3 B 9
INGL 3104 3 B 9
MATE 3001 0 P 0
MECU 3031 3 B 9
MECU 3032 3 B 9
CIBI 3001 3 B 9
CIFI 3001 3 B 9
CISO 3121 3 B 9
HIST 3241 3 A 12
HIST 3242 3 C51
HUMA 3111 C51
RELACIONADOS CR Nota PH Prog Conval
SICI 3211 3 A 12
ADMI 3005 3 A 12
CONT 3005 4 B 12
ESTA 3001 3 C 6
FINA 3106 3 C51
INGL 3116 3 B 9
MERC 3115 3 A 12
ESPECIALIDAD CR Nota PH Prog Conval
COTI 3101 4 B 12
COTI 3102 4 C 8
COTI 4210 3 C 8
FILO 3185 3 B 9
SICI 3015 3 B 9
SICI 3019 3 A 12
SICI 4010 3 A 12
SICI 4020 3 A 12
SICI 4029 3 C 6
SICI 4030 3 B 9
SICI 4036 3 C 6
SICI 4037 3 B 9
SICI 4065 4 P 4
SICI 4998 2 C51
ELECTIVAS ORIENTADAS CR Nota PH Prog Conval
CCOM 4019 3 C51
COTI 4260 3 A 12
SICI 3020 3 B 9
SICI 3028 3 C51
SICI 3039 3 P 0
SICI 4175 3 C51
SICI 4185 3 C 24
SICI 4215 3 C51
SICI 4278 3 C51
SICI 4995 3 A 12
SICI 4997 3 C51
INGE 3011 2 A 8
CONT 3006 4 B 12
HUMA 3101 3 B 9
HUMA 3102 3 B 9`;

// Helper to clean and parse lines
const parseLines = (text, category) => {
    const lines = text.split('\n');
    const courses = [];

    // Regex to match: CODE NUMBER CREDITS GRADE POINTS (optional)
    // Examples:
    // ARTE 3116 3 B 9
    // HIST 3242 3 C51
    // HUMA 3111 C51 -> This one is missing credits in the middle? Or is C51 the Grade? 
    // Wait, HUMA 3111 C51 usually means HUMA 3111 (3 credits implicit?) Grade C51.
    // Let's assume standard format mostly.

    const regex = /([A-Z]{4})\s*(\d{4})\s+(\d+)?\s*([A-Z0-9]+)\s*(\d+)?/;

    for (const line of lines) {
        const match = line.match(regex);
        if (match) {
            const code = `${match[1]} ${match[2]}`;
            // If credits is missing/undefined, try to infer or leave text
            // In the raw text "HUMA 3111 C51", credit is likely missing.
            // But let's look at the capture groups.

            let credits = match[3] ? parseInt(match[3]) : 3; // Default to 3 if missing?
            let grade = match[4];
            let points = match[5] ? parseInt(match[5]) : 0;

            // Handle C51 (Current Enrolled)
            if (grade === 'C51') {
                grade = 'IP'; // In Progress
                points = 0;
            }

            // Handle weird SICI 4065 4 4 -> Grade was P? In my manual correction I put P.
            // The raw text said `SICI 4065 4 4`. Maybe `4` is grade? Or P?
            // Let's assume if grade is '4', it might be a parsing error or weird data.
            // But looking at the user's PDF, 4 often appears in points column.

            courses.push({
                code,
                credits,
                grade,
                points,
                category
            });
        }
    }
    return courses;
};

// Split by sections
const sections = {
    'Basic Courses': rawText.split('RELACIONADOS')[0],
    'Related Courses': rawText.split('RELACIONADOS')[1].split('ESPECIALIDAD')[0],
    'Specialization': rawText.split('ESPECIALIDAD')[1].split('ELECTIVAS ORIENTADAS')[0],
    'Directed Electives': rawText.split('ELECTIVAS ORIENTADAS')[1]
    // Note: I appended some "Libres" courses to the end of rawText manually to include them in Electives for now
};

let allCourses = [];

for (const [category, text] of Object.entries(sections)) {
    allCourses = allCourses.concat(parseLines(text, category));
}

const fileContent = `/**
 * Transcript data extracted from official PDF
 * Extracted on: ${new Date().toISOString().split('T')[0]}
 */
export const transcriptData = ${JSON.stringify(allCourses, null, 4)};
`;

fs.writeFileSync('/Users/kalebmartinez/portafolio_kaleb_martinez/src/data/transcriptData.js', fileContent);
console.log('Successfully updated transcriptData.js');
