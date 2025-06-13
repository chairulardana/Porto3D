import { createFileRoute } from "@tanstack/react-router";
import Lanyard from "../Components/Lanyard/Lanyard";
import SplitText from "../Components/SplitText/SplitText";
import ScrambledText from "../Components/ScrambledText/ScrambledText";
import ScrollVelocity from "../Components/ScrollVelocity/ScrollVelocity";
import ScrollFloat from "../Components/ScrollFloat/ScrollFloat";
import TiltedCard from "../Components/TiltedCard/TiltedCard";
import gitImg from "../Assets/git.png";
import javascriptImg from "../Assets/javascript.png";
import reactImg from "../Assets/reactjs.png";
import typescriptImg from "../Assets/typescript.png";
import tailwindImg from "../Assets/tailwind.png";
import csharpImg from "../Assets/csharp.png";
import ndejsImg from "../Assets/nodejs.png";
import sqlImg from "../Assets/sql.png";
import ChromaGrid from "../Components/ChromaGrid/ChromaGrid";
import UTImg from "../Assets/unitedtractors.png";
import Folder from "../Components/Folder/Folder";
import FeUserImg from "../Assets/FeUser.png";
import FeAdminImg from "../Assets/FeAdmin.png";
import Be from "../Assets/Be.png";
import ChromaGridNew from "../Components/Moleculs/ChromaGrid/ChromaGrid";
import Poto1Img from "../assets/Poto1.jpg";
import Poto3Img from "../assets/Poto3.jpg";
import Poto4Img from "../assets/Poto4.jpg";
import Poto5Img from "../assets/Poto5.jpg";
import Poto6Img from "../assets/Poto6.jpg";
import Poto7Img from "../assets/Poto7.jpg";
import { Mail } from "lucide-react";


