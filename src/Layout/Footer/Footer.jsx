import tesla1 from '../../assets/image/Tesla_logo.png'
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <img src={tesla1}alt="AI Project Logo" className="h-12 mb-4" />
            <p className="text-gray-400 text-sm">
              Empowering innovation with cutting-edge AI solutions. 
              We bring intelligence to every aspect of your work.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Home</a></li>
              <li><a href="/about" className="hover:text-blue-400">About</a></li>
              <li><a href="/services" className="hover:text-blue-400">Services</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
              <li><a href="/faq" className="hover:text-blue-400">FAQs</a></li>
              <li><a href="/privacy" className="hover:text-blue-400">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-blue-400">Terms of Service</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.2c0 5.5-4.5 10-10 10s-10-4.5-10-10 4.5-10 10-10 10 4.5 10 10zM9.5 17.5v-7l5 3.5-5 3.5z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.27 4.27 0 0 0 1.87-2.35 8.51 8.51 0 0 1-2.71 1.03A4.25 4.25 0 0 0 16 4c-2.35 0-4.25 1.9-4.25 4.25 0 .33.04.65.1.95A12.04 12.04 0 0 1 2.87 5.11a4.25 4.25 0 0 0 1.32 5.66 4.24 4.24 0 0 1-1.93-.53v.05a4.26 4.26 0 0 0 3.42 4.17 4.24 4.24 0 0 1-1.92.07 4.25 4.25 0 0 0 3.97 2.95A8.51 8.51 0 0 1 2 19.14a12.04 12.04 0 0 0 6.52 1.91c7.84 0 12.12-6.5 12.12-12.12 0-.18 0-.36-.01-.54A8.54 8.54 0 0 0 22.46 6z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c-5.4 0-9.8 4.4-9.8 9.8 0 4.6 3.1 8.4 7.3 9.6.5.1.7-.2.7-.5v-1.9c-2.9.6-3.6-1.3-3.6-1.3-.5-1.2-1.2-1.5-1.2-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.6 2.4 1.1 3 .8.1-.6.4-1.1.6-1.4-2.3-.3-4.6-1.2-4.6-5.1 0-1.1.4-2 1-2.8-.1-.2-.4-1.1.1-2.2 0 0 .8-.3 2.7 1 .7-.2 1.4-.3 2.1-.3.7 0 1.4.1 2.1.3 1.9-1.3 2.7-1 2.7-1 .5 1.1.2 2 .1 2.2.6.8 1 1.7 1 2.8 0 3.9-2.3 4.8-4.6 5.1.4.3.7.9.7 1.7v2.5c0 .3.2.6.7.5 4.2-1.2 7.3-5 7.3-9.6 0-5.4-4.4-9.8-9.8-9.8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center text-sm text-gray-400">
            © 2025 AI Project. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;