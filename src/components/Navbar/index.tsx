import {Link} from 'react-router-dom'
import './style.css'

function Navbar() {

    return (
    <div className="nav-bar">
        <Link className='linkNav' to={"/"}>Home</Link>
        <Link className='linkNav' to={"/tabela"}>Cadastrados</Link>
      </div>
    )
  }
  
  export default Navbar
  