import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <NavBar />
      </div>
    </Router>
  );
};

export default App;
