import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import IntroSpace from 'Components/Common/IntroSpace/IntroSpace';
import { IHomeContents } from "Components/Module/API/Interface/Home.interface";

import './Home.scss'
import { HomeIntroContents, HomeContents } from "Components/Common/Contents/HomeContents";
import Footer from "Components/Common/Footer/Footer";
import { WindowReload } from "Components/Module/functions";

function Home() {
    // WindowReload();
    return (
        <>
            <div className="home-container">

                <ul className="group">
                    <li className="intro-character">
                        <img className="img" src={HomeIntroContents.image} alt="" />
                    </li>
                    <li className='intro-text'>
                        Hey look,<br></br>
                        We are motion design studio based in Seoul, Korea<br></br>
                        We are specialised in motion graphic, design, illustration and storytelling for brands.<br></br>
                        We will show you the best of creative.<br></br>
                    </li>
                    <li className="intro-video">
                        <img className='video' src={HomeIntroContents.video} alt=""></img>
                    </li>
                </ul>

                {/* <IntroSpace
                    dir={"left"}
                    mainSrc={main1}
                    worker={worker1}
                    works={[worker1work1, worker1work2, worker1work3]}
                    title={[
                        "Artificial City",
                        "DR.BRAIN",
                        "Digi-LOCA"
                    ]}
                    description={[
                        "TZ is the owner of Loocreative. It contains a description of TZ...",
                        "Loocreative. It contains a description of TZ and a description ",
                        "the owner of Loocreative. It contains a description of TZ and..."
                    ]}
                /> */}


                {HomeContents.map((value: IHomeContents, index: number) =>
                    <IntroSpace
                        key={"home_contents_" + index}
                        dir={((index % 2) === 0) ? "left" : "right"}
                        mainSrc={value.main}
                        worker={value.worker}
                        works={value.work}
                        title={value.title}
                        description={value.description}
                    />
                )}
                <div style={{ width: "100%", height: "130px" }}></div>
                <Footer />
            </div>
        </>
    )
}

export default Home;