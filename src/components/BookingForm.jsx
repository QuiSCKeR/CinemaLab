import React, { useState } from 'react';
import { toast } from 'react-toastify';

export function BookingForm({ selectedSeats, movieId, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Будь ласка, заповніть всі поля');
      return;
    }
    onSubmit({ ...formData, seats: selectedSeats, movieId });
    toast.success('Бронювання успішне!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ім'я"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
      />
      <input
        type="tel"
        placeholder="Телефон"
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
      />
      <button type="submit">Забронювати</button>
    </form>
  );
}