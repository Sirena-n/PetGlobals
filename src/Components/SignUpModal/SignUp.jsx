import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

import './SignUp.scss'

const SignUp = (props) => {
    return (
        <motion.div
            initial={{ rotateY: 0 }}
            animate={{ rotateY: -180, }}
            exit={{ rotateY: 0 }}
            transition={{ duration: 0.3 }}
            className='SingUpBox'>
            <div className='SingUpInner'>
                <CloseIcon className='close' onClick={() => props.manageModal('close')} />
                <h2>Sign up</h2>
                <p className='singText'>Registration takes less than a minute but gives you full control over your studying.</p>
                <form action="">
                    <label htmlFor="email">
                        Email
                        <input type="email" name='email' placeholder='Your working email' autoComplete="email" required />
                    </label>
                    <label htmlFor="password">
                        Password
                        <input type="password" name='password' placeholder='Your password' autoComplete="password" required />
                    </label>
                    <label htmlFor="confirmPassword">
                        Confirm Password
                        <input type="password" name='confirmPassword' placeholder='Confirm your password' autoComplete="confirmPassword" required />
                    </label>
                    <label className='checkbox' htmlFor="">
                        <input type="checkbox" />
                        Remember me
                    </label>
                    <button type='button'>Sign up</button>
                    <p className='haveAcc'>Already have an account? <span onClick={() => props.manageModal('rotate', 'register')}>Sign in</span> </p>
                </form>

            </div>
        </motion.div>
    );
};

export default SignUp;