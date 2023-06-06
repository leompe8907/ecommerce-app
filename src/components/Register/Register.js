import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../firebase';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    const auth = getAuth(firebase);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registro exitoso
        const user = userCredential.user;
        // Realizar acciones adicionales si es necesario
        console.log('Usuario registrado:', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Manejar errores de registro
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <h2>Registro de Usuario</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Register;
