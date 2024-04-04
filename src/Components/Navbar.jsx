import { Link } from "react-router-dom";

import SearchIcon from "../assets/search 1.svg";
import line1 from "../assets/Line 2.svg";
import line2 from "../assets/Line 3.svg";

const Navbar = () => {
  return (
    <>
      <header className=" w-[99%] font-thin mx-auto flex justify-around p-5">
        <section className="website-title">
          <h1 className="font-bold">
            Travel<span className="text-orange-400">Toor</span>
          </h1>
        </section>
        <section className="navbar">
          <nav>
            <ul className="flex space-x-10 ">
              <li className="hover:underline hover:text-orange-300 hover:opacity-95 hover:font-light">
                <Link to="home">Home</Link>
              </li>
              <li className="hover:underline hover:text-orange-300 hover:opacity-95 hover:font-light">
                <Link to="about">About</Link>
              </li>
              <li className="hover:underline hover:text-orange-300 hover:opacity-95 hover:font-light">
                <Link to="packages">Packages</Link>
              </li>
              <li className="hover:underline hover:text-orange-300 hover:opacity-95 hover:font-light">
                <Link to="contact">Contact</Link>
              </li>
              <li>
                <img src={SearchIcon} alt="search-icon" />
              </li>
            </ul>
          </nav>
        </section>
        <section className="habmurger-menu">
          <img className="mb-1" src={line1} alt="hamburger-menu" />
          <img className="ml-auto" src={line2} alt="hamburger-menu" />
        </section>
      </header>
    </>
  );
};

export default Navbar;
