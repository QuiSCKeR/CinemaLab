import React from 'react';
import './SeatMap.css';

const SeatMap = ({ seats, onSelect }) => (
  <div className="seat-map">
    {seats.map((row, rowIndex) => (
      <div key={rowIndex} className="seat-row">
        {row.map((seat, seatIndex) => (
          <button
            key={seatIndex}
            className={`seat ${seat.status}`}
            onClick={() => onSelect(rowIndex, seatIndex)}
            disabled={seat.status === 'booked'}
          >
            {seat.label}
          </button>
        ))}
      </div>
    ))}
  </div>
);

export default SeatMap;
