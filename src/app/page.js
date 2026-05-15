import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import LatestUpdate from "@/components/LatestUpdate";
import OurBranches from "@/components/OurBranches";
import Question from "@/components/Question";

export default function Home() {
  return (
    <div>
      <LatestUpdate></LatestUpdate>
      <Banner></Banner>
      <FeaturedBooks></FeaturedBooks>
      <OurBranches></OurBranches>
      <Question></Question>
    </div>
  );
}
