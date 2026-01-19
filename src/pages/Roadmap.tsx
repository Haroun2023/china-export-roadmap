import React, { useState } from 'react';
import { ROADMAP_STEPS } from '../constants';
import { CheckCircle2, Circle, ChevronDown, ChevronUp, FileText, ExternalLink, Info } from 'lucide-react';

export const Roadmap: React.FC = () => {
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [openSteps, setOpenSteps] = useState<string[]>([ROADMAP_STEPS[0].id]);

  const toggleStep = (id: string) => {
    setOpenSteps(prev => 
      prev.includes(id) ? prev.filter(stepId => stepId !== id) : [...prev, id]
    );
  };

  const toggleComplete = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setCompletedSteps(prev => 
      prev.includes(id) ? prev.filter(stepId => stepId !== id) : [...prev, id]
    );
  };

  const progress = Math.round((completedSteps.length / ROADMAP_STEPS.length) * 100);

  // Group steps by phase
  const phases = Array.from(new Set(ROADMAP_STEPS.map(s => s.phase))).map(phaseName => {
     return {
         name: phaseName,
         title: ROADMAP_STEPS.find(s => s.phase === phaseName)?.phaseTitle || '',
         steps: ROADMAP_STEPS.filter(s => s.phase === phaseName)
     }
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="font-serif text-4xl font-bold text-stone-900 mb-4">Import Compliance Roadmap</h1>
        <p className="text-stone-600 max-w-2xl mx-auto">Follow this step-by-step guide to navigate Saudi Arabia's import regulations. Track your progress and ensure you meet all requirements before your first shipment.</p>
      </div>

      {/* Progress Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200 mb-12">
        <div className="flex justify-between items-end mb-4">
            <div>
                <span className="text-sm font-medium text-stone-500 uppercase tracking-wide">Overall Progress</span>
                <div className="text-3xl font-serif font-bold text-stone-900 mt-1">
                    {completedSteps.length} of {ROADMAP_STEPS.length} steps completed
                </div>
            </div>
            <div className="text-4xl font-bold text-teal-700">{progress}%</div>
        </div>
        <div className="w-full bg-stone-100 rounded-full h-3 overflow-hidden">
            <div 
                className="bg-teal-700 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
            />
        </div>
      </div>

      {/* Timeline / Phases */}
      <div className="space-y-12">
        {phases.map((phase, index) => (
            <div key={phase.name} className="relative">
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-teal-700 text-white p-3 rounded-lg shadow-sm">
                        <FileText size={24} />
                    </div>
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-stone-900">{phase.name}: {phase.title}</h2>
                        <p className="text-sm text-stone-500">{completedSteps.filter(id => phase.steps.find(s => s.id === id)).length} of {phase.steps.length} steps completed</p>
                    </div>
                </div>

                {/* Steps Accordion */}
                <div className="space-y-4 ml-4 md:ml-6 border-l-2 border-stone-200 pl-6 md:pl-8 pb-4">
                    {phase.steps.map(step => {
                        const isOpen = openSteps.includes(step.id);
                        const isCompleted = completedSteps.includes(step.id);

                        return (
                            <div 
                                key={step.id} 
                                className={`bg-white border transition-all duration-200 rounded-xl overflow-hidden ${isOpen ? 'border-teal-200 shadow-md' : 'border-stone-200 shadow-sm hover:border-teal-200'}`}
                            >
                                {/* Step Header */}
                                <div 
                                    onClick={() => toggleStep(step.id)}
                                    className="p-5 flex items-start gap-4 cursor-pointer select-none"
                                >
                                    <button 
                                        onClick={(e) => toggleComplete(e, step.id)}
                                        className={`mt-1 flex-shrink-0 transition-colors ${isCompleted ? 'text-teal-600' : 'text-stone-300 hover:text-teal-600'}`}
                                    >
                                        {isCompleted ? <CheckCircle2 size={24} className="fill-teal-50" /> : <Circle size={24} />}
                                    </button>
                                    
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center mb-1">
                                            <h3 className={`font-semibold text-lg ${isCompleted ? 'text-stone-900' : 'text-stone-900'}`}>{step.title}</h3>
                                            <button className="text-stone-400">
                                                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                            </button>
                                        </div>
                                        <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
                                    </div>
                                </div>

                                {/* Step Content */}
                                {isOpen && (
                                    <div className="px-5 pb-6 pl-[3.5rem] space-y-6">
                                        {/* Instructions */}
                                        <div>
                                            <h4 className="font-medium text-teal-800 flex items-center gap-2 mb-3 text-sm uppercase tracking-wide">
                                                <Info size={16} /> Step-by-Step Instructions
                                            </h4>
                                            <ol className="list-decimal list-inside space-y-2 text-stone-700">
                                                {step.content.instructions.map((inst, i) => (
                                                    <li key={i} className="leading-relaxed pl-1 marker:font-medium marker:text-stone-400">{inst}</li>
                                                ))}
                                            </ol>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Documents */}
                                            <div className="bg-stone-50 p-4 rounded-lg border border-stone-100">
                                                <h4 className="font-medium text-stone-900 mb-3 text-sm">Required Documents</h4>
                                                <ul className="space-y-2">
                                                    {step.content.documents.map((doc, i) => (
                                                        <li key={i} className="flex items-center gap-2 text-sm text-stone-600">
                                                            <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
                                                            {doc}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Pro Tips */}
                                            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                                                 <h4 className="font-medium text-orange-900 mb-3 text-sm">Pro Tips</h4>
                                                <ul className="space-y-2">
                                                    {step.content.tips.map((tip, i) => (
                                                        <li key={i} className="flex items-start gap-2 text-sm text-orange-800">
                                                            <span className="mt-1.5 w-1 h-1 rounded-full bg-orange-400"></span>
                                                            <span className="leading-snug">{tip}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Resources */}
                                        {step.content.resources.length > 0 && (
                                            <div className="pt-4 border-t border-stone-100 flex gap-3 flex-wrap">
                                                {step.content.resources.map((res, i) => (
                                                    <a 
                                                        key={i} 
                                                        href={res.url} 
                                                        className="inline-flex items-center gap-1.5 text-sm font-medium text-teal-700 bg-teal-50 px-3 py-1.5 rounded-md hover:bg-teal-100 transition-colors"
                                                    >
                                                        {res.name} <ExternalLink size={14} />
                                                    </a>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};
