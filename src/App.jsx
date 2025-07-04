import { Routes, Route } from 'react-router-dom';

import Scores from './components/scores';
import Score from './components/score';

//returns 2 routes, 1 with all scores, 1 with 1 score
function App() {
  return (
    <Routes>
      <Route path="/" element={<Scores />} />
      <Route path="/scores/:id" element={<Score />} />
    </Routes>
  );
}

export default App;