import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import img from '../../../assets/home/featured.jpg';
import './Featured.css';

const Featured = () => {
    return (
        <div className="featured-bg bg-fixed text-white pt-8 my-20">
            <SectionTitle
                heading='Check it out'
                subHeading='From our menu'
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className="md:ml-10">
                    <h1>Aug 20, 2024</h1>
                    <h4>Where can i get some?</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae, doloribus illum totam sunt nobis, earum nostrum distinctio iusto quidem quaerat quos? Nisi harum dicta quae saepe numquam sapiente maxime!</p>
                    <button className="uppercase font-bold text-yellow-700 border-b-4 border-yellow-700 bg-[#E8E8E8] py-3 rounded-lg hover:text-yellow-500 hover:bg-black hover:border-none transition duration-1000 px-5">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;


