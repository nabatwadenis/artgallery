import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route  exact path='/' element ={<Home/>} />
        <Route  path='/about' element ={<About/>} />
        <Route  path='/news' elements ={<News/>} />
      </Routes>
      
    </Router>
  );
}

export default App;
