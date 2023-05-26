import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

import SignIn from '../SignInModal/SignIn';
import SignUp from '../SignUpModal/SignUp';

import './Header.scss';

const Header = () => {

    const [menu, setMenu] = useState(false);
    const [menuNavigation, setMenuNavigation] = useState(false);

    const [nav, setNav] = useState(1)
    useEffect(() => {
        const storedActiveItem = localStorage.getItem("selectedItem");

        if (storedActiveItem) {
            setNav(storedActiveItem);
        }
    }, []);
    const handleNavActive = (e) => {
        setNav(e)
        localStorage.setItem("selectedItem", e);
    }
    console.log(nav);

    const [modal, setModal] = useState();
    const closeModal = (e) => {
        const id = (e.target).id;
        if (id === 'modal') {
            setModal(null)
        }
    };

    const manageModal = (action, modal) => {
        switch (action) {
            case 'open':
                if (modal === 'login') {
                    setModal('login')
                } else if (modal === 'register') {
                    setModal('register')
                }
                break;

            case 'close':
                setModal(null)
                break;

            case 'rotate':
                if (modal === 'login') {
                    setModal('register')
                } else if (modal === 'register') {
                    setModal('login')
                }
                break;
        }
    }

    modal ? disableBodyScroll(document.documentElement) : enableBodyScroll(document.documentElement);

    return (
        <header>
            <div className="container">
                <Link onClick={() => handleNavActive(1)} to={''}>
                    <img src="/images/Screenshot 2023-05-24 234624.png" alt="" />
                </Link>
                <nav>
                    <h3 onClick={() => setMenuNavigation(!menuNavigation)}>
                        {menuNavigation ? <KeyboardArrowLeftIcon /> : <KeyboardArrowDownIcon />}
                        Navigation
                    </h3>
                    <ul className={menuNavigation && 'activebar'}>
                        <li className={nav === 1 ? 'active' : ''}><Link onClick={() => handleNavActive(1)} to=''>Home</Link></li>
                        <li className={nav === 2 ? 'active' : ''}><Link onClick={() => handleNavActive(2)} to='/services'>services</Link></li>
                        <li className={nav === 3 ? 'active' : ''}><Link onClick={() => handleNavActive(3)} to='/donation'>donation</Link></li>
                        <li className={nav === 4 ? 'active' : ''}><Link onClick={() => handleNavActive(4)} to='/catalog'>catalog</Link></li>
                        <li className={nav === 5 ? 'active' : ''}><Link onClick={() => handleNavActive(5)} to='/gallery'>gallery</Link></li>
                        <li className={nav === 6 ? 'active' : ''}><Link onClick={() => handleNavActive(6)} to='/contact'>contact us</Link></li>
                    </ul>
                    <ul className='regist'>
                        <li onClick={() => manageModal('open', 'login')}>Sing In</li>
                        <li>/</li>
                        <li onClick={() => manageModal('open', 'register')}>Sing Up</li>
                    </ul>
                </nav>
            </div>
            <motion.div
                animate={modal ?
                    { opacity: 1, x: 0 } :
                    { opacity: 0, x: "-100%" }
                }
                id='modal'
                transition={{ duration: 0.3 }}
                style={{ display: modal ? 'flex' : 'none' }}
                onClick={closeModal}
                className='accWrapper'>
                {
                    modal === 'login' ?
                        <SignIn manageModal={manageModal} /> :
                        modal === 'register' ?
                            <SignUp manageModal={manageModal} /> :
                            null
                }
            </motion.div>
        </header>
    );
};


export default Header;