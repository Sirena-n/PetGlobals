import React from 'react';
import { motion } from 'framer-motion';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';

import { Arrays } from '../../../Utils/Arrays';

import './HomePageTop.scss';

const HomePageTop = () => {

    return (
        <>
            <section className='homepageBanner'>
                <div className='container'>
                    <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        Happy, Healthy, And Save
                    </motion.h3>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        Nurture And Care <br /> For All Life
                    </motion.h2>
                    <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                        Learn more
                    </motion.button>
                </div>
            </section>
            {/* <section className='homepageBanner'>
                <div className='container'>
                    <motion.h3 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        Happy, Healthy, And Save
                    </motion.h3>
                    <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        Nurture And Care <br /> For All Life
                    </motion.h2>
                    <motion.button initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }}>
                        Learn more
                    </motion.button>
                </div>
            </section> */}
            <section className='aboutUs'>
                <div className='container'>
                    <h3 className='subtitle'>More About</h3>
                    <h2 className='title'>We Can Keep Them Happy</h2>
                    <div className='aboutUsInner'>
                        <img src="/images/about-1.jpg" alt="" />
                        <p>There are many variations of passages of Lorem Ipsum available but the majority have suffere alteration in Which some form injected humour randomised words which don’t slightly believable If you are going to use a passage of Lorem Ipsum.</p>
                        <ul>
                            <li><DownloadDoneIcon />Highest Quality Premium Western Forage</li>
                            <li><DownloadDoneIcon />Raise The Bar On The Grooming Experience</li>
                            <li><DownloadDoneIcon />Overexposure Of Domestic Animals</li>
                            <li><DownloadDoneIcon />We Save And Protect Animals</li>
                        </ul>
                        <button>LEARN More</button>
                    </div>
                </div>

            </section>
            <section className='bestTrainer'>
                <div className="container">
                    <h3 className='subtitle'>Our Best Trainer</h3>
                    <h2 className='title'>Look How We Train Them</h2>
                    <div className='bestTrainerInner'>
                        <ul>
                            {
                                Arrays.TrainArray.map((img, idx) => (
                                    <li key={idx}><img src={`/images/${img}.jpg`} alt="" /></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePageTop;