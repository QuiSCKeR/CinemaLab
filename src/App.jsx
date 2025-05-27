import { HomePage } from './pages/HomePage';
import { BookingPage } from './pages/BookingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking/:movieId" element={<BookingPage />} />
    </Routes>
  );
}