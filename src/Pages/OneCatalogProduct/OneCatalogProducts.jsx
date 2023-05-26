import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './OneCatalogProducts.scss';

const OneCatalogProducts = () => {

    const { id } = useParams()
    const [oneServiceProd, setOneServiceProd] = useState()

    useEffect(() => {
        axios
            .get(`http://localhost:8092/workAndServiceArray/${id}`)
            .then(res => setOneServiceProd(res.data))
    }, [])

    return (
        <section className='oneCatalogProd'>
            <div className='container'>
                <div>
                    <p>POST FORMATS</p>
                    <h2 className='title'>{oneServiceProd?.service}</h2>
                </div>
                <div className='description'>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum.Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.
                    </p>
                    <div className='imgAndDiv'>
                        <img className='prodimg' src={`/images/${oneServiceProd?.img}.png`} alt="" />
                        <p>
                            You need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. Best Budget iOS SmartWatch Wearable Fitness Tracker is not only a Watch but also a Combined Package of the watch, Fitness Tracker, Music Controller, and Much More Application Which is We Use On Mobile But Same Application We Can Manage By Our Smartwatch.
                        </p>
                    </div>
                    <p>Similar smocked bodice and full sleeves but also so different from the dress above! I love the lightweight poplin fabric and the tiered skirt. It feels super easy to wear and really versatile – perfect one-and-done outfit for spring/summer, the beach, traveling, etc. I ended up returning this one and keeping the one below but I loved both! Smartwatches have a digital screen which we can apply the various type of screens also we can apply our photos on the smartphone screen. </p>
                    <br />
                    <p>Similar smocked bodice and full sleeves but also so different from the dress above! I love the lightweight poplin fabric and the tiered skirt. It feels super easy to wear and really versatile – perfect one-and-done outfit for spring/summer, the beach, traveling, etc. I ended up returning this one and keeping the one below but I loved both!</p>
                    <img className='staticImg' src="/images/bestThing.jpg" alt="" />
                    <p>Best Budget iOS SmartWatch Wearable Fitness Tracker is not only a Watch but also a Combined Package of the watch, Fitness Tracker, Music Controller, and Much More Application Which is We Use On Mobile But Same Application We Can Manage By Our Smartwatch. Today We Have to Know About the 8 Best Smartwatches Which are The Best with Performance and Features All One In India.</p>
                </div>
            </div>
        </section>
    );
};

export default OneCatalogProducts;