import Gallery from "./components/Gallery/Gallery";
import FeaturedCollection from "./components/FeaturedCollection/FeaturedCollection";
import Categories from "./components/Categories/Categories";
import SpecialOffer from "./components/SpecialOffer/SpecialOffer";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";
const Home = () => {
  return (
    <>
    <Gallery/>
      <main className={`container`}>
        <FeaturedCollection />
        <Categories />
        <TrendingProducts />
        <SpecialOffer />
      </main>
    </>
  );
};

export default Home;
