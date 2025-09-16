import SocialImage from "./component/SocialImage";

export default function Home() {
  return (
    <div className="font-sans">
      <header className="flex flex-col align-end linen-header pt-8 pl-8 pr-8 h-60">
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
            link="./files/LPelofske_resume.pdf" 
            alt="PDF resume" 
          />
        </div><div className="flex flex-row gap-2 justify-between">

        <h1
          className="text-4xl md:text-6xl font-bold text-white relative top-2.5"
          >
          Laura Pelofske: Senior Software Developer
        </h1>
        </div>
      </header>
      {/* grid items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20" */}
      <main className="flex flex-col gap-[32px] row-start-2 p-8 pb-20 items-center sm:items-start">
         {/* intro section */}
         <section>
            <p className="text-lg md:text-xl mb-6">
              I am a versatile and highly adaptable software development contributor, adept in utilizing ES6 JavaScript, Typescript, Testing Library, React, and diverse CSS methodologies to surpass user acceptance criteria. My expertise truly stands out when seamlessly translating visual designs to any framework. With years of experience, I swiftly identify potential UI pitfalls and consistently provide alternative solutions for integrating new interactions into complex applications across various devices. Recognized as a dependable resource and mentor in UI styling, I prioritize documenting and commenting on my work for the benefit of others.
            </p>
          </section>
          {/* skills section */}
          <h2>Skills</h2>
          <ul className="list-disc">
            <li>Next.js, React, TypeScript, Node.js</li>
            <li>LESS, SCSS, Tailwind, CSS3 and beyond</li>
            <li>Github, Agile, JIRA, Trello</li>
            <li>GraphQL, SQL, Python, some Java</li>
            <li>Written communication, User Experience, Accessibility (WCAG 2.2)</li>
            <li>SCRUM leadership, Roadmapping, cross functional communication and problem solving</li>
          </ul>
          {/* portfolio section */}
          {/* experience section */}
          {/* testimonials section */}
          {/* contact section */}
      </main>
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Laura Pelofske. All rights reserved.
      </footer>
    </div>
  );
}
