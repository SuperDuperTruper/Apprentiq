'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  FileText, 
  Pencil, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import { templates, CVTemplate } from './templates';
import { CVFormData } from './types';
import CVForm from './CVForm';
import CVPreview from './CVPreview';

export default function CVBuilder() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [step, setStep] = useState<'template' | 'form' | 'preview'>('template');
  const [formData, setFormData] = useState<CVFormData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      location: '',
      linkedin: '',
      website: '',
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
    awards: [],
    publications: [],
  });

  const getProgress = () => {
    const sections = [
      formData.personalInfo,
      formData.education,
      formData.experience,
      formData.skills,
      formData.projects,
      formData.awards,
      formData.publications
    ];
    
    const filledSections = sections.filter(section => {
      if (Array.isArray(section)) {
        return section.length > 0;
      }
      return Object.values(section).some(value => value !== '');
    });

    return (filledSections.length / sections.length) * 100;
  };

  if (step === 'form') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <CVForm
          template={selectedTemplate!}
          formData={formData}
          setFormData={setFormData}
          onBack={() => setStep('template')}
          onNext={() => setStep('preview')}
        />
      </motion.div>
    );
  }

  if (step === 'preview') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        <CVPreview
          template={selectedTemplate!}
          formData={formData}
          onBack={() => setStep('form')}
          onDownload={() => {/* Implement PDF download */}}
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">CV Builder</h1>
          <p className="text-gray-400 mt-2">Choose from our professional templates to create your CV</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-400">
            Progress: {Math.round(getProgress())}%
          </div>
          <Progress value={getProgress()} className="w-32" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {templates.map((template: CVTemplate, index: number) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card
                className={`cursor-pointer transition-all transform hover:scale-105 ${
                  selectedTemplate === template.id
                    ? 'ring-2 ring-primary'
                    : 'hover:bg-gray-800/50'
                } bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700`}
                onClick={() => {
                  setSelectedTemplate(template.id);
                  setStep('form');
                }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      {template.name}
                    </CardTitle>
                    <Sparkles className="w-5 h-5 text-yellow-500" />
                  </div>
                  <CardDescription className="text-gray-400">
                    {template.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[210/297] relative bg-white rounded-lg overflow-hidden group">
                    <img
                      src={template.thumbnail}
                      alt={template.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button className="bg-primary/90 hover:bg-primary">
                        <Pencil className="w-4 h-4 mr-2" /> Use Template
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <h4 className="text-sm font-medium text-gray-300">Best For:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {template.bestFor.map((item: string, index: number) => (
                        <motion.li
                          key={index}
                          className="flex items-center"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-primary mr-2" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
} 