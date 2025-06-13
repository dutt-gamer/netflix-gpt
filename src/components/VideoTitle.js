import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black pt-[20%] px-16 absolute">
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="py-3 text-sm w-1/3 font-normal text-white">{overview}</p>
      <div className="">
        <button className="p-3 px-12 bg-white rounded-md text-xl hover:bg-gray-400 font-medium transition-colors">
          ⯈ Play
        </button>
        <button className="mx-2 p-3 px-8 bg-gray-500 rounded-md text-xl font-medium text-white bg-opacity-50 hover:bg-opacity-20 transition-colors">
          🛈 More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
