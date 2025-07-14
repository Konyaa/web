import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const achievementsData = [
  {
    id: 1,
    title: "Best Robot 2024",
    image: "g",
    desc: "Won the national robotics competition in 2024.",
  },
  {
    id: 2,
    title: "Innovation Award",
    image: "",
    desc: "Received for outstanding innovative design.",
  },
  {
    id: 3,
    title: "Champion",
    image: "",
    desc: ".",
  },
  {
    id: 4,
    title: "Juara 1",
    image:
      "",
    desc: "Juara 1 dalam perlombaan robot tingkat nasional.",
  },
  {
    id: 5,
    title: "Juara 2",
    image:
      "",
    desc: "Juara 2 dalam perlombaan robot tingkat nasional.",
  },
  {
    id: 6,
    title: "Juara 3",
    image:
      "",
    desc: "Juara 3 dalam perlombaan robot tingkat nasional.",
  },
  {
    id: 7,
    title: "Juara 4",
    image:
      "",
    desc: "Juara 4 dalam perlombaan robot tingkat nasional.",
  },
  {
    id: 8,
    title: "Juara 5",
    image:
      "",
    desc: "Juara 5 dalam perlombaan robot tingkat nasional.",
  },
  {
    id: 9,
    title: "Juara 6",
    image:
      "",
    desc: "Juara 6 dalam perlombaan robot tingkat nasional.",
  },
];

