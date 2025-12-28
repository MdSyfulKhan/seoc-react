import HeroBottomAreaStyle1 from "./hero_inside/HeroBottomAreaStyle1";
import HeroTopAreaStyle1 from "./hero_inside/HeroTopAreaStyle1";

const HeroStyle9 = ({ data }) => {
  const { heroTopData, heroBottomData } = data;
  return (
    <>
      <HeroTopAreaStyle1 data={heroTopData} />
      <HeroBottomAreaStyle1 data={heroBottomData} />
    </>
  );
};

export default HeroStyle9;
