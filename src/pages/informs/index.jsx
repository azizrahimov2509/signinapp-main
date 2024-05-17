import React from "react";
import { Link } from "react-router-dom";

export default function Informs() {
  return (
    <div className="container container-projects">
      <div className="projects">
        <h2>Here you can find a lot of project that was done by Rahimov A.</h2>
        <h3>Click these links on the right side to see projects</h3>
      </div>
      <div className="links">
        <p>
          {" "}
          This is todolist:{" "}
          <Link
            className="apps"
            to="https://7darstodolist.netlify.app"
            target="blank"
          >
            Todolist
          </Link>
        </p>
        <p>
          {" "}
          This is Unsplash images:{" "}
          <Link
            className="apps"
            to="https://unsplashphotosbyrahimov.netlify.app"
            target="blank"
          >
            Insplash images
          </Link>
        </p>

        <p>
          {" "}
          This is todocarr(find your favourite car):{" "}
          <Link
            className="apps"
            to="https://todocar8chidars.netlify.app"
            target="blank"
          >
            Todocar
          </Link>
        </p>
        <p>
          {" "}
          This is infoserver:{" "}
          <Link
            className="apps"
            to="https://infofromserver.netlify.app"
            target="blank"
          >
            Infos from sercer
          </Link>
        </p>
        <p>
          {" "}
          This is cocktails:{" "}
          <Link
            className="apps"
            to="https://coctailsrahimov.netlify.app"
            target="blank"
          >
            Coctails
          </Link>
        </p>
        <p>
          {" "}
          This is flags(you can find all info about flags all around the world):{" "}
          <Link
            className="apps"
            to="https://flagsbyrahimov.netlify.app"
            target="blank"
          >
            Flags
          </Link>
        </p>
      </div>
    </div>
  );
}
