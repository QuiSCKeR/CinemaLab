const STORAGE_KEY = 'cinema-bookings';

export function saveBooking(booking) {
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  bookings.push(booking);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings));
}

export function getBookedSeats(movieId) {
  const bookings = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  return bookings
    .filter(booking => booking.movieId === movieId)
    .flatMap(booking => booking.seats);
}