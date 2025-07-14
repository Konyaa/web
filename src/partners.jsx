import React from 'react';
import { useSpring, animated } from 'react-spring';

const partnersData = [
  {
    title: 'PT',
    image: '',
    description: 'Leading technology partner specializing in innovative solutions',
    row: 'row-start-1 row-end-2',
    col: 'col-start-1 col-end-3',
  },
  {
    title: 'Robo',
    image: '',
    description: 'Robotics engineering company focused on automation and AI',
    row: 'row-start-1 row-end-2',
    col: 'col-start-3 col-end-6',
  },
  {
    title: 'Innov',
    image: '',
    description: 'Innovation hub driving technological advancement and research',
    row: 'row-start-1 row-end-2',
    col: 'col-start-7 col-end-10',
  },
  {
    title: 'Tech',
    image: '',
    description: 'Technology solutions provider for modern digital transformation',
    row: 'row-start-2 row-end-3',
  },
  {
    title: 'Future',
    image: '',
    description: 'Future-focused company building tomorrow\'s technology today',
    row: 'row-start-2 row-end-3',
  },
  {
    title: 'Future',
    image: '',
    description: 'Pioneering next-generation solutions for sustainable growth',
    row: 'row-start-2 row-end-3',
  },
];

function RandomNumber({ n }) {
  const { number } = useSpring({
    from: { number: Math.random() * n },
    to: { number: n },
    delay: 50,
    config: { mass: 1, tension: 80, friction: 150 },
  });

  return <animated.span>{number.to((val) => val.toFixed(0))}</animated.span>;
}

export default function PartnersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#001F3F] to-[#001F3F] text-white font-sans relative overflow-hidden">
     
      <div className="absolute w-40 h-40 bg-[#0073BA] opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-32 h-32 bg-[#0073BA] opacity-20 blur-2xl rounded-full top-1/3 right-10"></div>
      <div className="absolute w-24 h-24 bg-[#0073BA] opacity-10 blur-2xl rounded-full bottom-1/4 left-1/4"></div>
      <div className="absolute w-28 h-28 bg-[#0073BA] opacity-10 blur-2xl rounded-full bottom-10 right-1/3"></div>

      <section className="px-6 md:px-16 lg:px-32 pt-20 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div>
          <h2 className="text-6xl font-extrabold leading-tight text-white">
            Why<br />choose<br />ROBOTIIK!
          </h2>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-6xl font-bold text-white">Partners</h2>
          <p className="text-gray-300 text-base max-w-3xl">
            ROBOTIIK provides real benefits to sponsors by reaching students and the community through educational activities, competitions, and social media. Your support will help develop robotics technology while also being an effective and positive promotional tool.
          </p>
          <div className="flex flex-wrap gap-4 justify-start mb-10">
              <div className="bg-white text-black px-6 py-5 rounded-xl text-center w-[160px]">
                <div className="text-5xl font-extrabold"><RandomNumber n={95} />%</div>
                <div className="text-sm">Achievement</div>
              </div>
              <div className="bg-white text-black px-6 py-5 rounded-xl text-center w-[160px]">
                <div className="text-5xl font-extrabold"><RandomNumber n={72} />+</div>
                <div className="text-sm">Engagement</div>
              </div>
              <div className="bg-white text-black px-6 py-5 rounded-xl text-center w-[160px]">
                <div className="text-5xl font-extrabold"><RandomNumber n={250} />+</div>
                <div className="text-sm">Experienced</div>
              </div>
            </div>
        </div>
      </section>

      
      <section className="px-6 md:px-16 lg:px-32 py-16">
        <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto my-8 px-4">
          {partnersData.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group cursor-pointer
                ${i % 3 === 1 ? 'col-span-2' : 'col-span-1'}
              `}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover z-10 brightness-95"
              />
              
              
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-black/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 px-4 py-4 transform translate-y-full group-hover:translate-y-0 rounded-b-2xl">
                
                <div className="mb-2">
                  <span className="text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat">
                    {item.title}
                  </span>
                </div>
                
               
                <p className="text-white text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
              
              
              <div className="absolute bottom-0 left-0 pb-4 pl-4 z-10 group-hover:opacity-0 transition-opacity duration-300">
                <span className="text-white text-2xl md:text-3xl font-semibold drop-shadow font-montserrat">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      
   <section className="px-6 md:px-16 lg:px-32 py-20 flex flex-col lg:flex-row gap-20 items-start">
  <div className="lg:w-1/3">
    <h2 className="text-6xl font-extrabold leading-tight text-white">
      BECOME<br />A PARTNER
    </h2>
  </div>

  <div className="lg:w-2/3 w-full">
    <div className="space-y-8 w-full text-white">

      <div>
        <label className="block text-sm font-semibold mb-3">Name</label>
        <input
          type="text"
          defaultValue="ROBOTIIK 2025"
          className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-md text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
          placeholder="Name"
        />
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full">
          <label className="block text-sm font-semibold mb-3">Email</label>
          <input
            type="email"
            defaultValue="robotiik.filkom@ub.ac.id"
            className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-md text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
            placeholder="Email"
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-semibold mb-3">Phone Number</label>
          <input
            type="tel"
            defaultValue="0812 3456 7890"
            className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-md text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60"
            placeholder="Phone Number"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3">Message</label>
        <textarea
          defaultValue="Hi..."
          className="w-full px-4 py-3 rounded-md bg-white/10 backdrop-blur-md text-white placeholder-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 resize-none"
          rows="4"
          placeholder="Message"
        ></textarea>
      </div>

      <div className="flex justify-end pt-6">
        <button
          type="submit"
          className="bg-white text-[#0b1d36] font-bold px-8 py-3 rounded-full hover:bg-gray-200 transition text-lg"
        >
          Submit ➤
        </button>
      </div>

    </div>
  </div>
</section>
    </div>
  );
}