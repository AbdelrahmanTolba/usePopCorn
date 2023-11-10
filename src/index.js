import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RatingStars from "./RatingStars";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RatingStars
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    />
    <RatingStars size={24} color="red" defaultRating={3} /> */}
    <App />
  </React.StrictMode>
);
