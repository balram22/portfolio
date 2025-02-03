import React, { useEffect, useRef, useState } from "react";
import bentleySystems from "../../assets/Bentley-systems-green.svg";
import css from "../../assets/cssLogo.png";
import react from "../../assets/reactLogo.png";
import typescript from "../../assets/typescriptLogo.png";
import netCore from "../../assets/svg/netCoreLogo.svg";
import blazor from "../../assets/blazorLogo.png";
import python from '../../assets/icons-python.svg';
import sql from "../../assets/sqlLogo.png";
import snp from "../../assets/snp.svg";
import { AnimatePresence, motion } from "motion/react";
import { ArrBack } from "../../assets/svgComponents";
import { CursorOnBackBtn, hideCursor, removeCursor, TileCursorColor } from "../../service/eventListener";
import Ratings from "../shared/ratings";
import { delay } from "motion";

const ExperienceContainer = (props) => {
  const [close, _setClose] = useState(false);
  const [showBentleySummary, setShowBentleySummary] = useState(false);
  const [showSnpSummary, setShowSnpSummary] = useState(true);
  const close2 = useRef(false);

  var exp = undefined;
  var skill = undefined;

  useEffect(() => {
    exp = document.getElementById("expTile");
    skill = document.getElementById("skillTile");
    listenAnimationEnd();
    CursorOnBackBtn();
    AddCursorColor();

    return () => {
      removeListenAnimationEnd();
    }
  }, []);

  const handleSummary = (tab) => {
    if (tab == 'snp'){
      if (!showSnpSummary)
        setShowBentleySummary(false);
      setShowSnpSummary(prevState => !prevState);
    }
    else{
      if (!showBentleySummary)
        setShowSnpSummary(false);
      setShowBentleySummary(prevState => !prevState);
    }
  }

  const goBack = () => {
    _setClose(true);
    close2.current = true;
    removeCursor(false);
    props.goBack(false, "home");
  };

  const listenAnimationEnd = () => {
    exp?.addEventListener("animationend", hideExpTileOpacity);
    skill?.addEventListener("animationend", hideSkillTileOpacity);
  };

  const removeListenAnimationEnd = () => {
    exp?.removeEventListener("animationend", hideExpTileOpacity);
    skill?.removeEventListener("animationend", hideSkillTileOpacity);
  };

  const hideSkillTileOpacity = () => {
    if (skill != undefined) {
      skill.style.opacity = !close2.current ? "1" : "0";
    }
  }

  const hideExpTileOpacity = () => {
    if (exp != undefined) {
      exp.style.opacity = !close2.current ? "1" : "0";
    }
  }

  const AddCursorColor = () => {

    var root = document.querySelector(':root');
    var tile = document.querySelector('#skillTile');
    if (root) {
      var color = getComputedStyle(root).getPropertyValue('--pink-dark');
      if (tile)
        TileCursorColor(color, tile);
    }

    tile = document.querySelector('#expTile');
    if (root) {
      var color = getComputedStyle(root).getPropertyValue('--green-dark-1');
      if (tile)
        TileCursorColor(color, tile);
    }
  }

  return (
    <>
      <div
        id="skillTile"
        className={
          !close ? "tile skill-tile" : "tile skill-tile skill-tile--fade-out"
        }
      >
        <button className="back-btn-hidden" onClick={goBack}>
          <ArrBack className="back-btn-hidden--dark-pink" />
        </button>
        <h3 className="h3 h3--pink-dark">Skills</h3>
        <div className="skill__body">
          <div className="skill__section">
            <p className="skill__section--title">Frontend</p>
            <div className="skill__item">
              <img src={css} alt="CSS" className="skill__logo" title="CSS" />
              <Ratings rate={10} />
            </div>
            <div className="skill__item">
              <img
                src={react}
                alt="React"
                className="skill__logo"
                title="React"
              />
              <Ratings rate={9} />
            </div>
            <div className="skill__item">
              <img
                src={typescript}
                alt="Typescript"
                className="skill__logo"
                title="Typescript"
              />
              <Ratings rate={9} />
            </div>
            <div className="skill__item">
              <img
                src={blazor}
                alt="Blazor"
                className="skill__logo"
                title="Blazor"
              />
              <Ratings rate={8} />
            </div>
          </div>
          <div className="skill__section">
            <p className="skill__section--title">Backend</p>
            <div className="skill__item">
              <img
                src={python}
                alt="Python"
                className="skill__logo"
                title="Python"
              />
              <Ratings rate={7} />
            </div>
            <div className="skill__item">
              <img
                src={netCore}
                alt=".NETCore"
                className="skill__logo"
                title=".NET Core"
              />
              <Ratings rate={7} />
            </div>
          </div>
          <div className="skill__section">
            <p className="skill__section--title">Database</p>
            <div className="skill__item">
              <img src={sql} alt="SQL" className="skill__logo" title="SQL" />
              <Ratings rate={6} />
            </div>
          </div>

        </div>
      </div>
      <div
        id="expTile"
        className={
          !close
            ? "tile tile--experience experience-tile"
            : "tile tile--experience experience-tile experience-tile--fade-out"
        }
      >
        <button className="back-btn-hidden" onClick={goBack}>
          <ArrBack className="back-btn-hidden--green" />
        </button>
        <h3 className="h3 h3--green-dark-2">Experience</h3>
        <div className="experience__body">
          <div style={{ marginBottom: '2rem' }}>
            <motion.div
              animate={{
                borderBottomLeftRadius: !showSnpSummary ? '4rem' : 0,
                borderBottomRightRadius: !showSnpSummary ? '4rem' : 0,
                transition: {
                  borderBottomLeftRadius: {
                    delay: 0.1,
                    duration: showSnpSummary ? 0.2 : 1
                  },
                  borderBottomRightRadius: {
                    delay: 0.1,
                    duration: showSnpSummary ? 0.2 : 1
                  }
                }
              }}
              className="experience__header"
              onClick={() => handleSummary('snp')}
              onHoverStart={() => hideCursor(true)}
              onHoverEnd={() => hideCursor(false)}>
              <img
                className="experience__company-logo"
                src={snp}
                alt="S&P Global"
                title="S&P Global"
              />
              <p className="details experience__details">
                <b>Full Stack Developer</b> | Dec 2022 - Present
              </p>
            </motion.div>
            <AnimatePresence>
              {showSnpSummary && <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{
                  height: 0, transition: {
                    height: {
                      delay: 0.1
                    }
                  }
                }}
                className="experience__summary__container">
                <motion.ul
                  initial={{ translateY: -10, opacity: 0 }}
                  animate={{
                    translateY: 0, opacity: 1,
                    transition: {
                      opacity: { delay: 0.15 },
                      translateY: { ease: 'easeIn', duration: 0.1 }
                    }
                  }}
                  exit={{ opacity: 0 }}
                  className="details experience__summary">
                  <h4>CIQXL</h4>
                  <li>
                    Developed a microservice using Fast API to allow Capital IQ Excel Addin team to access more
                    granular data of tickers from Visible Alpha database. This will increase the supported lines by
                    200% for 2000+ tickers.
                  </li>
                  <h4>EXCEL ADDIN</h4>
                  <li>
                    Enhanced the performance of the Datapoints API by 70% by caching frequent calls, improve data
                    fetcher logic, using multithreading, enabling the Excel Addin to load over 1 million
                    datapoints in a second.
                  </li>
                  <li>
                    Eliminated multiple installer dependencies by moving the configuration and core logic to API side,
                    make the installer self-heal from expected errors, thereby accelerating the rollout of new features
                    and bug fixes by 2x, without requiring users to update the installer.
                  </li>
                  <li>
                    Designed and developed Metapoints API using Factory design pattern. For developers,
                    this design structure will make addition feature add faster and make maintenance easier.
                  </li>
                </motion.ul>
              </motion.div>}
            </AnimatePresence>
          </div>

          <div>
            <motion.div
              animate={{
                borderBottomLeftRadius: !showBentleySummary ? '4rem' : 0,
                borderBottomRightRadius: !showBentleySummary ? '4rem' : 0,
                transition: {
                  borderBottomLeftRadius: {
                    delay: 0.1,
                    duration: showBentleySummary ? 0.2 : 1
                  },
                  borderBottomRightRadius: {
                    delay: 0.1,
                    duration: showBentleySummary ? 0.2 : 1
                  }
                }
              }}
              className="experience__header" onClick={handleSummary}
              onHoverStart={() => hideCursor(true)}
              onHoverEnd={() => hideCursor(false)}>
              <img
                className="experience__company-logo"
                src={bentleySystems}
                alt="Bentley Systems"
                title="Bentley Systems"
              />
              <p className="details experience__details">
                <b>Frontend Developer</b> | April 2018 - Nov 2022
              </p>
            </motion.div>
            <AnimatePresence>
              {showBentleySummary && <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{
                  height: 0, transition: {
                    height: {
                      delay: 0.1,
                      ease: 'easeInOut'
                    }
                  }
                }}
                className="experience__summary__container">
                <motion.ul initial={{ translateY: -10, opacity: 0 }}
                  animate={{
                    translateY: 0, opacity: 1,
                    transition: {
                      opacity: { delay: 0.15 },
                      translateY: { ease: 'easeIn', duration: 0.1 }
                    }
                  }}
                  exit={{ opacity: 0 }} className="details experience__summary">
                    <h4>JOB SCHEDULER</h4>
                  <li>
                  Led the development of a versatile Job Scheduler Client Application, which increased
                  revenue by 10% across 5 internal projects and attracted 3 new enterprise clients.
                  </li>
                  <h4>FILE COMPARISON TOOL</h4>
                  <li>
                  Enhanced performance of Document/File comparison tool by 80% by developing a better
                  algorithm to compare text and virtual scrolling.
                  </li>
                  <h4>ASSET MANAGEMENT</h4>
                  <li>
                  Reduced the time to save large-size Assets in the application by 70% by automating the
                  Asset creation and executing process
                  </li>
                  <h4>ROADS AND RAILS MANAGEMENT</h4>
                  <li>Integrated Map based application with third-party products by developing backend-engine
                  to import and export different GIS format files.
                  </li>
                  <li>
                  Enhanced Map interaction by contributing to building logic to draw and manipulate vectors
                  on Open Layers map.
                  </li>
                  <li>
                  Enhanced application security by migrating from .NET Framework to .NET Core and
                  integrating OIDC authentication
                  </li>
                  <h4>ASSET MANAGEMENT MOBILE APP</h4>
                  <li>
                  Streamlined asset management by creating a mobile application (for Android and iOS) for
                  asset creation and maintenance.
                  </li>
                  <li>Enhanced data monitoring efficiency by developing an Analytics UI and APIs for multiple
                  projects.</li>
                </motion.ul>
              </motion.div>}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperienceContainer;
