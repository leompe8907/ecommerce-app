import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebase from '../../firebase';

import "./Registro.css"


const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [emailError, setEmailError] = useState('');
  const [cuil, setCuil] = useState('')


  const handleRegister = async () => {
    const auth = getAuth(firebase);
    const db = getFirestore(firebase);

    // Validar correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/ ;
    if (!emailRegex.test(email)) {
      setEmailError('Ingresa un correo electrónico válido');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Enviar correo de verificación
      await sendEmailVerification(user);

      // Almacenar información adicional en la base de datos
      const userData = {
        userId: user.uid,
        email: user.email,
        name,
        phone,
        company,
        address,
        cuil,
      };
      await addDoc(collection(db, 'users'), userData);

      console.log('Usuario registrado:', user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(errorCode, errorMessage);
    }
  };

  return (
    <div className='register-container'>
      <div className='register-inter'>
        <div className='register-name'>
          <h2>Registro de Usuario</h2>
        </div>
        <div className='register-input'>
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
          <input
            type="text"
            placeholder="Nombre"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Telefono"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            placeholder="Empresa"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="number"
            placeholder="CUIL"
            value={cuil}
            onChange={(e) => setCuil(e.target.value)}
          />
          <input
            type="text"
            placeholder="Dirección"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <button onClick={handleRegister}>Registrarse</button>
        </div>
      </div>
    </div>
  );
};

export default Register;

