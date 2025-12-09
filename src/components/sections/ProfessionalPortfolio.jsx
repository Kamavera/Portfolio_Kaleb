import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Award, Users, BookOpen, Heart } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { useLanguage } from '../../contexts/LanguageContext';
import { professionalPortfolio, sections } from '../../data/portfolio';
/**
 * Professional Portfolio Section - SICI3016/SICI4998 Requirements
 * Displays general information, student life, and professional improvement
 */
const ProfessionalPortfolio = () => {
    const { t, language } = useLanguage();
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGenerateResume = async () => {
        setIsGenerating(true);
        try {
            const { generateResume } = await import('../../utils/generateResume');
            await generateResume(language);
        } catch (error) {
            console.error('Error generating resume:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleGenerateTranscript = async () => {
        setIsGenerating(true);
        try {
            const { generateTranscript } = await import('../../utils/generateTranscript');
            await generateTranscript(language);
        } catch (error) {
            console.error('Error generating transcript:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <Section
            id="portfolio"
            title={t(sections.portfolio.title)}
            subtitle={t(sections.portfolio.subtitle)}
            className="bg-earth-900"
        >
            <div className="space-y-12 max-w-5xl mx-auto">
                {/* General Information */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-cream-100 mb-6 flex items-center gap-3">
                        <FileText className="w-6 h-6 text-primary-400" />
                        {t(sections.portfolio.generalInfo)}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Resume/CV Card */}
                        <Card className="flex flex-col">
                            <div className="p-6 flex-1">
                                <h4 className="text-xl font-bold text-cream-100 mb-3">
                                    {t(professionalPortfolio.generalInfo.resume.title)}
                                </h4>
                                <p className="text-cream-600 mb-6 leading-relaxed">
                                    {t(professionalPortfolio.generalInfo.resume.description)}
                                </p>
                                <Button
                                    onClick={handleGenerateResume}
                                    variant="primary"
                                    size="md"
                                    className="w-full"
                                    disabled={isGenerating}
                                >
                                    <Download className={`w-4 h-4 mr-2 ${isGenerating ? 'animate-bounce' : ''}`} />
                                    {isGenerating
                                        ? (language === 'es' ? 'Generando...' : 'Generating...')
                                        : t(sections.portfolio.downloadResume)}
                                </Button>
                            </div>
                        </Card>

                        {/* Transcript Card */}
                        <Card className="flex flex-col">
                            <div className="p-6 flex-1">
                                <h4 className="text-xl font-bold text-cream-100 mb-3">
                                    {t(professionalPortfolio.generalInfo.transcript.title)}
                                </h4>
                                <p className="text-cream-600 mb-6 leading-relaxed">
                                    {t(professionalPortfolio.generalInfo.transcript.description)}
                                </p>
                                <Button
                                    onClick={handleGenerateTranscript}
                                    variant="primary"
                                    size="md"
                                    className="w-full"
                                    disabled={isGenerating}
                                >
                                    <Download className={`w-4 h-4 mr-2 ${isGenerating ? 'animate-bounce' : ''}`} />
                                    {isGenerating
                                        ? (language === 'es' ? 'Generando...' : 'Generating...')
                                        : t(sections.portfolio.viewDocument)}
                                </Button>
                            </div>
                        </Card>

                        {/* Biographic Sketch Card */}
                        <Card className="flex flex-col">
                            <div className="p-6 flex-1">
                                <h4 className="text-xl font-bold text-cream-100 mb-3">
                                    {t(professionalPortfolio.generalInfo.biographicSketch.title)}
                                </h4>
                                <p className="text-cream-600 mb-4 text-sm leading-relaxed">
                                    {t(professionalPortfolio.generalInfo.biographicSketch.description)}
                                </p>
                                <div className="p-4 bg-earth-800 rounded-lg border border-earth-700">
                                    <p className="text-cream-500 text-sm leading-relaxed">
                                        {t(professionalPortfolio.generalInfo.biographicSketch.content)}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </motion.div>

                {/* Student Life */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-cream-100 mb-6 flex items-center gap-3">
                        <Users className="w-6 h-6 text-sage-400" />
                        {t(sections.portfolio.studentLife)}
                    </h3>

                    {/* Reflection */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <Card>
                            <div className="p-6">
                                <h4 className="text-xl font-bold text-cream-100 mb-4">
                                    {t(professionalPortfolio.studentLife.reflection.title)}
                                </h4>
                                <p className="text-cream-600 leading-relaxed whitespace-pre-line">
                                    {t(professionalPortfolio.studentLife.reflection.content)}
                                </p>
                            </div>
                        </Card>
                    </motion.div>

                    <div className="grid md:grid-cols-1 gap-4">
                        {professionalPortfolio.studentLife.activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="hover:border-sage-500 transition-colors">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <h4 className="text-lg font-bold text-cream-100">
                                                {t(activity.name)}
                                            </h4>
                                            <Badge variant={activity.category === 'academic' ? 'sage' : 'primary'}>
                                                {t(sections.portfolio.type[activity.category])}
                                            </Badge>
                                        </div>
                                        <p className="text-cream-600 leading-relaxed">
                                            {t(activity.description)}
                                        </p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Special Projects */}
                    <div className="mt-8">
                        <h4 className="text-xl font-bold text-cream-100 mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary-400" />
                            {t(professionalPortfolio.studentLife.specialProjects.title)}
                        </h4>
                        <div className="grid md:grid-cols-1 gap-4">
                            {professionalPortfolio.studentLife.specialProjects.items.map((project, index) => (
                                <Card key={index} className="overflow-hidden">
                                    <div className="md:flex">
                                        <div className="md:w-1/3 h-48 md:h-auto relative">
                                            <img
                                                src={`${import.meta.env.BASE_URL}${project.image.replace('./', '')}`}
                                                alt={t(project.title)}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = 'https://placehold.co/600x400/1a1a1a/ffffff?text=Project';
                                                }}
                                            />
                                        </div>
                                        <div className="p-6 md:w-2/3 flex flex-col justify-center">
                                            <h5 className="text-lg font-bold text-cream-100 mb-2">
                                                {project.link ? (
                                                    <a
                                                        href={project.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-primary-400 transition-colors hover:underline"
                                                    >
                                                        {t(project.title)}
                                                    </a>
                                                ) : (
                                                    t(project.title)
                                                )}
                                            </h5>
                                            <p className="text-cream-600 mb-4">
                                                {t(project.description)}
                                            </p>
                                            {project.link && (
                                                <Button
                                                    href={project.link}
                                                    variant="outline"
                                                    size="sm"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="self-start"
                                                >
                                                    {t(sections.portfolio.goToWebsite)}
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Competencies */}
                    <div className="mt-8">
                        <h4 className="text-xl font-bold text-cream-100 mb-4 flex items-center gap-2">
                            <Award className="w-5 h-5 text-primary-400" />
                            {t(professionalPortfolio.studentLife.competencies.title)}
                        </h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            {professionalPortfolio.studentLife.competencies.items.map((comp, index) => (
                                <Card key={index}>
                                    <div className="p-4">
                                        <h5 className="text-lg font-bold text-cream-100 mb-2">
                                            {t(comp.title)}
                                        </h5>
                                        <p className="text-cream-600 text-sm">
                                            {t(comp.description)}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                    {/* Acknowledgments */}
                    <div className="mt-8">
                        <h4 className="text-xl font-bold text-cream-100 mb-4 flex items-center gap-2">
                            <Heart className="w-5 h-5 text-red-400" />
                            {t(professionalPortfolio.studentLife.acknowledgments.title)}
                        </h4>

                        <p className="text-cream-600 mb-6 leading-relaxed italic">
                            {t(professionalPortfolio.studentLife.acknowledgments.intro)}
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            {professionalPortfolio.studentLife.acknowledgments.items.map((item, index) => (
                                <Card key={index} className="h-full">
                                    <div className="p-4 flex flex-col h-full">
                                        <h5 className="text-lg font-bold text-cream-100 mb-1">
                                            {t(item.name)}
                                        </h5>
                                        <div className="mb-3">
                                            <Badge variant="sage" size="sm">
                                                {t(item.relation)}
                                            </Badge>
                                        </div>
                                        <p className="text-cream-600 text-sm italic leading-relaxed">
                                            "{t(item.message)}"
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Diplomas */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <h3 className="text-2xl font-bold text-cream-100 mb-6 flex items-center gap-3">
                        <Award className="w-6 h-6 text-primary-400" />
                        {t(professionalPortfolio.diplomas.title)}
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {professionalPortfolio.diplomas.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="flex flex-col h-full">
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <h4 className="text-xl font-bold text-cream-100">
                                                {t(item.title)}
                                            </h4>
                                            <Badge variant={item.status === 'completed' ? 'primary' : 'default'}>
                                                {item.status === 'completed' ? 'Completed' : 'Pending'}
                                            </Badge>
                                        </div>

                                        <p className="text-sage-400 font-medium mb-1">
                                            {t(item.institution)}
                                        </p>
                                        <p className="text-cream-600 text-sm mb-4">
                                            {t(item.date)}
                                        </p>

                                        <p className="text-cream-600 mb-6 leading-relaxed flex-1">
                                            {t(item.description)}
                                        </p>

                                        {item.file ? (
                                            <Button
                                                href={item.file}
                                                variant="primary"
                                                size="md"
                                                className="w-full mt-auto"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Download className="w-4 h-4 mr-2" />
                                                {t(sections.portfolio.viewDocument)}
                                            </Button>
                                        ) : (
                                            <div className="w-full p-3 bg-earth-800 border border-earth-700 rounded-lg text-center mt-auto">
                                                <span className="text-cream-500 text-sm">
                                                    {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Professional Improvement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <h3 className="text-2xl font-bold text-cream-100 mb-6 flex items-center gap-3">
                        <Award className="w-6 h-6 text-primary-400" />
                        {t(sections.portfolio.professionalImprovement)}
                    </h3>

                    <div className="grid md:grid-cols-1 gap-4">
                        {professionalPortfolio.professionalImprovement.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Card className="flex flex-col h-full">
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <h4 className="text-xl font-bold text-cream-100">
                                                {t(item.title)}
                                            </h4>
                                            <Badge
                                                variant={item.type === 'certification' ? 'primary' : 'sage'}
                                            >
                                                {item.type === 'self-study'
                                                    ? t(sections.portfolio.type.selfStudy)
                                                    : t(sections.portfolio.type[item.type])}
                                            </Badge>
                                        </div>

                                        <p className="text-cream-600 mb-4 leading-relaxed">
                                            {t(item.description)}
                                        </p>

                                        {/* Skills */}
                                        {item.skills && item.skills.length > 0 && (
                                            <div>
                                                <p className="text-sm font-semibold text-sage-400 mb-2">
                                                    {t(sections.portfolio.skills)}:
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {item.skills.map((skill, skillIndex) => (
                                                        <motion.span
                                                            key={skillIndex}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            whileInView={{ opacity: 1, scale: 1 }}
                                                            viewport={{ once: true }}
                                                            transition={{ duration: 0.2, delay: skillIndex * 0.05 }}
                                                            className="px-3 py-1 bg-earth-800 text-cream-500 rounded-full text-xs border border-earth-600"
                                                        >
                                                            {skill}
                                                        </motion.span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {item.file && (
                                            <Button
                                                href={item.file}
                                                variant="primary"
                                                size="md"
                                                className="w-full mt-auto"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Download className="w-4 h-4 mr-2" />
                                                {t(sections.portfolio.viewDocument)}
                                            </Button>
                                        )}
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Technical Books */}
                    <div className="mt-8">
                        <h4 className="text-xl font-bold text-cream-100 mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary-400" />
                            {t(professionalPortfolio.professionalImprovement.books.title)}
                        </h4>
                        <div className="grid md:grid-cols-1 gap-4">
                            {professionalPortfolio.professionalImprovement.books.items.map((book, index) => (
                                <Card key={index}>
                                    <div className="p-4">
                                        <h5 className="text-lg font-bold text-cream-100 mb-1">
                                            {book.title}
                                        </h5>
                                        <p className="text-sage-400 text-sm mb-2">
                                            {book.author}
                                        </p>
                                        <p className="text-cream-600 text-sm">
                                            {t(book.summary)}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Professional Life */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-cream-100 mb-6 flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary-400" />
                        {t(professionalPortfolio.professionalLife.title)}
                    </h3>

                    {/* Practice Data (CIRACET) */}
                    <div className="mb-8">
                        <h4 className="text-xl font-bold text-cream-100 mb-4">
                            {t(professionalPortfolio.professionalLife.practice.title)}
                        </h4>
                        {/* We reuse the experience card logic here for the specific practice item */}
                        {professionalPortfolio.professionalImprovement.items
                            .filter(item => item.organization === 'CIRACET Corp.') // Assuming this is the practice
                            .map((item, index) => (
                                <Card key={index}>
                                    <div className="p-6">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                            <div className="flex-1">
                                                <h4 className="text-xl font-bold text-cream-100 mb-2">
                                                    {t(item.title)}
                                                </h4>
                                                <p className="text-sage-400 font-medium mb-1">
                                                    {item.organization}
                                                </p>
                                                <p className="text-cream-600 text-sm">
                                                    {t(item.date)}
                                                </p>
                                            </div>
                                            <Badge variant="primary">
                                                {t(sections.portfolio.type[item.type])}
                                            </Badge>
                                        </div>
                                        <p className="text-cream-600 mb-4 leading-relaxed">
                                            {t(item.description)}
                                        </p>
                                    </div>
                                </Card>
                            ))}
                    </div>

                    {/* Documents Grid */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {professionalPortfolio.professionalLife.documents.map((doc, index) => (
                            <Card key={index} className="flex flex-col h-full">
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h4 className="text-lg font-bold text-cream-100">
                                            {t(doc.title)}
                                        </h4>
                                        <Badge variant={doc.status === 'completed' ? 'primary' : 'default'}>
                                            {doc.status === 'completed' ? 'Completed' : 'Pending'}
                                        </Badge>
                                    </div>
                                    <p className="text-cream-600 mb-6 leading-relaxed flex-1">
                                        {t(doc.description)}
                                    </p>
                                    {doc.file ? (
                                        <Button
                                            href={doc.file}
                                            variant="primary"
                                            size="md"
                                            className="w-full mt-auto"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            {t(sections.portfolio.viewDocument)}
                                        </Button>
                                    ) : (
                                        <div className="w-full p-3 bg-earth-800 border border-earth-700 rounded-lg text-center mt-auto">
                                            <span className="text-cream-500 text-sm">
                                                {language === 'es' ? 'Próximamente' : 'Coming Soon'}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                </motion.div>

                {/* Footer Note */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="text-center pt-8 border-t border-earth-700"
                >
                    <p className="text-cream-600 text-sm flex items-center justify-center gap-2">
                        <BookOpen className="w-4 h-4 text-primary-400" />
                        <span>Universidad de Puerto Rico - Ponce | SICI3016 / SICI4998</span>
                    </p>
                </motion.div>
            </div>
        </Section >
    );
};

export default ProfessionalPortfolio;
