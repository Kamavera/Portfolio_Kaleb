import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { transcriptData, studentInfo } from '../data/transcriptData';

/**
 * Generate a professional transcript PDF from extracted data
 * @param {string} language - 'en' or 'es'
 */
export const generateTranscript = (language = 'en') => {
    const doc = new jsPDF();
    const isSpanish = language === 'es';

    // Colors
    const primaryColor = [14, 165, 233]; // primary-400
    const textColor = [42, 42, 42];

    let yPos = 20;

    // ==================== HEADER ====================
    doc.setFontSize(20);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...textColor);
    doc.text(isSpanish ? 'TRANSCRIPCIÓN DE CRÉDITOS (NO OFICIAL)' : 'UNOFFICIAL CREDIT TRANSCRIPT', 105, yPos, { align: 'center' });

    yPos += 10;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'normal');
    doc.text('Kaleb E. Martínez Rivera', 105, yPos, { align: 'center' });

    yPos += 6;
    doc.setFontSize(10);
    doc.text('Universidad de Puerto Rico - Ponce', 105, yPos, { align: 'center' });

    yPos += 6;
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(isSpanish ? 'Generado el: ' + new Date().toLocaleDateString() : 'Generated on: ' + new Date().toLocaleDateString(), 105, yPos, { align: 'center' });

    yPos += 8;

    // ==================== SUMMARY STATS ====================
    doc.setDrawColor(200, 200, 200);
    doc.line(14, yPos, 196, yPos); // Horizontal line

    yPos += 7;
    doc.setFontSize(10);
    doc.setTextColor(...textColor);
    doc.setFont('helvetica', 'bold');

    // Left Column: Program & ID
    doc.text(isSpanish ? 'Programa: ' : 'Program: ', 14, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(isSpanish ? studentInfo.program.es : studentInfo.program.en, 35, yPos);

    yPos += 5;
    doc.setFont('helvetica', 'bold');
    doc.text(isSpanish ? 'ID Estudiante: ' : 'Student ID: ', 14, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(studentInfo.studentId, 40, yPos);

    // Right Column: Stats
    const rightColX = 120;
    yPos -= 5; // Reset Y for right column

    doc.setFont('helvetica', 'bold');
    doc.text(isSpanish ? 'Créditos Totales: ' : 'Total Credits: ', rightColX, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(studentInfo.totalCredits.toString(), rightColX + 35, yPos);

    yPos += 5;
    doc.setFont('helvetica', 'bold');
    doc.text(isSpanish ? 'Índice General (GPA): ' : 'General GPA: ', rightColX, yPos);
    doc.setFont('helvetica', 'normal');
    doc.text(studentInfo.gpa, rightColX + 45, yPos);

    yPos += 8;
    doc.setDrawColor(200, 200, 200);
    doc.line(14, yPos, 196, yPos); // Horizontal line

    yPos += 10;

    // ==================== TABLE ====================
    const columns = [
        { header: isSpanish ? 'Código' : 'Code', dataKey: 'code' },
        { header: isSpanish ? 'Créditos' : 'Credits', dataKey: 'credits' },
        { header: isSpanish ? 'Nota' : 'Grade', dataKey: 'grade' },
        { header: isSpanish ? 'Puntos' : 'Points', dataKey: 'points' },
        { header: isSpanish ? 'Categoría' : 'Category', dataKey: 'category' },
    ];

    // Group by category for better display? Or just list them?
    // Let's list them all for now, maybe sorted by category?
    // The extracted data is already somewhat grouped.

    autoTable(doc, {
        startY: yPos,
        head: [columns.map(col => col.header)],
        body: transcriptData.map(row => [
            row.code,
            row.credits,
            row.grade,
            row.points,
            row.category
        ]),
        theme: 'striped',
        headStyles: { fillColor: primaryColor },
        styles: { fontSize: 9, cellPadding: 3 },
        columnStyles: {
            0: { fontStyle: 'bold' }, // Code
            1: { halign: 'center' }, // Credits
            2: { halign: 'center', fontStyle: 'bold' }, // Grade
            3: { halign: 'center' }, // Points
        }
    });

    // ==================== FOOTER ====================
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
        doc.setPage(i);
        doc.setFontSize(8);
        doc.setTextColor(150, 150, 150);
        doc.text(
            isSpanish ? `Página ${i} de ${pageCount}` : `Page ${i} of ${pageCount}`,
            105,
            290,
            { align: 'center' }
        );
    }

    // Save the PDF
    const fileName = `Kaleb_Martinez_Transcript_${language.toUpperCase()}.pdf`;
    doc.save(fileName);
};
