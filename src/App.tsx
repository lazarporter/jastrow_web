import './App.css';
import { LogInPage } from './pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  // a navbar that always renders
  return (
    <Router>
      <Route path="" element={<h1>Not implemented: "/"</h1>} />
      <Route path="login" element={<LogInPage />} />
    </Router>
  );
}

export default App;
