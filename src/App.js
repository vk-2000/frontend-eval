import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ThemeContextProvider } from './contexts/TemeContext';
import { Error, EventPage, Home } from './pages';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/:id" element={<EventPage />} />
            <Route path="/error/:errorCode?" element={<Error />} />
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </BrowserRouter>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
