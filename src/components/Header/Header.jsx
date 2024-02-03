import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close the mobile menu when the window resizes to a larger size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 shadow z-50">
      <nav className="bg-dark border-gray-900 px-4 lg:px-6 py-1.5 text-white">
        <div className="flex flex-wrap justify-between items-center mx-1 max-w-screen-xl">
         

          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </button>
          </div>

          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:flex justify-between items-center w-full lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul
              className={`${
                isMobileMenuOpen ? "flex-col" : "flex-row"
              } lg:space-x-5 lg:mt-0 flex mt-4 font-medium`}
            >
              <li>
              <Link to="/" className="flex items-center">
            <img
              src="src/components/Header/logo.jpeg"
              className="h-12 mr-10"
              alt="Logo"
            />
          </Link>
              </li>
              <li>

              </li>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-light"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
              Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/medicine-recommendation"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Medicine-Recommendation
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="http://127.0.0.1:8000/#"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  DiseasePredictor
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="http://127.0.0.1:8000/mental/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  MentalHealthAssessment
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="http://127.0.0.1:8000/skin"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  SkinDiseasePredictor
                </NavLink>
              </li>
              <li style={{width:'100px'}}>
                <NavLink
                  to="http://127.0.0.1:8000/xray"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-light"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
              Pneumonia-Xray
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="http://127.0.0.1:8000/chatbot/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-white"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  MedicalChatbot
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}