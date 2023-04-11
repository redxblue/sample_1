import { ethers } from 'ethers';
import logo from '../assets/logo.svg';
import {
    Link
  } from "react-router-dom";
////////////////////////propertyOwner state is passed here//////
const Navigation = ({ account, setAccount,formData,setFormData}) => { 
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <ul className='nav__links'>
                <li><Link to="#">Buy</Link></li>
                <li><Link to="/register" >Register</Link></li> {/*onClick={() => {window.location.href="/register"}} */}
                <li><Link to="/listproperty">List property</Link></li>
                <li><Link to="/viewproperties">view properties</Link></li>
                

            </ul>

            <div className='nav__brand'>
                <img src={logo} alt="Logo" />
                <Link to="/"> <h1>Weaver</h1></Link> {/*onClick={() => {window.location.href="/"}}*/}
            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;