export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const handleAnimationComplete = () => {
    console.log("Animation completed");
  };

  const itemss = [
  {
    image: Poto1Img,
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/sarahjohnson"
  },
  {
    image:Poto3Img,
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image:Poto4Img,
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image:Poto5Img,
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image:Poto6Img,
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
  {
    image:Poto7Img,
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://linkedin.com/in/mikechen"
  },
];

  const items = [
  {
    image: UTImg,
    title: "PT United Tractors Tbk",
    subtitle: "4 Months",
    handle: "@unitedtractorsofficial",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://www.unitedtractors.com"
  },
];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#021129]">
      <div className="grid grid-cols-12">
        <div className="col-span-6 mt-60 ml-10">
          <SplitText
            text="I'm Chairul Ardana"
            className="text-6xl font-semibold text-white ml-20"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <SplitText
            text="Full Stack Web Developer"
            className="text-6xl font-semibold text-[#B5B506]"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <ScrambledText
            className="text-2xl ml-2 mt-5 "
            radius={100}
            duration={1.2}
            speed={0.5}
            scrambleChars=".:"
          >
            I’m a Full Stack Developer skilled in building websites and
            applications from database management and backend development to
            creating responsive and engaging frontends — with a focus on
            performance and user experience.
          </ScrambledText>
        </div>
        <div className="col-span-6">
          <Lanyard position={[1, 0, 12]} gravity={[0, -40, 0]} />
        </div>
      </div>
      <div className="w-full">
        <div className="relative left-1/2 right-1/2 ml-[-50vw] mr-[-50vw] w-screen">
          <ScrollVelocity
            texts={["Chairul Ardana", "Full Stack Web Developer"]}
            velocity={200}
            className="custom-scroll-text text-amber-50 px-4"
          />
        </div>

        <div className="h-20" />
        <div className="h-[30vh] flex items-center justify-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top 99%"
            scrollEnd="top 80%"
            stagger={0.03}
            textClassName="text-[10rem]  font-extrabold text-amber-50"
            containerClassName="text-center"
          >
            Tech Stack
          </ScrollFloat>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 ml-10 gap-4">
        {/* Baris 1 */}
        <TiltedCard
          imageSrc={gitImg}
          captionText="Git"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          overlayContent={<p className="tilted-card-demo-text">Git</p>}
        />
        <TiltedCard
          imageSrc={javascriptImg}
          captionText="JavaScript"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          overlayContent={<p className="tilted-card-demo-text">JavaScript</p>}
        />
        <TiltedCard
          imageSrc={reactImg}
          captionText="ReactJS"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          overlayContent={<p className="tilted-card-demo-text">ReactJS</p>}
        />
        <TiltedCard
          imageSrc={typescriptImg}
          captionText="TypeScript"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          overlayContent={<p className="tilted-card-demo-text">TypeScript</p>}
        />
        <TiltedCard
          imageSrc={tailwindImg}
          captionText="Tailwind CSS"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          overlayContent={<p className="tilted-card-demo-text">Tailwind CSS</p>}
        />
        {/* Baris 2 - diposisikan sesuai urutan permintaan */}
        <div /> {/* Kosong di bawah Git */}
        <TiltedCard
          imageSrc={csharpImg}
          captionText="C#"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          overlayContent={<p className="tilted-card-demo-text">C#</p>}
        />
        <TiltedCard
          imageSrc={sqlImg}
          captionText="SQL Server"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          overlayContent={<p className="tilted-card-demo-text">SQL Server</p>}
        />
        <TiltedCard
          imageSrc={ndejsImg}
          captionText="Node.js"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          overlayContent={<p className="tilted-card-demo-text">Node js</p>}
        />
      </div>
      
        <div className="h-20" />
        <div className="h-[30vh] flex items-center justify-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top 99%"
            scrollEnd="top 80%"
            stagger={0.03}
            textClassName="text-[10rem]  font-extrabold text-amber-50"
            containerClassName="text-center"
          >
            Experience
          </ScrollFloat>
        </div>

        <div className="flex justify-center items-center" style={{ height: '600px' }}>
          <ChromaGrid 
            items={items}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
           <div className="h-20" />
        <div className="h-[30vh] flex items-center justify-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top 99%"
            scrollEnd="top 80%"
            stagger={0.03}
            textClassName="text-[10rem]  font-extrabold text-amber-50"
            containerClassName="text-center"
          >
            My Project
          </ScrollFloat>
        </div>
<div style={{ height: '600px' }} className="flex justify-center items-center mt-[-60px]">
  <Folder
    size={2}
    color="#5227FF"
    className="custom-folder"
    items={[
      <img src={FeUserImg} alt="FE User" className="w-full h-full object-cover rounded-lg" />,
      <img src={FeAdminImg} alt="FE Admin" className="w-full h-full object-cover rounded-lg" />,
      <img src={Be} alt="BE" className="w-full h-full object-cover rounded-lg" />,
    ]}
  />
</div>
     <div className="h-20" />
        <div className="h-[30vh] flex items-center justify-center">
          <ScrollFloat
            animationDuration={1}
            ease="back.inOut(2)"
            scrollStart="top 99%"
            scrollEnd="top 80%"
            stagger={0.03}
            textClassName="text-[10rem]  font-extrabold text-amber-50"
            containerClassName="text-center"
          >
            My Photos
          </ScrollFloat>
        </div>
        <div style={{ height: '600px', position: 'relative' }}>
  <ChromaGridNew 
    items={itemss}
    radius={300}
    damping={0.45}
    fadeOut={0.6}
    ease="power3.out"
  />
</div>
   <footer className="w-full bg-gradient-to-r from-[#0a192f] to-[#112240] text-gray-300 py-12 px-4 mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-[#B5B506] mb-2">Chairul Ardana</h3>
              <p className="max-w-md text-gray-400">
                Full Stack Developer specializing in creating high-performance web applications
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6 mb-4">
                <a 
                  href="mailto:chairulardana06@gmail.com" 
                  className="hover:text-amber-400 transition-colors duration-300"
                  aria-label="Email"
                >
                 
<Mail className="w-8 h-8 hover:text-amber-400 transition-colors duration-300" />
                </a>
                <a 
                  href="https://github.com/chairulardana" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/chairlardnaa" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
              
              <div className="flex flex-col items-center md:items-end">
                <p className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Chairul Ardana. All rights reserved.
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Crafted with passion and React
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </div>
      
  );
}
