import React, { useEffect, useRef, useState } from "react";
import ProjectTile from "./projectTile";
import NatoursLogo from "../../assets/logo-green-small-2x.png";
import Natours from "../../assets/natours.jpg";
import NexterLogo from "../../assets/logo.png";
import Nexter from "../../assets/nexter.jpg";
import TrillioLogo from "../../assets/trillio.png";
import Trillio from "../../assets/trillio.jpg";
import { CursorOnBackBtn, removeCursor } from "../../service/eventListener";
import { get_average_rgb } from "../../service/getImageAvgColor";

const ProjectContainer = (props: any) => {
  const [close, _setClose] = useState<boolean>(false);
  const animationDelay = 0.15;

  useEffect(() => {
    CursorOnBackBtn();
    setAvgColor();
  }, []);

  const projects = [
    {
      logo: NexterLogo,
      screen: Nexter,
      description:
        "Nexter is a luxury real estate company that provides high-end properties in the most sought after locations. They have been providing this service for several years now and they are still one of the best companies to work with when it comes to finding an apartment or house",
        link: "nexter/index.html",
      },
    {
      logo: NatoursLogo,
      screen: Natours,
      description:
        "Natours is adventure booking site.  It is a very popular site for people who want to go on an adventure trip and plan it out with their friends or family members. The website helps you to find the best places in the world where you can go on adventures and enjoy yourself while doing so.",
      link: "natours/index.html",
    },
    {
      logo: TrillioLogo,
      screen: Trillio,
      description:
        "Trillio is a hotel booking site that helps you find and book the best hotels in your destination. We offer a wide range of accommodation options, from budget to luxury, across Europe. Our goal is to make it easier for you to book the perfect hotel at any given time.",
      link: "trillio/index.html",
    },
  ];

  const goBack = () => {
    _setClose(true);
    removeCursor(false);
    props.goBack(false, "home");
  };

  const setAvgColor = async () => {
    for (let i = 0; i < projects.length; i++) {
      var img = document.getElementById("projectLogo" + i) as HTMLImageElement;
      if (img) {
        var color = await get_average_rgb(img.src);
        console.log("color is = " + color);
      }
    }
  };

  const renderProjectTile = () => {
    const projectTiles = [];
    for (let i = 0; i < projects.length; i++) {
      projectTiles.push(
        <ProjectTile
          key={i}
          id={i}
          close={close}
          goBack={goBack}
          project={projects[i]}
          animationDelay={animationDelay * i}
        />
      );
    }
    return projectTiles;
  };

  return <>{renderProjectTile()}</>;
};

export default ProjectContainer;
