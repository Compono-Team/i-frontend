import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import PreApplication from './pages/PreApplication/PreApplication';

function App():JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/application" element={<PreApplication />} />
    </Routes>
  );
}

export default App;
