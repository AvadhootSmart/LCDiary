import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import CreateList from "./CreateList";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CreateList />
      <Footer />
    </>
  );
}
