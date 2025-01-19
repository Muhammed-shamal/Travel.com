import Image from "next/image";


export default function Description() {
    return (
        <div className="container mx-auto py-10">
            <div className="flex flex-wrap -mx-4">
                {/* Left Column */}
                <div
                    className="w-full lg:w-1/2 px-4"
                    style={{ minHeight: "400px" }}
                    data-wow-delay="0.1s"
                >
                    <div className="relative h-full">
                        <Image
                            src="/images/blog/blog-01.png"
                            alt="About Us"
                            className="absolute w-full h-full object-cover"
                            layout="fill"
                        />
                    </div>
                </div>
                {/* Right Column */}
                <div
                    className="w-full lg:w-1/2 px-4"
                    data-wow-delay="0.3s"
                >
                    <h6 className="text-primary bg-white inline-block px-3 py-1 font-semibold uppercase tracking-wide">
                        About Us
                    </h6>
                    <h1 className="text-3xl font-bold mt-4 mb-6">
                        Welcome to <span className="text-primary">Tourist</span>
                    </h1>
                    <p className="text-gray-700 mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                        diam amet diam et eos. Clita erat ipsum et lorem et sit.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
                        lorem sit clita duo justo magna dolore erat amet.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {[
                            "First Class Flights",
                            "Handpicked Hotels",
                            "5 Star Accommodations",
                            "Latest Model Vehicles",
                            "150 Premium City Tours",
                            "24/7 Service",
                        ].map((item, index) => (
                            <p
                                key={index}
                                className="flex items-center text-gray-700 mb-0"
                            >
                                <i className="fa fa-arrow-right text-primary mr-2" />
                                {item}
                            </p>
                        ))}
                    </div>
                    <a
                        href="#"
                        className="btn bg-primary text-white py-3 px-5 mt-3"
                    >
                        Read More
                    </a>
                </div>
            </div>
        </div>
    )
}