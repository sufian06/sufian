import Image from "next/image";

import bun from "../images/skills/bun.png";
import css from "../images/skills/css3.png";
import html from "../images/skills/html.png";
import js from "../images/skills/js.png";
import mongodb from "../images/skills/mongodb.png";
import nextImage from "../images/skills/nextjs.jpg";
import nodejs from "../images/skills/nodejs.png";
import prisma from "../images/skills/prisma.png";
import reactjs from "../images/skills/react.png";
import sass from "../images/skills/sass.png";
import tailwind from "../images/skills/tailwind.png";
import ts from "../images/skills/ts.png";

const Skills = () => {
  return (
    <section className="border-t border-general wrapper bg-slate-900">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8 lg:justify-between lg:items-center">
          <h2 className="text-4xl font-bold text-sky-400">Skills</h2>
          <div className="flex flex-wrap gap-8 justify-center items-center">
            <div className="flex gap-1 cursor-pointer hover:scale-95 transition-all">
              <Image src={html} alt="html" height={48} width={60} />
              <Image src={css} alt="html" height={48} width={60} />
            </div>
            <div className="flex gap-2 cursor-pointer hover:scale-95 transition-all">
              <Image
                className="rounded-lg"
                src={js}
                alt="html"
                height={48}
                width={60}
              />
              <Image
                className="rounded-lg"
                src={ts}
                alt="html"
                height={48}
                width={60}
              />
            </div>
            <div className="flex gap-2 cursor-pointer hover:scale-95 transition-all">
              <Image
                className="bg-white p-1 rounded-lg"
                src={reactjs}
                alt="html"
                height={48}
                width={60}
              />

              <Image
                className="bg-white rounded-lg"
                src={nextImage}
                alt="html"
                height={48}
                width={60}
              />
            </div>
            <div className="flex gap-2 cursor-pointer hover:scale-95 transition-all">
              <Image
                className="bg-white rounded-lg"
                src={nodejs}
                alt="html"
                height={48}
                width={60}
              />
              <Image
                className="bg-white rounded-lg px-1"
                src={bun}
                alt="html"
                height={48}
                width={60}
              />
            </div>

            <div className="flex gap-2 cursor-pointer hover:scale-95 transition-all">
              <Image
                className="bg-white rounded-lg"
                src={mongodb}
                alt="html"
                height={48}
                width={60}
              />
              <Image
                className="bg-white rounded-lg"
                src={prisma}
                alt="html"
                height={48}
                width={60}
              />
            </div>
            <div className="flex gap-2 cursor-pointer hover:scale-95 transition-all">
              <Image
                className="rounded-lg bg-white"
                src={tailwind}
                alt="html"
                height={48}
                width={60}
              />
              <Image
                className="rounded-lg bg-white"
                src={sass}
                alt="html"
                height={48}
                width={60}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
