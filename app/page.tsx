import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-[family-name:var(--font-geist-sans)]">
      <header className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">JD Insights</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to JD Insights</h2>
          <p className="text-xl text-gray-600">Empowering businesses with data-driven solutions</p>
        </section>

        <section className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Advanced Analytics</h3>
            <p className="text-gray-600">Unlock the power of your data with our cutting-edge analytics tools.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Expert Consultation</h3>
            <p className="text-gray-600">Our team of experts is ready to guide you through your data journey.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
            <p className="text-gray-600">Tailored insights and strategies to meet your unique business needs.</p>
          </div>
        </section>

        <section className="mt-12 text-center">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </a>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 JD Insights. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
