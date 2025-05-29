import React, { useState } from 'react';
import './CinemaHall.css';

const CinemaHall = ({ onSeatSelect }) => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
  const seatsPerRow = 10;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState(['A3', 'B5', 'C7', 'D2']); // Можна отримувати з API

  const handleSeatClick = (seatId) => {
    if (bookedSeats.includes(seatId)) return;

    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    );
    
    onSeatSelect(seatId);
  };

  return (
    <div className="cinema-hall-container">
      <div className="screen">ЕКРАН</div>
      
      <div className="seats-grid">
        {rows.map(row => (
          <div key={row} className="seat-row">
            <div className="row-label">{row}</div>
            {Array.from({ length: seatsPerRow }).map((_, index) => {
              const seatNumber = index + 1;
              const seatId = `${row}${seatNumber}`;
              const isSelected = selectedSeats.includes(seatId);
              const isBooked = bookedSeats.includes(seatId);

              return (
                <button
                  key={seatId}
                  className={`seat ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
                  onClick={() => handleSeatClick(seatId)}
                  disabled={isBooked}
                >
                  {seatNumber}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div className="seat-legend">
        <div className="legend-item">
          <div className="legend-seat available"></div>
          <span>Вільні</span>
        </div>
        <div className="legend-item">
          <div className="legend-seat selected"></div>
          <span>Обрані</span>
        </div>
        <div className="legend-item">
          <div className="legend-seat booked"></div>
          <span>Заброньовані</span>
        </div>
      </div>
    </div>
  );
};

export default CinemaHall;