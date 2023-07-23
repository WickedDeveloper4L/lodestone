import Hero from "@/components/Hero/Hero";
import Sponsor from "@/components/Sponsor/Sponsor";
import Steps from "@/components/steps/Steps";

export const metadata = {
  title: "Lodestone patient care hospital",
  description: "Life, care.",
};
const Home = () => {
  return (
    <div>
      <Hero />
      <Steps />
      <Sponsor />
    </div>
  );
};

export default Home;
