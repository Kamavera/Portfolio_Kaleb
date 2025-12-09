import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { education, experience, projects, skills, contact, about } from '../data/portfolio';

/**
 * Generate a professional resume PDF from portfolio data
 * @param {string} language - 'en' or 'es'
 */
export const generateResume = (language = 'en') => {
    const doc = new jsPDF();
    const isSpanish = language === 'es';

    // Colors matching portfolio theme
    const primaryColor = [14, 165, 233]; // primary-400
    const textColor = [42, 42, 42];
    const accentColor = [134, 168, 139]; // sage-400

    // Helper function to get translated text
    const t = (obj) => {
        if (typeof obj === 'object' && obj !== null) {
            return obj[language] || obj.en || obj;
        }
        return obj;
    };

    let yPos = 20;

    // ==================== HEADER ====================
    doc.setFontSize(24);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...textColor);
    doc.text('KALEB E. MARTÍNEZ RIVERA', 105, yPos, { align: 'center' });

    yPos += 8;
    doc.setFontSize(11);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(100, 100, 100);
    doc.text(t(education.degree), 105, yPos, { align: 'center' });

    yPos += 6;
    doc.setFontSize(9);
    doc.text(`${contact.email} | GitHub: kalebmartinez | LinkedIn: kalebmartinez`, 105, yPos, { align: 'center' });

    yPos += 3;
    doc.setDrawColor(...accentColor);
    doc.line(20, yPos, 190, yPos);
    yPos += 8;

    // ==================== PROFESSIONAL SUMMARY ====================
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text(isSpanish ? 'RESUMEN PROFESIONAL' : 'PROFESSIONAL SUMMARY', 20, yPos);

    yPos += 6;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);
    const summaryText = t(about.intro) + ' ' + t(about.background);
    const splitSummary = doc.splitTextToSize(summaryText, 170);
    doc.text(splitSummary, 20, yPos);
    yPos += splitSummary.length * 4 + 6;

    // ==================== EDUCATION ====================
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text(isSpanish ? 'EDUCACIÓN' : 'EDUCATION', 20, yPos);

    yPos += 6;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...textColor);
    doc.text(t(education.degree), 20, yPos);

    yPos += 5;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(t(education.institution), 20, yPos);
    doc.text(t(education.graduation), 190, yPos, { align: 'right' });

    yPos += 4;
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(100, 100, 100);
    doc.text(`${t(education.location)}`, 20, yPos);

    yPos += 6;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(...textColor);
    doc.text(isSpanish ? 'Cursos Relevantes:' : 'Relevant Coursework:', 20, yPos);

    yPos += 4;
    doc.setFont('helvetica', 'normal');
    const allCourses = [
        ...t(education.coursework.programming),
        ...t(education.coursework.systems),
        ...t(education.coursework.security)
    ].slice(0, 8);

    const courseLine1 = allCourses.slice(0, 4).join(' • ');
    const courseLine2 = allCourses.slice(4, 8).join(' • ');
    doc.setFontSize(8);
    doc.text(courseLine1, 20, yPos);
    yPos += 3.5;
    doc.text(courseLine2, 20, yPos);
    yPos += 8;

    // ==================== EXPERIENCE ====================
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text(isSpanish ? 'EXPERIENCIA PROFESIONAL' : 'PROFESSIONAL EXPERIENCE', 20, yPos);

    yPos += 6;
    experience.forEach((exp) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...textColor);
        doc.text(t(exp.position), 20, yPos);
        doc.setFont('helvetica', 'normal');
        doc.text(t(exp.duration), 190, yPos, { align: 'right' });

        yPos += 5;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.text(`${exp.company} - ${t(exp.location)}`, 20, yPos);

        yPos += 5;
        doc.setFont('helvetica', 'normal');
        const responsibilities = t(exp.responsibilities);
        responsibilities.forEach((resp) => {
            const bulletText = `• ${resp}`;
            const splitText = doc.splitTextToSize(bulletText, 165);
            doc.text(splitText, 23, yPos);
            yPos += splitText.length * 4;
        });
        yPos += 3;
    });

    // ==================== PROJECTS ====================
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text(isSpanish ? 'PROYECTOS DESTACADOS' : 'FEATURED PROJECTS', 20, yPos);

    yPos += 6;
    projects.forEach((project) => {
        doc.setFontSize(10);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...textColor);
        doc.text(t(project.title), 20, yPos);

        yPos += 5;
        doc.setFontSize(9);
        doc.setFont('helvetica', 'italic');
        doc.text(project.technologies.join(' • '), 20, yPos);

        yPos += 4;
        doc.setFont('helvetica', 'normal');
        const projDesc = t(project.shortDescription);
        const splitDesc = doc.splitTextToSize(`• ${projDesc}`, 165);
        doc.text(splitDesc, 23, yPos);
        yPos += splitDesc.length * 4;

        const highlights = t(project.highlights).slice(0, 3);
        highlights.forEach((highlight) => {
            const bulletText = `• ${highlight}`;
            const splitText = doc.splitTextToSize(bulletText, 165);
            doc.text(splitText, 23, yPos);
            yPos += splitText.length * 4;
        });
        yPos += 3;
    });

    // Add new page if needed
    if (yPos > 250) {
        doc.addPage();
        yPos = 20;
    }

    // ==================== TECHNICAL SKILLS ====================
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(...primaryColor);
    doc.text(isSpanish ? 'HABILIDADES TÉCNICAS' : 'TECHNICAL SKILLS', 20, yPos);

    yPos += 6;
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(...textColor);

    // Languages
    doc.setFont('helvetica', 'bold');
    doc.text(isSpanish ? 'Lenguajes:' : 'Languages:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    const languages = skills.languages.map(s => typeof s.name === 'object' ? t(s.name) : s.name).join(', ');
    const splitLang = doc.splitTextToSize(languages, 145);
    doc.text(splitLang, 50, yPos);
    yPos += splitLang.length * 4 + 2;

    // Frontend
    doc.setFont('helvetica', 'bold');
    doc.text('Frontend:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    const frontend = skills.frontend.map(s => typeof s.name === 'object' ? t(s.name) : s.name).join(', ');
    const splitFront = doc.splitTextToSize(frontend, 145);
    doc.text(splitFront, 50, yPos);
    yPos += splitFront.length * 4 + 2;

    // Backend
    doc.setFont('helvetica', 'bold');
    doc.text('Backend:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    const backend = skills.backend.map(s => typeof s.name === 'object' ? t(s.name) : s.name).join(', ');
    const splitBack = doc.splitTextToSize(backend, 145);
    doc.text(splitBack, 50, yPos);
    yPos += splitBack.length * 4 + 2;

    // Databases
    doc.setFont('helvetica', 'bold');
    doc.text(isSpanish ? 'Bases de Datos:' : 'Databases:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    const databases = skills.databases.map(s => typeof s.name === 'object' ? t(s.name) : s.name).join(', ');
    const splitDB = doc.splitTextToSize(databases, 145);
    doc.text(splitDB, 50, yPos);
    yPos += splitDB.length * 4 + 2;

    // Tools
    doc.setFont('helvetica', 'bold');
    doc.text(isSpanish ? 'Herramientas:' : 'Tools:', 20, yPos);
    doc.setFont('helvetica', 'normal');
    const tools = skills.tools.map(s => typeof s.name === 'object' ? t(s.name) : s.name).join(', ');
    const splitTools = doc.splitTextToSize(tools, 145);
    doc.text(splitTools, 50, yPos);

    // Save the PDF
    const fileName = `Kaleb_Martinez_Resume_${language.toUpperCase()}.pdf`;
    doc.save(fileName);
};
