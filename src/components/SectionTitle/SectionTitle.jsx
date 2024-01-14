

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <p className="text-orange-500 mb-2">---{heading}---</p>
            <h4 className="text-4xl uppercase border-y-4 py-4">{subHeading}</h4>
        </div>
    );
};

export default SectionTitle;