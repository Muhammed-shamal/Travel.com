import { contacts } from "@/constant/contact";
import React from "react";

const Contact = () => {
    

    return (
        <div className="pt-36 pb-20">
            <section className="py-12">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="flex flex-col md:flex-row md:space-x-16">
                        {/* Left Section */}
                        <div className="md:w-1/3">
                            <h2 className="text-3xl font-bold text-gray-800">Get in touch</h2>
                            <p className="mt-4 text-gray-600">
                                Quam nunc nunc eu sed. Sed rhoncus quis ultricies ac pellentesque.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="mt-8 grid w-full gap-6 sm:grid-cols-2 md:mt-0">
                            {contacts.map((contact, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg bg-gray-100 p-6 shadow-sm transition-transform hover:scale-105"
                                >
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {contact.title}
                                    </h3>
                                    <p className="mt-2 text-blue-500">
                                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                                    </p>
                                    <p className="mt-1 text-gray-600">{contact.phone}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
