import React from "react";

const achievementsData = [
  {
    id: 1,
    title: "Best Robot 2024",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    desc: "Won the national robotics competition in 2024.",
  },
  {
    id: 2,
    title: "Innovation Award",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&h=600&fit=crop",
    desc: "Received for outstanding innovative design.",
  },
  {
    id: 3,
    title: "Champion",
    image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=600&fit=crop",
    desc: "First place in regional competition.",
  },
  {
    id: 4,
    title: "Juara 1",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    desc: "Juara 1 dalam perlombaan robot tingkat.",
  },
  {
    id: 5,
    title: "Juara 2",
    image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800&h=600&fit=crop",
    desc: "Juara 2 dalam perlombaan robot tingkat.",
  },
  {
    id: 6,
    title: "Juara 3",
    image: "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?w=800&h=600&fit=crop",
    desc: "Juara 3 dalam perlombaan robot tingkat.",
  },
  {
    id: 7,
    title: "Juara 4",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    desc: "Juara 4 dalam perlombaan robot tingkat nasional.",
  },
  {
    id: 8,
    title: "Juara 5",
    image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=800&h=600&fit=crop",
    desc: "Juara 5 dalam perlombaan robot tingkat nasional.",
  },
  {
    id: 9,
    title: "Juara 6",
    image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?w=800&h=600&fit=crop",
    desc: "Juara 6 dalam perlombaan robot tingkat nasional.",
  },
];

const AchievementCard = ({ achievement, className }) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group cursor-pointer transform transition-all duration-300 hover:scale-105 ${className}`}>
      <img
        src={achievement.image}
        alt={achievement.title}
        className="absolute inset-0 w-full h-full object-cover z-10 brightness-95 transition-all duration-500 group-hover:brightness-75"
      />
     
      <div className="relative z-20 p-4 pb-4 w-full flex flex-col justify-end h-full">
        <div className="absolute left-2 bottom-2 right-2 h-24 bg-white/20 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 rounded-xl border border-white/30"></div>
        <div className="flex flex-col z-20 transition-all duration-300 gap-0 group-hover:gap-2">
          <h3 className="text-white text-2xl md:text-3xl font-semibold drop-shadow-lg font-montserrat transition-all duration-300 mb-2 group-hover:mb-4 group-hover:mt-2">
            {achievement.title}
          </h3>
          <p className="text-white text-base font-sans opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 leading-relaxed">
            {achievement.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Achievement() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#0b1e3d] to-[#112a4c] text-white font-sans relative overflow-hidden">
      <header className="pt-8 text-center mb-8">
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-wide font-montserrat mb-0">
          Achievements
        </h1>
      </header>

      <div className="grid auto-rows-auto grid-cols-6 gap-6 max-w-6xl mx-auto my-20 mb-8 px-4">        
        <AchievementCard 
          achievement={achievementsData[0]} 
          className="row-start-1 row-end-2 col-start-1 col-end-5" 
        />
        <AchievementCard 
          achievement={achievementsData[1]} 
          className="row-start-1 row-end-2 col-start-5 col-end-7" 
        />

        <AchievementCard 
          achievement={achievementsData[2]} 
          className="row-start-2 row-end-3 col-start-1 col-end-3" 
        />
        <AchievementCard 
          achievement={achievementsData[3]} 
          className="row-start-2 row-end-3 col-start-3 col-end-5" 
        />
        <AchievementCard 
          achievement={achievementsData[4]} 
          className="row-start-2 row-end-3 col-start-5 col-end-7" 
        />
        
        <AchievementCard 
          achievement={achievementsData[5]} 
          className="row-start-3 row-end-4 col-start-1 col-end-3" 
        />
        <AchievementCard 
          achievement={achievementsData[6]} 
          className="row-start-3 row-end-4 col-start-3 col-end-7" 
        />
        
        <AchievementCard 
          achievement={achievementsData[7]} 
          className="row-start-4 row-end-5 col-start-1 col-end-5" 
        />
        <AchievementCard 
          achievement={achievementsData[8]} 
          className="row-start-4 row-end-5 col-start-5 col-end-7" 
        />
      </div>
    </div>
  );
}