
import React, { useState, useCallback, useMemo } from 'react';
import { Language, QuestionType, QuizState } from './types';
import { QUESTIONS } from './data/questions';

const App: React.FC = () => {
  const [state, setState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    userAnswers: new Array(75).fill(null),
    isFinished: false,
    language: Language.EN
  });

  const [selectedOption, setSelectedOption] = useState<string | number | null>(null);
  const [hasConfirmed, setHasConfirmed] = useState(false);

  const currentQuestion = useMemo(() => QUESTIONS[state.currentQuestionIndex], [state.currentQuestionIndex]);
  const isArabic = state.language === Language.AR;

  const toggleLanguage = () => {
    setState(prev => ({
      ...prev,
      language: prev.language === Language.EN ? Language.AR : Language.EN
    }));
  };

  const handleOptionSelect = (option: string | number) => {
    if (hasConfirmed) return;
    setSelectedOption(option);
  };

  const confirmAnswer = () => {
    if (selectedOption === null || hasConfirmed) return;
    
    setHasConfirmed(true);
    const isCorrect = selectedOption.toString() === currentQuestion.correctAnswer.toString();
    
    setState(prev => {
      const newUserAnswers = [...prev.userAnswers];
      newUserAnswers[prev.currentQuestionIndex] = selectedOption;
      return {
        ...prev,
        score: isCorrect ? prev.score + 1 : prev.score,
        userAnswers: newUserAnswers
      };
    });
  };

  const nextQuestion = () => {
    if (state.currentQuestionIndex < 74) {
      setState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1
      }));
      setSelectedOption(null);
      setHasConfirmed(false);
    } else {
      setState(prev => ({ ...prev, isFinished: true }));
    }
  };

  const restartQuiz = () => {
    setState({
      currentQuestionIndex: 0,
      score: 0,
      userAnswers: new Array(75).fill(null),
      isFinished: false,
      language: Language.EN
    });
    setSelectedOption(null);
    setHasConfirmed(false);
  };

  if (state.isFinished) {
    return (
      <div className={`min-h-screen flex items-center justify-center p-4 ${isArabic ? 'arabic' : ''}`}>
        <div className="glass-panel max-w-2xl w-full rounded-3xl p-8 text-center shadow-2xl border-2 border-slate-500/30">
          <h2 className="text-4xl font-bold mb-6 text-cyan-400">
            {isArabic ? 'النتيجة النهائية' : 'Final Result'}
          </h2>
          <div className="text-6xl font-bold mb-4 text-white">
            {state.score} / 75
          </div>
          <p className="text-xl text-slate-300 mb-8">
            {isArabic 
              ? `لقد أكملت الامتحان بنجاح. النسبة المئوية: ${((state.score / 75) * 100).toFixed(1)}%` 
              : `You have successfully completed the exam. Percentage: ${((state.score / 75) * 100).toFixed(1)}%`}
          </p>
          <button 
            onClick={restartQuiz}
            className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            {isArabic ? 'إعادة الامتحان' : 'Restart Exam'}
          </button>
          
          <div className="mt-12 pt-8 border-t border-slate-700 text-slate-400 text-sm">
            <p>{isArabic ? 'تمت البرمجة بواسطة: علي عدنان كاظم' : 'Programmed by: Ali Adnan Kazem'}</p>
            <p>2026 - {isArabic ? 'هندسة الامن السيبراني' : 'Cyber Security Engineering'}</p>
            <p>{isArabic ? 'جامعة المنارة' : 'Al-Manara University'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen p-4 md:p-8 flex flex-col ${isArabic ? 'arabic' : ''}`}>
      {/* Header */}
      <header className="max-w-4xl mx-auto w-full flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-1">
            {isArabic ? 'امتحان أساسيات علوم المنطق' : 'Fundamentals of Logic Exam'}
          </h1>
          <p className="text-slate-400 text-sm">
            {isArabic ? 'المرحلة الاولى - هندسة الامن السيبراني' : 'First Stage - Cyber Security Engineering'}
          </p>
        </div>
        
        <button 
          onClick={toggleLanguage}
          className="bg-slate-700 hover:bg-slate-600 text-cyan-300 px-4 py-2 rounded-lg border border-cyan-500/50 font-medium transition-all"
        >
          {isArabic ? 'English' : 'العربية'}
        </button>
      </header>

      {/* Progress */}
      <div className="max-w-4xl mx-auto w-full mb-6">
        <div className="flex justify-between items-end mb-2">
          <span className="text-cyan-400 font-bold">{isArabic ? 'السؤال' : 'Question'} {state.currentQuestionIndex + 1} / 75</span>
          <span className="text-slate-400 text-xs">
            {state.currentQuestionIndex < 50 
              ? (isArabic ? 'اختيارات (MCQ)' : 'Multiple Choice (MCQ)') 
              : (isArabic ? 'صح أو خطأ (T/F)' : 'True or False (T/F)')}
          </span>
        </div>
        <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-cyan-500 transition-all duration-500"
            style={{ width: `${((state.currentQuestionIndex + 1) / 75) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Main Question Card */}
      <main className="max-w-4xl mx-auto w-full flex-grow">
        <div className="glass-panel rounded-3xl p-6 md:p-10 shadow-xl min-h-[400px] flex flex-col border-2 border-slate-700/50">
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl text-white leading-relaxed">
              {isArabic ? currentQuestion.text.ar : currentQuestion.text.en}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-auto">
            {currentQuestion.type === QuestionType.MCQ ? (
              currentQuestion.options?.[isArabic ? 'ar' : 'en'].map((opt, idx) => {
                const isCorrect = idx.toString() === currentQuestion.correctAnswer.toString();
                const isSelected = selectedOption === idx;
                
                let bgColor = 'bg-slate-800/50 hover:bg-slate-700/50 border-slate-700';
                if (hasConfirmed) {
                  if (isCorrect) bgColor = 'bg-green-600 border-green-400 text-white';
                  else if (isSelected) bgColor = 'bg-red-600 border-red-400 text-white';
                } else if (isSelected) {
                  bgColor = 'bg-cyan-600/50 border-cyan-400 text-white';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleOptionSelect(idx)}
                    disabled={hasConfirmed}
                    className={`${bgColor} border-2 p-5 rounded-2xl text-left transition-all flex items-center gap-4 text-lg`}
                  >
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    {opt}
                  </button>
                );
              })
            ) : (
              ['true', 'false'].map((val) => {
                const isCorrect = val === currentQuestion.correctAnswer.toString();
                const isSelected = selectedOption === val;
                
                let bgColor = 'bg-slate-800/50 hover:bg-slate-700/50 border-slate-700';
                if (hasConfirmed) {
                  if (isCorrect) bgColor = 'bg-green-600 border-green-400 text-white';
                  else if (isSelected) bgColor = 'bg-red-600 border-red-400 text-white';
                } else if (isSelected) {
                  bgColor = 'bg-cyan-600/50 border-cyan-400 text-white';
                }

                return (
                  <button
                    key={val}
                    onClick={() => handleOptionSelect(val)}
                    disabled={hasConfirmed}
                    className={`${bgColor} border-2 p-8 rounded-2xl text-center transition-all text-2xl font-bold uppercase tracking-widest`}
                  >
                    {val === 'true' 
                      ? (isArabic ? 'صح ✔️' : 'True ✔️') 
                      : (isArabic ? 'خطأ ✖️' : 'False ✖️')}
                  </button>
                );
              })
            )}
          </div>

          <div className="mt-10 flex justify-end gap-4">
            {!hasConfirmed ? (
              <button
                onClick={confirmAnswer}
                disabled={selectedOption === null}
                className={`${selectedOption === null ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'} bg-cyan-600 text-white px-10 py-3 rounded-full font-bold transition-all shadow-lg shadow-cyan-900/40`}
              >
                {isArabic ? 'تأكيد الإجابة' : 'Confirm Answer'}
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="hover:scale-105 active:scale-95 bg-white text-slate-900 px-10 py-3 rounded-full font-bold transition-all shadow-lg"
              >
                {state.currentQuestionIndex === 74 
                  ? (isArabic ? 'إنهاء الامتحان' : 'Finish Exam') 
                  : (isArabic ? 'السؤال التالي ⬅️' : 'Next Question ➡️')}
              </button>
            )}
          </div>
        </div>
      </main>

      {/* Footer / Credits */}
      <footer className="max-w-4xl mx-auto w-full mt-12 mb-8 text-center text-slate-500 text-sm">
        <div className="flex flex-col items-center gap-2">
          <div className="h-px w-24 bg-slate-700 mb-4"></div>
          <p className="font-semibold text-slate-400 text-base">
            {isArabic ? 'تمت البرمجة بواسطة: علي عدنان كاظم' : 'Programmed by: Ali Adnan Kazem'}
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 opacity-75">
            <span>{isArabic ? 'الحقوق لسنة 2026' : 'Copyright 2026'}</span>
            <span>•</span>
            <span>{isArabic ? 'كلية الهندسة' : 'College of Engineering'}</span>
            <span>•</span>
            <span>{isArabic ? 'هندسة الامن السيبراني' : 'Cyber Security Engineering'}</span>
            <span>•</span>
            <span>{isArabic ? 'المرحلة الاولى' : 'First Stage'}</span>
            <span>•</span>
            <span>{isArabic ? 'جامعة المنارة' : 'Al-Manara University'}</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
