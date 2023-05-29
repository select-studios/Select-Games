import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { BiDownArrow, BiHeart } from "react-icons/bi";
import Image from "next/image";

export default async function Home() {
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-700 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Select Launcher</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
            Bringing Indie Developers to the front page
          </Balancer>
        </p>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-purple-300 bg-purple px-5 py-2 text-sm text-purple-500 shadow-md transition-colors hover:border-blue-100"
            href="https://github.com/select-studios/Select-Launcher/releases/download/v1.3.7/Select-Launcher-Windows-1.3.7-Setup.exe"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiDownArrow />
            <p>
              Download the Launcher
            </p>
          </a>

          <a
            className="flex max-w-fit items-center justify-center space-x-2 rounded-full border border-red-300 bg-red px-5 py-2 text-sm text-red-600 shadow-md transition-colors hover:border-red-400"
            href="https://patreon.com/SelectStudios"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BiHeart />
            <p>
              Support us
            </p>
          </a>
        </div>
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >

        </div>
      </div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({title, description }) => (
          <Card
            key={title}
            title={title}
            description={description}
          />
        ))}
      </div>
    </>
  );
}

const features = [

  {
    
    title: "Indie Developers",
    description:
      "We support small indie niche communities growth in gaming",
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Logo for" src="/authjs.webp" width={50} height={50} />
      </div>
    ),
  },

  {
    title: "A Support Team",
    description:
      "All staff are on hand from founder to Game Tester ready to help you with any issue.",
    demo: (
      <div className="flex items-center justify-center space-x-20">
      </div>
    ),
  },

  {
    
    title: "Our Goal",
    description:
      "Gamers are a community and Indie Devs build communities, here we give everyone a platform",
    demo: (
      <div className="flex items-center justify-center space-x-20">
      </div>
    ),
  },
];
