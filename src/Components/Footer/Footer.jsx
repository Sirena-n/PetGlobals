import React from 'react';
import { Link } from 'react-router-dom';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import './Footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className='footerTop'>
                    <div className='logoWrapper'> 
                        <Link to={''}>
                            <img src="/images/hand (1).png" alt="" />
                            <h3>PetGlobals</h3>
                        </Link>
                        <p className='info'>60 29th Street San Francisco, 94110 507-Union Trade Center, United States America</p>
                        <p className='tel'>+0123 456 789</p>
                        <p className='email'>Email: demo@example.com</p>
                    </div>
                    <nav>
                        <ul>
                            <h3>Company</h3>
                            <li><Link>About Us</Link></li>
                            <li><Link to={'/contact'}>Contact</Link></li>
                            <li><Link>Support</Link></li>
                            <li><Link>Pricing</Link></li>
                            <li><Link>Affiliate</Link></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul>
                            <h3>Usefull Links</h3>
                            <li>FAQ</li>
                            <li>Whois</li>
                            <li>Terms of Service</li>
                            <li>Privacy Policy</li>
                            <li>Returns & Exchanges</li>
                        </ul>
                    </nav>
                    <div className='newsLetter'>
                        <h3>Newsletter</h3>
                        <p>Subscribe to receive inspiration, ideas & News in your inbox.</p>
                        <input type="text" placeholder='Enter Your Email' />
                        <button>SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footerBottom'>
                <h3>© 2022 All Rights Reserved. Developed By Codezeel</h3>
            </div>
        </footer>
    );
};

export default Footer;