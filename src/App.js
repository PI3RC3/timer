import './App.css';
import dayjs from 'dayjs';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer'

function App() {
    const deadline = dayjs('2024-1-3').valueOf();

    return (
        <div className="App">
            <CountdownTimer
                countdownEnd={deadline}
            />
        </div>

    );
}

export default App;
