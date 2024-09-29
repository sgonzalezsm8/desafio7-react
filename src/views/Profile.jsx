import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const { token, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/'); // Redirigir al home después de hacer logout
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4"><FontAwesomeIcon icon={faUser} /> Perfil</h2>
      {token ? (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Información del Usuario</h5>
            <p className="card-text">Nombre: Juan Pérez</p>
            <p className="card-text">Email: juan.perez@example.com</p>
            <button className="btn btn-danger" onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Logout
            </button>
          </div>
        </div>
      ) : (
        <p>Por favor, inicie sesión para ver su perfil.</p>
      )}
    </div>
  );
};

export default Profile;
