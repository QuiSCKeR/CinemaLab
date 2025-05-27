import React, { useState } from 'react';
import './CinemaHall.css';

export function CinemaHall({ movieId }) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  
  const handleSelectSeat = (seatId) => {
    setSelectedSeats(prev =>
      prev.includes(seatId)
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= 50; i++) {
      seats.push(
        <Seat 
          key={i}
          seatId={i}
          isSelected={selectedSeats.includes(i)}
          onSelect={handleSelectSeat}
        />
      );
    }
    return seats;
  };

  return (
    <div className="cinema-hall">
      <h2>Оберіть місця</h2>
      <div className="seats-grid">
        {renderSeats()}
      </div>
    </div>
  );
}

function Seat({ seatId, isSelected, onSelect }) {
  return (
    <button
      className={`seat ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(seatId)}
    >
      {seatId}
    </button>
  );
}