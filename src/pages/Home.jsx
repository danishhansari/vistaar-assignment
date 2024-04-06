import CreateCompaign from "../components/CreateCompaign";
import Footer from "../components/Footer";
import "../App.css";
import CampaignIdeas from "../components/CampaignIdeas";
import Hero from "../components/Hero";
import SelectCampaign from "../components/SelectCampaign";
import MetricMeasure from "../components/MetricMeasure";

const Home = () => {
  return (
    <>
      <Hero />
      <CampaignIdeas />
      <MetricMeasure />
      <CreateCompaign />
      <SelectCampaign />
      <Footer />
    </>
  );
};

export default Home;
