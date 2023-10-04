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
        return (
            <div className='start-container'>
                <h1>Happy Birthday, Kasia! 🎉🥳</h1>
                <p>Wishing you a day filled with joy and success in your English learning journey! 🎈✨</p>
                <StartTestButton onStartTest={startTest} />
                <p>Be kind to those who care and wish you the best. 💐🌟</p>
            </div>
        );
    }

    return (
        <div className='main-container'>
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
        </div>
    );
}

export default App;
