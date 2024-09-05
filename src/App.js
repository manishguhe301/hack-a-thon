import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Details from './components/ChallengeDetails/Details';
import CreateChallenge from './components/CreateChallenge/CreateChallenge';

function App() {
  return (
    <div className='App'>
      <Header />
      <div style={{ width: '100%', height: 'auto' }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/challenge-details/:id' element={<Details />} />
          <Route path='/create-challenge' element={<CreateChallenge />} />
          <Route path='/create-challenge/:id' element={<CreateChallenge />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
