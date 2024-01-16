

const ChefRecommendation = ({ recommendation }) => {

    const { name, image, price, recipe } = recommendation;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="text-2xl font-foodText text-center">{name}</h2>
                <p className="text-center">{recipe}</p>
                <button className="uppercase font-bold text-yellow-700 border-b-4 border-yellow-700 bg-[#E8E8E8] py-3 rounded-lg hover:text-yellow-500 hover:bg-black hover:border-none transition duration-1000">
    add to cart
</button>

            </div>
        </div>
    );
};

export default ChefRecommendation;