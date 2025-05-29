import React, { useState } from 'react';
import CinemaHall from '../components/CinemaHall';
import BookingForm from '../components/BookingForm';
import { movies } from '../data/movies';

const BookingPage = ({ movie }) => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleSeatSelect = (seatId) => {
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const handleProceed = () => {
    if (selectedSeats.length > 0) {
      setShowForm(true);
    }
  };

  return (
    <div className="booking-page">
      <h2>Бронювання квитків на "{movie.title}"</h2>
      
      <CinemaHall 
        onSeatSelect={handleSeatSelect}
      />
      
      {selectedSeats.length > 0 && !showForm && (
        <div className="booking-summary">
          <h3>Обрані місця: {selectedSeats.join(', ')}</h3>
          <p>Загальна вартість: {selectedSeats.length * 150} грн</p>
          <button onClick={handleProceed} className="proceed-button">
            Продовжити бронювання
          </button>
        </div>
      )}

      {showForm && (
        <BookingForm 
          selectedSeats={selectedSeats} 
          movie={movie}
          onBack={() => setShowForm(false)}
        />
      )}
    </div>
  );
};

export default BookingPage;