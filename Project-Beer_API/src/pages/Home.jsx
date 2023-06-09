import { Link } from "react-router-dom";
import AllBeers from '../../public/img/Allbeers.png'
import RandomBeer from '../../public/img/Randombeer.png'

const Home = () => {
    return (
        <section className="home-section">
            <article>
                <img src={AllBeers} alt="beer" />
                <Link to={`/Overview`}><h2>Overview of all Beers</h2></Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque odit ipsa, dolorem qui accusantium totam.</p>
            </article>
            <article>
                <img src={RandomBeer} alt="beer" />
                <Link to={`/Random`}><h2>Random Beer</h2></Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptatum veritatis vero, et similique minus.</p>
            </article>

        </section>
    );
}

export default Home;