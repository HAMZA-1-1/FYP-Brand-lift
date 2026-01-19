import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { surveyQuestions } from '../lib/surveyQuestions';
import { SurveyStep } from '../components/survey/SurveyStep';
import { ProgressBar } from '../components/survey/ProgressBar';
import { ResultsPage } from '../components/survey/ResultsPage';
import { predictDomain, SurveyAnswers } from '../lib/domainPredictor';
import { saveSurveyResults } from '../lib/mongodb';
import { useAuth } from '../contexts/AuthContext';

export function SurveyPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const viewResults = searchParams.get('view') === 'results';
  
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<SurveyAnswers>({});
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    if (viewResults) {
      const savedResults = localStorage.getItem('surveyResults');
      if (savedResults) {
        setResults(JSON.parse(savedResults));
      } else {
        navigate('/survey');
      }
    } else {
      const savedAnswers = localStorage.getItem('surveyAnswers');
      const savedStep = localStorage.getItem('surveyStep');
      if (savedAnswers) {
        setAnswers(JSON.parse(savedAnswers));
      }
      if (savedStep) {
        setCurrentStep(parseInt(savedStep, 10));
      }
    }
  }, [viewResults, navigate]);

  const handleAnswer = (questionId: string, value: string | string[]) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);
    localStorage.setItem('surveyAnswers', JSON.stringify(newAnswers));
  };

  const handleNext = () => {
    if (currentStep < surveyQuestions.length) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      localStorage.setItem('surveyStep', nextStep.toString());
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      localStorage.setItem('surveyStep', prevStep.toString());
    }
  };

  const handleSubmit = async () => {
    const prediction = predictDomain(answers);
    setResults(prediction);
    localStorage.setItem('surveyResults', JSON.stringify(prediction));
    localStorage.setItem('surveyCompleted', 'true');
    localStorage.removeItem('surveyAnswers');
    localStorage.removeItem('surveyStep');

    // Save to MongoDB
    try {
      await saveSurveyResults({
        userId: user?.id || undefined,
        email: user?.email || undefined,
        answers: answers,
        results: prediction,
      });
    } catch (error) {
      console.error('Failed to save survey results to MongoDB:', error);
      // Continue even if MongoDB save fails - results are in localStorage
    }
  };

  if (viewResults && results) {
    return <ResultsPage results={results} />;
  }

  const currentStepData = surveyQuestions.find((step) => step.id === currentStep);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProgressBar currentStep={currentStep} totalSteps={surveyQuestions.length} />
        
        {currentStepData && (
          <SurveyStep
            step={currentStepData}
            currentStep={currentStep}
            onAnswer={handleAnswer}
            answers={answers}
            onNext={handleNext}
            onPrevious={handlePrevious}
            isLastStep={currentStep === surveyQuestions.length}
          />
        )}
      </div>
    </div>
  );
}

