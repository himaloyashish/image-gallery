import Banner from "./Banner/Banner";
import Discover from "./Discover/Discover";
import Explore from "./Explore/Explore";
import Footer from "./Footer/Footer";
import Founder from "./Founder/Founder";
import Gallery from "./Gallery/Gallery";
import Lineup from "./Lineup/Lineup";
import Unicef from "./Unicef/Unicef";
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
      <Lineup></Lineup>
      <Unicef></Unicef>
      <Footer></Footer>
    </div>
  );
};

export default App;
