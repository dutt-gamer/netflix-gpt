import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[18%] flex justify-center">
      <form className="w-full md:w-2/3 bg-black/70 rounded-md grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 text-lg bg-red-700 text-white rounded-md">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
