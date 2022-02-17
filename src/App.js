import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import TitleIndustry from './components/TitleIndustry';
import Profile from './components/Profile';
import Personality from './components/Personality';
import Goal from './components/Goal';
import Story from './components/Story';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<TitleIndustry/>}/>
        <Route path="/profile" exact element={<Profile/>}/>
        <Route path="/personality" exact element={<Personality/>}/>
        <Route path="/goal" exact element={<Goal/>}/>
        <Route path="/story" exact element={<Story/>}/>
      </Routes>
    </>
  );
}

export default App;
