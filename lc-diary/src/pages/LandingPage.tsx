import { Navbar } from "@/components/navbar";

const LandingPage = () => {
  return (
    <>
      <div className="relative w-full h-screen gradient flex justify-center items-center text-4xl text-white font-Montserrat">
        <Navbar />
        <h1>LC Diary</h1>
      </div>
    </>
  );
};

export default LandingPage;
