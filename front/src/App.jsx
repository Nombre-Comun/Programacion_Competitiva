import { BrowserRouter } from 'react-router-dom';
import RoutesI from './routes/RoutesI';
import './styles/style.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <RoutesI />
      </div>
    </BrowserRouter>
  );
}

export default App;
