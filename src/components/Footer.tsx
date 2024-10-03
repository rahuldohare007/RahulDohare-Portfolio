// import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <div className="px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center"  id="contact">
//       <h1 className="text-2xl font-bold">Rahul Dohare</h1>
//       <h2 className="text-xl text-gray-500 mt-2">© 2019 - 2024 Cyborgcoding. All Right Reserved.</h2>
//       <div className="flex space-x-6 mt-2">
//         <a href="https://www.linkedin.com/in/rahul-dohare-0a5a1619a/" className="hover:text-blue-700">
//           <FaLinkedin size={24} />
//         </a>
//         <a href="#" className="hover:text-red-700">
//           <FaInstagram size={24} />
//         </a>
//         <a href="https://www.x.com/rahuldoharepoet" className="hover:text-blue-600">
//           <FaTwitter size={24} />
//         </a>
//       </div>
//     </div>
//   );
// }





import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="px-6 md:px-10 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
      id="contact"
    >
      <h1 className="text-2xl font-bold">Rahul Dohare</h1>

      <h2 className="text-center md:text-left text-base md:text-xl text-gray-500 mt-2">
        © 2019 - 2024 Cyborgcoding. All Rights Reserved.
      </h2>

      <div className="flex space-x-6 mt-2">
        <a
          href="https://www.linkedin.com/in/rahul-dohare-0a5a1619a/"
          className="hover:text-blue-700"
        >
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/cyborgcoding" className="hover:text-red-700">
          <FaInstagram size={24} />
        </a>
        <a href="https://www.x.com/rahuldoharepoet" className="hover:text-blue-600">
          <FaTwitter size={24} />
        </a>
      </div>
    </div>
  );
}
