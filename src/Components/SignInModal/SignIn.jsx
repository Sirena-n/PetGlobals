import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { motion } from 'framer-motion';

import './SignIn.scss'

const SignIn = (props) => {
    return (
        <motion.div
            id='SingIn'
            initial={{ rotateY: 0 }}
            animate={{ rotateY: 180, }}
            exit={{ rotateY: 0 }}
            transition={{ duration: 0.3 }}
            className='SingInBox'>
            <div className='SingInInner'>
                <CloseIcon className='close' onClick={() => props.manageModal('close')} />
                <h2 className='title'>Sign in</h2>
                <p className='singText'>Sign in to your account using email and password provided during registration.</p>
                <form action="">
                    <label htmlFor="">
                        Email
                        <input type="email" name='email' placeholder='Your working email' autoComplete='email' required />
                    </label>
                    <label htmlFor="">
                        Password
                        <input type="password" name='password' placeholder='Your password' autoComplete='password' required />
                    </label>
                    <label className='checkbox' htmlFor="">
                        <input type="checkbox" />
                        Keep me signed in
                        <p className='forgotPass'>Forgot password?</p>
                    </label>
                    <button type='button'>Sign in</button>
                    <p className='haveAcc'>Don't have an account? <span onClick={() => props.manageModal('rotate', 'login')}>Sign up</span> </p>
                </form>
            </div>
        </motion.div>
    );
};

export default SignIn;