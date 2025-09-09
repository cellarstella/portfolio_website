import SocialImage from "./component/SocialImage";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header>
        <div className="grid">
          <h1>Laura Pelofske</h1>
          <div className="flex gap-4 mt-2">
            <SocialImage 
              image="/LI-In-Bug.png" 
              link="https://www.linkedin.com/in/laura-pelofske-26a69775/" 
              alt="LinkedIn profile" 
            />
            <SocialImage 
              image="/github-mark.png" 
              link="https://github.com/cellarstella" 
              alt="GitHub profile" 
            />
            <SocialImage 
              image="/file.svg" 
              link="./files/LPelofske_resume.pdf" 
              alt="PDF resume" 
            />
          </div>
        </div>
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        Coming soon!
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        2025
      </footer>
    </div>
  );
}
