import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SingleCharacter from './components/SingleCharacter/SingleCharater';
function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/details/:characterId' element={<SingleCharacter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
