import { ToastContainer } from 'react-toastify';
import ReviewLayout from './feature/review/containers/ReviewLayout';

function App() {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={3000} />
      <ReviewLayout />
    </>
  );
}

export default App;
