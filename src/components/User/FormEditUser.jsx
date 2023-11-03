import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormEditUser = ({ onSubmit, initialValue }) => {
  const [user, setUser] = useState({
    name: initialValue.name || '',
    lastname: initialValue.lastname || '',
    email: initialValue.email || '',
  });

  useEffect(() => {
    setUser({
      name: initialValue.name || '',
      lastname: initialValue.lastname || '',
      email: initialValue.email || '',
    });
  }, [initialValue]);

  const navigate = useNavigate();

  const userId = localStorage.getItem('userId');

  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const renderField = (label, name) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <label style={{ fontWeight: '600', fontSize: '15px', minWidth: '60px' }}>
        {label}
      </label>
      <input
        onChange={handleChangeInput}
        name={name}
        value={user[name]}
        style={{
          background: '#80808038',
          border: 'none',
          padding: '10px',
          fontSize: '15px',
        }}
      />
    </div>
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({
      name: '',
      lastname: '',
      email: '',
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        gap: '15px',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {renderField('Nombre', 'name')}
      {renderField('Apellido', 'lastname')}
      {renderField('Email', 'email')}
      <div
        style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: '10px',
        }}
      >
        <button
          onClick={() => {
            navigate(`/user/${userId}`);
          }}
          className="btn btn-outline-secondary"
        >
          Cancelar
        </button>
        <button className="btn btn-primary" type="submit">
          Actualizar
        </button>
      </div>
    </form>
  );
};

export default FormEditUser;
