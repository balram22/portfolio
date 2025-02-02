import React, { useEffect, useRef, useState } from "react";

const Ratings = (props: any) => {
    const ratingCircles = () => {
        const circles = [];

        for(let i=0 ;i<10 ;i ++){
            circles.push(
                <div className={i+1 <= props.rate ? "ratings__circle ratings__circle--fill": "ratings__circle"}>
                </div>
            )
        }
        return circles;
    }

    return (
        <div className="ratings">
            {ratingCircles()}
        </div>
    );
}

export default Ratings;