import React, {useEffect, useRef} from 'react';
import bentleySystems from "../../assets/Bentley-Systems.svg";
import snp from "../../assets/SnP-Global.svg";
import { resetCursor, TileCursorColor } from '../../service/eventListener';

const Experience = (props: any) => {
    const close = useRef<boolean>(false);

    useEffect(()=> {
        listenAnimationEnd();
        AddCursorColor();
    }, [])

    useEffect(() => {
        close.current = props.close;
    }, [props.close])

    const listenAnimationEnd = () => {
        var elem = document.getElementById('tile-3');
        elem?.addEventListener('animationend', () => {
            if(elem != undefined){
                elem.style.opacity = !close.current ? '1' : '0';
            }
        });
    }

    const AddCursorColor = () => {
        var tile = document.querySelector('#tile-3');

        var root = document.querySelector(':root');
        if(root){
            var color = getComputedStyle(root).getPropertyValue('--primary-green');
            if(tile)
                TileCursorColor(color, tile);
        }
    }

    const onTileClick = () => {
        resetCursor();
        props.setClose(!close.current, 'experience');
    }

    return (
        <div id='tile-3' className={!props.close ?  "tile experience" : "tile experience experience--fade-out"} onClick={onTileClick}>
            <div className="experience__title">
                <h2 className='h2 h2--green'>Work experience</h2>
            </div>
            <p className="experience__brief h4">
                6+ years of experience as a Web developer and Full Stack developer
            </p>
            <div className='experience__brands'>
                <img src={bentleySystems} alt="Bentley Systems" />
                <img src={snp} alt="S&P Global" />
            </div>
        </div>
    );
}

export default Experience;