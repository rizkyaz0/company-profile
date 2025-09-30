export default function About() {
    return (
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center text-black dark:text-white">Know Details About Our Company</h2>
        <div className="mt-12 grid md:grid-cols-2 gap-10 flex content-center items-center">
          <img src="/logo-black.png" alt="About" className="rounded-xl dark:bg-gray-100" />
          <div>
            <h3 className="text-xl font-bold mb-4 text-black dark:text-white">DB, Auth, Stripe, Sanity, and More</h3>
            <p className="text-gray-700 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum sapien ac leo cursus dignissim.
            </p>
          </div>
        </div>
      </section>
    );
  }
  