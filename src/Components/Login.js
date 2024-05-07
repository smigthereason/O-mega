import React from 'react';
import Navbar from './Navbar';
import VideoBackground from "../Assets/4k_Mystery.mp4";

// import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <>
    <Navbar />
    <section className="video-section">
        <video src={VideoBackground} autoPlay loop muted className="video-background" />
    <div className="flex items-center justify-center bg-cover h-screen bg-[url('/src/Assets/Miles .jpeg')]">
      <div className="w-11/12 md:w-2/3 lg:w-1/2 xl:w-1/3 backdrop-blur-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl text-center font-bold mb-6">Log In</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Your Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Your Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
      </div>
      </section>
    </>
  );
};

export default Login;