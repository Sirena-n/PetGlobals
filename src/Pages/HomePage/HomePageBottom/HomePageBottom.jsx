import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Arrays } from '../../../Utils/Arrays';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HomePageBottom.scss';

SwiperCore.use([Navigation, Pagination]);

const HomePageBottom = () => {
    const data = Arrays.upDatesArray;

    return (
        <>
            <section className='container Workers'>
                <h3 className='subtitle'>Service Workers</h3>
                <h2 className='title'>Animal Care Workers</h2>
                <ul className='WorkersInner'>
                    {
                        Arrays.WorkersArray.map((el, idx) => (
                            <li key={idx}>
                                <div>
                                    <img src={`/images/${el.img}.jpg`} alt="" />
                                </div>
                                <h3>{el.work}</h3>
                                <h2>{el.name}</h2>
                            </li>
                        ))
                    }
                </ul>
            </section>
            <section className='container LatestUpdate'>
                <h3 className='subtitle'>Get Latest Update</h3>
                <h2 className='title'>Read Latest Blog Posts</h2>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={40}
                    className="swiper-container">
                    {data.map((el) => (
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

export default HomePageBottom;