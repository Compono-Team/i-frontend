import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';

function App():JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
