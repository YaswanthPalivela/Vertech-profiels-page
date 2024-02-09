import React from "react";
import bookmark from "../src/assets/icons8-bookmark-720.png";
import profile from "../src/assets/icons8-customer-100.png";
import {
  managementTeam,
  developmentTeam,
  salesMarketing,
} from "../src/assets/data.js";
import "./App.css";

const App = () => {
  return (
    <div className="Container">
      <div className="bookmark-image-container1">
        <img src={bookmark} className="Bookmark-image" />
      </div>
      <div className="head-container">
        <h1 className="Heading">KRYS Technologies</h1>
      </div>
      <div className="paragraph-container">
        <p className="company-para-breif">
          Welcome to KRYS Technologies, Where a dedicated team of Working
          together to bring innovation and creativity.Get to know the
          individuals who make our company Thrive.
        </p>
      </div>
      <div class="dotted-line"></div>

      <strong>
        <h2 className="teamheading">Meet Our Team</h2>
      </strong>
      <h2 className="management">Leadership/Management Team</h2>

      <div className="leadership-Container">
        {managementTeam.map((user) => (
          <div className="managemnet-profile-container">
            <img src={profile} className="image" />
            <h5 key={user.id} className="profile-container-name">
              {user.name}
            </h5>
            <p key={user.id} className="profile-container-position">
              {user.position}
            </p>
          </div>
        ))}
      </div>

      <h2 className="management">Developement Team</h2>

      <div className="development-team-Container">
        {developmentTeam.map((developer) => (
          <div className="managemnet-profile-container">
            <img src={profile} className="image" />
            <h5 key={developer.id} className="profile-container-name">
              {developer.name}
            </h5>
            <p key={developer.id} className="profile-container-position">
              {developer.profession}
            </p>
          </div>
        ))}
      </div>

      <div className="marketing-heading-container">
        <h2 className="management">Sales And Marketing Team</h2>
        <img src={bookmark} className="Bookmark-image" />
      </div>

      <div className="Marketing-team-Container">
        {salesMarketing.map((person) => (
          <div className="managemnet-profile-container">
            <img src={profile} className="image" />
            <h5 key={person.id} className="profile-container-name">
              {person.name}
            </h5>
            <p key={person.id} className="profile-container-position">
              {person.profession}
            </p>
          </div>
        ))}
      </div>

      <img src={bookmark} className="reverse-Bookmark-image" />
    </div>
  );
};

export default App;
