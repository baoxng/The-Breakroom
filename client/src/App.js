// import './App';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav'
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <Footer />
    </div>
    
  );
}



export default App;
