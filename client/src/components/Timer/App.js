import './App.css';
import CountDownTimer from './CountDownTimer';

function TimerApp() {

  const hoursMinSecs = {hours:0, minutes: 15, seconds: 00}
  
  return (
    <div className="App">
        <CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
  );
}

export default TimerApp;
