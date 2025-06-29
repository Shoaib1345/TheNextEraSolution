import React from "react";

const services = [
  { title: "Website Development", description: "Modern responsive websites." },
  { title: "App Development", description: "Custom mobile and web apps." },
  { title: "Cloud Solutions", description: "Secure cloud hosting & backups." },
  { title: "IT Support", description: "24/7 technical support." },
  { title: "Digital Marketing", description: "Grow your online presence." },
];

export default function Services() {
  return (
    <section id="services" className="p-10">
      <h3 className="text-3xl mb-8 text-center font-bold">Our Services</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border p-6 rounded shadow hover:shadow-lg">
            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
            <p className="mb-4">{service.description}</p>
            <button className="bg-blue-900 text-white px-4 py-2 rounded">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
