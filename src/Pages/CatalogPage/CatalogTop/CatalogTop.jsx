import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Arrays } from '../../../Utils/Arrays';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CatalogTop.scss';

const CatalogTop = () => {

    const [serviceProd, setServiceProd] = useState([])
    
    useEffect(() => {
        axios
            .get('http://localhost:8092/workAndServiceArray')
            .then(res => setServiceProd(res.data))
    }, [])

    const [productsPerPage] = useState(9);
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumbers = []

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const lastBlogIndex = currentPage * productsPerPage;
    const firstBlogIndex = lastBlogIndex - productsPerPage;
    const currentProducts = serviceProd.slice(firstBlogIndex, lastBlogIndex)

    for (let i = 1; i <= Math.ceil(serviceProd.length / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <section className='pageNav'>
                <div>
                    <Link to={'/'} className='underline'>Home</Link>
                    <i>/</i>
                    <p>Catalog</p>
                </div>
                <h2 className='title'>Catalog</h2>
            </section>
            <section className='container workAndService'>
                <h3 className='subtitle'>What We Provide</h3>
                <h2 className='title'>Our Work And Services</h2>
                <ul>
                    {
                        currentProducts.map((el, idx) => (
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
                <div className='PaginationWrapper'>
                    <ul>
                        {
                            pageNumbers.map(number => (
                                <li onClick={() => paginate(number)} key={number} className={`page-item ${currentPage === number && 'active'}`}>
                                    {number}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
            <section className='container LatestUpdate'>
                <h3 className='subtitle'>Get Latest Update</h3>
                <h2 className='title'>Read Latest Blog Posts</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    className="swiper-container">
                    {Arrays.upDatesArray.map((el) => (
                        <SwiperSlide key={el.id} className="swiper-slide">
                            <div>
                                <img src={`/images/${el.img}.jpg`} alt="" />
                            </div>
                            <h3>{el.date}</h3>
                            <Link to={`/catalog/${el.id}`}>{el.name}</Link>
                            <p>{el.description}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </>
    );
};

export default CatalogTop;