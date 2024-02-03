import React from "react";

function Card({ username, btnText = "Click me", btnUrl, url, content }) {
  const handleClick = () => {
    // Navigate to the specified URL
    window.location.href = btnUrl;
  };

  return (
    <div className="relative h-[400px] w-[350px] rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
      <img
        src={url}
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">{content}</p>
        <button
          onClick={handleClick}
          className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white bg-blue-500 px-3 py-1 rounded-md hover:bg-blue-600"
        >
          {btnText} →
        </button>
      </div>
    </div>
  );
}

export default Card;
