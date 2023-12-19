import './App.css'
import { Outlet} from 'react-router-dom';
import Navbar from './components/Navbar/index.tsx';

function App() {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
