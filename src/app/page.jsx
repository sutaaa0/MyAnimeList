import LayoutHeader from "./layout/LayoutHerder";
import TopAnime from "./topanime/page.jsx";
import Populer from "./populer/page";
import HeaderLayout from "./components/Header/HeaderLayout";

const Page = async () => {

  return (
    <div className="w-full h-auto">
      <LayoutHeader />
      <HeaderLayout title={"Top Anime"} linkTitle={"Lihat Semua"} />
      <TopAnime />
      <Populer />
    </div>
  );
};

export default Page;
