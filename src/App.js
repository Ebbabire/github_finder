import NavBar from './components/layout/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Footer from './components/layout/Footer';
import { UserContextProvider } from './store/UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen overflow-y-auto bg-[#FCEDDA]">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </UserContextProvider>
  );
};

export default App;
