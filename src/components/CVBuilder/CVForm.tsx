'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import { 
  Plus,
  Trash2,
  ArrowLeft,
  ArrowRight,
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  Code,
  BookOpen
} from 'lucide-react';
import { CVFormData } from './types';
import { CVTemplate } from './templates';

interface CVFormProps {
  template: string;
  formData: CVFormData;
  setFormData: (data: CVFormData) => void;
  onBack: () => void;
  onNext: () => void;
}

export default function CVForm({ template, formData, setFormData, onBack, onNext }: CVFormProps) {
  const [currentSection, setCurrentSection] = useState<keyof CVFormData>('personalInfo');

  const sections = [
    { id: 'personalInfo', title: 'Personal Information', icon: FileText },
    { id: 'education', title: 'Education', icon: GraduationCap },
    { id: 'experience', title: 'Experience', icon: Briefcase },
    { id: 'skills', title: 'Skills', icon: Code },
    { id: 'projects', title: 'Projects', icon: BookOpen },
    { id: 'awards', title: 'Awards', icon: Award }
  ];

  const updatePersonalInfo = (field: keyof typeof formData.personalInfo, value: string) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [field]: value,
      },
    });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        {
          school: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          achievements: []
        }
      ]
    });
  };

  const updateEducation = (index: number, field: keyof typeof formData.education[0], value: string) => {
    const newEducation = [...formData.education];
    newEducation[index] = {
      ...newEducation[index],
      [field]: value
    };
    setFormData({
      ...formData,
      education: newEducation
    });
  };

  const removeEducation = (index: number) => {
    setFormData({
      ...formData,
      education: formData.education.filter((_, i) => i !== index)
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        {
          company: '',
          position: '',
          location: '',
          startDate: '',
          endDate: '',
          current: false,
          description: []
        }
      ]
    });
  };

  const updateExperience = (index: number, field: keyof typeof formData.experience[0], value: string | boolean) => {
    const newExperience = [...formData.experience];
    newExperience[index] = {
      ...newExperience[index],
      [field]: value
    };
    setFormData({
      ...formData,
      experience: newExperience
    });
  };

  const removeExperience = (index: number) => {
    setFormData({
      ...formData,
      experience: formData.experience.filter((_, i) => i !== index)
    });
  };

  const addSkill = () => {
    setFormData({
      ...formData,
      skills: [
        ...formData.skills,
        {
          category: '',
          items: []
        }
      ]
    });
  };

  const updateSkill = (index: number, field: keyof typeof formData.skills[0], value: string | string[]) => {
    const newSkills = [...formData.skills];
    newSkills[index] = {
      ...newSkills[index],
      [field]: value
    };
    setFormData({
      ...formData,
      skills: newSkills
    });
  };

  const removeSkill = (index: number) => {
    setFormData({
      ...formData,
      skills: formData.skills.filter((_, i) => i !== index)
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Build Your CV</h1>
        <div className="flex space-x-4">
          <Button
            onClick={onBack}
            className="flex items-center bg-transparent border border-gray-600 hover:bg-gray-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <Button onClick={onNext} className="flex items-center">
            Next <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Navigation Sidebar */}
        <Card className="col-span-3 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
          <CardContent className="p-4">
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <motion.button
                    key={section.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center px-4 py-2 rounded-lg transition-colors ${
                      currentSection === section.id
                        ? 'bg-primary text-white'
                        : 'text-gray-400 hover:bg-gray-700'
                    }`}
                    onClick={() => setCurrentSection(section.id as keyof CVFormData)}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {section.title}
                  </motion.button>
                );
              })}
            </nav>
          </CardContent>
        </Card>

        {/* Form Content */}
        <Card className="col-span-9 bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">
              {sections.find(s => s.id === currentSection)?.title}
            </CardTitle>
            <CardDescription className="text-gray-400">
              Fill in your {currentSection} details
            </CardDescription>
          </CardHeader>
          <CardContent>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                {currentSection === 'personalInfo' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.personalInfo.firstName}
                        onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                        placeholder="John"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={formData.personalInfo.lastName}
                        onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                        placeholder="Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.personalInfo.email}
                        onChange={(e) => updatePersonalInfo('email', e.target.value)}
                        placeholder="john.doe@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.personalInfo.phone}
                        onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        value={formData.personalInfo.location}
                        onChange={(e) => updatePersonalInfo('location', e.target.value)}
                        placeholder="New York, NY"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        value={formData.personalInfo.linkedin}
                        onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
                        placeholder="linkedin.com/in/johndoe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        value={formData.personalInfo.website}
                        onChange={(e) => updatePersonalInfo('website', e.target.value)}
                        placeholder="johndoe.com"
                      />
                    </div>
                  </div>
                )}

                {currentSection === 'education' && (
                  <div className="space-y-6">
                    {formData.education.map((edu, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="p-4 bg-gray-700/30 rounded-lg space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium text-white">Education #{index + 1}</h3>
                          <Button
                            className="bg-red-600 hover:bg-red-700 p-1"
                            onClick={() => removeEducation(index)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>School</Label>
                            <Input
                              value={edu.school}
                              onChange={(e) => updateEducation(index, 'school', e.target.value)}
                              placeholder="University Name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Degree</Label>
                            <Input
                              value={edu.degree}
                              onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                              placeholder="Bachelor's, Master's, etc."
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Field of Study</Label>
                            <Input
                              value={edu.field}
                              onChange={(e) => updateEducation(index, 'field', e.target.value)}
                              placeholder="Computer Science"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>GPA (Optional)</Label>
                            <Input
                              value={edu.gpa || ''}
                              onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                              placeholder="3.8"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Start Date</Label>
                            <Input
                              type="month"
                              value={edu.startDate}
                              onChange={(e) => updateEducation(index, 'startDate', e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>End Date</Label>
                            <Input
                              type="month"
                              value={edu.endDate}
                              onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    <Button
                      onClick={addEducation}
                      className="w-full bg-transparent border border-gray-600 hover:bg-gray-700"
                    >
                      <Plus className="w-4 h-4 mr-2" /> Add Education
                    </Button>
                  </div>
                )}

                {currentSection === 'experience' && (
                  <div className="space-y-6">
                    {formData.experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="p-4 bg-gray-700/30 rounded-lg space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium text-white">Experience #{index + 1}</h3>
                          <Button
                            className="bg-red-600 hover:bg-red-700 p-1"
                            onClick={() => removeExperience(index)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label>Company</Label>
                            <Input
                              value={exp.company}
                              onChange={(e) => updateExperience(index, 'company', e.target.value)}
                              placeholder="Company Name"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Position</Label>
                            <Input
                              value={exp.position}
                              onChange={(e) => updateExperience(index, 'position', e.target.value)}
                              placeholder="Software Engineer"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Location</Label>
                            <Input
                              value={exp.location}
                              onChange={(e) => updateExperience(index, 'location', e.target.value)}
                              placeholder="New York, NY"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Start Date</Label>
                            <Input
                              type="month"
                              value={exp.startDate}
                              onChange={(e) => updateExperience(index, 'startDate', e.target.value)}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>End Date</Label>
                            <Input
                              type="month"
                              value={exp.endDate}
                              onChange={(e) => updateExperience(index, 'endDate', e.target.value)}
                              disabled={exp.current}
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label>Description</Label>
                          <Textarea
                            value={exp.description.join('\n')}
                            onChange={(e) => updateExperience(index, 'description', e.target.value.split('\n'))}
                            placeholder="• Developed and maintained..."
                            className="h-32"
                          />
                        </div>
                      </motion.div>
                    ))}
                    <Button
                      onClick={addExperience}
                      className="w-full bg-transparent border border-gray-600 hover:bg-gray-700"
                    >
                      <Plus className="w-4 h-4 mr-2" /> Add Experience
                    </Button>
                  </div>
                )}

                {currentSection === 'skills' && (
                  <div className="space-y-6">
                    {formData.skills.map((skill, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="p-4 bg-gray-700/30 rounded-lg space-y-4"
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="text-lg font-medium text-white">Skill Category #{index + 1}</h3>
                          <Button
                            className="bg-red-600 hover:bg-red-700 p-1"
                            onClick={() => removeSkill(index)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label>Category</Label>
                            <Input
                              value={skill.category}
                              onChange={(e) => updateSkill(index, 'category', e.target.value)}
                              placeholder="Programming Languages"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label>Skills (comma-separated)</Label>
                            <Input
                              value={skill.items.join(', ')}
                              onChange={(e) => updateSkill(index, 'items', e.target.value.split(',').map(s => s.trim()))}
                              placeholder="Python, JavaScript, TypeScript"
                            />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                    <Button
                      onClick={addSkill}
                      className="w-full bg-transparent border border-gray-600 hover:bg-gray-700"
                    >
                      <Plus className="w-4 h-4 mr-2" /> Add Skill Category
                    </Button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
} 