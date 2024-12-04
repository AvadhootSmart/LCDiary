import { AuthenticationPopup } from "@/components/authenticationPopup";
import { HeroBtn } from "@/components/heroBtn";
import { Navbar } from "@/components/navbar";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { LucideArrowRight } from "lucide-react";
import { Link } from "react-router";

const LandingPage = () => {
  return (
    <div className="dark">
      <AuroraBackground className="text-white font-Montserrat">
        <Navbar />
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-6xl text-center font-semibold">Track Your DSA Progress</h1>
          <h1 className="text-2xl">
            Create your own DSA sheets and track your progress
          </h1>

          <Link to="/createList">
            <HeroBtn>
              <h1 className="text-2xl flex items-center gap-2">
                Get Started{" "}
                <span>
                  <LucideArrowRight />
                </span>
              </h1>{" "}
            </HeroBtn>
          </Link>
        </div>
      </AuroraBackground>
    </div>
  );
};

export default LandingPage;
