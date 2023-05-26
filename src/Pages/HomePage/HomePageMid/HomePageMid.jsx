import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import { Arrays } from '../../../Utils/Arrays';


import './HomePageMid.scss';
import { Link } from 'react-router-dom';

const HomePageMid = () => {

    const [question, setQuestion] = useState(0)
    const [serviceProd, setServiceProd] = useState([])

    const handleQuestion = (id) => {
        if (question === id) {
            setQuestion(0)
        } else {
            setQuestion(id)
        }
    }

    useEffect(() => {
        axios
            .get('http://localhost:8092/workAndServiceArray')
            .then(res => setServiceProd(res.data))
    }, [])
   

    return (
        <>
            <section className='benefits'>
                <div className="container">
                    <ul>
                        {
                            Arrays.BenefitArray.map((el) => (
                                <li key={el.pets}>
                                    <img src={`/images/${el.icon}.png`} alt="" />
                                    <h3>{el.quantity}</h3>
                                    <h2>{el.pets}</h2>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className='container workAndService'>
                <h3 className='subtitle'>What We Provide</h3>
                <h2 className='title'>Our Work And Services</h2>
                <ul>
                    {
                        serviceProd.slice(0, 6).map((el, idx) => (
                            <li key={idx}>
                                <div>
                                    <img src={`/images/${el.img}.png`} alt="" />
                                </div>
                                <h3>{el.service}</h3>
                                <p>{el.description}</p>
                                <Link to={`/catalog/${el.id}`}>read more</Link>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section className='container questions'>
                <h3 className='subtitle'>Asked Questions</h3>
                <h2 className='title'>Frequently Asked Questions</h2>
                <div className='questionsInner'>
                    <ul>
                        {
                            Arrays.questionsArray.map((el) => (
                                <li className={question === el.id ? 'open' : ''} onClick={() => handleQuestion(el.id)} key={el.id}>
                                    <div>
                                        <h3>{el.question}</h3>
                                        <span>{question === el.id ? <RemoveIcon /> : <AddIcon />}</span>
                                    </div>
                                    <AnimatePresence>
                                        {
                                            question === el.id && (
                                                <motion.p
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    {el.description}
                                                </motion.p>
                                            )
                                        }
                                    </AnimatePresence>
                                </li>
                            ))
                        }
                    </ul>
                    <img src="/images/about-2.jpg" alt="" />
                </div>
            </section>
        </>
    );
};

export default HomePageMid;