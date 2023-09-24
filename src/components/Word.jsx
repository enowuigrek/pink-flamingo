export function Word({ word, onAnswerChange, isCorrect }) {
    const handleInputChange = (e) => {
        onAnswerChange(e.target.value);
    };

    let inputStyle = {};
    let feedbackMessage = '';

    if (isCorrect === true) {
        inputStyle.backgroundColor = 'lightgreen';
        inputStyle.color = '#242424';
        feedbackMessage = 'Dobrze!';
    } else if (isCorrect === false) {
        inputStyle.backgroundColor = 'lightcoral';
        feedbackMessage = `${word.en}`;
    }

    return (
        <>
            <div className='word'>
                <p>{word.pl}</p>
                <div>
                    <input style={inputStyle} onChange={handleInputChange} />
                    <span className=''>{feedbackMessage}</span>
                </div>
            </div>
        </>
    );
}
