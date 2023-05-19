import Features from "../Features/Features";
import Team from "../Team/Team";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import useTitle from "../../../hooks/useTitle";


const Home = () => {
    useTitle('Home');
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Features></Features>
            <Team></Team>
        </div>
    );
};

export default Home;