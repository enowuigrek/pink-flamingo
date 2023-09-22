import './App.css';
import { useState } from 'react';
import { Word } from './components/Word';
import { CheckButton } from './components/CheckButton';
import { StartTestButton } from './components/StartTestButton';
import { words } from './dataWords';

function App() {
    const [answers, setAnswers] = useState([]);
    const [selectedWords, setSelectedWords] = useState([]);
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [correctness, setCorrectness] = useState([]);

    const startTest = () => {
        const shuffledWords = [...words].sort(() => 0.5 - Math.random());
        setSelectedWords(shuffledWords.slice(0, 5));
        setAnswers(Array(5).fill(''));
        setIsTestStarted(true);
        setCorrectness(Array(5).fill(null));
    };

    const handleAnswerChange = (index, value) => {
        const newAnswers = [...answers];
        newAnswers[index] = value;
        setAnswers(newAnswers);
    };

    const checkAnswers = () => {
        const newCorrectness = answers.map(
            (answer, index) =>
                answer.toLowerCase() === selectedWords[index].en.toLowerCase()
        );
        setCorrectness(newCorrectness);
    };

    if (!isTestStarted) {
        return <StartTestButton onStartTest={startTest} />;
    }

    return (
        <>
            <div className='box'>
                {answers.map((_, index) => (
                    <Word
                        key={index}
                        word={selectedWords[index]}
                        onAnswerChange={(value) =>
                            handleAnswerChange(index, value)
                        }
                        isCorrect={correctness[index]}
                    />
                ))}
            </div>
            <CheckButton onCheck={checkAnswers} />
        </>
    );
}

export default App;
