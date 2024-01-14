import { Routes, Route } from 'react-router-dom';
import PreApplicationV2 from 'pages/PreApplication_V2/PreApplicationV2';
import Landing from './pages/Landing/Landing';
import PreApplication from './pages/PreApplication/PreApplication';

function App():JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/application" element={<PreApplication />} />
      <Route path="/applicationv2" element={<PreApplicationV2 />} />
    </Routes>
  );
}

export default App;
