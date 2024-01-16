

const MenuItem = ({ item }) => {

    const { name, image, price, recipe } = item;

    return (
        <div className="flex space-x-2">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className="uppercase text-2xl font-foodText">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-600 text-xl">${price}</p>
        </div>
    );
};

export default MenuItem;