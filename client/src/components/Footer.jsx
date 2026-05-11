export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 relative z-10 bg-[#0a0a0a]/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-500 text-sm font-medium mb-4 md:mb-0">
          © {new Date().getFullYear()} Shivaay. Engineered for the digital frontier.
        </p>
        <div className="flex space-x-6 text-sm font-medium text-gray-500">
          <a href="#contact" className="hover:text-white transition-colors">Connect</a>
          <a href="https://github.com/15-Shivaay" className="hover:text-white transition-colors">Source</a>
          <a href="mailto:shivamumeshsingh99@gmail.com" className="hover:text-white transition-colors">Inquiry</a>
        </div>
      </div>
    </footer>
  );
}
