// export default function Hero() {
//     return (
//       <div className="bg-cover bg-center h-screen text-white flex items-center" style={{ backgroundImage: "url('/images/hero.jpg')" }}>
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="text-5xl font-bold">Explore the World with TravelNow</h1>
//           <p className="mt-4 text-lg">Discover amazing destinations and plan your next adventure.</p>
//           <a href="/destinations" className="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600">Explore Destinations</a>
//         </div>
//       </div>
//     );
//   }


import Image from 'next/image'
import { Button } from '../Button/Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 py-10 pb-20 md:gap-16 md:py-16 xl:flex-row xl:items-start xl:gap-28 xl:pb-32">
      {/* Hero Map Section */}
      <div className="hero-map" />

      {/* Hero Content Section */}
      <div className="relative z-20 flex flex-1 flex-col gap-6 xl:w-1/2 xl:gap-8">
        {/* Header Section */}
        <div className="relative">
          <Image
            src="/icons/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-10px] top-[-30px] w-10 md:w-12"
          />
          <h1 className="text-3xl font-bold lg:text-5xl">Putuk Truno Camp Area</h1>
        </div>
        <p className="text-sm text-gray-500 md:text-base xl:max-w-lg">
          We want to be on each of your journeys seeking the satisfaction of seeing the incorruptible beauty of nature. We can help you on an adventure around the world in just one app.
        </p>

        {/* Rating Section */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-1">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/icons/star.svg"
                  key={index}
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
          </div>
          <p className="text-base font-bold text-blue-600 lg:text-lg">
            198k
            <span className="ml-1 text-gray-500 font-normal">Excellent Reviews</span>
          </p>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col w-full gap-3 sm:flex-row sm:justify-start">
          <Button
            type="button"
            title="Download App"
            variant="btn_green"
            className="w-full sm:w-auto"
          />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
            className="w-full sm:w-auto"
          />
        </div>
      </div>

      {/* Info Card Section */}
      <div className="relative flex flex-1 justify-center xl:justify-end">
        <div className="z-20 w-full max-w-xs flex flex-col gap-6 rounded-3xl bg-green-700 px-6 py-8 sm:max-w-sm">
          {/* Location Section */}
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="text-sm text-gray-400">Location</p>
              <Image src="/icons/close.svg" alt="close" width={20} height={20} />
            </div>
            <p className="mt-2 text-lg font-bold text-white">Aguas Calientes</p>
          </div>

          {/* Distance and Elevation Section */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <p className="text-sm text-gray-400">Distance</p>
              <p className="text-lg font-bold text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="text-sm text-gray-400">Elevation</p>
              <p className="text-lg font-bold text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Hero