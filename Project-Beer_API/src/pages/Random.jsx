import { useEffect, useState  } from "react";
import { Link } from "react-router-dom";
import backArrow from "../../public/Back.svg";

const Random = () => {
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        console.log("bingbong");
        fetch("https://ih-beers-api2.herokuapp.com/beers/random")
            .then(response => response.json())
            .then((beer) => {
                setBeer(beer)
            })
            .catch(error => {
                console.log("error", error);

            })
    }, []);

    if (!beer) {
        return <p>Loading...</p>;
    }

    // const randomBeer = () => {
    //     fetch("https://ih-beers-api2.herokuapp.com/beers/random")
    //         .then(respone => respone.json())
    //         .then((beer) => {
    //             setBeer(beer)
    //         })
    // };

    // useEffect(() => {
    //     randomBeer();
    // }, [beer]);
            

    return (
        <>
            <section>
                <article>
                    <img src={beer.image_url} alt={beer.name} />
                </article>
                <article>
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <div>
                        <div>
                            <p>First brewed:</p>
                            <p>{beer.first_brewed}</p>
                        </div>
                        <div>
                            <p>Attenuation level:</p>
                            <p>{beer.attenuation_level}</p>
                        </div>
                        <p>{beer.descriptation}</p>
                        <Link to="/Overview"><img src={backArrow} alt="#" /> </Link>
                    </div>
                </article>
            </section>
        </>
    );
};

export default Random;
