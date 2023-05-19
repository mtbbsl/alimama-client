import Features from "../Features/Features";
import Team from "../Team/Team";
import Banner from "./Banner/Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <Team></Team>
        </div>
    );
};

export default Home;