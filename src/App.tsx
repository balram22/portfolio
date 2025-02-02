import React, { useEffect, useState } from "react";
import "./App.scss";
import ExperienceContainer from "./components/experience/experienceContainer";
import Experience from "./components/home/experience";
import Introduction from "./components/home/introduction";
import Projects from "./components/home/projects";
import ProjectContainer from "./components/projects/projectContainer";
import {
  AddCursor,
  cursorOnActionBtn,
  TileCursor,
} from "./service/eventListener";

function App() {
  const [close, _setClose] = useState<boolean>(false);
  const [curPage, _setCurPage] = useState<string>("home");

  useEffect(() => {
    AddCursor();
  }, []);

  useEffect(() => {
    TileCursor();
    cursorOnActionBtn();
  }, [curPage]);

  const chgPage = (val: boolean, page: string) => {
    _setClose(val);

    setTimeout(() => {
      _setCurPage(page);
    }, 1000);
  };

  return (
    <div className="App">
      <div className="cursor"></div>
      {curPage == "home" ? (
        <div className="tile-container">
          <Introduction close={close} />
          <Projects close={close} setClose={chgPage} />
          <Experience close={close} setClose={chgPage} />
        </div>
      ) : null}

      {curPage == "project" ? (
        <div className="tile-container">
          <ProjectContainer goBack={chgPage} />
        </div>
      ) : null}

      {curPage == "experience" ? (
        <div className="tile-container tile-container--experience">
          <ExperienceContainer goBack={chgPage}/>
        </div>
      ) : null}
    </div>
  );
}

export default App;
