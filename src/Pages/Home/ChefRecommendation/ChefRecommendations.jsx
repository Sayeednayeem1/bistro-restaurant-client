import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ChefRecommendation from "./ChefRecommendation";


const ChefRecommendations = () => {

    const [recommendation, setRecommendation] = useState([]);

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const recommends = data.filter(recommend => recommend.category === "dessert");
                setRecommendation(recommends);
            })
    }, []);

    const limitedRecommendations = recommendation.slice(0, 6);

    return (
        <section>
            <SectionTitle
                heading='should Try'
                subHeading='chef recommendations'
            ></SectionTitle>
            <div className="grid md:grid-cols-3 gap-12 grid-cols-1">
                {
                    limitedRecommendations.map(recommendation => <ChefRecommendation
                        key={recommendation._id}
                        recommendation={recommendation}
                    ></ChefRecommendation>)
                }
            </div>
        </section>
    );
};

export default ChefRecommendations;