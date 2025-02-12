import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './Firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Pages/Home';
import Authentication from './Pages/Authentication';
import LandingPage from './Pages/LandingPage';
import './App.css';

const Loading = () => (
  <div className="loading-container">
    <p>Cargando...</p>
  </div>
);

const ErrorMessage = ({ error }) => (
  <div className="error-container">
    <p>Error: {error.message}</p>
  </div>
);

const App = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!user ? <LandingPage /> : <Navigate to="/home" replace />}
        />
        <Route
          path="/auth"
          element={!user ? <Authentication /> : <Navigate to="/home" replace />}
        />
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/auth" replace />}
        />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
