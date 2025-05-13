'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { templates, CVTemplate } from './templates';
import { CVFormData } from './types';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { 
  Download,
  ArrowLeft,
  FileText,
  GraduationCap,
  Briefcase,
  Code,
  Award,
  Link as LinkIcon
} from 'lucide-react';

interface CVPreviewProps {
  template: string;
  formData: CVFormData;
  onBack: () => void;
  onDownload: () => void;
}

export default function CVPreview({ template, formData, onBack }: CVPreviewProps) {
  const cvRef = useRef<HTMLDivElement>(null);
  const selectedTemplate = templates.find(t => t.id === template) as CVTemplate;

  const downloadPDF = async () => {
    if (!cvRef.current) return;

    const canvas = await html2canvas(cvRef.current, {
      scale: 2,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`${formData.personalInfo.firstName}-${formData.personalInfo.lastName}-CV.pdf`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Preview Your CV</h1>
        <div className="flex space-x-4">
          <Button 
            onClick={onBack}
            className="flex items-center bg-transparent border border-gray-600 hover:bg-gray-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Editor
          </Button>
          <Button onClick={downloadPDF} className="flex items-center">
            <Download className="w-4 h-4 mr-2" /> Download PDF
          </Button>
        </div>
      </div>

      <Card className="bg-white">
        <CardContent className="p-0">
          <div
            ref={cvRef}
            className="w-[210mm] min-h-[297mm] mx-auto bg-white shadow-lg"
            style={{
              fontFamily: selectedTemplate.style.fontFamily,
            }}
          >
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-12 py-8"
              style={{ color: selectedTemplate.style.primaryColor }}
            >
              <h1 className="text-3xl font-bold">
                {formData.personalInfo.firstName} {formData.personalInfo.lastName}
              </h1>
              <div className="mt-2 flex flex-wrap gap-4 text-sm" style={{ color: selectedTemplate.style.secondaryColor }}>
                {formData.personalInfo.email && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center"
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    {formData.personalInfo.email}
                  </motion.span>
                )}
                {formData.personalInfo.phone && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center"
                  >
                    {formData.personalInfo.phone}
                  </motion.span>
                )}
                {formData.personalInfo.location && (
                  <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center"
                  >
                    {formData.personalInfo.location}
                  </motion.span>
                )}
                {formData.personalInfo.linkedin && (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    href={formData.personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <LinkIcon className="w-4 h-4 mr-1" />
                    LinkedIn
                  </motion.a>
                )}
                {formData.personalInfo.website && (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    href={formData.personalInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <LinkIcon className="w-4 h-4 mr-1" />
                    Portfolio
                  </motion.a>
                )}
              </div>
            </motion.div>

            {/* Main Content */}
            <div className={`px-12 pb-8 grid ${
              selectedTemplate.style.layout === 'two-column'
                ? 'grid-cols-3 gap-8'
                : 'grid-cols-1 gap-6'
            }`}>
              {/* Left Column (for two-column layout) */}
              {selectedTemplate.style.layout === 'two-column' && (
                <div className="col-span-1 space-y-6">
                  {/* Skills Section */}
                  {formData.skills.length > 0 && (
                    <motion.section
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                    >
                      <h2 className="text-xl font-semibold mb-3 flex items-center" style={{ color: selectedTemplate.style.primaryColor }}>
                        <Code className="w-5 h-5 mr-2" />
                        Skills
                      </h2>
                      {formData.skills.map((skillGroup, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="mb-3"
                        >
                          <h3 className="font-medium" style={{ color: selectedTemplate.style.secondaryColor }}>
                            {skillGroup.category}
                          </h3>
                          <p className="text-sm">{skillGroup.items.join(', ')}</p>
                        </motion.div>
                      ))}
                    </motion.section>
                  )}
                </div>
              )}

              {/* Main/Right Column */}
              <div className={selectedTemplate.style.layout === 'two-column' ? 'col-span-2' : 'col-span-1'}>
                {/* Education Section */}
                {formData.education.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <h2 className="text-xl font-semibold mb-4 flex items-center" style={{ color: selectedTemplate.style.primaryColor }}>
                      <GraduationCap className="w-5 h-5 mr-2" />
                      Education
                    </h2>
                    {formData.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-4"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{edu.school}</h3>
                            <p className="text-sm" style={{ color: selectedTemplate.style.secondaryColor }}>
                              {edu.degree} in {edu.field}
                              {edu.gpa && ` • GPA: ${edu.gpa}`}
                            </p>
                          </div>
                          <p className="text-sm" style={{ color: selectedTemplate.style.secondaryColor }}>
                            {edu.startDate} - {edu.endDate}
                          </p>
                        </div>
                        {edu.achievements.length > 0 && (
                          <ul className="mt-2 list-disc pl-4 text-sm space-y-1">
                            {edu.achievements.map((achievement, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </motion.section>
                )}

                {/* Experience Section */}
                {formData.experience.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <h2 className="text-xl font-semibold mb-4 flex items-center" style={{ color: selectedTemplate.style.primaryColor }}>
                      <Briefcase className="w-5 h-5 mr-2" />
                      Experience
                    </h2>
                    {formData.experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-4"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{exp.company}</h3>
                            <p className="text-sm" style={{ color: selectedTemplate.style.secondaryColor }}>
                              {exp.position} • {exp.location}
                            </p>
                          </div>
                          <p className="text-sm" style={{ color: selectedTemplate.style.secondaryColor }}>
                            {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                          </p>
                        </div>
                        {exp.description.length > 0 && (
                          <ul className="mt-2 list-disc pl-4 text-sm space-y-1">
                            {exp.description.map((desc, i) => (
                              <motion.li
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.05 }}
                              >
                                {desc}
                              </motion.li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    ))}
                  </motion.section>
                )}

                {/* Awards Section */}
                {formData.awards.length > 0 && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6"
                  >
                    <h2 className="text-xl font-semibold mb-4 flex items-center" style={{ color: selectedTemplate.style.primaryColor }}>
                      <Award className="w-5 h-5 mr-2" />
                      Awards & Achievements
                    </h2>
                    {formData.awards.map((award, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-4"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-semibold">{award.title}</h3>
                            <p className="text-sm" style={{ color: selectedTemplate.style.secondaryColor }}>
                              {award.issuer}
                            </p>
                          </div>
                          <p className="text-sm" style={{ color: selectedTemplate.style.secondaryColor }}>
                            {award.date}
                          </p>
                        </div>
                        <p className="mt-1 text-sm">{award.description}</p>
                      </motion.div>
                    ))}
                  </motion.section>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
} 