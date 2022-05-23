import React from 'react';
import { IIntroSpace } from 'Components/Module/API/Interface/Home.interface';

import "./IntroSpace.scss";


const IntroSpace: React.FC<IIntroSpace> = ({
    dir,
    mainSrc,
    worker,
    works,
    title,
    description
}) => {
    return (
        <div className="intro-space-container">
            <div className={`grid-wrapper ${dir === "left" ? "left" : "right"}`}>
                <div className='left'>
                    <img src={dir === "left" ? mainSrc : worker} alt="" />
                </div>
                <div className="right">
                    <img src={dir === "left" ? worker : mainSrc} alt="" />
                </div>

                <div className='work'>
                    <img src={works[0]} alt="" />
                    <span className='title'>{title[0]}</span>
                    <span className='text'>{description[0]}</span>
                </div>
                <div className='work'>
                    <img src={works[1]} alt="" />
                    <span className='title'>{title[1]}</span>
                    <span className='text'>{description[1]}</span>
                </div>
                <div className='work'>
                    <img src={works[2]} alt="" />
                    <span className='title'>{title[2]}</span>
                    <span className='text'>{description[2]}</span>
                </div>
            </div>
        </div>
    );
};

export default IntroSpace;