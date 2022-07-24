import { Footer } from "../Pages/Footer/Footer";
import { HomeMiddle } from "../Pages/HomeMiddle/HomeMiddle";
import SearchSection from "../Pages/SearchSection";
import Navbar from "./Navbar/Navbar";

export default function Home() {
  return (
    <box>
      <Navbar />
      <SearchSection />
      <HomeMiddle />
      <Footer />
    </box>
  );
}
