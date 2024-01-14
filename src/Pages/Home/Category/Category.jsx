import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg';
import img2 from '../../../assets/home/slide2.jpg';
import img3 from '../../../assets/home/slide3.jpg';
import img4 from '../../../assets/home/slide4.jpg';
import img5 from '../../../assets/home/slide5.jpg'; import SectionTitle from '../../../components/SectionTitle/SectionTitle';
;


const Category = () => {
    return (
        <section className='mt-12'>
            <SectionTitle
                heading={'From 11.00am to 1o.00pm'}
                subHeading={"order online"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h3 className='uppercase text-4xl text-center -mt-16 text-white font-foodText'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h3 className='uppercase text-4xl text-center -mt-16 text-white font-foodText'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h3 className='uppercase text-4xl text-center -mt-16 text-white font-foodText'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h3 className='uppercase text-4xl text-center -mt-16 text-white font-foodText'>Cake</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h3 className='uppercase text-4xl text-center -mt-16 text-white font-foodText'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;