export default function Achievement() {
  return (
    

    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b1e3d] to-[#112a4c] text-white font-sans relative overflow-hidden">
      
      
      <header className="pt-8 text-center mb-8">
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide font-montserrat mb-0">
          Achievements
        </h1>
      </header>

      <div
        className="grid auto-rows-auto grid-cols-6 gap-6 max-w-6xl mx-auto my-20 mb-8 px-4"
        style={{ gridAutoFlow: "row" }}
      >
        
        <div className="row-start-1 row-end-2 col-start-1 col-end-5 relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group">
          <img
            src={achievementsData[0].image}
            alt={achievementsData[0].title}
            className="absolute inset-0 w-full h-full object-cover z-10 brightness-95"
          />
        
           
            <div className="absolute top-3 right-3 z-30">
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur text-[#1e3c72] flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </button>
            </div>
          <div className="relative z-20 p-0 pb-4 pl-4 w-full">
           
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl z-10"></div>
            <span className="relative text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat z-20 transition-all duration-300">
              {achievementsData[0].title}
            </span>
            <span className="relative block text-white text-base font-sans z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {achievementsData[0].desc}
            </span>
          </div>
        </div>
        <div className="row-start-1 row-end-2 col-start-5 col-end-7 relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group">
          <img
            src={achievementsData[1].image}
            alt={achievementsData[1].title}
            className="absolute inset-0 w-full h-full object-cover z-10 brightness-95"
          />
         <div className="absolute top-3 right-3 z-30">
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur text-[#1e3c72] flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </button>
            </div>
          <div className="relative z-20 p-0 pb-4 pl-4 w-full">
            
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl z-10"></div>
            
            <span className="relative text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat z-20 transition-all duration-300">
              {achievementsData[1].title}
            </span>
           
            <span className="relative block text-white text-base font-sans z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {achievementsData[1].desc}
            </span>
          </div>
        </div>
        
        <div className="row-start-2 row-end-3 col-start-1 col-end-3 relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group">
          <img
            src={achievementsData[2].image}
            alt={achievementsData[2].title}
            className="absolute inset-0 w-full h-full object-cover z-10 brightness-95"
          />
         <div className="absolute top-3 right-3 z-30">
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur text-[#1e3c72] flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </button>
            </div>
          <div className="relative z-20 p-0 pb-4 pl-4 w-full">
           
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl z-10"></div>
          
            <span className="relative text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat z-20 transition-all duration-300">
              {achievementsData[1].title}
            </span>
           
            <span className="relative block text-white text-base font-sans z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {achievementsData[1].desc}
            </span>
          </div>
        </div>
        <div className="row-start-2 row-end-3 col-start-3 col-end-5 relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group">
          <img
            src={achievementsData[3].image}
            alt={achievementsData[3].title}
            className="absolute inset-0 w-full h-full object-cover z-10 brightness-95"
          />
          <div className="absolute top-3 right-3 z-30">
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur text-[#1e3c72] flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </button>
            </div>
          <div className="relative z-20 p-0 pb-4 pl-4 w-full">
           
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl z-10"></div>
           
            <span className="relative text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat z-20 transition-all duration-300">
              {achievementsData[1].title}
            </span>
            
            <span className="relative block text-white text-base font-sans z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {achievementsData[1].desc}
            </span>
          </div>
        </div>
        <div className="row-start-2 row-end-3 col-start-5 col-end-7 relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group">
          <img
            src={achievementsData[4].image}
            alt={achievementsData[4].title}
            className="absolute inset-0 w-full h-full object-cover z-10 brightness-95"
          />
        <div className="absolute top-3 right-3 z-30">
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur text-[#1e3c72] flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </button>
            </div>
          <div className="relative z-20 p-0 pb-4 pl-4 w-full">
            
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl z-10"></div>
            
            <span className="relative text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat z-20 transition-all duration-300">
              {achievementsData[1].title}
            </span>
            
            <span className="relative block text-white text-base font-sans z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {achievementsData[1].desc}
            </span>
          </div>
        </div>
    
        <div className="row-start-3 row-end-4 col-start-1 col-end-3 relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group ">
          <img
            src={achievementsData[5].image}
            alt={achievementsData[5].title}
            className="absolute inset-0 w-full h-full object-cover z-10 brightness-95"
          />
          <div className="absolute top-3 right-3 z-30">
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur text-[#1e3c72] flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </button>
            </div>
          <div className="relative z-20 p-0 pb-4 pl-4 w-full">
           
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl z-10"></div>
            
            <span className="relative text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat z-20 transition-all duration-300">
              {achievementsData[1].title}
            </span>
           
            <span className="relative block text-white text-base font-sans z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {achievementsData[1].desc}
            </span>
          </div>
        </div>
        <div className="row-start-3 row-end-4 col-start-3 col-end-7 relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group">
          <img
            src={achievementsData[6].image}
            alt={achievementsData[6].title}
            className="absolute inset-0 w-full h-full object-cover z-10 brightness-95"
          />
          <div className="absolute top-3 right-3 z-30">
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur text-[#1e3c72] flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </button>
            </div>
          <div className="relative z-20 p-0 pb-4 pl-4 w-full">
           
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl z-10"></div>
            
            <span className="relative text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat z-20 transition-all duration-300">
              {achievementsData[1].title}
            </span>
            
            <span className="relative block text-white text-base font-sans z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {achievementsData[1].desc}
            </span>
          </div>
        </div>
        
        <div className="row-start-4 row-end-5 col-start-1 col-end-5 relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group">
          <img
            src={achievementsData[7].image}
            alt={achievementsData[7].title}
            className="absolute inset-0 w-full h-full object-cover z-10 brightness-95"
          />
          <div className="absolute top-3 right-3 z-30">
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur text-[#1e3c72] flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </button>
            </div>
          <div className="relative z-20 p-0 pb-4 pl-4 w-full">
            
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl z-10"></div>
           
            <span className="relative text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat z-20 transition-all duration-300">
              {achievementsData[1].title}
            </span>
          
            <span className="relative block text-white text-base font-sans z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {achievementsData[1].desc}
            </span>
          </div>
        </div>
        <div className="row-start-4 row-end-5 col-start-5 col-end-7 relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group">
          <img
            src={achievementsData[8].image}
            alt={achievementsData[8].title}
            className="absolute inset-0 w-full h-full object-cover z-10 brightness-95"
          />
        <div className="absolute top-3 right-3 z-30">
              <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur text-[#1e3c72] flex items-center justify-center transition-all duration-300 group-hover:rotate-45 group-hover:bg-white">
                <FontAwesomeIcon icon={faArrowRight} className="text-base" />
              </button>
            </div>
          <div className="relative z-20 p-0 pb-4 pl-4 w-full">
            
            <div className="absolute left-0 bottom-0 w-full h-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl z-10"></div>
           
            <span className="relative text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat z-20 transition-all duration-300">
              {achievementsData[1].title}
            </span>
            
            <span className="relative block text-white text-base font-sans z-20 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
              {achievementsData[1].desc}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
