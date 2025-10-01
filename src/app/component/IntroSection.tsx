export default function IntroSection() {
  return (
    <section>
      <p className="text-lg md:text-xl mb-6">
        You can find out all about my professional experience from my <a href="/LauraPelofske_Resume_2025.pdf" aria-label="resume link" target="_blank">resume</a> or <a href="https://www.linkedin.com/in/laura-pelofske-26a69775/" aria-label="linkedin link" target="_blank">LinkedIn</a>, so here&apos;s what I&apos;ve been doing since I was laid off from my Senior Software Developer position at the end of June 2025.
      </p>

      <h2 className="text-xl font-bold">
        Personal Projects
      </h2>
      <h3 className="text-l font-bold m-4">This website</h3>
      <p className="text-xl">
        It's not pretty; it's content first. I made this website using Next.js and React, outputting a static website using Github pages. I am using Typescript, which I&apos;m used to, and Tailwind, which I&apos;m new to. I&apos;ve been using CSS and various CSS tools since 2001, so Tailwind is pretty straightforward to use!
      </p>
      <h3 className="text-l font-bold m-4">Sustainable Gardening App</h3>
      <div><img  className="mx-auto" src="/app_firstpass.png" alt="first pass at app"/></div>
      <p className="text-xl mt-6">
        I&apos;m working on an idea I&apos;ve had for a while, an app that helps home gardeners be more sustainable in their choices and maintenance.
        
      </p>
      <h2 className="text-xl font-bold mt-6">
        Boot.dev
      </h2>
      <p className="text-xl">
        You may have heard of 
         <a href="https://boot.dev" target="_blank" aria-label="boot dot dev"> Boot.dev </a> 
        for learning backend development; so did I! I&apos;ve been filling out my skills with 
        Object Oriented and Functional programming in Python and rounding out my knowledge of SQL. 
        <a href="https://www.boot.dev/u/flamboyanthalfling"> My profile.</a>
      </p>
            <h2 className="text-xl font-bold mt-6">
        Non-Profit Work
      </h2>
      <p className="text-xl">
        I am a board member at <a href="https://www.milwaukieparksfoundation.org/" aria-label="Milwaukie Parks Foundation link" target="_blank">Milwaukie Parks Foundation</a>, a community advocate for quality parks in reach of every citizen of Milwaukie.
      </p><p className="text-xl">
        This summer we have hosted concerts, tabled at city events, and gathered more volunteers than ever! My favorite MPF activities are the work parties, where community members come together to clean up and revitalize our nature areas.
      </p>
      <div className="@container">
        <div className="flex flex-col @2xl:flex-row justify-center">
          <img
            className="p-3 xl:h-100" 
            src="/minthorne_cleanup.jpg" alt="pulling weeds at Minthorne Springs"/>
          <img
            className="p-3 xl:h-100"
            src="/MinthornVolCrew9-13-25.jpg" alt="volunteers at Minthorne Springs"/>
        </div>
      </div>
    </section>
  );
}