import Banner from "./Banner/Banner";
import Discover from "./Discover/Discover";
import Explore from "./Explore/Explore";
import Founder from "./Founder/Founder";
import Gallery from "./Gallery/Gallery";
import Navbar from "./navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Discover></Discover>
      <Founder></Founder>
      <Gallery></Gallery>
      <Explore></Explore>
    </div>
  );
};

export default App;
