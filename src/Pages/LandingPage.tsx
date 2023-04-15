import React from "react";
import NavigationBar from "../NavigationBar";
import "../pagestyle.css"

function LandingPage() {
  return (
  <div>
    <NavigationBar />
    <div className="text">
      <h1>Animal Pictures and Facts Web App Home Page</h1>
      <p>Refresh each page or click the page button
        to display random facts and pictures about cats, dogs, and zoo animals!</p>
    </div>
  </div>
  );
}

export default LandingPage;

