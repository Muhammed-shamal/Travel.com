import Image from "next/image"



const Features = () => {
  return (

    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="py-1 px-4 bg-indigo-100 rounded-full text-xs font-medium text-indigo-600 text-center">
            Features
          </span>
          <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
          Why choose Tourz
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            Provides advanced features like time tracking, integrating with third
            party apps (calendar / Google drive), creating subtasks.
          </p>
        </div>
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
              <Image src={'/featureIcons/price.svg'} alt="price guarantee image" width={30} height={20}/>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
            Best Price Guarantee
            </h4>
            <p className="text-sm font-normal text-gray-500">
              plan and structure work how you want. Quickly organizing tasks.
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
            <Image src={'/featureIcons/booking.svg'} alt="easy booking image" width={30} height={20}/>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
            Easy & Quick Booking
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Bring all your tools and data together. Also join with hundreds of
              other apps.
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
            <Image src={'/featureIcons/support.svg'} alt="customer support image" width={30} height={20}/>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
            Customer Care 24/7
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Get real time insight into progress and allows teams to track their
              work habits
            </p>
          </div>
          <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
              <svg
                className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white"
                width={30}
                height={30}
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                  stroke=""
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
              Workflow Builder
            </h4>
            <p className="text-sm font-normal text-gray-500">
              Automated processes to coordinate your teams and increase
              communication.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}


export default Features