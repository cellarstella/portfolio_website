import SocialImage from "./component/SocialImage";
import IntroSection from "./component/IntroSection";
// import SkillsSection from "./component/SkillsSection";
// import PortfolioSection from "./component/PortfolioSection";
// import ExperienceSection from "./component/ExperienceSection";
// import TestimonialsSection from "./component/TestimonialsSection";
// import ContactSection from "./component/ContactSection";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="flex flex-col align-end linen-header pt-8 pl-8 pr-8 h-40">
        <div className="flex gap-4 mt-2 min-w-32 justify-end">
          <SocialImage
            image="/LinkedIn_icon.svg"
            link="https://www.linkedin.com/in/laura-pelofske-26a69775/"
            alt="LinkedIn profile"
          />
          <SocialImage
            image="/github-mark.svg"
            link="https://github.com/cellarstella"
            alt="GitHub profile"
          />
          <SocialImage
            image="/file.svg"
            link="/LauraPelofske_Resume_2025.pdf"
            alt="PDF resume"
          />
        </div><div className="flex flex-row gap-2 justify-between">

          <h1
            className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white relative top-2.5"
          >
            Laura Pelofske: Senior Software Developer
          </h1>
        </div>
      </header>
      {/* grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20" */}
      <main className="flex flex-col gap-[32px] row-start-2 p-8 pb-20 items-center sm:items-start">
        <IntroSection />
        {/* <SkillsSection />
        <PortfolioSection />
        <ExperienceSection />
        <TestimonialsSection />
        <ContactSection /> */}
      </main>
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Laura Pelofske. All rights reserved.
      </footer>
    </div>
  );
}
