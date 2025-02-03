import React, { useEffect, useRef } from 'react';
import linkedIn from '../../assets/svg/linkedin.svg';
import { CursorOnEmail, TileCursorColor } from '../../service/eventListener';

const Introduction = (props: any) => {
    const linkedInUrl = 'https://www.linkedin.com/in/balramSingh22/';
    const close = useRef<boolean>(false);

    useEffect(()=> {
        listenAnimationEnd();
        AddCursorColor();
        handleCursorOnEmail();
    }, [])

    useEffect(() => {
        close.current = props.close;
    }, [props.close])

    const listenAnimationEnd = () => {
        var elem = document.getElementById('tile-1');
        elem?.addEventListener('animationend', () => {
            if(elem != undefined){
                elem.style.opacity = !close.current ? '1' : '0';
            }
        });
    }

    const AddCursorColor = () => {
        var tile = document.querySelector('#tile-1');

        var root = document.querySelector(':root');
        if(root){
            var color = getComputedStyle(root).getPropertyValue('--primary-grey');
            if(tile)
                TileCursorColor(color, tile);
        }
    }

    const handleCursorOnEmail = () => {
        CursorOnEmail();
    }

    return (
        <div id='tile-1' className={!props.close ? "tile intro": "tile intro intro--fade-out"}>
            <p className="intro__text">
                I'm Balram, a Web developer from India who's passionate about building beautiful and rich user experiences.
            </p>
            <div className="intro__footer">
                <div className="intro__contact">
                    <div id='email' className="h4 intro__email" onClick={() => window.open('mailto:balramsc1995@gmail.com')}>balramsc1995@gmail.com</div>
                    <span>Available for freelance work</span>
                </div>
                <div className="intro__contact-icons">
                    <button className="btn btn-action" onClick={() => window.open(linkedInUrl)}>
                        <img src={linkedIn} alt="LinkedIn" />
                    </button>
            </div>
            </div>
        </div>
    );
}

export default Introduction;