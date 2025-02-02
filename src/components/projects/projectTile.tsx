import React, { useEffect, useRef, useState } from "react";
import {NewTab} from "../../assets/svgComponents";
import GoBack from "../../assets/svg/arrBack.svg";
import { ArrBack } from "../../assets/svgComponents";
// import { ColorExtractor } from "react-color-extractor";
import { CursorOnLink, TileCursorColor } from "../../service/eventListener";

interface ProjectTileProps {
  goBack: any;
  project: any;
  animationDelay: number;
  close: boolean;
  id: number;
}
const ProjectTile = (props: ProjectTileProps) => {
  const [color, _setColor] = useState<string>('');
  const close2 = useRef<boolean>(false);

  useEffect(() => {
    listenAnimationEnd();
  }, [])

  useEffect(() => {
    close2.current = props.close;
  }, [props.close])

  const getImgColor = (color: any) => {
    _setColor(color[0]);
    AddCursorColor(color[0]);
    
  CursorOnLink(props.id, color[0]);
  }

  const listenAnimationEnd = () => {
    var elem = document.getElementById("projectTile" + props.id);
    elem?.addEventListener('animationend', () => {
        if(elem != undefined){
            elem.style.opacity = !close2.current ? '1' : '0';
        }
    });
}

const AddCursorColor = (color: any) => {
  var tile = document.querySelector('#projectTile' + props.id);

      if(tile)
          TileCursorColor(color, tile);
}

const goBack = () => {
  props.goBack();
}

const openProject = () => {
  window.open(props.project.link);
}

  return (
    <>
      <div
        id={"projectTile" + props.id}
        className={
          !props.close
            ? "tile project-tile"
            : "tile project-tile project-tile--fade-out"
        }
        style={{ animationDelay: props.animationDelay + "s" }}
      >
        <button className="back-btn-hidden" onClick={goBack}>
        <ArrBack fill={color}/>
        </button>
        {/* <ColorExtractor getColors={getImgColor}> */}
        <img id={"projectLogo" + props.id}
          src={props.project.logo}
          alt="Natours Logo"
          className="project-tile__logo"
        />
        {/* </ColorExtractor> */}

        <img
          src={props.project.screen}
          alt="Natours screen"
          className="project-tile__screen"
        />
        <div className="project-tile__link">
          <p>Sample</p>
          <div onClick={openProject}><NewTab/></div>
        </div>
        <p className="details">
          <span style={{ fontWeight: "bold" }}>
            {props.project.description.substring(
              0,
              props.project.description.indexOf(" ")
            )}
          </span>
          <span>
            {props.project.description.substring(
              props.project.description.indexOf(" ")
            )}
          </span>
        </p>
      </div>
    </>
  );
};

export default ProjectTile;
