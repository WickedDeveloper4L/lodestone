import Hero from "@/components/Hero/Hero";
import Sponsor from "@/components/Sponsor/Sponsor";
import FindCenter from "@/components/findCenter/FindCenter";
import Steps from "@/components/steps/Steps";

export const metadata = {
  title: "Lodestone Patient Care Limited",
  description: "Life, care.",
};
const Home = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <Sponsor />
      <FindCenter />
    </div>
  );
};

export default Home;
