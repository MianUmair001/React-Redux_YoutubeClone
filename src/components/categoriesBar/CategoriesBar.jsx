import React, { useState } from "react";
import "./_categoriesBar.scss";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
const keywords = [
  "All",
  "React Js",
  "Angular JS",
  "React Native",
  "Use of API",
  "Redux",
  "Calming Music",
  "Algorithms",
  "Docker",
  "Node Js",
  "Expo Cli",
  "Google Maps API",
  "GatsBy",
  "Harry Potter",
  "Avatar the last airbender",
  "interesting Engineering",
  "Technology",
  "Marvel",
  "Coding",
  "Machine Learning",
  "AI",
];
const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");

  const dispatch = useDispatch();
  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, index) => (
        <span
          key={index}
          className={activeElement === value ? "active" : ""}
          onClick={() => handleClick(value)}
        >
          {value}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
