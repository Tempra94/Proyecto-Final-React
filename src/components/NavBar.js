import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/cart'>Cart</Link>
      <Link to='/detail'></Link>
    </div>
  )
}
export default NavBar