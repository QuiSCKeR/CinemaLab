import React, { useState } from 'react';
import { toast } from 'react-toastify';
import './BookingForm.css';

const BookingForm = ({ selectedSeats, movie, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(`Успішне бронювання! Місця: ${selectedSeats.join(', ')}`);
    // Тут можна додати логіку відправки даних на сервер
  };

  return (
    <div className="booking-form-container">
      <h3>Заповніть дані для бронювання</h3>
      
      <div className="booking-details">
        <p><strong>Фільм:</strong> {movie.title}</p>
        <p><strong>Місця:</strong> {selectedSeats.join(', ')}</p>
        <p><strong>Вартість:</strong> {selectedSeats.length * 150} грн</p>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Ім'я:</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Телефон:</label>
          <input 
            type="tel" 
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            required
          />
        </div>
        
        <div className="form-actions">
          <button type="button" onClick={onBack} className="back-button">
            Назад
          </button>
          <button type="submit" className="submit-button">
            Забронювати
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;