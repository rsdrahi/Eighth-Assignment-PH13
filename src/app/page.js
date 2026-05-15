import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import LatestUpdate from "@/components/LatestUpdate";

export default function Home() {
  return (
    <div>
      <LatestUpdate></LatestUpdate>
      <Banner></Banner>
      <FeaturedBooks></FeaturedBooks>
    </div>
  );
}
