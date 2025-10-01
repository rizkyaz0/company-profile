import Image from "next/image";

export default function About() {
  return (
    <section className="container mx-auto max-w-7xl px-6 py-20">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-primary font-medium tracking-wide uppercase">
          About Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Know Details About Our Company
        </h2>
        <p className="mt-4 text-muted-foreground">
          We provide full-stack solutions with modern technologies, ensuring your business
          is always ahead in innovation and performance.
        </p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="flex justify-center">
          <Image
            src="/logo-black.png"
            alt="About"
            className="rounded-xl bg-muted p-6 shadow-lg dark:bg-white"
          />
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">
            DB, Auth, Stripe, Sanity, and More
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Fusce condimentum sapien ac leo cursus dignissim. 
            Nulla facilisi. Quisque euismod, urna eu tincidunt 
            consectetur, nisl nunc aliquam eros, ac porttitor 
            elit neque ut leo.
          </p>

          {/* Features list */}
          <ul className="grid grid-cols-2 gap-4 text-muted-foreground">
            <li className="flex items-center gap-2">
              ✅ Authentication
            </li>
            <li className="flex items-center gap-2">
              ✅ Payment Gateway
            </li>
            <li className="flex items-center gap-2">
              ✅ Database Integration
            </li>
            <li className="flex items-center gap-2">
              ✅ CMS Support
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
