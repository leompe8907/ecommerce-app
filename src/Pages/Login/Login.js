import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importa el componente Link si utilizas React Router
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    const auth = getAuth(firebase);

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Ingresa un correo electrónico válido');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Inicio de sesión exitoso');
      // Redireccionar a la página principal o a la página después del inicio de sesión
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {emailError && <p>{emailError}</p>}
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <p>¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link></p> {/* Ajusta la ruta a tu formulario de registro */}
    </div>
  );
};

export default Login;
