// import './App';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import Homepage from './pages/Homepage';
import GameDashboard from './pages/GameDashboard';
import Gameroom from './pages/Gameroom';
import Profile from './pages/Profile';
import GameOne from "./pages/GameOne";
import GameTwo from "./pages/GameTwo";
import GameThree from "./pages/GameThree";
import GameFour from "./pages/GameFour";
import GameFive from "./pages/GameFive";
import Login from "./components/Login/login";

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
        <Route exact path="/amoebaonline" component={GameOne} />
        <Route exact path="/narrowescape" component={GameTwo} />
        <Route exact path="/tapslime" component={GameThree} />
        <Route exact path="/fruitmachine" component={GameFour} />
        <Route exact path="/spacedash" component={GameFive} />
        <Route exact path="/login" component={Login}/>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}



export default App;
