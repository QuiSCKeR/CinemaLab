import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SeatMap from '../components/SeatMap';

const Booking = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem('movies')) || [];

    // !! ВАЖЛИВО: id може бути рядком, а movie.id — числом
    const selected = storedMovies.find(m => String(m.id) === String(id));

    if (!selected) {
      console.warn('Фільм не знайдено за id:', id);
    }

    setMovie(selected);

    const storedSeats = JSON.parse(localStorage.getItem(`seats_${id}`));
    if (storedSeats) {
      setSeats(storedSeats);
    } else {
      const initialSeats = Array.from({ length: 5 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => ({
          label: `${String.fromCharCode(65 + row)}${col + 1}`,
          status: 'available',
        }))
      );
      setSeats(initialSeats);
    }
  }, [id]);

  const handleSelect = (rowIndex, seatIndex) => {
    setSeats(prev =>
      prev.map((row, r) =>
        row.map((seat, s) => {
          if (r === rowIndex && s === seatIndex && seat.status !== 'booked') {
            return {
              ...seat,
              status:
                seat.status === 'available'
                  ? 'selected'
                  : seat.status === 'selected'
                  ? 'available'
                  : seat.status,
            };
          }
          return seat;
        })
      )
    );
  };

  const handleBooking = () => {
    const updatedSeats = seats.map(row =>
      row.map(seat =>
        seat.status === 'selected'
          ? { ...seat, status: 'booked' }
          : seat
      )
    );
    setSeats(updatedSeats);
    localStorage.setItem(`seats_${id}`, JSON.stringify(updatedSeats));
    alert('Місця заброньовано!');
  };

  if (!movie) return <p>Завантаження...</p>;

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Бронювання: {movie.title}</h2>
      <SeatMap seats={seats} onSelect={handleSelect} />
      <button onClick={handleBooking}>Забронювати вибрані місця</button>
    </div>
  );
};

export default Booking;
