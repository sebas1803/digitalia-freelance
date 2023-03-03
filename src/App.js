import './App.css';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Footer from './layouts/footer';
import Home from './pages/home';
import RegisterReceipt from './pages/registerReceipt';
import PageNotFound from './pages/pageNotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register-receipt" element={<RegisterReceipt />} />
        <Route path="/page-not-found" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="page-not-found" />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
