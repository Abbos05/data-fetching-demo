// src/components/FormResult.js
import React from 'react';

const FormResult = ({ data }) => {
  if (!data) return null;

  return (
    <div>
      <h2>Результать форма</h2>
      <p><strong>Имя :</strong> {data.firstName}</p>
      <p><strong>Фамилия: </strong> {data.lastName}</p>
      <p><strong>Email: </strong> {data.email}</p>
    </div>
  );
};

export default FormResult;
