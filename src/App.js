import NavBar from './layout/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NotFound from './pages/NotFound';
import Home from './pages/Home';
import About from './pages/About';
import UserProfile from './pages/UserProfile';
import Footer from './layout/Footer';

import { UserContextProvider } from './store/UserContext';

const App = () => {
  return (
    <UserContextProvider>
      <Router>
        <div className="flex flex-col justify-between h-screen overflow-y-auto bg-[#E7E8D1]">
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/:login" element={<UserProfile />} />
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
