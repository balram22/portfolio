import React, { useEffect, useRef, useState } from 'react';
import natours from '../../assets/natours.jpg';
import trillio from '../../assets/trillio.jpg';
import nexter from '../../assets/nexter.jpg';
import { resetCursor, TileCursorColor } from '../../service/eventListener';

const Projects = (props: any) => {
    const close = useRef<boolean>(false);

    useEffect(()=> {
        listenAnimationEnd();
        AddCursorColor();
    }, [])

    useEffect(() => {
        close.current = props.close;
    }, [props.close])

    const listenAnimationEnd = () => {
        var elem = document.getElementById('tile-2');
        elem?.addEventListener('animationend', () => {
            if(elem != undefined){
                elem.style.opacity = !close.current ? '1' : '0';
            }
        });
    }

    const AddCursorColor = () => {
        var tile = document.querySelector('#tile-2');

        var root = document.querySelector(':root');
        if(root){
            var color = getComputedStyle(root).getPropertyValue('--primary-orange');
            if(tile)
                TileCursorColor(color, tile);
        }
    }

    const onTileClick = () => {
        resetCursor();
        props.setClose(!close.current, 'project');
    }
    return (
        <div id='tile-2' className={!props.close ? "tile projects" : "tile projects projects--fade-out"} onClick={onTileClick}>
            <div className="projects__title">
                <h2 className='h2 h2--orange'>Projects</h2>
            </div>
            <ul className="projects__list h4">
                <li>Natours</li>
                <li>Trillio</li>
                <li>Nexter</li>
            </ul>
            {/* <div className="projects__images">
                    <img src={trillio} alt="Trillio" className="projects__images--1" />
                    <img src={natours} alt="Natours" className="projects__images--2" />
                    <img src={nexter} alt="Nexter" className="projects__images--3" />
            </div> */}
        </div>
    );
}

export default Projects;