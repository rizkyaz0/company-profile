const brands = ["uldeck", "tailadmin", "graygrids", "lineicons", "plainadmin"];

export default function Brands() {
  return (
    <section className="container mx-auto px-6 py-20 text-center">
      <h2 className="text-2xl font-bold text-black dark:text-white">Trusted by Global Brands</h2>
      <div className="flex flex-wrap justify-center items-center gap-10 mt-8 opacity-70">
        {brands.map((brand, i) => (
          <span key={i} className="text-gray-700 dark:text-gray-400 text-lg">{brand}</span>
        ))}
      </div>
    </section>
  );
}
