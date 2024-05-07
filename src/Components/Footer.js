import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white py-10 h-80">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="sm:w-1/2 lg:w-1/4 mb-8">
          <img src="./Assets/av-high.png" alt="logo" className="w-24 mb-4" />
          <p className="text-sm">
            Dedicated to giving the best experience tailored just for you.
            <br />
            We are here to make your experience better. <br />
            Join our AnimeVerse+ community to get the latest updates.
          </p>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
          <h3 className="text-lg font-bold mb-4">
            Office
            <div className="underline w-6 bg-white mt-1"></div>
          </h3>
          <p>Nairobi, Kenya</p>
          <p>UpperHill, PIN 25773, Kenya</p>
          <p className="email-id">animeverse@outlook.com</p>
          <h4>+254 -6789998212</h4>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
          <h3 className="text-lg font-bold mb-4">
            Links
            <div className="underline w-6 bg-white mt-1"></div>
          </h3>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 mb-8">
          <h3 className="text-lg font-bold mb-4">
            Membership
            <div className="underline w-6 bg-white mt-1"></div>
          </h3>
          <form className="mb-6">
            <input
              type="email"
              placeholder="Enter your email Id"
              required
              className="w-full bg-transparent border-b border-gray-400 py-1 mb-2"
            />
            <button type="submit" className="focus:outline-none">
              <i className="fas fa-arrow-right"></i>
            </button>
          </form>
          <div className="flex gap-4 ">
            <FaFacebookSquare className="flex-none h-10 hover:mr-6 transition duration-300 ease-in-out" />
            <FaXTwitter className="flex-none h-10 hover:mr-6 transition duration-300 ease-in-out" />
            <FaInstagram className="flex-none h-10 hover:mr-6 transition duration-300 ease-in-out" />
            <FaPinterest className="flex-none h-10 hover:mr-6 transition duration-300 ease-in-out" />
          </div>
        </div>
      </div>
      <hr className="border-gray-600 mt-10" />
      <p className="text-sm text-center mt-4">
        <i className="fas fa-copyright"></i> Copyright 2024 - AnimeVerse
      </p>
    </footer>
  );
};

export default Footer;
