import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
    </Router>
  );
}

export default App;
