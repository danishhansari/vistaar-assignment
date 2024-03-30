import CreateCompaign from "../components/CreateCompaign";
import Footer from "../components/Footer";
import "../App.css";
import CampaignIdeas from "../components/CampaignIdeas";
import Hero from "../components/Hero";
import SelectCampaign from "../components/SelectCampaign";
const Home = () => {
  return (
    <>
      <Hero />
      <CampaignIdeas />
      <CreateCompaign />
      {SelectCampaign()}
      <Footer />
    </>
  );
};

export default Home;
