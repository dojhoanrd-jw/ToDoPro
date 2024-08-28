// Importaciones al inicio del archivo
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Home from './Pages/Home';
import Authentication from './Pages/Authentication';
import styled from 'styled-components'; // Mover esta importación al inicio

// Componente para mostrar mientras se carga el estado de autenticación
const Loading = () => (
  <LoadingContainer>
    <p>Cargando...</p>
  </LoadingContainer>
);

// Componente para mostrar errores en la autenticación
const ErrorMessage = ({ error }) => (
  <ErrorContainer>
    <p>Error: {error.message}</p>
  </ErrorContainer>
);

// Estilos para los componentes de carga y error
const LoadingContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #f0f2f5;
`;

const ErrorContainer = styled(LoadingContainer)`
  background-color: #ffe6e6;
  color: #ff0000;
`;

const App = () => {
  // Hook para monitorear el estado de autenticación
  const [user, loading, error] = useAuthState(auth);

  // Mientras se carga el estado de autenticación
  if (loading) {
    return <Loading />;
  }

  // Si hay un error al obtener el estado de autenticación
  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <Router>
      <Routes>
        {/* Ruta para la página de autenticación */}
        <Route
          path="/auth"
          element={!user ? <Authentication /> : <Navigate to="/home" replace />}
        />
        
        {/* Ruta protegida para la página de inicio */}
        <Route
          path="/home"
          element={user ? <Home /> : <Navigate to="/auth" replace />}
        />
        
        {/* Ruta por defecto que redirige según el estado de autenticación */}
        <Route
          path="/"
          element={<Navigate to={user ? "/home" : "/auth"} replace />}
        />
        
        {/* Ruta para manejar rutas no encontradas */}
        <Route
          path="*"
          element={<Navigate to={user ? "/home" : "/auth"} replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
