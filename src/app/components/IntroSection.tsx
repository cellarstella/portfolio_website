import Image from "next/image";
export default function IntroSection() {
  return (
    <section className="text-gray-100">
      <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
        Hi, I&apos;m Laura, a Software Developer with over 10 years of experience in web application development. Click the Experience tab so see my work experience, or read on to see what else I&apos;ve been up to lately!
      </p>
      <p>
        I am currently looking for new opportunities to expand my skill set and take on new challenges. I am a strong advocate for diversity and inclusion in the tech industry, and I am committed to creating a welcoming and supportive environment for all team members and clients.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Personal Projects
      </h2>
      
      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-4">This website</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          It&apos;s not pretty; it&apos;s content first. I made this website using Next.js and React, outputting a static website using Github pages. I am using Typescript, which I&apos;m used to, and Tailwind, which I&apos;m new to. I&apos;ve been using CSS and various CSS tools since 2001, so Tailwind is pretty straightforward to use!
        </p>
      </div>

      <div className="mb-10">
        <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-4">Sustainable Gardening App</h3>
        <div className="mb-4 rounded-lg overflow-hidden">
          <Image 
            className="w-full max-w-2xl mx-auto rounded-lg shadow-lg shadow-blue-500/10"
            src="/app_firstpass.png" alt="first pass at app"
            width={1157} height={386}/>
        </div>
        <p className="text-lg text-gray-300 leading-relaxed">
          I&apos;m working on an idea I&apos;ve had for a while, an app that helps home gardeners be more sustainable in their choices and maintenance.
        </p>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Boot.dev
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-6">
        You may have heard of 
         <a href="https://boot.dev" target="_blank" aria-label="boot dot dev"> Boot.dev </a> 
        for learning backend development; so did I! I&apos;ve been filling out my skills with 
        Object Oriented and Functional programming in Python and rounding out my knowledge of SQL. 
        <a href="https://www.boot.dev/u/flamboyanthalfling"> My profile.</a>
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
        Non-Profit Work
      </h2>
      <p className="text-lg text-gray-300 leading-relaxed mb-4">
        I am a volunteer board member at <a href="https://www.milwaukieparksfoundation.org/" aria-label="Milwaukie Parks Foundation link" target="_blank">Milwaukie Parks Foundation</a>, a community advocate for quality parks in reach of every citizen of Milwaukie.
      </p>
      <p className="text-lg text-gray-300 leading-relaxed mb-8">
        This summer we have hosted concerts, tabled at city events, and gathered more volunteers than ever! My favorite MPF activities are the work parties, where community members come together to clean up and revitalize our nature areas.
      </p>
      
      <div className="@container">
        <div className="grid grid-cols-1 @2xl:grid-cols-2 gap-6">
          <Image
            className="rounded-lg shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all w-full h-auto" 
            src="/minthorne_cleanup.jpg" alt="pulling weeds at Minthorne Springs"
            width={400} height={531}/>
          <Image
            className="rounded-lg shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all w-full h-auto"
            src="/MinthornVolCrew9-13-25.jpg" alt="volunteers at Minthorne Springs"
            width={500} height={375}/>
        </div>
      </div>
    </section>
  );
}