import React, { useState } from 'react';

const AdminCardOrder = ({ initialValue }) => {
  const [user, setUser] = useState({
    name: initialValue.name || '',
    email: initialValue.email || '',
  });

  const renderField = () => (
    <div>
      <p> {initialValue.name} </p>
      <p> {initialValue.email} </p>
    </div>
  );

  return <div> {renderField} </div>;
};

export default AdminCardOrder;
