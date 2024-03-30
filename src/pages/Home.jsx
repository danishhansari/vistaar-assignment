import CreateCompaign from "../components/CreateCompaign";
import Footer from "../components/Footer";
import "../App.css";
import CampaignIdeas from "../components/CampaignIdeas";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <>
      <Hero />
      <CreateCompaign />
      <CampaignIdeas />
      <Footer />
    </>
  );
};

export default Home;
