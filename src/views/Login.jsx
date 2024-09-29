
import { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const { token, login } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (email && password) {
      login(); // Simula el inicio de sesión
      navigate('/'); // Redirige al home tras el login
    } else {
      alert('Por favor, ingrese sus credenciales.');
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        <FontAwesomeIcon icon={faSignInAlt} /> Iniciar Sesión
      </h2>
      {token ? (
        <div className="alert alert-success" role="alert">
          Ya has iniciado sesión.
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <FontAwesomeIcon icon={faLock} /> Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            <FontAwesomeIcon icon={faSignInAlt} /> Iniciar Sesión
          </button>
        </form>
      )}
    </div>
  );
};

export default Login;
