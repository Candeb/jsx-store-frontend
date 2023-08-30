import { useState } from 'react';

const FormEditProduct = ({ onSubmit, initialValue }) => {
  const [product, setProduct] = useState({
    name: initialValue.name || '',
    description: initialValue.description || '',
    price: initialValue.price || '',
    picture: initialValue.picture || '',
    available: initialValue.available || '',
    brandsId: initialValue.brandsId || '',
  });

  const handleChangeInput = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const renderField = (label, name, type) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <label style={{ fontWeight: '600', fontSize: '15px' }}>{label}</label>
      <input
        onChange={handleChangeInput}
        name={name}
        type={type}
        value={product[name]}
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
    console.log('productedit-->', product);
    onSubmit(product);
    setProduct({
      name: '',
      description: '',
      price: '',
      picture: '',
      available: '',
      brandsId: '',
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
        alignItems: 'flex-start',
      }}
    >
      {renderField('Nombre del producto', 'name', 'text')}
      {renderField('Descripcion del producto', 'description', 'text')}
      {renderField('Precio del producto', 'price', 'number')}
      {renderField('URL de la imagen del producto', 'picture', 'text')}
      {renderField('Stock del producto', 'available', 'boolean')}
      {renderField('ID de la marca del producto', 'brandsId', 'number')}

      <button className="btn btn-outline-success" type="submit">
        Submit
      </button>
      {/* <button className="btn btn-outline-secondary"> Cancelar </button> */}
    </form>
  );
};

export default FormEditProduct;
