// import './App';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import Homepage from './pages/Homepage';
import GameDashboard from './pages/GameDashboard';
import Gameroom from './pages/Gameroom';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/homepage" component={Homepage} />
        <Route exact path="/gamedashboard" component={GameDashboard} />
        <Route exact path="/gameroom" component={Gameroom} />
        <Route exact path="/profile" component= {Profile}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}



export default App;
