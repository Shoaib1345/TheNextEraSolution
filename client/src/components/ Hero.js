import React from "react";

export default function Hero() {
  return (
    <section className="text-center p-20 bg-gradient-to-r from-blue-900 to-green-500 text-white">
      <h2 className="text-4xl md:text-6xl font-bold mb-4">
        Next-Level Tech Solutions for Your Business
      </h2>
      <p className="mb-8">Professional, Secure, and Trusted Services</p>
      <div>
        <button className="bg-green-400 px-6 py-3 rounded mr-4">Get a Free Quote</button>
        <button className="bg-white text-blue-900 px-6 py-3 rounded">See Our Services</button>
      </div>
    </section>
  );
}
