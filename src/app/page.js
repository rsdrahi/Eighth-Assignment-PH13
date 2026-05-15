import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import LatestUpdate from "@/components/LatestUpdate";
import Question from "@/components/Question";

export default function Home() {
  return (
    <div>
      <LatestUpdate></LatestUpdate>
      <Banner></Banner>
      <FeaturedBooks></FeaturedBooks>
      <Question></Question>
    </div>
  );
}
