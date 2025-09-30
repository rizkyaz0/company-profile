import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-background text-foreground transition-colors">
      <div className="container mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand / Logo */}
        <div>
          <h2 className="text-xl font-bold">GoThru.co</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Building modern web experiences with Next.js & Tailwind.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Links</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#about" className="hover:text-foreground transition">About</a></li>
            <li><a href="#features" className="hover:text-foreground transition">Features</a></li>
            <li><a href="#portfolio" className="hover:text-foreground transition">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-foreground transition">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-foreground transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Github" className="hover:text-foreground transition">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} GoThru.co. All rights reserved.
      </div>
    </footer>
  );
}
