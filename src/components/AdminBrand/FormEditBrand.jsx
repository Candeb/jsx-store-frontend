import { useState } from 'react';

const FormEditBrand = ({ onSubmit, initialValue }) => {
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
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FormEditBrand;
