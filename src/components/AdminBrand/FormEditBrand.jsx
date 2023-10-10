import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FormEditBrand = ({ onSubmit, initialValue }) => {
  const navigate = useNavigate();
  const [brand, setBrand] = useState({
    name: initialValue.name || '',
    picture: initialValue.picture || '',
  });

  const handleChangeInput = (e) => {
    setBrand({
      ...brand,
      [e.target.name]: e.target.value,
    });
  };

  const renderField = (label, name) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <label style={{ fontWeight: '600', fontSize: '15px' }}>{label}</label>
      <input
        onChange={handleChangeInput}
        name={name}
        value={brand[name]}
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
    onSubmit(brand);
    setBrand({
      name: '',
      picture: '',
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
      {renderField('Nombre de la marca', 'name')}
      {renderField('Imagen de la marca', 'picture')}
      <div
        style={{
          display: 'flex',
          gap: '15px',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <button
          onClick={() => {
            navigate('/admin/brands');
          }}
          className="btn btn-outline-secondary"
        >
          {' '}
          Cancelar{' '}
        </button>{' '}
        <button className="btn btn-outline-success" type="submit">
          Actualizar
        </button>
      </div>
    </form>
  );
};

export default FormEditBrand;
