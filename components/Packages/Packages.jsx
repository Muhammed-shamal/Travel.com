import Image from "next/image";
import { packages } from "./data";

export default function Packages() {

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h6 className="text-primary inline-block bg-white px-3 py-1 uppercase font-medium tracking-wider">
                        Packages
                    </h6>
                    <h1 className="text-3xl font-bold mt-4">Awesome Packages</h1>
                </div>
                <div className="flex flex-wrap justify-center -mx-4">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
                            style={{ animationDelay: pkg.delay }}
                        >
                            <div className="rounded-lg shadow-lg overflow-hidden bg-white">
                                {/* Package Image */}
                                <div className="relative">
                                    <Image
                                        src={pkg.imgSrc}
                                        alt={pkg.location}
                                        width={400}
                                        height={250}
                                        className="w-full h-auto"
                                    />
                                </div>
                                {/* Details */}
                                <div className="border-b flex">
                                    <small className="flex-1 text-center py-2 border-r">
                                        <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                                        {pkg.location}
                                    </small>
                                    <small className="flex-1 text-center py-2 border-r">
                                        <i className="fa fa-calendar-alt text-primary mr-2"></i>
                                        {pkg.days}
                                    </small>
                                    <small className="flex-1 text-center py-2">
                                        <i className="fa fa-user text-primary mr-2"></i>
                                        {pkg.persons}
                                    </small>
                                </div>
                                <div className="p-6 text-center">
                                    <h3 className="text-2xl font-bold text-gray-800">{pkg.price}</h3>
                                    <div className="flex justify-center mb-3 text-yellow-500">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <p className="text-gray-600 mb-6">{pkg.description}</p>
                                    <div className="flex justify-center">
                                        <a
                                            href="#"
                                            className="bg-primary text-white px-5 py-2 text-sm rounded-l-full border-r-2 border-white"
                                        >
                                            Read More
                                        </a>
                                        <a
                                            href="#"
                                            className="bg-primary text-white px-5 py-2 text-sm rounded-r-full"
                                        >
                                            Book Now
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
