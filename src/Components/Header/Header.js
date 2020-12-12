import logo from '../../logo.svg';
import './Header.css';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { connect, useDispatch, useSelector } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
function Header() {
    const cartProduct = useSelector(state => state.cart.cart)
    return(
        <div className="header">
            <div className="img-container">
                <Link to='/login'>
                    <img src={logo}/>
                </Link>
            </div>
            <div className="cart-container">
                <Link to="/cart">
                    <ShoppingCartIcon style={{ color: '#61dafb', fontSize: 40 }}/>
                    <div className="cart-count">
                        {cartProduct.length}
                    </div>
                </Link>
                
            </div>
        </div>
    )
}
export default connect()(Header)