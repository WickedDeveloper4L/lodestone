import Hero from "@/components/Hero/Hero";
import Sponsor from "@/components/Sponsor/Sponsor";

export const metadata = {
  title: "Lodestone patient care hospital",
  description: "Life, care.",
};
const Home = () => {
  return (
    <div>
      <Hero />
      <Sponsor />
    </div>
  );
};

export default Home;
