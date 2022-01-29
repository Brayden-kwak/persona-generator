import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Personality from './components/Personality';
import TitleIndustry from './components/TitleIndustry';

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Profile/>}/>
      <Route path="/personality" exact element={<Personality/>}/>
      <Route path="/titleIndustry" exact element={<TitleIndustry/>}/>
    </Routes>
  );
}

export default App;
