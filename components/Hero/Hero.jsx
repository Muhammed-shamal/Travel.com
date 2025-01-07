// export default function Hero() {
//     return (
//         <div className="pt-36">
//             {/* <section className="bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
//                 <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
//                     <h1 className="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
//                         Control your Finances with our
//                         <span className="text-indigo-600">Smart Tool </span>
//                     </h1>
//                     <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
//                         Invest intelligently and discover a better way to manage your entire
//                         wealth easily.
//                     </p>
//                     <a
//                         href="javascript:;"
//                         className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
//                     >
//                         Create an account
//                         <svg
//                             className="ml-2"
//                             width={20}
//                             height={20}
//                             viewBox="0 0 20 20"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <path
//                                 d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
//                                 stroke="white"
//                                 strokeWidth={2}
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                             />
//                         </svg>
//                     </a>
//                     <div className="flex justify-center">
//                         <img
//                             src="https://pagedone.io/asset/uploads/1691054543.png"
//                             alt="Dashboard image"
//                             className="rounded-t-3xl h-auto object-cover"
//                         />
//                     </div>
//                     <div></div>
//                 </div>
//             </section> */}
//             <>
//   {/*HTML CODE*/}
//   <div className="w-full relative">
//     <div className="swiper progress-slide-carousel swiper-container relative">
//       <div className="swiper-wrapper">
//         <div className="swiper-slide">
//           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
//             <span className="text-3xl font-semibold text-indigo-600">
//               Slide 1{" "}
//             </span>
//           </div>
//         </div>
//         <div className="swiper-slide">
//           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
//             <span className="text-3xl font-semibold text-indigo-600">
//               Slide 2{" "}
//             </span>
//           </div>
//         </div>
//         <div className="swiper-slide">
//           <div className="bg-indigo-50 rounded-2xl h-96 flex justify-center items-center">
//             <span className="text-3xl font-semibold text-indigo-600">
//               Slide 3{" "}
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="swiper-pagination !bottom-2 !top-auto !w-80 right-0 mx-auto bg-gray-100" />
//     </div>
//   </div>
// </>

//         </div>

//     )
// }

'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export default function Hero() {
    const images = [
        'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSkpDRRHC-CtjI4Wa2zDTj6C28PBZKZ44MAlpv3WTcko4gqGCUeaN13c_4GarhGJH9cE2k2pftHXUjyPgm6MOyZFrh6rCBUkrMVr9OiFw',
        'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQq44cSmV7bS731gkqVhyd37dTnT0bFyCl7jhiUjQ28HpGXs3MUIx8gxsl5_lNp5VgFfwtOHjSNClPFYk28yiaAjL5GpYEDDffl04sLZQ',
        'https://lh5.googleusercontent.com/p/AF1QipPd6OVELKe74pAqogj4Fucah8ctb9-fX2d1mqDX=w675-h390-n-k-no',
    ];

    return (
        <section className="bg-[url('https://lh5.googleusercontent.com/p/AF1QipM2pX0c_H2Krx-lVz6EyWu58fx2IeNxvZ6kYRiI=w675-h390-n-k-no')] bg-center bg-cover">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center p-36">
                <h1 className="max-w-2xl mx-auto font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
                    Control your Finances with our
                    <span className="text-indigo-600"> Smart Tool </span>
                </h1>
                <p className="max-w-sm mx-auto text-base font-normal leading-7 text-gray-950 mb-9">
                    Invest intelligently and discover a better way to manage your entire wealth easily.
                </p>
                <a
                    href="#"
                    className="mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
                >
                    View More
                    <svg
                        className="ml-2"
                        width={20}
                        height={20}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                            stroke="white"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
                <div className="flex justify-center">
                    <Swiper
                        autoplay={{ delay: 3000, disableOnInteraction: false }}

                        className="w-full max-w-4xl"
                    >
                        {images.map((src, idx) => (
                            <SwiperSlide key={idx}>
                                <img
                                    src={src}
                                    alt={`Slide ${idx + 1}`}
                                    className="rounded-t-3xl w-full h-auto object-cover"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
