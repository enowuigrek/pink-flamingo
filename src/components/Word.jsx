export function Word({ word, onAnswerChange, isCorrect }) {
    const handleInputChange = (e) => {
        onAnswerChange(e.target.value);
    };

    let feedbackMessage = '';
    let spanStyle = {};

    if (isCorrect === true) {
        spanStyle.color = '#4DA04B';
        feedbackMessage = 'dobrze!';
    } else if (isCorrect === false) {
        spanStyle.color = '#FF5D5D';
        feedbackMessage = `${word.en}`;
    }

    return (
        <div className='word'>
            <p>{word.pl}</p>
            <div>
                <input onChange={handleInputChange} />
                <span style={spanStyle}>{feedbackMessage}</span>
            </div>
        </div>
    );
}
