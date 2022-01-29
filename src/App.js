import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import TitleIndustry from './components/TitleIndustry';
import Profile from './components/Profile';
import Personality from './components/Personality';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<TitleIndustry/>}/>
        <Route path="/profile" exact element={<Profile/>}/>
        <Route path="/personality" exact element={<Personality/>}/>
      </Routes>
    </>
  );
}

export default App;
