import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold" id="contact">Rahul Dohare</h1>
      <div className="flex space-x-6 mt-4">
        <a href="#" className="hover:text-blue-700">
          <FaLinkedin size={24} />
        </a>
        <a href="#" className="hover:text-red-700">
          <FaInstagram size={24} />
        </a>
        <a href="#" className="hover:text-blue-600">
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
}
