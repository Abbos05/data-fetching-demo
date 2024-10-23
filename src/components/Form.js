// src/components/Form.js
import React, { useState } from 'react';
import Input from './Input';
import Button from './Button';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Передача данных в родительский компонент
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="Имя "
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <Input
        label="Фамилия"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Button text="Отправить" />
    </form>
  );
};

export default Form;
