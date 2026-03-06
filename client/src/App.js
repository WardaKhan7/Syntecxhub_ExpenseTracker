import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import LandingPage from './pages/Landing';
import './index.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if token exists in local storage
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  return (
    <Router>
      <Routes>
        {/* Public Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Auth Routes */}
        <Route
          path="/login"
          element={!isAuthenticated ? <Login setAuth={setAuth} /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/signup"
          element={!isAuthenticated ? <Signup setAuth={setAuth} /> : <Navigate to="/dashboard" />}
        />

        {/* Protected Dashboard Route */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard setAuth={setAuth} /> : <Navigate to="/login" />}
        />

        {/* Catch-all route to redirect back to landing page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
