import React from 'react';
import { HashRouter as Router, Routes, Route, ScrollRestoration } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Roadmap } from './pages/Roadmap';
import { Suppliers } from './pages/Suppliers';
import { Calculator } from './pages/Calculator';
import { MarketAnalysis } from './pages/MarketAnalysis';

// ScrollToTop component to handle scroll position on route change
const ScrollToTop: React.FC = () => {
    // ScrollRestoration handles this in data routers, but simple useEffect works for HashRouter v6 sometimes
    // But react-router-dom v6 has ScrollRestoration component which is better.
    return null;
}

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/suppliers" element={<Suppliers />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
