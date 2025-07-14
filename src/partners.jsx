import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const partnersData = [
  {
    title: 'PT',
    image: '',
    row: 'row-start-1 row-end-2',
    col: 'col-start-1 col-end-4',
  },
  {
    title: 'Robo',
    image: '',
    row: 'row-start-1 row-end-2',
    col: 'col-start-4 col-end-7',
  },
  {
    title: 'Innov',
    image: '',
    row: 'row-start-2 row-end-3',
    col: 'col-start-1 col-end-3',
  },
  {
    title: 'Digi',
    image: '',
    row: 'row-start-2 row-end-3',
    col: 'col-start-3 col-end-5',
  },
  {
    title: 'NextGen ',
    image: '',
    row: 'row-start-2 row-end-3',
    col: 'col-start-5 col-end-7',
  },
  {
    title: 'Cyber',
    image: '',
    row: 'row-start-3 row-end-4',
    col: 'col-start-1 col-end-7',
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
          <div className="flex flex-wrap gap-4">
            <div className="bg-white text-black px-6 py-4 rounded-xl text-center w-[120px]">
              <div className="text-2xl font-bold"><RandomNumber n={95} />%</div>
              <div className="text-xs">Achievement</div>
            </div>
            <div className="bg-white text-black px-6 py-4 rounded-xl text-center w-[120px]">
              <div className="text-2xl font-bold"><RandomNumber n={72} />+</div>
              <div className="text-xs">Engagement</div>
            </div>
            <div className="bg-white text-black px-6 py-4 rounded-xl text-center w-[120px]">
              <div className="text-2xl font-bold"><RandomNumber n={250} />+</div>
              <div className="text-xs">Experienced</div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-6 md:px-16 lg:px-32 py-16">
        <div className="grid auto-rows-auto grid-cols-6 gap-6 max-w-6xl mx-auto my-8 px-4" style={{ gridAutoFlow: "row" }}>
          {partnersData.map((item, i) => (
            <div key={i} className={`relative rounded-2xl overflow-hidden shadow-lg bg-white min-h-[220px] flex items-end group ${item.row} ${item.col}`}>
              <img
                src={item.image}
                alt={item.title}
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
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      
      <section className="px-6 md:px-16 lg:px-32 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div className="col-span-1">
          <h2 className="text-6xl font-extrabold leading-tight text-white">
            BECOME<br />A PARTNER
          </h2>
        </div>
        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-xl w-full col-span-2">
          <form className="space-y-6 w-full text-white">
            <div>
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                defaultValue="ROBOTIK 2025"
                className="w-full px-4 py-3 rounded-md border border-white/40 bg-transparent text-lg placeholder-white"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full">
                <label className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  defaultValue="robotik.filkom@ub.ac.id"
                  className="w-full px-4 py-3 rounded-md border border-white/40 bg-transparent text-lg placeholder-white"
                  placeholder="Email"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  defaultValue="0812"
                  className="w-full px-4 py-3 rounded-md border border-white/40 bg-transparent text-lg placeholder-white"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                defaultValue="Messege"
                className="w-full px-4 py-3 rounded-md border border-white/40 bg-transparent text-lg placeholder-white"
                rows="4"
                placeholder="Message"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-white text-[#0b1d36] font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition text-lg"
              >
                Submit ➤
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
