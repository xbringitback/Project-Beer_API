import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import backArrow from "../../public/Back.svg";

const Detail = () => {
    const [beer, setBeer] = useState([]);

    const params = useParams();

    useEffect (() => {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${params.beerId}`)
            .then(response => response.json())
            .then((beer) => {
                setBeer(beer)
            })
            .catch(error => {
                console.log("error", error);
            })
    }, []);

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
    )
}

export default Detail;