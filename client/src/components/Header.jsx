import './../styles/css/Header.css'
import { Outlet, Link } from "react-router-dom";



const Header = () => {
  return (
    <nav>
    <div></div>
    <div className='float-right px-20 py-5'>
        <ul className="flex space-x-4">
            <li className='text-3xl link px-4'> 
              <Link to="/"> Play </Link>
            </li>
            <li className='text-3xl link'> 
              <Link to="/admin"> Admin </Link>
            </li>
        </ul>
    </div>

    <Outlet />
</nav>
  )
}

export default Header
