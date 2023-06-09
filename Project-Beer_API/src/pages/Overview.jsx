import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import backArrow from "../../public/Back.svg";

const Overview = () => {
    const [beer, setBeer] = useState ();

    useEffect(() => {
        fetch("https://ih-beers-api2.herokuapp.com/beers")
            .then(response => response.json())
            .then((beer) => {
                setBeer(beer)
            })
    }, []);

    if (!beer) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <section className="overview-section">
                <h1>A lot of Beer</h1>
                <Link to="/">Back to Homescreen</Link>
                {beer?.map((el, i) => {
                    return (
                        <div key={i}>
                            <article className="img-article">
                                <img className="article-img" src={el.image_url} alt={el.name} />
                            </article>
                            <article className="article">
                                <h2>{el.name}</h2>
                                <p>{el.tagline}</p>
                                <p>Created by {el.name}</p>
                                <Link className="details" to={`/detail/${el._id}`}>Details</Link>
                        </article>
                        </div>
                        
                    )
                })}
                <Link to="/"><img className="arrow" src={backArrow} alt="#" /> </Link>
            </section>
        </>
    );
};

export default Overview;