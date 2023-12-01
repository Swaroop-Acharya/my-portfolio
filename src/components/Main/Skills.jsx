import React from "react";

export default function Skills() {
  return (
    <section className="flex flex-col md:flex-row gap-1 p-7 mt-8">
      <div className="flex-shrink-0 w-80 mr-40 text-secondary uppercase md:text-right font-bold tracking-wide">
        SKILLS 👨‍💻
      </div>
      <div className="flex flex-wrap shrink-0 justify-between w-5/12">
        <div className="mb-6">
          <div className="font-bold mb-4">LANGUAGES</div>
          <ul>
            <li className="mb-2 text-base font-normal leading-6">Javascript(ES6)</li>
            <li className="mb-2 text-base font-normal leading-6">CSS/SCSS</li>
            <li className="mb-2 text-base font-normal leading-6">HTML</li>
            <li className="mb-2 text-base font-normal leading-6">Java</li>
            <li className="mb-2 text-base font-normal leading-6">Python</li>
            <li className="mb-2 text-base font-normal leading-6">SQL</li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-bold mb-4">TOOLS</div>
          <ul>
            <li className="mb-2 text-base font-normal leading-6">Git & Github</li>
            <li className="mb-2 text-base font-normal leading-6">MongoDB</li>
            <li className="mb-2 text-base font-normal leading-6">PhpMyAdmin</li>
            <li className="mb-2 text-base font-normal leading-6">Firebase</li>
            <li className="mb-2 text-base font-normal leading-6">Chrome DevTools</li>
          </ul>
        </div>
        <div className="mb-6">
          <div className="font-bold mb-4">FRAMEWORKS/LIBRARIES</div>
          <ul>
            <li className="mb-2 text-base font-normal leading-6">React</li>
            <li className="mb-2 text-base font-normal leading-6">TailwindCSS</li>
            <li className="mb-2 text-base font-normal leading-6">React-Router</li>
            <li className="mb-2 text-base font-normal leading-6">Material-UI</li>
            <li className="mb-2 text-base font-normal leading-6">Chakra-UI</li>
            <li className="mb-2 text-base font-normal leading-6">Bootstrap</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
