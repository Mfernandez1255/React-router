import {Link} from 'react-router-dom'


function Navbar() {

  return (
    <div id="navbar">
      <Link className="link" to="/red">RED</Link>
      <Link className="link" to="/blue">BLUE</Link>
      <Link className="link" to="/purple">PURPLE</Link>
      <Link className="link" to="/">HOME</Link>
    </div>
  )
}

export default Navbar

