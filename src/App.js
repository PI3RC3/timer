import './App.css';
import dayjs from 'dayjs';
import CountdownTimer from './Components/CountdownTimer/CountdownTimer'

function App() {
    const deadline = dayjs('2022-3-2').valueOf();

    return (
        <div className="App">
            <CountdownTimer
                countdownEnd={deadline}
            />
        </div>

    );
}

export default App;
