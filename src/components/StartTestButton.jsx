import logo from '../assets/logo.png';

export function StartTestButton({ onStartTest }) {
    return (
        <>
            <img className='logo' src={logo} alt='Logo' />;
            <button onClick={onStartTest}>Przejdź do testu</button>
        </>
    );
}
