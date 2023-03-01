import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { EventPage, Home } from './pages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventPage />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
