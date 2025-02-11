import React, {useContext} from 'react';
import { ProductContext } from '../../pages/context';
import Logo from "../../assets/other/logo.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import './navbar.css';

const Navbar = () => {
    const {totalCartItems} = useContext(ProductContext)
    return (
        <div className='navBarTab'>
            <nav className="navbar">
                <Link to="/" ><img src={Logo} alt="ourlogo" className="logoImg" /></Link>
                <div className="navItem">
                    <div className='navCatalog'>
                        <Link className="dropdownLinks">Catalog</Link>
                            <div className="dropdownContainer">
                                <Link to="/catalog" className="link1">Phones</Link>
                                <Link to="/catalog" className="link1">Laptops</Link>
                                <Link to="/catalog" className="link1">Accessories</Link>
                            </div>
                        <span className="dropdownLink"><b>+</b></span>
                    </div>
                    <div className="navlinks">
                        <Link className="navbarLinks">Gallery</Link>
                        <Link to="/contacts" className="navbarLinks">Contacts</Link>
                        <Link to="/contacts" className="navbarLinks">Support</Link>
                    </div>
                </div>
                <div className="navItem2">
                        <Link to="/catalog"><span className="navIcons search"><CiSearch size={32}/></span></Link>
                        <Link to="/cart"><span className="navIcons">{(totalCartItems === 0) ? <FaShoppingCart size={30}/>: <div className='cartCountContainer'><FaShoppingCart size={30}/><span className='cartCount'>{totalCartItems}</span></div>}</span></Link>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
