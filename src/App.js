import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SidebarMenu from './components/Sidebar/Sidebar';
import Dashboard from './components/pages/Dashboard';
import NotFound from './components/pages/NotFound';
import { ResponsiveProvider } from './context/ResponsiveContext';

function App() {
  return (
    <ResponsiveProvider>
      <Router>
        <Layout />
      </Router>
    </ResponsiveProvider>
  );
}

const Layout = () => {
  
  return (
    <div style={styles.layoutContainer}>
      <SidebarMenu />
      <div style={styles.contentContainer}>
        <Navbar />
        <main style={styles.mainContent}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;

const styles = {
  layoutContainer: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#f3f4f6', 
  },
  contentContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.3s ease-in-out', 
  },
  mainContent: {
    flex: 1,
    padding: '1.5rem', 
    overflowY: 'auto',
  },
};