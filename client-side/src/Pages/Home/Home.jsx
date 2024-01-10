import Faq from "./Components/Faq";
import Feedback from "./Components/Feedback";
import Hero from "./Components/Hero";
import Search from "./Components/Search";
import Subscription from "./Components/Subscription";

const Home = () => {
    return (
        <>
        <Hero />
        <Search />
        <Faq />
        <Feedback />
        <Subscription />
        </>
    );
};

export default Home;