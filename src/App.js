import './App.css';
import dayjs from 'dayjs';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer'

function App() {
    const deadline = dayjs('2024-3-15').valueOf();

    return (
        <div className="App">
            <CountdownTimer
                countdownEnd={deadline}
            />
        </div>

    );
}

export default App;
