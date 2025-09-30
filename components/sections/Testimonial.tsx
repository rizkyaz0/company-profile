export default function Testimonial() {
    return (
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-black dark:text-white">What Our Clients Say About Us</h2>
        <div className="mt-12 flex flex-col md:flex-row gap-10 items-center justify-center">
          <img src="/client.jpg" alt="Client" className="w-40 h-40 rounded-full" />
          <blockquote className="max-w-xl text-gray-700 dark:text-gray-300 italic">
            “Lorem ipsum dolor sit amet consectetur adipiscing elit. Lorem ipsum dolor sit amet.”
          </blockquote>
        </div>
        <p className="mt-4 text-gray-700 dark:text-gray-300">— Musharof Chy, Founder @ Pinjro</p>
      </section>
    );
  }
  