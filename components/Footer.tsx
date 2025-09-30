export default function Footer() {
    return (
      <footer
        className="
          p-4 text-center 
          border-t 
          bg-white text-black border-gray-300
          dark:bg-black dark:text-white dark:border-white/20
          transition-colors
        "
      >
        © {new Date().getFullYear()} GoThru.co. All rights reserved.
      </footer>
    );
  }
  