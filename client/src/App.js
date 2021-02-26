import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './components/Home';
// import { NewItem } from './components/NewItem';

function App() {
  return (
    <Router>
      <div className='App'>
        <Route exact path='/' component={Home} />
        {/* <Route exact path='/NewItem' component={NewItem} /> */}
      </div>
    </Router>
  );
}

export default App;
