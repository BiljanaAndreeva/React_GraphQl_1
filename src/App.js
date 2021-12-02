import './App.css';
import CharactersList from './pages/CharactersList';
import Character from './pages/Character';
import Search from './pages/Search';
import {Routes, Route} from "react-router"

function App() {
  return (
    <div className="App">
      
      <Search/>
      <Routes>
      <Route strict exact  path="/:id" element={<Character/>}/>
      {/* <Route strict exact path="search" element={<Search/>}/> */}
      <Route strict exact path="/" element={<CharactersList/>}/>
        
        
      </Routes>
    </div>
  );
}

export default App;
